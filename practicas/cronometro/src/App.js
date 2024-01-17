import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <div className="timer">Timer {time} segs</div>
      <div className="button-container">
        <button style={{ backgroundColor: '#2ecc71', color: '#fff' }} onClick={handleStart}>
          Start
        </button>
        <button style={{ backgroundColor: '#e74c3c', color: '#fff' }} onClick={handleStop}>
          Stop
        </button>
        <button style={{ backgroundColor: '#3498db', color: '#fff' }} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
