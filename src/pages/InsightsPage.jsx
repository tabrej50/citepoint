import React, { useState, useRef } from 'react';
import { ArrowUpRight, ArrowRight, BookOpen, Sparkles, FileText, CheckCircle2, Search } from 'lucide-react';
import { InsightsParallaxBackdrop } from '../components/parallax/SectionParallaxBackdrops';
import { SlideReveal, SlideStaggerContainer, SlideStaggerItem } from '../components/SlideReveal';

export default function InsightsPage({ setCurrentRoute }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGlossaryTerm, setSelectedGlossaryTerm] = useState(0);
  const articlesSectionRef = useRef(null);

  const handleNav = (route) => {
    setCurrentRoute(route);
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
    <div className="w-full bg-transparent text-[#4B4F58] font-sans">
      
      {/* --------------------------------------------------
          PAGE HERO (Champagne Gold & Alabaster)
      -------------------------------------------------- */}
      <section className="bg-transparent text-[#0F1012] pt-120 sm:pt-140 lg:pt-144 pb-24 sm:pb-28 lg:pb-32 relative overflow-hidden border-b border-[#EADBBE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <SlideReveal direction="down" distance={38} duration={0.65}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[8px] bg-white border border-[#EADBBE] text-xs font-mono uppercase tracking-[0.12em] text-[#A67D28] font-semibold mb-4 shadow-xs">
                // RESEARCH & ANALYSIS
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-medium text-[#0F1012] tracking-[-0.04em] leading-[1.08] mb-6 [text-wrap:balance]">
                Insights into the answer economy.
              </h1>
              <p className="text-lg sm:text-xl text-[#4B4F58] leading-[1.4] mb-8">
                Empirical research, architectural guides, and strategic commentary on how generative discovery is reshaping B2B growth and brand recommendation.
              </p>
            </SlideReveal>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------
          ARTICLE REPOSITORY (Champagne Gold & Alabaster)
      -------------------------------------------------- */}
      <section ref={articlesSectionRef} className="py-48 lg:py-64 bg-transparent border-b border-[#EADBBE] relative overflow-hidden">
        {/* Parallax Fine Editorial Grid & Muted Geometric Shapes */}
        <InsightsParallaxBackdrop sectionRef={articlesSectionRef} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Category Filter */}
          <SlideReveal direction="left" distance={30} duration={0.6}>
            <div className="flex flex-wrap items-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-[8px] text-xs font-heading uppercase tracking-wider transition-all border cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-white text-[#0F1012] border-[#C5A059] shadow-xs font-semibold'
                      : 'bg-[#FAF8F5] text-[#636773] border-[#EADBBE] hover:border-[#C5A059] hover:text-[#0F1012]'
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
                className="surface-card p-6 lg:p-8 flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#636773] mb-4 pb-4 border-b border-[#EADBBE]">
                    <span className="px-2.5 py-0.5 rounded-[8px] bg-[#FAF8F5] text-[#A67D28] border border-[#EADBBE] font-mono uppercase tracking-wider text-[11px] font-semibold transition-colors duration-200 group-hover:border-[#C5A059]">
                      {art.category}
                    </span>
                    <span className="font-mono">
                      <span className="whitespace-nowrap">{art.readTime}</span>
                      {' • '}
                      <span className="whitespace-nowrap">{art.date}</span>
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-heading font-medium text-[#0F1012] mb-3 group-hover:text-[#A67D28] transition-colors leading-[1.1]">
                    {art.title}
                  </h2>

                  <p className="text-sm text-[#4B4F58] leading-[1.4] mb-5">
                    {art.excerpt}
                  </p>

                  <div className="p-4 rounded-[8px] bg-[#FAF8F5] border border-[#EADBBE] text-xs text-[#0F1012] mb-6 font-mono leading-relaxed transition-all duration-300 group-hover:border-[#C5A059]/40">
                    {art.highlight}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EADBBE] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#636773]">Citepoint Research Desk</span>
                  <button
                    onClick={() => handleNav('audit')}
                    className="text-[#A67D28] font-semibold group-hover:underline inline-flex items-center gap-1 cursor-pointer transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <span>Read Analysis</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#A67D28]" />
                  </button>
                </div>
              </SlideStaggerItem>
            ))}
          </SlideStaggerContainer>

          {/* --------------------------------------------------
              GEO GLOSSARY SECTION (Champagne Gold & Alabaster)
          -------------------------------------------------- */}
          <SlideReveal direction="scale-up" distance={30} duration={0.75} className="surface-card p-6 lg:p-8">
            <div className="max-w-2xl mb-8 lg:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[8px] bg-[#FAF8F5] border border-[#EADBBE] text-xs font-mono uppercase tracking-[0.12em] text-[#A67D28] font-semibold mb-3">
                TERMINOLOGY & CONCEPTS
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-medium text-[#0F1012] tracking-[-0.04em] leading-[1.1] mb-3">
                The B2B GEO Glossary
              </h3>
              <p className="text-sm text-[#4B4F58] leading-[1.4]">
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
                    className={`w-full text-left px-5 py-3.5 rounded-[8px] text-xs font-heading uppercase tracking-wider transition-all border cursor-pointer ${
                      selectedGlossaryTerm === idx
                        ? 'bg-white text-[#0F1012] border-[#C5A059] shadow-xs font-semibold'
                        : 'bg-[#FAF8F5] text-[#636773] border-[#EADBBE] hover:text-[#0F1012] hover:border-[#C5A059]'
                    }`}
                  >
                    {item.term}
                  </button>
                ))}
              </div>

              {/* Term Definition Detail */}
              <div className="lg:col-span-7 bg-white text-[#0F1012] rounded-[12px] p-6 lg:p-8 border border-[#EADBBE] flex flex-col justify-between min-h-[260px] shadow-xs">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A67D28] font-semibold block mb-2">
                    DEFINITION // 0{selectedGlossaryTerm + 1}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-heading font-medium text-[#0F1012] leading-[1.1] mb-4">
                    {glossary[selectedGlossaryTerm].term}
                  </h4>
                  <p className="text-sm text-[#4B4F58] leading-[1.4]">
                    {glossary[selectedGlossaryTerm].def}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#EADBBE] mt-8 flex items-center justify-between text-xs font-mono text-[#636773]">
                  <span>Citepoint Knowledge Standard</span>
                  <button
                    onClick={() => handleNav('contact')}
                    className="text-[#A67D28] font-semibold hover:underline cursor-pointer"
                  >
                    [ Ask Our Specialists ]
                  </button>
                </div>
              </div>
            </div>
          </SlideReveal>

        </div>
      </section>

      {/* --------------------------------------------------
          FINAL CTA (Champagne Gold & Frosted Alabaster)
      -------------------------------------------------- */}
      <section className="bg-white/80 backdrop-blur-md text-[#0F1012] py-48 lg:py-64 relative overflow-hidden border-t border-[#EADBBE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SlideReveal direction="up" distance={36} duration={0.8}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-white border border-[#EADBBE] text-xs font-mono uppercase tracking-[0.12em] text-[#A67D28] font-semibold mb-4 shadow-xs">
              ALGORITHM INTELLIGENCE
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-medium text-[#0F1012] tracking-[-0.04em] leading-[1.08] mb-5">
              Stay ahead of generative search algorithm updates.
            </h2>
            <p className="text-base sm:text-lg text-[#4B4F58] max-w-2xl mx-auto leading-[1.4] mb-8">
              Request an audit to receive our executive briefing on your category’s AI search shifts.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => handleNav('audit')}
                className="btn-aurora shadow-[0_4px_16px_rgba(197,160,89,0.32)]"
              >
                <span>Get Your AI Visibility Audit</span>
                <ArrowRight className="w-4 h-4 text-[#0F1012]" />
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
