import { useState, useEffect } from "react";

export default function SimpleEffectCheck() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  // Runs on mount AND every time `count` changes
  useEffect(() => {
    setMessage(`useEffect ran! Count changed to ${count}`);
  },[count]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click to Trigger useEffect
      </button>
      <p style={{ color: "green", fontWeight: "bold" }}>{message}</p>
    </div>
  );
}