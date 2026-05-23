import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-hidden selection:bg-purple-500/30 selection:text-purple-200">
      <Navbar />
      
      <div className="w-full relative">
        <Hero />
        
        {/* Decorative separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <About />
        <Skills />
        
        {/* Decorative separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <Projects />
        <Experience />
        
        {/* Decorative separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
}
