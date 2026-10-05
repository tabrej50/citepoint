import React from 'react';

/**
 * LiquidMetricPill
 * Compact translucent liquid-glass pill component for metrics and key parameters.
 */
export default function LiquidMetricPill({ icon: Icon, label, value, accent = 'gold', className = '' }) {
  const isGold = accent === 'gold';
  const isCyan = accent === 'cyan';

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 liquid-glass-pill transition-all duration-200 hover:scale-[1.02] ${
        isGold
          ? 'hover:border-brand-gold/40 text-[#E6EDF3]'
          : isCyan
          ? 'hover:border-[#49B6D6]/40 text-[#E6EDF3]'
          : 'hover:border-white/20 text-[#8FA8B5]'
      } ${className}`}
    >
      {Icon && (
        <Icon
          className={`w-3.5 h-3.5 shrink-0 ${
            isGold ? 'text-brand-gold' : isCyan ? 'text-[#49B6D6]' : 'text-[#8FA8B5]'
          }`}
        />
      )}
      {value && (
        <span
          className={`font-mono text-xs font-bold ${
            isGold ? 'text-brand-gold' : isCyan ? 'text-[#7AD2EA]' : 'text-white'
          }`}
        >
          {value}
        </span>
      )}
      <span className="font-mono text-[11px] uppercase tracking-wider text-[#8FA8B5]">
        {label}
      </span>
    </div>
  );
}
