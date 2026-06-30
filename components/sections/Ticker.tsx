const TEXT = "CONTENT WRITING · SOCIAL MEDIA · BRAND DESIGN · SEO CONTENT · VIDEO SCRIPTS · TRANSLATION · THOUGHT LEADERSHIP · GRAPHICS · ";

export default function Ticker() {
  const repeated = TEXT + TEXT;
  return (
    <div
      className="w-full overflow-hidden h-[44px] flex items-center glass"
      style={{ borderLeft: "none", borderRight: "none", borderRadius: 0 }}
      aria-label="Services ticker"
    >
      <div className="marquee-track whitespace-nowrap flex items-center">
        {[repeated, repeated].map((t, i) => (
          <span key={i} className="font-mono text-[11px] uppercase text-[#0A0A0A]/50 tracking-widest">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
