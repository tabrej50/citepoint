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
import PageHeader from '../components/PageHeader';

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
    <div className="w-full bg-white text-[#111111] font-sans">
      
      {/* SECTION 1: PAGE HEADER */}
      <PageHeader
        eyebrow="ABOUT CITEPOINT"
        title="AI search visibility for brands competing in the answer economy."
        intro="Citepoint was created with a single mission: to help ambitious B2B brands become visible, cited, and recommended at the exact point where buyers turn to AI to make buying decisions."
        primaryButton={{
          text: 'Get Your AI Visibility Audit',
          onClick: () => handleNav('audit'),
        }}
        secondaryButton={{
          text: 'Schedule a Briefing',
          onClick: () => handleNav('contact'),
        }}
      />

      {/* SECTION 2: STORY: THE SHIFT TO SYNTHESIS (ALIGNED TO SITE-CONTAINER LEFT EDGE) */}
      <section className="site-section border-b border-[#111111]/10 bg-[#f5f5f7]">
        <div className="site-container">
          <div className="max-w-3xl text-left">
            <SlideReveal direction="up" distance={32} duration={0.7}>
              <span className="eyebrow-label">
                THE SHIFT TO SYNTHESIS
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#111111] tracking-tight mb-6">
                The search landscape has shifted from discovery to synthesis.
              </h2>
              
              <div className="space-y-6">
                <p className="intro-text">
                  For over two decades, B2B marketing relied on optimizing keywords for ten blue search engine links. Today, software buyers, procurement teams, and enterprise executives don’t scroll through pages of ads. They prompt ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews to summarize options and recommend solutions.
                </p>
                
                <p className="body-text text-sm sm:text-base">
                  If an AI model has not indexed your brand, lacks trusted third-party consensus, or hallucinates your capabilities, you are excluded from buyer shortlists before your sales team even knows an evaluation was underway.
                </p>

                {/* Callout Quote Card */}
                <div className="p-6 sm:p-8 my-8 rounded-[24px] border border-[#111111]/10 bg-white group">
                  <Quote className="w-8 h-8 text-[#111111] mb-3 transition-transform duration-200 group-hover:scale-105" />
                  <blockquote className="text-xl sm:text-2xl font-medium leading-normal text-[#111111] mb-4">
                    “In the answer economy, the winner isn’t who pays the most for clicks—it’s who earns the synthetic consensus of AI discovery.”
                  </blockquote>
                  <div className="pt-4 border-t border-[#111111]/10 flex items-center justify-between text-xs text-[#111111]/60">
                    <span>Citepoint Strategic Philosophy</span>
                    <span className="text-[#111111] font-semibold">Canonical Reference</span>
                  </div>
                </div>

                <p className="body-text text-sm sm:text-base">
                  Citepoint operates at the intersection of technical crawlability, citation graph engineering, and empirical model evaluation. We build the verifiable data footprint and third-party consensus that forces generative engines to recognize your brand as the canonical authority in your space.
                </p>
              </div>
            </SlideReveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: VALUES */}
      <section className="site-section relative bg-white">
        <div className="site-container">
          
          <SlideReveal direction="down" distance={30} duration={0.65}>
            <div className="max-w-3xl text-left mb-12 sm:mb-16">
              <span className="eyebrow-label">
                CORE VALUES & PRINCIPLES
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#111111] tracking-tight mb-4">
                Built on empirical rigor, not marketing hype.
              </h2>
              <p className="intro-text">
                We hold ourselves to the standard of an empirical research laboratory and strategic management consultancy.
              </p>
            </div>
          </SlideReveal>

          {/* 3 columns */}
          <SlideStaggerContainer staggerDelay={0.08} className="card-grid-3">
            {values.map((v) => {
              const IconC = v.icon;
              return (
                <SlideStaggerItem
                  key={v.num}
                  direction={v.dir}
                  className="min-h-[260px] p-6 sm:p-8 flex flex-col justify-between rounded-[24px] bg-[#f5f5f7] border border-[#111111]/10 group cursor-default transition-all duration-200 hover:border-[#111111]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#111111]/60 font-mono font-semibold">
                        {v.num}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white border border-[#111111]/10 text-[#111111] flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                        <IconC className="w-4 h-4 text-[#111111]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-[#111111] transition-colors duration-200">
                      {v.title}
                    </h3>
                  </div>
                  <p className="body-text text-sm mt-4">
                    {v.desc}
                  </p>
                </SlideStaggerItem>
              );
            })}
          </SlideStaggerContainer>

        </div>
      </section>

      {/* SECTION 4: FINAL CTA (DARK SECTION #111111) */}
      <section className="site-section section-dark border-t border-white/10 bg-[#111111] text-white relative overflow-hidden">
        <div className="site-container">
          <SlideReveal direction="up" distance={32} duration={0.75}>
            <div className="text-center p-8 sm:p-12 md:p-16 max-w-4xl mx-auto rounded-[24px] border border-white/10 bg-white/5">
              <span className="eyebrow-label text-center mx-auto text-[#E60023]">
                STRATEGIC ENGAGEMENT
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
                Partner with Citepoint.
              </h2>
              <p className="intro-text mx-auto mb-8 text-white/60">
                Start a confidential discovery discussion with our strategy team to evaluate your company’s generative presence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-buttons-container">
                <button
                  onClick={() => handleNav('audit')}
                  className="btn-primary"
                >
                  <span>Get Your AI Visibility Audit</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => handleNav('contact')}
                  className="btn-secondary"
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
