import React from 'react';
import {
  ShieldCheck,
  Search,
  Award,
  Target,
  Cpu,
  Layers,
  ArrowRight,
  Quote,
  Sparkles
} from 'lucide-react';
import { SlideReveal, SlideStaggerContainer, SlideStaggerItem } from '../components/SlideReveal';

/**
 * Citepoint AboutPage
 * Apple-style minimal monochrome:
 * - Canvas: White (#FFFFFF) and Light Gray (#F5F5F7)
 * - Text: Near-black (#1D1D1F) and Gray (#6E6E73)
 * - Borders: Hairline (#D2D2D7)
 * - Primary CTA: Solid black (#1D1D1F) with white text
 * - Zero gradients, zero shadows, generous white space
 */
export default function AboutPage({ setCurrentRoute }) {
  const handleNav = (route) => {
    if (setCurrentRoute) setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const values = [
    {
      num: '01',
      title: 'Absolute Transparency & No Hype',
      desc: 'We never promise guaranteed #1 rankings because no ethical consultancy controls third-party model weights. We focus strictly on verified facts, canonical citations, and crawlability.',
      icon: ShieldCheck,
      dir: 'diagonal-left',
    },
    {
      num: '02',
      title: 'Evidence-Led Engineering',
      desc: 'Every recommendation is rooted in empirical multi-prompt testing. We inspect citation links, vector embeddings, and training data attributions rather than guessing.',
      icon: Search,
      dir: 'diagonal-right',
    },
    {
      num: '03',
      title: 'Durable Brand Authority',
      desc: 'We reject automated spam and synthetic manipulation. We engineer durable authority across the industry sources and reference databases that AI models naturally trust.',
      icon: Award,
      dir: 'diagonal-left',
    },
    {
      num: '04',
      title: 'Commercial & Revenue Focus',
      desc: 'AI visibility matters only if it influences buying decisions. We prioritize high-consideration commercial prompts that guide enterprise purchase committees during shortlist evaluations.',
      icon: Target,
      dir: 'diagonal-right',
    },
    {
      num: '05',
      title: 'Multi-Model Benchmark Testing',
      desc: 'We continuously benchmark performance across OpenAI ChatGPT, Perplexity Pro, Anthropic Claude, Google Gemini, and Meta Llama to capture diverse retrieval patterns.',
      icon: Cpu,
      dir: 'diagonal-left',
    },
    {
      num: '06',
      title: 'Enterprise Reference Architecture',
      desc: 'Position your solution as the definitive benchmark standard within your category, ensuring you are pre-selected in technical evaluation matrices and RFPs.',
      icon: Layers,
      dir: 'diagonal-right',
    }
  ];

  return (
    <div className="w-full bg-white text-[#1d1d1f] font-sans selection:bg-[#1d1d1f] selection:text-white">
      
      {/* SECTION 1: PAGE HEADER */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden border-b border-[#d2d2d7] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <SlideReveal direction="down" distance={30} duration={0.65}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] font-semibold text-xs uppercase tracking-[0.14em] mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#1d1d1f]" />
                <span>// ABOUT CITEPOINT</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[#1d1d1f] tracking-tight leading-[1.08] mb-6 [text-wrap:balance]">
                AI search visibility for brands competing in the answer economy.
              </h1>
              <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed max-w-2xl mb-8">
                Citepoint was created with a single mission: to help ambitious B2B brands become visible, cited, and recommended at the exact point where buyers turn to AI to make buying decisions.
              </p>
              <div className="flex flex-wrap items-center gap-4">
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
                  <span>Schedule a Briefing</span>
                </button>
              </div>
            </SlideReveal>
          </div>
        </div>
      </section>

      {/* SECTION 2: STORY: THE SHIFT TO SYNTHESIS */}
      <section className="py-20 lg:py-24 border-b border-[#d2d2d7] bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <SlideReveal direction="up" distance={32} duration={0.7}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#d2d2d7] text-[#1d1d1f] font-semibold text-xs uppercase tracking-[0.14em] mb-4">
              <span>// THE SHIFT TO SYNTHESIS</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-medium text-[#1d1d1f] tracking-tight mb-6">
              The search landscape has shifted from discovery to synthesis.
            </h2>
            
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed">
                For over two decades, B2B marketing relied on optimizing keywords for ten blue search engine links. Today, software buyers, procurement teams, and enterprise executives don’t scroll through pages of ads. They prompt ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews to summarize options and recommend solutions.
              </p>
              
              <p className="text-sm sm:text-base text-[#6e6e73] leading-relaxed">
                If an AI model has not indexed your brand, lacks trusted third-party consensus, or hallucinates your capabilities, you are excluded from buyer shortlists before your sales team even knows an evaluation was underway.
              </p>

              {/* Callout Quote Card */}
              <div className="p-6 sm:p-8 my-8 rounded-[24px] border border-[#d2d2d7] bg-white group">
                <Quote className="w-8 h-8 text-[#1d1d1f] mb-3 transition-transform duration-200 group-hover:scale-105" />
                <blockquote className="text-xl sm:text-2xl font-medium leading-normal text-[#1d1d1f] mb-4">
                  “In the answer economy, the winner isn’t who pays the most for clicks—it’s who earns the synthetic consensus of AI discovery.”
                </blockquote>
                <div className="pt-4 border-t border-[#d2d2d7] flex items-center justify-between text-xs text-[#6e6e73]">
                  <span>Citepoint Strategic Philosophy</span>
                  <span className="text-[#1d1d1f] font-semibold">Canonical Reference</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#6e6e73] leading-relaxed">
                Citepoint operates at the intersection of technical crawlability, citation graph engineering, and empirical model evaluation. We build the verifiable data footprint and third-party consensus that forces generative engines to recognize your brand as the canonical authority in your space.
              </p>
            </div>
          </SlideReveal>
        </div>
      </section>

      {/* SECTION 3: VALUES */}
      <section className="py-24 lg:py-28 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="down" distance={30} duration={0.65}>
            <div className="max-w-3xl text-left mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] font-semibold text-xs uppercase tracking-[0.14em] mb-4">
                <span>// CORE VALUES & PRINCIPLES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium text-[#1d1d1f] tracking-tight mb-4">
                Built on empirical rigor, not marketing hype.
              </h2>
              <p className="text-base text-[#6e6e73] leading-relaxed">
                We hold ourselves to the standard of an empirical research laboratory and strategic management consultancy.
              </p>
            </div>
          </SlideReveal>

          {/* 3 columns */}
          <SlideStaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => {
              const IconC = v.icon;
              return (
                <SlideStaggerItem
                  key={v.num}
                  direction={v.dir}
                  className="min-h-[260px] p-6 sm:p-8 flex flex-col justify-between rounded-[24px] bg-[#f5f5f7] border border-[#d2d2d7] group cursor-default transition-all duration-200 hover:border-[#1d1d1f]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#6e6e73] font-mono font-semibold">
                        // {v.num}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white border border-[#d2d2d7] text-[#1d1d1f] flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                        <IconC className="w-4 h-4 text-[#1d1d1f]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-[#1d1d1f] transition-colors duration-200">
                      {v.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#6e6e73] mt-4 leading-relaxed">
                    {v.desc}
                  </p>
                </SlideStaggerItem>
              );
            })}
          </SlideStaggerContainer>

        </div>
      </section>

      {/* SECTION 4: FINAL CTA */}
      <section className="py-24 border-t border-[#d2d2d7] bg-[#f5f5f7] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideReveal direction="up" distance={32} duration={0.75}>
            <div className="text-center p-8 sm:p-12 md:p-16 max-w-4xl mx-auto rounded-[24px] border border-[#d2d2d7] bg-white">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] font-semibold text-xs uppercase tracking-[0.14em] mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#1d1d1f]" />
                <span>// STRATEGIC ENGAGEMENT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium text-[#1d1d1f] tracking-tight mb-4">
                Partner with Citepoint.
              </h2>
              <p className="text-base text-[#6e6e73] max-w-xl mx-auto mb-8 leading-relaxed">
                Start a confidential discovery discussion with our strategy team to evaluate your company’s generative presence.
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
                  <span>Book an Introductory Briefing</span>
                </button>
              </div>
            </div>
          </SlideReveal>
        </div>
      </section>

    </div>
  );
}
