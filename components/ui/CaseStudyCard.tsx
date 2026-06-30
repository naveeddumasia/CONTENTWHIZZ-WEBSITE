"use client";

import { motion } from "framer-motion";

interface Props { num: string; client: string; title: string; tag: string; index: number; }

export default function CaseStudyCard({ num, client, title, tag, index }: Props) {
  return (
    <motion.article
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[280px] overflow-hidden relative group"
      style={{
        boxShadow: "0 4px 28px rgba(0,0,0,0.07), 0 1px 6px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.98)",
      }}
      whileHover={{
        y: -12,
        scale: 1.02,
        boxShadow: "0 24px 60px rgba(0,0,0,0.13), 0 6px 20px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.98)",
      } as any}
    >
      {/* Top accent line — thickness increases on hover */}
      <motion.div
        className="absolute top-0 left-0 right-0 rounded-t-3xl"
        style={{ height: 2, background: index === 0 ? "#0A0A0A" : index === 1 ? "#2A2A2A" : "#3D3D3D" }}
        whileHover={{ height: 3 }}
      />

      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[11px] uppercase tracking-eyebrow text-[#6B6B6B]">{client}</span>
          <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-black/5 text-[#0A0A0A]">{tag}</span>
        </div>
        <p className="font-mono text-[36px] font-bold text-black/5 leading-none select-none">{num}</p>
      </div>

      <div>
        <h3 className="font-display italic text-[22px] md:text-[24px] text-[#0A0A0A] leading-snug mt-4">{title}</h3>
        <motion.p
          initial={{ opacity: 0, x: -8 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-3 text-[13px] text-[#0A0A0A] font-semibold">
          View Case Study →
        </motion.p>
      </div>
    </motion.article>
  );
}
