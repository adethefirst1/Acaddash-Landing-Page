"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { SAMPLE_PLANNER } from "@/lib/sampleData";

export interface PlannerScreenProps {
  animateIn?: boolean;
}

export function PlannerScreen({ animateIn = true }: PlannerScreenProps) {
  const { title, tag, completedUnits, totalUnits, status, years } =
    SAMPLE_PLANNER;

  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col gap-2.5">
      {/* Header */}
      <div className="flex items-center justify-between pt-1">
        <div>
          <span className="text-[11px] text-muted block leading-none">
            Your path
          </span>
          <span className="font-heading font-bold text-[20px] text-navy tracking-tight leading-tight">
            {title}
          </span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-mint text-teal font-medium text-[10px]">
          {tag}
        </span>
      </div>

      {/* Progress Card */}
      <div className="bg-white rounded-[20px] border border-[#E6ECF1] p-3.5 shadow-xs flex items-center gap-3.5">
        {/* Progress Ring (96/150 = 64%) */}
        <div className="relative w-[64px] h-[64px] shrink-0 flex items-center justify-center">
          <svg
            width="64"
            height="64"
            viewBox="0 0 68 68"
            className="rotate-[-90deg] -scale-y-100"
          >
            <circle
              cx="34"
              cy="34"
              r="28"
              stroke="#E7F1F0"
              strokeWidth="6"
              fill="none"
            />
            <circle
              cx="34"
              cy="34"
              r="28"
              stroke="#187F79"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="175.93"
              className={animateIn ? "progress-ring-animate" : ""}
              style={{
                strokeDashoffset: animateIn ? undefined : "63.33",
              }}
            />
          </svg>
        </div>

        {/* Units and Status */}
        <div className="flex-1">
          <span className="text-[10px] text-muted font-medium block leading-none">
            Units completed
          </span>
          <div className="my-1">
            <span className="font-heading font-bold text-[26px] text-navy tracking-tight leading-none">
              {completedUnits}
            </span>
            <span className="text-[13px] text-muted font-normal ml-1">
              / {totalUnits}
            </span>
          </div>
          <div>
            <span className="inline-block px-2 py-0.5 rounded-full bg-mint text-teal font-medium text-[10px]">
              {status}
            </span>
          </div>
        </div>
      </div>

      {/* Degree Stepper Card */}
      <div className="bg-white rounded-[20px] border border-[#E6ECF1] p-3.5 shadow-xs">
        <div className="flex flex-col gap-3.5 relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[9px] top-2 bottom-3 w-[2px] bg-[#E6ECF1] -z-0" />

          {years.map((step, idx) => {
            const itemDelay = idx * 0.15;

            return (
              <motion.div
                key={step.year}
                initial={
                  shouldReduceMotion || !animateIn
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -8 }
                }
                animate={
                  animateIn
                    ? { opacity: 1, x: 0 }
                    : { opacity: 1, x: 0 }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.45, delay: itemDelay, ease: "easeOut" }
                }
                className="flex items-start gap-3 relative z-10"
              >
                {/* Step indicator */}
                {step.status === "done" && (
                  <div className="w-5 h-5 rounded-full bg-teal text-white flex items-center justify-center shrink-0 shadow-xs">
                    <svg
                      width="10"
                      height="10"
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
                )}

                {step.status === "current" && (
                  <div className="w-5 h-5 rounded-full border-[2.5px] border-navy bg-white ring-4 ring-navy/10 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-navy" />
                  </div>
                )}

                {step.status === "future" && (
                  <div className="w-5 h-5 rounded-full border-2 border-[#CBD5E1] bg-white flex items-center justify-center shrink-0" />
                )}

                {/* Step content */}
                <div className="flex-1 leading-tight pt-0.5">
                  <div className="font-heading font-bold text-[12px] text-navy flex items-center gap-1.5">
                    {step.label}
                  </div>
                  <div className="text-[10px] text-muted">
                    {step.gpaText} · {step.unitsText}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
