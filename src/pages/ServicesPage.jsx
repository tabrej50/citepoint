import React, { useState } from 'react';
import {
  FileSearch,
  Sparkles,
  Award,
  ArrowRight,
  Check,
  ChevronDown,
  Layers,
  Search,
  Database,
  ShieldCheck,
  Cpu,
  BarChart3
} from 'lucide-react';
import { SlideReveal } from '../components/SlideReveal';

export default function ServicesPage({ setCurrentRoute }) {
  const [openFaq, setOpenFaq] = useState(null);

  const handleNav = (route) => {
    if (setCurrentRoute) setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceRows = [
    {
      num: '01',
      eyebrow: 'BASELINE & DIAGNOSTICS',
      title: 'AI Visibility Audit',
      tagline: 'Establish exactly how AI systems discover, describe, cite, and recommend your brand.',
      description: 'Before modifying content architecture or PR investments, we execute empirical diagnostic testing across ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews to benchmark recommendation share and cite-worthiness.',
      deliverables: [
        'Multi-model visibility benchmark across 5 core AI engines',
        '25+ high-intent buyer evaluation prompt clusters',
        'Competitor recommendation share-of-voice comparison',
        'Citation attribution mapping to authoritative primary sources',
        'Factual accuracy, omission, and hallucination catalog',
      ],
      ctaText: 'Request an Audit',
      ctaAction: 'audit',
      visual: {
        badge: 'AUDIT REPORT // SYNTHETIC CONSENSUS',
        metric: '74%',
        metricLabel: 'Omission Rate in Baseline Prompts',
        status: 'Audit Scope: Multi-Platform LLM Benchmark',
        items: [
          { label: 'ChatGPT Search (GPT-4o)', status: 'Evaluated' },
          { label: 'Perplexity Pro (Sonar)', status: 'Mapped' },
          { label: 'Google AI Overviews', status: 'Cataloged' },
          { label: 'Claude 3.7 Sonnet', status: 'Tested' },
        ]
      }
    },
    {
      num: '02',
      eyebrow: 'ANSWER-FIRST ARCHITECTURE',
      title: 'Generative Engine Optimization (GEO)',
      tagline: 'Structure knowledge triples and authoritative signals that models prioritize.',
      description: 'An ongoing optimization program refactoring feature documentation, technical proof points, and commercial landing pages into modular, answer-first formats that RAG pipelines and generative synthesizers extract accurately.',
      deliverables: [
        'Modular answer-first information architecture deployment',
        'Structured schema markup & JSON-LD entity triples',
        'Crawlability & robot permission optimization (GPTBot, ClaudeBot)',
        'Prompt-driven content roadmaps mapped to buying committees',
        'Continuous prompt re-testing and synthetic rank monitoring',
      ],
      ctaText: 'Explore GEO Program',
      ctaAction: 'contact',
      visual: {
        badge: 'GEO ENGINE // RAG RETRIEVAL MAPPING',
        metric: '3.8x',
        metricLabel: 'Entity Retrieval Density Increase',
        status: 'Architecture: Subject-Predicate-Object',
        items: [
          { label: 'Entity Triples Verified', status: 'Active' },
          { label: 'Crawl Access Optimized', status: '200 OK' },
          { label: 'Answer-First Formatting', status: 'Deployed' },
          { label: 'Vector Similarity Index', status: '0.94 Match' },
        ]
      }
    },
    {
      num: '03',
      eyebrow: 'SYNTHETIC CONSENSUS',
      title: 'Citation & Authority Building',
      tagline: 'Strengthen the independent third-party sources AI systems naturally trust.',
      description: 'AI engines do not rely solely on your website. They cross-verify claims across trade publications, industry benchmarks, specialized review hubs, and technical documentation repositories before presenting vendor shortlists.',
      deliverables: [
        'Targeted editorial placements in LLM training corpora',
        'Specialized review and software comparison platform alignment',
        'Executive commentary distribution to trusted industry hubs',
        'Knowledge graph entity synchronization (Wikidata/Industry indices)',
        'Citation displacement alerts when competitors gain mention share',
      ],
      ctaText: 'Build Brand Authority',
      ctaAction: 'contact',
      visual: {
        badge: 'CITATION GRAPH // TRUST ATTRIBUTION',
        metric: '18+',
        metricLabel: 'High-Trust Domain Citations Seeded',
        status: 'Corpora Verification: Active',
        items: [
          { label: 'Trade Editorial Citations', status: 'Secured' },
          { label: 'Industry Benchmark Alignment', status: 'Indexed' },
          { label: 'Comparison Graph Position', status: 'Shortlisted' },
          { label: 'Displacement Safeguard', status: 'Monitored' },
        ]
      }
    }
  ];

  const processSteps = [
    {
      step: 'Phase 01',
      title: 'Discover & Baseline',
      desc: 'We map buyer question clusters, examine current model outputs, and establish your verified visibility baseline against competitors.',
      duration: 'Weeks 1–2',
      deliverable: 'Visibility Benchmark Report'
    },
    {
      step: 'Phase 02',
      title: 'Diagnose & Architecture',
      desc: 'We identify information gaps, missing entity relationships, crawler friction, and citation vacuums across all major AI engines.',
      duration: 'Weeks 3–4',
      deliverable: 'Diagnostic Gap Catalog'
    },
    {
      step: 'Phase 03',
      title: 'Build & Optimize',
      desc: 'We execute schema triples, answer-first content structures, technical crawl permissions, and high-trust external citations.',
      duration: 'Weeks 5–10',
      deliverable: 'Signal & Content Deployment'
    },
    {
      step: 'Phase 04',
      title: 'Monitor & Expand',
      desc: 'We track multi-model answer changes longitudinally, safeguard against competitor displacement, and deliver executive dashboards.',
      duration: 'Continuous',
      deliverable: 'Monthly Share Intelligence'
    }
  ];

  const faqs = [
    {
      q: 'How does Generative Engine Optimization (GEO) differ from traditional SEO?',
      a: 'SEO aims to rank individual URLs on blue-link search engine result pages based on keywords and PageRank. GEO focuses on synthetic answer synthesis: ensuring your brand claims, pricing, and capabilities are accurately understood, retrieved, cited, and recommended inside generative answers.'
    },
    {
      q: 'Do you guarantee #1 ranking or exclusive recommendations in ChatGPT?',
      a: 'No credible firm can promise guaranteed placements because AI model weights are non-deterministic and controlled by third parties. Citepoint optimizes controllable variables: verified entity data, authoritative third-party citations, technical crawlability, and clear answers to high-intent buyer prompts.'
    },
    {
      q: 'Can our existing SEO agency or internal marketing team work with Citepoint?',
      a: 'Yes. Citepoint frequently operates as a specialized generative search layer alongside internal content, communications, and SEO teams, providing technical schemas, citation strategy, and AI prompt monitoring.'
    },
    {
      q: 'How quickly do LLMs update their knowledge after changes are published?',
      a: 'Engines utilizing real-time retrieval (Perplexity, Google AI Overviews, SearchGPT) can reflect changes within days or weeks once authoritative sources are crawled. Base model retraining updates occur periodically across model releases.'
    }
  ];

  return (
    <div className="w-full bg-[#010102] text-[#8a8f98] font-sans">
      
      {/* ============================================================
          SECTION 1: PAGE HEADER
          Padding: 96px 0 80px (mobile 72px 0 48px)
          Left-aligned, content max-width 720px
          Gap between title and intro: 24px
          ============================================================ */}
      <section className="pt-[72px] pb-[48px] md:pt-[96px] md:pb-[80px] border-b border-[#23252a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[720px] text-left">
            <SlideReveal direction="down">
              <div className="type-eyebrow text-[#828fff] mb-4">
                // SERVICES & SYSTEM CAPABILITIES
              </div>
              <h1 className="type-display text-[#f7f8f8] mb-6">
                Engineering brand visibility in the answer economy.
              </h1>
            </SlideReveal>

            <SlideReveal direction="up" delay={0.1}>
              <p className="type-body-lg text-[#8a8f98] mb-8 max-w-[65ch]">
                We combine AI visibility research, structured content engineering, technical optimization, and authoritative citation building to help your brand become recommended across AI search.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleNav('audit')}
                  className="btn-primary"
                >
                  <span>Get Your AI Visibility Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleNav('contact')}
                  className="btn-secondary"
                >
                  <span>Schedule a Consultation</span>
                </button>
              </div>
            </SlideReveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: SERVICE ROWS (3 ROWS)
          Section padding: 120px 0
          Each row: 12-column grid, text columns 1-5, visual columns 7-12
          Row min-height: 480px, gap between rows: 96px
          Alternate text and visual sides every row
          Visual area height: 400px (tablet 320px, mobile 260px)
          Tablet and mobile: stack, text first
          ============================================================ */}
      <section className="py-[120px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-[96px]">
          
          {serviceRows.map((svc, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={svc.num}
                className="grid grid-cols-12 gap-8 lg:gap-12 items-center min-h-[480px]"
              >
                {/* Text Block */}
                <div
                  className={`col-span-12 ${
                    isEven
                      ? 'lg:col-start-8 lg:col-span-5 order-1 lg:order-2'
                      : 'lg:col-span-5 order-1'
                  } flex flex-col justify-center`}
                >
                  <SlideReveal direction={isEven ? 'right' : 'left'}>
                    <div className="type-eyebrow text-[#828fff] mb-3">
                      // {svc.num} {svc.eyebrow}
                    </div>
                    <h2 className="type-h2 text-[#f7f8f8] mb-4">
                      {svc.title}
                    </h2>
                    <p className="type-body text-[#8a8f98] mb-6 max-w-[65ch]">
                      {svc.description}
                    </p>

                    {/* Deliverables checklist */}
                    <div className="space-y-2.5 mb-8">
                      <div className="text-[12px] uppercase tracking-[0.08em] font-medium text-[#f7f8f8] mb-3">
                        Key Deliverables
                      </div>
                      {svc.deliverables.map((d, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#d0d6e0]">
                          <div className="w-4 h-4 rounded-full bg-[#141516] border border-[#23252a] text-[#828fff] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="leading-snug">{d}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <button
                        onClick={() => handleNav(svc.ctaAction)}
                        className="btn-primary"
                      >
                        <span>{svc.ctaText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </SlideReveal>
                </div>

                {/* Visual Area (400px desktop, 320px tablet, 260px mobile) */}
                <div
                  className={`col-span-12 ${
                    isEven
                      ? 'lg:col-span-6 order-2 lg:order-1'
                      : 'lg:col-start-7 lg:col-span-6 order-2'
                  }`}
                >
                  <SlideReveal direction={isEven ? 'left' : 'right'}>
                    <div className="h-[260px] md:h-[320px] lg:h-[400px] rounded-[12px] bg-[#0f1011] border border-[#23252a] p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
                      {/* Top Hairline Highlight */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

                      {/* Header row */}
                      <div className="flex items-center justify-between gap-4 border-b border-[#23252a] pb-4">
                        <span className="type-eyebrow text-[#8a8f98]">
                          {svc.visual.badge}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#828fff]" />
                      </div>

                      {/* Center metric callout */}
                      <div className="my-auto py-2">
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#f7f8f8] tracking-tight mb-1">
                          {svc.visual.metric}
                        </div>
                        <div className="type-small text-[#8a8f98]">
                          {svc.visual.metricLabel}
                        </div>
                      </div>

                      {/* Technical item checklist */}
                      <div className="pt-4 border-t border-[#23252a] grid grid-cols-2 gap-2 text-xs">
                        {svc.visual.items.map((item, iIdx) => (
                          <div key={iIdx} className="flex items-center justify-between p-2 rounded-[6px] bg-[#141516] border border-[#23252a]">
                            <span className="text-[#8a8f98] truncate mr-2">{item.label}</span>
                            <span className="text-[#828fff] font-mono text-[11px] shrink-0">{item.status}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </SlideReveal>
                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* ============================================================
          SECTION 3: PROCESS
          Section padding: 144px 0
          4 equal columns, gap 20px, card min-height 300px, padding 28px
          Tablet: 2 columns. Mobile: 1 column
          ============================================================ */}
      <section className="py-[144px] bg-[#0f1011] border-y border-[#23252a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="down">
            <div className="max-w-[720px] mb-12 lg:mb-16 text-left">
              <div className="type-eyebrow text-[#828fff] mb-3">
                // SYSTEMATIC METHODOLOGY
              </div>
              <h2 className="type-h2 text-[#f7f8f8] mb-4">
                One visibility system. Four operating phases.
              </h2>
              <p className="type-body text-[#8a8f98] max-w-[65ch]">
                We discover where your brand stands, diagnose citation gaps, build the signals models verify, and measure visibility gains over time.
              </p>
            </div>
          </SlideReveal>

          {/* 4 equal columns grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
            {processSteps.map((step, idx) => (
              <SlideReveal
                key={step.step}
                direction="up"
                delay={idx * 0.08}
                className="h-full"
              >
                <div className="min-h-[300px] p-[28px] rounded-[12px] bg-[#141516] border border-[#23252a] flex flex-col justify-between hover:border-[#34343a] transition-colors h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[12px] font-mono uppercase tracking-wider text-[#828fff]">
                        {step.step}
                      </span>
                      <span className="text-[11px] text-[#62666d]">{step.duration}</span>
                    </div>
                    <h3 className="type-h4 text-[#f7f8f8] mb-3">
                      {step.title}
                    </h3>
                    <p className="type-small text-[#8a8f98] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#23252a] mt-6">
                    <span className="text-[11px] uppercase tracking-wider text-[#62666d] block mb-1">Deliverable</span>
                    <span className="type-small text-[#f7f8f8] font-medium block">{step.deliverable}</span>
                  </div>
                </div>
              </SlideReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 4: FAQ (Same layout as homepage FAQ)
          Centered header, max-w-3xl accordion container
          ============================================================ */}
      <section className="py-[120px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="up">
            <div className="max-w-[720px] mx-auto text-center mb-12 lg:mb-16">
              <div className="type-eyebrow text-[#828fff] mb-3">
                // COMMONLY ASKED QUESTIONS
              </div>
              <h2 className="type-h2 text-[#f7f8f8] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="type-body text-[#8a8f98] max-w-[65ch] mx-auto">
                Clear answers to help you evaluate how Citepoint delivers durable visibility across AI search platforms.
              </p>
            </div>
          </SlideReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-[12px] bg-[#0f1011] border border-[#23252a] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e02020]"
                  >
                    <span className="type-body text-[#f7f8f8] font-medium">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#828fff] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-5 type-body text-[#8a8f98] leading-relaxed border-t border-[#23252a] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 5: FINAL CTA PANEL (Same as homepage)
          ============================================================ */}
      <section className="py-[120px] bg-[#0f1011] border-t border-[#23252a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="up">
            <div className="relative p-10 sm:p-14 lg:p-16 rounded-[16px] bg-[#141516] border border-[#23252a] text-center max-w-4xl mx-auto overflow-hidden shadow-2xl">
              <div className="type-eyebrow text-[#828fff] mb-3">
                // GET CITED. GET CHOSEN.
              </div>

              <h2 className="type-h2 text-[#f7f8f8] mb-5 max-w-2xl mx-auto">
                Ready to establish your synthetic search presence?
              </h2>

              <p className="type-body text-[#8a8f98] max-w-[65ch] mx-auto mb-8">
                Request an AI Visibility Audit to discover how your brand currently ranks, where competitors are winning attention, and the prioritized roadmap to lead AI discovery.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => handleNav('audit')}
                  className="btn-primary w-full sm:w-auto"
                >
                  <span>Request an AI Visibility Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleNav('contact')}
                  className="btn-secondary w-full sm:w-auto"
                >
                  <span>Schedule a Briefing</span>
                </button>
              </div>
            </div>
          </SlideReveal>

        </div>
      </section>

    </div>
  );
}
