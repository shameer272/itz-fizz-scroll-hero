import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const featureData = [
  {
    num: '01',
    title: 'MOTION',
    tagline: 'Interfaces that respond naturally.',
    desc: 'Interpolated physics-based transformations that mirror physical inertia and human expectation. Every interaction feels physically connected.',
    metrics: '0.0ms JANK // 60FPS WEBKIT & GECKO',
  },
  {
    num: '02',
    title: 'INTELLIGENCE',
    tagline: 'Experiences designed around people.',
    desc: 'Spatial layouts adapting intuitively to scroll velocity and viewport constraints, prioritizing visual focus without demanding conscious effort.',
    metrics: 'ZERO DISTRACTION // ACCESSIBLE ACCELERATION',
  },
  {
    num: '03',
    title: 'IMPACT',
    tagline: 'Technology transformed into measurable experiences.',
    desc: 'Engineered for conversion and brand authority. Where design fidelity and engineering rigor converge into unforgettable digital milestones.',
    metrics: '99.4% RETENTION // AWWWARDS BENCHMARK',
  },
];

export default function FeatureSection() {
  const sectionRef = useRef(null);
  const portalGlowRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const manifestoTextRef = useRef(null);
  const featuresListRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Portal glow expands as section scrolls into view
      if (portalGlowRef.current) {
        gsap.fromTo(
          portalGlowRef.current,
          { opacity: 0.15, scale: 0.8 },
          {
            opacity: 0.65,
            scale: 1.15,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'top 30%',
              scrub: 1,
            },
          }
        );
      }

      // Three-line manifesto reveal
      const lines = [line1Ref.current, line2Ref.current, line3Ref.current].filter(Boolean);
      if (lines.length > 0) {
        gsap.fromTo(
          lines,
          { opacity: 0, y: 35, filter: 'blur(8px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: lines[0],
              start: 'top 85%',
            },
          }
        );
      }

      if (manifestoTextRef.current) {
        gsap.fromTo(
          manifestoTextRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: manifestoTextRef.current,
              start: 'top 88%',
            },
          }
        );
      }

      // Feature items reveal
      const items = featuresListRef.current?.querySelectorAll('.feature-row');
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.18,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: featuresListRef.current,
              start: 'top 82%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative w-full py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#040508] border-t border-white/[0.08] overflow-hidden"
      aria-label="The Future Moves With You"
    >
      {/* Seamless Transition Aperture Glow */}
      <div
        ref={portalGlowRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] rounded-full bg-gradient-to-b from-cyan-500/18 via-purple-600/10 to-transparent blur-3xl pointer-events-none -z-10"
      />

      {/* Subtle connecting vertical guide */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-cyan-400/60 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Manifesto Heading */}
        <div className="mb-20 sm:mb-28">
          <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-mono tracking-[0.3em] text-cyan-400 uppercase mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>SECTION 02 // MANIFESTO</span>
          </div>

          {/* Three-line stacked headline: THE FUTURE / MOVES WITH / YOU. */}
          <div className="space-y-0 max-w-5xl">
            <h2
              ref={line1Ref}
              className="font-display font-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.98]"
            >
              THE FUTURE
            </h2>
            <h2
              ref={line2Ref}
              className="font-display font-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.98]"
            >
              MOVES WITH
            </h2>
            <h2
              ref={line3Ref}
              className="font-display font-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-slate-400 tracking-tight leading-[0.98]"
            >
              YOU.
            </h2>
          </div>

          <p
            ref={manifestoTextRef}
            className="mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl text-slate-400 font-sans font-light leading-relaxed max-w-3xl"
          >
            Digital experiences should not simply respond to interaction.{' '}
            <span className="text-white font-normal">
              They should feel connected to it.
            </span>
          </p>
        </div>

        {/* 3 Editorial Feature Areas */}
        <div id="features" ref={featuresListRef} className="space-y-8 sm:space-y-14">
          {featureData.map((item, index) => (
            <div
              key={index}
              className="feature-row group relative pt-6 sm:pt-8 pb-8 sm:pb-12 border-t border-white/[0.1] hover:border-cyan-400/40 transition-colors duration-500"
              data-cursor-hover="true"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-baseline">
                {/* Index Number */}
                <div className="lg:col-span-2">
                  <span className="font-mono text-xs sm:text-sm text-cyan-400 tracking-widest">
                    {item.num}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="lg:col-span-5 space-y-1.5">
                  <h3 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-white group-hover:text-cyan-200 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-slate-400 tracking-wider uppercase">
                    {item.tagline}
                  </p>
                </div>

                {/* Description & Metrics */}
                <div className="lg:col-span-5 space-y-3 sm:space-y-4">
                  <p className="font-sans text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                  <div className="flex items-center space-x-2 text-[10px] font-mono tracking-widest text-slate-500 uppercase pt-1">
                    <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400/60" />
                    <span>{item.metrics}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Architecture Callout */}
        <div className="mt-20 pt-10 border-t border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="font-mono text-xs text-slate-500 tracking-widest uppercase">
            <span>GSAP SCROLLTRIGGER ARCHITECTURE // REACT 19</span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 font-mono text-[11px] text-slate-400">
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.02]">
              PIN: TRUE
            </span>
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.02]">
              SCRUB: 1
            </span>
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.02]">
              MATCHMEDIA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
