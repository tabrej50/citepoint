import React, { useEffect, useRef } from 'react';

/**
 * CosmicIntelligenceBackground
 *
 * Cinematic AI Citation & Neural Intelligence Background
 * Designed specifically for Citepoint:
 * - Fluid undulating dual-aurora light fields in brand lavender (#5e6ad2 / #828fff)
 * - Dynamic neural citation network with proximity connection threads
 * - Interactive cursor gravitational field with luminous hover aura
 * - Subtle technical coordinate crosshairs at 128px intervals
 * - Occasional high-speed shooting citation signals with tapered luminous tails
 * - Multi-layer parallax scroll response
 * - Zero CPU waste: pauses when tab is hidden, respects prefers-reduced-motion
 * - Pointer-events: none, high-performance Canvas 2D
 */

export default function CosmicIntelligenceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let rafId = null;
    let isRunning = false;
    let lastTime = performance.now();

    // Check prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Viewport metrics
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let isMobile = width < 768;

    // Mouse tracking with smooth lerp
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
      lastMoveTime: 0,
    };

    // Scroll tracking
    let scrollY = window.scrollY || window.pageYOffset || 0;
    let targetScrollY = scrollY;

    // --- NODE GRAPH CONFIGURATION ---
    // Scaled node count for optimal performance (fewer on mobile)
    const NODE_COUNT = isMobile ? 32 : Math.min(75, Math.floor((width * height) / 18000));
    const CONNECT_DIST = isMobile ? 85 : 120;
    const CONNECT_DIST_SQ = CONNECT_DIST * CONNECT_DIST;
    const MOUSE_RADIUS = isMobile ? 100 : 175;
    const MOUSE_RADIUS_SQ = MOUSE_RADIUS * MOUSE_RADIUS;

    // Palette tokens
    const NODE_COLORS = [
      { r: 255, g: 255, b: 255, hex: '#ffffff' },          // Starlight white
      { r: 130, g: 143, b: 255, hex: '#828fff' },          // Lavender phosphor
      { r: 94, g: 106, b: 210, hex: '#5e6ad2' },           // Brand primary indigo
      { r: 196, g: 203, b: 255, hex: '#c4cbff' },          // Ice lavender
    ];

    // Initialize Citation Nodes
    const createNodes = () => {
      const nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        const color = NODE_COLORS[Math.floor(Math.random() * NODE_COLORS.length)];
        const isHub = i % 7 === 0; // ~14% are larger citation hubs
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (isHub ? 0.22 : 0.38),
          vy: (Math.random() - 0.5) * (isHub ? 0.22 : 0.38),
          baseRadius: isHub ? Math.random() * 1.5 + 2.2 : Math.random() * 1.0 + 1.0,
          radius: 1.5,
          color,
          pulseSpeed: Math.random() * 0.03 + 0.015,
          pulsePhase: Math.random() * Math.PI * 2,
          isHub,
          glowSize: isHub ? 12 : 6,
          depth: Math.random() * 0.5 + 0.5, // 0.5 (far) to 1.0 (near)
        });
      }
      return nodes;
    };

    let nodes = createNodes();

    // --- SHOOTING CITATION STREAKS (METEORS) ---
    let shootingStars = [];
    let nextShootingStarTime = performance.now() + 2500;

    const spawnShootingStar = (time) => {
      const startX = Math.random() * (width * 0.8) + width * 0.1;
      const startY = Math.random() * (height * 0.4);
      const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.3; // Roughly 45 degrees downward
      const speed = Math.random() * 8 + 12; // Fast, elegant sweep
      const length = Math.random() * 70 + 80;

      shootingStars.push({
        x: startX,
        y: startY,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        length,
        opacity: 0,
        maxOpacity: Math.random() * 0.25 + 0.25,
        life: 0,
        maxLife: Math.random() * 25 + 45, // 45-70 frames
      });

      // Next spawn in 7 to 12 seconds
      nextShootingStarTime = time + Math.random() * 5000 + 7000;
    };

    // --- CANVAS RESIZE ---
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      isMobile = width < 768;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Re-boundary existing nodes if needed
      nodes.forEach((n) => {
        if (n.x > width) n.x = Math.random() * width;
        if (n.y > height) n.y = Math.random() * height;
      });
    };

    resizeCanvas();

    // --- EVENT LISTENERS ---
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
      mouse.lastMoveTime = performance.now();
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY || window.pageYOffset || 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // --- FRAME RENDERER ---
    const renderFrame = (now) => {
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      const timeSec = now * 0.001;

      // Smooth scroll lerp
      scrollY += (targetScrollY - scrollY) * 0.1;

      // Smooth mouse lerp
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.12;
        mouse.y += (mouse.targetY - mouse.y) * 0.12;
      }

      // Check if mouse idle > 3s
      const mouseIdle = now - mouse.lastMoveTime > 3000;
      const mouseAuraOpacity = mouse.active && !mouseIdle ? 1 : 0;

      // ============================================================
      // 1. CLEAR & FILL DEEP CANYON BLACK
      // ============================================================
      ctx.fillStyle = '#010102';
      ctx.fillRect(0, 0, width, height);

      // ============================================================
      // 2. LAYERED UNDULATING AURORA WAVES (ATMOSPHERIC DEPTH)
      // ============================================================
      const halfW = width * 0.5;
      const halfH = height * 0.5;

      // Aurora 1: Top-Right Luminous Lavender Wave (Breathes and floats gently)
      const a1Phase = timeSec * 0.28;
      const a1X = width * 0.65 + Math.sin(a1Phase) * (width * 0.12);
      const a1Y = height * 0.18 + Math.cos(a1Phase * 0.8) * (height * 0.08) - scrollY * 0.08;
      const a1Radius = Math.max(width * 0.55, 450);

      const a1Grad = ctx.createRadialGradient(a1X, a1Y, 20, a1X, a1Y, a1Radius);
      a1Grad.addColorStop(0, 'rgba(94, 106, 210, 0.14)');
      a1Grad.addColorStop(0.35, 'rgba(130, 143, 255, 0.05)');
      a1Grad.addColorStop(0.70, 'rgba(94, 106, 210, 0.015)');
      a1Grad.addColorStop(1, 'rgba(1, 1, 2, 0)');

      ctx.fillStyle = a1Grad;
      ctx.fillRect(0, 0, width, height);

      // Aurora 2: Lower-Left Secondary Celestial Glow
      const a2Phase = timeSec * 0.22 + 1.8;
      const a2X = width * 0.25 + Math.cos(a2Phase) * (width * 0.10);
      const a2Y = height * 0.68 + Math.sin(a2Phase * 0.7) * (height * 0.10) - scrollY * 0.05;
      const a2Radius = Math.max(width * 0.50, 400);

      const a2Grad = ctx.createRadialGradient(a2X, a2Y, 20, a2X, a2Y, a2Radius);
      a2Grad.addColorStop(0, 'rgba(130, 143, 255, 0.08)');
      a2Grad.addColorStop(0.40, 'rgba(94, 106, 210, 0.03)');
      a2Grad.addColorStop(1, 'rgba(1, 1, 2, 0)');

      ctx.fillStyle = a2Grad;
      ctx.fillRect(0, 0, width, height);

      // ============================================================
      // 3. INTERACTIVE CURSOR LUMINESCENT AURA
      // ============================================================
      if (mouse.active && mouseAuraOpacity > 0.01 && !isMobile) {
        const curGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 220);
        curGlow.addColorStop(0, 'rgba(130, 143, 255, 0.09)');
        curGlow.addColorStop(0.45, 'rgba(94, 106, 210, 0.03)');
        curGlow.addColorStop(1, 'rgba(1, 1, 2, 0)');

        ctx.fillStyle = curGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // ============================================================
      // 4. PRECISION COORDINATE CROSSHAIR GRID (LINEAR / VERCEL STYLE)
      // ============================================================
      const gridInterval = 128;
      const gridParallaxY = (scrollY * 0.06) % gridInterval;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.022)';
      ctx.lineWidth = 1;

      for (let gx = gridInterval; gx < width; gx += gridInterval) {
        for (let gy = gridInterval - gridParallaxY; gy < height; gy += gridInterval) {
          // Crosshair '+' mark at intersection
          ctx.beginPath();
          ctx.moveTo(gx - 3.5, gy);
          ctx.lineTo(gx + 3.5, gy);
          ctx.moveTo(gx, gy - 3.5);
          ctx.lineTo(gx, gy + 3.5);
          ctx.stroke();
        }
      }

      // ============================================================
      // 5. UPDATE & DRAW CITATION NEURAL GRAPH
      // ============================================================
      const parallaxScrollShift = scrollY * 0.15;

      // Update positions & physics
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Drift motion
        n.x += n.vx;
        n.y += n.vy;

        // Wrap around viewport edges smoothly
        if (n.x < -20) n.x = width + 20;
        else if (n.x > width + 20) n.x = -20;

        if (n.y < -20) n.y = height + 20;
        else if (n.y > height + 20) n.y = -20;

        // Pulsing radius for organic breathing effect
        n.pulsePhase += n.pulseSpeed;
        const pulse = Math.sin(n.pulsePhase) * 0.35 + 1.0;
        n.radius = n.baseRadius * pulse;

        // Interactive mouse gravity / avoidance
        if (mouse.active && !isMobile) {
          const dx = n.x - mouse.x;
          // Account for scroll parallax in mouse interaction
          const effectiveNodeY = (n.y - parallaxScrollShift * n.depth + height * 10) % height;
          const dy = effectiveNodeY - mouse.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < MOUSE_RADIUS_SQ && distSq > 1) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / MOUSE_RADIUS) * 0.85;
            // Push away gently
            n.x += (dx / dist) * force * 1.5;
            n.y += (dy / dist) * force * 1.5;
          }
        }
      }

      // Draw Proximity Connections (Graph Threads)
      ctx.lineWidth = 0.8;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        const ay = (a.y - parallaxScrollShift * a.depth + height * 10) % height;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const by = (b.y - parallaxScrollShift * b.depth + height * 10) % height;

          const dx = a.x - b.x;
          const dy = ay - by;
          const distSq = dx * dx + dy * dy;

          if (distSq < CONNECT_DIST_SQ) {
            const dist = Math.sqrt(distSq);
            // Proximity alpha: fades gracefully to 0 at CONNECT_DIST
            const alpha = Math.max(0, (1 - dist / CONNECT_DIST) * 0.16);

            ctx.beginPath();
            ctx.strokeStyle = `rgba(130, 143, 255, ${alpha})`;
            ctx.moveTo(a.x, ay);
            ctx.lineTo(b.x, by);
            ctx.stroke();
          }
        }
      }

      // Draw Nodes & Hub Glows
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const ny = (n.y - parallaxScrollShift * n.depth + height * 10) % height;
        const c = n.color;

        // Hub outer atmospheric corona
        if (n.isHub) {
          const hubGlow = ctx.createRadialGradient(n.x, ny, 0, n.x, ny, n.glowSize * 2.2);
          hubGlow.addColorStop(0, `rgba(${c.r}, ${c.g}, ${c.b}, 0.25)`);
          hubGlow.addColorStop(0.5, `rgba(${c.r}, ${c.g}, ${c.b}, 0.06)`);
          hubGlow.addColorStop(1, 'rgba(1, 1, 2, 0)');

          ctx.fillStyle = hubGlow;
          ctx.beginPath();
          ctx.arc(n.x, ny, n.glowSize * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }

        // Core Node
        ctx.fillStyle = c.hex;
        ctx.beginPath();
        ctx.arc(n.x, ny, n.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // ============================================================
      // 6. HIGH-SPEED SHOOTING CITATION SIGNALS (METEORS)
      // ============================================================
      if (now > nextShootingStarTime) {
        spawnShootingStar(now);
      }

      for (let sIdx = shootingStars.length - 1; sIdx >= 0; sIdx--) {
        const s = shootingStars[sIdx];
        s.life++;
        s.x += s.dx;
        s.y += s.dy;

        // Fade in rapidly, then fade out
        if (s.life < 8) {
          s.opacity = (s.life / 8) * s.maxOpacity;
        } else {
          s.opacity = Math.max(0, (1 - (s.life - 8) / (s.maxLife - 8)) * s.maxOpacity);
        }

        if (s.life >= s.maxLife || s.x > width + 100 || s.y > height + 100) {
          shootingStars.splice(sIdx, 1);
          continue;
        }

        // Draw meteor streak with tapered tail
        const tailX = s.x - (s.dx / Math.hypot(s.dx, s.dy)) * s.length;
        const tailY = s.y - (s.dy / Math.hypot(s.dx, s.dy)) * s.length;

        const streakGrad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        streakGrad.addColorStop(0, 'rgba(130, 143, 255, 0)');
        streakGrad.addColorStop(0.7, `rgba(130, 143, 255, ${s.opacity * 0.5})`);
        streakGrad.addColorStop(1, `rgba(255, 255, 255, ${s.opacity})`);

        ctx.strokeStyle = streakGrad;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();

        // Tip spark
        ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // ============================================================
      // 7. RADIAL VIGNETTE MASK (KEEPS EDGES CALM & CONTRAST DEEP)
      // ============================================================
      const edgeVignette = ctx.createRadialGradient(
        halfW, halfH, Math.min(width, height) * 0.45,
        halfW, halfH, Math.max(width, height) * 0.75
      );
      edgeVignette.addColorStop(0, 'rgba(1, 1, 2, 0)');
      edgeVignette.addColorStop(1, 'rgba(1, 1, 2, 0.45)');

      ctx.fillStyle = edgeVignette;
      ctx.fillRect(0, 0, width, height);
    };

    // --- ANIMATION LOOP MANAGEMENT ---
    const tick = (now) => {
      renderFrame(now);
      rafId = requestAnimationFrame(tick);
    };

    const startAnimation = () => {
      if (!isRunning) {
        isRunning = true;
        lastTime = performance.now();
        rafId = requestAnimationFrame(tick);
      }
    };

    const stopAnimation = () => {
      if (isRunning) {
        isRunning = false;
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    // Visibility Listener: pause on background tab
    const handleVisibility = () => {
      if (document.hidden) {
        stopAnimation();
      } else {
        startAnimation();
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    // Reduced motion listener
    const handleMotion = (e) => {
      if (e.matches) {
        stopAnimation();
        renderFrame(1000); // Draw single quiet static frame
      } else {
        startAnimation();
      }
    };

    motionQuery.addEventListener('change', handleMotion);

    // Start
    if (motionQuery.matches) {
      renderFrame(1000);
    } else {
      startAnimation();
    }

    return () => {
      stopAnimation();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibility);
      motionQuery.removeEventListener('change', handleMotion);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none select-none z-0"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
}
