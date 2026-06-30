"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { num: "01", icon: "✍️", title: "Content Writing",        desc: "Premium blog posts, articles, website copy, product descriptions and press releases crafted by expert writers who understand your industry and brand voice." },
  { num: "02", icon: "📱", title: "Social Media Marketing",  desc: "End-to-end social media management — strategy, content calendars, post creation and community engagement across LinkedIn, Instagram, Facebook and more." },
  { num: "03", icon: "🎨", title: "Graphics & Design",       desc: "Eye-catching visual content — banners, infographics, social creatives and brand collateral that stops the scroll and communicates your message clearly." },
  { num: "04", icon: "🎬", title: "Film & Video",            desc: "Script writing, storyboarding and production-ready video content for ads, explainers, reels and corporate films that convert viewers into customers." },
  { num: "05", icon: "🌐", title: "Translation Services",    desc: "Professional translation in multiple languages with cultural nuance intact — making your brand resonate authentically with global audiences." },
];

const why = [
  ["⚡", "Speedy Delivery",          "Consistent turnaround without ever compromising on quality"],
  ["🔄", "Flexibility & Scalability", "Scale content up or down based on your business needs"],
  ["🎯", "Audience-Resonant Content", "Every piece maps directly to your readers and business objectives"],
  ["🏆", "15+ Years Combined Expertise", "Handpicked professionals with deep domain knowledge"],
];

export default function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="services" className="section-pad">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-mono text-[12px] uppercase tracking-eyebrow text-white/35 mb-4">
          [ WHAT WE DO ]
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          className="h-display text-white mb-10" style={{ fontSize: "clamp(36px,5vw,72px)" }}>
          Everything content.<br />Under one roof.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-2">
            {services.map((s, i) => (
              <motion.div key={s.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="glass-card rounded-2xl overflow-hidden">
                <button className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{s.icon}</span>
                    <div>
                      <span className="font-mono text-[12px] text-white/30 tracking-eyebrow block">{s.num}</span>
                      <span className="text-[16px] font-semibold text-white">{s.title}</span>
                    </div>
                  </div>
                  <span className={`text-white/50 text-xl transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>+</span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <p className="px-6 pb-5 text-[14px] text-white/45 leading-relaxed pl-[4.5rem]">{s.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-8 md:p-10 sticky top-24 hidden lg:block">
            <p className="font-mono text-[12px] uppercase tracking-eyebrow text-white/35 mb-6">WHY CONTENTWHIZZ</p>
            <div className="space-y-5">
              {why.map(([icon, title, desc]) => (
                <div key={title as string} className="flex gap-4 items-start">
                  <span className="text-2xl mt-0.5">{icon}</span>
                  <div>
                    <p className="text-[14px] font-semibold text-white">{title}</p>
                    <p className="text-[13px] text-white/40 mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/[0.07]">
              <p className="text-[13px] text-white/40">Operating since <span className="font-semibold text-white">June 2016</span></p>
              <p className="text-[13px] text-white/40 mt-1">Mon–Sat <span className="font-semibold text-white">10:00 – 19:00 IST</span></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
