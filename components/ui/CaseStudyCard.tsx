"use client";

import { motion } from "framer-motion";

const ACCENTS = ["#0A0A0A", "#2A2A2A", "#3D3D3D"];

interface Props { num: string; client: string; title: string; tag: string; index: number; }

export default function CaseStudyCard({ num, client, title, tag, index }: Props) {
  const accent = ACCENTS[index % ACCENTS.length];
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[280px] overflow-hidden relative group"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl" style={{ background: accent }} />

      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[11px] uppercase tracking-eyebrow text-[#6B6B6B]">{client}</span>
          <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-black/5 text-[#0A0A0A]">{tag}</span>
        </div>
        <p className="font-mono text-[36px] font-bold text-black/5 leading-none select-none">{num}</p>
      </div>

      <div>
        <h3 className="font-display italic text-[22px] md:text-[24px] text-[#0A0A0A] leading-snug mt-4">{title}</h3>
        <motion.p initial={{ opacity: 0, x: -10 }} whileHover={{ opacity: 1, x: 0 }}
          className="mt-3 text-[13px] text-[#0A0A0A] font-semibold">
          View Case Study →
        </motion.p>
      </div>
    </motion.article>
  );
}
