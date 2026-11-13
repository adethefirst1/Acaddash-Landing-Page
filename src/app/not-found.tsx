import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-6 text-center">
      {/* Brand Logo */}
      <Link
        href="/"
        className="inline-flex items-center mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy rounded-sm"
        aria-label="Acaddash home"
      >
        <Logo variant="light" height={34} />
      </Link>

      {/* 404 Visual badge */}
      <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-mint text-teal font-heading font-semibold text-xs tracking-wider uppercase mb-6 shadow-xs border border-teal/15">
        404 · Not Found
      </div>

      <h1 className="font-heading font-bold text-3xl sm:text-5xl text-navy tracking-tight leading-tight mb-4 max-w-md">
        This page doesn&apos;t exist.
      </h1>

      <p className="text-muted text-base sm:text-lg max-w-sm mb-8 leading-relaxed">
        The link you followed may be broken or the page may have been moved.
      </p>

      <Button href="/" variant="primary" size="md" className="px-6 py-3">
        Back to home
      </Button>
    </div>
  );
}
