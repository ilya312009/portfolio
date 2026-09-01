import React, { useState } from 'react';
import { SpaceBackground } from './components/SpaceBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-[#2c67ed] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Background Starfield & Glowing Nebulas */}
      <SpaceBackground />

      {/* Floating Center Glow Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
