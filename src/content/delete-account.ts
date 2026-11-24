import { LegalPageContent } from "./types";

export const DELETE_ACCOUNT_CONTENT: LegalPageContent = {
  pageTitle: "Delete your account",
  businessHeader: "Acaddash, by Acaddash Technologies",
  metadataLine:
    "Acaddash Technologies | CAC BN 10001799 | 72, Samuel Ekundayo Road, Badagry, Lagos State, Nigeria | privacy@acaddash.ng | https://acaddash.ng",
  lastUpdated: "24 November 2026",
  toc: [
    { id: "purpose", label: "1. Purpose" },
    { id: "delete-in-app", label: "2. Delete your account in the app" },
    {
      id: "request-by-email",
      label: "3. Can't open the app? Request deletion by email",
    },
    { id: "what-is-deleted", label: "4. What is deleted" },
    { id: "what-may-be-kept", label: "5. What may be kept" },
    { id: "backups", label: "6. Backups" },
    { id: "third-parties", label: "7. Third Parties" },
    { id: "withdrawal-and-recovery", label: "8. Withdrawal and Recovery" },
    { id: "contact", label: "9. Contact" },
  ],
  sections: [
    {
      id: "purpose",
      title: "1. Purpose",
      content: [
        "Acaddash respects users’ rights to request deletion of accounts and associated personal and academic information.",
      ],
    },
    {
      id: "delete-in-app",
      title: "2. Delete your account in the app",
      content: [
        "You can delete your account and all associated data directly inside the Acaddash mobile application at any time:",
        "1. Open Acaddash and tap your Profile & Settings avatar on the top right of the dashboard.",
        "2. Select Settings (Account, academic details, notifications).",
        "3. Scroll to the YOUR DATA section and tap Delete my account (Removes your profile and grades for good).",
        "4. Review the Permanent Action warning banner.",
        "5. In the 'Type DELETE to confirm' field, type DELETE exactly.",
        "6. In the 'Enter your password' field, enter your account password.",
        "7. Tap 'Permanently delete my account' to confirm.",
      ],
    },
    {
      id: "request-by-email",
      title: "3. Can't open the app? Request deletion by email",
      content: [
        "If you are unable to access the Acaddash mobile application, you can request account deletion by email. Send an email to privacy@acaddash.ng from or identifying your registered email address and clearly request account deletion.",
        "We may request reasonable verification of account ownership before processing. We complete verified requests within 30 days.",
      ],
    },
    {
      id: "what-is-deleted",
      title: "4. What is deleted",
      content: [
        "When an account deletion request is processed, the following information is permanently removed:",
        "• Account and sign-in details: User profile, authentication credentials, active sessions, and authentication tokens across all devices.",
        "• Courses, units and grades: All course codes, course titles, credit units, letter grades, quality points, academic baselines, and cumulative GPA/CGPA calculations.",
        "• Academic plans and targets: Target CGPA goals, graduation planning pathways, semester projections, and planned courses.",
        "• Timetables and schedules: Class timetable entries, lecture rooms, exam schedules, seat numbers, and venue details.",
        "• Uploaded materials and drafts: Any uploaded academic documents or draft onboarding state.",
        "• Chat history with Dash: Conversation history with the AI academic advisor (Dash) is kept in temporary session memory only and is completely erased upon session end.",
        "• Local device data: All locally cached profiles, course ledgers, notification preferences, and offline sync queues stored on your device are cleared.",
      ],
    },
    {
      id: "what-may-be-kept",
      title: "5. What may be kept",
      content: [
        "Certain records may be retained where strictly necessary for legal compliance, dispute resolution, security, fraud prevention, or the establishment and defense of legal claims, with access restricted solely to those legitimate purposes.",
      ],
    },
    {
      id: "backups",
      title: "6. Backups",
      content: [
        "Deleted data may temporarily remain in protected system backups until normal backup lifecycle expiry, subject to technical security requirements. Backups are removed within 30 days.",
      ],
    },
    {
      id: "third-parties",
      title: "7. Third Parties",
      content: [
        "Where relevant, we take reasonable steps to process deletion requests across supporting infrastructure providers (including backend database and email routing services) under applicable contracts and data-protection laws.",
      ],
    },
    {
      id: "withdrawal-and-recovery",
      title: "8. Withdrawal and Recovery",
      content: [
        "Contact us promptly if you wish to withdraw a request before completion. Once deletion is complete, account information and academic history cannot be recovered. If you wish to use Acaddash again in the future, you will need to register a new account.",
      ],
    },
    {
      id: "contact",
      title: "9. Contact",
      content: ["privacy@acaddash.ng | https://acaddash.ng"],
    },
  ],
};
