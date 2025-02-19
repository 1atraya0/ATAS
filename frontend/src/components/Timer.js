import React, { useState, useEffect } from 'react';

const Timer = ({ initialMinutes }) => {
  const [time, setTime] = useState(initialMinutes * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return <span>{formatTime(time)}</span>;
};

export default Timer; 