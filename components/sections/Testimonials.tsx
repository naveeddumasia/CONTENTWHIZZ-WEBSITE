"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "LORE didn't just give us content — they gave us a voice. Within six months, our organic traffic tripled and we were being quoted in the FT.",
    name: "Jane Smith",
    title: "CMO at Vault",
  },
  {
    quote:
      "The most sophisticated content team I've ever worked with. They understand brand strategy at a level that most agencies simply don't.",
    name: "David Okafor",
    title: "VP Marketing at Meridian",
  },
  {
    quote:
      "Our founder's thought leadership column has generated more inbound pipeline than our paid channels combined. That's all LORE.",
    name: "Camille Renard",
    title: "Head of Growth at Arca",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);

  return (
    <section className="py-28 md:py-36 bg-[#111111]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-eyebrow text-[#6B6B6B] mb-12">
          [ CLIENT VOICES ]
        </p>

        <div className="relative min-h-[220px] md:min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <blockquote
                className="font-display italic text-[#F5F5F5] leading-snug max-w-3xl"
                style={{ fontSize: "clamp(20px, 3vw, 30px)" }}
              >
                "{testimonials[idx].quote}"
              </blockquote>
              <p className="font-mono text-[12px] text-[#6B6B6B] mt-6 tracking-eyebrow">
                — {testimonials[idx].name}, {testimonials[idx].title}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-6 mt-10">
          <button
            onClick={prev}
            className="font-mono text-[11px] uppercase tracking-eyebrow text-[#6B6B6B] hover:text-[#F5F5F5] transition-colors"
            aria-label="Previous testimonial"
          >
            ← Prev
          </button>
          <span className="font-mono text-[11px] text-[#6B6B6B]">
            {String(idx + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
          <button
            onClick={next}
            className="font-mono text-[11px] uppercase tracking-eyebrow text-[#6B6B6B] hover:text-[#F5F5F5] transition-colors"
            aria-label="Next testimonial"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
