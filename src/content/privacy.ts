import { LegalPageContent } from "./types";

export const PRIVACY_CONTENT: LegalPageContent = {
  pageTitle: "Privacy Policy",
  businessHeader: "ACADDASH TECHNOLOGIES",
  metadataLine:
    "Acaddash Technologies | CAC BN 10001799 | 72, Samuel Ekundayo Road, Badagry, Lagos State, Nigeria | privacy@acaddash.ng | https://acaddash.ng",
  lastUpdated: "14 November 2026",
  toc: [
    { id: "introduction", label: "1. Introduction" },
    { id: "information-we-collect", label: "2. Information We Collect" },
    { id: "uploaded-materials", label: "3. Uploaded Materials" },
    { id: "how-we-use-information", label: "4. How We Use Information" },
    { id: "legal-basis", label: "5. Legal Basis" },
    {
      id: "infrastructure-transfers",
      label: "6. Infrastructure and International Transfers",
    },
    { id: "retention", label: "7. Retention" },
    { id: "security", label: "8. Security" },
    { id: "children-and-minors", label: "9. Children and Minors" },
    { id: "your-rights", label: "10. Your Rights" },
    { id: "changes-and-contact", label: "11. Changes and Contact" },
  ],
  sections: [
    {
      id: "introduction",
      title: "1. Introduction",
      content: [
        'Acaddash Technologies ("Acaddash", "we", "our" or "us") respects the privacy of students and other individuals using our platform. This policy explains how we collect, use, store, process and protect personal information through our mobile application, website and related services. Acaddash helps students manage academic performance, calculate GPA and CGPA, simulate outcomes and plan their educational journeys.',
      ],
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect",
      content: [
        "Personal information may include full name, email address, account credentials and contact details. Academic information may include institution, faculty, department, programme, academic level and session, courses, grades, credit units, GPA/CGPA, academic history, goals, timetables, plans, carryovers and resits. We may process device, authentication and diagnostic information required for security and operation. Exact analytics and crash-reporting tools remain to be confirmed.",
      ],
    },
    {
      id: "uploaded-materials",
      title: "3. Uploaded Materials",
      content: [
        "If enabled, students may upload lecture notes, PDFs and other educational materials for searching, summarising and answering educational questions. Do not upload unnecessary sensitive personal information or confidential third-party information.",
      ],
    },
    {
      id: "how-we-use-information",
      title: "4. How We Use Information",
      content: [
        "We use information to operate accounts; calculate academic outcomes; provide simulations, projections and planning; support educational assistance; process uploaded materials where enabled; communicate service notices; improve reliability; and protect against misuse. We do not intend to sell personal academic records.",
      ],
    },
    {
      id: "legal-basis",
      title: "5. Legal Basis",
      content: [
        "Depending on the circumstances, processing may rely on consent, performance of requested services, legitimate interests such as security, or compliance with legal obligations. Consent may be withdrawn where applicable.",
      ],
    },
    {
      id: "infrastructure-transfers",
      title: "6. Infrastructure and International Transfers",
      content: [
        "Supabase provides database, backend and authentication services; the current project is hosted in Frankfurt, Germany. Resend provides transactional email infrastructure configured in Ireland. Cloudflare provides DNS and email routing. These services may involve processing outside Nigeria. Acaddash will apply appropriate safeguards and applicable data-protection requirements.",
      ],
    },
    {
      id: "retention",
      title: "7. Retention",
      content: [
        "Information is retained as reasonably necessary to provide services, maintain accounts, comply with legal duties and protect the platform. Following valid deletion requests, data will be deleted or anonymised subject to legal exceptions and backup-retention processes. Exact retention periods need confirmation.",
      ],
    },
    {
      id: "security",
      title: "8. Security",
      content: [
        "We apply reasonable technical and organisational protections, including access controls and secure communications. No online system can guarantee absolute security.",
      ],
    },
    {
      id: "children-and-minors",
      title: "9. Children and Minors",
      content: [
        "Acaddash primarily serves higher-education students, some of whom may be under 18. Where legally required, appropriate parental or guardian consent must be obtained before relevant processing.",
      ],
    },
    {
      id: "your-rights",
      title: "10. Your Rights",
      content: [
        "Subject to law, you may request access, correction, deletion, withdrawal of consent, objection to processing or information about processing, and may complain to a competent data-protection authority.",
      ],
    },
    {
      id: "changes-and-contact",
      title: "11. Changes and Contact",
      content: [
        "Updates will be published with a revised date. Privacy requests: privacy@acaddash.ng. Business address: 72, Samuel Ekundayo Road, Badagry, Lagos State, Nigeria.",
      ],
    },
  ],
  notice:
    "Publication draft — verify implementation details and obtain appropriate Nigerian legal review before use.",
};
