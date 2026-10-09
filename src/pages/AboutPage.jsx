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
  Sparkles,
  Globe2
} from 'lucide-react';
import { SlideReveal, SlideStaggerContainer, SlideStaggerItem } from '../components/SlideReveal';

/**
 * Champagne Gold & Alabaster AboutPage
 * - Hero & Story: Warm Alabaster (#FAF8F5 / transparent)
 * - Cards: surface-card with warm golden hairline border (#EADBBE)
 * - Headings: font-heading weight 500 in Deep Obsidian (#0F1012), body text (#4B4F58)
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
    <div className="w-full bg-transparent text-[#4B4F58] font-sans">
      
      {/* --------------------------------------------------
          SECTION 1, PAGE HEADER (Champagne Gold & Alabaster)
      -------------------------------------------------- */}
      <section className="pt-[72px] pb-[48px] md:pt-[96px] md:pb-[80px] relative overflow-hidden border-b border-[#EADBBE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[720px] text-left">
            <SlideReveal direction="down" distance={30} duration={0.65}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-white border border-[#EADBBE] text-[#A67D28] font-semibold text-xs uppercase tracking-[0.12em] mb-[16px] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>// ABOUT CITEPOINT</span>
              </div>
              <h1 className="type-h1 text-[#0F1012] mb-[24px]">
                AI search visibility for brands competing in the answer economy.
              </h1>
              <p className="type-body-lg text-[#4B4F58] max-w-[65ch] mb-[32px]">
                Citepoint was created with a single mission: to help ambitious B2B brands become visible, cited, and recommended at the exact point where buyers turn to AI to make buying decisions.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleNav('audit')}
                  className="btn-aurora h-[52px] px-6 rounded-[8px] text-[15px] leading-[20px] font-semibold inline-flex items-center gap-2 cursor-pointer shadow-[0_4px_16px_rgba(197,160,89,0.32)]"
                >
                  <span>Get Your AI Visibility Audit</span>
                  <ArrowRight className="w-4 h-4 text-[#0F1012]" />
                </button>
                <button
                  onClick={() => handleNav('contact')}
                  className="btn-kelp h-[52px] px-6 rounded-[8px] text-[15px] leading-[20px] font-medium inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Schedule a Briefing</span>
                </button>
              </div>
            </SlideReveal>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------
          SECTION 2, STORY: THE SHIFT TO SYNTHESIS
      -------------------------------------------------- */}
      <section className="py-[80px] border-b border-[#EADBBE] bg-transparent">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <SlideReveal direction="up" distance={32} duration={0.7}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-white border border-[#EADBBE] text-[#A67D28] font-semibold text-xs uppercase tracking-[0.12em] mb-[16px] shadow-xs">
              <span>// THE SHIFT TO SYNTHESIS</span>
            </div>
            
            <h2 className="type-h2 text-[#0F1012] mb-[24px]">
              The search landscape has shifted from discovery to synthesis.
            </h2>
            
            <div className="space-y-[20px]">
              <p className="type-body-lg text-[#4B4F58] max-w-[65ch]">
                For over two decades, B2B marketing relied on optimizing keywords for ten blue search engine links. Today, software buyers, procurement teams, and enterprise executives don’t scroll through pages of ads. They prompt ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews to summarize options and recommend solutions.
              </p>
              
              <p className="type-body text-[#4B4F58] max-w-[65ch]">
                If an AI model has not indexed your brand, lacks trusted third-party consensus, or hallucinates your capabilities, you are excluded from buyer shortlists before your sales team even knows an evaluation was underway.
              </p>

              {/* Callout Quote Card */}
              <div className="surface-card p-6 sm:p-8 my-[32px] rounded-[12px] border border-[#EADBBE] group">
                <Quote className="w-8 h-8 text-[#C5A059] mb-3 transition-transform duration-200 group-hover:scale-105" />
                <blockquote className="type-h3 leading-normal text-[#0F1012] mb-4">
                  “In the answer economy, the winner isn’t who pays the most for clicks—it’s who earns the synthetic consensus of AI discovery.”
                </blockquote>
                <div className="pt-4 border-t border-[#EADBBE] flex items-center justify-between type-eyebrow text-[#636773]">
                  <span>Citepoint Strategic Philosophy</span>
                  <span className="text-[#A67D28] font-semibold">Canonical Reference</span>
                </div>
              </div>

              <p className="type-body text-[#4B4F58] max-w-[65ch]">
                Citepoint operates at the intersection of technical crawlability, citation graph engineering, and empirical model evaluation. We build the verifiable data footprint and third-party consensus that forces generative engines to recognize your brand as the canonical authority in your space.
              </p>
            </div>
          </SlideReveal>
        </div>
      </section>

      {/* --------------------------------------------------
          SECTION 3, VALUES:
      -------------------------------------------------- */}
      <section className="py-[144px] relative bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="down" distance={30} duration={0.65}>
            <div className="max-w-[720px] text-left mb-[48px]">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-white border border-[#EADBBE] text-[#A67D28] font-semibold text-xs uppercase tracking-[0.12em] mb-[16px] shadow-xs">
                <span>// CORE VALUES & PRINCIPLES</span>
              </div>
              <h2 className="type-h2 text-[#0F1012] mb-[24px]">
                Built on empirical rigor, not marketing hype.
              </h2>
              <p className="type-body text-[#4B4F58] max-w-[65ch]">
                We hold ourselves to the standard of an empirical research laboratory and strategic management consultancy.
              </p>
            </div>
          </SlideReveal>

          {/* 3 equal columns */}
          <SlideStaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {values.map((v) => {
              const IconC = v.icon;
              return (
                <SlideStaggerItem
                  key={v.num}
                  direction={v.dir}
                  className="surface-card min-h-[260px] p-[24px] sm:p-[32px] flex flex-col justify-between rounded-[12px] group cursor-default"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="type-eyebrow text-[#A67D28] font-mono font-semibold">
                        // {v.num}
                      </span>
                      <div className="w-8 h-8 rounded-[6px] bg-[#FAF8F5] border border-[#EADBBE] text-[#C5A059] flex items-center justify-center transition-transform duration-200 group-hover:scale-110 group-hover:border-[#C5A059]">
                        <IconC className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="type-h4 text-[#0F1012] group-hover:text-[#A67D28] transition-colors duration-200">
                      {v.title}
                    </h3>
                  </div>
                  <p className="type-small text-[#4B4F58] mt-4">
                    {v.desc}
                  </p>
                </SlideStaggerItem>
              );
            })}
          </SlideStaggerContainer>

        </div>
      </section>

      {/* --------------------------------------------------
          SECTION 4, FINAL CTA:
      -------------------------------------------------- */}
      <section className="py-[96px] border-t border-[#EADBBE] bg-white/80 backdrop-blur-md relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideReveal direction="up" distance={32} duration={0.75}>
            <div className="surface-card text-center p-8 sm:p-12 md:p-16 max-w-4xl mx-auto rounded-[12px] border border-[#EADBBE] shadow-md">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-[#FAF8F5] border border-[#EADBBE] text-[#A67D28] font-semibold text-xs uppercase tracking-[0.12em] mb-[16px] shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>// STRATEGIC ENGAGEMENT</span>
              </div>
              <h2 className="type-h2 text-[#0F1012] mb-[24px]">
                Partner with Citepoint.
              </h2>
              <p className="type-body-lg text-[#4B4F58] max-w-[65ch] mx-auto mb-[32px]">
                Start a confidential discovery discussion with our strategy team to evaluate your company’s generative presence.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => handleNav('audit')}
                  className="btn-aurora h-[52px] px-6 rounded-[8px] text-[15px] leading-[20px] font-semibold inline-flex items-center gap-2 cursor-pointer shadow-[0_4px_16px_rgba(197,160,89,0.32)]"
                >
                  <span>Get Your AI Visibility Audit</span>
                  <ArrowRight className="w-4 h-4 text-[#0F1012]" />
                </button>
                <button
                  onClick={() => handleNav('contact')}
                  className="btn-kelp h-[52px] px-6 rounded-[8px] text-[15px] leading-[20px] font-medium inline-flex items-center gap-2 cursor-pointer"
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
