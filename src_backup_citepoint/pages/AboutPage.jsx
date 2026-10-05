import React from 'react';
import {
  Globe2,
  ShieldCheck,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Quote,
  Award,
  Layers,
  Search,
  Compass
} from 'lucide-react';
import { SlideReveal, SlideStaggerContainer, SlideStaggerItem } from '../components/SlideReveal';

export default function AboutPage({ setCurrentRoute }) {
  const handleNav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const principles = [
    {
      num: '01',
      title: 'Absolute Transparency & No Hype',
      desc: 'We never promise "guaranteed #1 ChatGPT rankings" because no ethical agency controls third-party model weights. We focus on controllable variables: verified entity data, authoritative citations, and technical crawlability.',
      icon: ShieldCheck,
      dir: 'diagonal-left',
    },
    {
      num: '02',
      title: 'Evidence-Led Engineering',
      desc: 'Every recommendation we provide is rooted in empirical multi-prompt testing. We inspect the actual citation links, vector embeddings, and training data attributions rather than guessing.',
      icon: Search,
      dir: 'diagonal-right',
    },
    {
      num: '03',
      title: 'Durable Brand Authority',
      desc: 'We reject short-term manipulation and synthetic spam. Generative models penalize automated low-value content. We engineer durable authority across the industry sources AI models naturally trust.',
      icon: Award,
      dir: 'diagonal-left',
    },
    {
      num: '04',
      title: 'Commercial & Revenue Focus',
      desc: 'AI visibility matters only if it influences buying decisions. We prioritize high-consideration commercial prompts that guide enterprise purchase committees during shortlist evaluations.',
      icon: Target,
      dir: 'diagonal-right',
    }
  ];

  const regions = [
    { name: 'United States', focus: 'Enterprise SaaS & Technology', detail: 'North American headquarters & enterprise client delivery' },
    { name: 'United Kingdom & Europe', focus: 'Professional Services & FinTech', detail: 'GDPR-aligned data strategies and European market coverage' },
    { name: 'India & APAC', focus: 'High-Growth Tech & Global Centers', detail: 'Engineering centers and rapid-scale software vendors' },
    { name: 'UAE & Middle East', focus: 'Strategic Advisory & Enterprise', detail: 'Regional corporate advisory and international expansions' },
  ];

  return (
    <div className="w-full bg-transparent text-[#bbc7c6] font-matter">
      
      {/* --------------------------------------------------
          PAGE HERO (Liquid Abyss #012624)
      -------------------------------------------------- */}
      <section className="bg-[#012624]/60 backdrop-blur-[2px] text-[#ffffff] pt-128 sm:pt-144 lg:pt-160 pb-64 sm:pb-80 lg:pb-96 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 30%, rgba(203, 255, 252, 0.15) 0%, transparent 60%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <SlideReveal direction="up" distance={36} duration={0.65}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#003734] border border-[#707777]/30 text-xs font-mono uppercase tracking-[0.12em] text-[#edfffe] mb-4">
                // ABOUT CITEPOINT
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-matter font-medium text-[#ffffff] tracking-[-0.04em] leading-[1.08] mb-6 [text-wrap:balance]">
                AI search visibility for brands competing in the answer economy.
              </h1>
              <p className="text-lg sm:text-xl text-[#bbc7c6] leading-[1.4] mb-8">
                Citepoint was created with a single mission: to help ambitious B2B brands become visible, cited, and recommended at the exact point where buyers turn to AI to make buying decisions.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleNav('audit')}
                  className="btn-aurora text-[#011d1c] font-arial font-normal uppercase tracking-wider text-xs px-6 py-3 rounded-[6px] inline-flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Get Your AI Visibility Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleNav('contact')}
                  className="btn-kelp text-[#ffffff] font-arial font-normal uppercase tracking-wider text-xs px-6 py-3 rounded-[6px] inline-flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Schedule a Briefing</span>
                </button>
              </div>
            </SlideReveal>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------
          MISSION & THE SHIFT (Liquid Deep #011d1c Recessed Well)
      -------------------------------------------------- */}
      <section className="py-64 lg:py-96 bg-[#011d1c]/70 backdrop-blur-[2px] border-t border-b border-[#707777]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <SlideReveal direction="left" distance={45} duration={0.7} className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#003734] border border-[#707777]/30 text-xs font-mono uppercase tracking-[0.12em] text-[#edfffe]">
                OUR PERSPECTIVE
              </div>
              <h2 className="text-3xl sm:text-4xl font-matter font-medium text-[#ffffff] tracking-[-0.04em] leading-[1.0]">
                The search landscape has shifted from discovery to synthesis.
              </h2>
              <p className="text-base text-[#bbc7c6] leading-[1.4]">
                For over two decades, B2B marketing relied on optimizing keywords for ten blue search engine links. Today, software buyers, procurement teams, and enterprise executives don’t scroll through pages of ads. They prompt ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews to summarize options and recommend solutions.
              </p>
              <p className="text-base text-[#bbc7c6] leading-[1.4]">
                If an AI model has not indexed your brand, lacks trusted third-party consensus, or hallucinates your capabilities, you are excluded from buyer shortlists before your sales team even knows an evaluation was underway.
              </p>
              
              {/* Visual Metaphor Box */}
              <div className="p-6 rounded-[8px] bg-[#003734] border border-[#707777]/20 space-y-2">
                <p className="text-xs font-mono uppercase tracking-[0.12em] text-[#cbfffc]">
                  // OUR BRAND IDENTITY METAPHOR
                </p>
                <p className="text-sm text-[#bbc7c6] leading-[1.4]">
                  The Citepoint mark combines a citation point, signal waves, and a target-like form. Your brand must be present in the conversation, at the exact point where decisions are made.
                </p>
                <p className="text-xs font-matter font-medium text-[#ffffff] pt-1">
                  Tagline: <span className="text-[#cbfffc]">Get Cited. Get Chosen.</span>
                </p>
              </div>
            </SlideReveal>

            {/* Quote Card (Liquid Kelp #003734) */}
            <SlideReveal direction="right" distance={45} duration={0.7} delay={0.15} className="lg:col-span-5 flex justify-center">
              <div className="surface-card w-full p-6 lg:p-8 text-[#ffffff] group">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 80% 20%, rgba(203, 255, 252, 0.3) 0%, transparent 60%)',
                  }}
                />

                <img
                  src="/assets/brand/logo-dark-primary.png"
                  alt="Citepoint Brand Identity"
                  className="h-9 w-auto mb-8 object-contain relative z-10 brightness-110"
                />
                
                <Quote className="w-8 h-8 text-[#cbfffc]/40 mb-4 transition-transform duration-300 group-hover:scale-110" />
                
                <blockquote className="text-lg sm:text-xl font-matter font-medium text-[#ffffff] leading-[1.2] mb-6 relative z-10 transition-colors duration-200 group-hover:text-white">
                  “In the answer economy, the winner isn’t who pays the most for clicks—it’s who earns the synthetic consensus of AI discovery.”
                </blockquote>
                
                <div className="pt-6 border-t border-[#707777]/20 flex items-center justify-between text-xs text-[#bbc7c6] font-mono relative z-10">
                  <span>Citepoint Strategic Philosophy</span>
                  <span className="text-[#fde9ff]">2026 Edition</span>
                </div>
              </div>
            </SlideReveal>

          </div>
        </div>
      </section>

      {/* --------------------------------------------------
          OUR CORE PRINCIPLES (Liquid Abyss #012624)
      -------------------------------------------------- */}
      <section className="py-64 lg:py-96 bg-[#012624]/60 backdrop-blur-[2px] border-b border-[#707777]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="down" distance={36} duration={0.65}>
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#003734] border border-[#707777]/30 text-xs font-mono uppercase tracking-[0.12em] text-[#edfffe] mb-3">
                HOW WE OPERATE
              </div>
              <h2 className="text-3xl sm:text-4xl font-matter font-medium text-[#ffffff] tracking-[-0.04em] leading-[1.0] mb-4">
                Built on rigor, not hype.
              </h2>
              <p className="text-base text-[#bbc7c6] leading-[1.4]">
                We hold ourselves to the standard of a strategic management consultancy and technical research firm.
              </p>
            </div>
          </SlideReveal>

          <SlideStaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {principles.map((p) => {
              const IconC = p.icon;
              return (
                <SlideStaggerItem
                  key={p.num}
                  direction={p.dir}
                  className="surface-card p-6 lg:p-8 flex flex-col justify-between h-full space-y-4 group cursor-default"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#fde9ff] tracking-wider transition-colors duration-200 group-hover:text-white">
                      PRINCIPLE // {p.num}
                    </span>
                    <div className="w-8 h-8 rounded-[6px] bg-[#011d1c] border border-[#707777]/30 text-[#cbfffc] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#cbfffc]/40 group-hover:shadow-[0_0_10px_rgba(203,255,252,0.2)]">
                      <IconC className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-xl font-matter font-medium text-[#ffffff] leading-[1.0] transition-colors duration-200 group-hover:text-[#cbfffc]">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#bbc7c6] leading-[1.4]">
                    {p.desc}
                  </p>
                </SlideStaggerItem>
              );
            })}
          </SlideStaggerContainer>

        </div>
      </section>

      {/* --------------------------------------------------
          GLOBAL REMOTE DELIVERY (Liquid Deep #011d1c)
      -------------------------------------------------- */}
      <section className="py-64 lg:py-96 bg-[#011d1c]/70 backdrop-blur-[2px] border-b border-[#707777]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="scale-up" distance={32} duration={0.75} className="surface-card p-6 lg:p-8 sm:p-12 group">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <Globe2 className="w-4 h-4 text-[#cbfffc]" />
                <span className="text-xs font-mono uppercase tracking-[0.12em] text-[#edfffe]">
                  GLOBAL ENGAGEMENT MODEL
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-matter font-medium text-[#ffffff] tracking-[-0.04em] leading-[1.0] mb-4">
                Designed for international enterprise delivery.
              </h2>
              <p className="text-base text-[#bbc7c6] leading-[1.4] mb-8">
                Citepoint operates as a globally distributed consultancy. We work seamlessly with growth and marketing leadership across time zones, maintaining rigorous asynchronous documentation and executive cadence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#707777]/20">
                {regions.map((reg, idx) => (
                  <div key={idx} className="p-5 bg-[#011d1c]/90 border border-white/10 rounded-[8px] flex items-start gap-3.5 hover:border-[#cbfffc]/30 transition-all duration-200">
                    <div className="w-5 h-5 rounded-[6px] bg-[#003734] text-[#cbfffc] flex items-center justify-center shrink-0 mt-0.5 border border-[#707777]/30">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-[#ffffff] block text-sm font-matter font-medium leading-tight mb-1">
                        {reg.name}
                      </strong>
                      <span className="text-xs text-[#cbfffc] font-mono block mb-1">
                        {reg.focus}
                      </span>
                      <p className="text-xs text-[#bbc7c6] leading-[1.4]">
                        {reg.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SlideReveal>

        </div>
      </section>

      {/* --------------------------------------------------
          FINAL CTA SECTION (Liquid Abyss #012624)
      -------------------------------------------------- */}
      <section className="bg-[#012624]/60 backdrop-blur-[2px] text-[#ffffff] py-64 lg:py-96 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(203, 255, 252, 0.15) 0%, transparent 60%)',
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SlideReveal direction="up" distance={36} duration={0.8}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#003734] border border-[#707777]/30 text-xs font-mono uppercase tracking-[0.12em] text-[#edfffe] mb-4">
              STRATEGIC ENGAGEMENT
            </div>
            <h2 className="text-3xl sm:text-5xl font-matter font-medium text-[#ffffff] tracking-[-0.04em] leading-[1.0] mb-5">
              Partner with Citepoint.
            </h2>
            <p className="text-base sm:text-lg text-[#bbc7c6] max-w-2xl mx-auto leading-[1.4] mb-8">
              Start a confidential discovery discussion with our strategy team to evaluate your company’s generative presence.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => handleNav('audit')}
                className="btn-aurora text-[#011d1c] font-arial font-normal uppercase tracking-wider text-xs px-6 py-3 rounded-[6px] inline-flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Get Your AI Visibility Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="btn-kelp text-[#ffffff] font-arial font-normal uppercase tracking-wider text-xs px-6 py-3 rounded-[6px] inline-flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Book an Introductory Briefing</span>
              </button>
            </div>
          </SlideReveal>
        </div>
      </section>

    </div>
  );
}
