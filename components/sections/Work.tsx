"use client";

import { motion } from "framer-motion";
import CaseStudyCard from "@/components/ui/CaseStudyCard";

const cases = [
  {
    num: "01",
    client: "E-COMMERCE BRAND",
    title: "From zero to 80K monthly readers with content-led SEO",
    tag: "Content + SEO",
    gradient: "linear-gradient(135deg,#6C47FF,#00C2FF)",
  },
  {
    num: "02",
    client: "REAL ESTATE FIRM",
    title: "Social media strategy that drove 3× lead generation",
    tag: "Social Media",
    gradient: "linear-gradient(135deg,#FF6B6B,#FFB347)",
  },
  {
    num: "03",
    client: "D2C STARTUP",
    title: "Brand storytelling that built trust and boosted conversions",
    tag: "Brand Content",
    gradient: "linear-gradient(135deg,#00C2FF,#00E87A)",
  },
];

export default function Work() {
  return (
    <section id="work" className="section-pad">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] uppercase tracking-eyebrow text-[#6C47FF] mb-4"
        >
          [ SELECTED WORK ]
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="font-display italic text-[#1D1D1F] mb-14"
          style={{ fontSize: "clamp(32px,5vw,62px)" }}
        >
          Content that moved<br />the needle.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#6C47FF] hover:underline font-mono uppercase tracking-eyebrow"
          >
            Start Your Project →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
