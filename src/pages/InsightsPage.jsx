import React, { useState, useRef } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { SlideReveal, SlideStaggerContainer, SlideStaggerItem } from '../components/SlideReveal';

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
    <div className="w-full bg-white text-[#1d1d1f] font-sans selection:bg-[#1d1d1f] selection:text-white">
      
      {/* PAGE HERO */}
      <section className="bg-white text-[#1d1d1f] pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28 relative overflow-hidden border-b border-[#d2d2d7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <SlideReveal direction="down" distance={38} duration={0.65}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7] text-xs uppercase tracking-[0.14em] text-[#1d1d1f] font-semibold mb-4">
                // RESEARCH & ANALYSIS
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[#1d1d1f] tracking-tight leading-[1.08] mb-6 [text-wrap:balance]">
                Insights into the answer economy.
              </h1>
              <p className="text-lg sm:text-xl text-[#6e6e73] leading-[1.5] mb-8">
                Empirical research, architectural guides, and strategic commentary on how generative discovery is reshaping B2B growth and brand recommendation.
              </p>
            </SlideReveal>
          </div>
        </div>
      </section>

      {/* ARTICLE REPOSITORY */}
      <section ref={articlesSectionRef} className="py-20 lg:py-28 bg-white border-b border-[#d2d2d7] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Category Filter Pills */}
          <SlideReveal direction="left" distance={30} duration={0.6}>
            <div className="flex flex-wrap items-center gap-2.5 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border cursor-pointer active:scale-[0.98] ${
                    selectedCategory === cat
                      ? 'bg-[#1d1d1f] text-white border-[#1d1d1f]'
                      : 'bg-[#f5f5f7] text-[#6e6e73] border-[#d2d2d7] hover:border-[#1d1d1f] hover:text-[#1d1d1f]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </SlideReveal>

          {/* Articles Grid */}
          <SlideStaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-24">
            {filteredArticles.map((art, aIdx) => (
              <SlideStaggerItem
                key={art.id}
                direction={aIdx % 2 === 0 ? 'diagonal-left' : 'diagonal-right'}
                className="p-6 lg:p-8 rounded-[24px] border border-[#d2d2d7] bg-[#f5f5f7] flex flex-col justify-between h-full group relative overflow-hidden transition-all duration-200 hover:border-[#1d1d1f]"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#6e6e73] mb-4 pb-4 border-b border-[#d2d2d7]">
                    <span className="px-3 py-1 rounded-full bg-white text-[#1d1d1f] border border-[#d2d2d7] uppercase tracking-wider text-[11px] font-semibold">
                      {art.category}
                    </span>
                    <span className="font-mono text-[11px]">
                      <span className="whitespace-nowrap">{art.readTime}</span>
                      {' • '}
                      <span className="whitespace-nowrap">{art.date}</span>
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-medium text-[#1d1d1f] mb-3 leading-[1.2]">
                    {art.title}
                  </h2>

                  <p className="text-sm text-[#6e6e73] leading-[1.6] mb-5">
                    {art.excerpt}
                  </p>

                  <div className="p-4 rounded-[16px] bg-white border border-[#d2d2d7] text-xs text-[#1d1d1f] mb-6 leading-relaxed">
                    {art.highlight}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#d2d2d7] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#6e6e73]">Citepoint Research Desk</span>
                  <button
                    onClick={() => handleNav('audit')}
                    className="text-[#1d1d1f] font-semibold inline-flex items-center gap-1 cursor-pointer transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <span>Read Analysis</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#1d1d1f]" />
                  </button>
                </div>
              </SlideStaggerItem>
            ))}
          </SlideStaggerContainer>

          {/* GEO GLOSSARY SECTION */}
          <SlideReveal direction="scale-up" distance={30} duration={0.75} className="p-6 lg:p-8 rounded-[24px] border border-[#d2d2d7] bg-[#f5f5f7] relative overflow-hidden">
            <div className="max-w-2xl mb-8 lg:mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#d2d2d7] text-xs uppercase tracking-[0.14em] text-[#1d1d1f] font-semibold mb-3">
                TERMINOLOGY & CONCEPTS
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-[#1d1d1f] tracking-tight leading-[1.1] mb-3">
                The B2B GEO Glossary
              </h3>
              <p className="text-sm text-[#6e6e73] leading-[1.6]">
                Standardized definitions for the key technical and strategic concepts governing modern generative engine visibility.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Term list */}
              <div className="lg:col-span-5 space-y-2">
                {glossary.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedGlossaryTerm(idx)}
                    className={`w-full text-left px-5 py-3.5 rounded-[16px] text-xs font-semibold uppercase tracking-wider transition-all border cursor-pointer active:scale-[0.98] ${
                      selectedGlossaryTerm === idx
                        ? 'bg-[#1d1d1f] text-white border-[#1d1d1f]'
                        : 'bg-white text-[#6e6e73] border-[#d2d2d7] hover:text-[#1d1d1f] hover:border-[#1d1d1f]'
                    }`}
                  >
                    {item.term}
                  </button>
                ))}
              </div>

              {/* Term Definition Detail */}
              <div className="lg:col-span-7 bg-white text-[#1d1d1f] rounded-[20px] p-6 lg:p-8 border border-[#d2d2d7] flex flex-col justify-between min-h-[260px]">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#6e6e73] font-semibold block mb-2">
                    DEFINITION // 0{selectedGlossaryTerm + 1}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-medium text-[#1d1d1f] leading-[1.2] mb-4">
                    {glossary[selectedGlossaryTerm].term}
                  </h4>
                  <p className="text-sm text-[#6e6e73] leading-[1.6]">
                    {glossary[selectedGlossaryTerm].def}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#d2d2d7] mt-8 flex items-center justify-between text-xs text-[#6e6e73]">
                  <span>Citepoint Knowledge Standard</span>
                  <button
                    onClick={() => handleNav('contact')}
                    className="text-[#1d1d1f] font-semibold hover:underline cursor-pointer"
                  >
                    [ Ask Our Specialists ]
                  </button>
                </div>
              </div>
            </div>
          </SlideReveal>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#f5f5f7] text-[#1d1d1f] py-20 lg:py-28 relative overflow-hidden border-t border-[#d2d2d7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SlideReveal direction="up" distance={36} duration={0.8}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#d2d2d7] text-xs uppercase tracking-[0.14em] text-[#1d1d1f] font-semibold mb-4">
              ALGORITHM INTELLIGENCE
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium text-[#1d1d1f] tracking-tight leading-[1.08] mb-5">
              Stay ahead of generative search algorithm updates.
            </h2>
            <p className="text-base sm:text-lg text-[#6e6e73] max-w-2xl mx-auto leading-[1.6] mb-8">
              Request an audit to receive our executive briefing on your category’s AI search shifts.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => handleNav('audit')}
                className="rounded-full px-8 py-3.5 text-[15px] font-semibold inline-flex items-center gap-2 cursor-pointer bg-[#1d1d1f] text-white hover:bg-black transition-all active:scale-[0.98]"
              >
                <span>Get Your AI Visibility Audit</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="rounded-full px-8 py-3.5 text-[15px] font-medium inline-flex items-center gap-2 cursor-pointer bg-white text-[#1d1d1f] border border-[#d2d2d7] hover:bg-[#f5f5f7] transition-all active:scale-[0.98]"
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
