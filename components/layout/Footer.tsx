export default function Footer() {
  return (
    <footer className="border-t border-[#1F1F1F]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-20 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display italic text-[18px] text-[#F5F5F5]">LORE</span>
        <span className="text-[11px] text-[#6B6B6B] font-mono order-last md:order-none">
          © {new Date().getFullYear()} LORE. All rights reserved.
        </span>

        <div className="flex items-center gap-6">
          {["Work", "Services", "About", "Privacy"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[12px] text-[#6B6B6B] hover:text-[#F5F5F5] transition-colors hidden md:inline"
            >
              {l}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4">
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="text-[#6B6B6B] hover:text-[#F5F5F5] transition-colors">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="#" aria-label="Twitter / X" className="text-[#6B6B6B] hover:text-[#F5F5F5] transition-colors">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 4l16 16M4 20L20 4"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="text-[#6B6B6B] hover:text-[#F5F5F5] transition-colors">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
