"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TYPED_WORDS = ["Content Writing", "Brand Storytelling", "SEO Articles", "Social Media", "Video Scripts", "Thought Leadership"];

const BG_WORDS = [
  { text: "strategy",     x: "8%",  y: "18%", size: 56, delay: 0    },
  { text: "editorial",    x: "72%", y: "10%", size: 38, delay: 0.4  },
  { text: "SEO",          x: "82%", y: "38%", size: 72, delay: 0.9  },
  { text: "storytelling", x: "4%",  y: "62%", size: 42, delay: 0.2  },
  { text: "branding",     x: "60%", y: "68%", size: 50, delay: 0.7  },
  { text: "copy",         x: "44%", y: "22%", size: 64, delay: 1.1  },
  { text: "engagement",   x: "20%", y: "80%", size: 36, delay: 0.5  },
  { text: "growth",       x: "78%", y: "78%", size: 58, delay: 1.3  },
  { text: "audience",     x: "35%", y: "52%", size: 30, delay: 0.3  },
  { text: "keywords",     x: "88%", y: "54%", size: 34, delay: 0.8  },
];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = TYPED_WORDS[wordIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < target.length) {
      t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === target.length) {
      t = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
    } else {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % TYPED_WORDS.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, wordIdx]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16" aria-label="Hero">
      {/* Floating background words */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none" aria-hidden="true">
        {BG_WORDS.map((w) => (
          <motion.span
            key={w.text}
            className="absolute font-display italic font-bold"
            style={{ left: w.x, top: w.y, fontSize: w.size, color: "transparent", WebkitTextStroke: "1.5px rgba(0,0,0,0.07)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { delay: w.delay, duration: 1.2 },
              y: { delay: w.delay, duration: 5 + w.delay, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            {w.text}
          </motion.span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 w-full">
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6B6B6B] mb-8 font-medium"
        >
          ✦ Premium Content Agency · Since 2016 · Surat, India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          className="font-display leading-[1.0] tracking-[-0.02em] text-[#0A0A0A]"
          style={{ fontSize: "clamp(48px, 8.5vw, 118px)" }}
        >
          Words That<br />
          <span className="gradient-text">Move Markets.</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center gap-2" aria-live="polite"
        >
          <span className="text-[#6B6B6B] text-[18px] md:text-[21px] font-medium">Specializing in</span>
          <span className="text-[18px] md:text-[21px] font-semibold text-[#0A0A0A] px-3 py-1 rounded-lg min-w-[200px]"
            style={{ background: "rgba(0,0,0,0.05)" }}>
            {displayed}
            <span className="cursor-blink ml-0.5 text-[#0A0A0A]">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 text-[16px] md:text-[17px] text-[#6B6B6B] max-w-[500px] leading-[1.75]"
        >
          A unison of Surat's sharpest writers, designers, and strategists crafting content that builds authority, drives traffic, and turns readers into customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold btn-black">
            Start a Project →
          </a>
          <a href="#services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold btn-outline">
            Explore Services
          </a>
          <a href="tel:09016249312" className="inline-flex items-center gap-1.5 text-[13px] text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors font-medium ml-2">
            📞 090162 49312
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {[{ icon: "🏆", text: "8+ Years Experience" }, { icon: "🤝", text: "500+ Happy Clients" }, { icon: "📍", text: "Surat, Gujarat" }, { icon: "🕐", text: "Mon–Sat 10–7 PM" }].map((b) => (
            <span key={b.text} className="glass px-4 py-2 rounded-full text-[12px] text-[#6B6B6B] font-medium flex items-center gap-1.5">
              {b.icon} {b.text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" aria-hidden="true"
      >
        <span className="font-mono text-[10px] uppercase tracking-eyebrow text-[#6B6B6B]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 rounded-full bg-[#0A0A0A]"
        />
      </motion.div>
    </section>
  );
}
