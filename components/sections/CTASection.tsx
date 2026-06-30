"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="glass-dark rounded-3xl px-10 py-16 md:px-20 md:py-24 text-center relative overflow-hidden">

          {/* Subtle inner glow */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)" }} />

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-mono text-[11px] uppercase tracking-eyebrow text-white/40 mb-6">
            [ READY TO GROW? ]
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display italic text-white leading-tight mb-6"
            style={{ fontSize: "clamp(32px,6vw,80px)" }}>
            Content is your<br />biggest asset.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-white/55 text-[16px] max-w-lg mx-auto mb-10">
            Let ContentWhizz handle your content — so you can focus on running your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.32 }}
            className="flex flex-wrap gap-4 justify-center">
            <a href="#contact"
              className="px-8 py-3.5 rounded-full text-[14px] font-semibold text-[#0A0A0A] bg-white hover:bg-white/90 transition-all hover:scale-105 shadow-xl shadow-black/20">
              Start a Project →
            </a>
            <a href="tel:09016249312"
              className="px-8 py-3.5 rounded-full text-[14px] font-semibold text-white border border-white/15 hover:bg-white/08 transition-all"
              style={{ backdropFilter: "blur(8px)" }}>
              Call Us Now
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.45 }}
            className="mt-10 font-mono text-[12px] text-white/25">
            Mon–Sat 10:00–19:00 IST · Surat, Gujarat, India
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
