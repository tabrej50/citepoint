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
  HeroParallaxBackdrop,
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
    <div className="relative overflow-hidden font-sans bg-transparent text-[#4B4F58]">

      {/* ============================================================
          HERO SECTION (CHAMPAGNE GOLD & ALABASTER VIEW)
          ============================================================ */}
      <section ref={heroRef} className="relative pt-120 sm:pt-140 lg:pt-144 pb-24 sm:pb-28 lg:pb-32 text-[#0F1012] overflow-hidden bg-transparent">
        {/* Cinematic Ambient Hero Video Background */}
        <HeroVideoBackground />

        {/* Refined 3-Plane Parallax Depth Backdrop */}
        <HeroParallaxBackdrop sectionRef={heroRef} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 text-center flex flex-col items-center">
            
            {/* Eyebrow / Kicker */}
            <SlideReveal direction="down" delay={0.08}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[8px] bg-white border border-[#EADBBE] shadow-sm mx-auto">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DFB76C]"></span>
                </span>
                <span className="text-[12px] font-sans font-semibold uppercase tracking-[0.12em] text-[#A67D28]">
                  AI SEARCH VISIBILITY / GEO / AEO
                </span>
              </div>
            </SlideReveal>

            {/* Main Animated Headline with Champagne Gold Glow & 3D Verb Morph */}
            <HeroAnimatedHeadline />

            {/* Supporting Paragraph (Centered, clean line-height) */}
            <SlideReveal direction="up" delay={0.16}>
              <p className="animate-hero-paragraph text-base sm:text-lg text-[#4B4F58] max-w-3xl mx-auto font-normal leading-[1.5]">
                Citepoint helps ambitious B2B brands become more visible, credible, and recommendable across{' '}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[8px] bg-white border border-[#EADBBE] text-[#0F1012] font-medium text-sm align-middle whitespace-nowrap shadow-sm">
                  <AiEngineIcon id="chatgpt" size={15} /> ChatGPT
                </span>,{' '}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[8px] bg-white border border-[#EADBBE] text-[#0F1012] font-medium text-sm align-middle whitespace-nowrap shadow-sm">
                  <AiEngineIcon id="gemini" size={15} /> Gemini
                </span>,{' '}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[8px] bg-white border border-[#EADBBE] text-[#0F1012] font-medium text-sm align-middle whitespace-nowrap shadow-sm">
                  <AiEngineIcon id="perplexity" size={15} /> Perplexity
                </span>,{' '}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[8px] bg-white border border-[#EADBBE] text-[#0F1012] font-medium text-sm align-middle whitespace-nowrap shadow-sm">
                  <AiEngineIcon id="claude" size={15} /> Claude
                </span>, and{' '}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[8px] bg-white border border-[#EADBBE] text-[#0F1012] font-medium text-sm align-middle whitespace-nowrap shadow-sm">
                  <AiEngineIcon id="google-ai-overviews" size={15} variant="multicolor" /> Google AI Overviews
                </span>.
              </p>
            </SlideReveal>

            {/* Buttons Row (Centered) */}
            <SlideReveal direction="up" delay={0.24}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 mx-auto w-full sm:w-auto">
                <button
                  onClick={() => handleNav('audit')}
                  className="btn-aurora w-full sm:w-auto shadow-[0_4px_16px_rgba(197,160,89,0.32)]"
                >
                  <span>Get Your AI Visibility Audit</span>
                  <ArrowRight className="w-4 h-4 text-[#0F1012]" />
                </button>

                <button
                  onClick={() => handleNav('#how-it-works')}
                  className="btn-kelp w-full sm:w-auto"
                >
                  <span>Explore Our Method</span>
                </button>
              </div>
            </SlideReveal>

            {/* Trust Line (Centered) */}
            <SlideReveal direction="up" delay={0.3}>
              <div className="pt-1 flex items-center justify-center gap-2.5 text-xs text-[#636773] font-sans mx-auto">
                <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Built for B2B SaaS, enterprise technology, and high-consideration brands.</span>
              </div>
            </SlideReveal>

            {/* AI Engines Bar (Centered) */}
            <div className="pt-6 border-t border-[#EADBBE] w-full max-w-3xl mx-auto flex flex-col items-center">
              <span className="text-[11px] font-sans uppercase tracking-[0.12em] text-[#A67D28] block mb-3 text-center font-medium">
                // AUDITING & OPTIMIZING ACROSS LEADING AI DISCOVERY ENGINES
              </span>
              <ul
                aria-label="Auditing across 5 major AI discovery engines"
                className="flex flex-wrap items-center justify-center gap-2 list-none p-0 m-0"
              >
                {AI_ENGINES.map((engine) => (
                  <li
                    key={engine.id}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-white border border-[#EADBBE] text-[#0F1012] text-xs font-sans font-medium shadow-sm"
                  >
                    <AiEngineIcon id={engine.id} size={16} variant={engine.isGoogleMulti ? 'multicolor' : 'brand'} />
                    <span className="text-[#0F1012]">
                      {engine.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scroll Indicator */}
            <div
              onClick={() => handleNav('#shift-to-synthesis')}
              className="pt-6 flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer select-none group"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#636773] mb-1 group-hover:text-[#0F1012] transition-colors">
                // SCROLL TO EXPLORE
              </span>
              <ChevronDown className="w-4 h-4 text-[#C5A059] animate-bounce" />
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          RECESSED STRIP: CONTINUOUS SINGLE-LINE TICKER (AI ENGINES & TARGET SECTORS)
          ============================================================ */}
      <section className="py-4 bg-white/85 backdrop-blur-md border-y border-[#EADBBE] text-[#0F1012] relative z-20 overflow-hidden shadow-sm">
        <div className="w-full overflow-hidden ticker-fade-mask select-none">
          <div className="animate-ticker-marquee flex items-center whitespace-nowrap">
            {[0, 1, 2, 3].map((setIndex) => (
              <div key={setIndex} className="flex items-center gap-8 shrink-0 pr-8">
                {/* AI Platform Logos */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
                    <span className="text-xs font-sans uppercase tracking-[0.14em] text-[#0F1012] font-semibold shrink-0">
                      AI Engines Audited:
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {AI_ENGINES.map((engine) => (
                      <div
                        key={`set-${setIndex}-${engine.id}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[8px] bg-[#FAF8F5] border border-[#EADBBE] text-xs font-sans font-medium text-[#0F1012] shrink-0 hover:border-[#C5A059] hover:bg-white transition-all cursor-default"
                      >
                        <AiEngineIcon id={engine.id} size={14} variant={engine.isGoogleMulti ? 'multicolor' : 'brand'} />
                        <span className="text-[#0F1012]">{engine.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle Geometric Separator */}
                <div className="flex items-center gap-1 shrink-0 opacity-60">
                  <div className="w-1 h-1 rounded-full bg-[#C5A059]" />
                  <div className="w-6 h-[1px] bg-[#EADBBE]" />
                  <div className="w-1 h-1 rounded-full bg-[#C5A059]" />
                </div>

                {/* Target B2B Sectors */}
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-sans uppercase tracking-[0.14em] text-[#A67D28] font-semibold shrink-0">
                    Target Sectors:
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    {trustBadges.map((badge, bIdx) => (
                      <span
                        key={`set-${setIndex}-badge-${bIdx}`}
                        className="px-3 py-1 rounded-[8px] text-xs font-sans uppercase tracking-[0.08em] bg-[#FAF8F5] border border-[#EADBBE] text-[#0F1012] font-medium shrink-0 hover:border-[#C5A059] hover:bg-white transition-all cursor-default"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle Geometric Separator between loops */}
                <div className="flex items-center gap-1 shrink-0 opacity-60">
                  <div className="w-1 h-1 rounded-full bg-[#C5A059]" />
                  <div className="w-6 h-[1px] bg-[#EADBBE]" />
                  <div className="w-1 h-1 rounded-full bg-[#C5A059]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ============================================================
          PROBLEM SECTION: THE SEARCH SHIFT
          ============================================================ */}
      <section id="problem" ref={problemRef} className="scroll-mt-88 sm:scroll-mt-96 lg:scroll-mt-104 py-48 lg:py-64 bg-transparent text-[#4B4F58] relative overflow-hidden">
        {/* Parallax Dual Opposing Orbs & Floating Citation Points */}
        <ProblemParallaxBackdrop sectionRef={problemRef} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SlideReveal direction="up" className="max-w-3xl mb-12 lg:mb-16">
            <span className="text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#A67D28] block mb-2">
              // THE SEARCH SHIFT
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-medium text-[#0F1012] leading-none tracking-tight mb-4">
              Your buyers are no longer searching in one place.
            </h2>
            <p className="text-base sm:text-lg text-[#4B4F58] leading-[1.4]">
              Before they visit a website, buyers increasingly ask AI tools to compare vendors, explain categories, shortlist providers, and recommend the next step. If your brand is absent from those answers, you lose consideration before your sales team ever gets involved.
            </p>
          </SlideReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left Surface Card (Slide in from Left) */}
            <SlideReveal direction="left" delay={0.12} className="lg:col-span-5 flex flex-col">
              <div className="surface-card p-6 lg:p-8 flex flex-col justify-between space-y-6 group h-full">
                <div>
                  <span className="text-xs font-sans uppercase tracking-[0.12em] text-[#A67D28] font-semibold block mb-4">
                    // CORE REALITY
                  </span>
                  <blockquote className="text-2xl sm:text-3xl font-heading font-medium text-[#0F1012] leading-tight">
                    “If AI cannot find, understand, or trust your brand, it cannot recommend you.”
                  </blockquote>
                  <p className="text-sm text-[#4B4F58] mt-4 leading-[1.4]">
                    Traditional search indexed pages; generative engines synthesize consensus. When an LLM generates a response, it references authoritative citation hubs to formulate recommendations.
                  </p>
                </div>
                
                <div className="p-4 rounded-[8px] bg-[#FAF8F5] border border-[#EADBBE] space-y-2 group-hover:border-[#C5A059]/40 transition-all duration-300">
                  <div className="flex items-center gap-2 text-xs font-sans text-[#636773]">
                    <HelpCircle className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Buyer Prompt: "Top enterprise platforms for..."</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-sans text-[#0F1012] font-semibold pl-5 border-l-2 border-[#C5A059]">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>AI Synthesis: Highlights Citepoint-verified brands</span>
                  </div>
                </div>
              </div>
            </SlideReveal>

            {/* Right 3 Problem Cards (Slide in from Right with Stagger) */}
            <SlideStaggerContainer staggerDelay={0.14} className="lg:col-span-7 space-y-4 flex flex-col justify-between">
              
              {/* Card 1: Invisible */}
              <SlideStaggerItem direction="right">
                <div className="surface-card p-6 lg:p-8 group cursor-default">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-[8px] bg-[#FAF8F5] border border-[#EADBBE] text-[#C5A059] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:border-[#C5A059]/60">
                        <Eye className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-sans uppercase tracking-[0.12em] text-[#A67D28] font-semibold">
                          RISK 01
                        </span>
                        <h3 className="text-lg font-heading font-medium text-[#0F1012] transition-colors duration-200 group-hover:text-[#A67D28]">
                          Invisible
                        </h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#4B4F58] leading-[1.4]">
                    Your brand does not appear for the questions your buyers ask. Competitors dominate the synthesized answer while your company is completely omitted.
                  </p>
                </div>
              </SlideStaggerItem>

              {/* Card 2: Misrepresented */}
              <SlideStaggerItem direction="right">
                <div className="surface-card p-6 lg:p-8 group cursor-default">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-[8px] bg-[#FFF5F5] border border-[#FED7D7] text-[#C53030] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:border-[#FEB2B2]">
                        <AlertTriangle className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-sans uppercase tracking-[0.12em] text-[#9B2C2C] font-semibold">
                          RISK 02
                        </span>
                        <h3 className="text-lg font-heading font-medium text-[#0F1012] transition-colors duration-200 group-hover:text-[#9B2C2C]">
                          Misrepresented
                        </h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#4B4F58] leading-[1.4]">
                    AI describes your offer using incomplete or outdated information. Sunset pricing, retired features, or inaccurate comparisons misinform high-intent buyers.
                  </p>
                </div>
              </SlideStaggerItem>

              {/* Card 3: Outranked */}
              <SlideStaggerItem direction="right">
                <div className="surface-card p-6 lg:p-8 group cursor-default">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-[8px] bg-[#FAF8F5] border border-[#EADBBE] text-[#C5A059] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:border-[#C5A059]/60">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-sans uppercase tracking-[0.12em] text-[#A67D28] font-semibold">
                          RISK 03
                        </span>
                        <h3 className="text-lg font-heading font-medium text-[#0F1012] transition-colors duration-200 group-hover:text-[#A67D28]">
                          Outranked
                        </h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#4B4F58] leading-[1.4]">
                    Competitors are cited by the sources AI trusts most. They proactively seed the structured review platforms and reference datasets that LLMs query.
                  </p>
                </div>
              </SlideStaggerItem>

            </SlideStaggerContainer>

          </div>

        </div>
      </section>

      {/* ============================================================
          6 BENTO GRID SERVICE CARDS (CHAMPAGNE GOLD & ALABASTER)
          ============================================================ */}
      <section id="services" ref={servicesRef} className="scroll-mt-88 sm:scroll-mt-96 lg:scroll-mt-104 py-48 lg:py-64 bg-transparent text-[#0F1012] relative overflow-hidden">
        {/* Parallax Far Dot Grid & Dual Opposing Liquid Radial Glows */}
        <ServicesParallaxBackdrop sectionRef={servicesRef} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SlideReveal direction="down" className="max-w-3xl mb-12 lg:mb-16">
            <span className="text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#A67D28] block mb-2">
              // WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-medium text-[#0F1012] leading-none tracking-tight mb-4">
              We turn brand authority into AI visibility.
            </h2>
            <p className="text-base sm:text-lg text-[#4B4F58] leading-[1.4]">
              Citepoint combines research, content architecture, technical optimization, third-party authority building, and continuous monitoring to help your brand earn recommendations in AI answers.
            </p>
          </SlideReveal>

          {/* 6 Bento Grid Surface Cards with Alternating Diagonal Slide In */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                    className="surface-card p-6 lg:p-8 flex flex-col justify-between h-full group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-9 h-9 rounded-[8px] bg-[#FAF8F5] border border-[#EADBBE] flex items-center justify-center text-[#C5A059] transition-all duration-300 group-hover:scale-110 group-hover:border-[#C5A059] group-hover:shadow-[0_0_12px_rgba(197,160,89,0.25)]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-sans text-xs text-[#A67D28] font-semibold tracking-[0.12em] transition-colors duration-200 group-hover:text-[#0F1012]">
                          // {s.num}
                        </span>
                      </div>

                      <h3 className="text-xl font-heading font-medium text-[#0F1012] mb-3 transition-colors duration-200 group-hover:text-[#A67D28]">
                        {s.title}
                      </h3>

                      <p className="text-sm text-[#4B4F58] leading-[1.4] mb-6">
                        {s.desc}
                      </p>

                      <div className="space-y-2 pt-4 border-t border-[#EADBBE]">
                        <span className="text-[10px] font-sans uppercase tracking-[0.12em] text-[#A67D28] block font-semibold">
                          DELIVERABLES:
                        </span>
                        <ul className="text-xs text-[#363940] space-y-1.5 font-sans">
                          {s.deliverables.map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {s.num === '01' && (
                          <div className="pt-3 border-t border-[#EADBBE] mt-3">
                            <span className="text-[10px] font-sans text-[#A67D28] block mb-1.5 uppercase tracking-[0.12em] font-medium">
                              Engines Audited:
                            </span>
                            <div className="flex items-center gap-1.5">
                              {AI_ENGINES.map((e) => (
                                <div
                                 key={e.id}
                                 title={e.name}
                                 className="w-6 h-6 rounded-[4px] bg-[#FAF8F5] border border-[#EADBBE] flex items-center justify-center shadow-xs"
                               >
                                 <AiEngineIcon id={e.id} size={13} variant={e.isGoogleMulti ? 'multicolor' : 'brand'} />
                               </div>
                             ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#EADBBE] flex items-center justify-between min-h-[44px]">
                      <span className="text-xs font-sans uppercase tracking-[0.12em] text-[#A67D28] group-hover:text-[#0F1012] transition-colors flex items-center gap-1.5 font-semibold">
                        Explore service
                      </span>
                      <div
                        className="arrow-icon-btn transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-[#C5A059] group-hover:text-[#0F1012] group-hover:border-[#C5A059] group-hover:shadow-[0_0_12px_rgba(197,160,89,0.35)]"
                        aria-hidden="true"
                      >
                        <ArrowUpRight className="w-4 h-4" />
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
          SIGNATURE FLOW BAND (CHAMPAGNE GOLD & ALABASTER WELL)
          ============================================================ */}
      <section ref={methodRef} className="py-48 lg:py-64 bg-transparent text-[#0F1012] relative overflow-hidden">
        {/* Parallax Connection Vector Line & Pulse Nodes */}
        <MethodParallaxBackdrop sectionRef={methodRef} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SlideReveal direction="up" className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <span className="text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#A67D28] block mb-2">
              // METHODOLOGY IN ACTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-medium text-[#0F1012] leading-none tracking-tight mb-4">
              From question to citation.
            </h2>
            <p className="text-base sm:text-lg text-[#4B4F58] leading-[1.4] max-w-2xl mx-auto">
              We identify the questions that influence buying decisions, the sources AI trusts, and the actions required to make your brand visible in that journey.
            </p>
          </SlideReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 mb-12 lg:mb-16">
            {signatureFlow.map((item, idx) => {
              const Icon = item.icon;
              // Alternating zig-zag slide: Odd steps from left, even steps from right
              const slideDir = idx % 2 === 0 ? 'left' : 'right';

              return (
                <SlideReveal
                  key={item.step}
                  direction={slideDir}
                  delay={idx * 0.08}
                  className="h-full flex flex-col"
                >
                  <div className="surface-card p-6 flex flex-col justify-between h-full group cursor-default">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-7 h-7 rounded-[8px] bg-[#FAF8F5] border border-[#EADBBE] flex items-center justify-center font-sans text-xs font-semibold text-[#A67D28] transition-all duration-300 group-hover:border-[#C5A059] group-hover:shadow-[0_0_10px_rgba(197,160,89,0.25)]">
                          {item.step}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#C5A059] transition-transform duration-300 group-hover:scale-125 group-hover:shadow-[0_0_8px_#C5A059]" />
                      </div>

                      <div className="w-9 h-9 rounded-[8px] bg-[#FAF8F5] border border-[#EADBBE] flex items-center justify-center mb-4 text-[#C5A059] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#A67D28] group-hover:border-[#C5A059]">
                        <Icon className="w-4 h-4" />
                      </div>

                      <h3 className="text-base font-heading font-medium text-[#0F1012] mb-2 transition-colors duration-200 group-hover:text-[#A67D28]">
                        {item.label}
                      </h3>

                      <p className="text-xs text-[#4B4F58] leading-[1.4]">
                        {item.desc}
                      </p>

                      {item.step === '02' && (
                        <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-[#EADBBE]">
                          {AI_ENGINES.map((e) => (
                            <div
                              key={e.id}
                              title={e.name}
                              className="w-5 h-5 rounded-[4px] bg-[#FAF8F5] border border-[#EADBBE] flex items-center justify-center transition-transform duration-200 hover:scale-110 shadow-xs"
                            >
                              <AiEngineIcon id={e.id} size={11} variant={e.isGoogleMulti ? 'multicolor' : 'brand'} />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#EADBBE] text-[10px] font-sans uppercase tracking-[0.12em] text-[#A67D28] font-semibold">
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
              className="btn-aurora"
            >
              <span>Request Visibility Audit</span>
              <ArrowRight className="w-4 h-4 text-[#0F1012]" />
            </button>
          </SlideReveal>

        </div>
      </section>

      {/* ============================================================
          PROCESS SECTION: 4-STEP TIMELINE (CHAMPAGNE GOLD & ALABASTER)
          ============================================================ */}
      <section id="how-it-works" className="scroll-mt-88 sm:scroll-mt-96 lg:scroll-mt-104 py-48 lg:py-64 bg-transparent text-[#0F1012] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="up" className="max-w-3xl mb-12 lg:mb-16">
            <span className="text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#A67D28] block mb-2">
              // IMPLEMENTATION ROADMAP
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-medium text-[#0F1012] leading-none tracking-tight mb-4">
              A practical system for a changing search landscape.
            </h2>
            <p className="text-base sm:text-lg text-[#4B4F58] leading-[1.4]">
              We guide enterprise teams through an organized workflow from initial baseline diagnosis to sustained recommendation authority.
            </p>
          </SlideReveal>

          <SlideStaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {processSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <SlideStaggerItem key={step.step} direction="up" className="h-full">
                  <div
                    onClick={() => setActiveStep(idx)}
                    className={`surface-card p-6 lg:p-8 cursor-pointer flex flex-col justify-between h-full group ${
                      isActive
                        ? '!border-[#C5A059] !shadow-[0_8px_30px_rgba(197,160,89,0.2)] -translate-y-1'
                        : ''
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#A67D28]">
                          // {step.step}
                        </span>
                        <span
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            isActive ? 'bg-[#C5A059] shadow-[0_0_8px_#C5A059]' : 'bg-black/15 group-hover:bg-[#C5A059]/60'
                          }`}
                        />
                      </div>

                      <h3 className={`text-xl font-heading font-medium mb-3 transition-colors duration-200 ${isActive ? 'text-[#A67D28]' : 'text-[#0F1012] group-hover:text-[#A67D28]'}`}>
                        {step.title}
                      </h3>

                      <p className="text-sm text-[#4B4F58] leading-[1.4]">
                        {step.desc}
                      </p>
                    </div>

                    <div className={`mt-8 pt-4 border-t border-[#EADBBE] text-xs font-sans transition-colors duration-200 ${isActive ? 'text-[#A67D28] font-semibold' : 'text-[#636773] group-hover:text-[#0F1012]'}`}>
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
          RESULTS / CASE STUDIES (CHAMPAGNE GOLD & ALABASTER)
          ============================================================ */}
      <section id="case-studies" ref={caseStudiesRef} className="scroll-mt-88 sm:scroll-mt-96 lg:scroll-mt-104 py-48 lg:py-64 bg-transparent text-[#0F1012] relative overflow-hidden">
        {/* Parallax Layered Diagnostic Depth Scene */}
        <CaseStudiesParallaxBackdrop sectionRef={caseStudiesRef} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SlideReveal direction="left" className="max-w-3xl mb-12 lg:mb-16">
            <span className="text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#A67D28] block mb-2">
              // MEASURABLE OUTCOMES
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-medium text-[#0F1012] leading-none tracking-tight mb-4">
              Visibility should lead somewhere.
            </h2>
            <p className="text-base sm:text-lg text-[#4B4F58] leading-[1.4]">
              We measure progress through meaningful changes in AI presence, qualified visibility, source authority, and downstream business signals.
            </p>
          </SlideReveal>

          {/* Formium-Styled 4-Card Achievement Stat Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
            <SlideReveal direction="up" delay={0.06}>
              <div className="fa-stat-card group">
                <div className="fa-stat-value">
                  <span>74</span>
                  <span className="fa-stat-suffix">%</span>
                </div>
                <div className="fa-stat-label">
                  Baseline Omission Rate
                </div>
                <p className="text-xs text-[#4B4F58] font-sans mt-1">
                  Brands unmentioned across target buyer queries prior to Citepoint audit
                </p>
              </div>
            </SlideReveal>

            <SlideReveal direction="up" delay={0.12}>
              <div className="fa-stat-card group">
                <div className="fa-stat-value">
                  <span>5</span>
                  <span className="fa-stat-suffix">/5</span>
                </div>
                <div className="fa-stat-label">
                  AI Engines Audited
                </div>
                <p className="text-xs text-[#4B4F58] font-sans mt-1">
                  ChatGPT, Perplexity, Gemini, Claude & Google AI Overviews benchmarked
                </p>
              </div>
            </SlideReveal>

            <SlideReveal direction="up" delay={0.18}>
              <div className="fa-stat-card group">
                <div className="fa-stat-value">
                  <span>3.8</span>
                  <span className="fa-stat-suffix">x</span>
                </div>
                <div className="fa-stat-label">
                  Citation Retrieval Density
                </div>
                <p className="text-xs text-[#4B4F58] font-sans mt-1">
                  Average increase in canonical entity citations across authoritative hubs
                </p>
              </div>
            </SlideReveal>

            <SlideReveal direction="up" delay={0.24}>
              <div className="fa-stat-card group">
                <div className="fa-stat-value">
                  <span>90</span>
                  <span className="fa-stat-suffix">d</span>
                </div>
                <div className="fa-stat-label">
                  Authority Sprint
                </div>
                <p className="text-xs text-[#4B4F58] font-sans mt-1">
                  Structured sprint timeframe to verifiable category recommendation shift
                </p>
              </div>
            </SlideReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                  <div className="surface-card p-6 lg:p-8 flex flex-col justify-between h-full group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-sans uppercase tracking-[0.12em] text-[#A67D28] font-semibold">
                        {cs.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-[8px] bg-[#FAF8F5] text-[#363940] border border-[#EADBBE] text-[10px] font-sans uppercase tracking-[0.12em] transition-colors duration-200 group-hover:border-[#C5A059]">
                        {cs.status}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-heading font-medium text-[#0F1012] mb-3 transition-colors duration-200 group-hover:text-[#A67D28]">
                        {cs.title}
                      </h3>

                      <p className="text-xs text-[#4B4F58] leading-[1.4] mb-6">
                        {cs.note}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#EADBBE]">
                      <div className="flex items-center justify-between text-xs font-sans">
                        <span className="text-[#636773]">{cs.metricLabel}:</span>
                        <span className="stat-counter text-base font-semibold text-[#A67D28] transition-transform duration-300 group-hover:scale-105 inline-block">{cs.metricValue}</span>
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
          WHY CITEPOINT (CHAMPAGNE GOLD & ALABASTER)
          ============================================================ */}
      <section ref={whyUsRef} className="py-48 lg:py-64 bg-transparent text-[#0F1012] relative overflow-hidden">
        {/* Parallax Subtle Glass Bubbles & Refraction Rings */}
        <WhyUsParallaxBackdrop sectionRef={whyUsRef} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SlideReveal direction="right" className="max-w-3xl mb-12 lg:mb-16">
            <span className="text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#A67D28] block mb-2">
              // DIFFERENTIATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-medium text-[#0F1012] leading-none tracking-tight mb-4">
              Not another content agency.
            </h2>
            <p className="text-base sm:text-lg text-[#4B4F58] leading-[1.4]">
              We don't sell bloated content packages or chase vanity keywords. Citepoint operates as a strategic AI visibility partner focused on the exact sources that influence high-consideration buying decisions.
            </p>
          </SlideReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {differentiators.map((d, i) => {
              const slideDir = i % 2 === 0 ? 'left' : 'right';
              return (
                <SlideReveal
                  key={d.num}
                  direction={slideDir}
                  delay={i * 0.1}
                  className="h-full flex flex-col"
                >
                  <div className="surface-card p-6 lg:p-8 flex flex-col justify-between h-full group cursor-default">
                    <div>
                      <span className="font-sans text-xs text-[#A67D28] font-semibold tracking-[0.12em] block mb-4 transition-transform duration-300 group-hover:translate-x-0.5">
                        // {d.num}
                      </span>

                      <h3 className="text-2xl font-heading font-medium text-[#0F1012] mb-3 transition-colors duration-200 group-hover:text-[#A67D28]">
                        {d.title}
                      </h3>

                      <p className="text-sm text-[#4B4F58] leading-[1.4]">
                        {d.desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#EADBBE] flex items-center gap-2 text-xs font-sans text-[#0F1012]">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] transition-transform duration-300 group-hover:scale-110" />
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
          FAQ SECTION (CHAMPAGNE GOLD & ALABASTER)
          ============================================================ */}
      <section id="faq" ref={faqRef} className="scroll-mt-88 sm:scroll-mt-96 lg:scroll-mt-104 py-48 lg:py-64 bg-transparent text-[#0F1012] relative overflow-hidden">
        {/* Parallax Subtle Liquid Shape & Gold Citation Point */}
        <FaqParallaxBackdrop sectionRef={faqRef} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SlideReveal direction="up" className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <span className="text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#A67D28] block mb-2">
              // FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-medium text-[#0F1012] leading-none tracking-tight mb-4">
              Clear answers on AI search visibility.
            </h2>
            <p className="text-base text-[#4B4F58] leading-[1.4]">
              Common questions about Generative Engine Optimization, timelines, and our strategic methodology.
            </p>
          </SlideReveal>

          <SlideReveal direction="up" delay={0.15}>
            <FaqAccordion />
          </SlideReveal>

        </div>
      </section>

      {/* ============================================================
          FINAL CTA BAND (CHAMPAGNE GOLD & FROSTED ALABASTER)
          ============================================================ */}
      <section ref={finalCtaRef} className="py-48 lg:py-64 bg-white/80 backdrop-blur-md text-[#0F1012] relative overflow-hidden border-t border-[#EADBBE]">
        {/* Parallax Second-Strongest Scene: Gold & Light Fields + Citation Ring */}
        <FinalCtaParallaxBackdrop sectionRef={finalCtaRef} />

        <SlideReveal direction="scale-up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#A67D28] px-3.5 py-1.5 rounded-[8px] bg-white border border-[#EADBBE] shadow-xs inline-block">
            GET CITED. GET CHOSEN.
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-medium text-[#0F1012] tracking-tightest leading-none">
            Make your brand part of the answer.
          </h2>

          <p className="text-base sm:text-lg text-[#4B4F58] max-w-2xl mx-auto leading-[1.4]">
            Find out how AI systems currently see your brand—and what it will take to become more visible.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleNav('audit')}
              className="btn-aurora w-full sm:w-auto shadow-[0_4px_16px_rgba(197,160,89,0.32)]"
            >
              <span>Get Your AI Visibility Audit</span>
              <ArrowRight className="w-4 h-4 text-[#0F1012]" />
            </button>

            <button
              onClick={() => handleNav('contact')}
              className="btn-kelp w-full sm:w-auto"
            >
              <span>Talk to Citepoint</span>
            </button>
          </div>

          <div className="pt-8 border-t border-[#EADBBE] max-w-md mx-auto">
            <p className="text-xs font-sans text-[#636773] leading-[1.4]">
              No hype. No guaranteed rankings. Just an empirical baseline, practical priorities, and measurable progress.
            </p>
          </div>
        </SlideReveal>
      </section>

    </div>
  );
}
