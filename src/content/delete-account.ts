import { LegalPageContent } from "./types";

export const DELETE_ACCOUNT_CONTENT: LegalPageContent = {
  pageTitle: "Delete your account",
  businessHeader: "ACADDASH TECHNOLOGIES",
  metadataLine:
    "Acaddash Technologies | CAC BN 10001799 | 72, Samuel Ekundayo Road, Badagry, Lagos State, Nigeria | privacy@acaddash.ng | https://acaddash.ng",
  lastUpdated: "14 November 2026",
  toc: [
    { id: "purpose", label: "1. Purpose" },
    { id: "how-to-request", label: "2. How to Request" },
    { id: "processing", label: "3. Processing" },
    { id: "permitted-retention", label: "4. Permitted Retention" },
    { id: "backups", label: "5. Backups" },
    { id: "third-parties", label: "6. Third Parties" },
    { id: "withdrawal-and-recovery", label: "7. Withdrawal and Recovery" },
    { id: "contact", label: "8. Contact" },
  ],
  sections: [
    {
      id: "purpose",
      title: "1. Purpose",
      content: [
        "Acaddash respects users’ rights to request deletion of accounts and associated personal information.",
      ],
    },
    {
      id: "how-to-request",
      title: "2. How to Request",
      content: [
        "Email privacy@acaddash.ng from or identifying your registered email address and clearly request account deletion. We may request reasonable verification of account ownership.",
      ],
    },
    {
      id: "processing",
      title: "3. Processing",
      content: [
        "Following verification, we will take appropriate steps to terminate account access, delete or anonymise associated personal and academic information, remove associated uploads where applicable and revoke access credentials where supported.",
      ],
    },
    {
      id: "permitted-retention",
      title: "4. Permitted Retention",
      content: [
        "Information may be retained where necessary for legal compliance, dispute resolution, security, fraud prevention or legal claims, with access restricted to those purposes.",
      ],
    },
    {
      id: "backups",
      title: "5. Backups",
      content: [
        "Deleted data may temporarily remain in protected backups until normal backup lifecycle expiry, subject to legal and technical requirements. Exact backup retention periods must be verified.",
      ],
    },
    {
      id: "third-parties",
      title: "6. Third Parties",
      content: [
        "Where relevant, we will take reasonable steps to process deletion requests across supporting providers under applicable contracts and law.",
      ],
    },
    {
      id: "withdrawal-and-recovery",
      title: "7. Withdrawal and Recovery",
      content: [
        "Contact us promptly if you wish to withdraw a request before completion. Once deletion is complete, account information may not be recoverable.",
      ],
    },
    {
      id: "contact",
      title: "8. Contact",
      content: ["privacy@acaddash.ng | https://acaddash.ng"],
    },
  ],
  notice:
    "Publication draft — verify implementation details and obtain appropriate Nigerian legal review before use.",
};
