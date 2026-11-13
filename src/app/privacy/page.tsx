import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { PRIVACY_CONTENT } from "@/content/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Acaddash Privacy Policy explains how personal and academic data is collected, used, and protected.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return <LegalPageLayout content={PRIVACY_CONTENT} />;
}
