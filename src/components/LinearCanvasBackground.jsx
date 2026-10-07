import React from 'react';

/**
 * LinearCanvasBackground
 * 
 * Signature Linear technical dark canvas:
 * - Near-black surface (#010102)
 * - Faint top-center lavender illumination (#828fff at ~12% opacity)
 * - Subtle technical hairline grid masked with a radial falloff
 * - Crisp, quiet, and distraction-free
 */
export default function LinearCanvasBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#010102]"
      aria-hidden="true"
    >
      {/* 1. Linear Signature Lavender Top Illumination */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[580px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(94, 106, 210, 0.14) 0%, rgba(130, 143, 255, 0.05) 60%, transparent 100%)',
        }}
      />

      {/* 2. Technical Subtle Hairline Grid (64px intervals, masked) */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, black 20%, transparent 80%)',
        }}
      />
    </div>
  );
}
