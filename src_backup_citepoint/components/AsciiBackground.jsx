import React, { useEffect, useRef } from 'react';

/**
 * AsciiBackground
 *
 * Sitewide procedural animated ASCII background layer:
 * - Fixed full-viewport layer behind all page content (z-0, pointer-events-none, user-select-none)
 * - 3 organic drifting blob sources driven by independent sine/cosine harmonics and phases
 * - Distance field calculation: sum(max(0, 1 - dist / radius)), clamped to [0, 1]
 * - Character density ramp: " .:-=+*#%@" (10 characters: sparse to dense)
 * - Coarse grid density relative to viewport size to minimize compute overhead
 * - 100ms interval loop (~10fps, slow ambient drift, not twitchy)
 * - Page Visibility API: Pauses animation loop when tab is hidden (document.hidden)
 * - Reduced Motion: Skips animation loop entirely if prefers-reduced-motion: reduce is active (renders single static frame)
 * - Low-contrast muted gold accent (#D4A555) at ~0.08 opacity against #070A0E canvas
 */

const DENSITY_RAMP = " .:-=+*#%@";
const TICK_INTERVAL = 100; // ~10fps ambient cadence
const CHAR_WIDTH = 14; // pixels per column (coarse grid)
const CHAR_HEIGHT = 22; // pixels per row

export default function AsciiBackground() {
  const preRef = useRef(null);
  const animTimerRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const computeDimensions = () => {
      const width = window.innerWidth || document.documentElement.clientWidth || 1200;
      const height = window.innerHeight || document.documentElement.clientHeight || 800;
      const isMobile = width < 768;
      const charW = isMobile ? 22 : CHAR_WIDTH;
      const charH = isMobile ? 32 : CHAR_HEIGHT;
      const cols = Math.max(16, Math.ceil(width / charW));
      const rows = Math.max(10, Math.ceil(height / charH));
      return { cols, rows, width, height, charW, charH, isMobile };
    };

    let dims = computeDimensions();
    let { cols, rows, charW, charH, isMobile } = dims;

    const renderFrame = (t) => {
      if (!preRef.current) return;

      // Update style dynamically if mobile state changed
      if (preRef.current.style.fontSize !== (isMobile ? '16px' : '13px')) {
        preRef.current.style.fontSize = isMobile ? '16px' : '13px';
        preRef.current.style.lineHeight = isMobile ? '32px' : '22px';
        preRef.current.style.letterSpacing = isMobile ? '0.24em' : '0.18em';
      }

      // Aspect ratio correction so blobs stay circular regardless of screen aspect & font dimensions
      const aspect = (cols * charW) / (rows * charH);

      // 3 drifting blob metaball sources with distinct frequencies, phases, and radii
      const b1 = {
        x: 0.5 + 0.30 * Math.sin(t * 0.45),
        y: 0.5 + 0.25 * Math.cos(t * 0.38 + 0.5),
        r: 0.48 + 0.05 * Math.sin(t * 0.2),
      };
      const b2 = {
        x: 0.5 + 0.34 * Math.cos(t * 0.35 + 1.8),
        y: 0.5 + 0.28 * Math.sin(t * 0.48 + 2.2),
        r: 0.42 + 0.06 * Math.cos(t * 0.25),
      };
      const b3 = {
        x: 0.5 + 0.26 * Math.sin(t * 0.58 + 3.7),
        y: 0.5 + 0.24 * Math.cos(t * 0.42 + 1.2),
        r: 0.36 + 0.04 * Math.sin(t * 0.32),
      };

      const rampLen = DENSITY_RAMP.length;
      let output = '';

      for (let y = 0; y < rows; y++) {
        const ny = y / rows;
        let rowStr = '';
        for (let x = 0; x < cols; x++) {
          const nx = x / cols;

          // Blob 1 contribution
          const dx1 = (nx - b1.x) * aspect;
          const dy1 = ny - b1.y;
          const d1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
          const c1 = Math.max(0, 1 - d1 / b1.r);

          // Blob 2 contribution
          const dx2 = (nx - b2.x) * aspect;
          const dy2 = ny - b2.y;
          const d2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          const c2 = Math.max(0, 1 - d2 / b2.r);

          // Blob 3 contribution
          const dx3 = (nx - b3.x) * aspect;
          const dy3 = ny - b3.y;
          const d3 = Math.sqrt(dx3 * dx3 + dy3 * dy3);
          const c3 = Math.max(0, 1 - d3 / b3.r);

          // Sum and clamp to [0, 1]
          const sum = Math.min(1, Math.max(0, c1 + c2 + c3));

          // Map to density ramp character
          const idx = Math.min(rampLen - 1, Math.floor(sum * rampLen));
          rowStr += DENSITY_RAMP[idx];
        }
        output += rowStr + '\n';
      }

      preRef.current.textContent = output;
    };

    const tick = () => {
      timeRef.current += 0.035;
      renderFrame(timeRef.current);
    };

    const startLoop = () => {
      if (animTimerRef.current) return;
      animTimerRef.current = setInterval(tick, TICK_INTERVAL);
    };

    const stopLoop = () => {
      if (animTimerRef.current) {
        clearInterval(animTimerRef.current);
        animTimerRef.current = null;
      }
    };

    // If user prefers reduced motion, render single static frame and never start loop
    if (motionQuery.matches) {
      renderFrame(1.2);
    } else {
      renderFrame(0);
      startLoop();
    }

    // Page Visibility API: Pause animation loop when tab is hidden
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopLoop();
      } else {
        if (!motionQuery.matches) {
          startLoop();
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Reduced motion preference change listener
    const handleMotionQueryChange = (e) => {
      if (e.matches) {
        stopLoop();
        renderFrame(1.2);
      } else {
        if (!document.hidden) {
          startLoop();
        }
      }
    };
    motionQuery.addEventListener('change', handleMotionQueryChange);

    // Resize listener with debounce to update grid dimensions
    let resizeTimeout = null;
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const newDims = computeDimensions();
        cols = newDims.cols;
        rows = newDims.rows;
        charW = newDims.charW;
        charH = newDims.charH;
        isMobile = newDims.isMobile;
        renderFrame(timeRef.current);
      }, 150);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      stopLoop();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      motionQuery.removeEventListener('change', handleMotionQueryChange);
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout) clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <pre
        ref={preRef}
        className="font-mono text-brand-gold w-full h-full m-0 p-0 overflow-hidden leading-none select-none"
        style={{
          opacity: 0.08,
          fontSize: '13px',
          lineHeight: '22px',
          letterSpacing: '0.18em',
        }}
      />
    </div>
  );
}
