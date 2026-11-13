"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Phone } from "@/components/phone/Phone";
import { HomeScreen } from "@/components/phone/screens/HomeScreen";
import { APP_URL } from "@/lib/config";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Motion variants with conditional reduced motion
  const fadeUpVariant = (delay: number) => ({
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
    },
  });

  const phoneRiseVariant = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { duration: 0.85, delay: 0.55, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 md:pt-36 bg-gradient-to-b from-bg via-bg to-white border-b border-border/40">
      {/* Soft radial mint/teal glow centered behind the phone */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[720px] lg:w-[900px] h-[520px] sm:h-[720px] lg:h-[900px] rounded-full bg-[radial-gradient(circle,rgba(231,241,240,0.85)_0%,rgba(76,195,187,0.18)_35%,rgba(246,248,250,0)_70%)] blur-2xl -z-10"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Mint audience pill */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant(0.1)}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-mint text-navy font-medium text-xs sm:text-sm shadow-xs border border-teal/15 mb-6 select-none"
        >
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
          <span>For every Nigerian university student</span>
        </motion.div>

        {/* H1 Heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant(0.2)}
          className="font-heading font-bold text-[44px] sm:text-[68px] md:text-[88px] lg:text-[104px] text-navy leading-[0.94] tracking-[-0.045em] sm:tracking-[-0.05em] max-w-5xl mx-auto"
        >
          <span className="block">Your Academics,</span>
          <span className="block text-teal">On Board.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant(0.3)}
          className="text-muted text-[17px] sm:text-[19px] lg:text-[22px] max-w-[620px] mx-auto mt-6 mb-8 leading-relaxed font-normal"
        >
          Simulate your semester, track every unit, and know the exact grades you need to be on top.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant(0.4)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          <Button href={APP_URL} variant="primary" size="md" className="w-full sm:w-auto px-7 py-3 text-sm">
            Get the app
          </Button>
          <Button href="#calculator" variant="ghost" size="md" className="w-full sm:w-auto text-sm">
            See how it works ↓
          </Button>
        </motion.div>

        {/* Phone Mockup Area */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={phoneRiseVariant}
          className="relative max-w-[340px] md:max-w-[420px] mx-auto flex justify-center"
        >
          {/* Desktop Floating Card Left: Projected CGPA 4.34 */}
          <div
            aria-hidden="true"
            className="hidden md:flex flex-col text-left absolute -left-28 lg:-left-36 top-16 bg-white rounded-[18px] px-4 py-3 border border-[#E6ECF1] shadow-[0_16px_36px_rgba(20,45,70,0.08)] float-bob-left z-20 select-none min-w-[155px]"
          >
            <span className="text-[11px] text-muted font-medium">
              Projected CGPA
            </span>
            <span className="font-heading font-bold text-[24px] text-navy leading-tight my-0.5">
              4.34
            </span>
            <span className="text-[11px] font-semibold text-teal flex items-center gap-1">
              ▲ 0.09 this semester
            </span>
          </div>

          {/* Desktop Floating Card Right: Target 4.40 */}
          <div
            aria-hidden="true"
            className="hidden md:flex flex-col text-left absolute -right-24 lg:-right-32 top-28 bg-white rounded-[18px] px-4 py-3 border border-[#E6ECF1] shadow-[0_16px_36px_rgba(20,45,70,0.08)] float-bob-right z-20 select-none min-w-[140px]"
          >
            <span className="text-[11px] text-muted font-medium">Target</span>
            <span className="font-heading font-bold text-[24px] text-navy leading-tight my-0.5">
              4.40
            </span>
            <span className="text-[11px] font-semibold text-teal">
              Within reach
            </span>
          </div>

          {/* Phone Frame: Scaled on desktop, cropped at bottom, faded with CSS mask on mobile */}
          <div className="relative overflow-hidden h-[420px] sm:h-[480px] md:h-[540px] flex justify-center w-full [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)] md:[mask-image:none] md:[-webkit-mask-image:none]">
            {/* Desktop Scaled Phone */}
            <div className="hidden md:block">
              <Phone active="home" scale={1.28}>
                <HomeScreen />
              </Phone>
            </div>

            {/* Mobile / Tablet Scaled Phone (1.0 scale) */}
            <div className="block md:hidden">
              <Phone active="home" scale={1.0}>
                <HomeScreen />
              </Phone>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
