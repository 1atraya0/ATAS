import React from 'react';
import IpAddress from './IpAddress';
// import Timer from './Timer';

const ApiKeyGenerator = ({ selectedModel, tokenValue, onGenerate }) => {
  const generateRandomKey = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  const generateRandomAccess = () => {
    return Math.random() < 0.5 ? 'yes ✅ ' : 'no 🚫';
  };

  const generateRandomTime = () => {
    const min = 30; // 30 minutes
    const max = 90; // 1.5 hours
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleGenerate = () => {
    const newKey = {
      model: selectedModel,
      token: tokenValue,
      apiKey: generateRandomKey(),
      access: generateRandomAccess(),
      time: generateRandomTime(),
      ip: <IpAddress />
    };
    onGenerate(newKey);
  };

  return (
    <button className="generate-button" onClick={handleGenerate}>
      Generate API key
    </button>
  );
};

export default ApiKeyGenerator; 