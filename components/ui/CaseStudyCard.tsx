"use client";

import { motion } from "framer-motion";

interface Props { num: string; client: string; title: string; tag: string; index: number; }

export default function CaseStudyCard({ num, client, title, tag, index }: Props) {
  return (
    <motion.article
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[280px] overflow-hidden relative group"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] rounded-t-3xl bg-white/10" />

      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[11px] uppercase tracking-eyebrow text-white/35">{client}</span>
          <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white/8 text-white/60 border border-white/10">{tag}</span>
        </div>
        <p className="font-mono text-[36px] font-bold text-white/[0.05] leading-none select-none">{num}</p>
      </div>

      <div>
        <h3 className="font-display italic text-[22px] md:text-[24px] text-white leading-snug mt-4">{title}</h3>
        <motion.p initial={{ opacity: 0, x: -8 }} whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-3 text-[13px] text-white/50 font-semibold">
          View Case Study →
        </motion.p>
      </div>
    </motion.article>
  );
}
