import React, { useState, useEffect } from 'react';
import {
  Check,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Target,
  Compass,
  FileText
} from 'lucide-react';
import CitepointEngagementSelector from '@/components/ui/citepoint-engagement-selector';
import { SlideReveal, SlideStaggerContainer, SlideStaggerItem } from '../components/SlideReveal';

/**
 * Citepoint Premium Pricing & Engagements Page
 * - Authentic white liquid-glassmorphism design system
 * - Soft warm-white background with pale-gold and pale-blue liquid gradient caustics
 * - Deep navy typography (#0A192F / #012624) & muted slate copy (#4A5568)
 * - Interactive accessible CitepointEngagementSelector with progressive disclosure
 * - 13-row comparison matrix (sticky column desktop, stacked cards mobile)
 * - 4 "Every Engagement Starts With Clarity" cards
 * - 7-question Pricing FAQ accordion with FAQPage Schema
 * - High-conversion final CTA panel with transparency disclosure
 */
export default function PricingPage({ setCurrentRoute }) {
  const [openFaq, setOpenFaq] = useState(null);

  // Navigation helper
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
    if (setCurrentRoute) {
      setCurrentRoute(route);
    }
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 0.8 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Dynamic SEO & Metadata Injection
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Citepoint Pricing & Engagements | AI Visibility Services';

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Explore Citepoint’s AI Visibility Audit, Visibility Foundation, and ongoing AI visibility engagements for B2B brands competing in the answer economy.'
    );

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    const originalCanonical = canonical ? canonical.getAttribute('href') : null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://citepoint.io/pricing');

    // FAQPage Schema
    const faqSchemaScript = document.createElement('script');
    faqSchemaScript.type = 'application/ld+json';
    faqSchemaScript.id = 'faq-page-schema';
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
        },
      })),
    };
    faqSchemaScript.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(faqSchemaScript);

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) metaDesc.setAttribute('content', originalDesc);
      if (canonical) {
        if (originalCanonical) canonical.setAttribute('href', originalCanonical);
        else canonical.remove();
      }
      const existingScript = document.getElementById('faq-page-schema');
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <div className="relative w-full bg-transparent text-[#bbc7c6] font-matter selection:bg-[#00827c]/40 selection:text-[#cbfffc] overflow-hidden">
      
      {/* ============================================================
          SITETHEME DECORATIVE BACKGROUND PARALLAX LAYERS (ARIA-HIDDEN)
          ============================================================ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Fine Low-Opacity Dot Grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(circle, #cbfffc 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Ambient Liquid Caustic Field (Top Right) */}
        <div
          className="absolute -top-[15%] -right-[10%] w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] rounded-full blur-[140px] pointer-events-none opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(0, 130, 124, 0.45) 0%, rgba(1, 38, 36, 0.1) 60%, transparent 75%)',
          }}
        />

        {/* Cyan Ambient Liquid Glass Bubble (Mid Left) */}
        <div
          className="absolute top-[35%] -left-[15%] w-[600px] sm:w-[750px] h-[600px] sm:h-[750px] rounded-full blur-[150px] pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(203, 255, 252, 0.3) 0%, rgba(0, 55, 52, 0.1) 60%, transparent 75%)',
          }}
        />

        {/* Deep Field (Bottom Right) */}
        <div
          className="absolute bottom-[5%] -right-[12%] w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(0, 130, 124, 0.35) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* ============================================================
          SECTION 1: PRIMARY CITEPOINT ENGAGEMENT SELECTOR
          ============================================================ */}
      <section className="relative pt-44 sm:pt-52 lg:pt-56 pb-20 sm:pb-28 lg:pb-32 z-10 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <SlideReveal direction="up" distance={30} duration={0.7}>
            <CitepointEngagementSelector
              defaultSelected="foundation"
              showDisclosure={true}
              onCtaClick={(engagement, e) => {
                if (setCurrentRoute) {
                  e.preventDefault();
                  if (engagement.id === 'audit') {
                    handleNav('audit');
                  } else {
                    handleNav('contact');
                  }
                }
              }}
            />
          </SlideReveal>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: COMPARE PLANS MATRIX
          ============================================================ */}
      <section id="compare-plans" className="relative scroll-mt-96 sm:scroll-mt-104 lg:scroll-mt-112 py-24 lg:py-32 bg-[#011d1c]/70 backdrop-blur-md border-y border-white/10 z-10 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <SlideReveal direction="left" distance={40} duration={0.65}>
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-matter font-medium uppercase tracking-[0.14em] text-[#cbfffc] block mb-2">
                // DETAILED COMPARISON
              </span>
              <h2 className="text-3xl sm:text-4xl font-matter font-medium text-white leading-tight">
                Compare engagement options.
              </h2>
              <p className="text-sm sm:text-base text-[#bbc7c6] mt-2">
                Every deliverable is crafted for empirical diagnostic rigor and long-term brand equity in the generative search landscape.
              </p>
            </div>
          </SlideReveal>

          {/* Desktop Matrix Table */}
          <SlideReveal direction="scale-up" distance={25} duration={0.75} delay={0.1} className="hidden lg:block">
            <div className="overflow-x-auto rounded-[20px] border border-white/10 bg-[#012624]/90 backdrop-blur-xl shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-[#003734]/90">
                    <th className="py-5 px-6 text-sm font-matter font-medium text-white w-1/3 sticky left-0 bg-[#003734] backdrop-blur-sm z-10">
                      Deliverables & Capabilities
                    </th>
                    <th className="py-5 px-6 text-sm font-matter font-medium text-white text-center w-[22%]">
                      AI Visibility Audit
                    </th>
                    <th className="py-5 px-6 text-sm font-matter font-medium text-[#cbfffc] text-center w-[22%] bg-[#00827c]/20 border-x border-[#00827c]/40">
                      <span className="font-semibold">Visibility Foundation</span>
                    </th>
                    <th className="py-5 px-6 text-sm font-matter font-medium text-white text-center w-[22%]">
                      Ongoing AI Visibility
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                      <td className="py-4 px-6 text-[#edfffe] font-medium sticky left-0 bg-[#012624]/95 backdrop-blur-sm">
                        <div>{row.name}</div>
                        {row.desc && <div className="text-[11px] text-[#7c9493] mt-0.5">{row.desc}</div>}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.audit ? (
                          <Check className="w-4 h-4 text-[#cbfffc] mx-auto" />
                        ) : (
                          <span className="text-white/20 font-bold">—</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center bg-[#00827c]/10 border-x border-[#00827c]/20">
                        {row.foundation ? (
                          <Check className="w-4 h-4 text-[#cbfffc] mx-auto" />
                        ) : (
                          <span className="text-white/20 font-bold">—</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.ongoing ? (
                          <Check className="w-4 h-4 text-[#cbfffc] mx-auto" />
                        ) : (
                          <span className="text-white/20 font-bold">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SlideReveal>

          {/* Mobile Stacked Comparison Cards */}
          <SlideStaggerContainer className="lg:hidden space-y-6">
            {[
              { title: 'AI Visibility Audit', key: 'audit' },
              { title: 'Visibility Foundation', key: 'foundation', highlight: true },
              { title: 'Ongoing AI Visibility', key: 'ongoing' },
            ].map((plan) => (
              <SlideStaggerItem
                key={plan.key}
                direction="up"
                className={`p-6 rounded-[20px] bg-[#011d1c]/90 backdrop-blur-xl border ${
                  plan.highlight
                    ? 'border-[#00827c] shadow-[0_8px_24px_rgba(0,130,124,0.2)]'
                    : 'border-white/10 shadow-sm'
                }`}
              >
                <h3 className="text-lg font-matter font-medium text-white mb-4 pb-2 border-b border-white/10 flex items-center justify-between">
                  <span>{plan.title}</span>
                  {plan.highlight && (
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#00827c]/20 text-[#cbfffc] font-semibold border border-[#00827c]/40">
                      Popular
                    </span>
                  )}
                </h3>
                <ul className="space-y-2.5 text-xs text-[#bbc7c6]">
                  {comparisonRows.map((row, idx) => {
                    const isIncluded = row[plan.key];
                    return (
                      <li key={idx} className="flex items-start justify-between gap-4 py-1 border-b border-white/5">
                        <span className={isIncluded ? 'text-[#edfffe]' : 'text-[#5a6f6e]'}>{row.name}</span>
                        {isIncluded ? (
                          <Check className="w-4 h-4 text-[#cbfffc] shrink-0" />
                        ) : (
                          <span className="text-white/20 text-xs shrink-0">—</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </SlideStaggerItem>
            ))}
          </SlideStaggerContainer>

        </div>
      </section>

      {/* ============================================================
          SECTION 4: EVERY ENGAGEMENT STARTS WITH CLARITY (4 PILLARS)
          ============================================================ */}
      <section className="relative py-24 lg:py-32 z-10 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <SlideReveal direction="right" distance={40} duration={0.65}>
            <div className="max-w-2xl mb-14">
              <span className="text-xs font-matter font-medium uppercase tracking-[0.14em] text-[#cbfffc] block mb-2">
                // PRINCIPLES & ACCOUNTABILITY
              </span>
              <h2 className="text-3xl sm:text-4xl font-matter font-medium text-white leading-tight">
                Every engagement starts with clarity.
              </h2>
              <p className="text-sm sm:text-base text-[#bbc7c6] mt-2">
                Our methodology eliminates speculative guesswork, aligning your digital assets directly with the knowledge graphs AI engines rely upon.
              </p>
            </div>
          </SlideReveal>

          <SlideStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Category Context',
                desc: 'We begin with your category, buyer questions, competitors, and market reality.',
                icon: Compass,
                dir: 'up',
              },
              {
                num: '02',
                title: 'Strategic Prioritization',
                desc: 'We focus on actions most likely to improve brand understanding, authority, and citation readiness.',
                icon: Target,
                dir: 'diagonal-left',
              },
              {
                num: '03',
                title: 'Transparent Reporting',
                desc: 'You see what is being assessed, what is changing, and what remains uncertain.',
                icon: FileText,
                dir: 'diagonal-right',
              },
              {
                num: '04',
                title: 'Human Accountability',
                desc: 'AI accelerates research and monitoring. Citepoint provides the judgment, verification, and strategic ownership.',
                icon: ShieldCheck,
                dir: 'up',
              },
            ].map((card, idx) => (
              <SlideStaggerItem
                key={idx}
                direction={card.dir}
                className="p-6 sm:p-7 rounded-[22px] bg-[#011d1c]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:border-[#00827c]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-[8px] bg-[#003734] border border-[#00827c]/30 flex items-center justify-center text-[#cbfffc]">
                      <card.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-[#7c9493]">{card.num}</span>
                  </div>
                  <h3 className="text-lg font-matter font-medium text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#bbc7c6] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </SlideStaggerItem>
            ))}
          </SlideStaggerContainer>

        </div>
      </section>

      {/* ============================================================
          SECTION 5: PRICING FAQ (ACCORDION WITH SCHEMA SUPPORT)
          ============================================================ */}
      <section id="faq" className="relative scroll-mt-96 sm:scroll-mt-104 lg:scroll-mt-112 py-24 lg:py-32 bg-[#003734]/30 backdrop-blur-sm border-t border-white/10 z-10 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <SlideReveal direction="up" distance={30} duration={0.65}>
            <div className="max-w-2xl mx-auto mb-14 text-center">
              <span className="text-xs font-matter font-medium uppercase tracking-[0.14em] text-[#cbfffc] block mb-2">
                // COMMONLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-matter font-medium text-white leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-[#bbc7c6] mt-2">
                Clear answers to help you evaluate which engagement model fits your commercial objectives.
              </p>
            </div>
          </SlideReveal>

          <SlideStaggerContainer staggerDelay={0.06} className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <SlideStaggerItem
                  key={idx}
                  direction="up"
                  className="rounded-[18px] bg-[#011d1c]/85 backdrop-blur-xl border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00827c]"
                  >
                    <span className="text-sm sm:text-base font-matter font-medium text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#cbfffc] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-5 text-xs sm:text-sm text-[#bbc7c6] leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </SlideStaggerItem>
              );
            })}
          </SlideStaggerContainer>

        </div>
      </section>

      {/* ============================================================
          SECTION 6: FINAL CTA PANEL WITH TRANSPARENCY DISCLOSURE
          ============================================================ */}
      <section className="relative py-24 lg:py-32 z-10 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <SlideReveal direction="scale-up" distance={35} duration={0.85}>
            <div className="relative p-10 sm:p-14 lg:p-16 rounded-[32px] bg-gradient-to-b from-[#003734] via-[#012624] to-[#011d1c] backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] text-center max-w-4xl mx-auto overflow-hidden">
              
              <div
                className="absolute -top-[50%] -left-[20%] w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none opacity-20"
                style={{
                  background: 'radial-gradient(circle, #00827c 0%, transparent 70%)',
                }}
              />

              <span className="text-xs font-matter font-medium uppercase tracking-[0.14em] text-[#cbfffc] block mb-3">
                // TAKE THE NEXT STEP
              </span>

              <h2 className="text-3xl sm:text-5xl font-matter font-medium text-white leading-tight mb-5 max-w-2xl mx-auto">
                Start with the questions AI is already answering.
              </h2>

              <p className="text-sm sm:text-base text-[#bbc7c6] max-w-2xl mx-auto mb-8 leading-relaxed">
                Request an AI Visibility Audit to understand how your brand is positioned for AI-powered discovery, where competitors may be winning attention, and what your team can do next.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <button
                  onClick={() => handleNav('audit')}
                  className="w-full sm:w-auto py-3.5 px-7 rounded-[8px] bg-gradient-to-r from-[#00827c] via-[#009b94] to-[#00a89f] text-[#011d1c] font-matter font-semibold text-xs sm:text-sm uppercase tracking-wider hover:shadow-[0_8px_24px_rgba(0,130,124,0.4)] transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Request an AI Visibility Audit</span>
                  <ArrowRight className="w-4 h-4 text-[#011d1c] transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => handleNav('contact')}
                  className="w-full sm:w-auto py-3.5 px-7 rounded-[8px] bg-white/5 hover:bg-white/10 text-white border border-white/20 font-matter font-medium text-xs sm:text-sm uppercase tracking-wider hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>Book a Strategy Call</span>
                </button>
              </div>

              <div className="pt-6 border-t border-white/10 max-w-xl mx-auto flex items-start justify-center gap-2 text-left">
                <ShieldCheck className="w-4 h-4 text-[#cbfffc] shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#7c9493] leading-relaxed">
                  No credible company can guarantee a fixed ranking or recommendation in AI-generated answers. Citepoint identifies controllable opportunities, improves authority and citation readiness, and reports progress transparently.
                </p>
              </div>

            </div>
          </SlideReveal>

        </div>
      </section>

    </div>
  );
}

const comparisonRows = [
  { name: 'AI visibility baseline', desc: 'Evaluation across ChatGPT, Gemini, Perplexity, Claude & Google AI Overviews', audit: true, foundation: true, ongoing: true },
  { name: 'Buyer-question mapping', desc: 'Targeted prompt cluster discovery tailored to high-intent buyer journeys', audit: true, foundation: true, ongoing: true },
  { name: 'Competitor review', desc: 'Empirical benchmarking of competitors appearing in AI answers', audit: true, foundation: true, ongoing: true },
  { name: 'Citation-source analysis', desc: 'Identification of authoritative domains referenced by LLMs', audit: true, foundation: true, ongoing: true },
  { name: 'AI visibility strategy', desc: 'Holistic Generative Engine Optimization action framework', audit: false, foundation: true, ongoing: true },
  { name: 'Content recommendations', desc: 'Optimization of high-intent conversion pages and informational assets', audit: false, foundation: true, ongoing: true },
  { name: 'Technical readiness recommendations', desc: 'Schema markup, entity resolution, and AI-crawler accessibility', audit: false, foundation: true, ongoing: true },
  { name: 'Authority-building roadmap', desc: 'Structured digital PR, citation signals, and knowledge graph seeding', audit: false, foundation: true, ongoing: true },
  { name: 'AI platform monitoring', desc: 'Periodic check of brand appearances and displacement risks', audit: false, foundation: true, ongoing: true },
  { name: 'Biweekly strategy calls', desc: 'Regular momentum and execution check-ins with senior strategists', audit: false, foundation: true, ongoing: true },
  { name: 'Quarterly planning', desc: 'Strategic re-benchmarking against category and model updates', audit: false, foundation: false, ongoing: true },
  { name: 'Executive reporting', desc: 'Board and leadership-ready visibility & attribution dashboards', audit: false, foundation: false, ongoing: true },
  { name: 'Dedicated strategic lead', desc: 'Direct access to your dedicated AI search visibility consultant', audit: false, foundation: false, ongoing: true },
];

const faqs = [
  {
    q: 'Why does Citepoint use custom scope instead of fixed packages?',
    a: 'AI visibility work depends on your category, buyer journey, authority, content, technical foundation, market coverage, competitors, and internal team capacity. Custom scope ensures the engagement matches the actual opportunity rather than forcing every company into the same checklist.',
  },
  {
    q: 'Can I start with an audit only?',
    a: 'Yes. The AI Visibility Audit is a standalone diagnostic. It provides a baseline, identifies meaningful gaps, and delivers a prioritized action plan. You may execute internally or continue with Citepoint afterward.',
  },
  {
    q: 'How is this different from a standard SEO engagement?',
    a: 'Traditional SEO primarily focuses on visibility in search-result pages. Citepoint also considers how AI-powered systems discover, understand, retrieve, cite, and recommend information. GEO should complement—not automatically replace—your SEO, content, PR, and brand activity.',
  },
  {
    q: 'Do you guarantee visibility or recommendations in ChatGPT and other AI tools?',
    a: 'No credible company can guarantee a fixed ranking or recommendation in AI-generated answers. Citepoint identifies controllable opportunities, improves authority and citation readiness, and reports progress transparently.',
  },
  {
    q: 'How long does a Visibility Foundation engagement take?',
    a: 'The initial Visibility Foundation program is structured around 90 days. Timing and progress depend on your current authority, technical foundation, content requirements, category competition, and review cycles.',
  },
  {
    q: 'Can Citepoint work alongside our SEO agency or internal marketing team?',
    a: 'Yes. Citepoint can provide the AI-search strategy layer, audit, authority roadmap, and measurement framework while working alongside internal marketing teams, SEO agencies, PR partners, content specialists, and development teams.',
  },
  {
    q: 'Do you work with international companies?',
    a: 'Yes. Citepoint is designed for remote B2B delivery and works with companies in India, the United States, United Kingdom, Europe, UAE, and other international markets.',
  },
];
