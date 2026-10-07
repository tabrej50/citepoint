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
    <div className="w-full bg-transparent text-[#8a8f98] font-sans">
      
      {/* --------------------------------------------------
          PAGE HERO (Liquid Abyss #010102)
      -------------------------------------------------- */}
      <section className="bg-[#010102]/60 backdrop-blur-[2px] text-[#ffffff] pt-120 sm:pt-140 lg:pt-144 pb-24 sm:pb-28 lg:pb-32 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 30%, rgba(130, 143, 255, 0.15) 0%, transparent 60%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <SlideReveal direction="down" distance={38} duration={0.65}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[8px] bg-[#141516] border border-[#23252a]/30 text-xs font-mono uppercase tracking-[0.12em] text-[#f7f8f8] mb-4">
                // RESEARCH & ANALYSIS
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-medium text-[#ffffff] tracking-[-0.04em] leading-[1.08] mb-6 [text-wrap:balance]">
                Insights into the answer economy.
              </h1>
              <p className="text-lg sm:text-xl text-[#8a8f98] leading-[1.4] mb-8">
                Empirical research, architectural guides, and strategic commentary on how generative discovery is reshaping B2B growth and brand recommendation.
              </p>
            </SlideReveal>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------
          ARTICLE REPOSITORY (Liquid Deep #0f1011)
      -------------------------------------------------- */}
      <section ref={articlesSectionRef} className="py-48 lg:py-64 bg-[#0f1011]/70 backdrop-blur-[2px] border-t border-b border-[#23252a]/20 relative overflow-hidden">
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
                      ? 'bg-[#141516] text-[#ffffff] border-[#828fff]/40'
                      : 'bg-[#010102] text-[#8a8f98] border-[#23252a]/20 hover:border-[#828fff]/30 hover:text-[#ffffff]'
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
                  <div className="flex items-center justify-between text-xs text-[#8a8f98] mb-4 pb-4 border-b border-[#23252a]/20">
                    <span className="px-2.5 py-0.5 rounded-[8px] bg-[#0f1011] text-[#828fff] border border-[#23252a]/30 font-mono uppercase tracking-wider text-[11px] transition-colors duration-200 group-hover:border-[#828fff]/40">
                      {art.category}
                    </span>
                    <span className="font-mono">
                      <span className="whitespace-nowrap">{art.readTime}</span>
                      {' • '}
                      <span className="whitespace-nowrap">{art.date}</span>
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-heading font-medium text-[#ffffff] mb-3 group-hover:text-[#828fff] transition-colors leading-[1.0]">
                    {art.title}
                  </h2>

                  <p className="text-sm text-[#8a8f98] leading-[1.4] mb-5">
                    {art.excerpt}
                  </p>

                  <div className="p-4 rounded-[8px] bg-[#0f1011]/90 border border-white/10 text-xs text-[#f7f8f8] mb-6 font-mono leading-relaxed transition-all duration-300 group-hover:border-[#828fff]/20">
                    {art.highlight}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#23252a]/20 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#8a8f98]">Citepoint Research Desk</span>
                  <button
                    onClick={() => handleNav('audit')}
                    className="text-[#828fff] font-normal group-hover:underline inline-flex items-center gap-1 cursor-pointer transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <span>Read Analysis</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </SlideStaggerItem>
            ))}
          </SlideStaggerContainer>

          {/* --------------------------------------------------
              GEO GLOSSARY SECTION (Liquid Kelp #141516 Card)
          -------------------------------------------------- */}
          <SlideReveal direction="scale-up" distance={30} duration={0.75} className="surface-card p-6 lg:p-8">
            <div className="max-w-2xl mb-8 lg:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[8px] bg-[#0f1011] border border-[#23252a]/30 text-xs font-mono uppercase tracking-[0.12em] text-[#f7f8f8] mb-3">
                TERMINOLOGY & CONCEPTS
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-medium text-[#ffffff] tracking-[-0.04em] leading-[1.0] mb-3">
                The B2B GEO Glossary
              </h3>
              <p className="text-sm text-[#8a8f98] leading-[1.4]">
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
                        ? 'bg-[#0f1011] text-[#ffffff] border-[#828fff]/40'
                        : 'bg-[#141516] text-[#8a8f98] border-[#23252a]/20 hover:text-[#ffffff] hover:border-[#828fff]/30'
                    }`}
                  >
                    {item.term}
                  </button>
                ))}
              </div>

              {/* Term Definition Detail */}
              <div className="lg:col-span-7 bg-[#0f1011]/90 text-[#ffffff] rounded-[12px] p-6 lg:p-8 border border-white/10 flex flex-col justify-between min-h-[260px] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#828fff] block mb-2">
                    DEFINITION // 0{selectedGlossaryTerm + 1}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-heading font-medium text-[#ffffff] leading-[1.0] mb-4">
                    {glossary[selectedGlossaryTerm].term}
                  </h4>
                  <p className="text-sm text-[#8a8f98] leading-[1.4]">
                    {glossary[selectedGlossaryTerm].def}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#23252a]/20 mt-8 flex items-center justify-between text-xs font-mono text-[#8a8f98]">
                  <span>Citepoint Knowledge Standard</span>
                  <button
                    onClick={() => handleNav('contact')}
                    className="text-[#828fff] hover:underline cursor-pointer"
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
          FINAL CTA (Liquid Abyss #010102)
      -------------------------------------------------- */}
      <section className="bg-[#010102]/60 backdrop-blur-[2px] text-[#ffffff] py-48 lg:py-64 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(130, 143, 255, 0.15) 0%, transparent 60%)',
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SlideReveal direction="up" distance={36} duration={0.8}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[8px] bg-[#141516] border border-[#23252a]/30 text-xs font-mono uppercase tracking-[0.12em] text-[#f7f8f8] mb-4">
              ALGORITHM INTELLIGENCE
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-medium text-[#ffffff] tracking-[-0.04em] leading-[1.0] mb-5">
              Stay ahead of generative search algorithm updates.
            </h2>
            <p className="text-base sm:text-lg text-[#8a8f98] max-w-2xl mx-auto leading-[1.4] mb-8">
              Request an audit to receive our executive briefing on your category’s AI search shifts.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => handleNav('audit')}
                className="btn-aurora text-white font-heading font-medium uppercase tracking-wider text-xs px-6 py-3 rounded-[8px] inline-flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Get Your AI Visibility Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="btn-kelp text-[#ffffff] font-heading font-medium uppercase tracking-wider text-xs px-6 py-3 rounded-[8px] inline-flex items-center gap-2 transition-all cursor-pointer"
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
