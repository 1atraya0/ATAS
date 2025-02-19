import React, { useState } from 'react';
import './App.css';
import Loader from './components/Loader';
import ApiKeyGenerator from './components/ApiKeyGenerator';
import Timer from './components/Timer';

function App() {
  const [selectedModel, setSelectedModel] = useState('model1');
  const [tokenValue, setTokenValue] = useState('1500');
  const [loading, setLoading] = useState(false);
  const [apiKeys, setApiKeys] = useState([]);

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const handleTokenChange = (event) => {
    setTokenValue(event.target.value);
  };

  const handleGenerate = (newKey) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const updatedKeys = [...apiKeys, newKey];
      setApiKeys(updatedKeys);
      localStorage.setItem('apiKeys', JSON.stringify(updatedKeys));
    }, 2000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="logo">ATAS</h1>
        <h2>
          AI-powered adaptive token auth to{' '}
          <span className="typing-text">&nbsp;block scrapers, secure keys, and stop abuse.</span>
        </h2>
      </header>
      <div className="main-content">
        <div className="input-group">
          <label>select model : </label>
          <select className="model-select" value={selectedModel} onChange={handleModelChange}>
            <option value="model1">model 1</option>
            <option value="model2">model 2</option>
            <option value="model3">model 3</option>
            <option value="model4">model 4</option>
          </select>
        </div>
        <div className="input-group">
          <label>token required : </label>
          <input
            type="text"
            value={tokenValue}
            onChange={handleTokenChange}
            className="token-input"
          />
        </div>
        <ApiKeyGenerator
          selectedModel={selectedModel}
          tokenValue={tokenValue}
          onGenerate={handleGenerate}
        />
        {loading && <Loader />}
      </div>
      <div className="table-container">
        <table className="api-table">
          <thead>
            <tr>
              <th>model</th>
              <th>token</th>
              <th>api key</th>
              <th>access given</th>
              <th>time allocated (min)</th>
              <th>IP address</th>
            </tr>
          </thead>
          <tbody>
            {apiKeys.map((key, index) => (
              <tr key={index}>
                <td>{key.model}</td>
                <td>{key.token}</td>
                <td>{key.apiKey}</td>
                <td>{key.access}</td>
                <td><Timer initialMinutes={key.time} /></td>
                <td>{key.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;