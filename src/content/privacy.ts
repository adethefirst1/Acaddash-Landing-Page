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

export const PRIVACY_CONTENT: LegalDocument = {
  title: "Privacy Policy",
  lastUpdated: "November 2026",
  statusNotice: "This page is being finalised.",
  sections: [
    {
      heading: "Overview",
      paragraphs: [
        "Acaddash is designed to help university students track their academic performance with privacy and clarity.",
        "Your course grades, unit simulations, and academic records are stored securely and remain yours.",
      ],
    },
    {
      heading: "Data We Process",
      paragraphs: [
        "When you use Acaddash, we only process the academic information necessary to compute your GPA, project goals, and provide tailored degree planning guidance:",
      ],
      listItems: [
        "Course codes, course titles, credit units, and recorded grades",
        "Target CGPA and degree progression preferences",
        "Device diagnostics and general usage telemetry to improve reliability",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        "If you have questions regarding your data privacy, reach out to our team directly via our contact page.",
      ],
    },
  ],
};
