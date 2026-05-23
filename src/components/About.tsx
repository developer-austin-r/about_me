"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { PORTFOLIO_DATA } from "@/data";
import { Code2, Laptop, Rocket } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Laptop className="text-blue-400" size={32} />,
      title: "Frontend Development",
      description: "Building responsive, accessible, and highly interactive user interfaces.",
    },
    {
      icon: <Code2 className="text-purple-400" size={32} />,
      title: "Backend Architecture",
      description: "Designing scalable APIs and robust database structures.",
    },
    {
      icon: <Rocket className="text-pink-400" size={32} />,
      title: "Performance Optimization",
      description: "Ensuring lightning-fast load times and smooth animations.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="About Me" subtitle="Get to know me and what I do" />
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Passionate about building <span className="text-gradient">exceptional</span> digital experiences.
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg mb-8">
              {PORTFOLIO_DATA.about.summary}
            </p>
            
            <div className="flex gap-4">
              <div className="glass px-6 py-4 rounded-xl border-l-4 border-l-purple-500">
                <h4 className="text-3xl font-bold text-white mb-1">{PORTFOLIO_DATA.hero.yearsOfExperience}</h4>
                <p className="text-sm text-slate-400">Years Experience</p>
              </div>
              <div className="glass px-6 py-4 rounded-xl border-l-4 border-l-blue-500">
                <h4 className="text-3xl font-bold text-white mb-1">15+</h4>
                <p className="text-sm text-slate-400">Projects Contributed</p>
              </div>
            </div>
          </motion.div>
          
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 ${
                  index === 2 ? "sm:col-span-2 sm:w-1/2 sm:justify-self-center" : ""
                }`}
              >
                <div className="bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-white/10">
                  {card.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{card.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
