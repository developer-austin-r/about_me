"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { PORTFOLIO_DATA } from "@/data";
import { Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const getCopyValue = (url: string) => url.replace("mailto:", "").replace("tel:", "");

  const getDisplayValue = (name: string, url: string) => {
    if (name === "Email") {
      return "Send email";
    }

    if (name === "Phone") {
      return "Call now";
    }

    return url.replace(/(^\w+:|^)\/\//, "");
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader title="Get In Touch" subtitle="Let's build something amazing together" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-8 md:p-12 text-center border-t border-white/20 shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your next project?</h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I&apos;ll try my best to get back to you!
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {PORTFOLIO_DATA.socials.map((social, idx) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 pr-14 transition-colors hover:bg-white/10"
              >
                <a
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex min-w-0 w-full items-center gap-3"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-white transition-colors group-hover:border-purple-500/50">
                    <social.icon size={20} />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-sm text-slate-400">{social.name}</p>
                    <p className="truncate font-medium text-slate-200 transition-colors group-hover:text-purple-400">
                      {getDisplayValue(social.name, social.url)}
                    </p>
                  </div>
                </a>
                
                <button
                  onClick={() => handleCopy(getCopyValue(social.url))}
                  className="absolute right-4 z-10 rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label={`Copy ${social.name}`}
                >
                  {copiedText === getCopyValue(social.url) ? (
                    <CheckCircle2 size={18} className="text-green-400" />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
