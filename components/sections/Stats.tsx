"use client";

import { motion } from "framer-motion";
import CounterNumber from "@/components/ui/CounterNumber";

const stats = [
  { value: "8+",   label: "Years in Business",  icon: "🗓️", desc: "Founded June 2016" },
  { value: "500+", label: "Happy Clients",       icon: "🤝", desc: "Across industries" },
  { value: "5",    label: "Core Services",       icon: "🚀", desc: "Under one roof" },
  { value: "98%",  label: "Client Satisfaction", icon: "⭐", desc: "Quality guaranteed" },
];

export default function Stats() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-mono text-[12px] uppercase tracking-eyebrow text-white/35 mb-4">
          [ BY THE NUMBERS ]
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="h-display text-white mb-10" style={{ fontSize: "clamp(32px,4vw,60px)" }}>
          Proven results you<br />can trust.
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-light rounded-3xl p-7 flex flex-col items-start">
              <span className="text-2xl mb-5">{s.icon}</span>
              <p className="h-display text-white leading-none" style={{ fontSize: "clamp(34px,4vw,60px)" }}>
                <CounterNumber target={s.value} />
              </p>
              <p className="font-mono text-[12px] uppercase tracking-eyebrow text-white/50 mt-2">{s.label}</p>
              <p className="text-[12px] text-white/30 mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
