import React, { useRef, useEffect, useContext } from 'react';
import { ParallaxContext } from '../../hooks/useParallaxController';

/**
 * ParallaxBackdrop
 * Section-level background canvas container.
 * Absolutely positioned, pointer-events-none, strictly aria-hidden.
 */
export function ParallaxBackdrop({ children, registerLayer, unregisterLayer, className = '' }) {
  return (
    <ParallaxContext.Provider value={{ registerLayer, unregisterLayer }}>
      <div
        className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
        aria-hidden="true"
      >
        {children}
      </div>
    </ParallaxContext.Provider>
  );
}

/**
 * ParallaxLayer
 * GPU-accelerated motion plane element.
 * Applies translate3d(x, y, 0) based on speed, direction, and cursorFactor.
 */
export function ParallaxLayer({
  speed = 0.12,
  cursorFactor = 0,
  cursorXDir = 1,
  cursorYDir = 1,
  direction = 1,
  className = '',
  style = {},
  children,
}) {
  const layerRef = useRef(null);
  const context = useContext(ParallaxContext);

  useEffect(() => {
    if (!context || !context.registerLayer || !layerRef.current) return;

    const layerConfig = {
      el: layerRef.current,
      speed,
      cursorFactor,
      cursorXDir,
      cursorYDir,
      direction,
    };

    context.registerLayer(layerConfig);

    return () => {
      if (context.unregisterLayer && layerRef.current) {
        context.unregisterLayer(layerRef.current);
      }
    };
  }, [context, speed, cursorFactor, cursorXDir, cursorYDir, direction]);

  return (
    <div
      ref={layerRef}
      className={`absolute will-change-transform ${className}`}
      style={{
        transform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/**
 * LiquidBlob
 * Soft, fluid blurred gradient orb matching Citepoint's abyssal and gold palette.
 */
export function LiquidBlob({
  color = 'gold',
  size = 'w-[500px] h-[500px]',
  opacity = 0.35,
  blur = 'blur-[80px]',
  className = '',
}) {
  const gradientMap = {
    gold: 'radial-gradient(circle, rgba(94, 106, 210, 0.22) 0%, rgba(94, 106, 210, 0.05) 50%, transparent 70%)',
    cyan: 'radial-gradient(circle, rgba(130, 143, 255, 0.18) 0%, rgba(94, 106, 210, 0.04) 50%, transparent 70%)',
    blue: 'radial-gradient(circle, rgba(94, 106, 210, 0.20) 0%, transparent 70%)',
    lavender: 'radial-gradient(circle, rgba(130, 143, 255, 0.16) 0%, rgba(94, 106, 210, 0.03) 50%, transparent 70%)',
    kelp: 'radial-gradient(circle, rgba(20, 21, 22, 0.6) 0%, transparent 70%)',
  };

  const bg = gradientMap[color] || gradientMap.gold;

  return (
    <div
      className={`rounded-full pointer-events-none ${size} ${blur} ${className}`}
      style={{
        background: bg,
        opacity,
      }}
    />
  );
}

/**
 * CitationDot
 * Linear signal point with soft lavender halo.
 */
export function CitationDot({
  color = 'gold',
  size = 5,
  pulse = true,
  className = '',
}) {
  const colorMap = {
    gold: {
      core: '#5e6ad2',
      halo: 'rgba(94, 106, 210, 0.25)',
      shadow: '0 0 10px rgba(94, 106, 210, 0.45)',
    },
    cyan: {
      core: '#828fff',
      halo: 'rgba(130, 143, 255, 0.25)',
      shadow: '0 0 10px rgba(130, 143, 255, 0.45)',
    },
    lavender: {
      core: '#5e6ad2',
      halo: 'rgba(94, 106, 210, 0.25)',
      shadow: '0 0 10px rgba(94, 106, 210, 0.45)',
    },
  };

  const c = colorMap[color] || colorMap.gold;

  return (
    <div
      className={`relative inline-flex items-center justify-center pointer-events-none ${className}`}
      style={{ width: size * 3, height: size * 3 }}
    >
      {/* Outer Halo */}
      <span
        className={`absolute rounded-full ${pulse ? 'animate-pulse' : ''}`}
        style={{
          width: size * 2.8,
          height: size * 2.8,
          backgroundColor: c.halo,
        }}
      />
      {/* Inner Core */}
      <span
        className="relative rounded-full"
        style={{
          width: size,
          height: size,
          backgroundColor: c.core,
          boxShadow: c.shadow,
        }}
      />
    </div>
  );
}

/**
 * OrbitalRing
 * Delicate hairline orbital ring with optional dash styling.
 */
export function OrbitalRing({
  size = 360,
  dash = true,
  color = 'gold',
  opacity = 0.25,
  className = '',
}) {
  const strokeColor = color === 'gold' ? '#34343a' : '#23252a';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      className={`pointer-events-none ${className}`}
      style={{ opacity }}
    >
      <circle
        cx="200"
        cy="200"
        r="185"
        fill="none"
        stroke={strokeColor}
        strokeWidth="1"
        strokeDasharray={dash ? '4 8' : 'none'}
      />
      <circle
        cx="200"
        cy="200"
        r="140"
        fill="none"
        stroke={strokeColor}
        strokeWidth="0.8"
        strokeDasharray={dash ? '2 6' : 'none'}
        opacity="0.6"
      />
    </svg>
  );
}

/**
 * DotGrid
 * Ultra-faint mathematical coordinate dot grid.
 */
export function DotGrid({
  width = '100%',
  height = '100%',
  dotSize = 1,
  spacing = 28,
  opacity = 0.04,
  color = '#34343a',
  className = '',
}) {
  const patternId = `dot-grid-pat-${spacing}-${dotSize}`;

  return (
    <svg
      width={width}
      height={height}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity }}
    >
      <defs>
        <pattern
          id={patternId}
          width={spacing}
          height={spacing}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={spacing / 2} cy={spacing / 2} r={dotSize} fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}

/**
 * NetworkLines
 * Subtle citation vector lines connecting abstract nodes.
 */
export function NetworkLines({
  color = 'gold',
  opacity = 0.15,
  className = '',
}) {
  const strokeColor = color === 'gold' ? 'rgba(94, 106, 210, 0.35)' : 'rgba(130, 143, 255, 0.35)';

  return (
    <svg
      viewBox="0 0 600 300"
      fill="none"
      className={`pointer-events-none ${className}`}
      style={{ opacity }}
    >
      <path
        d="M 50 180 Q 200 40 380 120 T 560 70"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeDasharray="3 5"
      />
      <path
        d="M 90 250 Q 280 160 450 220"
        stroke={strokeColor}
        strokeWidth="0.9"
        strokeDasharray="2 6"
        opacity="0.7"
      />
      {/* Node Vertices */}
      <circle cx="50" cy="180" r="3" fill="#5e6ad2" />
      <circle cx="380" cy="120" r="2.5" fill="#828fff" />
      <circle cx="560" cy="70" r="3" fill="#5e6ad2" />
      <circle cx="280" cy="160" r="2" fill="#828fff" />
      <circle cx="450" cy="220" r="2.5" fill="#5e6ad2" />
    </svg>
  );
}

/**
 * GlassBubble
 * Light-catching circular frosted glass bubble with specular highlight.
 */
export function GlassBubble({
  size = 90,
  opacity = 0.4,
  className = '',
}) {
  return (
    <div
      className={`rounded-full pointer-events-none border border-white/12 bg-white/[0.02] backdrop-blur-[2px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.25)] ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
      }}
    />
  );
}
