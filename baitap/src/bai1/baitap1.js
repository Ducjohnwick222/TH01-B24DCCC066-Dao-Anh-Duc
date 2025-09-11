import React, { useState } from "react";

function NumberDisplay(props) {
  return (
    <div>
      <h2>Giá trị hiện tại: {props.number}</h2>
    </div>
  );
}

function Counter() {
  const [number, setNumber] = useState(0);

  const increment = () => setNumber(prev => prev + 1);
  const decrement = () => setNumber(prev => prev - 1);

  return (
    <div>
      <NumberDisplay number={number} />
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
