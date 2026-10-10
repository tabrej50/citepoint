import React from 'react';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { SlideReveal } from '../components/SlideReveal';

/**
 * Citepoint CaseStudiesPage
 * Apple-style minimal monochrome:
 * - Canvas: White (#FFFFFF) and Light Gray (#F5F5F7)
 * - Text: Near-black (#1D1D1F) and Gray (#6E6E73)
 * - Borders: Hairline (#D2D2D7)
 * - Primary CTA: Solid black (#1D1D1F) with white text
 * - Zero gradients, zero shadows, generous white space
 */
export default function CaseStudiesPage({ setCurrentRoute }) {
  const handleNav = (route) => {
    if (setCurrentRoute) setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const caseStudyPlaceholders = [
    {
      id: 'case-1',
      title: 'B2B SaaS visibility audit',
      status: 'Coming soon',
      note: 'Anonymized client result will be published after permission.',
      industry: 'Enterprise B2B SaaS',
      timePeriod: '6-Month Longitudinal Study',
      labelType: 'Platform-measured',
      direction: 'diagonal-left',
      initialProblem: 'AI discovery engines repeatedly recommended legacy incumbents while omitting our client for high-value buyer prompts.',
      workCompleted: [
        'Executed 180 enterprise evaluation prompts across ChatGPT, Perplexity, and Gemini',
        'Structured core comparison schemas and technical API documentation for LLM ingestion',
        'Built targeted citation placements in key industry publications and review categories',
        'Corrected critical AI hallucinations regarding legacy pricing and omitted capabilities',
      ],
    },
    {
      id: 'case-2',
      title: 'AI citation-source analysis',
      status: 'Coming soon',
      note: 'Anonymized client result will be published after permission.',
      industry: 'Cloud Infrastructure & Observability',
      timePeriod: '90-Day Authority Foundation',
      labelType: 'Directional',
      direction: 'scale-up',
      initialProblem: 'Conversational engines cited outdated forum threads when describing product capabilities, creating customer evaluation doubt.',
      workCompleted: [
        'Reverse-engineered the exact citation hierarchy for enterprise buyer prompts',
        'Secured expert commentary citations across top-tier technical publications',
        'Deployed standardized JSON-LD entity markup across documentation',
        'Replaced outdated citations with verified product benchmark data',
      ],
    },
    {
      id: 'case-3',
      title: 'Technical AI readiness',
      status: 'Coming soon',
      note: 'Anonymized client result will be published after permission.',
      industry: 'Global Professional Advisory',
      timePeriod: '4-Week Diagnostic & Remediation',
      labelType: 'Estimated',
      direction: 'diagonal-right',
      initialProblem: 'Heavy client-side rendering prevented AI search crawlers from accessing and indexing executive research reports.',
      workCompleted: [
        'Diagnosed crawl budget exhaustion and bot permission barriers in server headers',
        'Implemented machine-readable static HTML rendering for high-value research',
        'Configured optimized crawler permissions for verified AI search spiders',
        'Generated structured semantic knowledge graphs',
      ],
    },
  ];

  return (
    <div className="w-full bg-white text-[#1d1d1f] font-sans selection:bg-[#1d1d1f] selection:text-white">
      
      {/* Hero Header */}
      <section className="bg-white text-[#1d1d1f] pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28 relative overflow-hidden border-b border-[#d2d2d7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SlideReveal direction="down" distance={38} duration={0.65}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7] text-xs font-semibold uppercase tracking-[0.14em] text-[#1d1d1f] mb-4">
              // CASE STUDIES & OUTCOMES
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[#1d1d1f] tracking-tight leading-[1.08] mb-6 [text-wrap:balance]">
              Visibility should lead somewhere.
            </h1>
            <p className="text-base sm:text-lg text-[#6e6e73] leading-[1.6] max-w-2xl mx-auto">
              We measure progress through meaningful changes in AI presence, qualified visibility, source authority, and downstream business signals.
            </p>
          </SlideReveal>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-8 lg:space-y-10">
            {caseStudyPlaceholders.map((cs) => (
              <SlideReveal
                key={cs.id}
                direction={cs.direction}
                distance={38}
                duration={0.75}
                className="p-6 lg:p-8 rounded-[24px] border border-[#d2d2d7] bg-[#f5f5f7] relative overflow-hidden group"
              >
                {/* Status Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-[#d2d2d7]">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-white text-[#1d1d1f] border border-[#d2d2d7] text-[11px] font-semibold tracking-wider uppercase">
                      {cs.status}
                    </span>
                    <span className="text-xs text-[#6e6e73]">
                      Data Category: <span className="text-[#1d1d1f] font-semibold">[{cs.labelType}]</span>
                    </span>
                  </div>
                  <span className="text-xs text-[#6e6e73]">
                    Timeline: {cs.timePeriod}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 lg:gap-6 items-start">
                  
                  {/* Left Info */}
                  <div className="lg:col-span-5 space-y-4">
                    <span className="text-xs uppercase tracking-[0.14em] text-[#6e6e73] font-semibold block">
                      {cs.industry}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-medium text-[#1d1d1f]">
                      {cs.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#6e6e73] leading-[1.5]">
                      {cs.note}
                    </p>

                    <div className="p-4 rounded-[16px] bg-white border border-[#d2d2d7] text-xs text-[#6e6e73] leading-[1.6]">
                      <strong className="text-[#1d1d1f] block mb-1 font-semibold">Initial Baseline Challenge:</strong>
                      {cs.initialProblem}
                    </div>
                  </div>

                  {/* Right Scope Details */}
                  <div className="lg:col-span-7 rounded-[20px] bg-white border border-[#d2d2d7] p-6 lg:p-8 space-y-4">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1d1d1f]">
                      // METHODOLOGY & EXECUTION SUMMARY
                    </h4>
                    <ul className="space-y-3 text-xs sm:text-sm">
                      {cs.workCompleted.map((task, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-3 text-[#1d1d1f]">
                          <div className="w-5 h-5 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="leading-snug">{task}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-[#d2d2d7] flex items-center justify-between text-xs text-[#6e6e73]">
                      <span>NDA Confidentiality Notice: Anonymized by agreement</span>
                      <ShieldCheck className="w-4 h-4 text-[#6e6e73]" />
                    </div>
                  </div>

                </div>
              </SlideReveal>
            ))}
          </div>

          {/* Bottom Reassurance Banner */}
          <SlideReveal direction="up" distance={36} duration={0.7} className="mt-12 lg:mt-16">
            <div className="p-8 lg:p-10 text-center max-w-3xl mx-auto space-y-4 rounded-[24px] border border-[#d2d2d7] bg-[#f5f5f7] relative overflow-hidden">
              <h3 className="text-2xl font-medium text-[#1d1d1f]">
                Want to see how your brand compares to these baselines?
              </h3>
              <p className="text-sm text-[#6e6e73] max-w-xl mx-auto leading-[1.6]">
                We evaluate your exact high-intent buyer prompts and deliver an empirical share-of-voice benchmark report.
              </p>
              <div className="pt-3">
                <button
                  onClick={() => handleNav('audit')}
                  className="rounded-full px-8 py-3.5 text-[15px] font-semibold inline-flex items-center gap-2 cursor-pointer bg-[#1d1d1f] text-white hover:bg-black transition-all active:scale-[0.98]"
                >
                  <span>Request Your AI Visibility Audit</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </SlideReveal>

        </div>
      </section>

    </div>
  );
}
