import React from 'react';
import { X } from 'lucide-react';

/**
 * LiquidModalPanel
 * Container for modals, lead forms, and structured input dialogs
 * wrapped in dark fluid liquid glass with ambient rim glow.
 */
export default function LiquidModalPanel({
  children,
  isOpen = true,
  onClose,
  title,
  subtitle,
  className = '',
}) {
  if (!isOpen) return null;

  return (
    <div className="relative w-full">
      <div
        className={`liquid-glass rounded-[28px] p-6 sm:p-10 border border-white/14 shadow-[0_24px_80px_rgba(0,0,0,0.5)] overflow-hidden ${className}`}
      >
        {/* Soft Caustic Underlay */}
        <div className="liquid-caustic-underlay" aria-hidden="true" />

        {/* Top Liquid Highlight */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none z-10"
        />

        {/* Header if title provided */}
        {(title || onClose) && (
          <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-white/10 relative z-10">
            <div>
              {subtitle && (
                <span className="font-mono text-xs uppercase tracking-wider text-brand-gold block mb-1">
                  // {subtitle}
                </span>
              )}
              {title && (
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                  {title}
                </h3>
              )}
            </div>

            {onClose && (
              <button
                onClick={onClose}
                className="p-2 rounded-full text-[#8FA8B5] hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold"
                aria-label="Close panel"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        )}

        {/* Modal/Form Body Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
