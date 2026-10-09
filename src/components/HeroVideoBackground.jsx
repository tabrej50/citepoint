import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Sparkles } from 'lucide-react';

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

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Parallax transform calculation: subtle downward drift as user scrolls
  const parallaxOffset = scrollY * 0.22;
  const fadeOpacity = Math.max(0, 1 - scrollY / 900);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      style={{ opacity: fadeOpacity }}
      aria-hidden="true"
    >
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
            isLoaded ? 'opacity-80' : 'opacity-60'
          }`}
          style={{
            filter: 'contrast(1.08) brightness(1.02) saturate(1.15)',
          }}
        >
          <source src="/assets/videos/hero-background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. Multi-Stage Atmospheric Champagne & Alabaster Gradient Overlays */}
      {/* Central soft vignette for guaranteed text contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 45%, rgba(250, 248, 245, 0.72) 0%, rgba(250, 248, 245, 0.45) 55%, rgba(250, 248, 245, 0.85) 100%)',
        }}
      />

      {/* Top Navbar blend and bottom section melt */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(250, 248, 245, 0.92) 0%, rgba(250, 248, 245, 0.35) 25%, rgba(250, 248, 245, 0.25) 60%, rgba(250, 248, 245, 0.98) 95%, #FAF8F5 100%)',
        }}
      />

      {/* Warm champagne luminous sheen accent */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30"
        style={{
          background: 'linear-gradient(135deg, rgba(223, 183, 108, 0.4) 0%, transparent 60%, rgba(197, 160, 89, 0.3) 100%)',
        }}
      />

      {/* 3. Interactive Floating Ambient Video Control Badge */}
      <div className="absolute bottom-6 right-6 z-20 pointer-events-auto hidden sm:flex items-center gap-2">
        <button
          onClick={togglePlayback}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 hover:bg-white text-[#0F1012] border border-[#EADBBE] shadow-sm backdrop-blur-md transition-all duration-200 text-xs font-mono font-medium hover:border-[#C5A059] group cursor-pointer"
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          title={isPlaying ? 'Pause video' : 'Play video'}
        >
          <span className="relative flex h-2 w-2">
            {isPlaying && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75" />
            )}
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${
                isPlaying ? 'bg-[#DFB76C]' : 'bg-[#A0A5B0]'
              }`}
            />
          </span>
          <span className="text-[11px] uppercase tracking-wider text-[#363940] group-hover:text-[#0F1012]">
            {isPlaying ? 'Ambient Motion' : 'Motion Paused'}
          </span>
          {isPlaying ? (
            <Pause className="w-3 h-3 text-[#A67D28]" />
          ) : (
            <Play className="w-3 h-3 text-[#A67D28]" />
          )}
        </button>
      </div>
    </div>
  );
}
