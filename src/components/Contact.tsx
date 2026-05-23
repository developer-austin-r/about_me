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
                className="group relative flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <a
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 w-full"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-white border border-white/10 group-hover:border-purple-500/50 transition-colors">
                    <social.icon size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-slate-400">{social.name}</p>
                    <p className="font-medium text-slate-200 group-hover:text-purple-400 transition-colors">
                      {social.url.replace(/(^\w+:|^)\/\//, "").replace("mailto:", "").replace("tel:", "")}
                    </p>
                  </div>
                </a>
                
                <button
                  onClick={() => handleCopy(social.url.replace("mailto:", "").replace("tel:", ""))}
                  className="p-2 text-slate-400 hover:text-white transition-colors absolute right-4 opacity-0 group-hover:opacity-100"
                  aria-label={`Copy ${social.name}`}
                >
                  {copiedText === social.url.replace("mailto:", "").replace("tel:", "") ? (
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
