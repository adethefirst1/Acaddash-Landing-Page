export interface Course {
  code: string;
  title: string;
  units: number;
  grade: "A" | "B" | "C" | "D" | "E";
}

export interface SimulatorCourse {
  code: string;
  title: string;
  units: number;
  defaultGrade: "A" | "B" | "C" | "D" | "E";
  alternateGrade?: "A" | "B" | "C" | "D" | "E";
}

export interface PlanYear {
  year: number;
  label: string;
  status: "done" | "current" | "future";
  gpaText: string;
  unitsText: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "advisor";
  text: string;
}

export const SAMPLE_STUDENT = {
  name: "Ada",
  avatarLetter: "A",
  cumulativeGpa: "4.25",
  maxGpa: "5.00",
  degreeClass: "Second Class Upper",
  completedUnits: 96,
  totalUnits: 150,
  completedSemesters: 5,
  targetGpa: "4.40",
  currentSemesterUnits: 21,
  currentSemesterCourses: [
    { code: "CSC 301", title: "Data Structures", units: 3, grade: "A" },
    { code: "CSC 305", title: "Operating Systems", units: 3, grade: "B" },
    { code: "MTH 301", title: "Numerical Methods", units: 3, grade: "A" },
    { code: "GST 301", title: "Entrepreneurship", units: 2, grade: "B" },
  ] as Course[],
};

export const SAMPLE_SIMULATOR = {
  semesterLabel: "Semester 6",
  tag: "Draft",
  targetGpa: "4.40",
  projectedGpaB: "4.34",
  projectedGpaC: "4.31",
  status: "Within reach",
  courses: [
    { code: "CSC 401", title: "Compilers", units: 3, defaultGrade: "A" },
    { code: "CSC 405", title: "AI", units: 3, defaultGrade: "B", alternateGrade: "C" },
    { code: "MTH 405", title: "Optimisation", units: 3, defaultGrade: "A" },
  ] as SimulatorCourse[],
  hint: "Needs a B or better in CSC 405 to stay on track for 4.40",
};

export const SAMPLE_PLANNER = {
  title: "Plan",
  tag: "Year 3 of 4",
  completedUnits: 96,
  totalUnits: 150,
  status: "On track for 4.40",
  years: [
    {
      year: 1,
      label: "Year 1",
      status: "done",
      gpaText: "GPA 4.15",
      unitsText: "38 units",
    },
    {
      year: 2,
      label: "Year 2",
      status: "done",
      gpaText: "GPA 4.30",
      unitsText: "40 units",
    },
    {
      year: 3,
      label: "Year 3 · now",
      status: "current",
      gpaText: "4.35 so far",
      unitsText: "18 units done",
    },
    {
      year: 4,
      label: "Year 4",
      status: "future",
      gpaText: "Plan 4.60",
      unitsText: "final year",
    },
  ] as PlanYear[],
};

export const SAMPLE_ADVISOR = {
  title: "Advisor",
  tag: "New",
  caption: "Ask anything",
  messages: [
    {
      id: "m1",
      sender: "user",
      text: "What's the difference between GPA and CGPA?",
    },
    {
      id: "m2",
      sender: "advisor",
      text: "GPA is for one semester. CGPA covers every semester so far, weighted by units. That's why one bad semester moves it less in final year.",
    },
    {
      id: "m3",
      sender: "user",
      text: "Can I still finish on 4.40?",
    },
    {
      id: "m4",
      sender: "advisor",
      text: "With 96 units done at 4.25, you need about a 4.67 average over the remaining 54 units. That's tight but doable, and the simulator shows which courses matter most.",
    },
  ] as ChatMessage[],
  suggestionChips: ["Plan my next semester", "Explain retakes"],
};
