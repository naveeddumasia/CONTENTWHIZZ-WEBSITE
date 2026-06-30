"use client";

import { motion } from "framer-motion";

interface Props {
  num: string;
  client: string;
  title: string;
  tag: string;
  gradient: string;
}

export default function CaseStudyCard({ num, client, title, tag, gradient }: Props) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[280px] overflow-hidden relative group"
    >
      {/* Gradient accent top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background: gradient }} />

      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[11px] uppercase tracking-eyebrow text-[#6E6E73]">{client}</span>
          <span
            className="text-[11px] font-semibold px-3 py-1 rounded-full text-white"
            style={{ background: gradient }}
          >
            {tag}
          </span>
        </div>
        <p className="font-mono text-[36px] font-bold text-black/5 leading-none select-none">{num}</p>
      </div>

      <div>
        <h3 className="font-display text-[22px] md:text-[24px] text-[#1D1D1F] leading-snug mt-4">{title}</h3>
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="mt-3 text-[13px] text-[#6C47FF] font-semibold"
        >
          View Case Study →
        </motion.p>
      </div>
    </motion.article>
  );
}
