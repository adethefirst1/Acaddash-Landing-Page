"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { InteractiveHome } from "@/components/phone/interactive/InteractiveHome";

const FACTS = [
  "Every unit and grade in one place",
  "Semester GPA and CGPA, calculated for you",
  "Your classification, at a glance",
];

export function CalculatorFeature() {
  const [liveState, setLiveState] = useState({
    cgpa: 4.25,
    degreeClass: "Second Class Upper",
  });

  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="calculator"
      className="py-20 sm:py-28 lg:py-[110px] px-6 sm:px-12 lg:px-20 bg-navy-deep text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[90px]">
        {/* Left: Text Column (max-w-[470px]) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:max-w-[470px]"
        >
          <span className="font-heading font-semibold text-xs tracking-wider uppercase text-teal-bright block mb-2">
            CGPA calculator
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[46px] leading-[1.08] tracking-[-0.035em] text-white mb-4">
            Know where you stand. Always.
          </h2>
          <p className="text-subtle text-base sm:text-lg leading-relaxed mb-8">
            Add your courses once. Your semester GPA and cumulative CGPA stay up to date, with your class of degree shown beside them.
          </p>

          {/* Facts list */}
          <ul className="flex flex-col gap-3.5">
            {FACTS.map((fact) => (
              <li key={fact} className="flex items-center gap-3 text-sm sm:text-base text-white/90">
                <div className="w-5 h-5 rounded-full bg-teal text-white flex items-center justify-center shrink-0 shadow-xs">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="2 6 5 9 10 3" />
                  </svg>
                </div>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right: Phone Stage (520 x 700 on desktop) */}
        <div className="relative w-full lg:w-[520px] min-h-[580px] lg:h-[700px] flex items-center justify-center">
          {/* Radial teal glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full bg-[radial-gradient(circle,rgba(76,195,187,0.22)_0%,rgba(15,34,54,0)_70%)] blur-2xl -z-0"
          />

          {/* Desktop Callout 1: Live CGPA & Class */}
          <div
            aria-hidden="true"
            className="hidden md:flex flex-col text-left absolute -left-6 lg:-left-12 top-24 bg-white rounded-[18px] px-4 py-3 border border-[#E6ECF1] shadow-[0_16px_36px_rgba(11,27,43,0.28)] float-bob-left z-20 select-none min-w-[150px]"
          >
            <span className="text-[10px] text-muted font-medium uppercase tracking-wider">
              Live CGPA
            </span>
            <span className="font-heading font-bold text-[24px] text-navy leading-tight my-0.5 tabular-nums">
              {liveState.cgpa.toFixed(2)}
            </span>
            <span className="text-[11px] font-semibold text-teal truncate">
              {liveState.degreeClass}
            </span>
          </div>

          {/* Desktop Callout 2: Units logged */}
          <div
            aria-hidden="true"
            className="hidden md:flex flex-col text-left absolute -right-6 lg:-right-10 bottom-32 bg-white rounded-[18px] px-4 py-3 border border-[#E6ECF1] shadow-[0_16px_36px_rgba(11,27,43,0.28)] float-bob-right z-20 select-none min-w-[135px]"
          >
            <span className="text-[10px] text-muted font-medium uppercase tracking-wider">
              Degree Units
            </span>
            <span className="font-heading font-bold text-[20px] text-navy leading-tight my-0.5">
              96 units logged
            </span>
            <span className="text-[11px] font-semibold text-teal">
              5 semesters
            </span>
          </div>

          {/* Phone container with gentle bobbing */}
          <div className="relative z-10 float-bob-left">
            <InteractiveHome
              onStateChange={setLiveState}
              scale={1.12}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

