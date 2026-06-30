"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props { num: string; client: string; title: string; tag: string; index: number; image: string; }

export default function CaseStudyCard({ num, client, title, tag, index, image }: Props) {
  return (
    <motion.article
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="glass-card rounded-3xl overflow-hidden relative group flex flex-col"
    >
      <div className="relative w-full h-[160px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover grayscale contrast-125 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
          sizes="600px"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.05) 0%, rgba(10,10,10,0.85) 100%)" }} />
        <p className="absolute bottom-2 right-4 font-mono text-[36px] font-bold text-white/10 leading-none select-none">{num}</p>
      </div>

      <div className="p-8 md:p-10 flex flex-col justify-between flex-1">
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[12px] uppercase tracking-eyebrow text-white/35">{client}</span>
          <span className="text-[12px] font-semibold px-3 py-1 rounded-full bg-white/8 text-white/60 border border-white/10">{tag}</span>
        </div>

        <div>
          <h3 className="h-display text-[22px] md:text-[24px] text-white mt-1">{title}</h3>
          <motion.p initial={{ opacity: 0, x: -8 }} whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-3 text-[13px] text-white/50 font-semibold">
            View Case Study →
          </motion.p>
        </div>
      </div>
    </motion.article>
  );
}

