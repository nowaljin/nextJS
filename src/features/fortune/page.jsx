"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const fortunes = [
  { text: "大吉", desc: "最高の運気！思い切って挑戦しよう。", color: "bg-emerald-500" },
  { text: "中吉", desc: "安定した良い運気。コツコツが吉。", color: "bg-sky-500" },
  { text: "中吉", desc: "人との縁が運を運ぶ日。", color: "bg-sky-500" },
  { text: "吉", desc: "小さな幸せが積み重なる。", color: "bg-amber-500" },
  { text: "吉", desc: "焦らず進めば結果が出る。", color: "bg-amber-500" },
  { text: "吉", desc: "準備してきたことが活きる。", color: "bg-amber-500" },
  { text: "凶", desc: "慎重に。今日は無理しないで。", color: "bg-rose-500" },
];

export default function Fortune() {
  const [result, setResult] = useState(null);
  const [drawing, setDrawing] = useState(false);

  const draw = () => {
    setDrawing(true);
    setResult(null);
    setTimeout(() => {
      const index = Math.floor(Math.random() * fortunes.length);
      setResult(fortunes[index]);
      setDrawing(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 to-red-100 p-6">
      <div className="w-full max-w-md">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-6"
        >
          おみくじ 
        </motion.h2>

        {/* Shrine Box */}
        <div className="relative mx-auto mb-6 w-64 h-40 rounded-2xl bg-amber-800 shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-700 to-amber-900" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <AnimatePresence>
              {drawing ? (
                <motion.div
                  key="shake"
                  initial={{ x: 0 }}
                  animate={{ x: [0, -8, 8, -8, 8, 0] }}
                  transition={{ duration: 1.2 }}
                  className="text-white text-lg"
                >
                  シャカシャカ…
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-white text-sm"
                >
                  箱を振って運勢を引こう
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Result Paper */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`mx-auto mb-6 w-56 rounded-xl shadow-lg text-white ${result.color}`}
            >
              <div className="p-4 text-center">
                <div className="text-4xl font-extrabold mb-2">{result.text}</div>
                <p className="text-sm opacity-90">{result.desc}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col items-center gap-3">
          <button
            onClick={draw}
            disabled={drawing}
            className="px-6 py-3 rounded-full bg-red-600 text-white font-semibold shadow-md hover:bg-red-700 disabled:opacity-60"
          >
            {drawing ? "占い中…" : "占う"}
          </button>

          <Link href="/" className="text-sm text-gray-600 hover:underline">
            戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
