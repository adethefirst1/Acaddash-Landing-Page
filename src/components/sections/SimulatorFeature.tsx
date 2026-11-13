"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { InteractiveSimulator } from "@/components/phone/interactive/InteractiveSimulator";
import { Feasibility } from "@/lib/cgpa";

const FACTS = [
  "See what each course needs from you",
  "Compare plans without changing your records",
  "Know early when a target is out of reach",
];

export function SimulatorFeature() {
  const [liveState, setLiveState] = useState<{
    projectedCgpa: number;
    requiredAvg: number;
    status: Feasibility;
  }>({
    projectedCgpa: 4.33,
    requiredAvg: 4.64,
    status: "Within reach",
  });

  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="simulator"
      className="py-20 sm:py-28 lg:py-[110px] px-6 sm:px-12 lg:px-20 bg-white text-navy overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-[90px]">
        {/* Right on desktop: Text Column (max-w-[470px]) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:max-w-[470px]"
        >
          <span className="font-heading font-semibold text-xs tracking-wider uppercase text-teal block mb-2">
            Goal simulator
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[46px] leading-[1.08] tracking-[-0.035em] text-navy mb-4">
            Set the CGPA. We find the grades.
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed mb-8">
            Choose the result you want, then try grades in every course and watch your projected CGPA move in real time, before the exams.
          </p>

          {/* Facts list */}
          <ul className="flex flex-col gap-3.5">
            {FACTS.map((fact) => (
              <li key={fact} className="flex items-center gap-3 text-sm sm:text-base text-navy/90">
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

        {/* Left on desktop: Phone Stage (520 x 700) */}
        <div className="relative w-full lg:w-[520px] min-h-[580px] lg:h-[700px] flex items-center justify-center">
          {/* Radial teal glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full bg-[radial-gradient(circle,rgba(231,241,240,0.85)_0%,rgba(76,195,187,0.18)_40%,transparent_70%)] blur-2xl -z-0"
          />

          {/* Desktop Callout 1: Live updates indicator */}
          <div
            aria-hidden="true"
            className="hidden md:flex items-center gap-2 text-left absolute -left-6 lg:-left-12 top-28 bg-white rounded-[18px] px-4 py-3 border border-[#E6ECF1] shadow-[0_16px_36px_rgba(20,45,70,0.08)] float-bob-left z-20 select-none"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-teal animate-pulse" />
            <span className="text-xs font-semibold text-navy">
              Live: updates as you tap
            </span>
          </div>

          {/* Desktop Callout 2: Required average needed */}
          <div
            aria-hidden="true"
            className="hidden md:flex flex-col text-left absolute -right-6 lg:-right-10 bottom-32 bg-white rounded-[18px] px-4 py-3 border border-[#E6ECF1] shadow-[0_16px_36px_rgba(20,45,70,0.08)] float-bob-right z-20 select-none min-w-[170px]"
          >
            <span className="text-[10px] text-muted font-medium uppercase tracking-wider">
              Remaining Target
            </span>
            <span className="font-heading font-bold text-[22px] text-navy leading-tight my-0.5 tabular-nums">
              {liveState.requiredAvg.toFixed(2)} average
            </span>
            <span className="text-[11px] font-semibold text-teal">
              needed after this semester
            </span>
          </div>

          {/* Phone container with gentle bobbing */}
          <div className="relative z-10 float-bob-right">
            <InteractiveSimulator
              onStateChange={setLiveState}
              scale={1.12}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
