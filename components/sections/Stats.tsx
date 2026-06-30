"use client";

import { motion } from "framer-motion";
import CounterNumber from "@/components/ui/CounterNumber";

const stats = [
  { value: "140+", label: "Brands Scaled" },
  { value: "3.2B", label: "Content Impressions" },
  { value: "8 Yrs", label: "In the Industry" },
  { value: "92%", label: "Client Retention" },
];

export default function Stats() {
  return (
    <section
      id="about"
      className="bg-[#F5F5F5] py-24 md:py-32"
      aria-label="Stats"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-start"
            >
              <p
                className="font-display font-bold text-[#0A0A0A] leading-none"
                style={{ fontSize: "clamp(48px, 6vw, 80px)" }}
              >
                <CounterNumber target={s.value} />
              </p>
              <p className="font-mono text-[11px] uppercase tracking-eyebrow text-[#6B6B6B] mt-3">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
