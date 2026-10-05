import React from 'react';

/**
 * TerminalCard (maintains TiltCard export for complete backward compatibility)
 * 
 * Monospace terminal-inspired card system:
 * - Solid 1px border (#1E293B)
 * - Near-zero border radius (2px)
 * - Decorative absolute-positioned ASCII corner glyphs (+ at each corner)
 * - Subtle transition to gold accent border on hover
 * - Strictly zero 3D tilt, zero perspective, zero glass blur, zero drop shadows
 */
export default function TiltCard({
  children,
  className = '',
  style = {},
  isDark,
  as: Component = 'div',
  onClick,
  showCorners = true,
  ...props
}) {
  // Normalize className: replace heavy rounded classes with 2px, remove overflow-hidden so corner '+' markers render crisp
  const hasOverflowHidden = className.includes('overflow-hidden');
  const safeClassName = className
    .replace(/\brounded-(?:xl|2xl|3xl|full)\b/g, 'rounded-[2px]')
    .replace(/\bshadow-(?:sm|md|lg|xl|2xl)\b/g, '');

  return (
    <Component
      onClick={onClick}
      style={style}
      className={`group/card relative bg-[#0D1117] border border-[#1E293B] hover:border-brand-gold/70 rounded-[2px] transition-colors duration-150 ${safeClassName}`}
      {...props}
    >
      {/* Decorative absolute-positioned ASCII corner glyphs: + at each corner */}
      {showCorners && (
        <>
          <span
            className="absolute -top-[7px] -left-[4.5px] text-[#8B949E]/50 group-hover/card:text-brand-gold font-mono text-[11px] leading-none select-none pointer-events-none z-10 transition-colors"
            aria-hidden="true"
          >
            +
          </span>
          <span
            className="absolute -top-[7px] -right-[4.5px] text-[#8B949E]/50 group-hover/card:text-brand-gold font-mono text-[11px] leading-none select-none pointer-events-none z-10 transition-colors"
            aria-hidden="true"
          >
            +
          </span>
          <span
            className="absolute -bottom-[7px] -left-[4.5px] text-[#8B949E]/50 group-hover/card:text-brand-gold font-mono text-[11px] leading-none select-none pointer-events-none z-10 transition-colors"
            aria-hidden="true"
          >
            +
          </span>
          <span
            className="absolute -bottom-[7px] -right-[4.5px] text-[#8B949E]/50 group-hover/card:text-brand-gold font-mono text-[11px] leading-none select-none pointer-events-none z-10 transition-colors"
            aria-hidden="true"
          >
            +
          </span>
        </>
      )}
      {children}
    </Component>
  );
}
