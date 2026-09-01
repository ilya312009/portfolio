import React from "react";
import { Sparkles, Rocket, Heart } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Footer: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-[#2c67ed]/20 bg-[#030712]/90 backdrop-blur-xl z-10 overflow-hidden">
      {/* Ambient glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#2c67ed] to-transparent shadow-[0_0_15px_#2c67ed]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#2c67ed] to-[#60a5fa] flex items-center justify-center shadow-[0_0_10px_#2c67ed]">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-lg text-white tracking-wide">
                Hello, I'm Ilya Sandro.
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Membangun masa depan web antarmuka yang cepat, estetik, dan
              interaktif.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-xs text-slate-400 font-mono">
            <a href="#hero" className="hover:text-[#5b8bf7] transition-colors">
              Beranda
            </a>
            <a href="#about" className="hover:text-[#5b8bf7] transition-colors">
              Tentang
            </a>
            <a
              href="#portfolio"
              className="hover:text-[#5b8bf7] transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="hover:text-[#5b8bf7] transition-colors"
            >
              Kontak
            </a>
          </div>

          {/* Back to top rocket button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#09122c] border border-[#2c67ed]/40 hover:border-[#2c67ed] text-xs font-semibold text-white shadow-[0_0_15px_rgba(44,103,237,0.2)] hover:shadow-[0_0_20px_rgba(44,103,237,0.5)] transition-all hover:scale-105"
          >
            <span>Kembali ke Orbit Atas</span>
            <Rocket className="w-3.5 h-3.5 text-[#5b8bf7] group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400/20" />
            <span>using React, Tailwind CSS & Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
