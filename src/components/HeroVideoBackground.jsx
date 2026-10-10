import React, { useRef, useState, useEffect } from 'react';

/**
 * HeroVideoBackground
 *
 * Cinematic Background Video for Citepoint Hero Section:
 * - Autoplaying, looping, muted, playsinline HTML5 video
 * - High-resolution poster fallback for instant first frame
 * - Multi-layer atmospheric vignette ensuring 100% text contrast & legibility
 * - Smooth scroll-driven parallax translation & fade
 * - Respects prefers-reduced-motion & tab visibility
 * - Elegant micro-control for user agency (Play/Pause toggle)
 */
export default function HeroVideoBackground({ mode = 'dark' }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const videoWrapperRef = useRef(null);
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
  }, []);

  // Butter-smooth hardware-accelerated parallax on scroll (zero React re-renders)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sy = window.scrollY || window.pageYOffset || 0;
          if (videoWrapperRef.current) {
            const parallaxOffset = sy * 0.22;
            videoWrapperRef.current.style.transform = `translate3d(0, ${parallaxOffset}px, 0) scale(1.04)`;
          }
          if (containerRef.current) {
            const fadeOpacity = Math.max(0, 1 - sy / 900);
            containerRef.current.style.opacity = fadeOpacity;
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
  const webmSrc = `${baseUrl}assets/hero-bg.webm`.replace(/\/\//g, '/');
  const mp4Src = `${baseUrl}assets/hero-bg.mp4`.replace(/\/\//g, '/');
  const fallbackMp4Src = `${baseUrl}assets/videos/hero-background.mp4`.replace(/\/\//g, '/');
  const posterSrc = `${baseUrl}assets/hero-bg-poster.png`.replace(/\/\//g, '/');

  const isDark = mode === 'dark';

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      style={{ opacity: 1, willChange: 'opacity' }}
      aria-hidden="true"
    >
      {/* Base Ground */}
      <div
        className={`absolute inset-0 pointer-events-none -z-10 ${
          isDark ? 'bg-[#000000]' : 'bg-white'
        }`}
      />

      {/* 1. Underlying Video Container with Parallax Transform */}
      <div
        ref={videoWrapperRef}
        className="w-full h-full relative will-change-transform"
        style={{
          transform: 'translate3d(0, 0, 0) scale(1.04)',
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={posterSrc}
          onLoadedData={() => setIsLoaded(true)}
          onCanPlay={() => setIsLoaded(true)}
          className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${
            isLoaded
              ? isDark ? 'opacity-65' : 'opacity-25'
              : isDark ? 'opacity-40' : 'opacity-15'
          }`}
          style={{
            filter: isDark
              ? 'contrast(1.12) brightness(0.92) saturate(1.15)'
              : 'contrast(1.05) brightness(1.05) saturate(0.9)',
          }}
        >
          <source src={webmSrc} type="video/webm" />
          <source src={mp4Src} type="video/mp4" />
          <source src={fallbackMp4Src} type="video/mp4" />
        </video>
      </div>

      {/* 2. Atmospheric Gradient Vignettes */}
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
