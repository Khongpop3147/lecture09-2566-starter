"use client"
// let count = 0
import { useState } from "react";

export default function CounterPage() {

  const [count,setCount] = useState(0);
  const increaseBtnOnclick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button className="btn btn-primary"onClick={increaseBtnOnclick}>
        Increase
        </button>
        
    </div>
  );
}
