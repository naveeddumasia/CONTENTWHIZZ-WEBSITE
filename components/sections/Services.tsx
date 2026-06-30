"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    num: "01", icon: "✍️",
    title: "Content Writing",
    desc: "Premium blog posts, articles, website copy, and marketing content crafted by expert writers who understand your industry and your voice.",
  },
  {
    num: "02", icon: "📱",
    title: "Social Media Marketing",
    desc: "End-to-end social media management — strategy, content calendars, post creation, and community engagement across all major platforms.",
  },
  {
    num: "03", icon: "🎨",
    title: "Graphics & Design",
    desc: "Eye-catching visual content — banners, infographics, social creatives, and brand collateral that stops the scroll and communicates clearly.",
  },
  {
    num: "04", icon: "🎬",
    title: "Film & Video",
    desc: "Script writing, storyboarding, and production-ready video content for ads, explainers, reels, and corporate films.",
  },
  {
    num: "05", icon: "🌐",
    title: "Translation Services",
    desc: "Professional translation in multiple languages with cultural nuance intact — making your brand resonate with global audiences.",
  },
];

export default function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="services" className="section-pad">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] uppercase tracking-eyebrow text-[#6C47FF] mb-4"
        >
          [ WHAT WE DO ]
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display italic text-[#1D1D1F] mb-14"
          style={{ fontSize: "clamp(32px,5vw,62px)" }}
        >
          Everything content.<br />Under one roof.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Accordion */}
          <div className="space-y-2">
            {services.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{s.icon}</span>
                    <div>
                      <span className="font-mono text-[10px] text-[#6E6E73] tracking-eyebrow block">{s.num}</span>
                      <span className="text-[16px] font-semibold text-[#1D1D1F]">{s.title}</span>
                    </div>
                  </div>
                  <span className={`text-[#6C47FF] text-xl transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>+</span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-[14px] text-[#6E6E73] leading-relaxed pl-[4.5rem]">
                        {s.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-8 md:p-10 sticky top-24 hidden lg:block"
          >
            <p className="font-mono text-[11px] uppercase tracking-eyebrow text-[#6E6E73] mb-6">WHY CONTENTWHIZZ</p>
            <div className="space-y-5">
              {[
                ["🏆", "Best-in-class writers", "Handpicked content professionals from Surat & beyond"],
                ["⚡", "Fast turnaround", "Consistent delivery without compromising quality"],
                ["🎯", "Goal-aligned content", "Every piece maps directly to your business objectives"],
                ["🔄", "End-to-end service", "Strategy, creation, distribution — one team handles it all"],
              ].map(([icon, title, desc]) => (
                <div key={title as string} className="flex gap-4 items-start">
                  <span className="text-2xl mt-0.5">{icon}</span>
                  <div>
                    <p className="text-[14px] font-semibold text-[#1D1D1F]">{title}</p>
                    <p className="text-[13px] text-[#6E6E73] mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-black/5">
              <p className="text-[13px] text-[#6E6E73]">Operating since <span className="font-semibold text-[#1D1D1F]">June 2016</span></p>
              <p className="text-[13px] text-[#6E6E73] mt-1">Mon–Sat <span className="font-semibold text-[#1D1D1F]">10:00 – 19:00 IST</span></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
