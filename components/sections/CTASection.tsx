"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="section-pad relative overflow-hidden bg-[#0A0A0A]">
      {/* Subtle grain overlay via CSS */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "200px 200px" }} />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 text-center">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-mono text-[11px] uppercase tracking-eyebrow text-white/40 mb-6">
          [ READY TO GROW? ]
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display italic text-white leading-tight mb-6" style={{ fontSize: "clamp(36px,7vw,90px)" }}>
          Content is your<br />biggest asset.
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.2 }} className="text-white/60 text-[16px] max-w-lg mx-auto mb-10">
          Let ContentWhizz handle your content — so you can focus on running your business.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.35 }} className="flex flex-wrap gap-4 justify-center">
          <a href="#contact"
            className="px-8 py-3.5 rounded-full text-[14px] font-semibold text-[#0A0A0A] bg-white hover:bg-white/90 transition-all hover:scale-105 shadow-xl shadow-black/20">
            Start a Project →
          </a>
          <a href="tel:09016249312"
            className="px-8 py-3.5 rounded-full text-[14px] font-semibold text-white border border-white/20 hover:bg-white/10 transition-all">
            Call Us Now
          </a>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.5 }} className="mt-10 font-mono text-[12px] text-white/30">
          Mon–Sat 10:00–19:00 IST · Surat, Gujarat, India
        </motion.p>
      </div>
    </section>
  );
}
