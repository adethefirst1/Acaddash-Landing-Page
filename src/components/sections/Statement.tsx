"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "motion/react";

interface WordItem {
  text: string;
  isBold?: boolean;
}

const WORDS: WordItem[] = [
  { text: "Most" },
  { text: "students" },
  { text: "find" },
  { text: "out" },
  { text: "where" },
  { text: "they" },
  { text: "stand" },
  { text: "after", isBold: true },
  { text: "the" },
  { text: "semester" },
  { text: "is" },
  { text: "over." },
  { text: "Acaddash" },
  { text: "shows" },
  { text: "you" },
  { text: "while", isBold: true },
  { text: "you", isBold: true },
  { text: "can", isBold: true },
  { text: "still", isBold: true },
  { text: "change", isBold: true },
  { text: "it.", isBold: true },
];

function Word({
  word,
  progress,
  start,
  end,
  shouldReduceMotion,
}: {
  word: WordItem;
  progress: MotionValue<number>;
  start: number;
  end: number;
  shouldReduceMotion: boolean | null;
}) {
  const color = useTransform(
    progress,
    [start, end],
    ["#B4C0CC", "#142D46"]
  );

  if (shouldReduceMotion) {
    return (
      <span
        className={`inline-block mr-[0.28em] ${
          word.isBold ? "font-bold text-navy" : "text-navy"
        }`}
      >
        {word.text}
      </span>
    );
  }

  return (
    <motion.span
      style={{ color }}
      className={`inline-block mr-[0.28em] transition-colors duration-75 ${
        word.isBold ? "font-bold" : "font-semibold"
      }`}
    >
      {word.text}
    </motion.span>
  );
}

export function Statement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.45"],
  });

  const totalWords = WORDS.length;

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-32 md:py-44 px-6 bg-bg flex items-center justify-center select-none"
      aria-label="Statement"
    >
      <div className="max-w-[1020px] mx-auto text-center font-heading font-semibold text-[30px] sm:text-[44px] md:text-[52px] lg:text-[58px] leading-[1.14] tracking-[-0.035em]">
        <p className="flex flex-wrap justify-center">
          {WORDS.map((w, i) => {
            const start = i / totalWords;
            const end = (i + 1) / totalWords;
            return (
              <Word
                key={i}
                word={w}
                progress={scrollYProgress}
                start={start}
                end={end}
                shouldReduceMotion={shouldReduceMotion}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
}
