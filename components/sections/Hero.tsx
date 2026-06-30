"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Flag from "@/components/ui/Flag";

const TYPED_WORDS = ["Content Writing", "Brand Storytelling", "SEO Articles", "Social Media", "Video Scripts", "Press Releases"];

const BG_WORDS = [
  { text: "strategy",     x: "6%",  y: "16%", size: 54, delay: 0    },
  { text: "editorial",    x: "70%", y: "8%",  size: 36, delay: 0.4  },
  { text: "SEO",          x: "80%", y: "36%", size: 68, delay: 0.9  },
  { text: "storytelling", x: "3%",  y: "60%", size: 40, delay: 0.2  },
  { text: "branding",     x: "58%", y: "66%", size: 48, delay: 0.7  },
  { text: "copy",         x: "42%", y: "20%", size: 60, delay: 1.1  },
  { text: "growth",       x: "76%", y: "76%", size: 54, delay: 1.3  },
  { text: "audience",     x: "32%", y: "50%", size: 28, delay: 0.3  },
  { text: "keywords",     x: "86%", y: "52%", size: 32, delay: 0.8  },
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
      {/* Ghost background words */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none" aria-hidden="true">
        {BG_WORDS.map((w) => (
          <motion.span
            key={w.text}
            className="absolute h-display"
            style={{ left: w.x, top: w.y, fontSize: w.size, color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.06)" }}
            initial={{ opacity: 0 }}
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

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="font-mono text-[12px] uppercase tracking-[0.18em] text-white/40 mb-8 font-medium flex items-center gap-2"
            >
              <span className="w-5 h-px bg-white/30 inline-block" />
              Premium Content Agency · Since 2016 · <Flag country="in" /> India · <Flag country="ae" /> Dubai · <Flag country="gb" /> UK
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
              className="h-display text-white"
              style={{ fontSize: "clamp(44px, 7.5vw, 108px)" }}
            >
              Content Writing<br />
              <span className="gradient-text">That Inspires.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-6 text-[16px] md:text-[17px] text-white/50 max-w-[480px] leading-[1.75]"
            >
              Converting your vision into original, high-quality content. Blogs, copy, social media, video scripts — one team handles it all.
            </motion.p>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 flex flex-wrap items-center gap-2" aria-live="polite"
            >
              <span className="text-white/40 text-[15px] font-medium">Specializing in</span>
              <span className="text-[15px] font-semibold text-white px-3 py-1 rounded-lg min-w-[180px] glass">
                {displayed}<span className="cursor-blink ml-0.5 text-white">|</span>
              </span>
            </motion.div>

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
            </motion.div>

          </div>

          {/* Right — editorial photo with floating stat chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            className="hidden lg:flex items-center justify-center relative h-[460px]"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2rem] overflow-hidden glass-card">
              <Image
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=80&auto=format&fit=crop"
                alt="Writer crafting content at a desk"
                fill
                priority
                className="object-cover grayscale contrast-125"
                sizes="420px"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,10,10,0) 40%, rgba(10,10,10,0.65) 100%)" }} />
            </div>

            {/* Floating stat chip — top left */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-2 -left-4 glass-card rounded-2xl px-5 py-4"
            >
              <p className="text-[22px] font-bold text-white leading-none">1,200+</p>
              <p className="font-mono text-[10px] uppercase tracking-eyebrow text-white/40 mt-1">Articles Delivered</p>
            </motion.div>

            {/* Floating stat chip — bottom right */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-5 py-4"
            >
              <p className="text-[22px] font-bold text-white leading-none">98%</p>
              <p className="font-mono text-[10px] uppercase tracking-eyebrow text-white/40 mt-1">Client Satisfaction</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[12px] uppercase tracking-eyebrow text-white/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 rounded-full bg-white/20"
        />
      </motion.div>
    </section>
  );
}
