import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { DELETE_ACCOUNT_CONTENT } from "@/content/delete-account";

export const metadata: Metadata = {
  title: "Delete your account",
  description:
    "Acaddash Account and Data Deletion Policy and instructions for requesting account deletion.",
  alternates: {
    canonical: "/delete-account",
  },
};

export default function DeleteAccountPage() {
  return <LegalPageLayout content={DELETE_ACCOUNT_CONTENT} />;
}
