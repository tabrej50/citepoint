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
import PageHeader from '../components/PageHeader';

/**
 * Formium Alliance HowItWorksPage
 * - Hero & Content: Pitch black canvas (#000000)
 * - Cards: surface-card with 24px radius, obsidian borders
 * - Headings: font-heading weight 600, Pure White (#ffffff)
 * - Body: High readability ink (#a1a1aa)
 * - Accents: Titanium White (#ffffff)
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
    <div className="w-full bg-white text-[#1D1D1F] font-sans">
      
      {/* --------------------------------------------------
          PAGE HERO (APPLE MINIMAL MONOCHROME)
      -------------------------------------------------- */}
      <PageHeader
        eyebrow="METHODOLOGY & ARCHITECTURE"
        title="A practical system for a changing search landscape."
        intro="We do not treat AI search as a black box. Citepoint applies disciplined information retrieval science and entity engineering to position your brand as the definitive answer for high-intent B2B buyers."
        primaryButton={{
          text: 'Get Your AI Visibility Audit',
          onClick: () => handleNav('audit'),
        }}
        secondaryButton={{
          text: 'Explore Our Services',
          onClick: () => handleNav('services'),
        }}
      />

      {/* --------------------------------------------------
          THE RETRIEVAL PIPELINE (5 COLUMNS DESKTOP)
      -------------------------------------------------- */}
      <section className="site-section bg-[#F5F5F7] border-b border-[#D2D2D7] overflow-hidden">
        <div className="site-container">
          
          <SlideReveal direction="down" distance={36} duration={0.65}>
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <span className="eyebrow-label text-center mx-auto">
                SIGNATURE CITATION FLOW
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D1D1F] tracking-tight mb-4">
                How generative engines formulate answers
              </h2>
              <p className="intro-text mx-auto">
                Understanding the generative synthesis pipeline is key to engineering lasting citation visibility. Every step in this pipeline represents a deliberate optimization point.
              </p>
            </div>
          </SlideReveal>

          <SlideStaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
            {pipelineSteps.map((step) => {
              const IconC = step.icon;
              return (
                <SlideStaggerItem
                  key={step.num}
                  direction="right"
                  distance={35}
                  className="bg-white border border-[#D2D2D7] p-6 rounded-[24px] flex flex-col justify-between h-full group cursor-default hover:border-[#1D1D1F] transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-sans text-xs font-semibold text-[#6E6E73]">
                        {step.num}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#F5F5F7] border border-[#D2D2D7] text-[#1D1D1F] flex items-center justify-center">
                        <IconC className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-base font-sans font-bold text-[#1D1D1F] mb-2">
                      {step.title}
                    </h3>
                    <p className="body-text text-xs mb-3">
                      {step.desc}
                    </p>
                    <p className="text-[11px] text-[#6E6E73] font-sans leading-[1.6] border-t border-[#D2D2D7] pt-2">
                      {step.detail}
                    </p>
                  </div>
                  {step.platforms && (
                    <div className="flex items-center gap-2 mt-4 pt-3 border-t border-[#D2D2D7]">
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
          THE 4-PHASE DETAILED WALKTHROUGH
      -------------------------------------------------- */}
      <section className="site-section bg-white overflow-hidden">
        <div className="site-container">
          
          <SlideReveal direction="up" distance={36} duration={0.65}>
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <span className="eyebrow-label text-center mx-auto">
                THE 4-STEP FRAMEWORK
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D1D1F] tracking-tight mb-4">
                Disciplined, measurable execution
              </h2>
              <p className="intro-text mx-auto">
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
                  className="bg-[#F5F5F7] border border-[#D2D2D7] p-6 lg:p-8 rounded-[24px] grid grid-cols-1 lg:grid-cols-12 gap-6 items-start group overflow-hidden"
                >
                  {/* Column 1: Phase Info */}
                  <SlideReveal
                    direction={isEven ? 'left' : 'right'}
                    distance={40}
                    duration={0.65}
                    className="lg:col-span-5 space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-full bg-white text-[#1D1D1F] font-sans text-xs font-bold flex items-center justify-center border border-[#D2D2D7]">
                        {phase.step}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-white border border-[#D2D2D7] flex items-center justify-center text-[#1D1D1F]">
                        <IconC className="w-4 h-4" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white border border-[#D2D2D7] text-xs font-sans text-[#6E6E73] font-medium">
                        {phase.cadence}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F]">
                      {phase.title}
                    </h3>

                    <p className="text-xs uppercase tracking-[0.08em] font-sans font-semibold text-[#1D1D1F]">
                      {phase.subtitle}
                    </p>

                    <p className="body-text text-sm">
                      {phase.desc}
                    </p>

                    <div className="p-4 rounded-[16px] bg-white border border-[#D2D2D7] text-xs text-[#6E6E73] leading-[1.6]">
                      <strong className="text-[#1D1D1F] block mb-1 font-semibold">Strategic Context:</strong>
                      {phase.detail}
                    </div>
                  </SlideReveal>

                  {/* Column 2: Key Deliverables */}
                  <SlideReveal
                    direction={isEven ? 'right' : 'left'}
                    distance={40}
                    duration={0.65}
                    delay={0.1}
                    className="lg:col-span-7 rounded-[20px] bg-white border border-[#D2D2D7] p-6 lg:p-8"
                  >
                    <h4 className="text-xs font-sans font-semibold uppercase tracking-[0.08em] text-[#1D1D1F] mb-4">
                      CORE PHASE DELIVERABLES
                    </h4>
                    <ul className="space-y-3.5">
                      {phase.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#1D1D1F]">
                          <div className="w-4 h-4 rounded-full bg-[#F5F5F7] text-[#1D1D1F] flex items-center justify-center shrink-0 mt-0.5 border border-[#D2D2D7]">
                            <Check className="w-2.5 h-2.5 text-[#1D1D1F]" />
                          </div>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-5 border-t border-[#D2D2D7] flex items-center justify-between text-xs text-[#6E6E73] font-sans">
                      <span>Verifiable milestone audit</span>
                      <span className="text-[#1D1D1F] font-semibold">Documented & Delivered</span>
                    </div>
                  </SlideReveal>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --------------------------------------------------
          COLLABORATION MODEL
      -------------------------------------------------- */}
      <section className="site-section bg-[#F5F5F7] border-y border-[#D2D2D7] overflow-hidden">
        <div className="site-container">
          
          <SlideReveal direction="left" distance={36} duration={0.65}>
            <div className="max-w-3xl mb-12 lg:mb-16">
              <span className="eyebrow-label">
                CLIENT COLLABORATION MODEL
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D1D1F] tracking-tight mb-4">
                How we work alongside your team
              </h2>
              <p className="intro-text">
                Citepoint operates as an extension of your growth organization, providing specialized AI visibility intelligence while integrating into your existing PR, SEO, and content workflows.
              </p>
            </div>
          </SlideReveal>

          <SlideStaggerContainer staggerDelay={0.1} className="card-grid-3">
            <SlideStaggerItem direction="scale-up" className="bg-white border border-[#D2D2D7] p-6 lg:p-8 rounded-[24px] flex flex-col justify-between h-full group cursor-default hover:border-[#1D1D1F] transition-all">
              <div>
                <div className="w-9 h-9 rounded-full bg-[#F5F5F7] border border-[#D2D2D7] flex items-center justify-center text-[#1D1D1F] mb-4">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-base font-sans font-bold text-[#1D1D1F] mb-2">
                  Executive & Marketing Alignment
                </h3>
                <p className="body-text text-xs sm:text-sm">
                  Bi-weekly strategic syncs and monthly executive scorecards connect AI visibility metrics directly to commercial pipeline and category authority.
                </p>
              </div>
            </SlideStaggerItem>

            <SlideStaggerItem direction="scale-up" className="bg-white border border-[#D2D2D7] p-6 lg:p-8 rounded-[24px] flex flex-col justify-between h-full group cursor-default hover:border-[#1D1D1F] transition-all">
              <div>
                <div className="w-9 h-9 rounded-full bg-[#F5F5F7] border border-[#D2D2D7] flex items-center justify-center text-[#1D1D1F] mb-4">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-base font-sans font-bold text-[#1D1D1F] mb-2">
                  Asynchronous Sprint Rhythm
                </h3>
                <p className="body-text text-xs sm:text-sm">
                  Clear documentation, structured change requests, and verified deliverables ensure high momentum without burdensome meetings.
                </p>
              </div>
            </SlideStaggerItem>

            <SlideStaggerItem direction="scale-up" className="bg-white border border-[#D2D2D7] p-6 lg:p-8 rounded-[24px] flex flex-col justify-between h-full group cursor-default hover:border-[#1D1D1F] transition-all">
              <div>
                <div className="w-9 h-9 rounded-full bg-[#F5F5F7] border border-[#D2D2D7] flex items-center justify-center text-[#1D1D1F] mb-4">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-base font-sans font-bold text-[#1D1D1F] mb-2">
                  Strict NDA & Governance
                </h3>
                <p className="body-text text-xs sm:text-sm">
                  Enterprise data handling, mutual NDAs, and confidentiality safeguards protect your strategic roadmap and competitive benchmarks.
                </p>
              </div>
            </SlideStaggerItem>
          </SlideStaggerContainer>

        </div>
      </section>

      {/* --------------------------------------------------
          FINAL ACTION SECTION
      -------------------------------------------------- */}
      <section className="site-section bg-white text-[#1D1D1F] relative overflow-hidden border-t border-[#D2D2D7]">
        <div className="site-container text-center">
          <SlideReveal direction="up" distance={40} duration={0.8}>
            <div className="max-w-4xl mx-auto space-y-6">
              <span className="eyebrow-label text-center mx-auto">
                PHASE 01 DISCOVERY
              </span>
              <h2 className="text-3xl sm:text-5xl font-semibold text-[#1D1D1F] tracking-tight leading-tight">
                Discover how your brand currently fares in Phase 01.
              </h2>
              <p className="intro-text mx-auto">
                We begin with a targeted discovery audit to show where you appear, what AI says, and where competitors have claimed citations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 hero-buttons-container">
                <button
                  onClick={() => handleNav('audit')}
                  className="btn-primary w-full sm:w-auto"
                >
                  <span>Request Phase 01 Audit</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => handleNav('contact')}
                  className="btn-secondary w-full sm:w-auto"
                >
                  <span>Schedule a Consultation</span>
                </button>
              </div>
            </div>
          </SlideReveal>
        </div>
      </section>

    </div>
  );
}
