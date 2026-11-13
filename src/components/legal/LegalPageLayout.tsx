import React from "react";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { LegalPageContent } from "@/content/types";

function renderFormattedText(text: string): React.ReactNode {
  const parts = text.split(/(privacy@acaddash\.ng|https:\/\/acaddash\.ng)/g);
  return parts.map((part, i) => {
    if (part === "privacy@acaddash.ng") {
      return (
        <a
          key={i}
          href="mailto:privacy@acaddash.ng"
          className="underline underline-offset-2 text-teal hover:text-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-xs break-all"
        >
          {part}
        </a>
      );
    }
    if (part === "https://acaddash.ng") {
      return (
        <a
          key={i}
          href="https://acaddash.ng"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-teal hover:text-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-xs break-all"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

export function LegalPageLayout({ content }: { content: LegalPageContent }) {
  return (
    <>
      <Nav />
      <main
        id="main-content"
        className="flex-1 pt-28 sm:pt-36 pb-20 px-4 sm:px-6 bg-bg text-navy min-h-screen"
      >
        <div className="max-w-[720px] mx-auto w-full">
          {/* Back to Home Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:underline mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-sm"
          >
            ← Back to home
          </Link>

          {/* Document Header */}
          <header className="mb-8">
            <p className="text-xs uppercase tracking-wider font-semibold text-muted mb-2">
              {content.businessHeader}
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-5xl text-navy tracking-tight leading-tight mb-3">
              {content.pageTitle}
            </h1>
            <p className="text-xs text-muted mb-2 leading-relaxed break-words">
              {renderFormattedText(content.metadataLine)}
            </p>
            <p className="text-xs font-semibold text-navy/70">
              Last updated: {content.lastUpdated}
            </p>
          </header>

          {/* On this page TOC */}
          {content.toc && content.toc.length > 0 && (
            <nav
              aria-labelledby="toc-heading"
              className="bg-white border border-border rounded-2xl p-6 mb-12 shadow-xs"
            >
              <h2
                id="toc-heading"
                className="text-xs font-semibold uppercase tracking-wider text-muted mb-4"
              >
                On this page
              </h2>
              <ul className="space-y-2 text-sm">
                {content.toc.map((item) => (
                  <li
                    key={item.id}
                    className={
                      item.level === 3
                        ? "pl-4 text-xs sm:text-sm text-muted"
                        : "font-medium text-navy"
                    }
                  >
                    <a
                      href={`#${item.id}`}
                      className="hover:text-teal underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-xs transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Single Document Content */}
          {content.sections && (
            <div className="space-y-10 text-base leading-[1.7] text-navy/90">
              {content.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 space-y-3"
                >
                  <h2 className="font-heading font-bold text-xl sm:text-2xl text-navy tracking-tight">
                    {section.title}
                  </h2>
                  {section.content.map((p, idx) => (
                    <p key={idx} className="leading-[1.7] text-navy/85">
                      {renderFormattedText(p)}
                    </p>
                  ))}
                </section>
              ))}

              {content.notice && (
                <aside
                  aria-label="Legal draft notice"
                  className="mt-12 p-4 rounded-xl border border-border bg-white text-xs text-muted leading-relaxed"
                >
                  {content.notice}
                </aside>
              )}
            </div>
          )}

          {/* Multi-Document Content (e.g. Terms of Service, Academic Disclaimer, Acceptable Use Policy) */}
          {content.subDocuments && (
            <div className="space-y-16 text-base leading-[1.7] text-navy/90">
              {content.subDocuments.map((subDoc) => (
                <article
                  key={subDoc.id}
                  id={subDoc.id}
                  className="scroll-mt-28 space-y-8 pt-8 first:pt-0 border-t border-border first:border-0"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-muted mb-1">
                      {subDoc.businessHeader}
                    </p>
                    <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy tracking-tight mb-2">
                      {subDoc.title}
                    </h2>
                    <p className="text-xs text-muted mb-1 leading-relaxed break-words">
                      {renderFormattedText(subDoc.metadataLine)}
                    </p>
                    <p className="text-xs font-semibold text-navy/70">
                      Last updated: {subDoc.lastUpdated}
                    </p>
                  </div>

                  <div className="space-y-8">
                    {subDoc.sections.map((sec) => (
                      <section
                        key={sec.id}
                        id={sec.id}
                        className="scroll-mt-28 space-y-3"
                      >
                        <h3 className="font-heading font-bold text-lg sm:text-xl text-navy tracking-tight">
                          {sec.title}
                        </h3>
                        {sec.content.map((p, idx) => (
                          <p key={idx} className="leading-[1.7] text-navy/85">
                            {renderFormattedText(p)}
                          </p>
                        ))}
                      </section>
                    ))}
                  </div>

                  {subDoc.notice && (
                    <aside
                      aria-label="Document notice"
                      className="mt-8 p-4 rounded-xl border border-border bg-white text-xs text-muted leading-relaxed"
                    >
                      {subDoc.notice}
                    </aside>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
