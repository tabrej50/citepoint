import React from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import AuditContactForm from '../components/AuditContactForm';
import { SlideReveal } from '../components/SlideReveal';

/**
 * Auros Abyssal ContactPage
 * - Hero & Main Page: Liquid Abyss (#012624)
 * - Cards: Liquid Kelp (#003734) and Liquid Deep (#011d1c) with 16px radius, no shadows
 * - Form: Liquid Deep inputs, 6px radius, Aurora gradient submit
 * - DM Sans weight 500 headings, Silver Mist body text
 */
export default function ContactPage({ setCurrentRoute }) {
  const handleNav = (route) => {
    if (setCurrentRoute) setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-transparent text-[#bbc7c6] font-matter">
      
      {/* Page Header (Liquid Abyss #012624) */}
      <section className="bg-[#012624]/60 backdrop-blur-[2px] text-white pt-128 sm:pt-144 lg:pt-160 pb-64 sm:pb-80 lg:pb-96 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SlideReveal direction="down" distance={38} duration={0.65}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] bg-[#003734] border border-white/10 text-xs font-matter font-medium uppercase tracking-[0.12em] text-[#edfffe] mb-4">
              // ADVISORY & AUDIT INQUIRIES
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-matter font-medium text-white tracking-tightest leading-[1.08] mb-6 [text-wrap:balance]">
              Talk to Citepoint.
            </h1>
            <p className="text-base sm:text-lg text-[#bbc7c6] leading-[1.4]">
              Schedule a confidential discovery conversation to evaluate your brand’s AI search presence, citation readiness, and strategic opportunities across major LLMs.
            </p>
          </SlideReveal>
        </div>
      </section>

      {/* Main Form & Context Section */}
      <section className="py-64 lg:py-96 bg-[#011d1c]/70 backdrop-blur-[2px] border-t border-white/8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Context & Guarantees */}
            <SlideReveal direction="left" distance={45} duration={0.7} className="lg:col-span-5 space-y-6">
              <div className="surface-card p-6 lg:p-8 space-y-5">
                <span className="text-xs font-matter uppercase tracking-[0.12em] text-[#cbfffc] font-medium block">
                  // ENGAGEMENT PHILOSOPHY
                </span>
                <h3 className="text-2xl font-matter font-medium text-white leading-tight">
                  Clarity before commitment.
                </h3>
                <p className="text-sm text-[#bbc7c6] leading-[1.4]">
                  Every engagement starts with a thorough diagnostic assessment of your category. We map the real questions your buyers ask and inspect what ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews currently synthesize.
                </p>

                <div className="pt-4 border-t border-white/8 space-y-3 text-xs text-[#edfffe]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#cbfffc] shrink-0 mt-0.5" />
                    <span>No locked-in contracts without empirical diagnostic baseline.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#cbfffc] shrink-0 mt-0.5" />
                    <span>Independent prompt testing across 5 major AI search engines.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#cbfffc] shrink-0 mt-0.5" />
                    <span>Prompt-level transparency with source citation mapping.</span>
                  </div>
                </div>
              </div>

              {/* Direct Email & Operations */}
              <div className="p-6 lg:p-8 rounded-[16px] bg-[#012624] text-white border border-white/10 space-y-4">
                <span className="text-xs font-matter uppercase tracking-[0.12em] text-[#edfffe] font-medium block">
                  // DIRECT ADVISORY
                </span>
                <h4 className="text-lg font-matter font-medium text-white">
                  Have specific enterprise requirements?
                </h4>
                <p className="text-xs text-[#bbc7c6] leading-[1.4]">
                  For complex multi-brand portfolios, custom API telemetry, or global enterprise MSAs, reach our senior team directly:
                </p>
                <div className="pt-2">
                  <a
                    href="mailto:hello@citepoint.io"
                    className="inline-flex items-center gap-2 text-sm font-matter font-medium text-[#cbfffc] hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    <span>hello@citepoint.io</span>
                  </a>
                </div>
              </div>
            </SlideReveal>

            {/* Right Column: Embedded AuditContactForm */}
            <SlideReveal direction="right" distance={45} duration={0.7} delay={0.12} className="lg:col-span-7">
              <AuditContactForm />
            </SlideReveal>

          </div>

        </div>
      </section>

    </div>
  );
}
