import React from 'react';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { SlideReveal } from '../components/SlideReveal';

/**
 * Auros Abyssal CaseStudiesPage
 * - Hero & Content: Liquid Abyss (#010102)
 * - Cards: Liquid Kelp (#141516) with 16px radius, no drop shadows
 * - Sub-panels: Liquid Deep (#0f1011)
 * - DM Sans weight 500 headings, Silver Mist text, Lavender Phosphor highlights
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
    <div className="w-full bg-transparent text-[#8a8f98] font-sans">
      
      {/* Hero Header (Liquid Abyss #010102) */}
      <section className="bg-[#010102]/60 backdrop-blur-[2px] text-white pt-120 sm:pt-140 lg:pt-144 pb-24 sm:pb-28 lg:pb-32 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SlideReveal direction="down" distance={38} duration={0.65}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-[#141516] border border-white/10 text-xs font-sans font-medium uppercase tracking-[0.12em] text-[#f7f8f8] mb-4">
              // CASE STUDIES & OUTCOMES
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-medium text-white tracking-tightest leading-[1.08] mb-6 [text-wrap:balance]">
              Visibility should lead somewhere.
            </h1>
            <p className="text-base sm:text-lg text-[#8a8f98] leading-[1.4]">
              We measure progress through meaningful changes in AI presence, qualified visibility, source authority, and downstream business signals.
            </p>
          </SlideReveal>
        </div>
      </section>

      {/* Case Studies List (Liquid Deep #0f1011 band) */}
      <section className="py-48 lg:py-64 bg-[#0f1011]/70 backdrop-blur-[2px] border-y border-white/8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-8 lg:space-y-10">
            {caseStudyPlaceholders.map((cs) => (
              <SlideReveal
                key={cs.id}
                direction={cs.direction}
                distance={38}
                duration={0.75}
                className="surface-card p-6 lg:p-8 group"
              >
                {/* Status Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/8">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded-[4px] bg-[#0f1011] text-[#f7f8f8] border border-white/10 text-[10px] font-sans uppercase tracking-[0.12em] transition-colors duration-200 group-hover:border-[#ff5252]/30">
                      {cs.status}
                    </span>
                    <span className="text-xs font-sans text-[#8a8f98]">
                      Data Category: <span className="text-white font-medium">[{cs.labelType}]</span>
                    </span>
                  </div>
                  <span className="text-xs font-sans text-[#8a8f98]">
                    Timeline: {cs.timePeriod}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  
                  {/* Left Info */}
                  <div className="lg:col-span-5 space-y-4">
                    <span className="text-xs font-sans uppercase tracking-[0.12em] text-[#ff5252] block">
                      {cs.industry}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-sans font-medium text-white transition-colors duration-200 group-hover:text-[#ff5252]">
                      {cs.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#8a8f98] leading-[1.4]">
                      {cs.note}
                    </p>

                    <div className="p-4 rounded-[8px] bg-[#0f1011] border border-white/8 text-xs text-[#8a8f98] leading-[1.4]">
                      <strong className="text-white block mb-1 font-medium">Initial Baseline Challenge:</strong>
                      {cs.initialProblem}
                    </div>
                  </div>

                  {/* Right Scope Details */}
                  <div className="lg:col-span-7 rounded-[12px] bg-[#0f1011]/90 border border-white/10 p-6 lg:p-8 space-y-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                    <h4 className="text-xs font-sans font-medium uppercase tracking-[0.12em] text-[#ff5252]">
                      // METHODOLOGY & EXECUTION SUMMARY
                    </h4>
                    <ul className="space-y-3 text-xs sm:text-sm font-sans">
                      {cs.workCompleted.map((task, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-3 text-[#f7f8f8]">
                          <div className="w-4 h-4 rounded-full bg-[#141516] text-[#ff5252] flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="leading-snug">{task}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-white/8 flex items-center justify-between text-xs text-[#23252a]">
                      <span>NDA Confidentiality Notice: Anonymized by agreement</span>
                      <ShieldCheck className="w-4 h-4 text-[#ff5252]" />
                    </div>
                  </div>

                </div>
              </SlideReveal>
            ))}
          </div>

          {/* Bottom Reassurance Banner */}
          <SlideReveal direction="up" distance={36} duration={0.7} className="mt-12 lg:mt-16">
            <div className="surface-card p-6 lg:p-8 text-center max-w-3xl mx-auto space-y-4">
              <h3 className="text-xl font-sans font-medium text-white">
                Want to see how your brand compares to these baselines?
              </h3>
              <p className="text-sm text-[#8a8f98] max-w-xl mx-auto leading-[1.4]">
                We evaluate your exact high-intent buyer prompts and deliver an empirical share-of-voice benchmark report.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => handleNav('audit')}
                  className="btn-aurora"
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
