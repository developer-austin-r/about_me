"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#08031d]/92 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.38)] backdrop-blur-2xl"
          : "bg-[#030014]/72 py-5 backdrop-blur-xl"
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <a href="#" className="group flex items-center gap-2 text-2xl font-black tracking-tighter">
          <span className="relative">
            {PORTFOLIO_DATA.hero.name}
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
          </span>
          <span className="text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white hover:shadow-[0_0_22px_rgba(139,92,246,0.16)]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="group relative inline-flex items-center overflow-hidden rounded-full border border-purple-300/20 bg-white/10 px-6 py-3 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_40px_rgba(0,0,0,0.22)] transition-all duration-300 hover:border-purple-300/40 hover:bg-white/15"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-purple-500/0 via-purple-500/25 to-blue-500/0 transition-transform duration-500 group-hover:translate-x-full" />
            <span className="relative">Hire Me</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="relative z-50 rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white md:hidden"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close navigation menu"
              className="absolute inset-0 cursor-default bg-black/55 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.aside
              id="mobile-navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="absolute right-0 top-0 flex h-dvh w-72 max-w-[82vw] flex-col border-l border-white/10 bg-[#08031d]/98 px-6 pb-8 pt-24 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
            >
              <div className="mb-8 text-sm font-semibold uppercase tracking-[0.24em] text-purple-300/80">
                Menu
              </div>

              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-base font-semibold text-slate-200 transition-colors hover:border-purple-300/30 hover:bg-white/10 hover:text-white"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-auto inline-flex items-center justify-center rounded-full border border-purple-300/30 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15"
              >
                Hire Me
              </a>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
