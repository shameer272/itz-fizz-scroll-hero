import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-16 px-6 sm:px-12 lg:px-20 border-t border-white/[0.08] bg-[#030407] text-slate-500 text-xs select-none">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span className="font-mono text-xs tracking-[0.25em] text-white uppercase font-medium">
              ITZ / FIZZ
            </span>
          </div>
          <span className="text-slate-700">|</span>
          <span className="font-mono text-[11px] tracking-wider text-slate-400 uppercase">
            DIGITAL EXPERIENCE
          </span>
        </div>

        <div className="flex items-center space-x-8 font-mono text-[11px] text-slate-400">
          <span>© 2026</span>
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors cursor-pointer group"
            data-cursor-hover="true"
          >
            <span className="tracking-widest">TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
