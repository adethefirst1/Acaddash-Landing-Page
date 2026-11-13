"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "motion/react";

const FACTS = [
  "Skips what doesn't apply to you yet",
  "Learn the system before your first result",
  "Set a goal and see what it takes",
];

export function NewStudents() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="new-students"
      ref={sectionRef}
      className="pt-20 sm:pt-24 lg:pt-[130px] pb-16 sm:pb-24 lg:pb-[120px] px-6 sm:px-12 lg:px-20 bg-white text-navy overflow-hidden scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[90px]">
        {/* Left on desktop: Illustration Container */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center">
          {/* Main 480px (300px mobile) Mint Circle */}
          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[480px] lg:h-[480px] rounded-full bg-mint flex items-center justify-center">
            {/* Thin dashed teal-tinted rotating ring (inset -18px) */}
            <div
              aria-hidden="true"
              style={{ animationPlayState: isInView ? "running" : "paused" }}
              className="absolute -inset-3 sm:-inset-4 lg:-inset-[18px] rounded-full border border-dashed border-teal/35 pointer-events-none spin-slow"
            />

            {/* Illustration bobbing gently (6s) */}
            <div
              style={{ animationPlayState: isInView ? "running" : "paused" }}
              className="relative z-10 float-bob-left flex items-center justify-center"
            >
              <Image
                src="/illustrations/education.svg"
                alt="A student at a desk working toward a goal"
                width={420}
                height={420}
                className="w-[262px] sm:w-[340px] lg:w-[420px] h-auto object-contain select-none"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Right on desktop: Text Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-heading font-semibold text-xs tracking-wider uppercase text-teal block mb-2">
              For new students
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl lg:text-[60px] text-navy leading-[1.08] tracking-[-0.035em] mb-5">
              Just started? You don&apos;t need a CGPA yet.
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              A simpler start for first-years: no questions about units you haven&apos;t taken, a clear explanation of GPA and CGPA, and a target to aim at from day one.
            </p>
          </motion.div>

          {/* Three teal-check facts fading in one after another */}
          <ul className="flex flex-col gap-4">
            {FACTS.map((fact, index) => (
              <motion.li
                key={fact}
                initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.5, delay: index * 0.15, ease: "easeOut" }
                }
                className="flex items-center gap-3 text-sm sm:text-base text-navy font-medium"
              >
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
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

