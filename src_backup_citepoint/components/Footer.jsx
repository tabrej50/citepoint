import React, { useRef } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { FooterParallaxBackdrop } from './parallax/SectionParallaxBackdrops';

/**
 * Auros Abyssal Footer
 * - Recessed well surface: Liquid Deep (#011d1c).
 * - Generous 120px vertical padding.
 * - Platinum headings, Silver Mist links, 6px element radius.
 * - Minimal parallax depth (0.06x) with zero interference.
 */
export default function Footer({ setCurrentRoute }) {
  const footerRef = useRef(null);

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
    setCurrentRoute(route);
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 0.8 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer ref={footerRef} className="bg-[#011d1c]/80 backdrop-blur-[2px] border-t border-white/8 text-[#bbc7c6] pt-20 pb-16 lg:pt-24 lg:pb-20 relative overflow-hidden font-matter">
      {/* Minimal Parallax Depth Layer (0.06x) */}
      <FooterParallaxBackdrop sectionRef={footerRef} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Brand Identity & Positioning Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-white/8 mb-12 lg:mb-16">
          <div>
            <button
              onClick={() => handleNav('home')}
              className="inline-block text-left mb-4 group focus:outline-none cursor-pointer"
              aria-label="Citepoint Home"
            >
              <img
                src="/assets/brand/logo-dark-primary.png"
                alt="Citepoint — Get Cited. Get Chosen."
                className="h-8 w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity"
              />
            </button>
            <p className="text-sm text-[#bbc7c6] max-w-md leading-relaxed mb-4">
              AI search visibility and Generative Engine Optimization for B2B brands competing in the answer economy.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#bbc7c6]">
              <span className="text-[#edfffe] font-medium tracking-wide whitespace-nowrap">Tagline: Get Cited. Get Chosen.</span>
              <span className="text-white/20">•</span>
              <a
                href="mailto:hello@citepoint.io"
                className="hover:text-white transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5 text-[#cbfffc]" />
                <span>hello@citepoint.io</span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#003734] border border-white/10 px-4 py-2.5 rounded-[6px]">
            <span className="w-2 h-2 rounded-full bg-[#cbfffc] animate-pulse" />
            <span className="text-xs uppercase tracking-[0.12em] text-[#edfffe] font-medium whitespace-nowrap">
              GET CITED. GET CHOSEN.
            </span>
          </div>
        </div>

        {/* 4 Main Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12 pb-16 border-b border-white/8">
          
          {/* Column 1: Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.12em] font-medium text-white mb-5">
              // Services
            </h4>
            <ul className="space-y-3 text-xs text-[#bbc7c6]">
              <li>
                <button onClick={() => handleNav('audit')} className="hover:text-white transition-colors text-left cursor-pointer">
                  AI Visibility Audit
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Pricing & Engagements
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors text-left cursor-pointer">
                  GEO Program
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Citation Building
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Technical AI Readiness
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Reputation Monitoring
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors text-left cursor-pointer">
                  AI Search Strategy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Framework */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.12em] font-medium text-white mb-5">
              // Methodology
            </h4>
            <ul className="space-y-3 text-xs text-[#bbc7c6]">
              <li>
                <button onClick={() => handleNav('how-it-works')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Retrieval Journey
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('how-it-works')} className="hover:text-white transition-colors text-left cursor-pointer">
                  4-Phase Framework
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors text-left cursor-pointer">
                  SEO vs. GEO Paradigm
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('case-studies')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Client Results
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('insights')} className="hover:text-white transition-colors text-left cursor-pointer">
                  B2B GEO Glossary
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.12em] font-medium text-white mb-5">
              // Company
            </h4>
            <ul className="space-y-3 text-xs text-[#bbc7c6]">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors text-left cursor-pointer">
                  About Citepoint
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('insights')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Intelligence Briefings
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Contact Advisory Team
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('privacy')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('terms')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Action */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.12em] font-medium text-white mb-5">
              // Diagnostic Action
            </h4>
            <p className="text-xs text-[#bbc7c6] leading-relaxed mb-4">
              Benchmark your brand against 5 major AI platforms for high-consideration commercial prompts.
            </p>
            <button
              onClick={() => handleNav('audit')}
              className="btn-aurora w-full text-xs"
            >
              <span>Request Visibility Audit</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#222222]" />
            </button>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#707777]">
          <div>
            © {new Date().getFullYear()} <span className="whitespace-nowrap">Citepoint Inc.</span> All rights reserved. <span className="whitespace-nowrap">Registered B2B Advisory.</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button onClick={() => handleNav('privacy')} className="hover:text-[#bbc7c6] transition-colors cursor-pointer">
              Privacy
            </button>
            <span>•</span>
            <button onClick={() => handleNav('terms')} className="hover:text-[#bbc7c6] transition-colors cursor-pointer">
              Terms
            </button>
            <span>•</span>
            <span className="text-[#bbc7c6]/60">
              Not affiliated with OpenAI, Anthropic, Perplexity, or Google.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
