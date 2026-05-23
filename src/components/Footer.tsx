"use client";

import { PORTFOLIO_DATA } from "@/data";
import { ArrowUpRight, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-[#040018]/90 py-10 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 md:px-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <a href="#" className="inline-flex items-center text-2xl font-black tracking-tighter text-white">
              {PORTFOLIO_DATA.hero.name}
              <span className="text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]">.</span>
            </a>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
              Building scalable, secure, and modern web applications with clean engineering.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-purple-300/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-all hover:border-purple-300/40 hover:bg-white/15"
          >
            Let&apos;s connect
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 text-sm text-slate-400 sm:flex-row sm:gap-4">
            <span>&copy; {year} {PORTFOLIO_DATA.hero.name}. All rights reserved.</span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
            <span className="inline-flex items-center gap-1">
              Built with <Heart size={14} className="fill-red-500 text-red-500" /> using Next.js & Tailwind
            </span>
          </div>

          <div className="flex items-center gap-3">
            {PORTFOLIO_DATA.socials.slice(0, 5).map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith("http") ? "_blank" : undefined}
                rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition-all hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/15 hover:text-white"
                aria-label={social.name}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
