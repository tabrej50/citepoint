import React, { useState } from 'react';
import {
  FileSearch,
  Sparkles,
  Award,
  Code2,
  LineChart,
  Target,
  ArrowRight,
  Check,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import { SlideReveal, SlideStaggerContainer, SlideStaggerItem } from '../components/SlideReveal';

/**
 * Auros Abyssal ServicesPage
 * - Canvas: Liquid Abyss (#012624)
 * - Raised surfaces: Liquid Kelp (#003734) with 16px radius, no drop shadows
 * - Recessed wells: Liquid Deep (#011d1c)
 * - SEO vs GEO comparison table on dark kelp/deep surfaces
 * - Headings: DM Sans weight 500 ONLY, Platinum (#ffffff)
 * - Body: DM Sans weight 400, Silver Mist (#bbc7c6)
 */
export default function ServicesPage({ setCurrentRoute }) {
  const [selectedService, setSelectedService] = useState(0);

  const handleNav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      id: 'audit',
      num: '01',
      title: 'AI Visibility Audit',
      label: 'FOUNDATION',
      category: 'Core Engagement',
      isCore: true,
      icon: FileSearch,
      tagline: 'Establish exactly how AI systems currently discover, describe, cite, and recommend your brand.',
      summary: 'Before modifying content architecture or PR investments, we establish an empirical baseline across ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews.',
      methodology: [
        { title: 'Prompt Cluster Mapping', desc: 'Executing 15–25 high-intent buyer queries reflecting real evaluation and vendor shortlist scenarios.' },
        { title: 'Competitor Share of Voice', desc: 'Benchmarking your presence against up to 3 primary competitors across AI-generated answers.' },
        { title: 'Source Authority Attribution', desc: 'Tracing which third-party domains, publications, and data sources AI models reference for your category.' },
        { title: 'Accuracy & Visibility Gap Catalog', desc: 'Documenting hallucinations, outdated information, and missing capabilities in AI responses.' }
      ],
      deliverables: [
        'Multi-platform AI visibility benchmark (ChatGPT, Perplexity, Gemini, Claude, Google AI Overviews)',
        '15–25 high-intent buyer prompts evaluated',
        'Benchmark against up to 3 competitors',
        'Citation and source authority attribution map',
        'Accuracy and hallucination risk catalog',
        'Prioritized 90-day action roadmap'
      ],
      timeframe: '5–7 Business Days',
      ctaText: 'Get Your AI Visibility Audit',
      ctaAction: 'audit'
    },
    {
      id: 'geo',
      num: '02',
      title: 'Generative Engine Optimization',
      label: 'CORE GROWTH',
      category: 'Core Engagement',
      isCore: true,
      icon: Sparkles,
      tagline: 'Turn audit findings into an ongoing program for improving AI visibility, content discoverability, and recommendation share.',
      summary: 'An active, iterative program designed to expand your brand presence across high-intent evaluation prompts, optimize technical structure, and secure influential citations.',
      methodology: [
        { title: 'Answer-First Content Architecture', desc: 'Refactoring technical documentation, case studies, and feature pages into direct answers to high-intent buyer prompts.' },
        { title: 'Entity & Structured Data', desc: 'Structuring your value propositions into subject-predicate-object relationships that AI parsers store accurately.' },
        { title: 'Citation Network Development', desc: 'Developing authoritative citations across the publications and databases AI models consult.' },
        { title: 'Continuous Model Adaptation', desc: 'Measuring prompt shifts and updating content models to maintain dominant synthetic recommendation share.' }
      ],
      deliverables: [
        'Ongoing AI visibility monitoring & prompt benchmarking',
        'Answer-first and citation-worthy content development',
        'Entity and structured-data implementation',
        'Citation and source authority development',
        'Competitive visibility tracking',
        'Monthly executive reporting and strategic recommendations'
      ],
      timeframe: 'Ongoing Monthly Engagement',
      ctaText: 'Discuss GEO Engagement',
      ctaAction: 'contact'
    },
    {
      id: 'authority',
      num: '03',
      title: 'Citation & Authority Building',
      label: 'AUTHORITY',
      category: 'Core Engagement',
      isCore: true,
      icon: Award,
      tagline: 'Strengthen the external signals and trusted sources that influence how AI systems understand and recommend your brand.',
      summary: 'AI models rarely rely solely on your website. They validate your claims against verified third-party publications, industry databases, expert reviews, and digital PR consensus.',
      methodology: [
        { title: 'Authoritative Publication Placements', desc: 'Targeting editorial mentions in trade publications indexed in core LLM training and retrieval sets.' },
        { title: 'Review & Comparison Optimization', desc: 'Structuring presence on G2, Capterra, Gartner Peer Insights, and specialized vertical repositories.' },
        { title: 'Expert Commentary & Digital PR', desc: 'Distributing executive commentary and proprietary benchmark research cited in high-trust channels.' },
        { title: 'Knowledge Graph & Entity Alignment', desc: 'Aligning entity records across authoritative structured data registries and Wikipedia/Wikidata.' }
      ],
      deliverables: [
        'Industry publication placements & editorial citations',
        'High-authority third-party source development',
        'Review and comparison platform optimization',
        'Expert commentary and digital PR opportunities',
        'Knowledge repository and citation alignment',
        'Competitive citation displacement analysis'
      ],
      timeframe: 'Targeted or Monthly Retainer',
      ctaText: 'Build Your Authority',
      ctaAction: 'contact'
    },
    {
      id: 'technical',
      num: '04',
      title: 'Technical AI Readiness',
      label: 'TECHNICAL',
      category: 'Specialized Capability',
      isCore: false,
      icon: Code2,
      tagline: 'Improve the technical and structural foundation that helps AI systems discover, interpret, and retrieve your information.',
      summary: 'If AI crawlers encounter JavaScript rendering roadblocks, crawl budget limits, or ambiguous schemas, your content is skipped during real-time retrieval.',
      methodology: [
        { title: 'Crawler Permissions & Robots.txt', desc: 'Optimizing bot access rules for GPTBot, PerplexityBot, ClaudeBot, and Google-Extended.' },
        { title: 'Schema Markup & JSON-LD', desc: 'Deploying nested Organization, SoftwareApplication, FAQPage, and About schemas.' },
        { title: 'Server-Side Content Discoverability', desc: 'Ensuring essential brand claims and data tables are fully visible in static HTML without client-side delays.' },
        { title: 'Machine-Readable Architecture', desc: 'Formatting technical documentation, APIs, and semantic feeds tailored for automated retrieval.' }
      ],
      deliverables: [
        'Schema markup & JSON-LD implementation',
        'AI crawler access & robots.txt optimization (GPTBot, ClaudeBot, PerplexityBot)',
        'Entity architecture & knowledge graph alignment',
        'Server-side content discoverability audit',
        'Machine-readable technical documentation structure'
      ],
      timeframe: 'Sprint / Component Scope',
      ctaText: 'Inquire About Technical Readiness',
      ctaAction: 'contact'
    },
    {
      id: 'monitoring',
      num: '05',
      title: 'AI Reputation Monitoring',
      label: 'INTELLIGENCE',
      category: 'Specialized Capability',
      isCore: false,
      icon: LineChart,
      tagline: 'Track how AI systems describe your company, products, category, and competitors over time.',
      summary: 'Generative search answers change dynamically as models update their indexes. We provide continuous intelligence to detect prompt shifts, inaccuracies, and competitor incursions.',
      methodology: [
        { title: 'Automated Prompt Tracking', desc: 'Continuous query execution across core model releases to measure recommendation presence.' },
        { title: 'Citation & Source Attribution', desc: 'Tracking which third-party domains and sources are surfaced when your category is searched.' },
        { title: 'Brand Accuracy & Hallucination Alerts', desc: 'Real-time detection when an AI engine cites outdated pricing or hallucinates features.' },
        { title: 'Competitor Movement Tracking', desc: 'Monitoring shifts when competitors displace your brand in primary recommendation clusters.' }
      ],
      deliverables: [
        'Multi-platform prompt tracking (ChatGPT, Perplexity, Gemini, Claude)',
        'Citation and source attribution monitoring',
        'Recommendation-share tracking across category queries',
        'Brand accuracy & hallucination alert system',
        'Competitor movement & displacement tracking',
        'Executive visibility reporting'
      ],
      timeframe: 'Continuous Retainer',
      ctaText: 'Inquire About Monitoring',
      ctaAction: 'contact'
    },
    {
      id: 'strategy',
      num: '06',
      title: 'AI Search Strategy',
      label: 'STRATEGY',
      category: 'Specialized Capability',
      isCore: false,
      icon: Target,
      tagline: 'Turn AI visibility into a measurable component of your broader demand-generation and revenue strategy.',
      summary: 'We connect technical GEO and citation readiness to your commercial pipeline, ensuring AI visibility generates qualified buyer consideration and closed-won revenue.',
      methodology: [
        { title: 'Buyer-Journey AI Question Mapping', desc: 'Mapping prompts across Awareness, Consideration, Pricing, and Security compliance evaluation stages.' },
        { title: 'Executive Visibility Dashboards', desc: 'Designing leadership reporting tracking synthetic recommendation share against revenue outcomes.' },
        { title: 'Content Production Roadmap', desc: 'Sequencing high-impact answer documentation and third-party validation assets.' },
        { title: 'Cross-Functional Team Alignment', desc: 'Aligning product marketing, SEO, PR, and demand gen teams on the synthetic search transition.' }
      ],
      deliverables: [
        'Buyer-journey AI question matrix (100+ mapped commercial prompts)',
        'Quarterly AI content and authority roadmap',
        'Executive recommendation-share dashboards',
        'Competitive displacement battlecards for sales enablement',
        'Cross-functional operational guidelines'
      ],
      timeframe: 'Strategic Retainer or Initial 90-Day Sprint',
      ctaText: 'Schedule Strategy Session',
      ctaAction: 'contact'
    }
  ];

  const comparisonRows = [
    {
      dimension: 'Primary Objective',
      seo: 'Rank #1 on blue-link search engine result pages (SERPs)',
      geo: 'Earn citations, mentions, and authoritative recommendation in synthesized AI answers'
    },
    {
      dimension: 'Target Architecture',
      seo: 'PageRank, click-through rates, traditional keyword indexing',
      geo: 'Generative transformer models, Retrieval-Augmented Generation (RAG), entity knowledge graphs'
    },
    {
      dimension: 'Content Structure',
      seo: 'Long-form articles optimized for keyword density and search volume',
      geo: 'Modular, answer-first knowledge triples, verified claims, and structured technical data'
    },
    {
      dimension: 'Source Evaluation',
      seo: 'Backlinks and domain authority score',
      geo: 'Third-party consensus, citations across training datasets, peer review platforms'
    },
    {
      dimension: 'Query Complexity',
      seo: '2-4 keyword phrases (e.g., "best enterprise crm")',
      geo: 'Conversational, multi-constraint buyer prompts (e.g., "best enterprise CRM for SOC2 compliance with native Snowflake ETL")'
    },
    {
      dimension: 'Success Metric',
      seo: 'Organic sessions, keyword rankings, bounce rate',
      geo: 'Recommendation share of voice, citation presence, qualified inbound pipeline'
    },
  ];

  const currentSvc = services[selectedService];
  const CurrentIcon = currentSvc.icon;

  return (
    <div className="w-full bg-transparent text-[#bbc7c6] font-matter">
      
      {/* --------------------------------------------------
          PAGE HERO (Liquid Abyss #012624)
      -------------------------------------------------- */}
      <section className="bg-[#012624]/60 backdrop-blur-[2px] text-white pt-120 sm:pt-140 lg:pt-144 pb-24 sm:pb-28 lg:pb-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <SlideReveal direction="down" distance={36} duration={0.65}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] bg-[#003734] border border-white/10 text-xs font-matter font-medium uppercase tracking-[0.12em] text-[#edfffe] mb-4">
                // CITEPOINT SERVICE SUITE
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-matter font-medium text-white tracking-tightest leading-[1.08] mb-6 [text-wrap:balance]">
                Engineering brand visibility in the answer economy.
              </h1>
            </SlideReveal>
            <SlideReveal direction="up" distance={32} duration={0.65} delay={0.12}>
              <p className="text-base sm:text-lg text-[#bbc7c6] leading-[1.4] mb-8">
                We combine AI visibility research, structured content engineering, technical optimization, and authoritative citation building to help your brand become recommended across AI search.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleNav('audit')}
                  className="btn-aurora"
                >
                  <span>Get Your AI Visibility Audit</span>
                  <ArrowRight className="w-4 h-4 text-[#222222]" />
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
        </div>
      </section>

      {/* --------------------------------------------------
          SERVICES OVERVIEW & SELECTOR (Liquid Deep #011d1c)
      -------------------------------------------------- */}
      <section className="py-48 lg:py-64 bg-[#011d1c]/70 backdrop-blur-[2px] border-y border-white/8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="left" distance={40} duration={0.65}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#003734] border border-white/10 text-xs font-matter font-medium uppercase tracking-[0.12em] text-[#edfffe] mb-3">
                  SERVICES ARCHITECTURE
                </div>
                <h2 className="text-3xl sm:text-4xl font-matter font-medium text-white tracking-tight mb-3">
                  Comprehensive capabilities, disciplined delivery
                </h2>
                <p className="text-base text-[#bbc7c6] leading-[1.4]">
                  Core engagements represent how clients work with Citepoint. Technical readiness, monitoring, and strategy are delivered as integral components of these engagements.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-[6px] bg-[#003734] text-[#cbfffc] border border-white/10 text-xs font-matter uppercase tracking-[0.08em]">
                  01–03 Core Engagements
                </span>
                <span className="px-3 py-1 rounded-[6px] bg-[#012624] text-[#bbc7c6] border border-white/8 text-xs font-matter uppercase tracking-[0.08em]">
                  04–06 Specialized Capabilities
                </span>
              </div>
            </div>
          </SlideReveal>

          {/* Interactive Service Selector (6px buttons) */}
          <SlideReveal direction="right" distance={35} delay={0.1} duration={0.6}>
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 lg:mb-10 no-scrollbar">
              {services.map((svc, idx) => (
                <button
                  key={svc.id}
                  onClick={() => setSelectedService(idx)}
                  className={`px-4 py-2.5 rounded-[6px] text-xs font-matter uppercase tracking-[0.08em] whitespace-nowrap transition-colors flex items-center gap-2 border cursor-pointer ${
                    selectedService === idx
                      ? 'bg-[#003734] text-white border-[#cbfffc]'
                      : 'bg-[#012624] text-[#bbc7c6] border-white/10 hover:border-white/25 hover:text-white'
                  }`}
                >
                  <span className="text-[#cbfffc] font-medium">{svc.num}</span>
                  <span>{svc.title}</span>
                  {svc.isCore && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cbfffc]" />
                  )}
                </button>
              ))}
            </div>
          </SlideReveal>

          {/* Active Service Detailed View Card (Liquid Kelp #003734, 16px radius) */}
          <SlideReveal direction="scale-up" distance={28} duration={0.75} className="surface-card p-6 lg:p-8 group">
            
            {/* Service Header Row */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 lg:pb-8 border-b border-white/8">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-[6px] bg-[#011d1c] border border-white/10 flex items-center justify-center text-[#cbfffc] shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#cbfffc]/40 group-hover:shadow-[0_0_15px_rgba(203,255,252,0.2)]">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-[4px] bg-[#011d1c] text-[#edfffe] border border-white/10 text-[10px] font-matter uppercase tracking-[0.12em]">
                      {currentSvc.category}
                    </span>
                    <span className="text-xs font-matter text-[#bbc7c6] uppercase tracking-[0.12em]">
                      // {currentSvc.label}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-matter font-medium text-white transition-colors duration-200 group-hover:text-[#cbfffc]">
                    {currentSvc.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="px-3.5 py-1.5 rounded-[6px] bg-[#011d1c] border border-white/10 text-xs text-[#bbc7c6] font-matter">
                  Scope: <strong className="text-white font-medium">{currentSvc.timeframe}</strong>
                </div>
                <button
                  onClick={() => handleNav(currentSvc.ctaAction)}
                  className="btn-aurora text-xs"
                >
                  <span>{currentSvc.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#222222]" />
                </button>
              </div>
            </div>

            {/* Tagline & Summary */}
            <div className="py-6 lg:py-8">
              <p className="text-base sm:text-lg font-matter font-medium text-[#cbfffc] mb-2">
                {currentSvc.tagline}
              </p>
              <p className="text-sm sm:text-base text-[#bbc7c6] leading-[1.4] max-w-4xl">
                {currentSvc.summary}
              </p>
            </div>

            {/* Two Columns: Methodology & Deliverables */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-6 lg:pt-8 border-t border-white/8">
              
              {/* Methodology */}
              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xs font-matter font-medium uppercase tracking-[0.12em] text-[#edfffe]">
                  // TECHNICAL SCOPE & METHODOLOGY
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentSvc.methodology.map((m, mIdx) => (
                    <div key={mIdx} className="p-5 rounded-[8px] bg-[#011d1c]/90 border border-white/8 space-y-1.5 transition-all duration-300 hover:border-[#cbfffc]/30 hover:bg-[#011d1c]">
                      <div className="flex items-center gap-2 text-xs font-matter font-medium text-[#cbfffc]">
                        <span>// 0{mIdx + 1}</span>
                      </div>
                      <h5 className="text-sm font-matter font-medium text-white">
                        {m.title}
                      </h5>
                      <p className="text-xs text-[#bbc7c6] leading-[1.4]">
                        {m.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="lg:col-span-5 rounded-[12px] bg-[#011d1c]/90 border border-white/8 p-6 lg:p-8 flex flex-col justify-between shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                <div>
                  <h4 className="text-xs font-matter font-medium uppercase tracking-[0.12em] text-[#cbfffc] mb-4">
                    // TANGIBLE DELIVERABLES
                  </h4>
                  <ul className="space-y-3 text-xs sm:text-sm font-matter">
                    {currentSvc.deliverables.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-[#edfffe]">
                        <div className="w-4 h-4 rounded-full bg-[#003734] text-[#cbfffc] flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-[1.4]">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/8 mt-6">
                  <button
                    onClick={() => handleNav(currentSvc.ctaAction)}
                    className="w-full btn-kelp text-xs"
                  >
                    <span>{currentSvc.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </SlideReveal>

          {/* 6-Grid Quick Comparison */}
          <div className="mt-12 lg:mt-16">
            <SlideReveal direction="left" distance={30} duration={0.6}>
              <h3 className="text-lg font-matter font-medium text-white mb-6 lg:mb-8">
                All 6 Capabilities at a Glance
              </h3>
            </SlideReveal>
            <SlideStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((svc, sIdx) => {
                const IconC = svc.icon;
                const directions = ['diagonal-left', 'up', 'diagonal-right', 'diagonal-left', 'up', 'diagonal-right'];
                return (
                  <SlideStaggerItem
                    key={svc.id}
                    direction={directions[sIdx % directions.length]}
                    onClick={() => setSelectedService(sIdx)}
                    className={`surface-card p-6 lg:p-8 cursor-pointer h-full flex flex-col justify-between group ${
                      selectedService === sIdx
                        ? '!border-[#cbfffc] !shadow-[inset_0_1px_0_0_rgba(203,255,252,0.4),0_0_30px_rgba(203,255,252,0.18),0_20px_45px_-10px_rgba(0,0,0,0.7)] -translate-y-1'
                        : ''
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-9 h-9 rounded-[6px] bg-[#011d1c] border border-white/10 flex items-center justify-center text-[#cbfffc] transition-all duration-300 group-hover:scale-110 group-hover:border-[#cbfffc]/40 group-hover:shadow-[0_0_12px_rgba(203,255,252,0.2)]">
                          <IconC className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-matter font-medium text-[#cbfffc]">
                          {svc.num}
                        </span>
                      </div>
                      <h4 className="text-base font-matter font-medium mb-2 text-white transition-colors duration-200 group-hover:text-[#cbfffc]">
                        {svc.title}
                      </h4>
                      <p className="text-xs text-[#bbc7c6] leading-[1.4] line-clamp-3 mb-4">
                        {svc.tagline}
                      </p>
                    </div>
                    <div className="text-xs font-matter font-medium text-[#cbfffc] flex items-center gap-1 pt-2 transition-transform duration-300 group-hover:translate-x-1">
                      <span>View details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </SlideStaggerItem>
                );
              })}
            </SlideStaggerContainer>
          </div>

        </div>
      </section>

      {/* --------------------------------------------------
          HOW IT COMES TOGETHER (Liquid Abyss #012624)
      -------------------------------------------------- */}
      <section className="py-48 lg:py-64 bg-[#012624]/60 backdrop-blur-[2px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="right" distance={40} duration={0.65}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#003734] border border-white/10 text-xs font-matter font-medium uppercase tracking-[0.12em] text-[#edfffe] mb-3">
                  OPERATING PHASES
                </div>
                <h2 className="text-3xl sm:text-4xl font-matter font-medium text-white tracking-tight mb-3">
                  One visibility system. Four operating phases.
                </h2>
                <p className="text-base text-[#bbc7c6] leading-[1.4]">
                  We discover where your brand stands, diagnose the gaps, build the signals that matter, and measure how AI visibility changes over time.
                </p>
              </div>
              <div>
                <button
                  onClick={() => handleNav('how-it-works')}
                  className="btn-kelp"
                >
                  <span>See How It Works</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </SlideReveal>

          <SlideStaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              {
                step: '01',
                name: 'Discover',
                desc: 'Map high-intent buyer prompts, evaluate AI answer citations, and baseline your current visibility against competitors.'
              },
              {
                step: '02',
                name: 'Diagnose',
                desc: 'Uncover hallucinated facts, source omissions, crawl roadblocks, and why generative models recommend alternatives.'
              },
              {
                step: '03',
                name: 'Build',
                desc: 'Engineer modular answer content, structure entity schemas, and develop trusted third-party authority signals.'
              },
              {
                step: '04',
                name: 'Measure',
                desc: 'Track ongoing recommendation share across all major LLMs, detect prompt shifts, and defend citation positions.'
              }
            ].map((phase, pIdx) => (
              <SlideStaggerItem
                key={pIdx}
                direction="up"
                className="surface-card p-6 h-full flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="text-xs font-matter font-medium text-[#cbfffc] mb-2 uppercase tracking-[0.12em] transition-colors duration-200 group-hover:text-white">
                    // PHASE {phase.step}
                  </div>
                  <h3 className="text-lg font-matter font-medium text-white mb-2 transition-colors duration-200 group-hover:text-[#cbfffc]">
                    {phase.name}
                  </h3>
                  <p className="text-xs text-[#bbc7c6] leading-[1.4]">
                    {phase.desc}
                  </p>
                </div>
              </SlideStaggerItem>
            ))}
          </SlideStaggerContainer>

        </div>
      </section>

      {/* --------------------------------------------------
          COMPARISON TABLE: SEO VS GEO (Liquid Deep #011d1c)
      -------------------------------------------------- */}
      <section className="py-48 lg:py-64 bg-[#011d1c]/70 backdrop-blur-[2px] border-y border-white/8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="up" distance={36} duration={0.65}>
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#003734] border border-white/10 text-xs font-matter font-medium uppercase tracking-[0.12em] text-[#edfffe] mb-3">
                PARADIGM COMPARISON
              </div>
              <h2 className="text-3xl sm:text-4xl font-matter font-medium text-white tracking-tight mb-4">
                Traditional SEO vs. Generative Engine Optimization
              </h2>
              <p className="text-base text-[#bbc7c6] leading-[1.4]">
                Why tactics designed for 10 blue links fail in modern AI synthesis models—and how Citepoint bridges the gap.
              </p>
            </div>
          </SlideReveal>

          <SlideReveal direction="scale-up" distance={25} duration={0.8} delay={0.1}>
            <div className="surface-card-static overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm font-matter">
                  <thead>
                    <tr className="border-b border-white/10 bg-[#011d1c] text-white">
                      <th className="p-4 lg:p-5 font-matter font-medium w-1/4">Evaluation Dimension</th>
                      <th className="p-4 lg:p-5 font-matter font-medium w-3/8 text-[#bbc7c6]">Traditional SEO (10 Blue Links)</th>
                      <th className="p-4 lg:p-5 font-matter font-medium w-3/8 text-[#cbfffc] bg-[#00827c]/15">Citepoint GEO (Synthesized Answers)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/8">
                    {comparisonRows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-[#012624]/40 transition-colors">
                        <td className="p-4 lg:p-5 font-matter font-medium text-white">
                          {row.dimension}
                        </td>
                        <td className="p-4 lg:p-5 text-[#bbc7c6] leading-[1.4]">
                          {row.seo}
                        </td>
                        <td className="p-4 lg:p-5 text-[#edfffe] bg-[#00827c]/10 leading-[1.4]">
                          <div className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#cbfffc] shrink-0 mt-0.5" />
                            <span>{row.geo}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </SlideReveal>

        </div>
      </section>

      {/* --------------------------------------------------
          FINAL CTA SECTION (Liquid Abyss #012624)
      -------------------------------------------------- */}
      <section className="bg-[#012624]/60 backdrop-blur-[2px] text-white py-48 lg:py-64 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <SlideReveal direction="scale-up" distance={36} duration={0.8}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] bg-[#003734] border border-white/10 text-xs font-matter font-medium uppercase tracking-[0.12em] text-[#edfffe]">
              START YOUR EVALUATION
            </div>
            <h2 className="text-3xl sm:text-5xl font-matter font-medium text-white tracking-tightest leading-none mt-4">
              Ready to inspect your brand’s AI search footprint?
            </h2>
            <p className="text-base sm:text-lg text-[#bbc7c6] max-w-2xl mx-auto leading-[1.4] mt-4">
              Start with our diagnostic audit to discover which questions your buyers are asking, and where your brand is currently cited.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <button
                onClick={() => handleNav('audit')}
                className="btn-aurora"
              >
                <span>Get Your AI Visibility Audit</span>
                <ArrowRight className="w-4 h-4 text-[#222222]" />
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
