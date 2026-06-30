"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Content Strategy",
    desc: "We map your content to your business goals, then build systems that scale.",
  },
  {
    num: "02",
    title: "Brand Editorial",
    desc: "Monthly editorial calendars, owned media, and brand voice that sticks.",
  },
  {
    num: "03",
    title: "SEO Content",
    desc: "Content engineered to rank and written to be read.",
  },
  {
    num: "04",
    title: "Thought Leadership",
    desc: "We ghostwrite for founders, C-suite, and experts with something to say.",
  },
  {
    num: "05",
    title: "Email Marketing",
    desc: "Newsletters and sequences that convert subscribers into customers.",
  },
];

export default function Services() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="services" className="py-28 md:py-36 bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          {/* Sticky label */}
          <div className="md:w-[220px] flex-shrink-0">
            <div className="md:sticky md:top-28">
              <p className="font-mono text-[11px] uppercase tracking-eyebrow text-[#6B6B6B] mb-4">
                [ WHAT WE DO ]
              </p>
              <p
                className="font-display italic text-[#1F1F1F] leading-none select-none"
                style={{ fontSize: "clamp(60px, 8vw, 100px)" }}
                aria-hidden="true"
              >
                01—05
              </p>
            </div>
          </div>

          {/* Accordion */}
          <div className="flex-1">
            {services.map((s, i) => (
              <div key={s.num}>
                <motion.div
                  className="h-px bg-[#1F1F1F] origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.07 }}
                />
                <button
                  className="w-full flex items-start justify-between py-7 text-left group"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`service-desc-${i}`}
                >
                  <div className="flex items-baseline gap-5">
                    <span className="font-mono text-[11px] text-[#6B6B6B] tracking-eyebrow">
                      {s.num}
                    </span>
                    <span className="text-[18px] md:text-[20px] font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">
                      {s.title}
                    </span>
                  </div>
                  <span
                    className={`font-mono text-[#6B6B6B] text-xl mt-1 transition-transform duration-300 ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      id={`service-desc-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 text-[15px] text-[#6B6B6B] leading-relaxed max-w-xl">
                        {s.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <div className="h-px bg-[#1F1F1F]" />
          </div>
        </div>
      </div>
    </section>
  );
}
