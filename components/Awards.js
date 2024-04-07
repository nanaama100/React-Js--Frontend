import React, { useState, useEffect } from 'react';
import './Awards.css';

const TimerComponent = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("April 19, 2024") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="timer-container">
      <h1 className="timer">
        Countdown Timer: <br/>
        {timerComponents.length ? timerComponents : <span>Today's the Event!
            You cannot afford to miss</span>}
      </h1>
    </div>

  );
};

export default TimerComponent;
