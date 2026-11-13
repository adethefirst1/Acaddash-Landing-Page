import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { APP_URL, NAV_LINKS } from "@/lib/config";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link
          href="/"
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy rounded-sm"
          aria-label="Acaddash home"
        >
          <Logo variant="light" height={28} priority />
        </Link>

        {/* Center: Desktop Navigation Links (hidden under 768px) */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium text-navy/80"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-150 hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: CTA Button */}
        <div className="flex items-center">
          <Button href={APP_URL} variant="primary" size="md">
            Get the app
          </Button>
        </div>
      </div>
    </header>
  );
}
