import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

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

  const togglePlayback = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const baseUrl = import.meta.env.BASE_URL || '/';
  const videoSrc = `${baseUrl}assets/videos/hero-background.mp4`.replace(/\/\//g, '/');
  const posterSrc = `${baseUrl}assets/videos/hero-background.jpg`.replace(/\/\//g, '/');

  // Parallax transform calculation: subtle downward drift as user scrolls
  const parallaxOffset = scrollY * 0.22;
  const fadeOpacity = Math.max(0, 1 - scrollY / 900);

  const isDark = mode === 'dark';

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      style={{ opacity: fadeOpacity }}
      aria-hidden="true"
    >
      {/* Base Ground */}
      <div
        className={`absolute inset-0 pointer-events-none -z-10 ${
          isDark ? 'bg-[#111111]' : 'bg-white'
        }`}
      />

      {/* 1. Underlying Video Container with Parallax Transform */}
      <div
        className="w-full h-full relative will-change-transform"
        style={{
          transform: `translate3d(0, ${parallaxOffset}px, 0) scale(1.04)`,
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
          poster={posterSrc}
          onLoadedData={() => setIsLoaded(true)}
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
          <source src={videoSrc} type="video/mp4" />
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
                'radial-gradient(ellipse at 50% 48%, rgba(17, 17, 17, 0.72) 0%, rgba(17, 17, 17, 0.45) 50%, rgba(17, 17, 17, 0.92) 100%)',
            }}
          />

          {/* Top Navbar blend and bottom section melt into #111111 */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(17, 17, 17, 0.92) 0%, rgba(17, 17, 17, 0.35) 24%, rgba(17, 17, 17, 0.20) 65%, rgba(17, 17, 17, 0.95) 94%, #111111 100%)',
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

      {/* 3. Subtle Play/Pause micro-control for user agency */}
      <div className="absolute bottom-4 right-4 z-20 pointer-events-auto">
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-sans transition-all duration-200 border ${
            isDark
              ? 'bg-[#111111]/70 hover:bg-[#111111] text-white/70 hover:text-white border-white/10'
              : 'bg-white/80 hover:bg-white text-[#111111]/70 hover:text-[#111111] border-[#111111]/10'
          } backdrop-blur-sm shadow-sm cursor-pointer`}
        >
          {isPlaying ? (
            <>
              <Pause className="w-3 h-3" />
              <span className="hidden sm:inline">Pause Video</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3" />
              <span className="hidden sm:inline">Play Video</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
