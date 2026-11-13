import { SAMPLE_ADVISOR } from "@/lib/sampleData";

export function AdvisorScreen() {
  const { title, tag, caption, messages, suggestionChips } = SAMPLE_ADVISOR;

  return (
    <div className="flex flex-col gap-2.5">
      {/* Header */}
      <div className="flex items-center justify-between pt-1">
        <div>
          <span className="text-[11px] text-muted block leading-none">
            {caption}
          </span>
          <span className="font-heading font-bold text-[20px] text-navy tracking-tight leading-tight">
            {title}
          </span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-mint text-teal font-medium text-[10px]">
          {tag}
        </span>
      </div>

      {/* Chat Messages */}
      <div className="flex flex-col gap-2 pt-0.5">
        {messages.map((m) => {
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
      </div>

      {/* Suggestion Chips */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {suggestionChips.map((chip) => (
          <button
            key={chip}
            type="button"
            className="px-2.5 py-1 rounded-full border border-[#D5DEE7] bg-white text-[10px] text-navy font-medium shadow-xs hover:bg-mint/40 transition-colors leading-none"
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}
