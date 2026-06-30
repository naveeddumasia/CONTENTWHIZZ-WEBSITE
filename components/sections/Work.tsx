"use client";

import { motion } from "framer-motion";
import CaseStudyCard from "@/components/ui/CaseStudyCard";

const cases = [
  {
    num: "01",
    client: "VAULT — FINTECH",
    title: "How we turned a neobank into a publishing powerhouse",
  },
  {
    num: "02",
    client: "MERIDIAN — SAAS",
    title: "12 months. 400% organic growth. One content strategy.",
  },
  {
    num: "03",
    client: "ARCA — CONSULTING",
    title: "Building thought leadership from zero to industry-defining",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-28 md:py-36 mx-auto max-w-[1400px] px-6 md:px-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-[11px] uppercase tracking-eyebrow text-[#6B6B6B] mb-6"
      >
        [ SELECTED WORK ]
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-display italic text-[#F5F5F5] mb-16"
        style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
      >
        Stories that moved<br />the market.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cases.map((c, i) => (
          <motion.div
            key={c.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={i === 2 ? "md:col-span-2 md:max-w-[50%]" : ""}
          >
            <CaseStudyCard {...c} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-12"
      >
        <a
          href="#"
          className="group relative text-[14px] text-[#6B6B6B] hover:text-[#F5F5F5] transition-colors font-mono uppercase tracking-eyebrow"
        >
          View All Work →
        </a>
      </motion.div>
    </section>
  );
}
