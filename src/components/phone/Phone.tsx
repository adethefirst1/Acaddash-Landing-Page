import React from "react";
import clsx from "clsx";

export type PhoneTab = "home" | "sim" | "plan" | "chat";

export interface PhoneProps {
  children: React.ReactNode;
  active?: PhoneTab;
  scale?: number;
  className?: string;
  id?: string;
}

export function Phone({
  children,
  active = "home",
  scale = 1,
  className,
  id,
}: PhoneProps) {
  return (
    <div
      id={id}
      style={{
        width: `${300 * scale}px`,
        height: `${620 * scale}px`,
      }}
      className={clsx("relative select-none shrink-0", className)}
    >
      {/* Scaled frame container */}
      <div
        style={{
          width: "300px",
          height: "620px",
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
        className="relative rounded-[46px] p-[9px] bg-ink shadow-[0_25px_60px_-15px_rgba(11,27,43,0.35),0_12px_28px_-8px_rgba(11,27,43,0.2)] ring-1 ring-[#2C4157]"
      >
        {/* Inner screen */}
        <div className="relative w-full h-full rounded-[38px] bg-bg overflow-hidden text-[12px] text-navy font-body flex flex-col">
          {/* Dynamic Island */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[84px] h-[23px] bg-ink rounded-full z-40 flex items-center justify-end pr-2.5">
            {/* Small camera sensor lens */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#162332]/80 border border-white/5" />
          </div>

          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-10 px-6 flex items-center justify-between z-30 pointer-events-none text-[11px] font-semibold text-navy/90 tracking-tight">
            <span>9:41</span>
            {/* Right icons: Cellular, Wifi, Battery */}
            <div className="flex items-center gap-1.5">
              {/* Cellular */}
              <svg width="13" height="9" viewBox="0 0 13 9" fill="currentColor">
                <rect x="0" y="7" width="2" height="2" rx="0.5" />
                <rect x="3.5" y="5" width="2" height="4" rx="0.5" />
                <rect x="7" y="2.5" width="2" height="6.5" rx="0.5" />
                <rect x="10.5" y="0" width="2" height="9" rx="0.5" />
              </svg>
              {/* Wifi */}
              <svg width="12" height="9" viewBox="0 0 12 9" fill="currentColor">
                <path d="M6 7.5a1.2 1.2 0 1 0 0 2.4A1.2 1.2 0 0 0 6 7.5zM3.4 5.2a3.7 3.7 0 0 1 5.2 0 .5.5 0 0 0 .7-.7 4.7 4.7 0 0 0-6.6 0 .5.5 0 0 0 .7.7zM1.1 2.9a7 7 0 0 1 9.8 0 .5.5 0 0 0 .7-.7 8 8 0 0 0-11.2 0 .5.5 0 0 0 .7.7z" />
              </svg>
              {/* Battery */}
              <div className="flex items-center">
                <div className="w-5 h-2.5 rounded-[3px] border border-current p-[1px] flex items-center">
                  <div className="h-full w-3.5 bg-current rounded-[1.5px]" />
                </div>
                <div className="w-[1px] h-1 bg-current rounded-r-sm" />
              </div>
            </div>
          </div>

          {/* Screen Content Body */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden pt-10 pb-20 px-3.5 flex flex-col">
            {children}
          </div>

          {/* Floating Pill Bottom Nav */}
          <nav
            aria-label="App Navigation"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[184px] h-[40px] bg-navy rounded-full shadow-[0_8px_20px_rgba(11,27,43,0.3)] z-40 flex items-center justify-between px-2.5 border border-white/10"
          >
            {/* Home Tab */}
            <div
              className={clsx(
                "flex items-center justify-center transition-all duration-200",
                active === "home"
                  ? "w-8 h-7 bg-white text-navy rounded-full shadow-sm"
                  : "w-8 h-7 text-[#8FA3B6]"
              )}
              title="Home"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 10.5L12 3l9 7.5v9a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9z" />
              </svg>
            </div>

            {/* Simulator Tab */}
            <div
              className={clsx(
                "flex items-center justify-center transition-all duration-200",
                active === "sim"
                  ? "w-8 h-7 bg-white text-navy rounded-full shadow-sm"
                  : "w-8 h-7 text-[#8FA3B6]"
              )}
              title="Simulator"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="21" x2="4" y2="14" />
                <line x1="4" y1="10" x2="4" y2="3" />
                <line x1="12" y1="21" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12" y2="3" />
                <line x1="20" y1="21" x2="20" y2="16" />
                <line x1="20" y1="12" x2="20" y2="3" />
                <circle cx="4" cy="12" r="2" />
                <circle cx="12" cy="10" r="2" />
                <circle cx="20" cy="14" r="2" />
              </svg>
            </div>

            {/* Planner Tab */}
            <div
              className={clsx(
                "flex items-center justify-center transition-all duration-200",
                active === "plan"
                  ? "w-8 h-7 bg-white text-navy rounded-full shadow-sm"
                  : "w-8 h-7 text-[#8FA3B6]"
              )}
              title="Planner"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19h4v-4h4v-4h4V7h4" />
                <circle cx="4" cy="19" r="1.5" fill="currentColor" />
                <circle cx="20" cy="7" r="1.5" fill="currentColor" />
              </svg>
            </div>

            {/* Advisor Tab */}
            <div
              className={clsx(
                "flex items-center justify-center transition-all duration-200",
                active === "chat"
                  ? "w-8 h-7 bg-white text-navy rounded-full shadow-sm"
                  : "w-8 h-7 text-[#8FA3B6]"
              )}
              title="Advisor"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

