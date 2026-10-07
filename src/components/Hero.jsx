import React, { useRef } from 'react';
import useHeroAnimation from '../hooks/useHeroAnimation';
import HeroVisual from './HeroVisual';
import Stats from './Stats';
import ScrollIndicator from './ScrollIndicator';

export default function Hero({ preloaderDone = true }) {
  const heroRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headlineLine1Ref = useRef(null);
  const headlineLine2Ref = useRef(null);
  const aiCoreRef = useRef(null);
  const glowRef = useRef(null);
  const orbitRingsRef = useRef(null);
  const dataRibbonsRef = useRef(null);
  const statsRef = useRef(null);
  const indicatorRef = useRef(null);
  const annotationsRef = useRef(null);

  // Hook handles complete initial load and responsive scroll animation
  useHeroAnimation({
    heroRef,
    eyebrowRef,
    headlineLine1Ref,
    headlineLine2Ref,
    aiCoreRef,
    glowRef,
    orbitRingsRef,
    dataRibbonsRef,
    statsRef,
    indicatorRef,
    annotationsRef,
    preloaderDone,
  });

  // Clean typographic character splitter for character-by-character reveal
  const renderSplitText = (text) => {
    const words = text.split(' ');
    return words.map((word, wIdx) => (
      <span key={wIdx} className="inline-block whitespace-nowrap mx-[0.2em]">
        {word.split('').map((char, cIdx) => (
          <span
            key={cIdx}
            className="char-unit inline-block gpu-layer"
          >
            {char}
          </span>
        ))}
      </span>
    ));
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="hero relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[#040508] editorial-grid film-grain select-none"
      aria-label="Hero Experience"
    >
      {/* Soft atmospheric gradient & vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040508]/60 via-transparent to-[#040508] pointer-events-none" />

      {/* Subtle Technical Annotations (Extremely Low Opacity) */}
      <div
        ref={annotationsRef}
        className="absolute top-20 inset-x-6 sm:inset-x-12 hidden md:flex items-center justify-between text-[9px] font-mono tracking-[0.25em] text-slate-500/35 uppercase pointer-events-none z-20"
      >
        <div className="flex items-center space-x-2">
          <span className="w-1 h-1 rounded-full bg-cyan-400/40"></span>
          <span>SYSTEM ONLINE // 60 FPS</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>SPATIAL REF // LATENCY 0.0MS</span>
        </div>
      </div>

      {/* Viewport Container (Locked to 100vh with balanced flex distribution) */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto flex flex-col justify-between items-center px-4 sm:px-8 lg:px-12 pt-20 sm:pt-22 pb-3 sm:pb-5">
        
        {/* TOP: EDITORIAL HEADLINE GROUP */}
        <div className="flex flex-col items-center text-center z-30 max-w-4xl w-full">
          {/* Eyebrow Label: ● THE FUTURE MOVES WITH YOU */}
          <div
            ref={eyebrowRef}
            className="flex items-center space-x-2 px-3 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.07] text-slate-400 text-[10px] sm:text-xs font-mono tracking-[0.22em] uppercase backdrop-blur-md mb-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>● THE FUTURE MOVES WITH YOU</span>
          </div>

          {/* Line 1: W E L C O M E */}
          <h1
            ref={headlineLine1Ref}
            className="font-display font-medium text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] tracking-[0.2em] sm:tracking-[0.25em] uppercase leading-tight drop-shadow-[0_2px_16px_rgba(255,255,255,0.1)] whitespace-nowrap"
          >
            {renderSplitText('W E L C O M E')}
          </h1>

          {/* Line 2: I T Z   F I Z Z */}
          <h2
            ref={headlineLine2Ref}
            className="font-display font-light text-slate-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0.28em] sm:tracking-[0.32em] uppercase leading-tight mt-0.5 sm:mt-1 whitespace-nowrap opacity-90"
          >
            {renderSplitText('I T Z   F I Z Z')}
          </h2>
        </div>

        {/* CENTER: 3D AI INTELLIGENCE CORE */}
        <div className="my-auto w-full flex items-center justify-center">
          <HeroVisual
            aiCoreRef={aiCoreRef}
            glowRef={glowRef}
            orbitRingsRef={orbitRingsRef}
            dataRibbonsRef={dataRibbonsRef}
          />
        </div>

        {/* BOTTOM: EDITORIAL STATS & SCROLL INDICATOR */}
        <div className="w-full flex flex-col items-center space-y-2 z-20">
          <Stats statsContainerRef={statsRef} />
          <ScrollIndicator ref={indicatorRef} />
        </div>
      </div>
    </section>
  );
}
