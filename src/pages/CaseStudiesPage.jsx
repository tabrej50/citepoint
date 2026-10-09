import React from 'react';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { SlideReveal } from '../components/SlideReveal';

/**
 * Champagne Gold & Alabaster CaseStudiesPage
 * - Hero & Content: Warm Alabaster (#FAF8F5 / transparent)
 * - Cards: surface-card with warm golden hairline border (#EADBBE)
 * - Sub-panels: bg-white with #EADBBE border
 * - Headings: font-heading weight 500 in Deep Obsidian (#0F1012), body text (#4B4F58)
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
    <div className="w-full bg-transparent text-[#4B4F58] font-sans">
      
      {/* Hero Header (Champagne Gold & Alabaster) */}
      <section className="bg-transparent text-[#0F1012] pt-120 sm:pt-140 lg:pt-144 pb-24 sm:pb-28 lg:pb-32 relative overflow-hidden border-b border-[#EADBBE]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SlideReveal direction="down" distance={38} duration={0.65}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-white border border-[#EADBBE] text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#A67D28] mb-4 shadow-xs">
              // CASE STUDIES & OUTCOMES
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-medium text-[#0F1012] tracking-tightest leading-[1.08] mb-6 [text-wrap:balance]">
              Visibility should lead somewhere.
            </h1>
            <p className="text-base sm:text-lg text-[#4B4F58] leading-[1.4]">
              We measure progress through meaningful changes in AI presence, qualified visibility, source authority, and downstream business signals.
            </p>
          </SlideReveal>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-48 lg:py-64 bg-transparent overflow-hidden">
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
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-[#EADBBE]">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded-[4px] bg-[#FAF8F5] text-[#363940] border border-[#EADBBE] text-[10px] font-sans uppercase tracking-[0.12em] font-medium">
                      {cs.status}
                    </span>
                    <span className="text-xs font-sans text-[#636773]">
                      Data Category: <span className="text-[#0F1012] font-semibold">[{cs.labelType}]</span>
                    </span>
                  </div>
                  <span className="text-xs font-sans text-[#636773]">
                    Timeline: {cs.timePeriod}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  
                  {/* Left Info */}
                  <div className="lg:col-span-5 space-y-4">
                    <span className="text-xs font-sans uppercase tracking-[0.12em] text-[#A67D28] font-semibold block">
                      {cs.industry}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-heading font-medium text-[#0F1012] transition-colors duration-200 group-hover:text-[#A67D28]">
                      {cs.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#4B4F58] leading-[1.4]">
                      {cs.note}
                    </p>

                    <div className="p-4 rounded-[8px] bg-[#FAF8F5] border border-[#EADBBE] text-xs text-[#4B4F58] leading-[1.4]">
                      <strong className="text-[#0F1012] block mb-1 font-semibold">Initial Baseline Challenge:</strong>
                      {cs.initialProblem}
                    </div>
                  </div>

                  {/* Right Scope Details */}
                  <div className="lg:col-span-7 rounded-[12px] bg-white border border-[#EADBBE] p-6 lg:p-8 space-y-4 shadow-xs">
                    <h4 className="text-xs font-heading font-semibold uppercase tracking-[0.12em] text-[#A67D28]">
                      // METHODOLOGY & EXECUTION SUMMARY
                    </h4>
                    <ul className="space-y-3 text-xs sm:text-sm font-sans">
                      {cs.workCompleted.map((task, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-3 text-[#363940]">
                          <div className="w-4 h-4 rounded-full bg-[#FAF8F5] text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5 border border-[#EADBBE]">
                            <Check className="w-2.5 h-2.5 text-[#C5A059]" />
                          </div>
                          <span className="leading-snug">{task}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-[#EADBBE] flex items-center justify-between text-xs text-[#636773]">
                      <span>NDA Confidentiality Notice: Anonymized by agreement</span>
                      <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    </div>
                  </div>

                </div>
              </SlideReveal>
            ))}
          </div>

          {/* Bottom Reassurance Banner */}
          <SlideReveal direction="up" distance={36} duration={0.7} className="mt-12 lg:mt-16">
            <div className="surface-card p-6 lg:p-8 text-center max-w-3xl mx-auto space-y-4">
              <h3 className="text-xl font-heading font-medium text-[#0F1012]">
                Want to see how your brand compares to these baselines?
              </h3>
              <p className="text-sm text-[#4B4F58] max-w-xl mx-auto leading-[1.4]">
                We evaluate your exact high-intent buyer prompts and deliver an empirical share-of-voice benchmark report.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => handleNav('audit')}
                  className="btn-aurora shadow-[0_4px_16px_rgba(197,160,89,0.32)]"
                >
                  <span>Request Your AI Visibility Audit</span>
                  <ArrowRight className="w-4 h-4 text-[#0F1012]" />
                </button>
              </div>
            </div>
          </SlideReveal>

        </div>
      </section>

    </div>
  );
}
