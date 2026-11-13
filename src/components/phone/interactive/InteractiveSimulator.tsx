"use client";

import React, { useState, useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { Phone } from "@/components/phone/Phone";
import { SimulatorScreen } from "@/components/phone/screens/SimulatorScreen";
import { SAMPLE_SIMULATOR } from "@/lib/sampleData";
import {
  Grade,
  gradePoints,
  requiredAverage,
  feasibility,
  formatGpa,
  Feasibility,
} from "@/lib/cgpa";

export interface InteractiveSimulatorProps {
  onStateChange?: (data: {
    projectedCgpa: number;
    requiredAvg: number;
    status: Feasibility;
  }) => void;
  scale?: number;
  className?: string;
}

export function InteractiveSimulator({
  onStateChange,
  scale = 1,
  className = "",
}: InteractiveSimulatorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();

  const [targetGpa, setTargetGpa] = useState<number>(4.4);
  const [selectedGrades, setSelectedGrades] = useState<Record<string, Grade>>({
    "CSC 401": "A",
    "CSC 405": "B",
    "MTH 405": "A",
  });
  const [hasInteracted, setHasInteracted] = useState(false);

  // Attract mode: Toggle CSC 405 between B and C every 3s until first interaction
  useEffect(() => {
    if (hasInteracted || shouldReduceMotion || !isInView) return;

    const interval = setInterval(() => {
      setSelectedGrades((prev) => ({
        ...prev,
        "CSC 405": prev["CSC 405"] === "B" ? "C" : "B",
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, [hasInteracted, shouldReduceMotion, isInView]);

  // Math recalculation
  // Base: 96 units, 408 points
  // 3 courses (3 units each = 9 units)
  // + 12 other fixed units at 57 points
  // Total semester = 21 units
  // Total units after = 117
  // Remaining degree units = 150 - 117 = 33
  const basePoints = SAMPLE_SIMULATOR.basePoints;
  const baseUnits = SAMPLE_SIMULATOR.baseUnits;
  const otherUnits = SAMPLE_SIMULATOR.fixedOtherUnits;
  const otherPoints = SAMPLE_SIMULATOR.fixedOtherPoints;
  const totalDegreeUnits = SAMPLE_SIMULATOR.totalDegreeUnits;

  const editablePoints =
    gradePoints(selectedGrades["CSC 401"] || "A") * 3 +
    gradePoints(selectedGrades["CSC 405"] || "B") * 3 +
    gradePoints(selectedGrades["MTH 405"] || "A") * 3;

  const totalSemesterPoints = editablePoints + otherPoints;
  const totalSemesterUnits = 3 + 3 + 3 + otherUnits; // 21

  const newTotalPoints = basePoints + totalSemesterPoints;
  const newTotalUnits = baseUnits + totalSemesterUnits; // 117

  const projectedCgpaNum = newTotalPoints / newTotalUnits;

  const reqAvgNum = requiredAverage({
    targetCgpa: targetGpa,
    currentPoints: newTotalPoints,
    currentUnits: newTotalUnits,
    totalUnits: totalDegreeUnits,
  });

  const status = feasibility(reqAvgNum);

  const formattedTarget = targetGpa.toFixed(2);
  const formattedProjected = formatGpa(projectedCgpaNum);
  const formattedReq = formatGpa(reqAvgNum);

  // Dynamic Hint text
  const hintText =
    status === "Out of reach"
      ? `${formattedTarget} isn't reachable with these grades. Try higher grades or a lower target.`
      : `You'd need about ${formattedReq} average across your last 33 units to reach ${formattedTarget}.`;

  // Notify parent of state changes
  useEffect(() => {
    onStateChange?.({
      projectedCgpa: projectedCgpaNum,
      requiredAvg: reqAvgNum,
      status,
    });
  }, [projectedCgpaNum, reqAvgNum, status, onStateChange]);

  const handleGradeSelect = (code: string, grade: Grade) => {
    setHasInteracted(true);
    setSelectedGrades((prev) => ({
      ...prev,
      [code]: grade,
    }));
  };

  const handleTargetChange = (delta: number) => {
    setHasInteracted(true);
    setTargetGpa((prev) => {
      const next = Math.round((prev + delta) * 100) / 100;
      if (next < 3.5) return 3.5;
      if (next > 5.0) return 5.0;
      return next;
    });
  };

  return (
    <div
      ref={containerRef}
      className={`flex flex-col items-center ${className}`.trim()}
    >
      <Phone active="sim" scale={scale}>
        <SimulatorScreen
          courses={SAMPLE_SIMULATOR.courses}
          selectedGrades={selectedGrades}
          targetGpa={formattedTarget}
          projectedGpa={formattedProjected}
          status={status}
          hint={hintText}
          onGradeSelect={handleGradeSelect}
          onTargetChange={handleTargetChange}
          isInteractive={true}
        />
      </Phone>

      {/* Discoverability hint chip */}
      {!hasInteracted && (
        <div className="mt-4 px-3.5 py-1 rounded-full bg-white/90 border border-teal/20 text-teal text-[11px] font-medium shadow-xs animate-bounce flex items-center gap-1.5 backdrop-blur-xs select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-teal" />
          <span>Tap grades or ± the target</span>
        </div>
      )}
    </div>
  );
}
