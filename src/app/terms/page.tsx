import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { TERMS_CONTENT } from "@/content/terms";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Acaddash Terms of Service, Academic Disclaimer, and Acceptable Use Policy.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return <LegalPageLayout content={TERMS_CONTENT} />;
}
