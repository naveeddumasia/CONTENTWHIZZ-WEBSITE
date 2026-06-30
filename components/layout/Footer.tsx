import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07]" style={{ background: "rgba(255,255,255,0.02)" }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-12 pb-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div>
            <Logo className="h-7 w-auto mb-3" />
            <p className="text-[12px] text-white/35 max-w-xs leading-relaxed">
              Premium content marketing agency.<br />🇮🇳 India · 🇦🇪 Dubai · 🇬🇧 UK<br />We create, you grow.
            </p>
            <p className="text-[12px] text-white/20 mt-3">
              © {new Date().getFullYear()} ContentWhizz. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap gap-10">
            <div>
              <p className="font-mono text-[12px] uppercase tracking-eyebrow text-white/25 mb-3">Navigation</p>
              {["Services", "Work", "About", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="block text-[13px] text-white/35 hover:text-white transition-colors mb-1.5">
                  {l}
                </a>
              ))}
            </div>
            <div>
              <p className="font-mono text-[12px] uppercase tracking-eyebrow text-white/25 mb-3">Contact</p>
              <a href="tel:09016249312" className="block text-[13px] text-white/35 hover:text-white transition-colors mb-1.5">+91 90162 49312</a>
              <a href="tel:09638280338" className="block text-[13px] text-white/35 hover:text-white transition-colors mb-1.5">+91 96382 80338</a>
              <a href="mailto:info@contentwhizz.in" className="block text-[13px] text-white/35 hover:text-white transition-colors mb-1.5">info@contentwhizz.in</a>
              <a href="http://www.contentwhizz.in/" className="block text-[13px] text-white/35 hover:text-white transition-colors mb-1.5">contentwhizz.in</a>
            </div>
            <div>
              <p className="font-mono text-[12px] uppercase tracking-eyebrow text-white/25 mb-3">Hours</p>
              <p className="text-[13px] text-white/35 mb-1">Mon–Sat</p>
              <p className="text-[13px] font-semibold text-white/70 mb-1">10:00 – 19:00 IST</p>
              <p className="text-[13px] text-white/25">Sunday: Closed</p>
              <div className="flex gap-3 mt-4">
                {["LI", "IG", "FB"].map((s) => (
                  <a key={s} href="#" className="w-8 h-8 rounded-full glass flex items-center justify-center font-mono text-[12px] text-white/30 hover:text-white hover:bg-white/10 transition-all">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="border-t border-white/[0.05] pt-6 overflow-hidden">
          <p
            className="select-none leading-none font-black uppercase text-white/[0.06]"
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: "clamp(60px, 14vw, 180px)",
              letterSpacing: "-0.04em",
            }}
          >
            CONTENTWHIZZ
          </p>
        </div>
      </div>
    </footer>
  );
}
