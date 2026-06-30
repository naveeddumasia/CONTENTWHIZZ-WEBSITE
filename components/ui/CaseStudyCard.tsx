"use client";

import { motion } from "framer-motion";

interface Props {
  num: string;
  client: string;
  title: string;
}

export default function CaseStudyCard({ num, client, title }: Props) {
  return (
    <motion.article
      whileHover={{ y: -6, borderColor: "#444" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="relative group bg-[#111111] border border-[#1F1F1F] p-8 md:p-10 overflow-hidden flex flex-col justify-between min-h-[280px]"
    >
      {/* Hover sweep */}
      <div className="absolute inset-y-0 left-0 w-0 group-hover:w-[3px] bg-white transition-all duration-300" />

      <div>
        <span className="font-mono text-[11px] uppercase tracking-eyebrow text-[#6B6B6B]">
          {client}
        </span>
        <p className="font-mono text-[40px] font-bold text-[#1F1F1F] mt-1 leading-none select-none">
          {num}
        </p>
      </div>

      <div>
        <h3 className="font-display text-[26px] md:text-[28px] text-[#F5F5F5] leading-tight mt-4">
          {title}
        </h3>
        <div className="mt-4 overflow-hidden h-5">
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
            className="font-mono text-[13px] text-[#F5F5F5] tracking-wide"
          >
            View Case Study →
          </motion.span>
        </div>
      </div>
    </motion.article>
  );
}
