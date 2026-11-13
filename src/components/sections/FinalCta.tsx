"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/config";

export function FinalCta() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="download"
      className="relative py-[100px] lg:py-[140px] px-6 bg-navy-deep text-white text-center overflow-hidden border-t border-navy scroll-mt-20"
      aria-label="Download Acaddash"
    >
      {/* Large soft radial teal-bright glow centered behind text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[750px] lg:w-[900px] h-[400px] sm:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(76,195,187,0.24)_0%,rgba(15,34,54,0)_70%)] blur-3xl -z-0"
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Animated H2 Headline on two lines */}
        <motion.h2
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-bold text-[44px] sm:text-[64px] lg:text-[84px] text-white leading-[1.0] tracking-[-0.04em]"
        >
          <span className="block">Your best semester</span>
          <span className="block">starts with a plan.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#A9BBCB] text-base sm:text-lg lg:text-xl font-normal mt-5 mb-9 max-w-xl"
        >
          Built for university students across Nigeria, wherever you study.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button
            href={APP_URL}
            variant="teal"
            size="md"
            className="px-8 py-3.5 text-base font-semibold shadow-lg"
          >
            Get the app
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

