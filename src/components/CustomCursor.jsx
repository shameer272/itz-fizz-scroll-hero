import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Check if device supports fine pointer (mouse)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    document.documentElement.classList.add('has-custom-cursor');

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const xDotSetter = gsap.quickSetter(dot, 'x', 'px');
    const yDotSetter = gsap.quickSetter(dot, 'y', 'px');
    const xRingSetter = gsap.quickTo(ring, 'x', { duration: 0.22, ease: 'power2.out' });
    const yRingSetter = gsap.quickTo(ring, 'y', { duration: 0.22, ease: 'power2.out' });

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      xDotSetter(e.clientX);
      yDotSetter(e.clientY);
      xRingSetter(e.clientX);
      yRingSetter(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor-hover]')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleOver);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleOver);
    };
  }, [isVisible]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Precision Core Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-cyan-400 transition-opacity duration-200 pointer-events-none ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {/* Magnetic Outer Ambient Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-4 -mt-4 w-8 h-8 rounded-full border border-cyan-400/40 pointer-events-none transition-all duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isHovered
            ? 'scale-150 border-cyan-300 bg-cyan-400/10'
            : 'scale-100'
        }`}
      />
    </div>
  );
}
