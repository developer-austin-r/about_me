"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { PORTFOLIO_DATA } from "@/data";
import { Award, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const certifications = PORTFOLIO_DATA.certifications;

export default function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    const carousel = carouselRef.current;
    const card = carousel?.children[index] as HTMLElement | undefined;

    if (!carousel || !card) {
      return;
    }

    carousel.scrollTo({
      left: card.offsetLeft - carousel.offsetLeft,
      behavior: "smooth",
    });
  };

  const goToCard = (index: number) => {
    const nextIndex = (index + certifications.length) % certifications.length;
    setActiveIndex(nextIndex);
    scrollToCard(nextIndex);
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const autoSlide = window.setInterval(() => {
      setActiveIndex((current) => {
        const nextIndex = (current + 1) % certifications.length;
        scrollToCard(nextIndex);
        return nextIndex;
      });
    }, 3600);

    return () => window.clearInterval(autoSlide);
  }, [isPaused]);

  const handleScroll = () => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const center = carousel.scrollLeft + carousel.offsetWidth / 2;
    const closestIndex = Array.from(carousel.children).reduce(
      (closest, child, index) => {
        const item = child as HTMLElement;
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const distance = Math.abs(center - itemCenter);

        return distance < closest.distance ? { index, distance } : closest;
      },
      { index: activeIndex, distance: Number.POSITIVE_INFINITY },
    ).index;

    setActiveIndex(closestIndex);
  };

  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="Certifications" subtitle="Professional credentials and courses" />

        <div
          className="relative mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#030014] to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#030014] to-transparent md:w-24" />

          <button
            type="button"
            onClick={() => goToCard(activeIndex - 1)}
            className="absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all hover:border-purple-400/50 hover:bg-purple-500/20 hover:text-white md:flex"
            aria-label="Previous certification"
          >
            <ChevronLeft size={20} />
          </button>

          <motion.div
            ref={carouselRef}
            onScroll={handleScroll}
            className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5 md:gap-6"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-card group relative min-h-[320px] shrink-0 basis-[86%] snap-center overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:basis-[62%] md:basis-[46%] lg:basis-[31.5%] ${cert.borderColor}`}
              >
                <div className={`absolute -right-16 -top-20 h-44 w-44 rounded-full ${cert.bgColor} blur-3xl transition-opacity duration-500 group-hover:opacity-80`} />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${cert.bgColor} mb-6`}>
                      <Award className={`${cert.iconColor}`} size={24} />
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-white text-slate-200 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-slate-400 font-medium text-sm mb-1">{cert.issuer}</p>
                    {cert.date && <p className="text-slate-500 text-xs mb-2">{cert.date}</p>}
                    {cert.credentialId && <p className="text-slate-500 text-xs mb-3">ID: {cert.credentialId}</p>}
                    {cert.skills && (
                      <p className="text-slate-400 text-xs mb-6">
                        <span className="font-semibold">Skills:</span> {cert.skills.join(", ")}
                      </p>
                    )}
                  </div>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full w-fit transition-colors border border-white/5 hover:border-white/20"
                    >
                      <span>View Credential</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <button
            type="button"
            onClick={() => goToCard(activeIndex + 1)}
            className="absolute right-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all hover:border-blue-400/50 hover:bg-blue-500/20 hover:text-white md:flex"
            aria-label="Next certification"
          >
            <ChevronRight size={20} />
          </button>

          <div className="mt-3 flex items-center justify-center gap-2">
            {certifications.map((cert, index) => (
              <button
                key={cert.id}
                type="button"
                onClick={() => goToCard(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-gradient-to-r from-purple-500 to-blue-500"
                    : "w-2.5 bg-white/15 hover:bg-white/30"
                }`}
                aria-label={`View certification ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
