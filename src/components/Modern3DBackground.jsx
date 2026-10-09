import React, { useEffect, useRef } from 'react';

/**
 * Modern3DBackground
 *
 * Endless Pure-Code Procedural Luxury Gold Circuit & Blueprint Canvas
 * 100% PROGRAMMATIC — ZERO BACKGROUND IMAGES:
 * 1. Native High-Performance HTML5 Canvas rendering all circuit traces,
 *    3D metallic golden spheres, open donut rings, dot matrices, and concentric radar arcs.
 * 2. Endless Living Motion:
 *    - Continuous glowing golden data pulses (current packets with tapered comet trails).
 *    - True 3D metallic spheres with multi-stop radial specular shading and rotating diamond glints.
 *    - Rotating blueprint radar sweeps and concentric registration arcs.
 *    - Digital clocking luminescence waves rippling across dot matrix clusters.
 *    - Ambient floating golden data particles with organic Brownian drift.
 * 3. Endless Scroll-Driven Evolution:
 *    - Multi-tiered interconnected circuit architecture extending endlessly down the document.
 *    - Parallax depth: foreground spheres hover with independent 3D parallax.
 *    - Scroll velocity surge: scrolling accelerates pulse velocity and energizes trace voltage.
 *    - Center-clear layout: leaves the central reading column completely luminous and legible.
 */

export default function Modern3DBackground() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

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
    let smoothScrollY = scrollY;
    let lastScrollY = scrollY;
    let scrollVelocity = 0;

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
    // MULTI-TIER INTERCONNECTED CIRCUIT BLUEPRINT SCHEMATIC
    // Height per tier = 960px. Tiers connect seamlessly end-to-end.
    // ============================================================
    const TIER_HEIGHT = 960;

    // Helper: generate path metrics (cumulative segment distances for pulse travel)
    const preparePathMetrics = (path) => {
      const segments = [];
      let totalLength = 0;
      for (let i = 0; i < path.length - 1; i++) {
        const p1 = path[i];
        const p2 = path[i + 1];
        const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
        segments.push({ p1, p2, dist, cumDist: totalLength });
        totalLength += dist;
      }
      return { path, segments, totalLength };
    };

    // Interpolate point along polyline
    const getPointAlongPath = (metric, t) => {
      if (metric.totalLength === 0) return metric.path[0];
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
      return metric.path[metric.path.length - 1];
    };

    // Tier 0 (Hero Tier - replicates the master reference image)
    const TIER_0 = {
      paths: [
        // Right feed down to hero pearl
        [
          { nx: 0.781, ny: 0.000 },
          { nx: 0.781, ny: 0.191 },
          { nx: 0.781, ny: 0.295 },
          { nx: 0.826, ny: 0.375 },
          { nx: 0.826, ny: 0.435 },
          { nx: 0.816, ny: 0.528 },
          { nx: 0.816, ny: 0.722 },
          { nx: 0.805, ny: 0.722 },
          { nx: 0.805, ny: 0.840 },
          { nx: 0.805, ny: 1.000 },
        ],
        // Right horizontal branch
        [
          { nx: 0.625, ny: 0.191 },
          { nx: 0.750, ny: 0.191 },
          { nx: 0.750, ny: 0.320 },
          { nx: 0.812, ny: 0.425 },
          { nx: 0.940, ny: 0.425 },
        ],
        // Center cross-bus to hero pearl
        [
          { nx: 0.435, ny: 0.655 },
          { nx: 0.581, ny: 0.655 },
          { nx: 0.650, ny: 0.528 },
          { nx: 0.816, ny: 0.528 },
          { nx: 0.870, ny: 0.528 },
        ],
        // Center-right step bus
        [
          { nx: 0.601, ny: 0.731 },
          { nx: 0.660, ny: 0.620 },
          { nx: 0.742, ny: 0.620 },
          { nx: 0.742, ny: 0.570 },
          { nx: 0.805, ny: 0.570 },
          { nx: 0.805, ny: 0.722 },
          { nx: 0.869, ny: 0.748 },
          { nx: 0.869, ny: 1.000 },
        ],
        // Left upper bus
        [
          { nx: 0.045, ny: 0.000 },
          { nx: 0.045, ny: 0.160 },
          { nx: 0.185, ny: 0.160 },
        ],
        // Left diagonal bus through pearl and ring
        [
          { nx: 0.000, ny: 0.604 },
          { nx: 0.071, ny: 0.604 },
          { nx: 0.170, ny: 0.792 },
          { nx: 0.208, ny: 0.792 },
          { nx: 0.340, ny: 0.792 },
        ],
        // Left lower bus connecting to bottom
        [
          { nx: 0.033, ny: 0.665 },
          { nx: 0.033, ny: 0.734 },
          { nx: 0.070, ny: 0.734 },
          { nx: 0.100, ny: 0.792 },
          { nx: 0.208, ny: 0.792 },
          { nx: 0.208, ny: 1.000 },
        ],
      ],
      spheres: [
        { nx: 0.816, ny: 0.528, radius: 18, isHero: true, depth: 1.2 },
        { nx: 0.826, ny: 0.375, radius: 13, isHero: false, depth: 1.0 },
        { nx: 0.781, ny: 0.191, radius: 9, isHero: false, depth: 0.9 },
        { nx: 0.071, ny: 0.604, radius: 15, isHero: false, depth: 1.1 },
        { nx: 0.045, ny: 0.160, radius: 10, isHero: false, depth: 0.85 },
        // Smaller node beads
        { nx: 0.748, ny: 0.366, radius: 4.5, isHero: false, depth: 0.8 },
        { nx: 0.601, ny: 0.731, radius: 4.8, isHero: false, depth: 0.8 },
        { nx: 0.805, ny: 0.722, radius: 4.5, isHero: false, depth: 0.8 },
        { nx: 0.805, ny: 0.840, radius: 4.5, isHero: false, depth: 0.8 },
        { nx: 0.869, ny: 0.748, radius: 4.5, isHero: false, depth: 0.8 },
        { nx: 0.940, ny: 0.425, radius: 4.5, isHero: false, depth: 0.8 },
        { nx: 0.185, ny: 0.160, radius: 4.5, isHero: false, depth: 0.8 },
      ],
      rings: [
        { nx: 0.581, ny: 0.655, outerR: 10, innerR: 7.5 },
        { nx: 0.170, ny: 0.792, outerR: 8.5, innerR: 6.2 },
      ],
      dotClusters: [
        { nx: 0.110, ny: 0.092, cols: 8, rows: 2, spacing: 7 },
        { nx: 0.835, ny: 0.105, cols: 4, rows: 3, spacing: 7 },
        { nx: 0.662, ny: 0.365, cols: 6, rows: 2, spacing: 7 },
        { nx: 0.912, ny: 0.600, cols: 4, rows: 3, spacing: 7 },
        { nx: 0.720, ny: 0.780, cols: 4, rows: 3, spacing: 7 },
        { nx: 0.215, ny: 0.670, cols: 3, rows: 3, spacing: 7 },
      ],
      radars: [
        { nx: 0.045, ny: 0.795, radii: [45, 80, 115, 150] },
      ],
      crosshairs: [
        { nx: 0.115, ny: 0.465, size: 14 },
        { nx: 0.635, ny: 0.825, size: 12 },
      ],
    };

    // Tier 1 (Services & Capabilities Tier - middle scroll continuum)
    const TIER_1 = {
      paths: [
        // Left descending highway
        [
          { nx: 0.208, ny: 0.000 },
          { nx: 0.208, ny: 0.220 },
          { nx: 0.120, ny: 0.308 },
          { nx: 0.120, ny: 0.540 },
          { nx: 0.060, ny: 0.600 },
          { nx: 0.060, ny: 0.850 },
          { nx: 0.180, ny: 0.970 },
          { nx: 0.180, ny: 1.000 },
        ],
        // Left horizontal diagnostic rail
        [
          { nx: 0.120, ny: 0.308 },
          { nx: 0.280, ny: 0.308 },
          { nx: 0.320, ny: 0.348 },
        ],
        // Right feed connection from Tier 0
        [
          { nx: 0.805, ny: 0.000 },
          { nx: 0.805, ny: 0.180 },
          { nx: 0.865, ny: 0.240 },
          { nx: 0.865, ny: 0.460 },
          { nx: 0.805, ny: 0.520 },
          { nx: 0.805, ny: 0.780 },
          { nx: 0.850, ny: 0.825 },
          { nx: 0.850, ny: 1.000 },
        ],
        // Right branching bus
        [
          { nx: 0.865, ny: 0.240 },
          { nx: 0.940, ny: 0.240 },
          { nx: 0.940, ny: 0.580 },
        ],
        // Center cross-connecting diagnostic branch
        [
          { nx: 0.869, ny: 0.000 },
          { nx: 0.869, ny: 0.120 },
          { nx: 0.740, ny: 0.250 },
          { nx: 0.650, ny: 0.250 },
          { nx: 0.580, ny: 0.320 },
          { nx: 0.580, ny: 0.640 },
          { nx: 0.640, ny: 0.700 },
          { nx: 0.750, ny: 0.700 },
          { nx: 0.750, ny: 1.000 },
        ],
      ],
      spheres: [
        { nx: 0.120, ny: 0.308, radius: 14, isHero: false, depth: 1.1 },
        { nx: 0.060, ny: 0.600, radius: 16, isHero: false, depth: 1.2 },
        { nx: 0.865, ny: 0.240, radius: 15, isHero: false, depth: 1.15 },
        { nx: 0.805, ny: 0.520, radius: 17, isHero: true, depth: 1.25 },
        { nx: 0.740, ny: 0.250, radius: 11, isHero: false, depth: 0.9 },
        // Smaller node beads
        { nx: 0.280, ny: 0.308, radius: 4.5, isHero: false, depth: 0.8 },
        { nx: 0.940, ny: 0.240, radius: 4.5, isHero: false, depth: 0.8 },
        { nx: 0.640, ny: 0.700, radius: 4.5, isHero: false, depth: 0.8 },
        { nx: 0.850, ny: 0.825, radius: 4.8, isHero: false, depth: 0.85 },
      ],
      rings: [
        { nx: 0.240, ny: 0.308, outerR: 9.5, innerR: 7.0 },
        { nx: 0.580, ny: 0.320, outerR: 10, innerR: 7.5 },
      ],
      dotClusters: [
        { nx: 0.160, ny: 0.440, cols: 4, rows: 4, spacing: 7 },
        { nx: 0.890, ny: 0.380, cols: 3, rows: 3, spacing: 7 },
        { nx: 0.680, ny: 0.580, cols: 5, rows: 2, spacing: 7 },
      ],
      radars: [
        { nx: 0.920, ny: 0.750, radii: [40, 75, 110] },
      ],
      crosshairs: [
        { nx: 0.180, ny: 0.680, size: 14 },
        { nx: 0.820, ny: 0.880, size: 12 },
      ],
    };

    // Tier 2 (Methodology & Scale Tier - deeper scroll continuum)
    const TIER_2 = {
      paths: [
        // Left bus connecting from Tier 1
        [
          { nx: 0.180, ny: 0.000 },
          { nx: 0.180, ny: 0.240 },
          { nx: 0.070, ny: 0.350 },
          { nx: 0.070, ny: 0.680 },
          { nx: 0.150, ny: 0.760 },
          { nx: 0.240, ny: 0.760 },
          { nx: 0.045, ny: 0.955 },
          { nx: 0.045, ny: 1.000 },
        ],
        // Right bus connecting from Tier 1
        [
          { nx: 0.850, ny: 0.000 },
          { nx: 0.850, ny: 0.180 },
          { nx: 0.781, ny: 0.250 },
          { nx: 0.781, ny: 0.480 },
          { nx: 0.816, ny: 0.515 },
          { nx: 0.816, ny: 0.820 },
          { nx: 0.781, ny: 0.855 },
          { nx: 0.781, ny: 1.000 },
        ],
        // Center feed linking to Tier 0 loop
        [
          { nx: 0.750, ny: 0.000 },
          { nx: 0.750, ny: 0.140 },
          { nx: 0.620, ny: 0.270 },
          { nx: 0.480, ny: 0.270 },
          { nx: 0.480, ny: 0.580 },
          { nx: 0.580, ny: 0.680 },
          { nx: 0.720, ny: 0.680 },
          { nx: 0.805, ny: 0.765 },
          { nx: 0.805, ny: 1.000 },
        ],
      ],
      spheres: [
        { nx: 0.781, ny: 0.250, radius: 14, isHero: false, depth: 1.1 },
        { nx: 0.816, ny: 0.515, radius: 19, isHero: true, depth: 1.3 },
        { nx: 0.070, ny: 0.350, radius: 15, isHero: false, depth: 1.15 },
        { nx: 0.150, ny: 0.760, radius: 12, isHero: false, depth: 0.95 },
        // Smaller node beads
        { nx: 0.620, ny: 0.270, radius: 4.5, isHero: false, depth: 0.8 },
        { nx: 0.720, ny: 0.680, radius: 4.8, isHero: false, depth: 0.8 },
        { nx: 0.240, ny: 0.760, radius: 4.5, isHero: false, depth: 0.8 },
      ],
      rings: [
        { nx: 0.480, ny: 0.270, outerR: 9.5, innerR: 7.0 },
        { nx: 0.580, ny: 0.680, outerR: 10, innerR: 7.5 },
      ],
      dotClusters: [
        { nx: 0.120, ny: 0.180, cols: 6, rows: 2, spacing: 7 },
        { nx: 0.860, ny: 0.620, cols: 4, rows: 3, spacing: 7 },
        { nx: 0.650, ny: 0.440, cols: 3, rows: 4, spacing: 7 },
      ],
      radars: [
        { nx: 0.050, ny: 0.820, radii: [50, 90, 130] },
      ],
      crosshairs: [
        { nx: 0.140, ny: 0.520, size: 14 },
        { nx: 0.840, ny: 0.340, size: 12 },
      ],
    };

    const TIERS = [TIER_0, TIER_1, TIER_2];

    // ============================================================
    // TRAVELING CURRENT PULSES SETUP
    // ============================================================
    // Pre-calculate path metrics for each tier
    const tiersPrepared = TIERS.map((tier) => {
      const preparedPaths = tier.paths.map((p) => {
        // Points in normalized tier coordinates (0..1 across width, 0..1 across tierHeight)
        const absolutePoints = p.map((pt) => ({
          x: pt.nx,
          y: pt.ny,
        }));
        return preparePathMetrics(absolutePoints);
      });
      return { ...tier, preparedPaths };
    });

    // Create persistent pulse state array across tiers
    const pulses = [];
    tiersPrepared.forEach((tier, tierIdx) => {
      tier.preparedPaths.forEach((metric, pathIdx) => {
        const count = pathIdx === 0 || pathIdx === 2 ? 3 : 2;
        for (let i = 0; i < count; i++) {
          pulses.push({
            tierIdx,
            pathIdx,
            t: i / count + ((tierIdx * 3 + pathIdx) * 0.19) % 1,
            speed: 0.08 + (pathIdx % 3) * 0.025,
            length: 0.045, // comet trail length
            size: pathIdx === 0 ? 3.8 : 2.8,
          });
        }
      });
    });

    // ============================================================
    // FLOATING CONSTELlATION GOLD DATA PARTICLES
    // ============================================================
    const ambientParticles = [];
    const particleCount = width < 768 ? 20 : 40;
    for (let i = 0; i < particleCount; i++) {
      ambientParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.8 + Math.random() * 1.8,
        alpha: 0.16 + Math.random() * 0.45,
        speedX: (Math.random() - 0.5) * 0.22,
        speedY: (Math.random() - 0.5) * 0.18,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // ============================================================
    // 3D PROCEDURAL METALLIC SPHERE PAINTER (Formium Obsidian Chrome)
    // ============================================================
    const draw3DSphere = (ctx, x, y, radius, time, isHero = false, pulseSurge = 0) => {
      // 1. Soft Obsidian Drop Shadow
      ctx.save();
      const shadowGrad = ctx.createRadialGradient(
        x + radius * 0.25,
        y + radius * 0.35,
        radius * 0.15,
        x + radius * 0.25,
        y + radius * 0.35,
        radius * 1.45
      );
      shadowGrad.addColorStop(0, 'rgba(0, 0, 0, 0.7)');
      shadowGrad.addColorStop(0.6, 'rgba(230, 0, 35, 0.15)');
      shadowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = shadowGrad;
      ctx.beginPath();
      ctx.arc(x + radius * 0.25, y + radius * 0.35, radius * 1.45, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 2. Base Sphere with 6-Stop Radial Metallic Obsidian & Platinum Gradient
      ctx.save();
      const lightOffsetX = -radius * 0.32;
      const lightOffsetY = -radius * 0.35;
      const sphereGrad = ctx.createRadialGradient(
        x + lightOffsetX,
        y + lightOffsetY,
        radius * 0.04,
        x,
        y,
        radius
      );

      sphereGrad.addColorStop(0, '#FFFFFF');         // Specular highlight apex
      sphereGrad.addColorStop(0.15, '#E4E4E7');      // Platinum sheen
      sphereGrad.addColorStop(0.40, '#71717A');      // Graphite midtone
      sphereGrad.addColorStop(0.70, '#27272A');      // Dark obsidian chrome
      sphereGrad.addColorStop(0.90, '#18181B');      // Deep carbon shadow
      sphereGrad.addColorStop(1.0, '#09090B');       // Rim edge

      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();

      // 3. Rim bounce reflection (Formium Crimson light catch from bottom-right)
      const rimGrad = ctx.createRadialGradient(
        x + radius * 0.4,
        y + radius * 0.4,
        radius * 0.45,
        x,
        y,
        radius
      );
      rimGrad.addColorStop(0, 'rgba(230, 0, 35, 0)');
      rimGrad.addColorStop(0.8, 'rgba(230, 0, 35, 0.35)');
      rimGrad.addColorStop(1, 'rgba(230, 0, 35, 0.65)');

      ctx.fillStyle = rimGrad;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();

      // 4. Dynamic Specular Starlight Glint
      const glintX = x + lightOffsetX;
      const glintY = y + lightOffsetY;
      const flarePulse = 0.8 + Math.sin(time * 2.2 + radius) * 0.25 + pulseSurge * 0.4;
      const glintLen = (isHero ? 16 : 10) * flarePulse;

      ctx.translate(glintX, glintY);
      ctx.rotate(time * 0.18 + radius);

      // Horizontal ray
      const hGrad = ctx.createLinearGradient(-glintLen, 0, glintLen, 0);
      hGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
      hGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.95)');
      hGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = hGrad;
      ctx.fillRect(-glintLen, -1, glintLen * 2, 2);

      // Vertical ray
      const vGrad = ctx.createLinearGradient(0, -glintLen, 0, glintLen);
      vGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
      vGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.95)');
      vGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = vGrad;
      ctx.fillRect(-1, -glintLen, 2, glintLen * 2);

      // White glint core
      ctx.beginPath();
      ctx.arc(0, 0, 1.8 * flarePulse, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();

      ctx.restore();
    };

    // ============================================================
    // ============================================================
    // PROCEDURAL OPEN RING EYELET (○) PAINTER
    // ============================================================
    const drawOpenRing = (ctx, x, y, outerR, innerR) => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, outerR, 0, Math.PI * 2);
      ctx.strokeStyle = '#e60023';
      ctx.lineWidth = outerR - innerR;
      ctx.stroke();

      // Top specular highlight
      ctx.beginPath();
      ctx.arc(x - 0.5, y - 0.5, outerR, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    };

    // ============================================================
    // PROCEDURAL DOT CLUSTER PAINTER
    // ============================================================
    const drawDotCluster = (ctx, cx, cy, cols, rows, spacing, time, clusterIdx) => {
      const waveT = (time * 1.8 + clusterIdx * 1.2) % (cols + 4);
      for (let c = 0; c < cols; c++) {
        const dist = Math.abs(c - waveT);
        const pulseAlpha = Math.max(0, 1 - dist / 2.0);
        for (let r = 0; r < rows; r++) {
          const px = cx + (c - cols / 2) * spacing;
          const py = cy + (r - rows / 2) * spacing;

          ctx.beginPath();
          ctx.arc(px, py, 1.7, 0, Math.PI * 2);
          ctx.fillStyle = pulseAlpha > 0.08
            ? `rgba(230, 0, 35, ${0.45 + pulseAlpha * 0.55})`
            : 'rgba(255, 255, 255, 0.18)';
          ctx.fill();
        }
      }
    };

    // ============================================================
    // PROCEDURAL CONCENTRIC RADAR ARCS & ROTATING SWEEP
    // ============================================================
    const drawConcentricRadar = (ctx, cx, cy, radii, time) => {
      ctx.save();
      // Blueprint rings
      radii.forEach((r, idx) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = idx % 2 === 0
          ? 'rgba(230, 0, 35, 0.22)'
          : 'rgba(255, 255, 255, 0.12)';
        ctx.lineWidth = 1;
        if (idx === 2) ctx.setLineDash([4, 8]);
        else ctx.setLineDash([]);
        ctx.stroke();
      });

      // Rotating radar sweep
      const angle = time * 0.42;
      const sweepR = radii[radii.length - 1];
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, sweepR, angle - 0.38, angle);
      ctx.closePath();

      const sweepGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, sweepR);
      sweepGrad.addColorStop(0, 'rgba(230, 0, 35, 0.18)');
      sweepGrad.addColorStop(0.7, 'rgba(230, 0, 35, 0.04)');
      sweepGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = sweepGrad;
      ctx.fill();
      ctx.restore();
    };

    // ============================================================
    // TECHNICAL REGISTRATION CROSSHAIR
    // ============================================================
    const drawCrosshair = (ctx, x, y, size = 12) => {
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.24)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x - size / 2, y);
      ctx.lineTo(x + size / 2, y);
      ctx.moveTo(x, y - size / 2);
      ctx.lineTo(x, y + size / 2);
      ctx.stroke();
      ctx.restore();
    };

    // ============================================================
    // ANIMATION & SCROLL RENDERING ENGINE
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

      // Scroll physics & velocity
      const scrollDiff = scrollY - lastScrollY;
      lastScrollY = scrollY;
      scrollVelocity += (scrollDiff * 0.06 - scrollVelocity) * 0.12;
      smoothScrollY += (scrollY - smoothScrollY) * 0.08;

      // Kinetic surge multiplier
      const pulseSurge = Math.min(Math.abs(scrollVelocity) * 0.08, 1.0);

      // Subtle mouse parallax
      const mouseParallaxX = (mouse.x / width - 0.5) * 10;
      const mouseParallaxY = (mouse.y / height - 0.5) * 8;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // 1. Pristine Formium Black Base Canvas
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // Subtle ambient crimson radial glow in the peripheral wings
      const leftAmbient = ctx.createRadialGradient(0, height * 0.7, 0, 0, height * 0.7, width * 0.4);
      leftAmbient.addColorStop(0, 'rgba(230, 0, 35, 0.08)');
      leftAmbient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = leftAmbient;
      ctx.fillRect(0, 0, width, height);

      const rightAmbient = ctx.createRadialGradient(width, height * 0.45, 0, width, height * 0.45, width * 0.45);
      rightAmbient.addColorStop(0, 'rgba(255, 255, 255, 0.03)');
      rightAmbient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = rightAmbient;
      ctx.fillRect(0, 0, width, height);

      // ------------------------------------------------------------
      // 2. INTERACTIVE CURSOR FORMIUM CRIMSON SPOTLIGHT
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
        spotGrad.addColorStop(0, 'rgba(230, 0, 35, 0.14)');
        spotGrad.addColorStop(0.5, 'rgba(230, 0, 35, 0.04)');
        spotGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = spotGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, spotRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // ------------------------------------------------------------
      // 3. MULTI-TIER PROCEDURAL CIRCUIT NETWORK DRAWING
      // Calculate active visible tiers based on vertical scroll
      // ------------------------------------------------------------
      // Scroll moves smoothly through tiers
      const scrollWorldY = smoothScrollY * 0.7;
      const minTierIndex = Math.floor((scrollWorldY - height) / TIER_HEIGHT);
      const maxTierIndex = Math.ceil((scrollWorldY + height) / TIER_HEIGHT) + 1;

      // Coordinate converter from normalized tier (nx, ny, tierIndex) to screen (sx, sy)
      const toScreen = (nx, ny, tierIndex, depth = 1.0) => {
        const tierTopWorld = tierIndex * TIER_HEIGHT;
        const worldY = tierTopWorld + ny * TIER_HEIGHT;
        const screenY = (worldY - scrollWorldY) * depth + mouseParallaxY;
        const screenX = nx * width + mouseParallaxX;
        return { x: screenX, y: screenY };
      };

      for (let tIdx = minTierIndex; tIdx <= maxTierIndex; tIdx++) {
        // Wrap modulo index for endless cyclical variation
        const tierDataIdx = ((tIdx % TIERS.length) + TIERS.length) % TIERS.length;
        const tier = tiersPrepared[tierDataIdx];

        // 3a. Draw Circuit Traces (Polyline Busses)
        tier.paths.forEach((p) => {
          ctx.beginPath();
          for (let i = 0; i < p.length; i++) {
            const pt = toScreen(p[i].nx, p[i].ny, tIdx, 1.0);
            if (i === 0) ctx.moveTo(pt.x, pt.y);
            else ctx.lineTo(pt.x, pt.y);
          }

          // Traces glow with extra crimson voltage on scroll surge
          ctx.strokeStyle = pulseSurge > 0.1
            ? `rgba(230, 0, 35, ${0.7 + pulseSurge * 0.3})`
            : 'rgba(255, 255, 255, 0.12)';
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Delicate auxiliary hairline
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        });

        // 3b. Draw Concentric Radar Blueprint Arcs
        tier.radars.forEach((r) => {
          const center = toScreen(r.nx, r.ny, tIdx, 1.0);
          drawConcentricRadar(ctx, center.x, center.y, r.radii, accumulatedTime);
        });

        // 3c. Draw Alignment Crosshairs
        tier.crosshairs.forEach((ch) => {
          const pt = toScreen(ch.nx, ch.ny, tIdx, 1.0);
          drawCrosshair(ctx, pt.x, pt.y, ch.size);
        });

        // 3d. Draw Dot Matrix Clusters
        tier.dotClusters.forEach((cl, cIdx) => {
          const pt = toScreen(cl.nx, cl.ny, tIdx, 1.0);
          drawDotCluster(ctx, pt.x, pt.y, cl.cols, cl.rows, cl.spacing, accumulatedTime, cIdx + tIdx * 3);
        });

        // 3e. Draw Open Ring Eyelets (○)
        tier.rings.forEach((ring) => {
          const pt = toScreen(ring.nx, ring.ny, tIdx, 1.0);
          drawOpenRing(ctx, pt.x, pt.y, ring.outerR, ring.innerR);
        });

        // 3f. Draw 3D Metallic Golden Spheres (with depth parallax & levitation)
        tier.spheres.forEach((sphere, sIdx) => {
          // Floating levitation oscillation
          const floatY = Math.sin(accumulatedTime * (1.1 + sIdx * 0.2) + sIdx) * (sphere.radius * 0.12);
          const pt = toScreen(sphere.nx, sphere.ny, tIdx, sphere.depth);
          draw3DSphere(
            ctx,
            pt.x,
            pt.y + floatY,
            sphere.radius,
            accumulatedTime + sIdx,
            sphere.isHero,
            pulseSurge
          );
        });
      }

      // ------------------------------------------------------------
      // 4. TRAVELING CURRENT PULSES (FORMIUM CRIMSON DATA PHOTONS)
      // ------------------------------------------------------------
      pulses.forEach((pulse) => {
        // Speed reacts to scroll kinetic energy
        const effectiveSpeed = pulse.speed * (1.0 + pulseSurge * 2.2);
        pulse.t = (pulse.t + effectiveSpeed * delta) % 1;

        // Render pulse across currently visible active tiers
        for (let tIdx = minTierIndex; tIdx <= maxTierIndex; tIdx++) {
          const tierDataIdx = ((tIdx % TIERS.length) + TIERS.length) % TIERS.length;
          if (tierDataIdx !== pulse.tierIdx) continue;

          const metric = tiersPrepared[tierDataIdx].preparedPaths[pulse.pathIdx];
          if (!metric) continue;

          // Draw tapered crimson comet trail
          const trailSteps = 6;
          for (let s = trailSteps; s >= 1; s--) {
            const trailT = pulse.t - (s / trailSteps) * pulse.length;
            const normPt = getPointAlongPath(metric, trailT);
            const screenPt = toScreen(normPt.x, normPt.y, tIdx, 1.0);

            const trailAlpha = (1 - s / trailSteps) * 0.65;
            const trailRadius = pulse.size * (1 - (s / trailSteps) * 0.6);

            ctx.beginPath();
            ctx.arc(screenPt.x, screenPt.y, trailRadius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(230, 0, 35, ${trailAlpha})`;
            ctx.fill();
          }

          // Pulse Head: Radiant Formium Crimson with pure white core
          const headNorm = getPointAlongPath(metric, pulse.t);
          const headPt = toScreen(headNorm.x, headNorm.y, tIdx, 1.0);

          ctx.save();
          ctx.shadowColor = '#e60023';
          ctx.shadowBlur = 8 + pulseSurge * 8;
          ctx.beginPath();
          ctx.arc(headPt.x, headPt.y, pulse.size + pulseSurge * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = '#e60023';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(headPt.x, headPt.y, pulse.size * 0.55, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();
          ctx.restore();
        }
      });

      // ------------------------------------------------------------
      // 5. AMBIENT FLOATING DATA PARTICLES
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
        ctx.arc(p.x, p.y - (smoothScrollY * 0.15) % height, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230, 0, 35, ${Math.max(0.04, pulseAlpha * 0.6)})`;
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
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
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
