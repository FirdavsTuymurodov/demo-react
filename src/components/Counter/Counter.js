import React, { useState } from "react";
import style from "./Counter.module.css";

const Counter = () => {
  let [count, setCount] = useState(0);
  return (
    <div className={style.counter}>
      <button onClick={() => setCount(--count)}>-</button>
      <span>{count}</span>

      <button onClick={() => setCount(++count)}>+</button>
    </div>
  );
};

export default Counter;
