"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Work", "Services", "About", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md border-b border-[#1F1F1F]" : ""
        }`}
      >
        <nav
          className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Wordmark */}
          <a
            href="#"
            className="font-display italic text-[22px] text-[#F5F5F5] tracking-tight leading-none"
            aria-label="LORE — home"
          >
            LORE
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-[13px] text-[#6B6B6B] hover:text-[#F5F5F5] transition-colors duration-200"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1 px-4 py-2 text-[13px] border border-[#F5F5F5]/40 text-[#F5F5F5] hover:bg-white hover:text-[#0A0A0A] transition-all duration-200 tracking-wide"
              aria-label="Start a project"
            >
              Start a Project →
            </a>

            <button
              className="md:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-5 h-px bg-[#F5F5F5] transition-transform duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-[#F5F5F5] transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-[#F5F5F5] transition-transform duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col justify-center items-center gap-8"
          >
            {links.map((l, i) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="font-display italic text-[clamp(32px,8vw,56px)] text-[#F5F5F5]"
                onClick={() => setMenuOpen(false)}
              >
                {l}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.08 + 0.1, duration: 0.4 }}
              className="mt-4 px-6 py-3 border border-[#F5F5F5]/40 text-[#F5F5F5] text-sm tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              Start a Project →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
