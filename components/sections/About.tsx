"use client";

import { motion } from "framer-motion";

const team = [
  { initials: "EV", name: "Elena Voss", title: "Creative Director" },
  { initials: "MK", name: "Marcus Kim", title: "Head of Strategy" },
  { initials: "SA", name: "Sofia Ares", title: "Editorial Lead" },
];

const gradients = [
  "from-[#2a2a2a] to-[#444]",
  "from-[#1a2a3a] to-[#2a4a6a]",
  "from-[#2a1a2a] to-[#5a2a5a]",
];

export default function About() {
  return (
    <section className="py-28 md:py-36 bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Pull quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-[11px] uppercase tracking-eyebrow text-[#6B6B6B] mb-8">
              [ PHILOSOPHY ]
            </p>
            <blockquote
              className="font-display italic text-[#F5F5F5] leading-tight"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            >
              "Good content doesn't interrupt. It attracts."
            </blockquote>

            {/* Team */}
            <div className="mt-16 flex gap-6 flex-wrap">
              {team.map((t, i) => (
                <div key={t.name} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${gradients[i]} flex items-center justify-center`}
                  >
                    <span className="font-mono text-[12px] text-[#F5F5F5]/60 font-bold">
                      {t.initials}
                    </span>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-eyebrow text-[#F5F5F5] text-center">
                    {t.name}
                  </p>
                  <p className="font-mono text-[10px] text-[#6B6B6B] text-center">
                    {t.title}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Body text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="space-y-6 text-[15px] text-[#6B6B6B] leading-relaxed"
          >
            <p>
              LORE was founded on a simple belief: most brand content is forgettable
              because it's made to fill calendars, not to earn attention. We build the
              opposite — content systems engineered around what your audience actually
              wants to read.
            </p>
            <p>
              Our editorial-first approach means every piece we create starts with a
              question: would a real person share this? If the answer is no, we don't
              publish it. Quality over volume is not a differentiator here — it's the
              minimum standard.
            </p>
            <p>
              We work as an embedded creative team, not a vendor. You get access to
              senior strategists, editors, and writers who understand your industry
              deeply enough to have opinions — and courageous enough to say them.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
