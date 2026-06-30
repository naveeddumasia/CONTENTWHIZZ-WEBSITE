"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "ContentWhizz delivered exceptional quality without errors at very competitive pricing. I was impressed by how well they understood our brand voice from day one.",
    name: "Aditya Pradhan",
    title: "Founder, Grafiqey",
    emoji: "🎨",
  },
  {
    quote: "I highly recommend ContentWhizz for tech startups. Their ability to translate complex technical concepts into clear, engaging content is remarkable.",
    name: "Vaghasiya Krunal",
    title: "Marketing Lead, WiserNotify",
    emoji: "🚀",
  },
  {
    quote: "Excellent work across the board and an absolute pleasure to work with. ContentWhizz consistently exceeds expectations on every project.",
    name: "Diana Ross",
    title: "Editor, ContentPen",
    emoji: "✍️",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  return (
    <section className="section-pad">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-mono text-[12px] uppercase tracking-eyebrow text-white/35 mb-8">
          [ CLIENT VOICES ]
        </motion.p>

        <div className="glass-card rounded-3xl p-8 md:p-14 min-h-[260px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
              <div className="text-4xl mb-6">{testimonials[idx].emoji}</div>
              <blockquote className="h-display text-white max-w-3xl"
                style={{ fontSize: "clamp(18px,2.5vw,28px)", lineHeight: 1.15 }}>
                "{testimonials[idx].quote}"
              </blockquote>
              <p className="font-mono text-[12px] text-white/35 mt-6 tracking-eyebrow">
                — {testimonials[idx].name}, {testimonials[idx].title}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-4 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? "w-8 bg-white" : "w-3 bg-white/15"}`}
                aria-label={`Go to testimonial ${i + 1}`} />
            ))}
            <span className="ml-auto font-mono text-[12px] text-white/25">
              {String(idx + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
