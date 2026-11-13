export interface ContentSection {
  heading: string;
  paragraphs: string[];
  listItems?: string[];
}

export interface LegalDocument {
  title: string;
  lastUpdated: string;
  statusNotice: string;
  sections: ContentSection[];
}

export const TERMS_CONTENT: LegalDocument = {
  title: "Terms of Service",
  lastUpdated: "November 2026",
  statusNotice: "This page is being finalised.",
  sections: [
    {
      heading: "Terms of Use",
      paragraphs: [
        "By accessing or using Acaddash, you agree to abide by these Terms of Service.",
        "Acaddash provides grade planning, CGPA calculation, and degree simulation tools for informational and educational purposes.",
      ],
    },
    {
      heading: "Academic Integrity",
      paragraphs: [
        "While Acaddash calculates CGPA based on official Nigerian 5-point grading scales, your university's official transcripts and academic senate records remain the sole authoritative source of your degree standing.",
      ],
      listItems: [
        "Calculations and simulations are planning estimates",
        "Students are responsible for verifying university-specific graduation requirements",
      ],
    },
    {
      heading: "Acceptable Use",
      paragraphs: [
        "You agree to use Acaddash only for legitimate academic tracking and degree planning activities.",
      ],
    },
  ],
};
