"use client";

import React, { useState, useId } from "react";
import { degreeClass, gradePoints, semesterGpa, formatGpa } from "@/lib/cgpa";
import { Button } from "@/components/ui/Button";

// --- Tile 1: Unit Limits ---
function UnitLimitsTile() {
  const [units, setUnits] = useState(21);
  const sliderId = useId();

  let statusText = "Within the limit";
  let statusColor = "text-teal";

  if (units < 18) {
    statusText = "Below the 18-unit minimum";
    statusColor = "text-[#B7791F]";
  } else if (units > 24) {
    statusText = "Above the 24-unit maximum";
    statusColor = "text-[#C0392B]";
  }

  // 15 to 27 range: (18-15)/12 = 25%, (24-15)/12 = 75%
  const trackBackground =
    "linear-gradient(to right, #CBD5E1 0%, #CBD5E1 25%, #E7F1F0 25%, #E7F1F0 75%, #CBD5E1 75%, #CBD5E1 100%)";

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <h3 className="font-heading font-bold text-2xl sm:text-[28px] text-navy tracking-tight leading-tight">
          Unit limits, built in
        </h3>
        <p className="text-muted text-sm sm:text-base leading-relaxed mt-2 mb-6">
          Semesters of 18 to 24 units, checked as you plan, so you never register something you can&apos;t.
        </p>
      </div>

      {/* Interactive Visual pinned to bottom */}
      <div className="bg-white rounded-[20px] p-4 sm:p-5 border border-[#E6ECF1] shadow-xs mt-auto">
        <label htmlFor={sliderId} className="sr-only">
          Select semester units
        </label>
        <div className="relative flex items-center py-2">
          {/* Track shading highlight overlay */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 h-2.5 rounded-full pointer-events-none"
            style={{ background: trackBackground }}
          />
          <input
            id={sliderId}
            type="range"
            min={15}
            max={27}
            step={1}
            value={units}
            onChange={(e) => setUnits(Number(e.target.value))}
            className="relative w-full h-2.5 appearance-none bg-transparent cursor-pointer z-10 accent-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 rounded-full"
          />
        </div>

        {/* Labels below slider */}
        <div className="flex items-center justify-between text-xs text-muted mt-2 pt-1">
          <span className="font-medium">18 units</span>
          <span className="font-heading font-bold text-base text-navy tabular-nums">
            {units} units
          </span>
          <span className="font-medium">24 units</span>
        </div>

        {/* Status Line */}
        <div
          aria-live="polite"
          className={`text-center font-medium text-xs mt-3 pt-2 border-t border-[#F1F5F9] transition-colors ${statusColor}`}
        >
          {statusText}
        </div>
      </div>
    </div>
  );
}

// --- Tile 2: Degree Class Live ---
const DEGREE_BANDS = [
  { name: "First Class", range: "4.50 – 5.00", min: 4.5, max: 5.0 },
  { name: "Second Class Upper", range: "3.50 – 4.49", min: 3.5, max: 4.49 },
  { name: "Second Class Lower", range: "2.40 – 3.49", min: 2.4, max: 3.49 },
  { name: "Third Class", range: "1.50 – 2.39", min: 1.5, max: 2.39 },
  { name: "Pass", range: "1.00 – 1.49", min: 1.0, max: 1.49 },
];

function DegreeClassTile() {
  const [cgpa, setCgpa] = useState(4.25);
  const sliderId = useId();

  const currentClass = degreeClass(cgpa);

  // Proximity line
  let distanceMessage = "Top class";
  if (cgpa < 4.5) {
    const nextTarget =
      cgpa < 1.5
        ? { target: 1.5, name: "Third Class" }
        : cgpa < 2.4
        ? { target: 2.4, name: "Second Class Lower" }
        : cgpa < 3.5
        ? { target: 3.5, name: "Second Class Upper" }
        : { target: 4.5, name: "First Class" };

    const diff = (nextTarget.target - cgpa).toFixed(2);
    distanceMessage = `${diff} away from ${nextTarget.name}`;
  }

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <h3 className="font-heading font-bold text-2xl sm:text-[28px] text-navy tracking-tight leading-tight">
          Your degree class, live
        </h3>
        <p className="text-muted text-sm sm:text-base leading-relaxed mt-2 mb-6">
          See which class of degree your CGPA points to, and how far you are from the next one.
        </p>
      </div>

      {/* Interactive Visual */}
      <div className="bg-white rounded-[20px] p-4 sm:p-5 border border-[#E6ECF1] shadow-xs mt-auto">
        {/* Slider header */}
        <div className="flex items-center justify-between mb-1.5">
          <label htmlFor={sliderId} className="text-xs text-muted font-medium">
            Simulate CGPA
          </label>
          <span className="font-heading font-bold text-lg text-navy tabular-nums">
            {cgpa.toFixed(2)}
          </span>
        </div>

        <input
          id={sliderId}
          type="range"
          min={1.0}
          max={5.0}
          step={0.01}
          value={cgpa}
          onChange={(e) => setCgpa(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none bg-[#E2E8F0] cursor-pointer accent-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 mb-3"
        />

        {/* Stacked Bands */}
        <div className="flex flex-col gap-1">
          {DEGREE_BANDS.map((band) => {
            const isMatch = currentClass === band.name;
            return (
              <div
                key={band.name}
                className={`flex items-center justify-between px-3 py-1.5 rounded-[10px] text-xs transition-all duration-200 ${
                  isMatch
                    ? "bg-navy text-white font-semibold shadow-xs"
                    : "bg-bg/60 text-muted"
                }`}
              >
                <span>{band.name}</span>
                <span className="tabular-nums font-mono text-[11px] opacity-90">
                  {band.range}
                </span>
              </div>
            );
          })}
        </div>

        {/* Proximity line */}
        <div
          aria-live="polite"
          className="text-center font-semibold text-xs text-teal mt-3 pt-2 border-t border-[#F1F5F9]"
        >
          {distanceMessage}
        </div>
      </div>
    </div>
  );
}

// --- Tile 3: 5-Point Scale Sorted ---
const GRADES_DATA = [
  { grade: "A", pts: 5 },
  { grade: "B", pts: 4 },
  { grade: "C", pts: 3 },
  { grade: "D", pts: 2 },
  { grade: "E", pts: 1 },
];

function ScaleSortedTile() {
  const [selectedGrade, setSelectedGrade] = useState("A");

  const currentItem = GRADES_DATA.find((g) => g.grade === selectedGrade) || GRADES_DATA[0];
  const totalPoints3u = currentItem.pts * 3;
  const article = selectedGrade === "A" || selectedGrade === "E" ? "An" : "A";

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <h3 className="font-heading font-bold text-2xl sm:text-[28px] text-navy tracking-tight leading-tight">
          The 5-point scale, sorted
        </h3>
        <p className="text-muted text-sm sm:text-base leading-relaxed mt-2 mb-6">
          Every grade mapped to its points, so there&apos;s nothing to look up or convert.
        </p>
      </div>

      {/* Interactive Visual */}
      <div className="bg-white rounded-[20px] p-4 sm:p-5 border border-[#E6ECF1] shadow-xs mt-auto">
        <div className="grid grid-cols-5 gap-1.5 sm:gap-2" role="radiogroup" aria-label="Grade point scale">
          {GRADES_DATA.map((item) => {
            const isSelected = selectedGrade === item.grade;
            return (
              <button
                key={item.grade}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setSelectedGrade(item.grade)}
                className={`flex flex-col items-center justify-center py-3 rounded-[14px] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy ${
                  isSelected
                    ? "bg-navy text-white shadow-sm scale-105"
                    : "bg-bg text-navy border border-[#E6ECF1] hover:bg-mint/40"
                }`}
              >
                <span className="font-heading font-bold text-lg leading-none">
                  {item.grade}
                </span>
                <span className={`text-[10px] mt-1 ${isSelected ? "text-white/80" : "text-muted"}`}>
                  {item.pts} pts
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic calculation explanation line */}
        <div
          aria-live="polite"
          className="text-center font-medium text-xs text-navy mt-4 pt-3 border-t border-[#F1F5F9]"
        >
          {article} <span className="font-bold">{selectedGrade}</span> in a 3-unit course gives{" "}
          <span className="font-bold text-teal">{totalPoints3u}</span> grade points.
        </div>
      </div>
    </div>
  );
}

// --- Tile 4: See it before you sign up ---
interface QuickCourse {
  id: string;
  units: number;
  grade: string;
}

function PreviewCalculatorTile() {
  const [courses, setCourses] = useState<QuickCourse[]>([
    { id: "c1", units: 3, grade: "A" },
    { id: "c2", units: 3, grade: "B" },
    { id: "c3", units: 2, grade: "B" },
  ]);

  // Semester GPA calculation
  const calculatedGpa = semesterGpa(courses);
  const formattedResult = formatGpa(calculatedGpa); // Defaults: 3*5 + 3*4 + 2*4 = 35 / 8 = 4.375 -> 4.38
  const currentDegreeClass = degreeClass(calculatedGpa);

  const updateCourse = (id: string, field: "units" | "grade", value: string | number) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <h3 className="font-heading font-bold text-2xl sm:text-[28px] text-navy tracking-tight leading-tight">
          See it before you sign up
        </h3>
        <p className="text-muted text-sm sm:text-base leading-relaxed mt-2 mb-6">
          Enter a few courses and get your result straight away. Create an account only when you want to save it.
        </p>
      </div>

      {/* Interactive Visual */}
      <div className="bg-white rounded-[20px] p-3.5 sm:p-5 border border-[#E6ECF1] shadow-xs mt-auto">
        {/* 3 Course Rows */}
        <div className="flex flex-col gap-2">
          {courses.map((course, idx) => (
            <div
              key={course.id}
              className="flex items-center justify-between gap-2 bg-bg/70 rounded-[12px] px-2.5 sm:px-3 py-2 border border-[#E6ECF1]/70"
            >
              <span className="text-xs font-semibold text-navy shrink-0">
                Course {idx + 1}
              </span>

              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {/* Units Select */}
                <label htmlFor={`units-${course.id}`} className="sr-only">
                  Course {idx + 1} units
                </label>
                <select
                  id={`units-${course.id}`}
                  value={course.units}
                  onChange={(e) => updateCourse(course.id, "units", Number(e.target.value))}
                  className="text-xs bg-white border border-[#CBD5E1] rounded-[6px] px-1.5 sm:px-2 py-1 text-navy font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-navy"
                >
                  {[1, 2, 3, 4, 5, 6].map((u) => (
                    <option key={u} value={u}>
                      {u} units
                    </option>
                  ))}
                </select>

                {/* Grade Select */}
                <label htmlFor={`grade-${course.id}`} className="sr-only">
                  Course {idx + 1} grade
                </label>
                <select
                  id={`grade-${course.id}`}
                  value={course.grade}
                  onChange={(e) => updateCourse(course.id, "grade", e.target.value)}
                  className="text-xs bg-white border border-[#CBD5E1] rounded-[6px] px-1.5 sm:px-2 py-1 text-navy font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-navy"
                >
                  {["A", "B", "C", "D", "E", "F"].map((g) => (
                    <option key={g} value={g}>
                      {g} ({gradePoints(g)} pts)
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>

        {/* Live Result Output */}
        <div
          aria-live="polite"
          className="mt-3 pt-3 border-t border-[#F1F5F9] flex flex-wrap items-center justify-between gap-2.5"
        >
          <div>
            <span className="text-[10px] text-muted font-medium block">
              Semester GPA
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-heading font-bold text-2xl sm:text-[28px] text-navy leading-none tabular-nums">
                {formattedResult}
              </span>
              <span className="inline-block px-2 py-0.5 rounded-full bg-mint text-teal font-medium text-[10px] whitespace-nowrap">
                {currentDegreeClass}
              </span>
            </div>
          </div>

          <Button href="#download" variant="primary" size="sm" className="px-3.5 py-2 text-xs shrink-0">
            Save my result
          </Button>
        </div>
      </div>
    </div>
  );
}

// --- Main Details Component ---
export function Details() {
  return (
    <section
      id="details"
      className="pt-20 sm:pt-24 lg:pt-[120px] pb-5 sm:pb-8 lg:pb-10 px-5 sm:px-12 lg:px-20 bg-white text-navy overflow-hidden"
      aria-label="Features and rules"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[900px] mx-auto mb-12 sm:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-5xl lg:text-[64px] text-navy leading-[1.05] tracking-[-0.04em]">
            Made for the way Nigerian universities work.
          </h2>
          <p className="text-muted text-base sm:text-lg lg:text-xl mt-4 leading-relaxed font-normal">
            The rules you actually live by are already built in.
          </p>
        </div>

        {/* 2-column Grid of Tiles (single column on mobile, 22px gap) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
          {/* Tile 1: Unit limits */}
          <div className="bg-bg rounded-[30px] p-6 sm:p-7 md:p-9 min-h-[340px] md:min-h-[380px] transition-transform duration-200 md:hover:scale-[1.015] border border-[#E6ECF1]/60 flex flex-col">
            <UnitLimitsTile />
          </div>

          {/* Tile 2: Degree class live */}
          <div className="bg-bg rounded-[30px] p-6 sm:p-7 md:p-9 min-h-[340px] md:min-h-[380px] transition-transform duration-200 md:hover:scale-[1.015] border border-[#E6ECF1]/60 flex flex-col">
            <DegreeClassTile />
          </div>

          {/* Tile 3: 5-point scale */}
          <div className="bg-bg rounded-[30px] p-6 sm:p-7 md:p-9 min-h-[340px] md:min-h-[380px] transition-transform duration-200 md:hover:scale-[1.015] border border-[#E6ECF1]/60 flex flex-col">
            <ScaleSortedTile />
          </div>

          {/* Tile 4: Preview before sign up */}
          <div className="bg-bg rounded-[30px] p-6 sm:p-7 md:p-9 min-h-[340px] md:min-h-[380px] transition-transform duration-200 md:hover:scale-[1.015] border border-[#E6ECF1]/60 flex flex-col">
            <PreviewCalculatorTile />
          </div>
        </div>
      </div>
    </section>
  );
}
