import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="glass border-t border-black/5">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <Logo className="h-7 w-auto text-[#1D1D1F] mb-3" />
            <p className="text-[12px] text-[#6E6E73] max-w-xs leading-relaxed">
              Premium content marketing agency based in Surat, India. We create, you grow.
            </p>
            <p className="text-[11px] text-[#6E6E73] mt-3">
              © {new Date().getFullYear()} ContentWhizz. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap gap-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-eyebrow text-[#6E6E73] mb-3">Navigation</p>
              {["Services", "Work", "About", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="block text-[13px] text-[#6E6E73] hover:text-[#1D1D1F] transition-colors mb-1.5">
                  {l}
                </a>
              ))}
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-eyebrow text-[#6E6E73] mb-3">Contact</p>
              <a href="tel:09016249312" className="block text-[13px] text-[#6E6E73] hover:text-[#1D1D1F] transition-colors mb-1.5">090162 49312</a>
              <a href="tel:09638280338" className="block text-[13px] text-[#6E6E73] hover:text-[#1D1D1F] transition-colors mb-1.5">096382 80338</a>
              <a href="http://www.contentwhizz.in/" className="block text-[13px] text-[#6C47FF] hover:underline mb-1.5">contentwhizz.in</a>
              <p className="text-[13px] text-[#6E6E73]">Surat, Gujarat, India</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-eyebrow text-[#6E6E73] mb-3">Hours</p>
              <p className="text-[13px] text-[#6E6E73] mb-1">Mon–Sat</p>
              <p className="text-[13px] font-semibold text-[#1D1D1F] mb-1">10:00 – 19:00</p>
              <p className="text-[13px] text-[#6E6E73]">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
