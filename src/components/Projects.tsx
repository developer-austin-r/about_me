"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { ExternalLink } from "lucide-react";
import { Github } from "./icons";
import { PORTFOLIO_DATA } from "@/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="Featured Projects" subtitle="Some of my recent work" />
        
        <div className="flex flex-col gap-24 mt-16">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${idx % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative h-[300px] sm:h-[400px] w-full bg-slate-900 rounded-2xl overflow-hidden border border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                  />
                  
                  {/* Overlay for aesthetic */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80" />
                </div>
              </div>
              
              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <p className="text-purple-400 font-medium mb-2 text-sm uppercase tracking-wider">{project.role}</p>
                <h3 className="text-3xl sm:text-4xl font-bold mb-6">{project.title}</h3>
                
                <div className="glass-card p-6 rounded-xl mb-6 relative z-10">
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-sm text-slate-400 font-medium px-3 py-1 bg-white/5 rounded-full border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-6">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors hover:scale-105 transform"
                    >
                      <Github size={20} />
                      <span className="font-medium">Code</span>
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors hover:scale-105 transform"
                    >
                      <ExternalLink size={20} />
                      <span className="font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
