import React, { useRef, useEffect } from 'react';

/**
 * LiquidGlassNavbarSurface
 * 
 * Simulates realistic optical liquid behavior inside the floating glass capsule:
 * 1. Ambient undulating liquid caustic waves across the internal volume.
 * 2. Interactive water droplet ripples emanating outward on mouse motion.
 * 3. Viscous specular cursor spotlight with gentle momentum.
 * 4. Dual top & bottom beveled meniscus light tracking cursor movement.
 * 5. GPU-accelerated canvas with RAF auto-sleep on tab hide.
 */
export default function LiquidGlassNavbarSurface({ containerRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef?.current;
    if (!canvas || !container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = null;
    let width = 0;
    let height = 0;

    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;

    let masterOpacity = 0;
    let isHovering = false;
    let time = 0;

    // Interactive ripples collection
    let ripples = [];
    let lastRippleX = -1000;
    let lastRippleY = -1000;

    let isVisible = !document.hidden;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (width === 0 || height === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);

    const handleMouseEnter = (e) => {
      isHovering = true;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      targetX = x;
      targetY = y;
      currentX = x;
      currentY = y;
    };

    const handleMouseMove = (e) => {
      isHovering = true;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      targetX = x;
      targetY = y;

      // Spawn subtle water ripple when moving across navbar
      if (!prefersReducedMotion && canHover) {
        const dist = Math.hypot(x - lastRippleX, y - lastRippleY);
        if (dist > 24 && ripples.length < 9) {
          ripples.push({
            x,
            y,
            radius: 3,
            maxRadius: Math.min(width * 0.22, 85),
            opacity: 0.32,
            speed: 1.5,
          });
          lastRippleX = x;
          lastRippleY = y;
        }
      }
    };

    const handleMouseLeave = () => {
      isHovering = false;
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && !animationFrameId) {
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = () => {
      if (!isVisible) {
        animationFrameId = null;
        return;
      }

      // Smooth hover fade in/out
      if (isHovering) {
        masterOpacity += (1.0 - masterOpacity) * 0.12;
      } else {
        masterOpacity += (0.0 - masterOpacity) * 0.06;
      }

      // Smooth inertia: lag behind cursor with viscous fluidity
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      ctx.clearRect(0, 0, width, height);

      // ============================================================
      // 1. AMBIENT LIQUID CAUSTIC WAVES (CONTINUOUS FLUID WATER SHEEN)
      // ============================================================
      if (!prefersReducedMotion) {
        time += 0.024;

        // Fluid Wave 1: Gentle cyan-tinted caustic wave
        ctx.save();
        ctx.beginPath();
        const waveY1 = height * 0.52;
        ctx.moveTo(0, height);
        for (let x = 0; x <= width; x += 8) {
          const y = waveY1 + Math.sin(x * 0.015 + time) * 4.5 + Math.cos(x * 0.026 - time * 0.7) * 2.5;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.closePath();
        const waveGrad1 = ctx.createLinearGradient(0, waveY1 - 8, 0, height);
        waveGrad1.addColorStop(0, 'rgba(130, 143, 255, 0.055)');
        waveGrad1.addColorStop(0.5, 'rgba(255, 255, 255, 0.03)');
        waveGrad1.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = waveGrad1;
        ctx.fill();
        ctx.restore();

        // Fluid Wave 2: Counter-undulating gold caustic refraction wave
        ctx.save();
        ctx.beginPath();
        const waveY2 = height * 0.44;
        ctx.moveTo(0, height);
        for (let x = 0; x <= width; x += 8) {
          const y = waveY2 + Math.sin(x * 0.022 - time * 1.1) * 3.5 + Math.cos(x * 0.013 + time * 0.8) * 2.5;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.closePath();
        const waveGrad2 = ctx.createLinearGradient(0, waveY2 - 6, 0, height);
        waveGrad2.addColorStop(0, 'rgba(214, 168, 75, 0.045)');
        waveGrad2.addColorStop(0.5, 'rgba(255, 255, 255, 0.025)');
        waveGrad2.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = waveGrad2;
        ctx.fill();
        ctx.restore();
      }

      // ============================================================
      // 2. INTERACTIVE EXPANDING WATER RIPPLES
      // ============================================================
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.speed *= 0.985;
        r.opacity *= 0.955;

        if (r.opacity < 0.01 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        // Primary water ripple ring
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${r.opacity * 0.45})`;
        ctx.lineWidth = 1.4;
        ctx.stroke();

        // Secondary cyan refraction ring
        ctx.beginPath();
        ctx.arc(r.x, r.y, Math.max(1, r.radius - 2.5), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(130, 143, 255, ${r.opacity * 0.30})`;
        ctx.lineWidth = 1.0;
        ctx.stroke();
        ctx.restore();
      }

      // ============================================================
      // 3. VISCOUS LIQUID CURSOR SPOTLIGHT & MENISCUS HIGHLIGHT
      // ============================================================
      if (masterOpacity > 0.008) {
        // Fluid specular light pool
        const spotWidth = 280;
        const spotGrad = ctx.createRadialGradient(
          currentX, currentY, 0,
          currentX, currentY, spotWidth
        );
        spotGrad.addColorStop(0, `rgba(255, 255, 255, ${0.15 * masterOpacity})`);
        spotGrad.addColorStop(0.22, `rgba(130, 143, 255, ${0.08 * masterOpacity})`);
        spotGrad.addColorStop(0.55, `rgba(214, 168, 75, ${0.045 * masterOpacity})`);
        spotGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.save();
        ctx.translate(currentX, currentY);
        ctx.scale(1.3, 0.48);
        ctx.beginPath();
        ctx.arc(0, 0, spotWidth, 0, Math.PI * 2);
        ctx.fillStyle = spotGrad;
        ctx.fill();
        ctx.restore();

        // Top beveled meniscus light rim
        const meniscusSpan = 180;
        const mLeft = Math.max(0, currentX - meniscusSpan);
        const mRight = Math.min(width, currentX + meniscusSpan);

        if (mRight > mLeft) {
          const topMeniscus = ctx.createLinearGradient(mLeft, 0, mRight, 0);
          topMeniscus.addColorStop(0, 'rgba(255, 255, 255, 0)');
          topMeniscus.addColorStop(0.25, `rgba(130, 143, 255, ${0.15 * masterOpacity})`);
          topMeniscus.addColorStop(0.5, `rgba(255, 255, 255, ${0.42 * masterOpacity})`);
          topMeniscus.addColorStop(0.75, `rgba(214, 168, 75, ${0.15 * masterOpacity})`);
          topMeniscus.addColorStop(1, 'rgba(255, 255, 255, 0)');

          ctx.fillStyle = topMeniscus;
          ctx.fillRect(mLeft, 0, mRight - mLeft, 1.8);

          // Bottom beveled rim refraction
          const btmMeniscus = ctx.createLinearGradient(mLeft, 0, mRight, 0);
          btmMeniscus.addColorStop(0, 'rgba(130, 143, 255, 0)');
          btmMeniscus.addColorStop(0.5, `rgba(130, 143, 255, ${0.20 * masterOpacity})`);
          btmMeniscus.addColorStop(1, 'rgba(130, 143, 255, 0)');

          ctx.fillStyle = btmMeniscus;
          ctx.fillRect(mLeft, height - 1.6, mRight - mLeft, 1.6);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 w-full h-full rounded-full z-0"
      style={{ display: 'block' }}
    />
  );
}
