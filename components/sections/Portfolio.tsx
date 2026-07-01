"use client";

import { motion } from "framer-motion";

const PORTFOLIO_URL = "https://cwexperiments.wixstudio.com/naveedportfolio";

const categories = [
  "Brand Copywriting",
  "SEO Articles",
  "Press Releases",
  "Social Media",
  "Blog Writing",
  "Video Scripts",
  "Email Campaigns",
  "Product Descriptions",
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-pad overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-[12px] uppercase tracking-eyebrow text-white/35 mb-4">[ PROOF OF WORK ]</p>
            <h2 className="h-display text-white" style={{ fontSize: "clamp(40px, 6vw, 88px)" }}>
              The words that<br />
              <span className="gradient-text">built brands.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-[15px] text-white/40 leading-relaxed max-w-sm lg:text-right"
          >
            Every piece here was written by Naveed — personally. Real briefs, real brands, real results. This isn't a mood board. This is 10 years of craft.
          </motion.p>
        </div>

        {/* Main portfolio card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2rem] overflow-hidden group"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 0 120px rgba(255,255,255,0.03), 0 4px 40px rgba(0,0,0,0.6)",
          }}
        >
          {/* Ambient top glow */}
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)" }} />

          <div className="p-8 md:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

              {/* Left — browser mockup */}
              <div className="lg:col-span-3">
                {/* Browser chrome */}
                <div className="rounded-2xl overflow-hidden"
                  style={{ border: "1px solid rgba(255,255,255,0.10)", boxShadow: "0 20px 80px rgba(0,0,0,0.8)" }}>

                  {/* Top bar */}
                  <div className="flex items-center gap-3 px-4 py-3"
                    style={{ background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                    </div>
                    <div className="flex-1 mx-3 py-1 px-3 rounded-md text-[11px] text-white/25 font-mono"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      cwexperiments.wixstudio.com/naveedportfolio
                    </div>
                  </div>

                  {/* Portfolio preview interior */}
                  <div className="relative h-[340px] flex flex-col justify-between p-8 overflow-hidden"
                    style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)" }}>

                    {/* Decorative text lines simulating portfolio content */}
                    <div className="space-y-3 pointer-events-none select-none" aria-hidden="true">
                      <div className="h-8 w-48 rounded-md bg-white/10" />
                      <div className="h-4 w-80 rounded bg-white/05" />
                      <div className="h-4 w-64 rounded bg-white/04" />
                    </div>

                    <div className="grid grid-cols-3 gap-3 pointer-events-none select-none" aria-hidden="true">
                      {[0.10, 0.07, 0.05].map((o, i) => (
                        <div key={i} className="rounded-xl p-4 space-y-2"
                          style={{ background: `rgba(255,255,255,${o})`, border: "1px solid rgba(255,255,255,0.06)" }}>
                          <div className="h-3 w-14 rounded bg-white/20" />
                          <div className="h-2.5 w-full rounded bg-white/08" />
                          <div className="h-2.5 w-4/5 rounded bg-white/06" />
                        </div>
                      ))}
                    </div>

                    {/* Hover CTA overlay */}
                    <motion.a
                      href={PORTFOLIO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: "rgba(10,10,10,0.7)", backdropFilter: "blur(8px)" }}
                    >
                      <span className="text-white font-bold text-[18px] flex items-center gap-3">
                        Open Portfolio
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M4 10h12M11 5l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Right — info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-eyebrow text-white/30 mb-4">What's inside</p>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((c) => (
                      <span key={c}
                        className="text-[12px] font-mono px-3 py-1.5 rounded-full text-white/50 border border-white/10"
                        style={{ background: "rgba(255,255,255,0.04)" }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { n: "50+",  l: "International brands served" },
                    { n: "1K+",  l: "Pieces of content written" },
                    { n: "10",   l: "Years of active writing" },
                  ].map((s) => (
                    <div key={s.l} className="flex items-center gap-4 py-3"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      <p className="h-display text-white text-[28px] w-16 flex-shrink-0">{s.n}</p>
                      <p className="text-[13px] text-white/40">{s.l}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={PORTFOLIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 w-full justify-center py-4 rounded-2xl text-[15px] font-bold btn-black transition-transform hover:scale-[1.02]"
                >
                  View Full Portfolio
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8.5 3.5L13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
