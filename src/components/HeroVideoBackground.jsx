import React, { useRef, useState, useEffect } from 'react';

/**
 * HeroVideoBackground
 *
 * Cinematic Background Video for Citepoint Hero Section:
 * - Autoplaying, looping, muted, playsinline HTML5 video
 * - High-resolution poster fallback for instant first frame
 * - Multi-layer champagne alabaster atmospheric blend ensuring 100% text contrast & legibility
 * - Smooth scroll-driven parallax translation & fade
 * - Respects prefers-reduced-motion & tab visibility
 * - Elegant micro-control for user agency (Play/Pause toggle with live indicator)
 */

export default function HeroVideoBackground() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || window.pageYOffset || 0);
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


  // Parallax transform calculation: subtle downward drift as user scrolls
  const parallaxOffset = scrollY * 0.22;
  const fadeOpacity = Math.max(0, 1 - scrollY / 900);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 bg-[#000000]"
      style={{ opacity: fadeOpacity }}
      aria-hidden="true"
    >
      {/* Solid Opaque Base Ground: Pitch Black */}
      <div className="absolute inset-0 bg-[#000000] pointer-events-none -z-10" />

      {/* 1. Underlying Video Container with Parallax Transform */}
      <div
        className="w-full h-full relative will-change-transform"
        style={{
          transform: `translate3d(0, ${parallaxOffset}px, 0) scale(1.05)`,
          transition: 'transform 0.1s linear',
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/assets/videos/hero-background.jpg"
          onLoadedData={() => setIsLoaded(true)}
          className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${
            isLoaded ? 'opacity-85' : 'opacity-65'
          }`}
          style={{
            filter: 'contrast(1.12) brightness(0.95) saturate(1.15)',
          }}
        >
          <source src="/assets/videos/hero-background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. Multi-Stage Atmospheric Formium Deep Black & Crimson Gradient Overlays */}
      {/* Central soft vignette for guaranteed text contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 45%, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.35) 55%, rgba(0, 0, 0, 0.88) 100%)',
        }}
      />

      {/* Top Navbar blend and bottom section melt into #000000 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.30) 25%, rgba(0, 0, 0, 0.20) 60%, rgba(0, 0, 0, 0.98) 95%, #000000 100%)',
        }}
      />

      {/* Subtle Formium crimson luminous sheen accent */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-screen opacity-25"
        style={{
          background: 'linear-gradient(135deg, rgba(230, 0, 35, 0.3) 0%, transparent 60%, rgba(230, 0, 35, 0.15) 100%)',
        }}
      />
    </div>
  );
}
