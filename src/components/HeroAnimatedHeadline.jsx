import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

/**
 * HeroAnimatedHeadline
 * 
 * Elegant, luxury animated headline for Citepoint hero:
 * "Be the brand AI [mentions / cites / recommends / chooses] first."
 * 
 * Features:
 * - Dynamic rotating verbs ('mentions', 'cites', 'recommends', 'chooses')
 * - Perfect, locked word spacing (guaranteed margin between 'AI', verb, and 'first.')
 * - Smooth vertical slide & blur-dissolve transitions
 * - Bioluminescent cyan glow aura
 * - Starlight sparkle on the period of 'first.'
 * - Interactive particle canvas with mouse repulsion
 */

const PREFIX_WORDS = ['Be', 'the', 'brand', 'AI'];
const DYNAMIC_VERBS = ['mentions', 'cites', 'recommends', 'chooses'];

export default function HeroAnimatedHeadline() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000, active: false });
  const [reducedMotion, setReducedMotion] = useState(false);
  const [verbIndex, setVerbIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Rotate dynamic verbs smoothly every 2.8 seconds (pauses on hover)
  useEffect(() => {
    if (reducedMotion || isHovered) return;
    const timer = setInterval(() => {
      setVerbIndex((prev) => (prev + 1) % DYNAMIC_VERBS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [reducedMotion, isHovered]);

  // Track mouse over headline for spotlight and particle physics
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos((prev) => ({ ...prev, active: false }));
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative max-w-4xl mx-auto select-none cursor-default"
      aria-label="Be the brand AI mentions first."
    >

      {/* 3. Main Headline Container */}
      <h1 className="relative z-10 text-[28px] sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] font-sans font-bold text-[#1D1D1F] leading-[1.15] sm:leading-[1.05] tracking-[-0.035em] text-center">
        {/* Line 1: "Be the brand AI" */}
        <span className="block">
          {PREFIX_WORDS.map((word, idx) => (
            <motion.span
              key={word}
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 * idx, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block relative text-[#1D1D1F] mr-[0.26em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </span>

        {/* Line 2: Dynamic Verb + "first." */}
        <span className="block mt-1 sm:mt-1.5 md:mt-2">
          <span className="inline-flex items-baseline justify-center whitespace-nowrap">
            <motion.span
              layout
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block relative text-center"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={DYNAMIC_VERBS[verbIndex]}
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block font-bold text-[#1D1D1F]"
                >
                  {DYNAMIC_VERBS[verbIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.span>

            {/* Suffix: "first." */}
            <motion.span
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block relative text-[#1D1D1F] ml-[0.26em]"
            >
              first.
            </motion.span>
          </span>
        </span>
      </h1>
    </div>
  );
}
