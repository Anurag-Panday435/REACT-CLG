import React, { useState } from "react";
import "./Counter.css";
import Home from "./Home";

const Todo = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1 className="title">Counter App</h1>

        <h2 className="count">{count}</h2>

        <div className="btn-group">
          <button className="btn" onClick={increment}>
            +
          </button>

          <button className="btn" onClick={decrement}>
            -
          </button>

          <button className="btn reset-btn" onClick={reset}>
            Reset
          </button>
        </div>

        <Home count={count} />
      </div>
    </div>
  );
};

export default Counter;