/**
 * CGPA Calculation Engine (Marketing Demo)
 *
 * NOTE: These pure functions power the marketing website interactive demo.
 * The production Acaddash mobile app engine includes institution-specific
 * grading systems, custom grade point scales, repeat policies, and credit weightings,
 * and is the authoritative implementation.
 */

export type Grade = "A" | "B" | "C" | "D" | "E" | "F";

export interface CourseGradeItem {
  units: number;
  grade: Grade | string;
}

/**
 * Standard Nigerian university 5-point grading scale:
 * A = 5, B = 4, C = 3, D = 2, E = 1, F = 0
 */
export function gradePoints(grade: string): number {
  switch (grade.toUpperCase()) {
    case "A":
      return 5;
    case "B":
      return 4;
    case "C":
      return 3;
    case "D":
      return 2;
    case "E":
      return 1;
    case "F":
    default:
      return 0;
  }
}

/**
 * Calculates semester GPA: sum(points * units) / sum(units)
 */
export function semesterGpa(courses: CourseGradeItem[]): number {
  const totalUnits = courses.reduce((acc, c) => acc + c.units, 0);
  if (totalUnits === 0) return 0;
  const totalPoints = courses.reduce(
    (acc, c) => acc + gradePoints(c.grade) * c.units,
    0
  );
  return totalPoints / totalUnits;
}

/**
 * Calculates Cumulative GPA:
 * (priorPoints + sum(points * units)) / (priorUnits + sum(units))
 */
export function cgpa(
  priorPoints: number,
  priorUnits: number,
  courses: CourseGradeItem[]
): number {
  const newUnits = courses.reduce((acc, c) => acc + c.units, 0);
  const totalUnits = priorUnits + newUnits;
  if (totalUnits === 0) return 0;
  const newPoints = courses.reduce(
    (acc, c) => acc + gradePoints(c.grade) * c.units,
    0
  );
  const totalPoints = priorPoints + newPoints;
  return totalPoints / totalUnits;
}

/**
 * Standard Nigerian degree classification based on 5.00 scale:
 * >= 4.50: First Class
 * >= 3.50: Second Class Upper
 * >= 2.40: Second Class Lower
 * >= 1.50: Third Class
 * Else: Pass
 */
export function degreeClass(cgpaVal: number): string {
  if (cgpaVal >= 4.5) return "First Class";
  if (cgpaVal >= 3.5) return "Second Class Upper";
  if (cgpaVal >= 2.4) return "Second Class Lower";
  if (cgpaVal >= 1.5) return "Third Class";
  return "Pass";
}

export interface RequiredAverageParams {
  targetCgpa: number;
  currentPoints: number;
  currentUnits: number;
  totalUnits: number;
}

/**
 * Required average grade points over the remaining units to achieve a target CGPA:
 * (target * totalUnits - currentPoints) / (totalUnits - currentUnits)
 */
export function requiredAverage({
  targetCgpa,
  currentPoints,
  currentUnits,
  totalUnits,
}: RequiredAverageParams): number {
  const remainingUnits = totalUnits - currentUnits;
  if (remainingUnits <= 0) return 0;
  return (targetCgpa * totalUnits - currentPoints) / remainingUnits;
}

export type Feasibility = "Within reach" | "Tight" | "Out of reach";

/**
 * Feasibility bands:
 * <= 4.70: "Within reach"
 * <= 5.00: "Tight"
 * > 5.00: "Out of reach"
 */
export function feasibility(reqAvg: number): Feasibility {
  if (reqAvg <= 4.7) return "Within reach";
  if (reqAvg <= 5.0) return "Tight";
  return "Out of reach";
}

/**
 * Formats numbers for display only (2 decimals)
 */
export function formatGpa(val: number): string {
  return (Math.round(val * 100) / 100).toFixed(2);
}

