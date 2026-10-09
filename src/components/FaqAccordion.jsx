import React, { useState } from 'react';
import { ChevronDown, ShieldCheck } from 'lucide-react';

/**
 * Auros Abyssal FAQ Accordion
 * - Liquid Kelp (#141516) panels with 16px radius.
 * - No drop shadows.
 * - Platinum (#ffffff) question headings at weight 500.
 * - Silver Mist (#8a8f98) answer text.
 */
export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is GEO?',
      a: 'GEO, or Generative Engine Optimization, is the practice of improving how a brand is understood, retrieved, cited, and recommended in AI-generated answers.',
    },
    {
      q: 'How is GEO different from SEO?',
      a: 'SEO focuses primarily on visibility in traditional search results. GEO includes AI-generated answers, citation sources, entity understanding, answer retrieval, and the broader authority signals that influence recommendation.',
    },
    {
      q: 'Can you guarantee that AI will recommend us first?',
      a: 'No credible agency can guarantee a fixed position in AI-generated answers. We can establish a baseline, identify controllable opportunities, improve relevant authority signals, and measure changes transparently.',
      isGuarantee: true,
    },
    {
      q: 'How quickly can we see results?',
      a: 'Timing depends on your category, authority, competition, technical foundation, and publishing velocity. The first phase is usually focused on establishing a baseline and implementing the highest-priority improvements.',
    },
    {
      q: 'Do you work with international companies?',
      a: 'Yes. Citepoint is designed for remote delivery and can work with companies in India, the United States, the United Kingdom, Europe, the UAE, and other international markets.',
    },
    {
      q: 'Do you replace SEO?',
      a: 'No. GEO should complement a strong search, content, PR, and brand strategy. We help connect those activities to the way AI-driven discovery is evolving.',
    },
    {
      q: 'What do you need from our team?',
      a: 'We typically need access to existing content and analytics, a primary stakeholder, subject-matter access, and timely review of recommendations.',
    },
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4 font-sans">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className={`surface-card !p-0 overflow-hidden transition-all duration-300 group ${
              isOpen
                ? '!border-[#C5A059] !shadow-[0_8px_24px_rgba(197,160,89,0.12),inset_0_1px_0_#FFFFFF]'
                : 'hover:!border-[#C5A059]/40'
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] cursor-pointer"
            >
              <span className="font-heading font-semibold text-base text-[#0F1012] flex items-center gap-2.5 transition-colors duration-200 group-hover:text-[#A67D28]">
                {faq.isGuarantee && (
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                )}
                {faq.q}
              </span>
              <span
                className={`w-8 h-8 rounded-[8px] border border-[#EADBBE] flex items-center justify-center transition-all duration-300 shrink-0 group-hover:scale-105 ${
                  isOpen
                    ? 'bg-[#FAF8F5] text-[#C5A059] rotate-180 border-[#C5A059] shadow-sm'
                    : 'bg-white text-[#636773]'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            <div
              className={`accordion-grid-wrapper ${isOpen ? 'is-open' : ''}`}
            >
              <div className="accordion-grid-inner">
                <div className="px-6 pb-6 pt-1 text-sm text-[#4B4F58] leading-relaxed border-t border-[#EADBBE]">
                  {faq.isGuarantee ? (
                    <div className="p-4 rounded-[8px] bg-[#FAF8F5] border border-[#C5A059]/30 text-[#0F1012] font-normal leading-relaxed">
                      {faq.a}
                    </div>
                  ) : (
                    <p>{faq.a}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
