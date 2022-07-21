import React, { useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
  }, [timerOn]);

  return (
    <div>
      <h1>{time}</h1>
      <button
        onClick={() => {
          setTimerOn(true);
        }}
      >
        start
      </button>
      <button
        onClick={() => {
          setTimerOn(false);
        }}
      >
        stop
      </button>
      <button
        onClick={() => {
          setTimerOn(true);
        }}
      >
        resume
      </button>
      <button
        onClick={() => {
          setTime(0);
        }}
      >
        clear
      </button>
    </div>
  );
};

export default App;
