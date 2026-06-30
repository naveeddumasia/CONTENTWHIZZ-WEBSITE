"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Flag from "@/components/ui/Flag";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="font-mono text-[12px] uppercase tracking-eyebrow text-white/35 mb-6">[ WHO WE ARE ]</p>
            <blockquote className="h-display text-white mb-8"
              style={{ fontSize: "clamp(32px,4vw,56px)" }}>
              "Cheers to quality content."
            </blockquote>
            <p className="text-[15px] text-white/45 leading-relaxed mb-6">
              ContentWhizz is a premium content writing service with clients across <strong className="text-white inline-flex items-center gap-1.5"><Flag country="in" /> India, <Flag country="ae" /> Dubai and <Flag country="gb" /> UK</strong>. Our team carries <strong className="text-white">15+ years of combined expertise</strong> in writing, publishing, design and strategy — serving businesses globally.
            </p>
            <p className="text-[15px] text-white/45 leading-relaxed">
              We're creators — a unison of professionals delivering unparalleled, super-crisp content. Our tagline <strong className="text-white">"We create, you grow"</strong> mirrors our fundamental commitment to your business growth.
            </p>

          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }}>
            <div className="relative w-full h-[220px] rounded-3xl overflow-hidden glass-card mb-6">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&q=80&auto=format&fit=crop"
                alt="ContentWhizz team collaborating"
                fill
                className="object-cover grayscale contrast-125"
                sizes="600px"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.55) 100%)" }} />
            </div>
            <div className="glass-card rounded-3xl p-8 md:p-10 space-y-5">
            {[
              ["Total Content Solution", "From strategy to execution — blogs, social, video scripts, translation, press releases and design under one roof."],
              ["Quality Guaranteed", "Every piece of content is reviewed for accuracy, originality and brand alignment before delivery."],
              ["Mobile-Friendly Content", "Content crafted with readability and engagement in mind across all devices and platforms."],
              ["Audience-Resonant Writing", "We research your audience first, then write content that speaks directly to their needs."],
            ].map(([title, desc]) => (
              <div key={title as string} className="flex gap-4 pb-5 border-b border-white/[0.06] last:border-0 last:pb-0">
                <div className="w-1 h-full min-h-[40px] rounded-full bg-white/15 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[14px] font-semibold text-white mb-1">{title}</p>
                  <p className="text-[13px] text-white/40 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
            <div className="pt-2 flex flex-wrap gap-6">
              <div>
                <p className="font-mono text-[12px] uppercase tracking-eyebrow text-white/30">Founded</p>
                <p className="text-[14px] font-semibold text-white mt-1">June 2016</p>
              </div>
              <div>
                <p className="font-mono text-[12px] uppercase tracking-eyebrow text-white/30">Location</p>
                <p className="text-[14px] font-semibold text-white mt-1 flex items-center gap-1.5"><Flag country="in" /> India · <Flag country="ae" /> Dubai · <Flag country="gb" /> UK</p>
              </div>
              <div>
                <p className="font-mono text-[12px] uppercase tracking-eyebrow text-white/30">Service Area</p>
                <p className="text-[14px] font-semibold text-white mt-1">India & Global (Remote)</p>
              </div>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
