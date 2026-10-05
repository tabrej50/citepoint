import React, { useState } from 'react';
import { ChevronDown, ShieldCheck } from 'lucide-react';

/**
 * LiquidFaqAccordion
 * Light liquid-glass FAQ accordion component with smooth expansion,
 * top liquid highlights, and gold active glow indicators.
 */
export default function LiquidFaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is Generative Engine Optimization (GEO)?',
      a: 'Generative Engine Optimization (GEO) is the discipline of optimizing your brand’s presence, authoritative data sources, and structured digital footprint so that large language models (LLMs) and conversational AI engines understand, cite, and recommend your company in generated answers.',
    },
    {
      q: 'How is GEO different from traditional SEO?',
      a: 'Traditional SEO optimizes for keyword positions on a page of ten clickable blue links. GEO optimizes for synthesis, consensus, and direct citation within natural language answers. It focuses on entity authority, third-party source corroboration, citation network inclusion, and semantic brand alignment across AI knowledge models.',
    },
    {
      q: 'Can Citepoint guarantee a #1 ranking or recommendation in AI answers?',
      a: 'No credible company can guarantee a fixed ranking or recommendation in AI-generated answers. Citepoint identifies controllable opportunities, improves authority and citation readiness, and reports progress transparently.',
      isGuaranteeQuestion: true,
    },
    {
      q: 'Which AI search engines and platforms do you optimize for?',
      a: 'Citepoint audits and optimizes across the five major conversational engines: ChatGPT (Search & GPT-4o), Perplexity AI, Google Gemini, Anthropic Claude, and Google AI Overviews.',
    },
    {
      q: 'How long does it take to see results in AI search engines?',
      a: 'Initial diagnostic audits and actionable blueprints are delivered in 5 to 7 business days. Citation shifts and recommendation improvements typically emerge over 30 to 90 days as AI search models refresh their retrieval indexes, ingest updated authoritative sources, and update synthetic consensus.',
    },
    {
      q: 'Does GEO replace our existing SEO, PR, or content team?',
      a: 'Not at all. GEO works alongside your internal marketing, PR, and SEO teams. We identify the specific knowledge gaps, unlinked brand references, and citation hubs that AI engines rely on, providing concrete architectural guidance that makes your content and PR efforts dramatically more effective in AI retrieval.',
    },
    {
      q: 'What do you need from our team to start an audit?',
      a: 'We require only your domain, your primary commercial categories, top 3 to 5 core competitors, and 30 minutes with your growth or product marketing lead to understand your highest-value buyer questions.',
    },
    {
      q: 'How does Citepoint measure AI search visibility without standard keyword volume?',
      a: 'We measure through deterministic prompt testing, citation frequency analysis, source attribution graphing, sentiment consensus scoring, and competitive share-of-voice benchmarks across recurring buyer prompts across all five major AI engines.',
    },
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className={`liquid-glass rounded-[20px] transition-all duration-300 overflow-hidden border ${
              isOpen
                ? 'border-brand-gold/50 shadow-[0_12px_36px_rgba(214,168,75,0.12)] bg-white/90'
                : 'border-white/90 hover:border-brand-gold/30 bg-white/60'
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              <span className="font-heading font-semibold text-sm sm:text-base text-[#071C2B] flex items-center gap-2.5">
                {faq.isGuaranteeQuestion && (
                  <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                )}
                {faq.q}
              </span>
              <span
                className={`p-1.5 rounded-full border transition-all duration-200 shrink-0 ${
                  isOpen
                    ? 'bg-brand-gold text-[#071C2B] border-brand-gold rotate-180'
                    : 'bg-white/80 text-[#657581] border-[#071C2B]/10'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#657581] leading-relaxed border-t border-[#071C2B]/6">
                {faq.isGuaranteeQuestion ? (
                  <div className="p-4 rounded-xl bg-brand-gold/10 border border-brand-gold/25 text-[#071C2B] font-medium leading-relaxed">
                    {faq.a}
                  </div>
                ) : (
                  <p>{faq.a}</p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

