import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 lg:px-16 py-6 transition-all duration-300">
        <nav 
          aria-label="Main Navigation"
          className="max-w-7xl mx-auto flex items-center justify-between"
        >
          {/* Left Brand Identity */}
          <a 
            href="#hero"
            className="flex items-center space-x-3 group"
            data-cursor-hover="true"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform"></span>
            <span className="font-mono text-xs sm:text-sm tracking-[0.25em] text-slate-200 group-hover:text-white uppercase transition-colors">
              ITZ / DIGITAL
            </span>
          </a>

          {/* Center Coordinates / Editorial Pill (Desktop) */}
          <div className="hidden lg:flex items-center space-x-2 text-[11px] font-mono tracking-widest text-slate-500 uppercase">
            <span>[ LAT 28°38'N // LON 77°13'E ]</span>
            <span className="text-slate-700">•</span>
            <span className="text-slate-400">GSAP 3 SPATIAL ENGINE</span>
          </div>

          {/* Right Action Group */}
          <div className="flex items-center space-x-3">
            <a
              href="./itz-fizz-scroll-hero.zip"
              download="itz-fizz-scroll-hero.zip"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono tracking-widest text-cyan-300 hover:text-white bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 transition-all duration-300 backdrop-blur-md active:scale-95"
              data-cursor-hover="true"
              title="Download Source Code (.zip)"
            >
              <span>SOURCE.ZIP</span>
              <span className="w-1 h-1 rounded-full bg-cyan-400 animate-ping"></span>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-mono tracking-[0.25em] text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all duration-300 backdrop-blur-md active:scale-95 cursor-pointer"
              data-cursor-hover="true"
              aria-expanded={menuOpen}
              aria-label="Toggle Menu"
            >
              <span>MENU</span>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
            </button>
          </div>
        </nav>
      </header>

      {/* Minimalist Editorial Menu Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 z-[80] bg-[#040508]/95 backdrop-blur-2xl flex flex-col justify-between p-8 sm:p-16 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
            <span className="font-mono text-xs tracking-widest text-slate-400">NAVIGATION / DIRECTORY</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
              data-cursor-hover="true"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="max-w-4xl mx-auto w-full my-auto flex flex-col space-y-6">
            {[
              { num: '01', title: 'OVERVIEW', href: '#hero' },
              { num: '02', title: 'THE FUTURE MOVES WITH YOU', href: '#manifesto' },
              { num: '03', title: 'CAPABILITIES & MOTION', href: '#features' },
              { num: '04', title: 'DOWNLOAD SOURCE CODE (.ZIP)', href: './itz-fizz-scroll-hero.zip', download: true },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                download={item.download ? "itz-fizz-scroll-hero.zip" : undefined}
                onClick={() => setMenuOpen(false)}
                className="group flex items-baseline justify-between py-4 border-b border-white/10 text-slate-400 hover:text-white transition-all"
                data-cursor-hover="true"
              >
                <div className="flex items-baseline space-x-4">
                  <span className="font-mono text-xs text-cyan-400">{item.num}</span>
                  <span className="font-display text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight group-hover:translate-x-3 transition-transform">
                    {item.title}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
              </a>
            ))}
          </div>

          <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 pt-6 border-t border-white/5">
            <span>ITZ FIZZ STUDIO // AESTHETIC FRONTEND MOTION</span>
            <span>AVAILABLE FOR GLOBAL CONTRACTS</span>
          </div>
        </div>
      )}
    </>
  );
}
