import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PRIVACY_CONTENT } from "@/content/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Acaddash Privacy Policy",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  const { title, lastUpdated, statusNotice, sections } = PRIVACY_CONTENT;

  return (
    <>
      <Nav />
      <main className="flex-1 pt-28 sm:pt-36 pb-20 px-6 bg-bg text-navy">
        <div className="max-w-[720px] mx-auto">
          {/* Back to Home Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:underline mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-sm"
          >
            ← Back to home
          </Link>

          {/* Heading */}
          <h1 className="font-heading font-bold text-3xl sm:text-5xl text-navy tracking-tight leading-tight mb-2">
            {title}
          </h1>

          <div className="text-xs text-muted mb-6">
            Last updated: {lastUpdated}
          </div>

          {/* Status Notice */}
          <div className="bg-mint/80 border border-teal/20 rounded-xl p-4 text-sm font-medium text-teal mb-10">
            {statusNotice}
          </div>

          {/* Structured Document Content */}
          <div className="space-y-8 text-base leading-relaxed text-navy/90">
            {sections.map((section) => (
              <section key={section.heading} className="space-y-3">
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-navy tracking-tight">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-muted leading-relaxed">
                    {p}
                  </p>
                ))}
                {section.listItems && (
                  <ul className="list-disc list-inside space-y-1.5 text-muted pl-2">
                    {section.listItems.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
