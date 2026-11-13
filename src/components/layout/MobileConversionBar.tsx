"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/config";

export function MobileConversionBar() {
  const [heroPassed, setHeroPassed] = useState(false);
  const [downloadInView, setDownloadInView] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      const heroEl = document.getElementById("hero");
      const downloadEl = document.getElementById("download");

      if (heroEl) {
        const heroRect = heroEl.getBoundingClientRect();
        // Past hero if bottom of hero is above top of viewport or header
        setHeroPassed(heroRect.bottom <= 80);
      }

      if (downloadEl) {
        const dlRect = downloadEl.getBoundingClientRect();
        const isInView = dlRect.top < window.innerHeight && dlRect.bottom > 0;
        setDownloadInView(isInView);
      }
    };

    checkVisibility();

    // 1. Observe #hero
    const heroEl = document.getElementById("hero");
    let heroObserver: IntersectionObserver | null = null;
    if (heroEl) {
      heroObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
            setHeroPassed(true);
          } else if (entry.isIntersecting) {
            setHeroPassed(false);
          }
        },
        { root: null, threshold: 0 }
      );
      heroObserver.observe(heroEl);
    }

    // 2. Observe #download
    const downloadEl = document.getElementById("download");
    let downloadObserver: IntersectionObserver | null = null;
    if (downloadEl) {
      downloadObserver = new IntersectionObserver(
        ([entry]) => {
          setDownloadInView(entry.isIntersecting);
        },
        { root: null, threshold: 0 }
      );
      downloadObserver.observe(downloadEl);
    }

    window.addEventListener("scroll", checkVisibility, { passive: true });

    return () => {
      heroObserver?.disconnect();
      downloadObserver?.disconnect();
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  const isVisible = heroPassed && !downloadInView;

  return (
    <div
      aria-hidden={!isVisible}
      inert={!isVisible ? true : undefined}
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-border px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-4px_24px_rgba(20,45,70,0.1)] transition-all duration-300 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto visible"
          : "translate-y-full opacity-0 pointer-events-none invisible"
      }`}
    >
      <Button
        href={APP_URL}
        variant="primary"
        size="md"
        tabIndex={isVisible ? 0 : -1}
        className="w-full text-center justify-center py-3 text-sm font-semibold shadow-md"
      >
        Get the app
      </Button>
    </div>
  );
}
