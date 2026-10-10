import React from 'react';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { SlideReveal } from '../components/SlideReveal';
import PageHeader from '../components/PageHeader';

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
    <div className="w-full bg-white text-[#111111] font-sans">
      
      {/* Hero Header */}
      <PageHeader
        title="Visibility should lead somewhere."
        intro="We measure progress through meaningful changes in AI presence, qualified visibility, source authority, and downstream business signals."
        primaryButton={{
          text: 'Get Your AI Visibility Audit',
          onClick: () => handleNav('audit'),
        }}
      />

      {/* Case Studies List (Flattened to 1 card level with 60/40 desktop layout) */}
      <section className="site-section bg-white overflow-hidden">
        <div className="site-container">
          
          <div className="space-y-8 lg:space-y-10">
            {caseStudyPlaceholders.map((cs) => (
              <SlideReveal
                key={cs.id}
                direction={cs.direction}
                distance={38}
                duration={0.75}
                className="p-8 sm:p-10 rounded-[24px] border border-[#111111]/10 bg-[#f5f5f7] relative overflow-hidden group"
              >
                {/* Status Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#111111]/10">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-white text-[#111111] border border-[#111111]/10 text-[11px] font-semibold tracking-wider uppercase">
                      {cs.status}
                    </span>
                    <span className="text-xs text-[#111111]/60">
                      Data Category: <span className="text-[#111111] font-semibold">[{cs.labelType}]</span>
                    </span>
                  </div>
                  <span className="text-xs text-[#111111]/60">
                    Timeline: {cs.timePeriod}
                  </span>
                </div>

                {/* 60/40 Two-Column Layout on Desktop, 1 Column on Mobile */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column (60% on desktop: lg:col-span-7) */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <span className="eyebrow-label">
                        {cs.industry}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-semibold text-[#111111] mb-3">
                        {cs.title}
                      </h2>
                      <p className="body-text text-sm">
                        {cs.note}
                      </p>
                    </div>

                    {/* Baseline challenge as plain text block with divider */}
                    <div className="pt-6 border-t border-[#111111]/10 space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#111111] block">
                        Initial Baseline Challenge:
                      </span>
                      <p className="body-text text-sm leading-relaxed">
                        {cs.initialProblem}
                      </p>
                    </div>
                  </div>

                  {/* Right Column (40% on desktop: lg:col-span-5) */}
                  <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-[#111111]/10 lg:pl-8">
                    <span className="eyebrow-label">
                      METHODOLOGY & EXECUTION SUMMARY
                    </span>
                    <ul className="space-y-3.5">
                      {cs.workCompleted.map((task, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-3 text-sm text-[#111111]">
                          <div className="w-5 h-5 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="leading-snug">{task}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 border-t border-[#111111]/10 flex items-center justify-between text-xs text-[#111111]/60">
                      <span>NDA Confidentiality Notice: Anonymized by agreement</span>
                      <ShieldCheck className="w-4 h-4 text-[#111111]/60" />
                    </div>
                  </div>

                </div>
              </SlideReveal>
            ))}
          </div>

          {/* Bottom Reassurance Banner */}
          <SlideReveal direction="up" distance={36} duration={0.7} className="mt-12 lg:mt-16">
            <div className="p-8 lg:p-10 text-left max-w-3xl space-y-4 rounded-[24px] border border-[#111111]/10 bg-[#f5f5f7] relative overflow-hidden">
              <h3 className="text-2xl font-semibold text-[#111111]">
                Want to see how your brand compares to these baselines?
              </h3>
              <p className="intro-text text-sm">
                We evaluate your exact high-intent buyer prompts and deliver an empirical share-of-voice benchmark report.
              </p>
              <div className="pt-3">
                <button
                  onClick={() => handleNav('audit')}
                  className="btn-primary"
                >
                  <span>Request Your AI Visibility Audit</span>
                  <ArrowRight className="w-4 h-4 text-[#111111]" />
                </button>
              </div>
            </div>
          </SlideReveal>

        </div>
      </section>

    </div>
  );
}
