import React from 'react';
import LiquidServiceCard from './LiquidServiceCard';
import LiquidButton from './LiquidButton';
import { Check } from 'lucide-react';

export default function InteractiveEngagementCard({ eng, idx }) {
  return (
    <div className={`h-full flex flex-col ${eng.featured ? 'lg:-translate-y-2' : ''}`}>
      <LiquidServiceCard
        isActive={eng.featured}
        hasCaustic={eng.featured}
        hasGloss={true}
        className={`p-7 sm:p-9 flex flex-col justify-between h-full rounded-[26px] ${
          eng.featured
            ? 'border-brand-gold/60 shadow-[0_20px_60px_rgba(214,168,75,0.22)]'
            : 'border-white/12'
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-brand-gold">
                  // {eng.num}
                </span>
                <span className="text-[11px] uppercase tracking-wider font-mono font-semibold text-[#8FA8B5]">
                  {eng.label}
                </span>
              </div>
              {eng.badge && (
                <span className="px-3 py-1 rounded-full text-[10px] uppercase font-mono font-bold tracking-wider border border-brand-gold text-brand-gold bg-brand-gold/15 shadow-sm">
                  {eng.badge}
                </span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 text-white lg:min-h-[4rem] leading-snug">
              {eng.headline}
            </h3>

            <p className="text-xs sm:text-sm mb-6 leading-relaxed text-[#8FA8B5] lg:min-h-[4.25rem]">
              {eng.desc}
            </p>

            {/* Prominent Price Display */}
            {eng.price && (
              <div className="mb-6 pt-1 pb-5 border-b border-white/10">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-white">
                    {eng.price}
                  </span>
                  {eng.pricePeriod && (
                    <span className="text-xs uppercase font-mono tracking-wider font-semibold text-brand-gold">
                      {eng.pricePeriod}
                    </span>
                  )}
                </div>
                <div className="min-h-[1.25rem] mt-1.5">
                  {eng.priceNote && (
                    <p className="text-[11px] font-mono font-medium text-[#8FA8B5]">
                      // {eng.priceNote}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Feature Checklist */}
            <ul className="space-y-3 mb-8 text-xs sm:text-sm">
              {eng.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center text-brand-gold shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                  </span>
                  <span className="text-[#E6EDF3] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-white/10">
            <LiquidButton
              onClick={eng.action}
              variant={eng.featured ? 'primary' : 'secondary'}
              className="w-full py-3 text-xs justify-center"
            >
              {eng.ctaText}
            </LiquidButton>
            <p className="text-center text-[10px] font-mono mt-3 text-[#8FA8B5]">
              {eng.footer}
            </p>
          </div>
        </div>
      </LiquidServiceCard>
    </div>
  );
}

