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
 * Formium Alliance HowItWorksPage
 * - Hero & Content: Pitch black canvas (#000000)
 * - Cards: surface-card with 24px radius, obsidian borders
 * - Headings: font-heading weight 600, Pure White (#ffffff)
 * - Body: High readability ink (#a1a1aa)
 * - Accents: Formium Punch Crimson (#e60023)
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
    <div className="w-full bg-transparent text-[#fff0f0] font-sans">
      
      {/* --------------------------------------------------
          PAGE HERO (Formium Obsidian & Crimson)
      -------------------------------------------------- */}
      <section className="bg-transparent text-white pt-120 sm:pt-140 lg:pt-144 pb-24 sm:pb-28 lg:pb-32 relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <SlideReveal direction="left" distance={45} duration={0.65}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#e60023] mb-4 shadow-xs">
                // METHODOLOGY & ARCHITECTURE
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-white tracking-tightest leading-[1.08] mb-6 [text-wrap:balance]">
                A practical system for a changing search landscape.
              </h1>
            </SlideReveal>
            <SlideReveal direction="up" distance={35} duration={0.65} delay={0.12}>
              <p className="text-base sm:text-lg text-[#a1a1aa] leading-[1.6] mb-8">
                We do not treat AI search as a black box. Citepoint applies disciplined information retrieval science and entity engineering to position your brand as the definitive answer for high-intent B2B buyers.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleNav('audit')}
                  className="btn-aurora rounded-full px-7 py-3.5 shadow-[0_4px_24px_rgba(230,0,35,0.4)]"
                >
                  <span>Get Your AI Visibility Audit</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => handleNav('services')}
                  className="btn-kelp rounded-full px-7 py-3.5"
                >
                  <span>Explore Our Services</span>
                </button>
              </div>
            </SlideReveal>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------
          THE RETRIEVAL PIPELINE (Formium Obsidian & Crimson)
      -------------------------------------------------- */}
      <section className="py-48 lg:py-64 bg-transparent border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="down" distance={36} duration={0.65}>
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#e60023] mb-3 shadow-xs">
                SIGNATURE CITATION FLOW
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-medium text-white tracking-tight mb-4">
                How generative engines formulate answers
              </h2>
              <p className="text-base text-[#a1a1aa] leading-[1.6]">
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
                  className="surface-card p-6 rounded-[24px] flex flex-col justify-between h-full group cursor-default"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-sans text-xs font-semibold text-[#e60023] transition-colors duration-200 group-hover:text-white">
                        // {step.num}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#161619] border border-white/12 text-[#e60023] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#e60023] group-hover:shadow-[0_0_12px_rgba(230,0,35,0.4)]">
                        <IconC className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-base font-heading font-medium text-white mb-2 transition-colors duration-200 group-hover:text-[#e60023]">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#a1a1aa] leading-[1.6] mb-3">
                      {step.desc}
                    </p>
                    <p className="text-[11px] text-[#71717a] font-sans leading-[1.6] border-t border-white/10 pt-2">
                      {step.detail}
                    </p>
                  </div>
                  {step.platforms && (
                    <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/10">
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
          THE 4-PHASE DETAILED WALKTHROUGH (Formium Obsidian & Crimson)
      -------------------------------------------------- */}
      <section className="py-48 lg:py-64 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="up" distance={36} duration={0.65}>
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#e60023] mb-3 shadow-xs">
                THE 4-STEP FRAMEWORK
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-medium text-white tracking-tight mb-4">
                Disciplined, measurable execution
              </h2>
              <p className="text-base text-[#a1a1aa] leading-[1.6]">
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
                  className="surface-card p-6 lg:p-8 rounded-[24px] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group overflow-hidden"
                >
                  {/* Column 1: Phase Info */}
                  <SlideReveal
                    direction={isEven ? 'left' : 'right'}
                    distance={40}
                    duration={0.65}
                    className="lg:col-span-5 space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-full bg-[#161619] text-[#e60023] font-sans text-xs font-semibold flex items-center justify-center border border-white/12 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#e60023]">
                        {phase.step}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-[#161619] border border-white/12 flex items-center justify-center text-[#e60023] transition-colors duration-200 group-hover:text-white group-hover:bg-[#e60023]">
                        <IconC className="w-4 h-4" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#161619] border border-white/12 text-xs font-sans text-[#a1a1aa] font-medium">
                        {phase.cadence}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-heading font-medium text-white transition-colors duration-200 group-hover:text-[#e60023]">
                      {phase.title}
                    </h3>

                    <p className="text-xs uppercase tracking-[0.12em] font-sans font-semibold text-[#e60023]">
                      // {phase.subtitle}
                    </p>

                    <p className="text-sm text-[#a1a1aa] leading-[1.6]">
                      {phase.desc}
                    </p>

                    <div className="p-4 rounded-[16px] bg-[#09090b] border border-white/10 text-xs text-[#a1a1aa] leading-[1.6]">
                      <strong className="text-white block mb-1 font-semibold">Strategic Context:</strong>
                      {phase.detail}
                    </div>
                  </SlideReveal>

                  {/* Column 2: Key Deliverables */}
                  <SlideReveal
                    direction={isEven ? 'right' : 'left'}
                    distance={40}
                    duration={0.65}
                    delay={0.1}
                    className="lg:col-span-7 rounded-[20px] bg-[#09090b] border border-white/10 p-6 lg:p-8 shadow-xl"
                  >
                    <h4 className="text-xs font-heading font-semibold uppercase tracking-[0.12em] text-[#e60023] mb-4">
                      // CORE PHASE DELIVERABLES
                    </h4>
                    <ul className="space-y-3.5">
                      {phase.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#d4d4d8]">
                          <div className="w-4 h-4 rounded-full bg-[#161619] text-[#e60023] flex items-center justify-center shrink-0 mt-0.5 border border-white/12">
                            <Check className="w-2.5 h-2.5 text-[#e60023]" />
                          </div>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-[#71717a] font-sans">
                      <span>Verifiable milestone audit</span>
                      <span className="text-[#e60023] font-semibold">Documented & Delivered</span>
                    </div>
                  </SlideReveal>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --------------------------------------------------
          COLLABORATION MODEL (Formium Obsidian & Crimson)
      -------------------------------------------------- */}
      <section className="py-48 lg:py-64 bg-transparent border-y border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="left" distance={36} duration={0.65}>
            <div className="max-w-3xl mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#e60023] mb-3 shadow-xs">
                CLIENT COLLABORATION MODEL
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-medium text-white tracking-tight mb-4">
                How we work alongside your team
              </h2>
              <p className="text-base text-[#a1a1aa] leading-[1.6]">
                Citepoint operates as an extension of your growth organization, providing specialized AI visibility intelligence while integrating into your existing PR, SEO, and content workflows.
              </p>
            </div>
          </SlideReveal>

          <SlideStaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <SlideStaggerItem direction="scale-up" className="surface-card p-6 lg:p-8 rounded-[24px] flex flex-col justify-between h-full group cursor-default">
              <div>
                <div className="w-9 h-9 rounded-full bg-[#161619] border border-white/12 flex items-center justify-center text-[#e60023] mb-4 transition-all duration-300 group-hover:scale-110 group-hover:border-[#e60023] group-hover:shadow-[0_0_12px_rgba(230,0,35,0.4)]">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-base font-heading font-medium text-white mb-2 transition-colors duration-200 group-hover:text-[#e60023]">
                  Executive & Marketing Alignment
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-[1.6]">
                  Bi-weekly strategic syncs and monthly executive scorecards connect AI visibility metrics directly to commercial pipeline and category authority.
                </p>
              </div>
            </SlideStaggerItem>

            <SlideStaggerItem direction="scale-up" className="surface-card p-6 lg:p-8 rounded-[24px] flex flex-col justify-between h-full group cursor-default">
              <div>
                <div className="w-9 h-9 rounded-full bg-[#161619] border border-white/12 flex items-center justify-center text-[#e60023] mb-4 transition-all duration-300 group-hover:scale-110 group-hover:border-[#e60023] group-hover:shadow-[0_0_12px_rgba(230,0,35,0.4)]">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-base font-heading font-medium text-white mb-2 transition-colors duration-200 group-hover:text-[#e60023]">
                  Asynchronous Sprint Rhythm
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-[1.6]">
                  Clear documentation, structured change requests, and verified deliverables ensure high momentum without burdensome meetings.
                </p>
              </div>
            </SlideStaggerItem>

            <SlideStaggerItem direction="scale-up" className="surface-card p-6 lg:p-8 rounded-[24px] flex flex-col justify-between h-full group cursor-default">
              <div>
                <div className="w-9 h-9 rounded-full bg-[#161619] border border-white/12 flex items-center justify-center text-[#e60023] mb-4 transition-all duration-300 group-hover:scale-110 group-hover:border-[#e60023] group-hover:shadow-[0_0_12px_rgba(230,0,35,0.4)]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-base font-heading font-medium text-white mb-2 transition-colors duration-200 group-hover:text-[#e60023]">
                  Strict NDA & Governance
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-[1.6]">
                  Enterprise data handling, mutual NDAs, and confidentiality safeguards protect your strategic roadmap and competitive benchmarks.
                </p>
              </div>
            </SlideStaggerItem>
          </SlideStaggerContainer>

        </div>
      </section>

      {/* --------------------------------------------------
          FINAL ACTION SECTION (Formium Obsidian & Crimson)
      -------------------------------------------------- */}
      <section className="bg-black/85 backdrop-blur-md text-white py-48 lg:py-64 relative overflow-hidden border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <SlideReveal direction="up" distance={40} duration={0.8}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#e60023] shadow-xs">
              PHASE 01 DISCOVERY
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-medium text-white tracking-tightest leading-none mt-4">
              Discover how your brand currently fares in Phase 01.
            </h2>
            <p className="text-base sm:text-lg text-[#a1a1aa] max-w-2xl mx-auto leading-[1.6] mt-4">
              We begin with a targeted discovery audit to show where you appear, what AI says, and where competitors have claimed citations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <button
                onClick={() => handleNav('audit')}
                className="btn-aurora rounded-full px-8 py-3.5 shadow-[0_4px_24px_rgba(230,0,35,0.4)]"
              >
                <span>Request Phase 01 Audit</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="btn-kelp rounded-full px-8 py-3.5"
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
