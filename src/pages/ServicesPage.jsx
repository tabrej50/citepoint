import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown
} from 'lucide-react';
import { SlideReveal } from '../components/SlideReveal';
import PageHeader from '../components/PageHeader';

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
    <div className="w-full bg-white text-[#111111] font-sans">
      
      {/* ============================================================
          SECTION 1: PAGE HEADER
          ============================================================ */}
      <PageHeader
        eyebrow="SERVICES & SYSTEM CAPABILITIES"
        title="Engineering brand visibility in the answer economy."
        intro="We combine AI visibility research, structured content engineering, technical optimization, and authoritative citation building to help your brand become recommended across AI search."
        primaryButton={{
          text: 'Get Your AI Visibility Audit',
          onClick: () => handleNav('audit'),
        }}
        secondaryButton={{
          text: 'Schedule a Consultation',
          onClick: () => handleNav('contact'),
        }}
      />

      {/* ============================================================
          SECTION 2: 3 CORE SERVICE SPECIFICATIONS
          ============================================================ */}
      <section className="site-section bg-[#F5F5F7] border-b border-[#111111]/10">
        <div className="site-container space-y-8 lg:space-y-10">
          
          {serviceRows.map((svc) => (
            <SlideReveal key={svc.num} direction="up">
              <div className="bg-white border border-[#111111]/10 p-8 sm:p-10 lg:p-12 rounded-[24px] relative overflow-hidden group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Column: Number, Eyebrow, Title, Tagline, Description, CTA */}
                  <div className="lg:col-span-6 flex flex-col justify-between h-full">
                    <div>
                      <span className="eyebrow-label">
                        {svc.num} · {svc.eyebrow}
                      </span>

                      <h2 className="text-2xl sm:text-3xl font-semibold text-[#111111] mb-3">
                        {svc.title}
                      </h2>

                      <p className="text-sm font-semibold text-[#111111] mb-4 font-sans leading-snug">
                        {svc.tagline}
                      </p>

                      <p className="body-text text-sm mb-8 leading-relaxed max-w-[55ch]">
                        {svc.description}
                      </p>
                    </div>

                    <div>
                      <button
                        onClick={() => handleNav(svc.ctaAction)}
                        className="btn-primary"
                      >
                  <span>{svc.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-[#111111]" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Key Deliverables & Scope Details */}
                  <div className="lg:col-span-6">
                    <div className="p-6 sm:p-7 rounded-[20px] bg-[#F5F5F7] border border-[#111111]/10">
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#111111]/10">
                        <span className="text-[11px] font-sans uppercase tracking-[0.08em] text-[#111111] font-semibold">
                          Core Program Deliverables
                        </span>
                        <span className="text-[10px] font-sans text-[#111111] bg-white px-2.5 py-0.5 rounded-full border border-[#111111]/10 font-medium">
                          Verified Scope
                        </span>
                      </div>

                      <div className="space-y-3.5">
                        {svc.deliverables.map((d, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-3 text-sm text-[#111111]">
                            <div className="w-5 h-5 rounded-full bg-white border border-[#111111]/10 text-[#111111] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-[#111111]" />
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
      <section className="site-section bg-white border-b border-[#111111]/10 relative overflow-hidden">
        <div className="site-container relative z-10">
          
          <SlideReveal direction="down">
            <div className="max-w-[720px] mb-12 lg:mb-16 text-left">
              <span className="eyebrow-label">
                SYSTEMATIC METHODOLOGY
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#111111] mb-4">
                One visibility system. Four operating phases.
              </h2>
              <p className="intro-text max-w-[65ch]">
                We discover where your brand stands, diagnose citation gaps, build the signals models verify, and measure visibility gains over time.
              </p>
            </div>
          </SlideReveal>

          {/* 4 equal columns grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <SlideReveal
                key={step.step}
                direction="up"
                delay={idx * 0.08}
                className="h-full"
              >
                <div className="bg-[#F5F5F7] border border-[#111111]/10 min-h-[320px] p-7 rounded-[24px] flex flex-col justify-between group h-full">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[11px] font-sans uppercase tracking-[0.08em] text-[#111111] bg-white px-3 py-1 rounded-full border border-[#111111]/10 font-semibold">
                        {step.step}
                      </span>
                      <span className="text-[11px] font-sans text-[#111111]/60">{step.duration}</span>
                    </div>
                    <h3 className="text-xl font-sans font-bold text-[#111111] mb-3">
                      {step.title}
                    </h3>
                    <p className="body-text text-sm">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#111111]/10 mt-6">
                    <span className="text-[10px] font-sans uppercase tracking-wider text-[#111111]/60 block mb-1">Deliverable</span>
                    <span className="text-sm text-[#111111] font-semibold block">{step.deliverable}</span>
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
      <section className="site-section bg-[#F5F5F7] border-b border-[#111111]/10">
        <div className="site-container">
          
          <SlideReveal direction="up">
            <div className="max-w-[720px] mx-auto text-center mb-12 lg:mb-16">
              <span className="eyebrow-label text-center mx-auto">
                COMMONLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#111111] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="intro-text mx-auto max-w-[65ch]">
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
                  className="bg-white border border-[#111111]/10 rounded-[20px] overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-base font-sans font-semibold text-[#111111]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#111111] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-5 text-sm text-[#111111]/60 leading-relaxed border-t border-[#111111]/10 pt-3">
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
          SECTION 5: FINAL CTA PANEL (DARK SECTION #111111)
          ============================================================ */}
      <section className="site-section bg-white overflow-hidden">
        <div className="site-container">
          
          <SlideReveal direction="up">
            <div className="section-dark bg-[#111111] border border-white/10 relative p-10 sm:p-14 lg:p-16 rounded-[24px] text-center max-w-4xl mx-auto overflow-hidden text-white">
              <span className="eyebrow-label text-center mx-auto text-[#E60023]">
                GET CITED. GET CHOSEN.
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-5 max-w-2xl mx-auto">
                Ready to establish your synthetic search presence?
              </h2>

              <p className="intro-text mx-auto max-w-[65ch] mb-8 text-white/60">
                Request an AI Visibility Audit to discover how your brand currently ranks, where competitors are winning attention, and the prioritized roadmap to lead AI discovery.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-buttons-container">
                <button
                  onClick={() => handleNav('audit')}
                  className="btn-primary w-full sm:w-auto"
                >
                  <span>Request an AI Visibility Audit</span>
                  <ArrowRight className="w-4 h-4 text-white" />
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
