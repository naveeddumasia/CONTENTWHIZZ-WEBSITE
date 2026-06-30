const TEXT = "CONTENT WRITING · SOCIAL MEDIA · BRAND DESIGN · SEO CONTENT · VIDEO SCRIPTS · TRANSLATION · THOUGHT LEADERSHIP · GRAPHICS · ";

export default function Ticker() {
  const repeated = TEXT + TEXT;
  return (
    <div
      className="w-full overflow-hidden h-[48px] flex items-center"
      style={{ background: "#0A0A0A" }}
      aria-label="Services ticker"
    >
      <div className="marquee-track whitespace-nowrap flex items-center">
        {[repeated, repeated].map((t, i) => (
          <span key={i} className="font-mono text-[12px] uppercase text-white/90 tracking-widest pr-0">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
