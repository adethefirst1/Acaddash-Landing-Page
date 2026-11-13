"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected runtime errors
    console.error("Runtime error caught by boundary:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-6 text-center">
      <Link
        href="/"
        className="inline-flex items-center mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy rounded-sm"
        aria-label="Acaddash home"
      >
        <Logo variant="light" height={34} />
      </Link>

      <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-mint text-teal font-heading font-semibold text-xs tracking-wider uppercase mb-6 shadow-xs border border-teal/15">
        Unexpected Error
      </div>

      <h1 className="font-heading font-bold text-3xl sm:text-5xl text-navy tracking-tight leading-tight mb-4 max-w-md">
        Something went wrong.
      </h1>

      <p className="text-muted text-base sm:text-lg max-w-sm mb-8 leading-relaxed">
        An error occurred while loading this page. You can try refreshing the view.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center justify-center font-medium transition-all duration-150 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer bg-navy text-white hover:bg-navy-deep focus-visible:ring-navy px-6 py-3 text-sm shadow-xs"
        >
          Try again
        </button>

        <Button href="/" variant="ghost" size="md" className="px-6 py-3 text-sm">
          Back to home
        </Button>
      </div>
    </div>
  );
}

