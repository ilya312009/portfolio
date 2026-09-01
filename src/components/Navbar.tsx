import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, User, Briefcase, Mail, Home } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section scroll spy
      const sections = ['hero', 'about', 'portfolio', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center px-4 pt-4 sm:pt-6 pointer-events-none">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`pointer-events-auto flex items-center justify-between px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full border transition-all duration-300 ${
            isScrolled
              ? 'bg-[#050b1d]/85 backdrop-blur-xl border-[#2c67ed]/40 shadow-[0_0_25px_rgba(44,103,237,0.35)]'
              : 'bg-[#0a122c]/65 backdrop-blur-md border-[#2c67ed]/25 shadow-[0_0_20px_rgba(44,103,237,0.2)]'
          }`}
          style={{
            boxShadow: '0 0 25px rgba(44, 103, 237, 0.3), inset 0 0 12px rgba(44, 103, 237, 0.15)'
          }}
        >
          {/* Logo / Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 mr-2 sm:mr-6 text-left group"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#2c67ed] to-[#60a5fa] flex items-center justify-center shadow-[0_0_12px_#2c67ed] group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
           
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2c67ed] to-[#3b82f6] shadow-[0_0_15px_rgba(44,103,237,0.8)] -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-blue-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick CTA button */}
          <div className="hidden sm:flex items-center ml-2 sm:ml-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="relative px-3.5 py-1.5 text-xs font-semibold rounded-full text-white bg-gradient-to-r from-[#2c67ed] to-[#4f46e5] hover:from-[#3b82f6] hover:to-[#6366f1] transition-all duration-200 shadow-[0_0_15px_rgba(44,103,237,0.5)] hover:shadow-[0_0_20px_rgba(44,103,237,0.8)] hover:scale-105"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center ml-1">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-[#2c67ed]/20 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden p-4 rounded-2xl bg-[#050b1d]/95 backdrop-blur-2xl border border-[#2c67ed]/40 shadow-[0_0_30px_rgba(44,103,237,0.35)]"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#2c67ed] text-white shadow-[0_0_15px_rgba(44,103,237,0.6)]'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-blue-300" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-2 w-full py-2.5 text-center text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-[#2c67ed] to-[#4f46e5] shadow-[0_0_15px_rgba(44,103,237,0.5)]"
              >
                Hubungi Saya (Hire Me)
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
