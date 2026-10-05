import React, { useRef, useState } from 'react';

/**
 * LiquidServiceCard
 * Layered fluid liquid-glass card component with subtle 2-5px depth shift,
 * periodic gloss sweep, caustic underlay, and hover elevation.
 */
export default function LiquidServiceCard({
  children,
  className = '',
  hasCaustic = false,
  hasGloss = true,
  isActive = false,
  onClick,
  as: Component = 'div',
}) {
  const cardRef = useRef(null);
  const [depthShift, setDepthShift] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (typeof window === 'undefined') return;
    const card = cardRef.current;
    if (!card) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize -0.5 to 0.5
    const normX = (x / rect.width) - 0.5;
    const normY = (y / rect.height) - 0.5;

    // Subtle 2px to 5px depth shift
    setDepthShift({
      x: Number((normX * 6).toFixed(2)),
      y: Number((normY * 4).toFixed(2)),
    });
  };

  const handleMouseLeave = () => {
    setDepthShift({ x: 0, y: 0 });
  };

  return (
    <Component
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${depthShift.x}px, ${depthShift.y}px, 0)`,
      }}
      className={`group relative liquid-glass p-6 sm:p-8 rounded-[24px] overflow-hidden transition-all duration-300 ${
        isActive ? 'liquid-active-glow' : ''
      } ${className}`}
    >
      {/* Soft Caustic Light Underlay (Optional) */}
      {hasCaustic && <div className="liquid-caustic-underlay" aria-hidden="true" />}

      {/* Top Liquid Highlight */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none z-10"
      />

      {/* Moving Gloss Sheen (Occurs every 12-14s) */}
      {hasGloss && <div className="liquid-gloss-sheen" aria-hidden="true" />}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </Component>
  );
}
