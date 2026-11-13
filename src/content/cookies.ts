import { LegalPageContent } from "./types";

export const COOKIES_CONTENT: LegalPageContent = {
  pageTitle: "Cookie policy",
  businessHeader: "ACADDASH TECHNOLOGIES",
  metadataLine:
    "Acaddash Technologies | CAC BN 10001799 | 72, Samuel Ekundayo Road, Badagry, Lagos State, Nigeria | privacy@acaddash.ng | https://acaddash.ng",
  lastUpdated: "14 November 2026",
  toc: [
    { id: "introduction", label: "1. Introduction" },
    { id: "essential-cookies", label: "2. Essential Cookies" },
    { id: "functional-cookies", label: "3. Functional Cookies" },
    { id: "analytics-cookies", label: "4. Analytics Cookies" },
    { id: "marketing-cookies", label: "5. Marketing Cookies" },
    { id: "managing-cookies", label: "6. Managing Cookies" },
    { id: "third-parties", label: "7. Third Parties" },
    { id: "changes-and-contact", label: "8. Changes and Contact" },
  ],
  sections: [
    {
      id: "introduction",
      title: "1. Introduction",
      content: [
        "This policy describes how cookies and similar technologies may be used on the Acaddash website. Actual deployed cookies and tracking tools should be audited before publication.",
      ],
    },
    {
      id: "essential-cookies",
      title: "2. Essential Cookies",
      content: [
        "Cookies or equivalent technologies may be needed for website security, authentication, sessions and basic functionality.",
      ],
    },
    {
      id: "functional-cookies",
      title: "3. Functional Cookies",
      content: [
        "If enabled, functional cookies may remember preferences and improve the experience of returning visitors.",
      ],
    },
    {
      id: "analytics-cookies",
      title: "4. Analytics Cookies",
      content: [
        "If analytics are enabled, these may measure site usage and performance. Non-essential analytics should comply with applicable consent requirements.",
      ],
    },
    {
      id: "marketing-cookies",
      title: "5. Marketing Cookies",
      content: [
        "If advertising or campaign-tracking tools are introduced, Acaddash will provide appropriate disclosures and consent mechanisms where required.",
      ],
    },
    {
      id: "managing-cookies",
      title: "6. Managing Cookies",
      content: [
        "Users can manage or disable cookies through browser settings; some functions may be affected.",
      ],
    },
    {
      id: "third-parties",
      title: "7. Third Parties",
      content: [
        "Infrastructure providers may use cookies or similar technologies subject to applicable terms and privacy requirements.",
      ],
    },
    {
      id: "changes-and-contact",
      title: "8. Changes and Contact",
      content: [
        "This policy may be updated as technologies change. Contact privacy@acaddash.ng.",
      ],
    },
  ],
  notice:
    "Publication draft — verify implementation details and obtain appropriate Nigerian legal review before use.",
};
