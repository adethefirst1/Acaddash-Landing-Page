"use client";

import React, { useState, useRef, useEffect } from "react";
import { Phone } from "@/components/phone/Phone";
import { AdvisorScreen } from "@/components/phone/screens/AdvisorScreen";
import { SAMPLE_ADVISOR, ChatMessage } from "@/lib/sampleData";

export interface InteractiveAdvisorProps {
  scale?: number;
  className?: string;
}

const CHIP_REPLIES: Record<string, string> = {
  "Plan my next semester":
    "Register between 18 and 24 units. To stay on track for 4.40, aim for about a 4.67 average across your remaining 54 units, and use the simulator to see which courses to prioritise.",
  "Explain retakes":
    "Rules differ between universities, so check your department's handbook. Acaddash lets you compare how each approach changes your CGPA.",
};

export function InteractiveAdvisor({
  scale = 1,
  className = "",
}: InteractiveAdvisorProps) {
  // Start with the first exchange (m1 and m2)
  const [messages, setMessages] = useState<ChatMessage[]>(
    SAMPLE_ADVISOR.messages.slice(0, 2)
  );
  const [availableChips, setAvailableChips] = useState<string[]>([
    "Plan my next semester",
    "Explain retakes",
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom as messages or typing indicator changes
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleChipClick = (chip: string) => {
    setHasInteracted(true);

    // Remove selected chip
    setAvailableChips((prev) => prev.filter((c) => c !== chip));

    // Append user message
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: chip,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Typing delay ~700ms
    setTimeout(() => {
      const replyText =
        CHIP_REPLIES[chip] ||
        "Acaddash helps you model different outcomes based on your department's specific curriculum.";
      const advisorMsg: ChatMessage = {
        id: `a-${Date.now()}`,
        sender: "advisor",
        text: replyText,
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, advisorMsg]);
    }, 700);
  };

  return (
    <div className={`flex flex-col items-center ${className}`.trim()}>
      <Phone active="chat" scale={scale}>
        <AdvisorScreen
          messages={messages}
          suggestionChips={availableChips}
          onChipClick={handleChipClick}
          isTyping={isTyping}
          chatContainerRef={chatContainerRef}
          isInteractive={true}
        />
      </Phone>

      {/* Discoverability hint chip */}
      {!hasInteracted && (
        <div className="mt-4 px-3.5 py-1 rounded-full bg-white/90 border border-teal/20 text-teal text-[11px] font-medium shadow-xs animate-bounce flex items-center gap-1.5 backdrop-blur-xs select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-teal" />
          <span>Tap a question</span>
        </div>
      )}

      {/* Small grey caption */}
      <span className="text-[11px] text-muted mt-2">Sample replies</span>
    </div>
  );
}

