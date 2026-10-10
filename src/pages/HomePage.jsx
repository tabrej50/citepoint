import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Eye,
  AlertTriangle,
  TrendingUp,
  FileSearch,
  Sparkles,
  Quote,
  Database,
  Shield,
  Target,
  Check,
  HelpCircle,
  Bot,
  CheckCircle2,
  Award,
  ArrowUpRight,
  ChevronDown
} from 'lucide-react';
import FaqAccordion from '../components/FaqAccordion';
import HeroAnimatedHeadline from '../components/HeroAnimatedHeadline';
import HeroVideoBackground from '../components/HeroVideoBackground';
import SlideReveal, { SlideStaggerContainer, SlideStaggerItem } from '../components/SlideReveal';
import { AiEngineIcon, AI_ENGINES } from '../components/AiEnginesRow';
import {
  ProblemParallaxBackdrop,
  ServicesParallaxBackdrop,
  MethodParallaxBackdrop,
  CaseStudiesParallaxBackdrop,
  WhyUsParallaxBackdrop,
  FaqParallaxBackdrop,
  FinalCtaParallaxBackdrop,
} from '../components/parallax/SectionParallaxBackdrops';

/**
 * Auros Abyssal HomePage
 * - Canvas: Liquid Abyss (#010102)
 * - Raised surfaces: Liquid Kelp (#141516) with 16px radius, no drop shadows
 * - Recessed wells: Liquid Deep (#0f1011) with 16px radius
 * - Primary CTAs: Signature Aurora Gradient Button (6px radius, Arial 14px uppercase, dark #222222)
 * - Secondary CTAs: Liquid Kelp Button (6px radius, Arial 14px uppercase, white text)
 * - Headings: DM Sans weight 500 ONLY, line-height 1.0, Platinum (#ffffff)
 * - Body: DM Sans weight 400, line-height 1.4, Silver Mist (#8a8f98)
 * - Stats: Lavender Phosphor (#828fff)
 */
export default function HomePage({ setCurrentRoute, initialSection }) {
  const [activeStep, setActiveStep] = useState(0);

  // Parallax section refs
  const heroRef = useRef(null);
  const problemRef = useRef(null);
  const servicesRef = useRef(null);
  const methodRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const whyUsRef = useRef(null);
  const faqRef = useRef(null);
  const finalCtaRef = useRef(null);

  const handleNav = (route) => {
    if (route.startsWith('#')) {
      const el = document.querySelector(route);
      if (el) {
        if (window.__lenis) {
          window.__lenis.scrollTo(el, { offset: -80, duration: 1.0 });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
    }
    setCurrentRoute(route);
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 0.8 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const trustBadges = [
    'B2B SaaS',
    'Technology',
    'Professional Services',
    'Healthcare',
    'Financial Services',
  ];

  const services = [
    {
      num: '01',
      title: 'AI Visibility Audit',
      desc: 'Understand how ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews currently describe and recommend your brand.',
      deliverables: [
        'Prompt-cluster research',
        'Competitor comparison',
        'Citation-source analysis',
        'Visibility baseline',
      ],
      icon: FileSearch,
    },
    {
      num: '02',
      title: 'Generative Engine Optimization',
      desc: 'Build the content and authority signals that make your brand easier for AI systems to understand and cite.',
      deliverables: [
        'Entity and topic mapping',
        'Answer-focused content',
        'Internal linking',
        'Structured information',
      ],
      icon: Sparkles,
    },
    {
      num: '03',
      title: 'Citation & Authority Building',
      desc: 'Strengthen your presence across the third-party sources AI systems already trust.',
      deliverables: [
        'Industry publications',
        'Review platforms',
        'Expert commentary',
        'Digital PR opportunities',
      ],
      icon: Quote,
    },
    {
      num: '04',
      title: 'Technical AI Readiness',
      desc: 'Improve the technical foundation that helps search engines and AI systems crawl, interpret, and retrieve your information.',
      deliverables: [
        'Schema and structured data',
        'Crawlability',
        'Knowledge architecture',
        'Content discoverability',
      ],
      icon: Database,
    },
    {
      num: '05',
      title: 'AI Reputation Monitoring',
      desc: 'Track how AI describes your company, category, competitors, products, and leadership over time.',
      deliverables: [
        'Prompt monitoring',
        'Citation tracking',
        'Sentiment and accuracy checks',
        'Monthly reporting',
      ],
      icon: Shield,
    },
    {
      num: '06',
      title: 'AI Search Strategy',
      desc: 'Turn AI visibility into a measurable part of your demand-generation and revenue strategy.',
      deliverables: [
        'Priority use cases',
        'Buyer-question mapping',
        'Content roadmap',
        'Executive reporting',
      ],
      icon: Target,
    },
  ];

  const signatureFlow = [
    { step: '01', label: 'Buyer question', icon: HelpCircle, desc: 'High-intent commercial query asked in natural language' },
    { step: '02', label: 'AI-generated answer', icon: Bot, desc: 'Model synthesizes response using retrieval sources' },
    { step: '03', label: 'Trusted source', icon: ShieldCheck, desc: 'Authoritative third-party citation or database referenced' },
    { step: '04', label: 'Brand mention', icon: Award, desc: 'Your company recommended with accurate positioning' },
    { step: '05', label: 'Qualified action', icon: CheckCircle2, desc: 'High-intent buyer explores and enters your sales pipeline' },
  ];

  const processSteps = [
    {
      step: 'Step 01',
      title: 'Discover',
      desc: 'We map your category, audience, competitors, buyer questions, and current AI presence.',
    },
    {
      step: 'Step 02',
      title: 'Diagnose',
      desc: 'We identify visibility gaps, citation gaps, content gaps, and technical barriers.',
    },
    {
      step: 'Step 03',
      title: 'Build',
      desc: 'We improve the sources, content, structure, and authority signals that influence AI discovery.',
    },
    {
      step: 'Step 04',
      title: 'Measure',
      desc: 'We monitor changes across AI platforms and connect visibility improvements to business outcomes.',
    },
  ];

  const caseStudyPlaceholders = [
    {
      title: 'B2B SaaS visibility audit',
      status: 'Coming soon',
      note: 'Anonymized client result will be published after permission.',
      category: 'Enterprise Software',
      metricLabel: 'Visibility Shift',
      metricValue: 'In progress',
    },
    {
      title: 'AI citation-source analysis',
      status: 'Coming soon',
      note: 'Anonymized client result will be published after permission.',
      category: 'Professional Services',
      metricLabel: 'Citation Coverage',
      metricValue: 'In progress',
    },
    {
      title: 'Technical AI readiness',
      status: 'Coming soon',
      note: 'Anonymized client result will be published after permission.',
      category: 'Fintech & Security',
      metricLabel: 'Entity Alignment',
      metricValue: 'In progress',
    },
  ];

  const differentiators = [
    {
      num: '01',
      title: 'Visibility you can inspect',
      desc: 'We show what AI says, which sources it cites, and how your competitors appear.',
    },
    {
      num: '02',
      title: 'Strategy before production',
      desc: 'We begin with buyer questions and business priorities, not a random content calendar.',
    },
    {
      num: '03',
      title: 'Human judgment, AI-enabled delivery',
      desc: 'We use AI to accelerate research and analysis while keeping strategy, verification, and accountability human.',
    },
    {
      num: '04',
      title: 'Built for durable authority',
      desc: 'We focus on useful content, credible sources, and genuine expertise—not manipulation or short-term tricks.',
    },
  ];

  const engagements = [
    {
      num: '01',
      label: 'AI VISIBILITY AUDIT',
      title: 'AI Visibility Audit',
      desc: 'A focused assessment of your brand’s AI search presence across leading platforms.',
      price: '$1,500',
      pricePeriod: 'flat fee',
      priceNote: 'One-time engagement',
      cta: 'Request an Audit',
      action: () => handleNav('audit'),
      features: [
        '5 AI platforms audited',
        'Targeted buyer prompt testing',
        'Competitor mention analysis',
        'Citation source identification',
        'Executive roadmap & recommendations',
      ],
    },
    {
      num: '02',
      label: 'VISIBILITY GROWTH',
      badge: 'RECOMMENDED',
      title: 'Visibility Growth',
      desc: 'A structured 90-day program to improve discoverability, authority, and citation readiness.',
      price: '$3,500',
      pricePeriod: '/month',
      priceNote: '3-month minimum',
      cta: 'Discuss Your Goals',
      action: () => handleNav('contact'),
      featured: true,
      features: [
        'Complete initial Visibility Audit baseline',
        'Entity and topic architecture mapping',
        'Schema & technical AI readiness optimization',
        'Third-party citation network development',
        'Bi-weekly advisory & progress reviews',
      ],
    },
    {
      num: '03',
      label: 'AUTHORITY',
      title: 'Authority',
      desc: 'Continuous monitoring, optimization, authority building, and executive reporting.',
      price: '$7,000-$12,000',
      pricePeriod: '/month',
      priceNote: '6-month minimum',
      cta: 'Book a Strategy Call',
      action: () => handleNav('contact'),
      features: [
        'Continuous prompt monitoring across models',
        'Real-time citation displacement alerts',
        'Quarterly competitive re-benchmarking',
        'Active digital PR & authority alignment',
        'Monthly executive performance reports',
      ],
    },
  ];

  return (
    <div className="relative overflow-hidden font-sans bg-white text-[#111111]">

      {/* ============================================================
          HERO SECTION (FORMIUM ALLIANCE FULL VIEWPORT)
          ============================================================ */}
      <section
        ref={heroRef}
        id="hero"
        className="hero-fullpage relative section-dark text-white overflow-hidden bg-[#000000] border-b border-white/10"
      >
        <HeroVideoBackground mode="dark" />
        <div className="site-container hero-content-wrap relative z-10">
          <div className="max-w-[900px] mx-auto text-center flex flex-col items-center w-full">
            
            {/* Main Animated Headline */}
            <HeroAnimatedHeadline />

            {/* Supporting Paragraph */}
            <SlideReveal direction="up" delay={0.16}>
              <p className="intro-text mt-4 mx-auto text-center max-w-[760px] text-white/80 leading-[1.7]">
                Citepoint helps ambitious B2B brands become more visible, credible, and recommendable across{' '}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mx-0.5 rounded-full bg-white/10 border border-white/15 text-white font-medium text-sm sm:text-base align-middle whitespace-nowrap backdrop-blur-sm shadow-sm transition-all hover:bg-white/15 hover:border-white/25">
                  <AiEngineIcon id="chatgpt" size={16} />
                  <span>ChatGPT</span>
                </span>,{' '}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mx-0.5 rounded-full bg-white/10 border border-white/15 text-white font-medium text-sm sm:text-base align-middle whitespace-nowrap backdrop-blur-sm shadow-sm transition-all hover:bg-white/15 hover:border-white/25">
                  <AiEngineIcon id="gemini" size={16} />
                  <span>Gemini</span>
                </span>,{' '}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mx-0.5 rounded-full bg-white/10 border border-white/15 text-white font-medium text-sm sm:text-base align-middle whitespace-nowrap backdrop-blur-sm shadow-sm transition-all hover:bg-white/15 hover:border-white/25">
                  <AiEngineIcon id="perplexity" size={16} />
                  <span>Perplexity</span>
                </span>,{' '}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mx-0.5 rounded-full bg-white/10 border border-white/15 text-white font-medium text-sm sm:text-base align-middle whitespace-nowrap backdrop-blur-sm shadow-sm transition-all hover:bg-white/15 hover:border-white/25">
                  <AiEngineIcon id="claude" size={16} />
                  <span>Claude</span>
                </span>, and{' '}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mx-0.5 rounded-full bg-white/10 border border-white/15 text-white font-medium text-sm sm:text-base align-middle whitespace-nowrap backdrop-blur-sm shadow-sm transition-all hover:bg-white/15 hover:border-white/25">
                  <AiEngineIcon id="google-ai-overviews" size={16} />
                  <span>Google AI Overviews</span>
                </span>.
              </p>
            </SlideReveal>

            {/* Buttons Row (Centered) */}
            <SlideReveal direction="up" delay={0.24}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 hero-buttons-container w-full sm:w-auto mx-auto">
                <button
                  type="button"
                  onClick={() => handleNav('audit')}
                  className="btn-primary"
                >
                  <span>Get Your AI Visibility Audit</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>

                <button
                  type="button"
                  onClick={() => handleNav('#shift-to-synthesis')}
                  className="btn-secondary"
                >
                  <span>Explore Our Method</span>
                </button>
              </div>
            </SlideReveal>

            {/* Trust Line */}
            <SlideReveal direction="up" delay={0.3}>
              <div className="mt-6 flex items-start sm:items-center justify-center gap-2 text-xs text-white/60 font-sans max-w-[340px] sm:max-w-none mx-auto text-left sm:text-center">
                <ShieldCheck className="w-4 h-4 text-[#E60023] shrink-0 mt-0.5 sm:mt-0" />
                <span>Built for B2B SaaS, enterprise technology, and high-consideration brands.</span>
              </div>
            </SlideReveal>

          </div>
        </div>
      </section>

      {/* ============================================================
          RECESSED STRIP: CONTINUOUS SINGLE-LINE TICKER (AI ENGINES & TARGET SECTORS)
          ============================================================ */}
      <section className="marquee-strip group">
        <div className="w-full overflow-hidden marquee-fade-edges select-none">
          <div className="animate-ticker-marquee flex items-center whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[0, 1, 2, 3].map((setIndex) => (
              <div key={setIndex} className="flex items-center gap-8 shrink-0 pr-8">
                {/* AI Platform Logos */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                    <span className="text-xs font-sans uppercase tracking-[0.08em] text-[#111111] font-semibold shrink-0">
                      AI Engines Audited:
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {AI_ENGINES.map((engine) => (
                      <div
                        key={`set-${setIndex}-${engine.id}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#111111]/10 text-xs font-sans font-medium text-[#111111] shrink-0"
                      >
                        <AiEngineIcon id={engine.id} size={14} />
                        <span className="text-[#111111]">{engine.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle Geometric Separator */}
                <div className="flex items-center gap-1 shrink-0 opacity-60">
                  <div className="w-1 h-1 rounded-full bg-[#111111]" />
                  <div className="w-6 h-[1px] bg-[#111111]/10" />
                  <div className="w-1 h-1 rounded-full bg-[#111111]" />
                </div>

                {/* Target B2B Sectors */}
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-sans uppercase tracking-[0.08em] text-[#111111] font-semibold shrink-0">
                    Target Sectors:
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    {trustBadges.map((badge, bIdx) => (
                      <span
                        key={`set-${setIndex}-badge-${bIdx}`}
                        className="px-3 py-1 rounded-full text-xs font-sans uppercase tracking-[0.08em] bg-white border border-[#111111]/10 text-[#111111] font-medium shrink-0"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle Geometric Separator between loops */}
                <div className="flex items-center gap-1 shrink-0 opacity-60">
                  <div className="w-1 h-1 rounded-full bg-[#111111]" />
                  <div className="w-6 h-[1px] bg-[#111111]/10" />
                  <div className="w-1 h-1 rounded-full bg-[#111111]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ============================================================
          PROBLEM SECTION: THE SEARCH SHIFT
          ============================================================ */}
      <section id="problem" ref={problemRef} className="site-section bg-white text-[#111111] relative overflow-hidden">
        {/* Parallax Dual Opposing Orbs & Floating Citation Points */}
        <ProblemParallaxBackdrop sectionRef={problemRef} />

        <div className="site-container relative z-10">
          
          <SlideReveal direction="up" className="max-w-3xl mb-12 lg:mb-16">
            <span className="eyebrow-label">
              THE SEARCH SHIFT
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold text-[#111111] leading-tight tracking-tight mb-4">
              Your buyers are no longer searching in one place.
            </h2>
            <p className="intro-text">
              Before they visit a website, buyers increasingly ask AI tools to compare vendors, explain categories, shortlist providers, and recommend the next step. If your brand is absent from those answers, you lose consideration before your sales team ever gets involved.
            </p>
          </SlideReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Surface Card */}
            <SlideReveal direction="left" delay={0.12} className="lg:col-span-5 flex flex-col">
              <div className="bg-[#F5F5F7] border border-[#111111]/10 rounded-[24px] p-6 lg:p-8 flex flex-col justify-between space-y-6 group h-full">
                <div>
                  <span className="eyebrow-label">
                    CORE REALITY
                  </span>
                  <blockquote className="text-2xl sm:text-3xl font-sans font-bold text-[#111111] leading-tight">
                    “If AI cannot find, understand, or trust your brand, it cannot recommend you.”
                  </blockquote>
                  <p className="body-text mt-4">
                    Traditional search indexed pages; generative engines synthesize consensus. When an LLM generates a response, it references authoritative citation hubs to formulate recommendations.
                  </p>
                </div>
                
                <div className="p-4 rounded-[16px] bg-white border border-[#111111]/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-sans text-[#111111]/60">
                    <HelpCircle className="w-3.5 h-3.5 text-[#111111]" />
                    <span>Buyer Prompt: "Top enterprise platforms for..."</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-sans text-[#111111] font-semibold pl-5 border-l-2 border-[#111111]">
                    <Sparkles className="w-3.5 h-3.5 text-[#111111]" />
                    <span>AI Synthesis: Highlights Citepoint-verified brands</span>
                  </div>
                </div>
              </div>
            </SlideReveal>

            {/* Right 3 Problem Cards */}
            <SlideStaggerContainer staggerDelay={0.14} className="lg:col-span-7 space-y-4 flex flex-col justify-between">
              
              {/* Card 1: Invisible */}
              <SlideStaggerItem direction="right">
                <div className="bg-[#F5F5F7] border border-[#111111]/10 rounded-[24px] p-6 lg:p-8 group cursor-default">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white border border-[#111111]/10 text-[#111111] flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                        <Eye className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-sans uppercase tracking-[0.08em] text-[#111111]/60 font-semibold block">
                          RISK 01
                        </span>
                        <h3 className="text-lg font-sans font-bold text-[#111111]">
                          Invisible
                        </h3>
                      </div>
                    </div>
                  </div>
                  <p className="body-text text-sm">
                    Your brand does not appear for the questions your buyers ask. Competitors dominate the synthesized answer while your company is completely omitted.
                  </p>
                </div>
              </SlideStaggerItem>

              {/* Card 2: Misrepresented */}
              <SlideStaggerItem direction="right">
                <div className="bg-[#F5F5F7] border border-[#111111]/10 rounded-[24px] p-6 lg:p-8 group cursor-default">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white border border-[#111111]/10 text-[#111111] flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                        <AlertTriangle className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-sans uppercase tracking-[0.08em] text-[#111111]/60 font-semibold block">
                          RISK 02
                        </span>
                        <h3 className="text-lg font-sans font-bold text-[#111111]">
                          Misrepresented
                        </h3>
                      </div>
                    </div>
                  </div>
                  <p className="body-text text-sm">
                    AI describes your offer using incomplete or outdated information. Sunset pricing, retired features, or inaccurate comparisons misinform high-intent buyers.
                  </p>
                </div>
              </SlideStaggerItem>

              {/* Card 3: Outranked */}
              <SlideStaggerItem direction="right">
                <div className="bg-[#F5F5F7] border border-[#111111]/10 rounded-[24px] p-6 lg:p-8 group cursor-default">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white border border-[#111111]/10 text-[#111111] flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-sans uppercase tracking-[0.08em] text-[#111111]/60 font-semibold block">
                          RISK 03
                        </span>
                        <h3 className="text-lg font-sans font-bold text-[#111111]">
                          Outranked
                        </h3>
                      </div>
                    </div>
                  </div>
                  <p className="body-text text-sm">
                    Competitors are cited by the sources AI trusts most. They proactively seed the structured review platforms and reference datasets that LLMs query.
                  </p>
                </div>
              </SlideStaggerItem>

            </SlideStaggerContainer>

          </div>

        </div>
      </section>

      {/* ============================================================
          6 BENTO GRID SERVICE CARDS
          ============================================================ */}
      <section id="services" ref={servicesRef} className="site-section bg-[#F5F5F7] border-y border-[#111111]/10 text-[#111111] relative overflow-hidden">
        {/* Parallax Far Dot Grid & Dual Opposing Liquid Radial Glows */}
        <ServicesParallaxBackdrop sectionRef={servicesRef} />

        <div className="site-container relative z-10">
          
          <SlideReveal direction="down" className="max-w-3xl mb-12 lg:mb-16">
            <span className="eyebrow-label">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold text-[#111111] leading-tight tracking-tight mb-4">
              We turn brand authority into AI visibility.
            </h2>
            <p className="intro-text">
              Citepoint combines research, content architecture, technical optimization, third-party authority building, and continuous monitoring to help your brand earn recommendations in AI answers.
            </p>
          </SlideReveal>

          {/* 6 Bento Grid Surface Cards */}
          <div className="card-grid-3">
            {services.map((s, idx) => {
              const Icon = s.icon;
              const cardDirections = ['diagonal-left', 'up', 'diagonal-right', 'diagonal-left', 'up', 'diagonal-right'];
              const dir = cardDirections[idx % cardDirections.length];

              return (
                <SlideReveal
                  key={s.num}
                  direction={dir}
                  delay={idx * 0.08}
                  className="h-full flex flex-col"
                >
                  <div
                    onClick={() => handleNav('services')}
                    className="bg-white border border-[#111111]/10 rounded-[24px] p-6 lg:p-8 flex flex-col justify-between h-full group cursor-pointer hover:border-[#111111] transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-9 h-9 rounded-full bg-[#F5F5F7] border border-[#111111]/10 flex items-center justify-center text-[#111111] transition-all duration-200 group-hover:bg-[#111111] group-hover:text-white">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-sans text-xs text-[#111111]/60 font-semibold tracking-[0.08em]">
                          {s.num}
                        </span>
                      </div>

                      <h3 className="text-xl font-sans font-bold text-[#111111] mb-3">
                        {s.title}
                      </h3>

                      <p className="body-text text-sm mb-6">
                        {s.desc}
                      </p>

                      <div className="space-y-2 pt-4 border-t border-[#111111]/10">
                        <span className="text-[10px] font-sans uppercase tracking-[0.08em] text-[#111111]/60 block font-semibold">
                          DELIVERABLES:
                        </span>
                        <ul className="text-xs text-[#111111] space-y-1.5 font-sans">
                          {s.deliverables.map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#111111] shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {s.num === '01' && (
                          <div className="pt-3 border-t border-[#111111]/10 mt-3">
                            <span className="text-[10px] font-sans text-[#111111]/60 block mb-1.5 uppercase tracking-[0.08em] font-medium">
                              Engines Audited:
                            </span>
                            <div className="flex items-center gap-1.5">
                              {AI_ENGINES.map((e) => (
                                <div
                                 key={e.id}
                                 title={e.name}
                                 className="w-6 h-6 rounded-[6px] bg-[#F5F5F7] border border-[#111111]/10 flex items-center justify-center text-[#111111]"
                               >
                                 <AiEngineIcon id={e.id} size={13} />
                               </div>
                             ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#111111]/10 flex items-center justify-between min-h-[44px]">
                      <span className="text-xs font-sans uppercase tracking-[0.08em] text-[#111111] flex items-center gap-1.5 font-semibold">
                        Explore service
                      </span>
                      <div
                        className="w-7 h-7 rounded-full bg-[#F5F5F7] border border-[#111111]/10 flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-all"
                        aria-hidden="true"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </SlideReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================
          SIGNATURE FLOW BAND (APPLE MINIMAL MONOCHROME)
          ============================================================ */}
      <section ref={methodRef} className="site-section bg-white text-[#111111] relative overflow-hidden">
        {/* Parallax Connection Vector Line & Pulse Nodes */}
        <MethodParallaxBackdrop sectionRef={methodRef} />

        <div className="site-container relative z-10">
          
          <SlideReveal direction="up" className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <span className="eyebrow-label text-center mx-auto">
              METHODOLOGY IN ACTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold text-[#111111] leading-tight tracking-tight mb-4">
              From question to citation.
            </h2>
            <p className="intro-text mx-auto">
              We identify the questions that influence buying decisions, the sources AI trusts, and the actions required to make your brand visible in that journey.
            </p>
          </SlideReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12 lg:mb-16">
            {signatureFlow.map((item, idx) => {
              const Icon = item.icon;
              const slideDir = idx % 2 === 0 ? 'left' : 'right';

              return (
                <SlideReveal
                  key={item.step}
                  direction={slideDir}
                  delay={idx * 0.08}
                  className="h-full flex flex-col"
                >
                  <div className="bg-[#F5F5F7] border border-[#111111]/10 rounded-[24px] p-6 flex flex-col justify-between h-full group cursor-default">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-7 h-7 rounded-full bg-white border border-[#111111]/10 flex items-center justify-center font-sans text-xs font-semibold text-[#111111]">
                          {item.step}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#111111]" />
                      </div>

                      <div className="w-9 h-9 rounded-full bg-white border border-[#111111]/10 flex items-center justify-center mb-4 text-[#111111]">
                        <Icon className="w-4 h-4" />
                      </div>

                      <h3 className="text-base font-sans font-bold text-[#111111] mb-2">
                        {item.label}
                      </h3>

                      <p className="text-xs text-[#111111]/60 leading-[1.6]">
                        {item.desc}
                      </p>

                      {item.step === '02' && (
                        <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-[#111111]/10">
                          {AI_ENGINES.map((e) => (
                            <div
                              key={e.id}
                              title={e.name}
                              className="w-5 h-5 rounded-[4px] bg-white border border-[#111111]/10 flex items-center justify-center text-[#111111]"
                            >
                              <AiEngineIcon id={e.id} size={11} />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#111111]/10 text-[10px] font-sans uppercase tracking-[0.08em] text-[#111111]/60 font-semibold">
                      Stage {item.step}
                    </div>
                  </div>
                </SlideReveal>
              );
            })}
          </div>

          <SlideReveal direction="up" delay={0.2} className="text-center">
            <button
              onClick={() => handleNav('audit')}
              className="btn-primary"
            >
                  <span>Request Visibility Audit</span>
                  <ArrowRight className="w-4 h-4 text-[#111111]" />
            </button>
          </SlideReveal>

        </div>
      </section>

      {/* ============================================================
          PROCESS SECTION: 4-STEP TIMELINE
          ============================================================ */}
      <section id="how-it-works" className="site-section bg-[#F5F5F7] border-y border-[#111111]/10 text-[#111111] relative">
        <div className="site-container">
          
          <SlideReveal direction="up" className="max-w-3xl mb-12 lg:mb-16">
            <span className="eyebrow-label">
              IMPLEMENTATION ROADMAP
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold text-[#111111] leading-tight tracking-tight mb-4">
              A practical system for a changing search landscape.
            </h2>
            <p className="intro-text">
              We guide enterprise teams through an organized workflow from initial baseline diagnosis to sustained recommendation authority.
            </p>
          </SlideReveal>

          <SlideStaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <SlideStaggerItem key={step.step} direction="up" className="h-full">
                  <div
                    onClick={() => setActiveStep(idx)}
                    className={`bg-white border border-[#111111]/10 rounded-[24px] p-6 lg:p-8 cursor-pointer flex flex-col justify-between h-full group transition-all ${
                      isActive ? '!border-[#111111]' : 'hover:border-[#111111]/50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-[#111111]/60">
                          {step.step}
                        </span>
                        <span
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                            isActive ? 'bg-[#111111]' : 'bg-[#111111]/10'
                          }`}
                        />
                      </div>

                      <h3 className={`text-xl font-sans font-bold mb-3 ${isActive ? 'text-[#111111]' : 'text-[#111111]'}`}>
                        {step.title}
                      </h3>

                      <p className="body-text text-sm">
                        {step.desc}
                      </p>
                    </div>

                    <div className={`mt-8 pt-4 border-t border-[#111111]/10 text-xs font-sans transition-colors duration-200 ${isActive ? 'text-[#111111] font-semibold' : 'text-[#111111]/60'}`}>
                      {isActive ? '● Selected Phase' : '○ Click to inspect'}
                    </div>
                  </div>
                </SlideStaggerItem>
              );
            })}
          </SlideStaggerContainer>

        </div>
      </section>

      {/* ============================================================
          RESULTS / CASE STUDIES (APPLE MINIMAL MONOCHROME)
          ============================================================ */}
      <section id="case-studies" ref={caseStudiesRef} className="site-section section-deferred bg-white text-[#111111] relative overflow-hidden">
        {/* Parallax Layered Diagnostic Depth Scene */}
        <CaseStudiesParallaxBackdrop sectionRef={caseStudiesRef} />

        <div className="site-container relative z-10">
          
          <SlideReveal direction="left" className="max-w-3xl mb-12 lg:mb-16">
            <span className="eyebrow-label">
              MEASURABLE OUTCOMES
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold text-[#111111] leading-tight tracking-tight mb-4">
              Visibility should lead somewhere.
            </h2>
            <p className="intro-text">
              We measure progress through meaningful changes in AI presence, qualified visibility, source authority, and downstream business signals.
            </p>
          </SlideReveal>

          {/* 4-Card Achievement Stat Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 lg:mb-16">
            <SlideReveal direction="up" delay={0.06}>
              <div className="bg-[#F5F5F7] border border-[#111111]/10 rounded-[24px] p-6 lg:p-8 flex flex-col justify-between group h-full">
                <div className="text-4xl sm:text-5xl font-sans font-bold text-[#111111] tracking-tight">
                  <span>74</span>
                  <span className="text-2xl font-bold text-[#111111]">%</span>
                </div>
                <div className="text-sm font-sans font-semibold text-[#111111] mt-2 mb-1">
                  Baseline Omission Rate
                </div>
                <p className="text-xs text-[#111111]/60 font-sans mt-1 leading-normal">
                  Brands unmentioned across target buyer queries prior to Citepoint audit
                </p>
              </div>
            </SlideReveal>

            <SlideReveal direction="up" delay={0.12}>
              <div className="bg-[#F5F5F7] border border-[#111111]/10 rounded-[24px] p-6 lg:p-8 flex flex-col justify-between group h-full">
                <div className="text-4xl sm:text-5xl font-sans font-bold text-[#111111] tracking-tight">
                  <span>5</span>
                  <span className="text-2xl font-bold text-[#111111]">/5</span>
                </div>
                <div className="text-sm font-sans font-semibold text-[#111111] mt-2 mb-1">
                  AI Engines Audited
                </div>
                <p className="text-xs text-[#111111]/60 font-sans mt-1 leading-normal">
                  ChatGPT, Perplexity, Gemini, Claude & Google AI Overviews benchmarked
                </p>
              </div>
            </SlideReveal>

            <SlideReveal direction="up" delay={0.18}>
              <div className="bg-[#F5F5F7] border border-[#111111]/10 rounded-[24px] p-6 lg:p-8 flex flex-col justify-between group h-full">
                <div className="text-4xl sm:text-5xl font-sans font-bold text-[#111111] tracking-tight">
                  <span>3.8</span>
                  <span className="text-2xl font-bold text-[#111111]">x</span>
                </div>
                <div className="text-sm font-sans font-semibold text-[#111111] mt-2 mb-1">
                  Citation Retrieval Density
                </div>
                <p className="text-xs text-[#111111]/60 font-sans mt-1 leading-normal">
                  Average increase in canonical entity citations across authoritative hubs
                </p>
              </div>
            </SlideReveal>

            <SlideReveal direction="up" delay={0.24}>
              <div className="bg-[#F5F5F7] border border-[#111111]/10 rounded-[24px] p-6 lg:p-8 flex flex-col justify-between group h-full">
                <div className="text-4xl sm:text-5xl font-sans font-bold text-[#111111] tracking-tight">
                  <span>90</span>
                  <span className="text-2xl font-bold text-[#111111]">d</span>
                </div>
                <div className="text-sm font-sans font-semibold text-[#111111] mt-2 mb-1">
                  Authority Sprint
                </div>
                <p className="text-xs text-[#111111]/60 font-sans mt-1 leading-normal">
                  Structured sprint timeframe to verifiable category recommendation shift
                </p>
              </div>
            </SlideReveal>
          </div>

          <div className="card-grid-3">
            {caseStudyPlaceholders.map((cs, i) => {
              const cardDirections = ['diagonal-right', 'scale-up', 'diagonal-left'];
              const dir = cardDirections[i % cardDirections.length];

              return (
                <SlideReveal
                  key={i}
                  direction={dir}
                  delay={i * 0.1}
                  className="h-full flex flex-col"
                >
                  <div className="bg-[#F5F5F7] border border-[#111111]/10 rounded-[24px] p-6 lg:p-8 flex flex-col justify-between h-full group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-sans uppercase tracking-[0.08em] text-[#111111]/60 font-semibold">
                        {cs.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white text-[#111111] border border-[#111111]/10 text-[10px] font-sans uppercase tracking-[0.08em]">
                        {cs.status}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-sans font-bold text-[#111111] mb-3">
                        {cs.title}
                      </h3>

                      <p className="body-text text-xs mb-6">
                        {cs.note}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#111111]/10">
                      <div className="flex items-center justify-between text-xs font-sans">
                        <span className="text-[#111111]/60">{cs.metricLabel}:</span>
                        <span className="text-base font-bold text-[#111111] inline-block">{cs.metricValue}</span>
                      </div>
                    </div>
                  </div>
                </SlideReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================
          WHY CITEPOINT (APPLE MINIMAL MONOCHROME)
          ============================================================ */}
      <section ref={whyUsRef} className="site-section section-deferred bg-[#F5F5F7] border-y border-[#111111]/10 text-[#111111] relative overflow-hidden">
        {/* Parallax Subtle Glass Bubbles & Refraction Rings */}
        <WhyUsParallaxBackdrop sectionRef={whyUsRef} />

        <div className="site-container relative z-10">
          
          <SlideReveal direction="right" className="max-w-3xl mb-12 lg:mb-16">
            <span className="eyebrow-label">
              DIFFERENTIATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold text-[#111111] leading-tight tracking-tight mb-4">
              Not another content agency.
            </h2>
            <p className="intro-text">
              We don't sell bloated content packages or chase vanity keywords. Citepoint operates as a strategic AI visibility partner focused on the exact sources that influence high-consideration buying decisions.
            </p>
          </SlideReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((d, i) => {
              const slideDir = i % 2 === 0 ? 'left' : 'right';
              return (
                <SlideReveal
                  key={d.num}
                  direction={slideDir}
                  delay={i * 0.1}
                  className="h-full flex flex-col"
                >
                  <div className="bg-white border border-[#111111]/10 rounded-[24px] p-6 lg:p-8 flex flex-col justify-between h-full group cursor-default hover:border-[#111111] transition-all">
                    <div>
                      <span className="font-sans text-xs text-[#111111]/60 font-semibold tracking-[0.08em] block mb-4">
                        {d.num}
                      </span>

                      <h3 className="text-2xl font-sans font-bold text-[#111111] mb-3">
                        {d.title}
                      </h3>

                      <p className="body-text text-sm">
                        {d.desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#111111]/10 flex items-center gap-2 text-xs font-sans text-[#111111] font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#111111]" />
                      <span>Strategic Commitment</span>
                    </div>
                  </div>
                </SlideReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================
          FAQ SECTION (APPLE MINIMAL MONOCHROME)
          ============================================================ */}
      <section id="faq" ref={faqRef} className="site-section section-deferred bg-white text-[#111111] relative overflow-hidden">
        {/* Parallax Subtle Liquid Shape & Gold Citation Point */}
        <FaqParallaxBackdrop sectionRef={faqRef} />

        <div className="site-container relative z-10">
          
          <SlideReveal direction="up" className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <span className="eyebrow-label text-center mx-auto">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold text-[#111111] leading-tight tracking-tight mb-4">
              Clear answers on AI search visibility.
            </h2>
            <p className="intro-text mx-auto">
              Common questions about Generative Engine Optimization, timelines, and our strategic methodology.
            </p>
          </SlideReveal>

          <SlideReveal direction="up" delay={0.15}>
            <FaqAccordion />
          </SlideReveal>

        </div>
      </section>

      {/* ============================================================
          FINAL CTA BAND (30% SECONDARY BLACK #111111 DARK SECTION)
          ============================================================ */}
      <section ref={finalCtaRef} className="site-section section-dark bg-[#111111] text-white relative overflow-hidden border-t border-white/10">
        {/* Parallax Second-Strongest Scene */}
        <FinalCtaParallaxBackdrop sectionRef={finalCtaRef} />

        <div className="site-container relative z-10">
          <SlideReveal direction="scale-up" className="max-w-4xl mx-auto text-center space-y-6">
            <span className="eyebrow-label text-center mx-auto text-[#E60023]">
              GET CITED. GET CHOSEN.
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tight leading-tight">
              Make your brand part of the answer.
            </h2>

            <p className="intro-text mx-auto text-white/60">
              Find out how AI systems currently see your brand—and what it will take to become more visible.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 hero-buttons-container">
              <button
                onClick={() => handleNav('audit')}
                className="btn-primary w-full sm:w-auto"
              >
                <span>Get Your AI Visibility Audit</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={() => handleNav('contact')}
                className="btn-secondary w-full sm:w-auto"
              >
                <span>Talk to Citepoint</span>
              </button>
            </div>

            <div className="pt-8 border-t border-white/10 max-w-md mx-auto">
              <p className="text-xs font-sans text-white/60 leading-[1.6]">
                No hype. No guaranteed rankings. Just an empirical baseline, practical priorities, and measurable progress.
              </p>
            </div>
          </SlideReveal>
        </div>
      </section>

    </div>
  );
}
