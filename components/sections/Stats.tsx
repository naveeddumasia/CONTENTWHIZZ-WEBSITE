"use client";

import { motion } from "framer-motion";
import CounterNumber from "@/components/ui/CounterNumber";

const stats = [
  { value: "8+",   label: "Years in Business",  icon: "🗓️" },
  { value: "500+", label: "Happy Clients",       icon: "🤝" },
  { value: "5",    label: "Core Services",       icon: "🚀" },
  { value: "98%",  label: "Client Satisfaction", icon: "⭐" },
];

export default function Stats() {
  return (
    <section className="section-pad bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-mono text-[11px] uppercase tracking-eyebrow text-white/40 mb-12">
          [ BY THE NUMBERS ]
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-start border-l border-white/10 pl-6">
              <span className="text-3xl mb-4">{s.icon}</span>
              <p className="font-display font-bold text-white leading-none" style={{ fontSize: "clamp(40px,5vw,72px)" }}>
                <CounterNumber target={s.value} />
              </p>
              <p className="font-mono text-[11px] uppercase tracking-eyebrow text-white/40 mt-3">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
