"use client";

import React from "react";
import { SAMPLE_ADVISOR, ChatMessage } from "@/lib/sampleData";

export interface AdvisorScreenProps {
  messages?: ChatMessage[];
  suggestionChips?: string[];
  onChipClick?: (chip: string) => void;
  isTyping?: boolean;
  chatContainerRef?: React.RefObject<HTMLDivElement | null>;
  isInteractive?: boolean;
}

export function AdvisorScreen({
  messages,
  suggestionChips,
  onChipClick,
  isTyping = false,
  chatContainerRef,
  isInteractive = false,
}: AdvisorScreenProps) {
  const currentMessages = messages ?? SAMPLE_ADVISOR.messages;
  const currentChips = suggestionChips ?? SAMPLE_ADVISOR.suggestionChips;

  return (
    <div className="flex flex-col h-full justify-between gap-2">
      {/* Header */}
      <div className="flex items-center justify-between pt-1 shrink-0">
        <div>
          <span className="text-[11px] text-muted block leading-none">
            {SAMPLE_ADVISOR.caption}
          </span>
          <span className="font-heading font-bold text-[20px] text-navy tracking-tight leading-tight">
            {SAMPLE_ADVISOR.title}
          </span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-mint text-teal font-medium text-[10px]">
          {SAMPLE_ADVISOR.tag}
        </span>
      </div>

      {/* Chat Messages scroll area */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto flex flex-col gap-2 py-1 pr-0.5"
      >
        {currentMessages.map((m) => {
          if (m.sender === "user") {
            return (
              <div
                key={m.id}
                className="self-end max-w-[84%] bg-navy text-white rounded-[16px] rounded-tr-[4px] px-3 py-2 text-[10.5px] leading-relaxed shadow-xs"
              >
                {m.text}
              </div>
            );
          }
          return (
            <div
              key={m.id}
              className="self-start max-w-[88%] bg-white text-navy border border-[#E6ECF1] rounded-[16px] rounded-tl-[4px] px-3 py-2 text-[10.5px] leading-relaxed shadow-xs"
            >
              {m.text}
            </div>
          );
        })}

        {/* 3-Dot Typing Indicator */}
        {isTyping && (
          <div className="self-start bg-white text-navy border border-[#E6ECF1] rounded-[16px] rounded-tl-[4px] px-3 py-2.5 shadow-xs flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-bounce [animation-delay:-0.3s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-bounce [animation-delay:-0.15s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-bounce" />
          </div>
        )}
      </div>

      {/* Suggestion Chips */}
      {currentChips.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1 shrink-0">
          {currentChips.map((chip) => (
            <button
              key={chip}
              type="button"
              disabled={!isInteractive || isTyping}
              onClick={() => onChipClick?.(chip)}
              className={`relative after:absolute after:-inset-2 after:content-[''] px-2.5 py-1 rounded-full border border-[#D5DEE7] bg-white text-[10px] text-navy font-medium shadow-xs leading-none transition-all ${
                isInteractive && !isTyping
                  ? "cursor-pointer hover:bg-mint/50 active:scale-95 hover:border-teal/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal"
                  : "cursor-default opacity-80"
              }`}
            >
              {chip}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
