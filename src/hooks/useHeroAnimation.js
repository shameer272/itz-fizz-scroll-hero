import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook encapsulating the complete GSAP initial entrance
 * and responsive scroll-driven choreography for the Hero experience.
 */
export default function useHeroAnimation({
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
  preloaderDone = true,
}) {
  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      // ----------------------------------------------------
      // 1. INITIAL LOAD CHOREOGRAPHY
      // ----------------------------------------------------
      if (!prefersReducedMotion) {
        const introTl = gsap.timeline({
          paused: !preloaderDone,
          defaults: { ease: 'power3.out' },
        });

        // 1. Background atmospheric glow
        if (glowRef?.current) {
          introTl.fromTo(
            glowRef.current,
            { opacity: 0, scale: 0.7 },
            { opacity: 0.8, scale: 1, duration: 1.2 }
          );
        }

        // 2. Eyebrow badge (● THE FUTURE MOVES WITH YOU)
        if (eyebrowRef?.current) {
          introTl.fromTo(
            eyebrowRef.current,
            { opacity: 0, y: 15, filter: 'blur(6px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 },
            '-=0.9'
          );
        }

        // 3. Main Headline: W E L C O M E
        const line1Chars = headlineLine1Ref?.current?.querySelectorAll('.char-unit');
        if (line1Chars && line1Chars.length > 0) {
          introTl.fromTo(
            line1Chars,
            { opacity: 0, y: 50, filter: 'blur(10px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.95, stagger: 0.03 },
            '-=0.6'
          );
        }

        // 4. Secondary Line: I T Z   F I Z Z
        const line2Chars = headlineLine2Ref?.current?.querySelectorAll('.char-unit');
        if (line2Chars && line2Chars.length > 0) {
          introTl.fromTo(
            line2Chars,
            { opacity: 0, y: 40, filter: 'blur(8px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.85, stagger: 0.025 },
            '-=0.7'
          );
        }

        // 5. AI Intelligence Core (translucent shell + energy core)
        if (aiCoreRef?.current) {
          introTl.fromTo(
            aiCoreRef.current,
            { opacity: 0, scale: 0.8, y: 40, filter: 'blur(10px)' },
            { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)', duration: 1.3, ease: 'power3.out' },
            '-=0.8'
          );
        }

        // Orbit rings & ribbons expansion
        if (orbitRingsRef?.current) {
          introTl.fromTo(
            orbitRingsRef.current,
            { opacity: 0, scale: 0.6, rotate: -20 },
            { opacity: 1, scale: 1, rotate: 0, duration: 1.2 },
            '-=1.0'
          );
        }

        // 6. Statistics sequential reveal
        const statItems = statsRef?.current?.querySelectorAll('.stat-item');
        if (statItems && statItems.length > 0) {
          introTl.fromTo(
            statItems,
            { opacity: 0, y: 20, filter: 'blur(6px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, stagger: 0.12 },
            '-=0.7'
          );
        }

        // 7. Scroll indicator
        if (indicatorRef?.current) {
          introTl.fromTo(
            indicatorRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.6 },
            '-=0.4'
          );
        }

        // Technical annotations
        if (annotationsRef?.current) {
          introTl.fromTo(
            annotationsRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.8 },
            '-=0.5'
          );
        }

        // Subtle idle breathing pulse
        if (aiCoreRef?.current) {
          gsap.to(aiCoreRef.current, {
            y: -8,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 1.5,
          });
        }

        if (preloaderDone) {
          introTl.play();
        }
      } else {
        // Fallback for prefers-reduced-motion
        gsap.set(
          [
            eyebrowRef?.current,
            headlineLine1Ref?.current,
            headlineLine2Ref?.current,
            aiCoreRef?.current,
            statsRef?.current,
            indicatorRef?.current,
          ].filter(Boolean),
          { opacity: 1, y: 0, scale: 1, filter: 'none' }
        );
      }

      // ----------------------------------------------------
      // 2. RESPONSIVE PINNED SCROLL CHOREOGRAPHY (gsap.matchMedia)
      // ----------------------------------------------------
      if (!prefersReducedMotion && heroRef?.current) {
        const mm = gsap.matchMedia();

        // DESKTOP DISPLAY (>= 1024px)
        mm.add('(min-width: 1024px)', () => {
          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: '+=160%',
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // 0% -> 20%:
          // Headline moves upward, AI core begins scaling, subtle parallax starts, indicator fades
          if (indicatorRef?.current) {
            scrollTl.to(indicatorRef.current, { opacity: 0, y: 15, duration: 0.2, ease: 'none' }, 0);
          }

          if (headlineLine1Ref?.current && headlineLine2Ref?.current) {
            scrollTl.to(
              [headlineLine1Ref.current, headlineLine2Ref.current, eyebrowRef?.current].filter(Boolean),
              { y: -45, opacity: 0.5, filter: 'blur(3px)', duration: 0.2, ease: 'power1.out' },
              0
            );
          }

          if (aiCoreRef?.current) {
            scrollTl.to(
              aiCoreRef.current,
              { scale: 1.08, y: 15, duration: 0.2, ease: 'power1.out' },
              0
            );
          }

          if (orbitRingsRef?.current) {
            scrollTl.to(
              orbitRingsRef.current,
              { scale: 1.12, rotate: 25, duration: 0.2, ease: 'none' },
              0
            );
          }

          // 20% -> 40%:
          // Headline fades, AI core becomes dominant, glow expands, orbit rings move
          if (headlineLine1Ref?.current && headlineLine2Ref?.current) {
            scrollTl.to(
              [headlineLine1Ref.current, headlineLine2Ref.current, eyebrowRef?.current].filter(Boolean),
              { y: -90, opacity: 0.1, filter: 'blur(8px)', duration: 0.2, ease: 'none' },
              0.2
            );
          }

          if (aiCoreRef?.current) {
            scrollTl.to(
              aiCoreRef.current,
              { scale: 1.2, y: 35, duration: 0.2, ease: 'power1.inOut' },
              0.2
            );
          }

          if (glowRef?.current) {
            scrollTl.to(
              glowRef.current,
              { scale: 1.45, opacity: 0.95, duration: 0.2, ease: 'power1.inOut' },
              0.2
            );
          }

          if (dataRibbonsRef?.current) {
            scrollTl.to(
              dataRibbonsRef.current,
              { scale: 1.25, rotate: -40, opacity: 0.9, duration: 0.2, ease: 'none' },
              0.2
            );
          }

          if (statsRef?.current) {
            scrollTl.to(
              statsRef.current,
              { y: 30, opacity: 0.2, filter: 'blur(4px)', duration: 0.2, ease: 'none' },
              0.2
            );
          }

          // 40% -> 60%:
          // AI core moves upward, slight x movement, very subtle rotation, background shifts
          if (aiCoreRef?.current) {
            scrollTl.to(
              aiCoreRef.current,
              {
                scale: 1.28,
                x: 18,
                y: -15,
                rotate: 5,
                duration: 0.2,
                ease: 'power1.inOut',
              },
              0.4
            );
          }

          if (orbitRingsRef?.current) {
            scrollTl.to(
              orbitRingsRef.current,
              { scale: 1.35, rotate: 65, duration: 0.2, ease: 'none' },
              0.4
            );
          }

          // 60% -> 80%:
          // Headline disappears, statistics fade, AI core transitions toward next section
          if (headlineLine1Ref?.current && headlineLine2Ref?.current) {
            scrollTl.to(
              [headlineLine1Ref.current, headlineLine2Ref.current, eyebrowRef?.current].filter(Boolean),
              { opacity: 0, duration: 0.2, ease: 'none' },
              0.6
            );
          }

          if (statsRef?.current) {
            scrollTl.to(
              statsRef.current,
              { opacity: 0, y: 50, filter: 'blur(8px)', duration: 0.2, ease: 'none' },
              0.6
            );
          }

          if (aiCoreRef?.current) {
            scrollTl.to(
              aiCoreRef.current,
              {
                scale: 1.22,
                x: 0,
                y: 85,
                rotate: 2,
                duration: 0.2,
                ease: 'power1.inOut',
              },
              0.6
            );
          }

          // 80% -> 100%:
          // Smooth transition into Section 2, unpins naturally
          if (aiCoreRef?.current) {
            scrollTl.to(
              aiCoreRef.current,
              {
                scale: 1.1,
                y: 175,
                rotate: 0,
                opacity: 0.85,
                duration: 0.2,
                ease: 'power1.out',
              },
              0.8
            );
          }
        });

        // TABLET & MOBILE (< 1024px)
        mm.add('(max-width: 1023px)', () => {
          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: '+=130%',
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          if (indicatorRef?.current) {
            scrollTl.to(indicatorRef.current, { opacity: 0, duration: 0.15 }, 0);
          }

          if (headlineLine1Ref?.current) {
            scrollTl.to(
              [headlineLine1Ref.current, headlineLine2Ref?.current, eyebrowRef?.current].filter(Boolean),
              { y: -40, opacity: 0, filter: 'blur(6px)', duration: 0.3 },
              0
            );
          }

          if (statsRef?.current) {
            scrollTl.to(statsRef.current, { y: 25, opacity: 0, duration: 0.25 }, 0.05);
          }

          if (aiCoreRef?.current) {
            scrollTl.to(
              aiCoreRef.current,
              { scale: 1.12, y: 35, duration: 0.5, ease: 'power1.inOut' },
              0.1
            );
            scrollTl.to(
              aiCoreRef.current,
              { scale: 1.04, y: 80, duration: 0.4, ease: 'power1.out' },
              0.6
            );
          }
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, [
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
  ]);
}
