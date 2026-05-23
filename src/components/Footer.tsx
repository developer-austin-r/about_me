"use client";

import { PORTFOLIO_DATA } from "@/data";
import { Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#030014]/50 backdrop-blur-md py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-400 text-sm">
          &copy; {year} {PORTFOLIO_DATA.hero.name}. All rights reserved.
        </div>
        
        <div className="flex items-center gap-1 text-slate-400 text-sm">
          Built with <Heart size={14} className="text-red-500 fill-red-500 mx-1" /> using Next.js & Tailwind
        </div>
        
        <div className="flex items-center gap-4">
          {PORTFOLIO_DATA.socials.slice(0, 4).map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label={social.name}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
