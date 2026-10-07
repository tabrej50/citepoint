import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown
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
          SECTION 1: PAGE HEADER (Atmospheric Executive Hero)
          ============================================================ */}
      <section className="relative pt-[96px] pb-[64px] md:pt-[120px] md:pb-[96px] border-b border-[#23252a] overflow-hidden">
        {/* Subtle radial ambient atmosphere */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(94,106,210,0.22),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-[800px] text-left">
            <SlideReveal direction="down">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-[8px] bg-[#141517] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#828fff] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5e6ad2]" />
                </span>
                <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#828fff] font-medium">
                  SERVICES & SYSTEM CAPABILITIES
                </span>
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
          SECTION 2: 3 CORE SERVICE SPECIFICATIONS
          ============================================================ */}
      <section className="py-[80px] lg:py-[100px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 lg:space-y-10">
          
          {serviceRows.map((svc) => (
            <SlideReveal key={svc.num} direction="up">
              <div className="p-8 sm:p-10 lg:p-12 rounded-[16px] bg-[#0c0d10] border border-white/8 relative overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:border-white/15 transition-all duration-300">
                {/* Top specular hairline highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#828fff]/30 to-transparent pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  
                  {/* Left Column: Number, Eyebrow, Title, Tagline, Description, CTA */}
                  <div className="lg:col-span-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="inline-flex items-center gap-2 mb-3">
                        <span className="text-[12px] font-mono text-[#828fff] font-medium tracking-[0.12em]">
                          // {svc.num}
                        </span>
                        <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#8a8f98]">
                          {svc.eyebrow}
                        </span>
                      </div>

                      <h2 className="type-h2 text-[#f7f8f8] mb-3">
                        {svc.title}
                      </h2>

                      <p className="text-sm font-medium text-white/90 mb-4 font-sans leading-snug">
                        {svc.tagline}
                      </p>

                      <p className="type-body text-[#8a8f98] mb-8 leading-relaxed max-w-[55ch]">
                        {svc.description}
                      </p>
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
                  </div>

                  {/* Right Column: Key Deliverables & Scope Details */}
                  <div className="lg:col-span-6">
                    <div className="p-6 sm:p-7 rounded-[12px] bg-[#121316] border border-white/8">
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/8">
                        <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#f7f8f8] font-medium">
                          Core Program Deliverables
                        </span>
                        <span className="text-[10px] font-mono text-[#828fff] bg-[#5e6ad2]/15 px-2 py-0.5 rounded border border-[#5e6ad2]/20">
                          Verified Scope
                        </span>
                      </div>

                      <div className="space-y-3.5">
                        {svc.deliverables.map((d, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-3 text-sm text-[#d0d6e0]">
                            <div className="w-5 h-5 rounded-full bg-[#18191d] border border-white/10 text-[#828fff] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                              <Check className="w-3 h-3" />
                            </div>
                            <span className="leading-snug pt-0.5">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </SlideReveal>
          ))}

        </div>
      </section>

      {/* ============================================================
          SECTION 3: SYSTEMATIC METHODOLOGY (4 Operating Phases)
          ============================================================ */}
      <section className="py-[120px] lg:py-[144px] bg-[#0c0d10] border-y border-[#23252a] relative overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(94,106,210,0.12),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SlideReveal direction="down">
            <div className="max-w-[720px] mb-12 lg:mb-16 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#141517] border border-white/8 text-[11px] font-mono uppercase tracking-[0.14em] text-[#828fff] mb-3">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, idx) => (
              <SlideReveal
                key={step.step}
                direction="up"
                delay={idx * 0.08}
                className="h-full"
              >
                <div className="min-h-[320px] p-7 rounded-[14px] bg-[#121316] border border-white/8 flex flex-col justify-between hover:border-[#828fff]/35 hover:-translate-y-1 transition-all duration-300 h-full group shadow-[0_12px_32px_rgba(0,0,0,0.6)]">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#828fff] bg-[#5e6ad2]/15 px-2.5 py-1 rounded-[6px] border border-[#5e6ad2]/20 font-medium">
                        {step.step}
                      </span>
                      <span className="text-[11px] font-mono text-[#8a8f98]">{step.duration}</span>
                    </div>
                    <h3 className="type-h4 text-[#f7f8f8] mb-3 group-hover:text-[#828fff] transition-colors">
                      {step.title}
                    </h3>
                    <p className="type-small text-[#8a8f98] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/8 mt-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8a8f98] block mb-1">Deliverable</span>
                    <span className="type-small text-[#f7f8f8] font-medium block">{step.deliverable}</span>
                  </div>
                </div>
              </SlideReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 4: FAQ ACCORDION
          ============================================================ */}
      <section className="py-[120px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="up">
            <div className="max-w-[720px] mx-auto text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#141517] border border-white/8 text-[11px] font-mono uppercase tracking-[0.14em] text-[#828fff] mb-3">
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

          <div className="max-w-3xl mx-auto space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-[12px] bg-[#0c0d10] border border-white/8 overflow-hidden transition-all duration-200 hover:border-white/15"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5e6ad2]"
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
                    <div className="px-6 sm:px-8 pb-5 type-body text-[#8a8f98] leading-relaxed border-t border-white/6 pt-3">
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
          SECTION 5: FINAL CTA PANEL
          ============================================================ */}
      <section className="py-[120px] bg-[#0c0d10] border-t border-[#23252a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="up">
            <div className="relative p-10 sm:p-14 lg:p-16 rounded-[20px] bg-[#121316] border border-white/10 text-center max-w-4xl mx-auto overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.85)]">
              {/* Radial ambient highlight */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#5e6ad2]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#828fff]/50 to-transparent pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#18191d] border border-white/10 text-[11px] font-mono uppercase tracking-[0.14em] text-[#828fff] mb-4">
                // GET CITED. GET CHOSEN.
              </div>

              <h2 className="type-h2 text-[#f7f8f8] mb-5 max-w-2xl mx-auto">
                Ready to establish your synthetic search presence?
              </h2>

              <p className="type-body text-[#8a8f98] max-w-[65ch] mx-auto mb-8 leading-relaxed">
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
