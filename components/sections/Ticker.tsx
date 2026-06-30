const TEXT = "CONTENT WRITING · SOCIAL MEDIA · BRAND DESIGN · SEO CONTENT · VIDEO SCRIPTS · TRANSLATION · PRESS RELEASES · COPYWRITING · ";

export default function Ticker() {
  const repeated = TEXT + TEXT;
  return (
    <div
      className="w-full overflow-hidden h-[44px] flex items-center border-y border-white/[0.07]"
      style={{ background: "rgba(255,255,255,0.02)" }}
      aria-label="Services ticker"
    >
      <div className="marquee-track whitespace-nowrap flex items-center">
        {[repeated, repeated].map((t, i) => (
          <span key={i} className="font-mono text-[12px] uppercase text-white/30 tracking-widest">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
