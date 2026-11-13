import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { COOKIES_CONTENT } from "@/content/cookies";

export const metadata: Metadata = {
  title: "Cookie policy",
  description:
    "Acaddash Cookie and Tracking Policy explaining the use of cookies and tracking technologies.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiesPage() {
  return <LegalPageLayout content={COOKIES_CONTENT} />;
}
