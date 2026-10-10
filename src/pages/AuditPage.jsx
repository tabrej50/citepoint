import React from 'react';
import { Search, Target, Layers, Database, FileText, CheckCircle2 } from 'lucide-react';
import AuditContactForm from '../components/AuditContactForm';
import { AiEngineIcon, AI_ENGINES } from '../components/AiEnginesRow';
import { SlideReveal, SlideStaggerContainer, SlideStaggerItem } from '../components/SlideReveal';
import PageHeader from '../components/PageHeader';

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
    <div className="w-full bg-white text-[#111111] font-sans">
      
      {/* Hero Header */}
      <PageHeader
        eyebrow="DIAGNOSTIC ASSESSMENT"
        title="Get Your AI Visibility Audit"
        intro="Understand how ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews currently perceive, cite, and recommend your brand for high-value buyer prompts."
      >
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mt-6">
          {AI_ENGINES.map((engine) => (
            <div
              key={engine.id}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-[#111111]/10 text-[#111111] text-xs font-medium hover:border-[#111111] transition-colors"
            >
              <AiEngineIcon id={engine.id} size={15} />
              <span>{engine.name}</span>
            </div>
          ))}
        </div>
      </PageHeader>

      {/* Deliverables Overview Section */}
      <section className="site-section bg-white border-b border-[#111111]/10">
        <div className="site-container">
          
          <SlideReveal direction="left" distance={36} duration={0.65}>
            <div className="max-w-2xl mb-12 lg:mb-16">
              <span className="eyebrow-label block">
                AUDIT SPECIFICATIONS
              </span>
              <h2 className="mb-4">
                What your diagnostic audit includes
              </h2>
              <p className="intro-text">
                Every audit delivers empirical prompt logs, competitor share-of-voice benchmarks, and a prioritized action roadmap.
              </p>
            </div>
          </SlideReveal>

          <SlideStaggerContainer staggerDelay={0.1} className="card-grid-3">
            {auditDeliverables.map((item, i) => {
              const Icon = item.icon;
              return (
                <SlideStaggerItem
                  key={i}
                  direction={item.dir}
                  className="p-8 rounded-[24px] border border-[#111111]/10 bg-[#f5f5f7] flex flex-col justify-between h-full group cursor-default transition-all duration-200 hover:border-[#111111]"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-white border border-[#111111]/10 text-[#111111] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-5 h-5 text-[#111111]" />
                    </div>
                    <h3 className="mb-3 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="body-text">
                      {item.desc}
                    </p>

                    {i === 0 && (
                      <div className="mt-6 pt-4 border-t border-[#111111]/10 flex flex-wrap items-center gap-1.5">
                        {AI_ENGINES.map((e) => (
                          <div
                            key={e.id}
                            title={e.name}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-white border border-[#111111]/10 text-[11px] text-[#111111]"
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
      <section className="site-section bg-[#f5f5f7]">
        <div className="site-container">
          <SlideReveal direction="scale-up" distance={30} duration={0.8}>
            <AuditContactForm />
          </SlideReveal>
        </div>
      </section>

    </div>
  );
}
