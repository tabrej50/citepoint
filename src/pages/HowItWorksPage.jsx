import React from 'react';
import {
  Compass,
  Stethoscope,
  Wrench,
  BarChart3,
  Cpu,
  Database,
  Search,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Check,
  Layers,
  Users
} from 'lucide-react';
import { AiEngineIcon } from '../components/AiEnginesRow';
import { SlideReveal, SlideStaggerContainer, SlideStaggerItem } from '../components/SlideReveal';

/**
 * Auros Abyssal HowItWorksPage
 * - Hero & Phases: Liquid Abyss (#010102)
 * - Pipeline & Collaboration: Liquid Deep (#0f1011)
 * - Cards: Liquid Kelp (#141516) with 16px radius, no drop shadows
 * - Headings: DM Sans weight 500, Platinum (#ffffff)
 * - Body: DM Sans weight 400, Silver Mist (#8a8f98)
 */
export default function HowItWorksPage({ setCurrentRoute }) {
  const handleNav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pipelineSteps = [
    {
      num: '01',
      title: 'User Prompt',
      desc: 'Buyer enters an evaluation question into ChatGPT, Perplexity, Claude, or Gemini.',
      icon: Search,
      platforms: true,
      detail: 'Enterprise buyers ask multi-constraint questions rather than isolated keywords.'
    },
    {
      num: '02',
      title: 'Retrieval (RAG)',
      desc: 'The engine queries trusted live indexes, review portals, and verified databases.',
      icon: Database,
      platforms: false,
      detail: 'AI models query authoritative sources to retrieve relevant passages in milliseconds.'
    },
    {
      num: '03',
      title: 'Semantic Parsing',
      desc: 'The model extracts factual claims and entity relationships from top-ranked sources.',
      icon: Cpu,
      platforms: false,
      detail: 'Entities are evaluated for factual consistency, recency, and consensus.'
    },
    {
      num: '04',
      title: 'Consensus Synthesis',
      desc: 'The LLM synthesizes an unbiased summary, prioritizing corroborated claims.',
      icon: Sparkles,
      platforms: false,
      detail: 'Claims backed by multiple independent sources are synthesized as truth.'
    },
    {
      num: '05',
      title: 'Citation & Link',
      desc: 'Your brand is cited directly in the answer text, driving high-intent consideration.',
      icon: ShieldCheck,
      platforms: false,
      detail: 'Buyers click through citations with high commercial purchase intent.'
    },
  ];

  const phases = [
    {
      step: '01',
      title: 'Discover',
      subtitle: 'Category, Prompt & Presence Mapping',
      icon: Compass,
      desc: 'We map your category, audience, competitors, buyer questions, and current AI presence across generative engines.',
      deliverables: [
        '15–25 high-intent buyer prompt cluster audit',
        'Competitor recommendation baseline across ChatGPT, Perplexity, Gemini, Claude',
        'Citation source hierarchy mapping for your specific category',
        'Baseline AI visibility score & recommendation share assessment'
      ],
      detail: 'Most brands assume buyers only ask about product names. In reality, generative search queries look like: "Which enterprise vendor supports SOC2 Type II compliance with native Snowflake ETL and the lowest latency?" We map these exact high-stakes evaluation prompts.',
      cadence: 'Week 1'
    },
    {
      step: '02',
      title: 'Diagnose',
      subtitle: 'Root Cause & Citation Gap Analysis',
      icon: Stethoscope,
      desc: 'We identify visibility gaps, citation gaps, content gaps, and technical barriers that prevent AI from citing you.',
      deliverables: [
        'Hallucination and inaccuracy catalog',
        'Authoritative source attribution gap report',
        'Technical bot crawlability, robots.txt, and schema audit',
        'Competitor citation advantage breakdown'
      ],
      detail: 'When AI omits or mischaracterizes your brand, it is usually due to three root causes: fragmented schema markup, absence from authoritative third-party corpora, or a lack of corroborated consensus in recent RAG vector indexes.',
      cadence: 'Week 2'
    },
    {
      step: '03',
      title: 'Build',
      subtitle: 'Authority Engineering & Content Deployment',
      icon: Wrench,
      desc: 'We improve the sources, content, structure, and authority signals that influence AI discovery.',
      deliverables: [
        'Answer-first knowledge documentation & entity structure',
        'Targeted high-authority third-party digital PR & citations',
        'Machine-readable JSON-LD entity graph deployment',
        'Review and comparison platform profile optimization'
      ],
      detail: 'We restructure your core knowledge assets into clean semantic triples that LLMs easily parse, and execute strategic placement across the exact third-party publications and review repositories AI models query during real-time retrieval.',
      cadence: 'Weeks 3–6'
    },
    {
      step: '04',
      title: 'Measure',
      subtitle: 'Continuous Sentiment & Recommendation Tracking',
      icon: BarChart3,
      desc: 'We monitor changes across AI platforms and connect visibility improvements to business outcomes.',
      deliverables: [
        'Monthly Share of Voice & Citation Health scorecards',
        'Real-time competitor displacement and prompt shift alerts',
        'Brand accuracy and hallucination defense monitoring',
        'Downstream pipeline and qualified referral analytics'
      ],
      detail: 'AI search is not a static index. Model weights update, and RAG vector stores ingest new web crawls continuously. We measure shifts longitudinally so your leadership team has clear, verifiable proof of market presence.',
      cadence: 'Ongoing Retainer'
    },
  ];

  return (
    <div className="w-full bg-transparent text-[#8a8f98] font-sans">
      
      {/* --------------------------------------------------
          PAGE HERO (Liquid Abyss #010102)
      -------------------------------------------------- */}
      <section className="bg-[#010102]/60 backdrop-blur-[2px] text-white pt-120 sm:pt-140 lg:pt-144 pb-24 sm:pb-28 lg:pb-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <SlideReveal direction="left" distance={45} duration={0.65}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-[#141516] border border-white/10 text-xs font-sans font-medium uppercase tracking-[0.12em] text-[#f7f8f8] mb-4">
                // METHODOLOGY & ARCHITECTURE
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-medium text-white tracking-tightest leading-[1.08] mb-6 [text-wrap:balance]">
                A practical system for a changing search landscape.
              </h1>
            </SlideReveal>
            <SlideReveal direction="up" distance={35} duration={0.65} delay={0.12}>
              <p className="text-base sm:text-lg text-[#8a8f98] leading-[1.4] mb-8">
                We do not treat AI search as a black box. Citepoint applies disciplined information retrieval science and entity engineering to position your brand as the definitive answer for high-intent B2B buyers.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleNav('audit')}
                  className="btn-aurora"
                >
                  <span>Get Your AI Visibility Audit</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => handleNav('services')}
                  className="btn-kelp"
                >
                  <span>Explore Our Services</span>
                </button>
              </div>
            </SlideReveal>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------
          THE RETRIEVAL PIPELINE (Liquid Deep #0f1011)
      -------------------------------------------------- */}
      <section className="py-48 lg:py-64 bg-[#0f1011]/70 backdrop-blur-[2px] border-y border-white/8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="down" distance={36} duration={0.65}>
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[8px] bg-[#141516] border border-white/10 text-xs font-sans font-medium uppercase tracking-[0.12em] text-[#f7f8f8] mb-3">
                SIGNATURE CITATION FLOW
              </div>
              <h2 className="text-3xl sm:text-4xl font-sans font-medium text-white tracking-tight mb-4">
                How generative engines formulate answers
              </h2>
              <p className="text-base text-[#8a8f98] leading-[1.4]">
                Understanding the generative synthesis pipeline is key to engineering lasting citation visibility. Every step in this pipeline represents a deliberate optimization point.
              </p>
            </div>
          </SlideReveal>

          <SlideStaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 relative">
            {pipelineSteps.map((step) => {
              const IconC = step.icon;
              return (
                <SlideStaggerItem
                  key={step.num}
                  direction="right"
                  distance={35}
                  className="surface-card p-6 flex flex-col justify-between h-full group cursor-default"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-sans text-xs font-medium text-[#ff5252] transition-colors duration-200 group-hover:text-white">
                        // {step.num}
                      </span>
                      <div className="w-8 h-8 rounded-[8px] bg-[#0f1011] border border-white/10 text-[#ff5252] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#ff5252]/40 group-hover:shadow-[0_0_10px_rgba(203,255,252,0.2)]">
                        <IconC className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-base font-sans font-medium text-white mb-2 transition-colors duration-200 group-hover:text-[#ff5252]">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#8a8f98] leading-[1.4] mb-3">
                      {step.desc}
                    </p>
                    <p className="text-[11px] text-[#23252a] font-sans leading-[1.4] border-t border-white/8 pt-2">
                      {step.detail}
                    </p>
                  </div>
                  {step.platforms && (
                    <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/8">
                      <AiEngineIcon id="chatgpt" size={14} />
                      <AiEngineIcon id="gemini" size={14} />
                      <AiEngineIcon id="claude" size={14} />
                      <AiEngineIcon id="perplexity" size={14} />
                    </div>
                  )}
                </SlideStaggerItem>
              );
            })}
          </SlideStaggerContainer>

        </div>
      </section>

      {/* --------------------------------------------------
          THE 4-PHASE DETAILED WALKTHROUGH (Liquid Abyss #010102)
      -------------------------------------------------- */}
      <section className="py-48 lg:py-64 bg-[#010102]/60 backdrop-blur-[2px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="up" distance={36} duration={0.65}>
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[8px] bg-[#141516] border border-white/10 text-xs font-sans font-medium uppercase tracking-[0.12em] text-[#f7f8f8] mb-3">
                THE 4-STEP FRAMEWORK
              </div>
              <h2 className="text-3xl sm:text-4xl font-sans font-medium text-white tracking-tight mb-4">
                Disciplined, measurable execution
              </h2>
              <p className="text-base text-[#8a8f98] leading-[1.4]">
                Our 4-phase process is how we win each step of that 5-step generative retrieval journey. Every phase delivers structured documentation, verifiable milestones, and executive accountability.
              </p>
            </div>
          </SlideReveal>

          <div className="space-y-8">
            {phases.map((phase, pIdx) => {
              const IconC = phase.icon;
              const isEven = pIdx % 2 === 0;

              return (
                <div
                  key={phase.step}
                  className="surface-card p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group overflow-hidden"
                >
                  {/* Column 1: Phase Info */}
                  <SlideReveal
                    direction={isEven ? 'left' : 'right'}
                    distance={40}
                    duration={0.65}
                    className="lg:col-span-5 space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-[8px] bg-[#0f1011] text-[#ff5252] font-sans text-xs font-medium flex items-center justify-center border border-white/10 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#ff5252]/40">
                        {phase.step}
                      </span>
                      <div className="w-9 h-9 rounded-[8px] bg-[#0f1011] border border-white/10 flex items-center justify-center text-[#8a8f98] transition-colors duration-200 group-hover:text-white">
                        <IconC className="w-4 h-4" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-[4px] bg-[#0f1011] border border-white/10 text-xs font-sans text-[#8a8f98]">
                        {phase.cadence}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-sans font-medium text-white transition-colors duration-200 group-hover:text-[#ff5252]">
                      {phase.title}
                    </h3>

                    <p className="text-xs uppercase tracking-[0.12em] font-sans font-medium text-[#ff5252]">
                      // {phase.subtitle}
                    </p>

                    <p className="text-sm text-[#8a8f98] leading-[1.4]">
                      {phase.desc}
                    </p>

                    <div className="p-4 rounded-[8px] bg-[#0f1011] border border-white/8 text-xs text-[#8a8f98] leading-[1.4]">
                      <strong className="text-white block mb-1 font-medium">Strategic Context:</strong>
                      {phase.detail}
                    </div>
                  </SlideReveal>

                  {/* Column 2: Key Deliverables */}
                  <SlideReveal
                    direction={isEven ? 'right' : 'left'}
                    distance={40}
                    duration={0.65}
                    delay={0.1}
                    className="lg:col-span-7 rounded-[12px] bg-[#0f1011]/90 border border-white/10 p-6 lg:p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                  >
                    <h4 className="text-xs font-sans font-medium uppercase tracking-[0.12em] text-[#ff5252] mb-4">
                      // CORE PHASE DELIVERABLES
                    </h4>
                    <ul className="space-y-3.5">
                      {phase.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#f7f8f8]">
                          <div className="w-4 h-4 rounded-full bg-[#141516] text-[#ff5252] flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-5 border-t border-white/8 flex items-center justify-between text-xs text-[#23252a] font-sans">
                      <span>Verifiable milestone audit</span>
                      <span className="text-[#ff5252] font-medium">Documented & Delivered</span>
                    </div>
                  </SlideReveal>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --------------------------------------------------
          COLLABORATION MODEL (Liquid Deep #0f1011)
      -------------------------------------------------- */}
      <section className="py-48 lg:py-64 bg-[#0f1011]/70 backdrop-blur-[2px] border-y border-white/8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="left" distance={36} duration={0.65}>
            <div className="max-w-3xl mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[8px] bg-[#141516] border border-white/10 text-xs font-sans font-medium uppercase tracking-[0.12em] text-[#f7f8f8] mb-3">
                CLIENT COLLABORATION MODEL
              </div>
              <h2 className="text-3xl sm:text-4xl font-sans font-medium text-white tracking-tight mb-4">
                How we work alongside your team
              </h2>
              <p className="text-base text-[#8a8f98] leading-[1.4]">
                Citepoint operates as an extension of your growth organization, providing specialized AI visibility intelligence while integrating into your existing PR, SEO, and content workflows.
              </p>
            </div>
          </SlideReveal>

          <SlideStaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <SlideStaggerItem direction="scale-up" className="surface-card p-6 lg:p-8 flex flex-col justify-between h-full group cursor-default">
              <div>
                <div className="w-9 h-9 rounded-[8px] bg-[#0f1011] border border-white/10 flex items-center justify-center text-[#ff5252] mb-4 transition-all duration-300 group-hover:scale-110 group-hover:border-[#ff5252]/40 group-hover:shadow-[0_0_12px_rgba(203,255,252,0.2)]">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-base font-sans font-medium text-white mb-2 transition-colors duration-200 group-hover:text-[#ff5252]">
                  Executive & Marketing Alignment
                </h3>
                <p className="text-xs sm:text-sm text-[#8a8f98] leading-[1.4]">
                  Bi-weekly strategic syncs and monthly executive scorecards connect AI visibility metrics directly to commercial pipeline and category authority.
                </p>
              </div>
            </SlideStaggerItem>

            <SlideStaggerItem direction="scale-up" className="surface-card p-6 lg:p-8 flex flex-col justify-between h-full group cursor-default">
              <div>
                <div className="w-9 h-9 rounded-[8px] bg-[#0f1011] border border-white/10 flex items-center justify-center text-[#ff5252] mb-4 transition-all duration-300 group-hover:scale-110 group-hover:border-[#ff5252]/40 group-hover:shadow-[0_0_12px_rgba(203,255,252,0.2)]">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-base font-sans font-medium text-white mb-2 transition-colors duration-200 group-hover:text-[#ff5252]">
                  Asynchronous Sprint Rhythm
                </h3>
                <p className="text-xs sm:text-sm text-[#8a8f98] leading-[1.4]">
                  Clear documentation, structured change requests, and verified deliverables ensure high momentum without burdensome meetings.
                </p>
              </div>
            </SlideStaggerItem>

            <SlideStaggerItem direction="scale-up" className="surface-card p-6 lg:p-8 flex flex-col justify-between h-full group cursor-default">
              <div>
                <div className="w-9 h-9 rounded-[8px] bg-[#0f1011] border border-white/10 flex items-center justify-center text-[#ff5252] mb-4 transition-all duration-300 group-hover:scale-110 group-hover:border-[#ff5252]/40 group-hover:shadow-[0_0_12px_rgba(203,255,252,0.2)]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-base font-sans font-medium text-white mb-2 transition-colors duration-200 group-hover:text-[#ff5252]">
                  Strict NDA & Governance
                </h3>
                <p className="text-xs sm:text-sm text-[#8a8f98] leading-[1.4]">
                  Enterprise data handling, mutual NDAs, and confidentiality safeguards protect your strategic roadmap and competitive benchmarks.
                </p>
              </div>
            </SlideStaggerItem>
          </SlideStaggerContainer>

        </div>
      </section>

      {/* --------------------------------------------------
          FINAL ACTION SECTION (Liquid Abyss #010102)
      -------------------------------------------------- */}
      <section className="bg-[#010102]/60 backdrop-blur-[2px] text-white py-48 lg:py-64 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <SlideReveal direction="up" distance={40} duration={0.8}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-[#141516] border border-white/10 text-xs font-sans font-medium uppercase tracking-[0.12em] text-[#f7f8f8]">
              PHASE 01 DISCOVERY
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-medium text-white tracking-tightest leading-none mt-4">
              Discover how your brand currently fares in Phase 01.
            </h2>
            <p className="text-base sm:text-lg text-[#8a8f98] max-w-2xl mx-auto leading-[1.4] mt-4">
              We begin with a targeted discovery audit to show where you appear, what AI says, and where competitors have claimed citations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <button
                onClick={() => handleNav('audit')}
                className="btn-aurora"
              >
                <span>Request Phase 01 Audit</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="btn-kelp"
              >
                <span>Schedule a Consultation</span>
              </button>
            </div>
          </SlideReveal>
        </div>
      </section>

    </div>
  );
}
