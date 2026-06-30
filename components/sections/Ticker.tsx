const TEXT =
  "CONTENT STRATEGY · BRAND VOICE · EDITORIAL PLANNING · SEO CONTENT · THOUGHT LEADERSHIP · CASE STUDIES · EMAIL MARKETING · ";

export default function Ticker() {
  // Double the text so the seamless loop works
  const repeated = TEXT + TEXT;

  return (
    <div
      className="w-full bg-[#F5F5F5] overflow-hidden h-[52px] flex items-center"
      aria-label="Services ticker"
    >
      <div className="marquee-track whitespace-nowrap flex items-center">
        <span className="font-mono text-[13px] uppercase text-[#0A0A0A] tracking-widest pr-0">
          {repeated}
        </span>
        <span className="font-mono text-[13px] uppercase text-[#0A0A0A] tracking-widest">
          {repeated}
        </span>
      </div>
    </div>
  );
}
