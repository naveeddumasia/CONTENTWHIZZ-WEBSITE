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

const stats = [
  { value: "50+",  label: "International brands" },
  { value: "1K+",  label: "Pieces written" },
  { value: "10",   label: "Years of craft" },
  { value: "235K", label: "IG followers" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-pad overflow-hidden">

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[12px] uppercase tracking-eyebrow text-white/35 mb-6"
        >
          [ PROOF OF WORK ]
        </motion.p>

        {/* Headline + CTA row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="h-display text-white"
            style={{ fontSize: "clamp(42px, 6.5vw, 96px)" }}
          >
            The words that<br />
            <span className="gradient-text">built brands.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="flex flex-col gap-4 lg:items-end"
          >
            <p className="text-[15px] text-white/40 leading-relaxed max-w-xs lg:text-right">
              Real briefs. Real brands. Real results.<br />
              This is 10 years of craft — written by Naveed, personally.
            </p>
            <motion.a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-[15px] font-bold btn-black"
            >
              View Naveed's Portfolio
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8.5 3.5L13 8l-4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-14 rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.08)" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center py-8 px-6 text-center"
              style={{ background: "rgba(10,10,10,0.85)" }}>
              <p className="h-display text-white" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>{s.value}</p>
              <p className="font-mono text-[11px] uppercase tracking-eyebrow text-white/35 mt-2">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Category chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex flex-wrap gap-3 items-center"
        >
          <span className="font-mono text-[11px] uppercase tracking-eyebrow text-white/25 mr-2">Covers</span>
          {categories.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * 0.05, duration: 0.4 }}
              className="text-[13px] font-mono px-4 py-2 rounded-full text-white/55 border border-white/10"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              {c}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
