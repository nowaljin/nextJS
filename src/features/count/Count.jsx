"use client";

import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <p className="count">カウント：{count}</p>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>UP</button>
        <button onClick={() => count > 0 && setCount(count - 1)}>DOWN</button>
        <button className="reset" onClick={() => setCount(0)}>RESET</button>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          font-family: sans-serif;
          gap: 20px;
        }

        .count {
          font-size: 24px;
          font-weight: bold;
        }

        .buttons {
          display: flex;
          gap: 12px;
        }

        button {
          padding: 10px 18px;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          background-color: #4f46e5;
          color: white;
          transition: transform 0.1s, background-color 0.2s;
        }

        button:hover {
          background-color: #4338ca;
          transform: scale(1.05);
        }

        .reset {
          background-color: #ef4444;
        }

        .reset:hover {
          background-color: #dc2626;
        }
      `}</style>
    </div>
  );
};

export default Count;
