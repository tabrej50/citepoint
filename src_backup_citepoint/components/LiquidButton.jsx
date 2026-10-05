import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * LiquidButton
 * Premium CTA button featuring liquid-glass aesthetics, inner liquid highlight,
 * optional magnetic pull, and gold accent styling.
 */
export default function LiquidButton({
  children,
  onClick,
  variant = 'primary', // 'primary' (gold fluid) | 'secondary' (dark liquid glass)
  magnetic = true,
  icon: Icon = ArrowRight,
  className = '',
  type = 'button',
  disabled = false,
}) {
  const btnRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!magnetic || typeof window === 'undefined') return;

    const btn = btnRef.current;
    if (!btn) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (prefersReducedMotion || !canHover) return;

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const btnCenterX = rect.left + rect.width / 2;
      const btnCenterY = rect.top + rect.height / 2;
      const distX = e.clientX - btnCenterX;
      const distY = e.clientY - btnCenterY;
      const dist = Math.hypot(distX, distY);

      // Trigger magnetic effect within 110px radius
      if (dist < 110) {
        const leanFactor = 0.22;
        const maxDisplacement = 10;
        const targetX = Math.max(-maxDisplacement, Math.min(maxDisplacement, distX * leanFactor));
        const targetY = Math.max(-maxDisplacement, Math.min(maxDisplacement, distY * leanFactor));
        setOffset({ x: Number(targetX.toFixed(2)), y: Number(targetY.toFixed(2)) });
      } else {
        setOffset({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setOffset({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [magnetic]);

  const isPrimary = variant === 'primary';

  return (
    <button
      ref={btnRef}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: 'transform 200ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 220ms ease, background 220ms ease',
      }}
      className={`relative group inline-flex items-center justify-center gap-2.5 px-6 py-3 font-heading font-semibold text-xs sm:text-sm tracking-wide rounded-full overflow-hidden select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#FCFBF8] transition-all duration-200 ${
        isPrimary
          ? 'text-[#071C2B] bg-gradient-to-r from-[#EAC978] via-[#D6A84B] to-[#EAC978] bg-[length:200%_auto] hover:bg-right border border-white/60 shadow-[0_8px_20px_rgba(214,168,75,0.25)] hover:shadow-[0_12px_28px_rgba(214,168,75,0.38)] hover:-translate-y-0.5'
          : 'text-[#071C2B] bg-white/75 hover:bg-white/95 backdrop-blur-xl border border-[#071C2B]/12 hover:border-brand-gold/60 shadow-[0_4px_16px_rgba(22,43,54,0.06)] hover:shadow-[0_8px_24px_rgba(22,43,54,0.12)] hover:-translate-y-0.5'
      } ${className}`}
    >
      {/* Top Liquid Highlight */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
      />

      {/* Button Text */}
      <span className="relative z-10">{children}</span>

      {/* Trailing Icon with smooth translation */}
      {Icon && (
        <Icon className="w-4 h-4 relative z-10 transform transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
      )}
    </button>
  );
}
