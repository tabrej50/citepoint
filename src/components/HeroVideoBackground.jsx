import React, { useRef, useState, useEffect } from 'react';

/**
 * HeroVideoBackground
 *
 * Cinematic Background Video for Citepoint Hero Section:
 * - Instant poster image fallback with high fetchPriority (zero black screen on load)
 * - Autoplaying, looping, muted, playsinline HTML5 video
 * - Ultra-smooth crossfade from poster to video once video starts playing
 * - High-performance requestAnimationFrame scroll parallax (zero React re-renders on scroll)
 * - Atmospheric vignettes and gold starlight preserved 100%
 * - Respects prefers-reduced-motion & tab visibility
 */
export default function HeroVideoBackground({ mode = 'dark' }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const videoParallaxRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    const handler = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Butter-smooth hardware-accelerated parallax on scroll (no React state updates)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY || window.pageYOffset || 0;
          if (videoParallaxRef.current) {
            const offset = currentY * 0.22;
            videoParallaxRef.current.style.transform = `translate3d(0, ${offset}px, 0) scale(1.04)`;
          }
          if (containerRef.current) {
            const opacity = Math.max(0, 1 - currentY / 900);
            containerRef.current.style.opacity = opacity;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tab visibility auto-pause/resume
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        if (videoRef.current && isPlaying) videoRef.current.pause();
      } else {
        if (videoRef.current && isPlaying && !reducedMotion) {
          videoRef.current.play().catch(() => {});
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [isPlaying, reducedMotion]);

  const baseUrl = import.meta.env.BASE_URL || '/';
  const videoSrc = `${baseUrl}assets/videos/hero-background.mp4`.replace(/\/\//g, '/');
  const posterSrc = `${baseUrl}assets/videos/hero-background.jpg`.replace(/\/\//g, '/');

  const isDark = mode === 'dark';

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {/* Base Ground */}
      <div
        className={`absolute inset-0 pointer-events-none -z-10 ${
          isDark ? 'bg-[#000000]' : 'bg-white'
        }`}
      />

      {/* 1. Underlying Video & Poster Container with Hardware-Accelerated Parallax */}
      <div
        ref={videoParallaxRef}
        className="w-full h-full relative will-change-transform"
        style={{
          transform: 'translate3d(0, 0, 0) scale(1.04)',
        }}
      >
        {/* Instant High-Resolution Poster Layer (renders on frame 0, zero flash) */}
        <img
          src={posterSrc}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none ${
            isDark ? 'opacity-65' : 'opacity-25'
          }`}
          style={{
            filter: isDark
              ? 'contrast(1.12) brightness(0.92) saturate(1.15)'
              : 'contrast(1.05) brightness(1.05) saturate(0.9)',
          }}
        />

        {/* Cinematic Video Layer (crossfades smoothly over poster once playing) */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={posterSrc}
          onPlaying={() => setIsLoaded(true)}
          onLoadedData={() => setIsLoaded(true)}
          className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
            isLoaded
              ? isDark ? 'opacity-65' : 'opacity-25'
              : 'opacity-0'
          }`}
          style={{
            filter: isDark
              ? 'contrast(1.12) brightness(0.92) saturate(1.15)'
              : 'contrast(1.05) brightness(1.05) saturate(0.9)',
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* 2. Atmospheric Gradient Vignettes (All backgrounds 100% preserved) */}
      {isDark ? (
        <>
          {/* Central radial vignette protecting headline & copy contrast */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 50% 48%, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0.92) 100%)',
            }}
          />

          {/* Top Navbar blend and bottom section melt into #000000 */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.35) 24%, rgba(0, 0, 0, 0.20) 65%, rgba(0, 0, 0, 0.95) 94%, #000000 100%)',
            }}
          />

          {/* Subtle champagne gold starlight warmth */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-screen opacity-15"
            style={{
              background:
                'radial-gradient(ellipse at 50% 20%, rgba(243, 199, 83, 0.25) 0%, transparent 60%)',
            }}
          />
        </>
      ) : (
        <>
          {/* Light mode: Soft white atmospheric blend */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 50% 48%, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.72) 55%, rgba(255, 255, 255, 0.95) 100%)',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.40) 24%, rgba(255, 255, 255, 0.40) 65%, rgba(255, 255, 255, 0.98) 95%, #ffffff 100%)',
            }}
          />
        </>
      )}

    </div>
  );
}
