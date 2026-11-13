"use client";

import React, { useState, useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import { Phone } from "@/components/phone/Phone";
import { HomeScreen } from "@/components/phone/screens/HomeScreen";
import { SAMPLE_STUDENT, Course } from "@/lib/sampleData";
import { cgpa, degreeClass, formatGpa } from "@/lib/cgpa";

export interface InteractiveHomeProps {
  onStateChange?: (data: { cgpa: number; degreeClass: string }) => void;
  scale?: number;
  className?: string;
}

const GRADE_CYCLE: Record<string, "A" | "B" | "C" | "D" | "E"> = {
  A: "B",
  B: "C",
  C: "D",
  D: "E",
  E: "A",
};

export function InteractiveHome({
  onStateChange,
  scale = 1,
  className = "",
}: InteractiveHomeProps) {
  const [courses, setCourses] = useState<Course[]>(
    SAMPLE_STUDENT.currentSemesterCourses
  );
  const [hasInteracted, setHasInteracted] = useState(false);

  // Initial CGPA calculation: prior 358 points over 85 units
  const targetCgpaNum = cgpa(358, 85, courses);
  const currentDegreeClass = degreeClass(targetCgpaNum);

  // Smooth numeric counter over ~400ms
  const [displayValue, setDisplayValue] = useState(targetCgpaNum);
  const displayValueRef = useRef(displayValue);

  useEffect(() => {
    displayValueRef.current = displayValue;
  }, [displayValue]);

  const animRef = useRef<number | null>(null);
  const startValRef = useRef(targetCgpaNum);
  const targetValRef = useRef(targetCgpaNum);
  const startTimeRef = useRef<number | null>(null);

  const shouldReduceMotion = useReducedMotion();
  const effectiveDisplayValue = shouldReduceMotion ? targetCgpaNum : displayValue;

  useEffect(() => {
    if (shouldReduceMotion) return;

    targetValRef.current = targetCgpaNum;
    startValRef.current = displayValueRef.current;
    startTimeRef.current = null;

    const animateNumber = (time: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = time;
      }
      const elapsed = time - startTimeRef.current;
      const progress = Math.min(elapsed / 400, 1);
      // ease-out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current =
        startValRef.current + (targetValRef.current - startValRef.current) * ease;
      setDisplayValue(current);

      if (progress < 1) {
        animRef.current = requestAnimationFrame(animateNumber);
      }
    };

    animRef.current = requestAnimationFrame(animateNumber);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [targetCgpaNum, shouldReduceMotion]);

  // Notify parent of state changes
  useEffect(() => {
    onStateChange?.({
      cgpa: targetCgpaNum,
      degreeClass: currentDegreeClass,
    });
  }, [targetCgpaNum, currentDegreeClass, onStateChange]);

  const handleGradeCycle = (code: string) => {
    setHasInteracted(true);
    setCourses((prev) =>
      prev.map((c) => {
        if (c.code === code) {
          return {
            ...c,
            grade: GRADE_CYCLE[c.grade] || "A",
          };
        }
        return c;
      })
    );
  };

  return (
    <div className={`flex flex-col items-center ${className}`.trim()}>
      <Phone active="home" scale={scale}>
        <HomeScreen
          courses={courses}
          displayCgpa={formatGpa(effectiveDisplayValue)}
          displayDegreeClass={currentDegreeClass}
          onGradeCycle={handleGradeCycle}
          isInteractive={true}
        />
      </Phone>

      {/* Discoverability hint chip */}
      {!hasInteracted && (
        <div className="mt-4 px-3.5 py-1 rounded-full bg-white/90 border border-teal/20 text-teal text-[11px] font-medium shadow-xs animate-bounce flex items-center gap-1.5 backdrop-blur-xs select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-teal" />
          <span>Tap a grade to try it</span>
        </div>
      )}
    </div>
  );
}
