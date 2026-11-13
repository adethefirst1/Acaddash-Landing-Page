import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { FOOTER_LINKS } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-ink text-subtle border-t border-navy-deep pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-bright rounded-sm"
            aria-label="Acaddash home"
          >
            <Logo variant="dark" height={28} />
          </Link>

          {/* Links: stacked vertically & left-aligned on mobile, horizontal on md+ */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-sm"
          >
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-bright rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright: left-aligned on mobile, right on md+ */}
          <div className="text-xs text-subtle">
            © 2026 Acaddash Technologies
          </div>
        </div>
      </div>
    </footer>
  );
}

