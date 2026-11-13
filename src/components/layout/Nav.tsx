"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { APP_URL, NAV_LINKS } from "@/lib/config";

const SPY_SECTIONS = ["calculator", "simulator", "planner", "advisor"] as const;
type SectionId = (typeof SPY_SECTIONS)[number];

export function Nav() {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const hamburgerBtnRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  // 1. Scroll-spy with IntersectionObserver
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find the entry with highest intersection ratio that isIntersecting
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length === 0) {
        return;
      }

      // Pick the entry closest to the top of viewport
      visibleEntries.sort(
        (a, b) =>
          Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top)
      );

      const topEntry = visibleEntries[0];
      if (topEntry && SPY_SECTIONS.includes(topEntry.target.id as SectionId)) {
        setActiveSection(topEntry.target.id as SectionId);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-15% 0px -65% 0px",
      threshold: [0, 0.2, 0.5, 0.8],
    });

    // Also observe hero and below-advisor sections to clear active state
    const sectionsToObserve = [
      "hero",
      ...SPY_SECTIONS,
      "details",
      "new-students",
      "download",
    ];

    const elements: HTMLElement[] = [];
    sectionsToObserve.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        elements.push(el);
        observer.observe(el);
      }
    });

    // Special observer for clearing when in hero or past advisor
    const boundaryObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === "hero" || id === "details" || id === "new-students" || id === "download") {
              setActiveSection(null);
            }
          }
        });
      },
      { root: null, rootMargin: "-10% 0px -40% 0px", threshold: [0.1, 0.3] }
    );

    ["hero", "details", "new-students", "download"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) boundaryObserver.observe(el);
    });

    return () => {
      observer.disconnect();
      boundaryObserver.disconnect();
    };
  }, []);

  // 2. Nav faint shadow when scrolled > 8px
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. Mobile menu: focus trap, Escape key, and body scroll lock
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      // Move focus into panel
      firstMobileLinkRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMobileMenuOpen(false);
          hamburgerBtnRef.current?.focus();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const handleMobileMenuToggle = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      hamburgerBtnRef.current?.focus();
    } else {
      setMobileMenuOpen(true);
    }
  };

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    hamburgerBtnRef.current?.focus();
  };

  return (
    <>
      {/* Skip to content accessibility link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-navy focus:text-white focus:font-medium focus:text-sm focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border transition-shadow duration-200 ${
          isScrolled ? "shadow-[0_4px_20px_rgba(20,45,70,0.06)]" : "shadow-none"
        }`}
      >
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
            {NAV_LINKS.map((link) => {
              const targetId = link.href.replace("#", "") as SectionId;
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy rounded-sm ${
                    isActive
                      ? "text-teal font-semibold"
                      : "hover:text-teal text-navy/80"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal rounded-full transition-all duration-200"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: CTA Button & Mobile Hamburger Button */}
          <div className="flex items-center gap-3">
            <Button href={APP_URL} variant="primary" size="md">
              Get the app
            </Button>

            {/* Mobile Hamburger Button (under 768px) */}
            <button
              ref={hamburgerBtnRef}
              type="button"
              onClick={handleMobileMenuToggle}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-navy border border-border hover:bg-bg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel (under 768px) */}
        <div
          id="mobile-nav-panel"
          ref={mobilePanelRef}
          aria-hidden={!mobileMenuOpen}
          className={`md:hidden fixed top-16 left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-border shadow-2xl transition-all duration-200 ease-out ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto visible"
              : "opacity-0 -translate-y-2 pointer-events-none invisible"
          }`}
        >
          <div className="px-6 py-6 flex flex-col gap-2">
            {NAV_LINKS.map((link, idx) => {
              const targetId = link.href.replace("#", "") as SectionId;
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.href}
                  ref={idx === 0 ? firstMobileLinkRef : undefined}
                  href={link.href}
                  onClick={handleMobileLinkClick}
                  className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-heading font-medium transition-colors ${
                    isActive
                      ? "bg-mint text-teal font-semibold"
                      : "text-navy hover:bg-bg hover:text-teal"
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-teal" aria-hidden="true" />
                  )}
                </a>
              );
            })}

            <div className="pt-4 mt-2 border-t border-border">
              <Button
                href={APP_URL}
                variant="primary"
                size="md"
                className="w-full text-center justify-center py-3.5 text-base"
              >
                Get the app
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Outside tap overlay to close mobile menu */}
      {mobileMenuOpen && (
        <div
          aria-hidden="true"
          onClick={() => {
            setMobileMenuOpen(false);
            hamburgerBtnRef.current?.focus();
          }}
          className="md:hidden fixed inset-0 z-40 bg-navy/20 backdrop-blur-xs top-16"
        />
      )}
    </>
  );
}
