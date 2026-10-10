import React from 'react';
import { Search, Target, Layers, Database, FileText, CheckCircle2 } from 'lucide-react';
import AuditContactForm from '../components/AuditContactForm';
import { AiEngineIcon, AI_ENGINES } from '../components/AiEnginesRow';
import { SlideReveal, SlideStaggerContainer, SlideStaggerItem } from '../components/SlideReveal';

/**
 * Citepoint AuditPage
 * Apple-style minimal monochrome:
 * - Canvas: White (#FFFFFF) and Light Gray (#F5F5F7)
 * - Text: Near-black (#1D1D1F) and Gray (#6E6E73)
 * - Borders: Hairline (#D2D2D7)
 * - Primary CTA: Solid black (#1D1D1F) with white text
 * - Zero gradients, zero shadows, generous white space
 */
export default function AuditPage({ setCurrentRoute }) {
  const auditDeliverables = [
    {
      title: '5 Major AI Platforms Audited',
      desc: 'Simultaneous diagnostics across ChatGPT, Claude, Gemini, Perplexity, and Google AI Overviews using realistic enterprise buyer prompt clusters.',
      icon: Search,
      dir: 'diagonal-left',
    },
    {
      title: '10–15 Custom Buyer-Intent Prompts',
      desc: 'High-consideration category comparison, alternative, vendor shortlist, and pricing queries tailored specifically to your exact market niche.',
      icon: Target,
      dir: 'up',
    },
    {
      title: 'Top 3 Named Competitor Benchmark',
      desc: 'Empirical measurement of how frequently your direct competitors are recommended, cited, or favored over your company.',
      icon: Layers,
      dir: 'diagonal-right',
    },
    {
      title: 'Citation & Source Graph Analysis',
      desc: 'Identification of the exact third-party publications, review sites, and reference domains that AI retrieval engines weight for your category.',
      icon: Database,
      dir: 'diagonal-left',
    },
    {
      title: 'Inaccuracy & Visibility Gap Catalog',
      desc: 'Detailed flagging of hallucinated features, outdated pricing claims, omitted capabilities, and prompt scenarios where your brand is missing.',
      icon: FileText,
      dir: 'up',
    },
    {
      title: 'Prioritized 90-Day Action Roadmap',
      desc: 'Specific, sequenced blueprint of entity, schema, content, and external authority fixes your marketing and technical teams can execute immediately.',
      icon: CheckCircle2,
      dir: 'diagonal-right',
    },
  ];

  return (
    <div className="w-full bg-white text-[#1d1d1f] font-sans selection:bg-[#1d1d1f] selection:text-white">
      
      {/* Hero Header */}
      <section className="bg-white text-[#1d1d1f] pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 relative overflow-hidden border-b border-[#d2d2d7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SlideReveal direction="down" distance={38} duration={0.65}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7] text-xs font-semibold uppercase tracking-[0.14em] text-[#1d1d1f] mb-4">
              // DIAGNOSTIC ASSESSMENT
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[#1d1d1f] tracking-tight leading-[1.08] mb-6 [text-wrap:balance]">
              Get Your AI Visibility Audit
            </h1>
            <p className="text-base sm:text-lg text-[#6e6e73] leading-[1.6]">
              Understand how ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews currently perceive, cite, and recommend your brand for high-value buyer prompts.
            </p>
          </SlideReveal>

          {/* AI Platforms Logo Row */}
          <SlideReveal direction="up" distance={25} delay={0.15} duration={0.6}>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-6">
              {AI_ENGINES.map((engine) => (
                <div
                  key={engine.id}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] text-xs font-medium hover:border-[#1d1d1f] transition-colors"
                >
                  <AiEngineIcon id={engine.id} size={15} />
                  <span>{engine.name}</span>
                </div>
              ))}
            </div>
          </SlideReveal>
        </div>
      </section>

      {/* Deliverables Overview Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#d2d2d7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="left" distance={36} duration={0.65}>
            <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6e6e73] block mb-2">
                // AUDIT SPECIFICATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium text-[#1d1d1f] tracking-tight mb-3">
                What your diagnostic audit includes
              </h2>
              <p className="text-sm sm:text-base text-[#6e6e73] leading-[1.6]">
                Every audit delivers empirical prompt logs, competitor share-of-voice benchmarks, and a prioritized action roadmap.
              </p>
            </div>
          </SlideReveal>

          <SlideStaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {auditDeliverables.map((item, i) => {
              const Icon = item.icon;
              return (
                <SlideStaggerItem
                  key={i}
                  direction={item.dir}
                  className="p-6 lg:p-8 rounded-[24px] border border-[#d2d2d7] bg-[#f5f5f7] flex flex-col justify-between h-full group cursor-default transition-all duration-200 hover:border-[#1d1d1f]"
                >
                  <div>
                    <div className="w-9 h-9 rounded-full bg-white border border-[#d2d2d7] text-[#1d1d1f] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-4 h-4 text-[#1d1d1f]" />
                    </div>
                    <h3 className="text-lg font-medium text-[#1d1d1f] mb-2 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6e6e73] leading-[1.6]">
                      {item.desc}
                    </p>

                    {i === 0 && (
                      <div className="mt-4 pt-3 border-t border-[#d2d2d7] flex flex-wrap items-center gap-1.5">
                        {AI_ENGINES.map((e) => (
                          <div
                            key={e.id}
                            title={e.name}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-white border border-[#d2d2d7] text-[11px] text-[#1d1d1f]"
                          >
                            <AiEngineIcon id={e.id} size={12} />
                            <span>{e.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </SlideStaggerItem>
              );
            })}
          </SlideStaggerContainer>

        </div>
      </section>

      {/* Audit Request Form Section */}
      <section className="py-20 lg:py-28 bg-[#f5f5f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideReveal direction="scale-up" distance={30} duration={0.8}>
            <AuditContactForm />
          </SlideReveal>
        </div>
      </section>

    </div>
  );
}
