"use client";

import { useState } from "react";
import Link from "next/link";

const Fortune = () => {
  const resultArray = [
    "大吉",
    "中吉",
    "中吉",
    "吉",
    "吉",
    "吉",
    "凶",
  ];

  const [resultText, setResultText] = useState("");

  const getResult = () => {
    const index = parseInt(Math.random() * 7);
    setResultText(resultArray[index]);
  };

  return (
    <>
      <h2>おみくじ</h2>

      <p>
        結果は <strong>{resultText}</strong> です
      </p>

      <button onClick={getResult}>占う</button>

      <br /><br />

      <Link href="/">戻る</Link>
    </>
  );
};

export default Fortune;
