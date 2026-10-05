import React, { useRef, useEffect } from 'react';

/**
 * GlobalLiquidGlassBackdrop
 * 
 * Provides a realistic, subtle light response across the page surface:
 * - Soft localized reflection with natural inverse-square falloff.
 * - Gentle physical inertia (slightly lags behind the cursor with smooth momentum).
 * - NO visible circular ripples or animated waves (pure optical light behavior).
 * - Never looks like a glowing cursor; feels like natural light glancing across a polished glass surface.
 * - Completely fades out to 0 opacity when idle, leaving the website 100% original.
 * - Bypassed on touch devices and for users requesting reduced motion.
 */
export default function GlobalLiquidGlassBackdrop() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (prefersReducedMotion || !canHover) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = null;
    let width = window.innerWidth;
    let height = window.innerHeight;

    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;

    let masterOpacity = 0;
    let isMoving = false;
    let idleTimer = null;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      isMoving = true;

      // Update CSS variables for coordinated surface depth
      document.documentElement.style.setProperty('--mouse-x', `${targetX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${targetY}px`);

      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isMoving = false;
      }, 350);

      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const onMouseLeave = () => {
      isMoving = false;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });

    const render = () => {
      // Natural fade in during motion, smooth fade out when resting
      if (isMoving) {
        masterOpacity += (1.0 - masterOpacity) * 0.08;
      } else {
        masterOpacity += (0.0 - masterOpacity) * 0.05;
      }

      if (masterOpacity < 0.003 && !isMoving) {
        ctx.clearRect(0, 0, width, height);
        masterOpacity = 0;
        animationFrameId = null;
        return;
      }

      // Physical momentum: gentle viscous lag behind cursor
      currentX += (targetX - currentX) * 0.10;
      currentY += (targetY - currentY) * 0.10;

      ctx.clearRect(0, 0, width, height);

      // Soft physical reflection with realistic elliptical falloff
      const radiusX = 480;
      const radiusY = 320;
      const grad = ctx.createRadialGradient(
        0, 0, 0,
        0, 0, radiusX
      );
      // Whisper-soft optical reflection
      grad.addColorStop(0, `rgba(255, 255, 255, ${0.04 * masterOpacity})`);
      grad.addColorStop(0.3, `rgba(212, 175, 100, ${0.02 * masterOpacity})`);
      grad.addColorStop(0.7, `rgba(255, 255, 255, ${0.008 * masterOpacity})`);
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.save();
      ctx.translate(currentX, currentY);
      ctx.scale(1, radiusY / radiusX);
      ctx.beginPath();
      ctx.arc(0, 0, radiusX, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (idleTimer) clearTimeout(idleTimer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 w-full h-full z-20"
      style={{ display: 'block' }}
    />
  );
}
