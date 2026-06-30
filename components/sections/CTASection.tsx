"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center bg-[#0A0A0A] py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] uppercase tracking-eyebrow text-[#6B6B6B] mb-8"
        >
          [ LET'S WORK TOGETHER ]
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display italic text-[#F5F5F5] leading-tight mb-6"
          style={{ fontSize: "clamp(40px, 8vw, 110px)" }}
        >
          Ready to be<br />worth reading?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[16px] text-[#6B6B6B] mb-12"
        >
          Let's talk about your content.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a
            href="mailto:hello@lorecontent.co"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0A0A0A] font-semibold text-[14px] hover:bg-[#F5F5F5] transition-colors tracking-wide"
          >
            Start a Project →
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 border border-[#F5F5F5]/30 text-[#F5F5F5] font-semibold text-[14px] hover:border-[#F5F5F5] transition-colors tracking-wide"
          >
            View Our Process →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a
            href="mailto:hello@lorecontent.co"
            className="group relative inline-block font-mono text-[14px] md:text-[16px] text-[#6B6B6B] hover:text-[#F5F5F5] transition-colors"
          >
            hello@lorecontent.co
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-white group-hover:w-full transition-all duration-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
