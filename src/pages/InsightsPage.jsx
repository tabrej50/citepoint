import React, { useState, useRef } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { SlideReveal, SlideStaggerContainer, SlideStaggerItem } from '../components/SlideReveal';
import PageHeader from '../components/PageHeader';

/**
 * Citepoint InsightsPage
 * Apple-style minimal monochrome:
 * - Canvas: White (#FFFFFF) and Light Gray (#F5F5F7)
 * - Text: Near-black (#1D1D1F) and Gray (#6E6E73)
 * - Borders: Hairline (#D2D2D7)
 * - Primary CTA: Solid black (#1D1D1F) with white text
 * - Zero gradients, zero shadows, generous white space
 */
export default function InsightsPage({ setCurrentRoute }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGlossaryTerm, setSelectedGlossaryTerm] = useState(0);
  const articlesSectionRef = useRef(null);

  const handleNav = (route) => {
    if (setCurrentRoute) setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = ['All', 'Strategy', 'Technical', 'Research'];

  const articles = [
    {
      id: 'geo-vs-seo',
      category: 'Strategy',
      readTime: '6 min read',
      date: 'Sept 2026',
      title: 'Generative Engine Optimization (GEO) vs. SEO: The Definitive B2B Guide',
      excerpt: 'How leading B2B software vendors are reallocating search budgets from keyword volume targeting to synthetic consensus and LLM retrieval citation readiness.',
      highlight: 'Key finding: Over 44% of enterprise B2B software queries now originate in conversational search engines before an official company URL is visited.'
    },
    {
      id: 'citation-mechanisms',
      category: 'Research',
      readTime: '8 min read',
      date: 'Aug 2026',
      title: 'How ChatGPT and Perplexity Choose Which Sources to Cite',
      excerpt: 'An empirical reverse-engineering of citation weighting algorithms across 500+ commercial vendor queries. Why peer-reviewed case studies and structured G2 profiles outrank traditional blogs.',
      highlight: 'Finding: RAG pipelines penalize self-referential promotional claims by 3.2x compared to corroborated third-party reviews.'
    },
    {
      id: 'crawler-architecture',
      category: 'Technical',
      readTime: '5 min read',
      date: 'Aug 2026',
      title: 'Configuring Robots.txt and JSON-LD for AI Web Crawlers in 2026',
      excerpt: 'A technical blueprint for engineering teams. How to configure granular permissions for GPTBot, ClaudeBot, and PerplexityBot without exposing proprietary customer data.',
      highlight: 'Actionable: Schema code templates for nested Organization and SoftwareApplication entities.'
    },
    {
      id: 'answer-economy',
      category: 'Strategy',
      readTime: '7 min read',
      date: 'July 2026',
      title: 'The Rise of the Answer Economy: Why Buyer Consideration Has Changed',
      excerpt: 'When buyers receive a direct synthesis instead of a list of ads, the top-of-funnel discovery loop collapses into an immediate shortlist evaluation.',
      highlight: 'Perspective: Winning in the answer economy requires becoming the verifiable truth in the training dataset.'
    }
  ];

  const glossary = [
    {
      term: 'GEO (Generative Engine Optimization)',
      def: 'The discipline of optimizing digital content, entity relationships, and third-party authority signals to maximize a brand’s citation frequency and accuracy in AI-generated answers.'
    },
    {
      term: 'AEO (Answer Engine Optimization)',
      def: 'A subset of search visibility focused on structuring answers so conversational voice or chat engines can retrieve and quote direct solutions without reformulation.'
    },
    {
      term: 'RAG (Retrieval-Augmented Generation)',
      def: 'An architecture where an LLM references external, real-time knowledge bases before formulating a response, ensuring up-to-date and domain-specific factual accuracy.'
    },
    {
      term: 'Entity Triple',
      def: 'A fundamental unit of knowledge graph representation composed of a subject, predicate, and object (e.g., [Citepoint] [provides] [Generative Engine Optimization]).'
    },
    {
      term: 'Recommendation Share of Voice (SOV)',
      def: 'The percentage of simulated buyer prompts within a specific market category where an AI model explicitly recommends or cites a given brand.'
    },
    {
      term: 'Hallucination Defense',
      def: 'The systematic process of eliminating contradictory or outdated web mentions to prevent generative models from inventing incorrect pricing, features, or company facts.'
    },
    {
      term: 'Synthetic Consensus',
      def: 'The state where an AI model synthesizes agreement across multiple independent high-authority sources, leading it to treat a brand claim as an established industry fact.'
    }
  ];

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter((a) => a.category === selectedCategory);

  return (
    <div className="w-full bg-white text-[#111111] font-sans">
      
      {/* PAGE HERO */}
      <PageHeader
        title="Insights into the answer economy."
        intro="Empirical research, architectural guides, and strategic commentary on how generative discovery is reshaping B2B growth and brand recommendation."
        primaryButton={{
          text: 'Get Your AI Visibility Audit',
          onClick: () => handleNav('audit'),
        }}
      />

      {/* ARTICLE REPOSITORY */}
      <section ref={articlesSectionRef} className="site-section bg-white border-b border-[#111111]/10 relative overflow-hidden">
        <div className="site-container relative z-10">
          
          {/* Category Filter Pills */}
          <SlideReveal direction="left" distance={30} duration={0.6}>
            <div className="flex flex-wrap items-center gap-2.5 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 min-h-[44px] inline-flex items-center justify-center rounded-full text-xs font-semibold uppercase tracking-wider transition-all border cursor-pointer active:scale-[0.98] ${
                    selectedCategory === cat
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-[#f5f5f7] text-[#111111]/60 border-[#111111]/10 hover:border-[#111111] hover:text-[#111111]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </SlideReveal>

          {/* Articles Grid */}
          <SlideStaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 lg:mb-24">
            {filteredArticles.map((art, aIdx) => (
              <SlideStaggerItem
                key={art.id}
                direction={aIdx % 2 === 0 ? 'diagonal-left' : 'diagonal-right'}
                className="p-6 lg:p-8 rounded-[24px] border border-[#111111]/10 bg-[#f5f5f7] flex flex-col justify-between h-full group relative overflow-hidden transition-all duration-200 hover:border-[#111111]"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#111111]/60 mb-4 pb-4 border-b border-[#111111]/10">
                    <span className="px-3 py-1 rounded-full bg-white text-[#111111] border border-[#111111]/10 uppercase tracking-wider text-[11px] font-semibold">
                      {art.category}
                    </span>
                    <span className="font-mono text-[11px]">
                      <span className="whitespace-nowrap">{art.readTime}</span>
                      {' • '}
                      <span className="whitespace-nowrap">{art.date}</span>
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-semibold text-[#111111] mb-3 leading-[1.2]">
                    {art.title}
                  </h2>

                  <p className="body-text text-sm mb-5">
                    {art.excerpt}
                  </p>

                  <div className="p-4 rounded-[16px] bg-white border border-[#111111]/10 text-xs text-[#111111] mb-6 leading-relaxed">
                    {art.highlight}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#111111]/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#111111]/60">Citepoint Research Desk</span>
                  <button
                    onClick={() => handleNav('audit')}
                    className="text-[#111111] font-semibold inline-flex items-center gap-1 cursor-pointer transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <span>Read Analysis</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#111111]" />
                  </button>
                </div>
              </SlideStaggerItem>
            ))}
          </SlideStaggerContainer>

          {/* GEO GLOSSARY SECTION */}
          <SlideReveal direction="scale-up" distance={30} duration={0.75} className="p-6 lg:p-8 rounded-[24px] border border-[#111111]/10 bg-[#f5f5f7] relative overflow-hidden">
            <div className="max-w-2xl mb-8 lg:mb-12">
              <span className="eyebrow-label">
                TERMINOLOGY & CONCEPTS
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#111111] tracking-tight leading-[1.1] mb-3">
                The B2B GEO Glossary
              </h3>
              <p className="intro-text text-sm">
                Standardized definitions for the key technical and strategic concepts governing modern generative engine visibility.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Term list */}
              <div className="lg:col-span-5 space-y-2">
                {glossary.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedGlossaryTerm(idx)}
                    className={`w-full text-left px-5 py-3.5 rounded-[16px] text-xs font-semibold uppercase tracking-wider transition-all border cursor-pointer active:scale-[0.98] ${
                      selectedGlossaryTerm === idx
                        ? 'bg-[#111111] text-white border-[#111111]'
                        : 'bg-white text-[#111111]/60 border-[#111111]/10 hover:text-[#111111] hover:border-[#111111]'
                    }`}
                  >
                    {item.term}
                  </button>
                ))}
              </div>

              {/* Term Definition Detail */}
              <div className="lg:col-span-7 bg-white text-[#111111] rounded-[20px] p-6 lg:p-8 border border-[#111111]/10 flex flex-col justify-between min-h-[260px]">
                <div>
                  <span className="eyebrow-label">
                    DEFINITION 0{selectedGlossaryTerm + 1}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-semibold text-[#111111] leading-[1.2] mb-4">
                    {glossary[selectedGlossaryTerm].term}
                  </h4>
                  <p className="body-text text-sm">
                    {glossary[selectedGlossaryTerm].def}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#111111]/10 mt-8 flex items-center justify-between text-xs text-[#111111]/60">
                  <span>Citepoint Knowledge Standard</span>
                  <button
                    onClick={() => handleNav('contact')}
                    className="text-[#111111] font-semibold hover:underline cursor-pointer min-h-[48px] h-12 px-2 inline-flex items-center"
                  >
                    [ Ask Our Specialists ]
                  </button>
                </div>
              </div>
            </div>
          </SlideReveal>

        </div>
      </section>

      {/* FINAL CTA (DARK SECTION #111111) */}
      <section className="site-section section-dark bg-[#111111] text-white relative overflow-hidden border-t border-white/10">
        <div className="site-container relative z-10 text-center">
          <SlideReveal direction="up" distance={36} duration={0.8}>
            <span className="eyebrow-label text-center mx-auto text-[#E60023]">
              ALGORITHM INTELLIGENCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-[1.08] mb-5">
              Stay ahead of generative search algorithm updates.
            </h2>
            <p className="intro-text max-w-2xl mx-auto mb-8 text-white/60">
              Request an audit to receive our executive briefing on your category’s AI search shifts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-buttons-container">
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
                <span>Schedule a Consultation</span>
              </button>
            </div>
          </SlideReveal>
        </div>
      </section>

    </div>
  );
}
