import React, { useEffect, useRef } from 'react';

/**
 * CITEPOINT 3D SPIRAL GALAXY & COSMIC ATMOSPHERE
 * Sitewide deep-space canvas animation:
 * - 4-Arm Logarithmic Spiral Galaxy with central supermassive core
 * - Bioluminescent lavender phosphor (#828fff, #5e6ad2), starlight diamond (#ffffff), stellar gold (#d4a555)
 * - Deep interstellar starfield with twinkling distant stars
 * - Occasional subtle shooting stars / meteors streaking across the void
 * - Oblique 3D tilt perspective responding smoothly to cursor and page scroll
 * - Respects prefers-reduced-motion and document visibility
 */
export default function CitepointIntelligenceField() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animFrameId = useRef(null);

  const mousePos = useRef({ x: 0, y: 0 });
  const targetMouse = useRef({ x: 0, y: 0 });
  const scrollOffset = useRef(0);
  const targetScroll = useRef(0);

  const isTabVisible = useRef(true);
  const isReducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Detect reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    isReducedMotion.current = mediaQuery.matches;
    const handleMotionChange = (e) => {
      isReducedMotion.current = e.matches;
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    // Tab visibility
    const handleVisibility = () => {
      isTabVisible.current = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // Scroll listener for continuous depth travel
    const handleScroll = () => {
      targetScroll.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Gaussian random helper
    const gaussianRandom = (mean = 0, stdev = 1) => {
      let u = 1 - Math.random();
      let v = Math.random();
      let z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
      return z * stdev + mean;
    };

    // Initialize Galaxy Model
    let starsByColor = {
      '#ffffff': [],
      '#828fff': [],
      '#5e6ad2': [],
      '#d4a555': [],
      '#c4cbff': [],
    };
    const starColorKeys = ['#ffffff', '#828fff', '#5e6ad2', '#d4a555', '#c4cbff'];
    let backgroundStars = [];
    let shootingStars = [];

    const initGalaxy = () => {
      starsByColor = {
        '#ffffff': [],
        '#828fff': [],
        '#5e6ad2': [],
        '#d4a555': [],
        '#c4cbff': [],
      };
      backgroundStars = [];

      const GALAXY_RADIUS = Math.max(width, height) * 0.72;
      const ARM_COUNT = 4;
      const ARM_TWIST = 3.6; // How tightly arms wind
      const TOTAL_ARM_STARS = Math.min(1500, Math.floor((width * height) / 950));
      const TOTAL_CORE_STARS = 380;
      const TOTAL_BG_STARS = 320;

      // Color palette weights
      const pickStarColor = (distRatio, rand) => {
        // Core has more warm gold and bright white; outer arms have more lavender and deep indigo
        if (distRatio < 0.25) {
          if (rand < 0.40) return '#ffffff';
          if (rand < 0.75) return '#d4a555'; // Warm stellar gold
          return '#c4cbff';
        } else {
          if (rand < 0.45) return '#828fff'; // Lavender cosmic phosphor
          if (rand < 0.70) return '#5e6ad2'; // Deep brand indigo
          if (rand < 0.88) return '#ffffff'; // Diamond starlight
          return '#c4cbff'; // Icy stellar highlight
        }
      };

      // 1. Generate Spiral Arm Stars
      for (let i = 0; i < TOTAL_ARM_STARS; i++) {
        const armIndex = i % ARM_COUNT;
        const armAngle = (armIndex / ARM_COUNT) * Math.PI * 2;

        // Exponential distribution: denser near center
        const rFactor = Math.pow(Math.random(), 1.4);
        const r = 25 + rFactor * GALAXY_RADIUS;
        const distRatio = r / GALAXY_RADIUS;

        // Spiral angle with distance
        const spiralAngle = armAngle + Math.log(r / 20) * ARM_TWIST;

        // Spread perpendicular to arm
        const spread = (14 + distRatio * 75) * (0.6 + Math.random() * 0.8);
        const offsetX = gaussianRandom(0, spread);
        const offsetZ = gaussianRandom(0, spread);
        // Galactic disc thickness
        const offsetY = gaussianRandom(0, 18 + distRatio * 28);

        const x = Math.cos(spiralAngle) * r + offsetX;
        const z = Math.sin(spiralAngle) * r + offsetZ;
        const y = offsetY;

        const rand = Math.random();
        const color = pickStarColor(distRatio, rand);
        const starObj = {
          x,
          y,
          z,
          r,
          orbitalSpeed: 0.0006 + (1 - distRatio) * 0.0012, // Keplerian differential rotation
          angle: Math.atan2(z, x),
          color,
          baseSize: 0.9 + Math.random() * 1.5,
          twinkleSpeed: 0.02 + Math.random() * 0.03,
          twinklePhase: Math.random() * Math.PI * 2,
        };
        (starsByColor[color] || starsByColor['#ffffff']).push(starObj);
      }

      // 2. Generate Supermassive Dense Core Stars
      for (let i = 0; i < TOTAL_CORE_STARS; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = (Math.random() - 0.5) * Math.PI * 0.5;
        const r = Math.pow(Math.random(), 2.2) * (GALAXY_RADIUS * 0.22);

        const x = r * Math.cos(theta) * Math.cos(phi);
        const y = r * Math.sin(phi) * 0.6; // Flattened core spheroid
        const z = r * Math.sin(theta) * Math.cos(phi);

        const rand = Math.random();
        const color = rand < 0.45 ? '#ffffff' : rand < 0.75 ? '#d4a555' : '#828fff';
        const coreObj = {
          x,
          y,
          z,
          r,
          orbitalSpeed: 0.0015 + Math.random() * 0.001,
          angle: Math.atan2(z, x),
          color,
          baseSize: 1.1 + Math.random() * 1.6,
          twinkleSpeed: 0.03 + Math.random() * 0.04,
          twinklePhase: Math.random() * Math.PI * 2,
        };
        (starsByColor[color] || starsByColor['#ffffff']).push(coreObj);
      }

      // 3. Generate Distant Deep-Space Background Stars
      for (let i = 0; i < TOTAL_BG_STARS; i++) {
        backgroundStars.push({
          x: (Math.random() - 0.5) * width * 1.6,
          y: (Math.random() - 0.5) * height * 1.6,
          size: 0.6 + Math.random() * 1.2,
          alpha: 0.2 + Math.random() * 0.6,
          color: Math.random() < 0.65 ? '#ffffff' : Math.random() < 0.85 ? '#828fff' : '#d4a555',
          twinkleSpeed: 0.015 + Math.random() * 0.035,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    initGalaxy();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initGalaxy();
    };
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      targetMouse.current = {
        x: (e.clientX / width - 0.5) * 2,
        y: (e.clientY / height - 0.5) * 2,
      };
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Spawn shooting star periodically
    let lastShootingStarTime = performance.now();
    const maybeSpawnShootingStar = (time) => {
      if (isReducedMotion.current) return;
      if (time - lastShootingStarTime > 4000 + Math.random() * 6000) {
        lastShootingStarTime = time;
        const startX = Math.random() * width * 0.8;
        const startY = Math.random() * height * 0.35;
        const length = 100 + Math.random() * 120;
        const speed = 12 + Math.random() * 8;
        const angle = Math.PI * 0.25 + (Math.random() - 0.5) * 0.25;

        shootingStars.push({
          x: startX,
          y: startY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          length,
          life: 1.0,
          decay: 0.018 + Math.random() * 0.012,
          color: Math.random() < 0.6 ? '#828fff' : '#ffffff',
        });
      }
    };

    // Galactic tilt and rotation parameters
    let galaxyRot = 0;
    const baseTiltX = 1.08; // ~62 degrees oblique tilt
    const baseTiltY = 0.28; // ~16 degrees yaw

    let lastTime = performance.now();

    const render = (time) => {
      animFrameId.current = requestAnimationFrame(render);
      if (!isTabVisible.current) return;

      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Smooth mouse lerping
      mousePos.current.x += (targetMouse.current.x - mousePos.current.x) * 0.06;
      mousePos.current.y += (targetMouse.current.y - mousePos.current.y) * 0.06;

      // Smooth scroll lerping
      scrollOffset.current += (targetScroll.current - scrollOffset.current) * 0.08;

      if (!isReducedMotion.current) {
        galaxyRot += 0.0007; // Celestial galaxy rotation
        maybeSpawnShootingStar(time);
      }

      // 1. Draw Deep Cosmic Void Background
      ctx.fillStyle = '#010102';
      ctx.fillRect(0, 0, width, height);

      // Deep space atmospheric gradient
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        50,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.8
      );
      bgGrad.addColorStop(0, '#010102'); // Abyssal teal center
      bgGrad.addColorStop(0.65, '#0f1011'); // Liquid deep
      bgGrad.addColorStop(1, '#001211'); // Cosmic void outer edges
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Distant Twinkling Stars
      for (let i = 0; i < backgroundStars.length; i++) {
        const bgStar = backgroundStars[i];
        const twinkle = Math.sin(time * bgStar.twinkleSpeed + bgStar.twinklePhase);
        const alpha = Math.max(0.1, Math.min(1.0, bgStar.alpha + twinkle * 0.25));

        ctx.globalAlpha = alpha * 0.7;
        ctx.fillStyle = bgStar.color;
        ctx.beginPath();
        // Slight scroll drift for deep starfield
        const sx = width * 0.5 + bgStar.x;
        const sy = (height * 0.5 + bgStar.y - scrollOffset.current * 0.04) % (height * 1.5);
        const normY = sy < 0 ? sy + height * 1.5 : sy;
        ctx.arc(sx, normY, bgStar.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. 3D Spiral Galaxy Rendering
      // Dynamic center shifting gently with page scroll
      const centerX = width * 0.5 + mousePos.current.x * 20;
      const centerY = height * 0.48 + (Math.sin(scrollOffset.current * 0.0008) * 40) - (scrollOffset.current * 0.06);

      // 3D Oblique Projection Matrix
      const tiltX = baseTiltX + mousePos.current.y * 0.12;
      const tiltY = baseTiltY + mousePos.current.x * 0.15;

      const cosX = Math.cos(tiltX);
      const sinX = Math.sin(tiltX);
      const cosY = Math.cos(tiltY);
      const sinY = Math.sin(tiltY);

      const fov = 1100;

      // 4. Draw Ambient Galactic Nebula Glows
      const coreGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        10,
        centerX,
        centerY,
        Math.min(width, height) * 0.42
      );
      coreGlow.addColorStop(0, 'rgba(130, 143, 255, 0.28)'); // Luminous cyan core
      coreGlow.addColorStop(0.25, 'rgba(0, 130, 124, 0.20)'); // Teal dust
      coreGlow.addColorStop(0.55, 'rgba(212, 165, 85, 0.09)'); // Warm stellar gold ring
      coreGlow.addColorStop(0.75, 'rgba(253, 233, 255, 0.05)'); // Lavender envelope
      coreGlow.addColorStop(1, 'transparent');

      ctx.globalAlpha = 1.0;
      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, Math.min(width, height) * 0.45, 0, Math.PI * 2);
      ctx.fill();

      // 5. Project & Render Galaxy Stars (Batched by color group — 0 allocations per frame)
      for (let c = 0; c < starColorKeys.length; c++) {
        const color = starColorKeys[c];
        const stars = starsByColor[color];
        if (!stars || stars.length === 0) continue;

        ctx.fillStyle = color;

        for (let i = 0; i < stars.length; i++) {
          const p = stars[i];

          // Differential orbital rotation
          const currentAngle = p.angle + (!isReducedMotion.current ? galaxyRot * (p.orbitalSpeed * 1000) : 0);
          const starX = Math.cos(currentAngle) * p.r;
          const starZ = Math.sin(currentAngle) * p.r;
          const starY = p.y;

          // 3D Rotations (Yaw + Pitch)
          const x1 = starX * cosY - starZ * sinY;
          const z1 = starZ * cosY + starX * sinY;
          const y2 = starY * cosX - z1 * sinX;
          const z2 = z1 * cosX + starY * sinX;

          // Perspective division
          const scale = fov / (fov + z2);
          const projX = centerX + x1 * scale;
          const projY = centerY + y2 * scale;

          if (projX < -30 || projX > width + 30 || projY < -30 || projY > height + 30) continue;

          // Depth fading & twinkle
          const depthAlpha = Math.max(0.12, Math.min(0.95, (z2 + 600) / 1000));
          const twinkle = Math.sin(time * p.twinkleSpeed + p.twinklePhase) * 0.2;
          const finalAlpha = Math.max(0.1, Math.min(1.0, depthAlpha + twinkle));
          const size = Math.max(0.6, p.baseSize * scale);

          ctx.globalAlpha = finalAlpha;
          ctx.beginPath();
          ctx.arc(projX, projY, size, 0, Math.PI * 2);
          ctx.fill();

          // Extra luminous halo for largest bright stars
          if (size > 2.0) {
            ctx.globalAlpha = finalAlpha * 0.35;
            ctx.beginPath();
            ctx.arc(projX, projY, size * 2.2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // 6. Draw Shooting Stars / Meteors
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const m = shootingStars[i];
        m.x += m.vx;
        m.y += m.vy;
        m.life -= m.decay;

        if (m.life <= 0 || m.x > width + 100 || m.y > height + 100) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = m.x - (m.vx / Math.hypot(m.vx, m.vy)) * m.length;
        const tailY = m.y - (m.vy / Math.hypot(m.vx, m.vy)) * m.length;

        const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${m.life})`);
        grad.addColorStop(0.3, `rgba(130, 143, 255, ${m.life * 0.7})`);
        grad.addColorStop(1, 'transparent');

        ctx.globalAlpha = m.life;
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Glowing head
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(m.x, m.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameId.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ background: '#010102' }}
      />
    </div>
  );
}
