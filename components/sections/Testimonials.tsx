"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { quote: "ContentWhizz transformed our blog into a lead-generation engine. The quality of writing is consistently outstanding — they truly understand our brand voice.", name: "Rahul Sharma", title: "Founder, E-Commerce Brand · Surat", emoji: "🛍️" },
  { quote: "Their social media team is phenomenal. Within 3 months our engagement doubled and we were getting serious inbound inquiries directly from Instagram.", name: "Priya Mehta", title: "Marketing Head, Real Estate Firm · Ahmedabad", emoji: "🏢" },
  { quote: "We needed content in both English and regional languages — ContentWhizz handled it flawlessly. Professional, fast, and always on brief.", name: "Aditya Patel", title: "CEO, D2C Startup · Mumbai", emoji: "🚀" },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  return (
    <section className="section-pad">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-mono text-[11px] uppercase tracking-eyebrow text-[#6B6B6B] mb-12">
          [ CLIENT VOICES ]
        </motion.p>

        <div className="glass-card rounded-3xl p-8 md:p-14 min-h-[260px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
              <div className="text-4xl mb-6">{testimonials[idx].emoji}</div>
              <blockquote className="font-display italic text-[#0A0A0A] leading-snug max-w-3xl"
                style={{ fontSize: "clamp(18px,2.5vw,26px)" }}>
                "{testimonials[idx].quote}"
              </blockquote>
              <p className="font-mono text-[12px] text-[#6B6B6B] mt-6 tracking-eyebrow">
                — {testimonials[idx].name}, {testimonials[idx].title}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-4 mt-10">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? "w-8 bg-[#0A0A0A]" : "w-3 bg-black/10"}`}
                aria-label={`Go to testimonial ${i + 1}`} />
            ))}
            <span className="ml-auto font-mono text-[11px] text-[#6B6B6B]">
              {String(idx + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
