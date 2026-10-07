import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const barRef = useRef(null);
  const [removed, setRemoved] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (removed) {
      if (onComplete) onComplete();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setRemoved(true);
        if (onComplete) onComplete();
      }
    });

    // Swift, crisp editorial intro (under 800ms)
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 15, filter: 'blur(6px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.35, ease: 'power2.out' }
    )
    .to(barRef.current, { scaleX: 1, duration: 0.3, ease: 'power1.inOut' }, '-=0.15')
    .to(containerRef.current, {
      yPercent: -100,
      duration: 0.45,
      ease: 'power3.inOut',
    }, '+=0.05');

    return () => tl.kill();
  }, [onComplete, removed]);

  if (removed) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030407] text-white px-6 select-none"
    >
      <div className="flex flex-col items-center space-y-4">
        <div
          ref={textRef}
          className="font-mono text-xs sm:text-sm tracking-[0.35em] text-slate-300 uppercase flex items-center space-x-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          <span>ITZ / DIGITAL EXPERIENCE</span>
        </div>
        <div className="w-36 h-[1.5px] bg-white/10 rounded-full overflow-hidden">
          <div
            ref={barRef}
            className="w-full h-full bg-gradient-to-r from-cyan-400 to-indigo-400 origin-left scale-x-0"
          />
        </div>
      </div>
    </div>
  );
}
