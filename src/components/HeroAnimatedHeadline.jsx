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
  const canvasRef = useRef(null);
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

  // High-performance canvas particle field around the headline
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId;
    let width = 0;
    let height = 0;

    const resize = () => {
      if (!containerRef.current || !canvas) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(rect.width + 100, 320);
      height = Math.max(rect.height + 60, 100);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Particle pool: bokeh circles + starlight sparks in cyan, amber-gold, and diamond white
    const PARTICLE_COUNT = 45;
    const particles = [];

    const colors = [
      { r: 94,  g: 106, b: 210, isBokeh: true },   // Linear Lavender Bokeh
      { r: 130, g: 143, b: 255, isBokeh: true },   // Light Lavender Bokeh
      { r: 255, g: 255, b: 255, isBokeh: false },  // Diamond White Point
      { r: 94,  g: 106, b: 210, isBokeh: false },  // Lavender Point Star
      { r: 255, g: 255, b: 255, isBokeh: true },   // Soft White Halo Bokeh
      { r: 130, g: 143, b: 255, isBokeh: false },  // Soft Purple Point Star
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const colorDef = colors[i % colors.length];
      const isBokeh = colorDef.isBokeh && Math.random() > 0.4;
      particles.push({
        x: Math.random() * (width || 800),
        y: Math.random() * (height || 160),
        radius: isBokeh ? Math.random() * 4.5 + 2.5 : Math.random() * 1.6 + 0.8,
        isBokeh,
        color: colorDef,
        baseAlpha: isBokeh ? Math.random() * 0.4 + 0.2 : Math.random() * 0.65 + 0.3,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -Math.random() * 0.3 - 0.1, // Soft upward drift
        phase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Render and update each particle
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Organic floating motion with gentle sinusoidal sway
        p.y += p.vy;
        p.x += p.vx + Math.sin(time + p.phase) * 0.2;

        // Wrap around boundaries seamlessly
        if (p.y < -15) p.y = height + 15;
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;

        // Interactive mouse repulsion
        if (mousePos.active) {
          const dx = p.x - (mousePos.x + 50);
          const dy = p.y - (mousePos.y + 30);
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 110;

          if (dist < maxDist && dist > 0.1) {
            const force = (1 - dist / maxDist) * 1.8;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }

        // Breathing opacity
        const currentAlpha = p.baseAlpha * (0.7 + 0.3 * Math.sin(time * 2.0 + p.phase));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (p.isBokeh) {
          // Soft radial glow for bokeh orbs
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2);
          grad.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${currentAlpha * 0.8})`);
          grad.addColorStop(0.5, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${currentAlpha * 0.25})`);
          grad.addColorStop(1, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0)`);
          ctx.fillStyle = grad;
          ctx.fill();
        } else {
          // Sharp diamond core with soft sparkle aura
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${currentAlpha})`;
          ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.7)`;
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // Connecting neural citation lines between close particles
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 45) {
            const lineAlpha = (1 - dist / 45) * 0.14;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 49, 49, ${lineAlpha})`;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [mousePos, reducedMotion]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative max-w-4xl mx-auto select-none cursor-default"
      aria-label="Be the brand AI mentions first."
    >
      {/* 1. Interactive Ambient Radial Spotlight following cursor */}
      {mousePos.active && !reducedMotion && (
        <div
          className="absolute pointer-events-none rounded-full blur-2xl transition-opacity duration-300 opacity-60 z-0"
          style={{
            left: `${mousePos.x - 100}px`,
            top: `${mousePos.y - 100}px`,
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(94, 106, 210, 0.25) 0%, rgba(130, 143, 255, 0.15) 50%, transparent 75%)',
          }}
          aria-hidden="true"
        />
      )}

      {/* 2. Floating Constellation & Bokeh Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute -top-6 -left-12 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* 3. Main Headline Container */}
      <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px] font-sans font-semibold text-[#f7f8f8] leading-[1.12] sm:leading-[1.08] tracking-[-0.04em] whitespace-normal lg:whitespace-nowrap">
        {/* Prefix: "Be the brand AI" with natural word spacing */}
        {PREFIX_WORDS.map((word, idx) => (
          <motion.span
            key={word}
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 22, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.65, delay: 0.06 * idx, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative text-[#f7f8f8] mr-[0.28em]"
          >
            {word}
          </motion.span>
        ))}

        {/* Dynamic Rotating Verb Container */}
        <motion.span
          layout
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block relative text-left"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={DYNAMIC_VERBS[verbIndex]}
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
              transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#828fff] via-[#5e6ad2] to-[#c4cbff] drop-shadow-[0_0_24px_rgba(94,106,210,0.4)]"
            >
              {DYNAMIC_VERBS[verbIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.span>

        {/* Suffix: "first." */}
        <motion.span
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 22, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block relative text-[#f7f8f8] ml-[0.28em]"
        >
          first.
          {/* Starlight diamond glint on the period of 'first.' */}
          <span
            className="absolute -right-2.5 top-1 pointer-events-none"
            aria-hidden="true"
          >
            <span className="absolute -inset-1 rounded-full bg-[#828fff] animate-ping opacity-35" />
            <span className="relative block w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#828fff] animate-starlight-dot" />
          </span>
        </motion.span>
      </h1>
    </div>
  );
}
