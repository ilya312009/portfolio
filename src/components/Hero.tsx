import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Terminal,
  Sparkles,
  Download,
  Orbit,
  Code2,
  Cpu,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { portfolioData } from "../data/portfolioData";

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  // Typewriter effect state
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const titles = personal.titles;
    const fullText = titles[titleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause at full word
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(500);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex, typingSpeed, personal.titles]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Intro Text & Typewriter */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
        >
          {/* Cosmic Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2c67ed]/10 border border-[#2c67ed]/40 text-[#5b8bf7] text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(44,103,237,0.25)]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{personal.status}</span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-tight sm:leading-none mb-4">
            Hello, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-[#2c67ed] drop-shadow-[0_0_25px_rgba(44,103,237,0.5)]">
              {personal.name}
            </span>
          </h1>

          {/* Dynamic Typewriter Box */}
          <div className="h-12 sm:h-14 flex items-center mb-6">
            <div className="text-xl sm:text-3xl font-bold font-mono text-slate-200 flex items-center gap-2">
              <span className="text-[#2c67ed]">&gt;</span>
              <span className="text-white drop-shadow-[0_0_10px_rgba(44,103,237,0.8)]">
                {currentText}
              </span>
              <span className="w-2.5 h-6 sm:h-8 bg-[#2c67ed] inline-block animate-pulse shadow-[0_0_10px_#2c67ed]" />
            </div>
          </div>

          {/* Bio Description */}
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mb-8 leading-relaxed">
            {personal.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
            <button
              onClick={() => scrollTo("portfolio")}
              className="group relative px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#2c67ed] to-[#1d4ed8] shadow-[0_0_25px_rgba(44,103,237,0.5)] hover:shadow-[0_0_35px_rgba(44,103,237,0.8)] transition-all duration-300 hover:scale-105 flex items-center gap-2 border border-blue-400/30"
            >
              <span>Jelajahi Proyek</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-[#0a122c]/80 hover:bg-[#0e1b42] border border-[#2c67ed]/40 hover:border-[#2c67ed] transition-all duration-300 hover:scale-105 backdrop-blur-md shadow-[0_0_15px_rgba(44,103,237,0.15)] flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 text-[#5b8bf7]" />
              <span>Hubungi Saya</span>
            </button>

            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("about");
              }}
              className="px-4 py-3.5 rounded-xl font-medium text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Download className="w-4 h-4 text-[#5b8bf7]" />
              <span>Lihat CV</span>
            </a>
          </div>

          {/* Quick Social & Tech Badges */}
          <div className="flex items-center gap-4 text-slate-400 text-xs sm:text-sm font-mono pt-4 border-t border-slate-800/80 w-full justify-center lg:justify-start">
            <a
              href="https://github.com/ilya312009"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-[#2c67ed] hover:text-[#5b8bf7] transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <div className="hidden sm:flex items-center gap-2 text-slate-400">
              <Code2 className="w-3.5 h-3.5 text-[#2c67ed]" />
              <span>React • Tailwind • TypeScript</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Cosmic Floating Holographic Orb & Orbit Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lg:col-span-5 flex items-center justify-center relative"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
            {/* Outer Orbit Rings */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#2c67ed]/30 animate-spin-slow pointer-events-none" />
            <div className="absolute inset-6 rounded-full border border-[#7c3aed]/20 animate-pulse-slow pointer-events-none" />
            <div className="absolute -inset-4 rounded-full border border-[#2c67ed]/15 pointer-events-none" />

            {/* Glowing Nebula Core */}
            <div className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-[#2c67ed]/40 via-[#4f46e5]/30 to-[#06b6d4]/20 blur-2xl animate-pulse" />

            {/* Center Cosmic Planet / Tech Sphere Card */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-b from-[#0a1435] to-[#040817] p-1 border border-[#2c67ed]/50 shadow-[0_0_40px_rgba(44,103,237,0.4)] backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden group"
            >
              {/* Internal glowing shine overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-[#2c67ed]/20 pointer-events-none" />

              {/* Planet / Space Visual Graphic */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#1e3a8a] via-[#2c67ed] to-[#06b6d4] p-1 shadow-[0_0_30px_#2c67ed] flex items-center justify-center overflow-hidden">
                <div className="w-full h-full rounded-full bg-[#030712]/40 backdrop-blur-sm flex items-center justify-center">
                  <Orbit className="w-16 h-16 sm:w-20 sm:h-20 text-white/90 animate-spin-slow" />
                </div>
              </div>

              {/* Floating Label */}
              <div className="mt-4 text-center z-10">
                <h3 className="text-white font-bold text-base tracking-wide flex items-center justify-center gap-1.5">
                  <Cpu className="w-4 h-4 text-[#5b8bf7]" />
                  Software Engineer
                </h3>
              </div>

              {/* Interactive Hover Border Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-2 border-[#5b8bf7] shadow-[inset_0_0_20px_#2c67ed]" />
            </motion.div>

            {/* Orbiting Satellite Card 1: Code */}
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 sm:top-2 sm:-left-6 z-20 px-3.5 py-2 rounded-xl bg-[#09112a]/90 border border-[#2c67ed]/50 backdrop-blur-md shadow-[0_0_15px_rgba(44,103,237,0.35)] flex items-center gap-2.5"
            >
              <div className="w-7 h-7 rounded-lg bg-[#2c67ed]/20 flex items-center justify-center text-[#5b8bf7]">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-slate-400 font-mono">
                  Speciality
                </div>
                <div className="text-xs font-bold text-white">
                  Clean Architecture
                </div>
              </div>
            </motion.div>

            {/* Orbiting Satellite Card 2: Interactive */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -right-2 sm:bottom-4 sm:-right-4 z-20 px-3.5 py-2 rounded-xl bg-[#09112a]/90 border border-[#7c3aed]/50 backdrop-blur-md shadow-[0_0_15px_rgba(124,58,237,0.35)] flex items-center gap-2.5"
            >
              <div className="w-7 h-7 rounded-lg bg-[#7c3aed]/20 flex items-center justify-center text-purple-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-slate-400 font-mono">
                  Experience
                </div>
                <div className="text-xs font-bold text-white">
                  Modern & Smooth UI
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
