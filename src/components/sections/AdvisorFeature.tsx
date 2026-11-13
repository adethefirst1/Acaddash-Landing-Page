"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { InteractiveAdvisor } from "@/components/phone/interactive/InteractiveAdvisor";

const FACTS = [
  "Clear explanations, no jargon",
  "Advice based on your actual results",
  "Built for how Nigerian universities grade",
];

export function AdvisorFeature() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="advisor"
      ref={sectionRef}
      className="py-20 sm:py-28 lg:py-[110px] px-6 sm:px-12 lg:px-20 bg-navy-deep text-white overflow-hidden scroll-mt-20"
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
          <span className="font-heading font-semibold text-xs tracking-wider uppercase text-teal-bright block mb-2">
            Course advisor
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[46px] leading-[1.08] tracking-[-0.035em] text-white mb-4">
            The answers nobody gave you in first year.
          </h2>
          <p className="text-[#A9BBCB] text-base sm:text-lg leading-relaxed mb-8">
            Ask in plain words. From how GPA works to what to aim for next semester, the advisor answers using your own numbers.
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

        {/* Left on desktop: Phone Stage (520 x 700) */}
        <div className="relative w-full lg:w-[520px] min-h-[580px] lg:h-[700px] flex items-center justify-center">
          {/* Radial teal glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full bg-[radial-gradient(circle,rgba(76,195,187,0.22)_0%,rgba(15,34,54,0)_70%)] blur-2xl -z-0"
          />

          {/* Desktop Callout: Ask anything, any time (hidden below 1024px) */}
          <div
            aria-hidden="true"
            style={{ animationPlayState: isInView ? "running" : "paused" }}
            className="hidden lg:flex items-center gap-2 text-left absolute -left-6 lg:-left-12 top-28 bg-white rounded-[18px] px-4 py-3 border border-[#E6ECF1] shadow-[0_16px_36px_rgba(11,27,43,0.28)] float-bob-left z-20 select-none"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-teal" />
            <span className="text-xs font-semibold text-navy">
              Ask anything, any time
            </span>
          </div>

          {/* Phone container with gentle bobbing, paused when offscreen */}
          <div
            role="region"
            aria-label="Interactive academic advisor demo"
            style={{ animationPlayState: isInView ? "running" : "paused" }}
            className="relative z-10 float-bob-right"
          >
            <InteractiveAdvisor scale={1.12} />
          </div>
        </div>
      </div>
    </section>
  );
}

