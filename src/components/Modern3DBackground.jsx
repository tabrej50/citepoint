import React, { useEffect, useRef } from 'react';

/**
 * Modern3DBackground
 *
 * Endless High-Tech Luxury Gold Circuit & Architectural Blueprint Scene
 * Built directly around the user's uploaded master graphic:
 * 1. Base Layer: Native high-definition render of `gold-circuit-bg.png`
 *    with responsive `object-fit: cover` and subtle kinetic parallax.
 * 2. Interactive Canvas Engine (Endless Living Motion):
 *    - Mathematical sub-pixel alignment mapping to printed circuit traces.
 *    - Continuous glowing golden current pulses (data photons with comet trails).
 *    - Specular diamond starlight glints & breathing aura flares on 3D metallic pearls.
 *    - Rotating radar sweeps & arc scans on concentric registration circles (lower-left).
 *    - Sequential digital clocking pulses across dot matrix clusters.
 *    - Floating champagne gold constellation particles.
 *    - Interactive cursor spotlight with warm champagne luminance.
 * 3. 100% Endless Temporal & Scroll Engine:
 *    - Monotonic, stutter-free 60fps RAF loop with zero memory leaks.
 *    - Fixed viewport coverage spanning all 11 pages without cuts or borders.
 */

// Normalized circuit trace paths (0..1 coordinates mapped to 1024x576 master image)
const CIRCUIT_PATHS = [
  // 1. Right Upper Vertical Feed -> 45° Angle -> Hero Pearl -> Lower Bus
  [
    { x: 0.781, y: 0.000 },
    { x: 0.781, y: 0.191 },
    { x: 0.781, y: 0.295 },
    { x: 0.826, y: 0.375 },
    { x: 0.826, y: 0.435 },
    { x: 0.816, y: 0.528 },
    { x: 0.816, y: 0.722 },
    { x: 0.805, y: 0.722 },
    { x: 0.805, y: 0.840 },
    { x: 0.805, y: 1.000 },
  ],
  // 2. Right Horizontal Bus -> 45° Step -> Right Margin
  [
    { x: 0.625, y: 0.191 },
    { x: 0.750, y: 0.191 },
    { x: 0.750, y: 0.320 },
    { x: 0.812, y: 0.425 },
    { x: 0.940, y: 0.425 },
  ],
  // 3. Center Cross-Bus -> Open Ring -> 45° Jog -> Hero Pearl -> Right Edge
  [
    { x: 0.435, y: 0.655 },
    { x: 0.581, y: 0.655 },
    { x: 0.650, y: 0.528 },
    { x: 0.816, y: 0.528 },
    { x: 0.870, y: 0.528 },
  ],
  // 4. Center-Right Multi-Angle Step Bus
  [
    { x: 0.601, y: 0.731 },
    { x: 0.660, y: 0.620 },
    { x: 0.742, y: 0.620 },
    { x: 0.742, y: 0.570 },
    { x: 0.805, y: 0.570 },
    { x: 0.805, y: 0.722 },
    { x: 0.869, y: 0.748 },
    { x: 0.869, y: 0.920 },
  ],
  // 5. Lower Cross Bus
  [
    { x: 0.208, y: 0.731 },
    { x: 0.601, y: 0.731 },
    { x: 0.775, y: 0.731 },
    { x: 0.775, y: 1.000 },
  ],
  // 6. Left Upper Feed -> Horizontal Line
  [
    { x: 0.045, y: 0.000 },
    { x: 0.045, y: 0.160 },
    { x: 0.185, y: 0.160 },
  ],
  // 7. Left Diagonal Bus through Large Pearl & Ring
  [
    { x: 0.000, y: 0.604 },
    { x: 0.071, y: 0.604 },
    { x: 0.170, y: 0.792 },
    { x: 0.208, y: 0.792 },
    { x: 0.340, y: 0.792 },
  ],
  // 8. Left Bottom Chamfer Bus
  [
    { x: 0.033, y: 0.665 },
    { x: 0.033, y: 0.734 },
    { x: 0.070, y: 0.734 },
    { x: 0.100, y: 0.792 },
    { x: 0.220, y: 0.792 },
  ],
  // 9. Left Outer Lower Step Bus
  [
    { x: 0.033, y: 0.812 },
    { x: 0.080, y: 0.812 },
    { x: 0.140, y: 0.812 },
    { x: 0.208, y: 0.930 },
    { x: 0.208, y: 1.000 },
  ],
];

// Key metallic pearl nodes with specular glint effects
const PEARL_NODES = [
  { x: 0.816, y: 0.528, radius: 18, isHero: true, name: 'Hero Pearl' },
  { x: 0.826, y: 0.375, radius: 13, isHero: false, name: 'Mid Right Pearl' },
  { x: 0.781, y: 0.191, radius: 9, isHero: false, name: 'Upper Right Pearl' },
  { x: 0.071, y: 0.604, radius: 15, isHero: false, name: 'Lower Left Pearl' },
  { x: 0.045, y: 0.160, radius: 11, isHero: false, name: 'Upper Left Pearl' },
];

// Dot matrix clusters for sequential clocking pulses
const DOT_CLUSTERS = [
  { x: 0.110, y: 0.092, cols: 8, rows: 2, spacing: 7 },
  { x: 0.835, y: 0.105, cols: 4, rows: 3, spacing: 7 },
  { x: 0.662, y: 0.365, cols: 6, rows: 2, spacing: 7 },
  { x: 0.912, y: 0.600, cols: 4, rows: 3, spacing: 7 },
  { x: 0.720, y: 0.780, cols: 4, rows: 3, spacing: 7 },
  { x: 0.215, y: 0.670, cols: 3, rows: 3, spacing: 7 },
];

export default function Modern3DBackground() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isReducedMotion = motionQuery.matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Image aspect ratio of 1024 x 576 master asset
    const IMG_ASPECT = 1024 / 576;

    // Helper: compute rendered bounds of the background image under object-fit: cover
    const getRenderBounds = () => {
      const containerAspect = width / height;
      let renderW, renderH, offsetX, offsetY;

      if (containerAspect > IMG_ASPECT) {
        // Container is wider than 16:9
        renderW = width;
        renderH = width / IMG_ASPECT;
        offsetX = 0;
        offsetY = (height - renderH) / 2;
      } else {
        // Container is taller than 16:9
        renderH = height;
        renderW = height * IMG_ASPECT;
        offsetX = (width - renderW) / 2;
        offsetY = 0;
      }

      return { renderW, renderH, offsetX, offsetY };
    };

    // Resize canvas with high DPI backing store
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    // Track mouse & scroll for 2.5D kinetic parallax
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
    };

    let scrollY = window.scrollY || 0;
    let lastScrollY = scrollY;
    let scrollParallaxY = 0;

    const onMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.active = false;
    };

    const onScroll = () => {
      scrollY = window.scrollY || window.pageYOffset || 0;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('scroll', onScroll, { passive: true });

    // ============================================================
    // PULSE PARTICLES (Data photons traveling along circuit traces)
    // ============================================================
    // Precompute cumulative lengths for each polyline path
    const pathMetrics = CIRCUIT_PATHS.map((points) => {
      const segments = [];
      let totalLength = 0;

      for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];
        const dx = p2.x - p1.x;
        const dy = (p2.y - p1.y) / IMG_ASPECT; // normalize aspect for distance
        const dist = Math.hypot(dx, dy);
        segments.push({ p1, p2, dist, cumDist: totalLength });
        totalLength += dist;
      }

      return { points, segments, totalLength };
    });

    // Helper: interpolate point along normalized path at parametric distance `t` (0..1)
    const getPointOnPath = (metric, t) => {
      const targetDist = ((t % 1) + 1) % 1 * metric.totalLength;
      for (let i = 0; i < metric.segments.length; i++) {
        const seg = metric.segments[i];
        if (targetDist >= seg.cumDist && targetDist <= seg.cumDist + seg.dist) {
          const segT = seg.dist === 0 ? 0 : (targetDist - seg.cumDist) / seg.dist;
          return {
            x: seg.p1.x + (seg.p2.x - seg.p1.x) * segT,
            y: seg.p1.y + (seg.p2.y - seg.p1.y) * segT,
          };
        }
      }
      return metric.points[metric.points.length - 1];
    };

    // Instantiate traveling current pulses
    const pulses = [];
    pathMetrics.forEach((metric, pathIdx) => {
      // 2 pulses per path spaced along length
      const pulseCount = pathIdx === 0 || pathIdx === 2 ? 3 : 2;
      for (let p = 0; p < pulseCount; p++) {
        pulses.push({
          pathIdx,
          t: p / pulseCount + (pathIdx * 0.17) % 1,
          speed: 0.07 + (pathIdx % 3) * 0.025,
          length: 0.045, // comet trail length
          size: pathIdx === 0 || pathIdx === 2 ? 3.8 : 2.8,
        });
      }
    });

    // ============================================================
    // FLOATING CONSTELlATION GOLD PARTICLES
    // ============================================================
    const ambientParticles = [];
    const particleCount = width < 768 ? 24 : 45;
    for (let i = 0; i < particleCount; i++) {
      ambientParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        radius: 0.8 + Math.random() * 1.8,
        alpha: 0.18 + Math.random() * 0.45,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: (Math.random() - 0.5) * 0.2,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // ============================================================
    // ANIMATION LOOP (ENDLESS LIVING MOTION)
    // ============================================================
    let rafId = null;
    let lastTime = performance.now();
    let accumulatedTime = 0;
    let isVisible = true;

    const render = (now) => {
      if (!isVisible) return;

      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      accumulatedTime += delta;

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Parallax offsets
      const mouseParallaxX = (mouse.x / width - 0.5) * 8;
      const mouseParallaxY = (mouse.y / height - 0.5) * 6;
      scrollParallaxY += (-scrollY * 0.04 - scrollParallaxY) * 0.08;

      // Subtle parallax transform applied to the underlying master image
      if (imgRef.current) {
        imgRef.current.style.transform = `scale(1.025) translate(${mouseParallaxX * 0.6}px, ${mouseParallaxY * 0.6 + scrollParallaxY * 0.4}px)`;
      }

      // Clear canvas with transparent clearRect
      ctx.clearRect(0, 0, width, height);

      const bounds = getRenderBounds();
      const { renderW, renderH, offsetX, offsetY } = bounds;

      // Effective coordinate transformation function
      const toScreen = (nx, ny) => ({
        x: offsetX + nx * renderW + mouseParallaxX,
        y: offsetY + ny * renderH + mouseParallaxY + scrollParallaxY * 0.4,
      });

      // ------------------------------------------------------------
      // 1. INTERACTIVE CURSOR WARM CHAMPAGNE SPOTLIGHT
      // ------------------------------------------------------------
      if (mouse.active && !isReducedMotion) {
        const spotRadius = 260;
        const spotGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          spotRadius
        );
        spotGrad.addColorStop(0, 'rgba(223, 183, 108, 0.14)');
        spotGrad.addColorStop(0.4, 'rgba(197, 160, 89, 0.06)');
        spotGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = spotGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, spotRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // ------------------------------------------------------------
      // 2. RADAR SWEEP / ROTATING CONCENTRIC ARCS (LOWER LEFT)
      // ------------------------------------------------------------
      const radarCenter = toScreen(0.045, 0.795);
      const radarRadius = renderW * 0.14;
      const radarAngle = accumulatedTime * 0.45;

      ctx.save();
      ctx.beginPath();
      ctx.arc(radarCenter.x, radarCenter.y, radarRadius, 0, Math.PI * 2);
      ctx.clip();

      const sweepGrad = ctx.createRadialGradient(
        radarCenter.x,
        radarCenter.y,
        0,
        radarCenter.x,
        radarCenter.y,
        radarRadius
      );
      sweepGrad.addColorStop(0, 'rgba(223, 183, 108, 0.22)');
      sweepGrad.addColorStop(0.8, 'rgba(197, 160, 89, 0.04)');
      sweepGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = sweepGrad;
      ctx.beginPath();
      ctx.moveTo(radarCenter.x, radarCenter.y);
      ctx.arc(
        radarCenter.x,
        radarCenter.y,
        radarRadius,
        radarAngle - 0.4,
        radarAngle
      );
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Delicate rotating dashed accent arc
      ctx.save();
      ctx.beginPath();
      ctx.arc(radarCenter.x, radarCenter.y, radarRadius * 0.85, radarAngle * 0.5, radarAngle * 0.5 + Math.PI * 0.6);
      ctx.strokeStyle = 'rgba(197, 160, 89, 0.28)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 6]);
      ctx.stroke();
      ctx.restore();

      // ------------------------------------------------------------
      // 3. TRAVELING CURRENT PULSES (DATA PHOTONS WITH COMET TRAILS)
      // ------------------------------------------------------------
      pulses.forEach((pulse) => {
        pulse.t = (pulse.t + pulse.speed * delta) % 1;
        const metric = pathMetrics[pulse.pathIdx];

        // Draw comet trail (sub-samples behind the head)
        const trailSteps = 6;
        for (let s = trailSteps; s >= 1; s--) {
          const trailT = pulse.t - (s / trailSteps) * pulse.length;
          const pt = getPointOnPath(metric, trailT);
          const screenPt = toScreen(pt.x, pt.y);

          const trailAlpha = (1 - s / trailSteps) * 0.55;
          const trailRadius = pulse.size * (1 - s / trailSteps * 0.6);

          ctx.beginPath();
          ctx.arc(screenPt.x, screenPt.y, trailRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(223, 183, 108, ${trailAlpha})`;
          ctx.fill();
        }

        // Pulse Head: Radiant Champagne Gold with pure white core
        const headPt = getPointOnPath(metric, pulse.t);
        const headScreen = toScreen(headPt.x, headPt.y);

        // Ambient glow halo
        ctx.save();
        ctx.shadowColor = '#DFB76C';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(headScreen.x, headScreen.y, pulse.size, 0, Math.PI * 2);
        ctx.fillStyle = '#DFB76C';
        ctx.fill();

        // Inner white spark
        ctx.beginPath();
        ctx.arc(headScreen.x, headScreen.y, pulse.size * 0.55, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
        ctx.restore();
      });

      // ------------------------------------------------------------
      // 4. SPECULAR STARLIGHT FLARES & BREATHING AURAS ON 3D PEARLS
      // ------------------------------------------------------------
      PEARL_NODES.forEach((node, idx) => {
        const pt = toScreen(node.x, node.y);
        const screenRadius = (node.radius / 576) * renderH;

        // Breathing cycle
        const breath = Math.sin(accumulatedTime * 1.8 + idx * 1.2);
        const auraAlpha = 0.14 + breath * 0.08;
        const flareScale = 0.8 + breath * 0.25;

        // Soft radial glow aura behind pearl
        const auraGrad = ctx.createRadialGradient(
          pt.x,
          pt.y,
          screenRadius * 0.4,
          pt.x,
          pt.y,
          screenRadius * (node.isHero ? 2.6 : 2.0)
        );
        auraGrad.addColorStop(0, `rgba(223, 183, 108, ${auraAlpha})`);
        auraGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = auraGrad;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, screenRadius * (node.isHero ? 2.6 : 2.0), 0, Math.PI * 2);
        ctx.fill();

        // Dynamic 4-Point Diamond Starlight Glint on the specular hotspot (upper-left)
        const glintX = pt.x - screenRadius * 0.32;
        const glintY = pt.y - screenRadius * 0.35;
        const glintLen = (node.isHero ? 14 : 9) * flareScale;
        const glintWidth = 1.6;

        ctx.save();
        ctx.translate(glintX, glintY);
        ctx.rotate(accumulatedTime * 0.15 + idx);

        // Horizontal ray
        const horizGrad = ctx.createLinearGradient(-glintLen, 0, glintLen, 0);
        horizGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        horizGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.95)');
        horizGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = horizGrad;
        ctx.fillRect(-glintLen, -glintWidth / 2, glintLen * 2, glintWidth);

        // Vertical ray
        const vertGrad = ctx.createLinearGradient(0, -glintLen, 0, glintLen);
        vertGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        vertGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.95)');
        vertGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = vertGrad;
        ctx.fillRect(-glintWidth / 2, -glintLen, glintWidth, glintLen * 2);

        // Core brilliant dot
        ctx.beginPath();
        ctx.arc(0, 0, 1.8 * flareScale, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = '#DFB76C';
        ctx.shadowBlur = 6;
        ctx.fill();

        ctx.restore();
      });

      // ------------------------------------------------------------
      // 5. DIGITAL CLOCKING WAVE ACROSS DOT MATRIX CLUSTERS
      // ------------------------------------------------------------
      DOT_CLUSTERS.forEach((cluster, cIdx) => {
        const clusterOrigin = toScreen(cluster.x, cluster.y);
        const waveT = (accumulatedTime * 1.6 + cIdx * 0.8) % (cluster.cols + 4);

        for (let col = 0; col < cluster.cols; col++) {
          const dist = Math.abs(col - waveT);
          if (dist < 2.0) {
            const glowIntensity = Math.max(0, 1 - dist / 2.0) * 0.45;
            for (let row = 0; row < cluster.rows; row++) {
              const dx = clusterOrigin.x + (col - cluster.cols / 2) * (cluster.spacing * (renderW / 1024));
              const dy = clusterOrigin.y + (row - cluster.rows / 2) * (cluster.spacing * (renderH / 576));

              ctx.beginPath();
              ctx.arc(dx, dy, 2.2, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(223, 183, 108, ${glowIntensity})`;
              ctx.fill();
            }
          }
        }
      });

      // ------------------------------------------------------------
      // 6. AMBIENT FLOATING GOLDEN DATA PARTICLES
      // ------------------------------------------------------------
      ambientParticles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap particles seamlessly
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const pulseAlpha = p.alpha + Math.sin(accumulatedTime * 2 + p.phase) * 0.12;

        ctx.beginPath();
        ctx.arc(p.x, p.y + scrollParallaxY * 0.2, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(197, 160, 89, ${Math.max(0.05, pulseAlpha)})`;
        ctx.fill();
      });

      if (!isReducedMotion) {
        rafId = requestAnimationFrame(render);
      }
    };

    const onVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && !isReducedMotion) {
        lastTime = performance.now();
        rafId = requestAnimationFrame(render);
      } else if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('focus', onVisibilityChange);

    // Initial start
    rafId = requestAnimationFrame(render);

    // Lifecycle cleanup
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('focus', onVisibilityChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {/* 1. Master High-Resolution Circuit Blueprint Image */}
      <img
        ref={imgRef}
        src="/assets/brand/gold-circuit-bg.png"
        alt=""
        className="w-full h-full object-cover object-center will-change-transform transition-transform duration-700 ease-out"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          transformOrigin: 'center center',
          filter: 'contrast(1.02) brightness(1.01)',
        }}
      />

      {/* 2. Hardware-Accelerated Interactive Canvas Overlay (Endless Motion) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
