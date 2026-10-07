import React, { forwardRef } from 'react';

const HeroVisual = forwardRef(
  (
    {
      aiCoreRef,
      glowRef,
      orbitRingsRef,
      dataRibbonsRef,
    },
    _ref
  ) => {
    return (
      <div className="relative flex items-center justify-center w-full pointer-events-none select-none z-20 my-auto py-2">
        {/* ========================================================
            LAYER 1: ATMOSPHERIC SOFT GLOW
            ======================================================== */}
        <div
          ref={glowRef}
          className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-cyan-400/[0.13] blur-3xl opacity-80 -z-20 pointer-events-none gpu-layer"
        />
        <div className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-indigo-600/[0.08] blur-2xl opacity-60 -z-20 pointer-events-none gpu-layer" />

        {/* ========================================================
            LAYER 2 & 3: OUTER HOLOGRAPHIC RING & SECONDARY ORBITAL RING
            ======================================================== */}
        <div
          ref={orbitRingsRef}
          className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[440px] md:h-[440px] lg:w-[480px] lg:h-[480px] rounded-full pointer-events-none -z-10 gpu-layer flex items-center justify-center"
        >
          {/* Outer Holographic Ring */}
          <div className="absolute inset-0 rounded-full border border-white/[0.08]">
            {/* Luminous Node */}
            <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00F0FF]" />
          </div>

          {/* Secondary Inclined Orbital Ring */}
          <div className="absolute w-[92%] h-[92%] rounded-full border border-cyan-400/[0.12] [transform:rotateX(68deg)]" />

          {/* Third Delicate Ellipse */}
          <div className="absolute w-[108%] h-[108%] rounded-full border border-white/[0.04] [transform:rotateY(60deg)]" />
        </div>

        {/* ========================================================
            LAYER 4: FLOWING DATA RIBBONS (Curved SVG Data Strands)
            ======================================================== */}
        <div
          ref={dataRibbonsRef}
          className="absolute w-72 h-72 sm:w-88 sm:h-88 md:w-[420px] md:h-[420px] pointer-events-none -z-10 gpu-layer flex items-center justify-center"
        >
          <svg className="w-full h-full opacity-60" viewBox="0 0 400 400" fill="none">
            <path
              d="M 60 200 C 60 120, 140 60, 200 60 C 260 60, 340 120, 340 200 C 340 280, 260 340, 200 340 C 140 340, 60 280, 60 200"
              stroke="url(#ribbon-gradient-1)"
              strokeWidth="1"
              strokeDasharray="4 6"
              className="animate-[spin_45s_linear_infinite]"
              style={{ transformOrigin: 'center' }}
            />
            <path
              d="M 100 200 C 100 145, 145 100, 200 100 C 255 100, 300 145, 300 200 C 300 255, 255 300, 200 300 C 145 300, 100 255, 100 200"
              stroke="url(#ribbon-gradient-2)"
              strokeWidth="0.8"
              className="animate-[spin_30s_linear_infinite_reverse]"
              style={{ transformOrigin: 'center' }}
            />
            <defs>
              <linearGradient id="ribbon-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#E2E8F0" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="ribbon-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* ========================================================
            LAYER 7: TINY CONSTELLATION PARTICLES
            ======================================================== */}
        <div className="absolute inset-0 max-w-sm mx-auto pointer-events-none -z-10">
          <div className="absolute top-[22%] left-8 w-1 h-1 rounded-full bg-cyan-300 opacity-60 animate-pulse" />
          <div className="absolute top-[32%] right-10 w-1 h-1 rounded-full bg-white opacity-40" />
          <div className="absolute bottom-[28%] left-12 w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-50" />
          <div className="absolute bottom-[20%] right-14 w-1 h-1 rounded-full bg-indigo-300 opacity-40 animate-pulse" />
        </div>

        {/* ========================================================
            LAYER 5 & 6 & 8: TRANSLUCENT CORE SHELL + CENTRAL ENERGY CORE + SUBTLE HIGHLIGHTS
            ======================================================== */}
        <div
          ref={aiCoreRef}
          className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[370px] lg:h-[370px] xl:w-[410px] xl:h-[410px] flex items-center justify-center gpu-layer will-change-transform"
        >
          {/* Radial feathered container ensuring zero rectangular image boundaries */}
          <div className="relative w-full h-full flex items-center justify-center [mask-image:radial-gradient(circle_at_50%_50%,black_62%,rgba(0,0,0,0.85)_76%,transparent_96%)] [-webkit-mask-image:radial-gradient(circle_at_50%_50%,black_62%,rgba(0,0,0,0.85)_76%,transparent_96%)]">
            
            {/* The 3D Sculptural Form (Silver/Liquid Glass) */}
            <img
              src="./hero-image.png"
              alt="Futuristic AI Intelligence Core"
              className="w-full h-full object-contain filter drop-shadow-[0_20px_45px_rgba(0,240,255,0.18)] select-none pointer-events-none"
              loading="eager"
              decoding="async"
            />

            {/* Inset Specular Micro Highlight */}
            <div className="absolute top-1/4 left-1/3 w-16 h-16 rounded-full bg-white/10 blur-xl pointer-events-none" />

            {/* Internal Pulsing Micro-Fusion Core Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-cyan-300/30 blur-md pointer-events-none animate-ping" />
          </div>
        </div>

        {/* Technical Annotation directly underneath the core */}
        <div className="absolute inset-x-0 -bottom-3 max-w-xs mx-auto flex items-center justify-between text-[9px] font-mono tracking-[0.25em] text-slate-500/50 uppercase px-6 pointer-events-none">
          <span>CORE // 01</span>
          <span>NEURAL.INTELLIGENCE</span>
        </div>
      </div>
    );
  }
);

HeroVisual.displayName = 'HeroVisual';

export default HeroVisual;
