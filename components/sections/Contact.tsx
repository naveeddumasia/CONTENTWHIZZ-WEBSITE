"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Flag from "@/components/ui/Flag";

const services = ["Content Writing", "Social Media", "Graphics & Design", "Film & Video", "Translation", "Other"];

function ServiceSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full glass rounded-xl px-4 py-3 text-[14px] text-left flex items-center justify-between focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
      >
        <span className={value ? "text-white" : "text-white/25"}>{value || "Select a service…"}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`text-white/40 transition-transform duration-200 flex-shrink-0 ${open ? "rotate-180" : ""}`}>
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-2 rounded-xl overflow-hidden"
            style={{
              background: "rgba(18,18,18,0.96)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
            }}
          >
            {services.map((s) => (
              <li key={s}>
                <button
                  type="button"
                  onClick={() => { onChange(s); setOpen(false); }}
                  className={`w-full text-left px-4 py-2.5 text-[14px] transition-colors duration-150
                    ${value === s
                      ? "text-white bg-white/10"
                      : "text-white/60 hover:text-white hover:bg-white/[0.06]"
                    }`}
                >
                  {s}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

const FORMSPREE = "https://formspree.io/f/mlgywqwo";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const inputCls = "w-full glass rounded-xl px-4 py-3 text-[14px] text-white placeholder-white/25 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all bg-transparent";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      });
      if (res.ok) setSent(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="font-mono text-[12px] uppercase tracking-eyebrow text-white/35 mb-4">[ GET IN TOUCH ]</p>
            <h2 className="h-display text-white mb-6" style={{ fontSize: "clamp(32px,5vw,66px)" }}>
              Let's create something<br />great together.
            </h2>
            <p className="text-[15px] text-white/45 leading-relaxed mb-8">
              Ready to grow your business with premium content? Drop us a message and we'll get back to you within one business day.
            </p>
            <div className="space-y-5">
              {[
                { icon: "📞", label: "Phone",    value: "+91 90162 49312",      href: "tel:09016249312",             flags: false },
                { icon: "✉️", label: "Email",    value: "info@contentwhizz.in", href: "mailto:info@contentwhizz.in", flags: false },
                { icon: "📍", label: "Location", value: null,                   href: null,                          flags: true  },
                { icon: "🕐", label: "Hours",    value: "Mon–Sat 10:00–19:00 IST", href: null,                      flags: false },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="glass w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0">{c.icon}</div>
                  <div>
                    <p className="font-mono text-[12px] uppercase tracking-eyebrow text-white/30">{c.label}</p>
                    {c.flags ? (
                      <p className="text-[14px] font-semibold text-white flex items-center gap-1.5">
                        <Flag country="in" /> India <span className="text-white/30">·</span> <Flag country="ae" /> Dubai <span className="text-white/30">·</span> <Flag country="gb" /> UK
                      </p>
                    ) : c.href ? (
                      <a href={c.href} className="text-[14px] font-semibold text-white hover:text-white/70 transition-colors">{c.value}</a>
                    ) : (
                      <p className="text-[14px] font-semibold text-white">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              {[
                { name: "LinkedIn",  href: "#" },
                { name: "Instagram", href: "#" },
                { name: "Facebook",  href: "#" },
              ].map((s) => (
                <a key={s.name} href={s.href}
                  className="glass px-4 py-2 rounded-full text-[12px] text-white/40 hover:text-white hover:bg-white/10 transition-all font-mono tracking-eyebrow uppercase">
                  {s.name}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }} className="glass-card rounded-3xl p-8 md:p-10">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="text-5xl">🎉</div>
                <h3 className="h-display text-[26px] text-white">Message sent!</h3>
                <p className="text-white/40 text-[14px]">We'll get back to you within one business day.</p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                  className="mt-4 text-[13px] text-white/50 font-semibold hover:text-white transition-colors">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="h-display text-[22px] text-white mb-6">Send us a message</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[12px] uppercase tracking-eyebrow text-white/30 block mb-1.5">Your Name *</label>
                    <input required type="text" placeholder="Rahul Sharma" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
                  </div>
                  <div>
                    <label className="font-mono text-[12px] uppercase tracking-eyebrow text-white/30 block mb-1.5">Email Address *</label>
                    <input required type="email" placeholder="you@company.com" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[12px] uppercase tracking-eyebrow text-white/30 block mb-1.5">Phone Number</label>
                    <input type="tel" placeholder="+91 98765 43210" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} />
                  </div>
                  <div>
                    <label className="font-mono text-[12px] uppercase tracking-eyebrow text-white/30 block mb-1.5">Service Needed</label>
                    <ServiceSelect value={form.service} onChange={(v) => setForm({ ...form, service: v })} />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-[12px] uppercase tracking-eyebrow text-white/30 block mb-1.5">Your Message *</label>
                  <textarea required rows={4} placeholder="Tell us about your project, goals, and timeline…"
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputCls} resize-none`} />
                </div>
                <button type="submit" disabled={submitting} className="w-full py-3.5 rounded-xl text-[14px] font-semibold btn-black disabled:opacity-50 disabled:cursor-not-allowed">
                  {submitting ? "Sending…" : "Send Message →"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
