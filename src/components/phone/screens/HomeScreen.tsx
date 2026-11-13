"use client";

import { SAMPLE_STUDENT, Course } from "@/lib/sampleData";

export interface HomeScreenProps {
  courses?: Course[];
  displayCgpa?: string;
  displayDegreeClass?: string;
  onGradeCycle?: (code: string) => void;
  isInteractive?: boolean;
}

export function HomeScreen({
  courses,
  displayCgpa,
  displayDegreeClass,
  onGradeCycle,
  isInteractive = false,
}: HomeScreenProps) {
  const student = SAMPLE_STUDENT;
  const currentCourses = courses ?? student.currentSemesterCourses;
  const currentCgpa = displayCgpa ?? student.cumulativeGpa;
  const currentDegreeClass = displayDegreeClass ?? student.degreeClass;

  const totalCurrentUnits = currentCourses.reduce((acc, c) => acc + c.units, 0);

  return (
    <div className="flex flex-col gap-2.5">
      {/* Greeting Row */}
      <div className="flex items-center justify-between pt-1">
        <div>
          <span className="text-[11px] text-muted block leading-none">
            Good morning,
          </span>
          <span className="font-heading font-bold text-[20px] text-navy tracking-tight leading-tight">
            {student.name}
          </span>
        </div>
        <div className="w-7 h-7 rounded-full bg-teal text-white font-heading font-bold text-[12px] flex items-center justify-center shadow-xs">
          {student.avatarLetter}
        </div>
      </div>

      {/* Main Cumulative GPA Card */}
      <div className="bg-white rounded-[20px] border border-[#E6ECF1] p-3.5 shadow-xs">
        <span className="text-[10px] text-muted font-medium block">
          Cumulative GPA
        </span>

        <div className="flex items-baseline gap-1 my-0.5">
          <span className="font-heading font-bold text-[40px] text-navy tracking-tight leading-none tabular-nums">
            {currentCgpa}
          </span>
          <span className="text-[13px] text-muted font-normal">
            / {student.maxGpa}
          </span>
        </div>

        <div>
          <span className="inline-block px-2 py-0.5 rounded-full bg-mint text-teal font-medium text-[10px] transition-colors duration-200">
            {currentDegreeClass}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E6ECF1] my-2.5" />

        {/* 3-column metrics */}
        <div className="grid grid-cols-3 text-center">
          <div>
            <div className="font-heading font-bold text-[14px] text-navy leading-tight">
              {student.completedUnits}
            </div>
            <div className="text-[10px] text-muted">Units</div>
          </div>
          <div className="border-x border-[#E6ECF1]">
            <div className="font-heading font-bold text-[14px] text-navy leading-tight">
              {student.completedSemesters}
            </div>
            <div className="text-[10px] text-muted">Semesters</div>
          </div>
          <div>
            <div className="font-heading font-bold text-[14px] text-navy leading-tight">
              {student.targetGpa}
            </div>
            <div className="text-[10px] text-muted">Target</div>
          </div>
        </div>
      </div>

      {/* This Semester Section */}
      <div className="flex items-center justify-between mt-0.5 px-0.5">
        <span className="font-heading font-semibold text-[12px] text-navy">
          This semester
        </span>
        <span className="text-[10px] text-muted">
          {totalCurrentUnits} units
        </span>
      </div>

      {/* Courses List */}
      <div className="flex flex-col gap-1.5">
        {currentCourses.map((c) => (
          <div
            key={c.code}
            className="bg-white rounded-[14px] border border-[#E6ECF1] px-3 py-2 flex items-center justify-between shadow-xs transition-colors"
          >
            <div>
              <div className="font-heading font-bold text-[12px] text-navy leading-tight">
                {c.code}
              </div>
              <div className="text-[10px] text-muted">
                {c.title} · {c.units} units
              </div>
            </div>
            <button
              type="button"
              disabled={!isInteractive}
              onClick={() => onGradeCycle?.(c.code)}
              className={`w-6 h-6 rounded-[6px] bg-navy text-white font-heading font-bold text-[11px] flex items-center justify-center transition-all ${
                isInteractive
                  ? "cursor-pointer hover:scale-105 active:scale-95 hover:bg-navy-deep ring-2 ring-transparent hover:ring-teal/30"
                  : "cursor-default"
              }`}
              title={isInteractive ? "Click to cycle grade" : undefined}
            >
              {c.grade}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
