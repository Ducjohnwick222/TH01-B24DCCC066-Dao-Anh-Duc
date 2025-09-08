import React, { useState, useEffect } from "react";

function ClockDisplay({ time }) {
  return <h2>{time}</h2>;
}

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Đồng hồ hiện tại:</h1>
      <ClockDisplay time={time} />
    </div>
  );
}

export default Clock;
