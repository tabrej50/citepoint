import React from 'react';

/**
 * TerminalDivider
 * 
 * Monospace repeated-character rule divider:
 * Displays a clean ASCII rule like "+---------------------------------------------------+"
 * Responsive, overflow-hidden, subtle slate styling.
 */
export default function TerminalDivider({ className = '', char = '-' }) {
  return (
    <div
      className={`w-full text-[#1E293B] select-none font-mono text-xs overflow-hidden whitespace-nowrap flex items-center justify-between py-6 ${className}`}
      aria-hidden="true"
    >
      <span className="text-[#8B949E]/50 font-mono text-xs leading-none shrink-0">+</span>
      <span className="flex-1 overflow-hidden tracking-widest text-center opacity-40 px-2 leading-none">
        ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </span>
      <span className="text-[#8B949E]/50 font-mono text-xs leading-none shrink-0">+</span>
    </div>
  );
}
