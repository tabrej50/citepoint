import React from 'react';
import { Search, Target, Layers, Database, FileText, CheckCircle2 } from 'lucide-react';
import AuditContactForm from '../components/AuditContactForm';
import { AiEngineIcon, AI_ENGINES } from '../components/AiEnginesRow';
import { SlideReveal, SlideStaggerContainer, SlideStaggerItem } from '../components/SlideReveal';

/**
 * Auros Abyssal AuditPage
 * - Hero: Liquid Abyss (#012624)
 * - Deliverables grid: Liquid Deep (#011d1c) background with Liquid Kelp (#003734) 16px cards
 * - Form Section: Liquid Abyss (#012624)
 * - DM Sans weight 500 headings, Silver Mist body text, no drop shadows
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
    <div className="w-full bg-transparent text-[#bbc7c6] font-matter">
      
      {/* Hero Header (Liquid Abyss #012624) */}
      <section className="bg-[#012624]/60 backdrop-blur-[2px] text-white pt-128 sm:pt-144 lg:pt-160 pb-64 sm:pb-80 lg:pb-96 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SlideReveal direction="down" distance={38} duration={0.65}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] bg-[#003734] border border-white/10 text-xs font-matter font-medium uppercase tracking-[0.12em] text-[#edfffe] mb-4">
              // DIAGNOSTIC ASSESSMENT
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-matter font-medium text-white tracking-tightest leading-[1.08] mb-6 [text-wrap:balance]">
              Get Your AI Visibility Audit
            </h1>
            <p className="text-base sm:text-lg text-[#bbc7c6] leading-[1.4]">
              Understand how ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews currently perceive, cite, and recommend your brand for high-value buyer prompts.
            </p>
          </SlideReveal>

          {/* AI Platforms Logo Row */}
          <SlideReveal direction="up" distance={25} delay={0.15} duration={0.6}>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-6">
              {AI_ENGINES.map((engine) => (
                <div
                  key={engine.id}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] bg-[#003734] border border-white/10 text-white text-xs font-matter font-normal"
                >
                  <AiEngineIcon id={engine.id} size={15} variant={engine.isGoogleMulti ? 'multicolor' : 'brand'} />
                  <span>{engine.name}</span>
                </div>
              ))}
            </div>
          </SlideReveal>
        </div>
      </section>

      {/* Deliverables Overview Section (Liquid Deep #011d1c) */}
      <section className="py-64 lg:py-96 bg-[#011d1c]/70 backdrop-blur-[2px] border-y border-white/8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="left" distance={36} duration={0.65}>
            <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
              <span className="text-xs font-matter font-medium uppercase tracking-[0.12em] text-[#edfffe] block mb-2">
                // AUDIT SPECIFICATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-matter font-medium text-white tracking-tight mb-3">
                What your diagnostic audit includes
              </h2>
              <p className="text-sm sm:text-base text-[#bbc7c6] leading-[1.4]">
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
                  className="p-6 lg:p-8 rounded-[16px] bg-[#003734] border border-white/8 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="w-9 h-9 rounded-[6px] bg-[#011d1c] border border-white/10 text-[#cbfffc] flex items-center justify-center mb-4">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-matter font-medium text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#bbc7c6] leading-[1.4]">
                      {item.desc}
                    </p>

                    {i === 0 && (
                      <div className="mt-4 pt-3 border-t border-white/8 flex flex-wrap items-center gap-1.5">
                        {AI_ENGINES.map((e) => (
                          <div
                            key={e.id}
                            title={e.name}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-[#011d1c] border border-white/10 text-[11px] font-matter text-white"
                          >
                            <AiEngineIcon id={e.id} size={12} variant={e.isGoogleMulti ? 'multicolor' : 'brand'} />
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

      {/* Audit Request Form Section (Liquid Abyss #012624) */}
      <section className="py-64 lg:py-96 bg-[#012624]/60 backdrop-blur-[2px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideReveal direction="scale-up" distance={30} duration={0.8}>
            <AuditContactForm />
          </SlideReveal>
        </div>
      </section>

    </div>
  );
}
