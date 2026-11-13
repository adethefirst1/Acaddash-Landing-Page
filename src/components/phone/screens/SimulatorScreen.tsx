import { SAMPLE_SIMULATOR } from "@/lib/sampleData";

export function SimulatorScreen() {
  const { semesterLabel, tag, targetGpa, projectedGpaB, projectedGpaC, status, courses, hint } =
    SAMPLE_SIMULATOR;

  const grades = ["A", "B", "C", "D", "E"] as const;

  return (
    <div className="flex flex-col gap-2.5">
      {/* Header */}
      <div className="flex items-center justify-between pt-1">
        <div>
          <span className="text-[11px] text-muted block leading-none">
            {semesterLabel}
          </span>
          <span className="font-heading font-bold text-[20px] text-navy tracking-tight leading-tight">
            Simulator
          </span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-mint text-teal font-medium text-[10px]">
          {tag}
        </span>
      </div>

      {/* Target CGPA Card */}
      <div className="bg-white rounded-[20px] border border-[#E6ECF1] p-3 shadow-xs">
        <span className="text-[10px] text-muted font-medium block text-center">
          Target CGPA
        </span>

        {/* Stepper */}
        <div className="flex items-center justify-center gap-4 my-1">
          <button
            type="button"
            className="w-7 h-7 rounded-full border border-[#E6ECF1] flex items-center justify-center text-navy font-bold text-[14px] leading-none"
            aria-label="Decrease target"
          >
            −
          </button>
          <span className="font-heading font-bold text-[34px] text-navy tracking-tight leading-none">
            {targetGpa}
          </span>
          <button
            type="button"
            className="w-7 h-7 rounded-full border border-[#E6ECF1] flex items-center justify-center text-navy font-bold text-[14px] leading-none"
            aria-label="Increase target"
          >
            +
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E6ECF1] my-2" />

        {/* Metrics: Projected & Status */}
        <div className="grid grid-cols-2 text-center">
          <div className="border-r border-[#E6ECF1]">
            <div className="relative h-5 flex items-center justify-center">
              <span className="sim-toggle-b font-heading font-bold text-[15px] text-navy leading-none absolute">
                {projectedGpaB}
              </span>
              <span className="sim-toggle-c font-heading font-bold text-[15px] text-navy leading-none absolute opacity-0">
                {projectedGpaC}
              </span>
            </div>
            <div className="text-[10px] text-muted">Projected</div>
          </div>
          <div>
            <div className="font-heading font-bold text-[12px] text-teal leading-5">
              {status}
            </div>
            <div className="text-[10px] text-muted">Status</div>
          </div>
        </div>
      </div>

      {/* Course Grade Selector Header */}
      <div className="flex items-center justify-between mt-0.5 px-0.5">
        <span className="font-heading font-semibold text-[12px] text-navy">
          Pick your grades
        </span>
        <span className="text-[10px] text-muted">tap to change</span>
      </div>

      {/* Courses with A-E grade chips */}
      <div className="flex flex-col gap-1.5">
        {courses.map((course) => {
          const isTogglingCourse = course.code === "CSC 405";

          return (
            <div
              key={course.code}
              className="bg-white rounded-[14px] border border-[#E6ECF1] px-2.5 py-2 flex items-center justify-between shadow-xs"
            >
              <div>
                <div className="font-heading font-bold text-[12px] text-navy leading-tight">
                  {course.code}
                </div>
                <div className="text-[10px] text-muted">
                  {course.title} · {course.units}u
                </div>
              </div>

              {/* Chips A to E */}
              <div className="flex items-center gap-1">
                {grades.map((grade) => {
                  if (isTogglingCourse) {
                    if (grade === "B") {
                      return (
                        <span
                          key={grade}
                          className="sim-chip-b w-5 h-5 rounded-[4px] text-[10px] font-bold flex items-center justify-center bg-navy text-white transition-colors"
                        >
                          B
                        </span>
                      );
                    }
                    if (grade === "C") {
                      return (
                        <span
                          key={grade}
                          className="sim-chip-c w-5 h-5 rounded-[4px] text-[10px] font-bold flex items-center justify-center text-muted transition-colors"
                        >
                          C
                        </span>
                      );
                    }
                  }

                  const isSelected = course.defaultGrade === grade;
                  return (
                    <span
                      key={grade}
                      className={`w-5 h-5 rounded-[4px] text-[10px] font-bold flex items-center justify-center ${
                        isSelected
                          ? "bg-navy text-white"
                          : "text-muted hover:bg-tint"
                      }`}
                    >
                      {grade}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mint Hint Box */}
      <div className="rounded-[12px] bg-mint/90 border border-teal/20 px-3 py-2 text-[10px] text-navy font-medium leading-relaxed">
        {hint}
      </div>
    </div>
  );
}
