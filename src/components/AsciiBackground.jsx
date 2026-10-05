import React, { useEffect, useRef } from 'react';

/**
 * AsciiBackground
 *
 * Cinematic procedural animated ASCII background layer:
 * Style: ASCII / monospace terminal with Vercel-like restraint.
 * - Single full-viewport canvas, position: fixed, inset 0, z-index -1
 * - Page background: near-black (#010102) with layered ambient luminescence
 * - Layered ambient lighting: top-center lavender radial illumination & soft drifting glow
 * - Subtle technical coordinate crosshairs at 128px grid intersections
 * - Pointer-events: none, rendered with HTML5 2D Canvas
 * - Device pixel ratio capped at 2
 * - Grid: 14px x 20px (desktop), reduced by ~40% density on mobile
 * - Font: monospace 12px (desktop), 11px (mobile)
 * - Character set (dim to bright): ' ', '.', ':', '-', '+', '*', '#'
 * - Sparse set: '0', '1', '/' in ~3% of cells
 * - Smooth wave drift field (24s cycle) capped at 30fps
 * - Mouse cursor ripple effect (160px radius, 1.2s fadeout, desktop only)
 * - Subtle parallax shift on page scroll (0.2x scroll speed)
 * - Off-white opacity 0.04 to 0.18, brightest pockets <= 8%
 * - Accent color in ~1% of active cells at 0.35 opacity
 * - Coverage: Hero full strength, below hero 40%, footer 20%
 * - Radial vignette: 60% darker at edges/corners
 * - Calm zone behind central reading columns (opacity <= 0.08)
 * - Pause on tab hidden, static frame on prefers-reduced-motion
 */

// Density ramp from dim (empty space) to bright
const RAMP = [' ', '.', ':', '-', '+', '*', '#'];
const SPARSE_CHARS = ['0', '1', '/'];
const CYCLE_DURATION = 24.0; // 24 seconds for full periodic cycle
const TARGET_FPS = 30;
const FRAME_INTERVAL = 1000 / TARGET_FPS; // 33.33ms

export default function AsciiBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let rafId = null;
    let lastFrameTime = 0;
    let isRunning = false;

    // Check reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Mouse tracking for desktop ripple
    const mouse = {
      x: -1000,
      y: -1000,
      time: 0,
    };

    // Viewport & Grid metrics
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let isMobile = width < 768;

    // Cell size: 14px x 20px desktop.
    // On mobile: 16px x 24px gives ~42% lower cell density while keeping 11px font.
    let cellW = isMobile ? 16 : 14;
    let cellH = isMobile ? 24 : 20;
    let fontSize = isMobile ? 11 : 12;
    let cols = Math.ceil(width / cellW);
    let rows = Math.ceil(height / cellH);

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      isMobile = width < 768;

      cellW = isMobile ? 16 : 14;
      cellH = isMobile ? 24 : 20;
      fontSize = isMobile ? 11 : 12;
      cols = Math.ceil(width / cellW);
      rows = Math.ceil(height / cellH);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = `${fontSize}px "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", monospace`;
    };

    resizeCanvas();

    // Mouse move handler (desktop only)
    const handleMouseMove = (e) => {
      if (isMobile) return;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.time = performance.now();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Render single frame
    const renderFrame = (now, timeSec) => {
      const halfW = width * 0.5;
      const halfH = height * 0.5;

      // 1a. Base canvas fill: Deep near-black #010102
      ctx.fillStyle = '#010102';
      ctx.fillRect(0, 0, width, height);

      // 1b. Layered Ambient Radial Glow (Top-center lavender illumination)
      const topGlow = ctx.createRadialGradient(halfW, 0, 10, halfW, 0, Math.max(width * 0.7, 600));
      topGlow.addColorStop(0, 'rgba(94, 106, 210, 0.12)');
      topGlow.addColorStop(0.45, 'rgba(94, 106, 210, 0.03)');
      topGlow.addColorStop(1, 'rgba(1, 1, 2, 0)');
      ctx.fillStyle = topGlow;
      ctx.fillRect(0, 0, width, height);

      // 1c. Subtle Drifting Ambient Light Spot
      const driftX = halfW + Math.sin(timeSec * 0.22) * (width * 0.25);
      const driftY = halfH + Math.cos(timeSec * 0.18) * (height * 0.2);
      const driftGlow = ctx.createRadialGradient(driftX, driftY, 20, driftX, driftY, 450);
      driftGlow.addColorStop(0, 'rgba(130, 143, 255, 0.045)');
      driftGlow.addColorStop(1, 'rgba(1, 1, 2, 0)');
      ctx.fillStyle = driftGlow;
      ctx.fillRect(0, 0, width, height);

      // 1d. Subtle Technical Coordinate Crosshairs at 128px intervals
      const gridInterval = 128;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;
      for (let gx = gridInterval; gx < width; gx += gridInterval) {
        for (let gy = gridInterval; gy < height; gy += gridInterval) {
          ctx.beginPath();
          ctx.moveTo(gx - 3, gy);
          ctx.lineTo(gx + 3, gy);
          ctx.moveTo(gx, gy - 3);
          ctx.lineTo(gx, gy + 3);
          ctx.stroke();
        }
      }

      ctx.font = `${fontSize}px "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", monospace`;

      // 2. Parallax and Coverage from Scroll
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const scrollShift = scrollY * 0.2; // Subtle parallax: shift field up by 0.2x scroll speed

      // Hero coverage vs Below-Hero fade:
      // Hero (scrollY <= 120px) = 1.0; below hero fades to 0.40
      let scrollCoverage = 1.0;
      if (scrollY > 120) {
        const heroProgress = Math.min(1, (scrollY - 120) / 600);
        scrollCoverage = 1.0 - heroProgress * 0.60; // Smoothly drops to 0.40
      }

      // Footer fade: down to 20% strength near page bottom
      const docHeight = document.documentElement.scrollHeight || 4000;
      const distFromBottom = docHeight - (scrollY + height);
      if (distFromBottom < 750) {
        const footerProgress = Math.min(1, Math.max(0, (750 - distFromBottom) / 750));
        scrollCoverage = scrollCoverage * (1.0 - footerProgress * 0.50); // 0.40 * 0.5 = 0.20
      }

      // 3. Wave Drift Phase (Periodic cycle over 24 seconds)
      const waveT = (timeSec * (2 * Math.PI)) / CYCLE_DURATION;

      // Mouse ripple state
      const mouseElapsed = now - mouse.time;
      const hasActiveRipple = !isMobile && mouseElapsed < 1200;
      const rippleFade = hasActiveRipple ? Math.max(0, 1 - mouseElapsed / 1200) : 0;

      // 4. Draw ASCII Grid
      for (let r = 0; r < rows; r++) {
        const cellY = r * cellH + cellH * 0.5;
        // Shift sampling coordinate vertically by scrollShift for parallax
        const ny = (cellY + scrollShift) / height;

        for (let c = 0; c < cols; c++) {
          const cellX = c * cellW + cellW * 0.5;
          const nx = cellX / width;

          // Stable deterministic seed for cell identity
          const cellSeed = ((c * 1973 + r * 9277) ^ 0x5bd1e995) >>> 0;

          // Multi-harmonic smooth 2D noise field
          const s1 = Math.sin(nx * 3.2 + ny * 2.2 + waveT);
          const s2 = Math.cos(nx * 2.4 - ny * 3.4 + waveT * 0.72 + 1.5);
          const s3 = Math.sin((nx + ny) * 2.6 - waveT * 0.55 + 2.7);
          const s4 = Math.cos(Math.sqrt(nx * nx + ny * ny) * 3.0 - waveT * 0.38);

          let noise = (s1 + s2 + s3 + s4) * 0.25 + 0.5; // Normalized roughly [0, 1]

          // Soft ripple effect around mouse cursor (radius 160px, desktop only)
          if (hasActiveRipple) {
            const dx = cellX - mouse.x;
            const dy = cellY - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 160) {
              const ring = Math.sin((dist / 160) * Math.PI) * rippleFade;
              noise += ring * 0.24;
            }
          }

          // Radial vignette: darken edges and corners by 60%
          const vX = (cellX - halfW) / halfW;
          const vY = (cellY - halfH) / halfH;
          const vDist = Math.min(1, Math.sqrt(vX * vX + vY * vY));
          const vignette = 1.0 - (vDist * 0.60); // 1.0 at center, 0.40 at corners

          // Effective brightness multiplier
          const totalCoverage = scrollCoverage * vignette;
          const effectiveVal = noise * totalCoverage;

          // Calm zone behind central headlines and body text:
          // Keep characters near text below 0.08 opacity
          const distFromCenter = Math.abs(cellX - halfW);
          let maxOpacity = 0.18;
          if (distFromCenter < 420) {
            const calmFactor = distFromCenter / 420; // 0 at center, 1 at boundary
            maxOpacity = 0.075 + calmFactor * (0.18 - 0.075);
          }

          // Character ramp selection & opacity calculation
          // Thresholds calibrated so that the brightest pockets never exceed 8% of cells
          let char = '';
          let opacity = 0;

          if (effectiveVal < 0.32) {
            // Space / empty cell (dimmest)
            continue;
          } else if (effectiveVal < 0.46) {
            char = '.';
            opacity = 0.04;
          } else if (effectiveVal < 0.58) {
            char = ':';
            opacity = 0.06;
          } else if (effectiveVal < 0.69) {
            char = '-';
            opacity = 0.08;
          } else if (effectiveVal < 0.79) {
            char = '+';
            opacity = 0.11;
          } else if (effectiveVal < 0.88) {
            char = '*';
            opacity = 0.14;
          } else {
            // Brightest character '#' only appears in <= 8% of cells
            char = '#';
            opacity = 0.18;
          }

          // Enforce calm zone ceiling
          opacity = Math.min(opacity, maxOpacity);

          // Sparse 0, 1, and / characters in ~3% of active cells
          const isSparseCell = (cellSeed % 100) < 3;
          if (isSparseCell) {
            char = SPARSE_CHARS[cellSeed % 3];
          }

          // Optional accent color in ~1% of active cells at 0.35 opacity
          const isAccentCell = (cellSeed % 100) === 42;

          if (isAccentCell && opacity > 0.05) {
            // Citepoint lavender accent
            ctx.fillStyle = `rgba(130, 143, 255, 0.35)`;
          } else {
            // Off-white terminal character
            ctx.fillStyle = `rgba(240, 242, 245, ${opacity.toFixed(3)})`;
          }

          ctx.fillText(char, cellX, cellY);
        }
      }
    };

    // Animation Loop capped at 30fps
    const loop = (timestamp) => {
      if (!isRunning) return;

      const elapsed = timestamp - lastFrameTime;
      if (elapsed >= FRAME_INTERVAL) {
        lastFrameTime = timestamp - (elapsed % FRAME_INTERVAL);
        const timeSec = timestamp * 0.001;
        renderFrame(timestamp, timeSec);
      }

      rafId = requestAnimationFrame(loop);
    };

    const startAnimation = () => {
      if (motionQuery.matches) {
        // Reduced motion: render single static frame at t=12.0s
        renderFrame(0, 12.0);
        return;
      }
      if (!isRunning) {
        isRunning = true;
        lastFrameTime = performance.now();
        rafId = requestAnimationFrame(loop);
      }
    };

    const stopAnimation = () => {
      isRunning = false;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    // Page Visibility API: pause when tab is hidden
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
      } else {
        startAnimation();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Reduced motion listener
    const handleMotionChange = (e) => {
      if (e.matches) {
        stopAnimation();
        renderFrame(0, 12.0);
      } else {
        startAnimation();
      }
    };

    motionQuery.addEventListener('change', handleMotionChange);

    // Initial trigger
    startAnimation();

    return () => {
      stopAnimation();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none select-none"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        backgroundColor: '#010102',
      }}
      aria-hidden="true"
    />
  );
}
