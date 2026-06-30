"use client";

import { motion } from "framer-motion";
import CounterNumber from "@/components/ui/CounterNumber";

const stats = [
  { value: "8+",   label: "Years in Business",   icon: "🗓️" },
  { value: "500+", label: "Happy Clients",        icon: "🤝" },
  { value: "5",    label: "Core Services",        icon: "🚀" },
  { value: "98%",  label: "Client Satisfaction",  icon: "⭐" },
];

export default function Stats() {
  return (
    <section className="section-pad" style={{ background: "linear-gradient(135deg, rgba(108,71,255,0.05), rgba(0,194,255,0.05))" }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card rounded-3xl p-6 md:p-8 flex flex-col items-start"
            >
              <span className="text-3xl mb-4">{s.icon}</span>
              <p
                className="font-display font-bold text-[#1D1D1F] leading-none gradient-text"
                style={{ fontSize: "clamp(36px,5vw,60px)" }}
              >
                <CounterNumber target={s.value} />
              </p>
              <p className="font-mono text-[11px] uppercase tracking-eyebrow text-[#6E6E73] mt-3">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
