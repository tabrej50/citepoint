import React from 'react';

/**
 * TerminalBracketButton (maintains MagneticButton export for complete backward compatibility)
 * 
 * Monospace bracket-style text button:
 * - Bracket-style text format: [ TEXT ]
 * - Plain 1px border, transparent background (no fill)
 * - On hover: inverts to filled background with dark text (#070A0E)
 * - Strictly zero glow, zero lift, zero magnetic cursor pull
 */
export default function MagneticButton({
  children,
  className = '',
  style = {},
  onClick,
  as: Component = 'button',
  variant = 'gold', // 'gold' | 'muted'
  showBrackets = true,
  ...props
}) {
  // Strip rounded-full, shadow, or gradient classes from legacy usage
  const cleanClassName = className
    .replace(/\brounded-(?:xl|2xl|3xl|full)\b/g, 'rounded-[2px]')
    .replace(/\bshadow-(?:sm|md|lg|xl|2xl)\b/g, '')
    .replace(/\bhover:-translate-y-\S+\b/g, '')
    .replace(/\bhover:shadow-\S+\b/g, '')
    .replace(/\bglass\S*\b/g, '')
    .replace(/\bbg-gold-gradient\b/g, '');

  const isMuted = variant === 'muted';

  const baseTheme = isMuted
    ? 'border-[#1E293B] text-[#8B949E] bg-transparent hover:border-[#8B949E] hover:text-[#E6EDF3] hover:bg-white/[0.05]'
    : 'border-brand-gold text-brand-gold bg-transparent hover:bg-brand-gold hover:text-[#070A0E]';

  return (
    <Component
      onClick={onClick}
      style={style}
      className={`inline-flex items-center justify-center font-mono font-medium text-xs tracking-wider uppercase border rounded-[2px] transition-colors duration-120 cursor-pointer select-none px-4 py-2.5 ${baseTheme} ${cleanClassName}`}
      {...props}
    >
      {showBrackets && <span className="opacity-60 mr-1 select-none font-mono">[</span>}
      <span className="inline-flex items-center gap-1.5">{children}</span>
      {showBrackets && <span className="opacity-60 ml-1 select-none font-mono">]</span>}
    </Component>
  );
}
