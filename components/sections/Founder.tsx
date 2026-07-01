"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Founder() {
  return (
    <section className="section-pad overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative w-full max-w-[460px] mx-auto">
              {/* Subtle frame glow */}
              <div className="absolute -inset-4 rounded-[2.5rem]"
                style={{ background: "radial-gradient(ellipse at 40% 30%, rgba(255,255,255,0.07) 0%, transparent 70%)" }} />

              {/* Photo */}
              <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] glass-card">
                <Image
                  src="/founder.jpg"
                  alt="Naveed Dumasia — Founder, ContentWhizz"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="460px"
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, rgba(10,10,10,0) 50%, rgba(10,10,10,0.6) 100%)" }} />
              </div>

              {/* IG stat chip */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={{ y: [0, -8, 0] }}
                className="absolute -bottom-6 -right-4 glass-card rounded-2xl px-5 py-4 flex items-center gap-3"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                <div>
                  <p className="text-[20px] font-bold text-white leading-none">235K+</p>
                  <p className="font-mono text-[10px] uppercase tracking-eyebrow text-white/40 mt-0.5">Followers on Instagram</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-[12px] uppercase tracking-eyebrow text-white/35 mb-6">[ THE PERSON BEHIND THE WORDS ]</p>

            <h2 className="h-display text-white mb-8" style={{ fontSize: "clamp(32px, 4.5vw, 62px)" }}>
              I didn't just build<br />
              a content agency —<br />
              <span className="gradient-text">I lived one.</span>
            </h2>

            <div className="space-y-5 text-[15px] text-white/50 leading-[1.8]">
              <p>
                My name is <strong className="text-white font-semibold">Naveed Dumasia</strong>. I started writing not because it was a career plan — but because it was the only thing I couldn't stop doing. Words felt like home long before they became a business.
              </p>
              <p>
                Over the years, that quiet obsession turned into something real. I built a following of <strong className="text-white font-semibold">235,000+ people on Instagram</strong> — not with viral tricks, but with honest, sharp storytelling that people actually felt. That audience taught me what every brand brief never does: that attention is earned word by word.
              </p>
              <p>
                Today I still write. Not just strategies and briefs — I write copy, personally, for international brands that trust their voice with me. From campaign lines to long-form narratives, I haven't stepped away from the craft that started it all. <strong className="text-white font-semibold">ContentWhizz was built around that same standard</strong> — that great content isn't manufactured, it's meant.
              </p>
              <p className="text-white/35 italic">
                Every piece of content that leaves this agency has been held to the same standard I hold my own words to.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              {[
                { value: "10+", label: "Years Writing" },
                { value: "235K+", label: "IG Followers" },
                { value: "Global", label: "Brand Clients" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="h-display text-white text-[32px]">{s.value}</p>
                  <p className="font-mono text-[11px] uppercase tracking-eyebrow text-white/35 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-flex items-center gap-2 mt-10 text-[14px] font-semibold text-white/60 hover:text-white transition-colors"
            >
              Work with Naveed directly →
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
