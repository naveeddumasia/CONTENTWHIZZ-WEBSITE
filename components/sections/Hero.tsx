"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

function ContentStack({ size = 260, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 260 260" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="cs1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#161616" />
        </linearGradient>
        <linearGradient id="cs2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1c1c1c" />
        </linearGradient>
        <linearGradient id="cs3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#cfcfcf" />
        </linearGradient>
      </defs>

      {/* back card */}
      <rect x="58" y="20" width="146" height="186" rx="14" fill="url(#cs1)" stroke="rgba(255,255,255,0.08)" />

      {/* middle card */}
      <rect x="38" y="48" width="146" height="186" rx="14" fill="url(#cs2)" stroke="rgba(255,255,255,0.10)" />

      {/* front card */}
      <rect x="16" y="76" width="146" height="186" rx="14" fill="url(#cs3)" />
      <rect x="36" y="102" width="90" height="10" rx="5" fill="#1a1a1a" opacity="0.85" />
      <rect x="36" y="126" width="106" height="7" rx="3.5" fill="#1a1a1a" opacity="0.35" />
      <rect x="36" y="142" width="106" height="7" rx="3.5" fill="#1a1a1a" opacity="0.35" />
      <rect x="36" y="158" width="74" height="7" rx="3.5" fill="#1a1a1a" opacity="0.35" />
      <circle cx="46" cy="226" r="10" fill="#1a1a1a" opacity="0.85" />
      <rect x="64" y="219" width="60" height="6" rx="3" fill="#1a1a1a" opacity="0.5" />
      <rect x="64" y="231" width="40" height="6" rx="3" fill="#1a1a1a" opacity="0.3" />
    </svg>
  );
}

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

          {/* Right — decorative sparkle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="float-a">
              <ContentStack size={280} />
            </div>
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
