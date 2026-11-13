import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions or feedback? Email us.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-28 sm:pt-36 pb-24 px-6 bg-bg text-navy">
        <div className="max-w-[720px] mx-auto">
          {/* Back to Home Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:underline mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-sm"
          >
            ← Back to home
          </Link>

          {/* Heading */}
          <h1 className="font-heading font-bold text-3xl sm:text-5xl text-navy tracking-tight leading-tight mb-4">
            Contact
          </h1>

          <p className="text-muted text-lg sm:text-xl leading-relaxed mb-8">
            Questions or feedback? Email us.
          </p>

          <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted block mb-2">
              Email Support
            </span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-heading font-bold text-xl sm:text-2xl text-teal hover:underline break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-sm"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
