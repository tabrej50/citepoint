import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

/**
 * Formium Alliance Technical Footer
 * - Pitch black canvas surface: #000000
 * - Hairline divider: rgba(255, 255, 255, 0.1)
 * - Brand crimson accent: #e60023
 * - High-contrast typography: #ffffff headers, #a1a1aa body
 */
export default function Footer({ setCurrentRoute }) {
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
    <footer className="bg-[#000000] border-t border-white/10 text-[#a1a1aa] pt-16 pb-12 lg:pt-20 lg:pb-16 relative overflow-hidden font-sans">
      {/* Specular hairline top crimson highlight */}
      <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#e60023]/40 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Brand Identity & Positioning Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-10 border-b border-white/10 mb-10 lg:mb-14">
          <div>
            <button
              onClick={() => handleNav('home')}
              className="inline-flex items-center text-left mb-3 group focus:outline-none cursor-pointer min-h-[44px] py-1"
              aria-label="Citepoint Home"
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/brand/logo-light-transparent.png`}
                alt="Citepoint — Get Cited. Get Chosen."
                className="h-7 w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity"
              />
            </button>
            <p className="text-[13px] text-[#a1a1aa] max-w-md leading-relaxed mb-3">
              AI search visibility and Generative Engine Optimization for B2B brands competing in the answer economy.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#a1a1aa]">
              <span className="text-white font-semibold whitespace-nowrap">Get Cited. Get Chosen.</span>
              <span className="text-white/20">•</span>
              <a
                href="mailto:hello@citepoint.io"
                className="hover:text-[#e60023] transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5 text-[#e60023]" />
                <span>hello@citepoint.io</span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#111113] border border-white/15 px-4 py-2 rounded-full shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e60023] animate-pulse" />
            <span className="text-[12px] uppercase tracking-[0.08em] text-white font-semibold whitespace-nowrap">
              AI Search Visibility Infrastructure
            </span>
          </div>
        </div>

        {/* 4 Main Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Services */}
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.08em] font-semibold text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-[13px] text-[#a1a1aa]">
              <li>
                <button onClick={() => handleNav('audit')} className="hover:text-[#e60023] transition-colors text-left cursor-pointer">
                  AI Visibility Audit
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-[#e60023] transition-colors text-left cursor-pointer">
                  Pricing & Engagements
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#e60023] transition-colors text-left cursor-pointer">
                  Generative Engine Optimization
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#e60023] transition-colors text-left cursor-pointer">
                  Citation Engineering
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#e60023] transition-colors text-left cursor-pointer">
                  Knowledge Graph Alignment
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Process & Methodology */}
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.08em] font-semibold text-white mb-4">
              Methodology
            </h4>
            <ul className="space-y-2.5 text-[13px] text-[#a1a1aa]">
              <li>
                <button onClick={() => handleNav('how-it-works')} className="hover:text-[#e60023] transition-colors text-left cursor-pointer">
                  4-Phase Operating System
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('how-it-works')} className="hover:text-[#e60023] transition-colors text-left cursor-pointer">
                  Discovery & Audit
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('how-it-works')} className="hover:text-[#e60023] transition-colors text-left cursor-pointer">
                  Diagnostic & Gap Analysis
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('how-it-works')} className="hover:text-[#e60023] transition-colors text-left cursor-pointer">
                  Foundation Building
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('how-it-works')} className="hover:text-[#e60023] transition-colors text-left cursor-pointer">
                  Longitudinal Monitoring
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Evidence & Insights */}
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.08em] font-semibold text-white mb-4">
              Evidence & Thinking
            </h4>
            <ul className="space-y-2.5 text-[13px] text-[#a1a1aa]">
              <li>
                <button onClick={() => handleNav('case-studies')} className="hover:text-[#e60023] transition-colors text-left cursor-pointer">
                  Case Studies & Proof
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('insights')} className="hover:text-[#e60023] transition-colors text-left cursor-pointer">
                  Insights & Research
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('insights')} className="hover:text-[#e60023] transition-colors text-left cursor-pointer">
                  GEO vs. Traditional SEO
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('insights')} className="hover:text-[#e60023] transition-colors text-left cursor-pointer">
                  AI Shortlist Anatomy
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('insights')} className="hover:text-[#e60023] transition-colors text-left cursor-pointer">
                  Glossary of Terms
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Firm & Verification */}
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.08em] font-semibold text-white mb-4">
              About & Contact
            </h4>
            <ul className="space-y-2.5 text-[13px] text-[#a1a1aa]">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#e60023] transition-colors text-left cursor-pointer">
                  About Citepoint
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#e60023] transition-colors text-left cursor-pointer">
                  Operating Principles
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#e60023] transition-colors text-left cursor-pointer">
                  Contact & Briefing
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('privacy')} className="hover:text-[#e60023] transition-colors text-left cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('terms')} className="hover:text-[#e60023] transition-colors text-left cursor-pointer">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#71717a]">
          <p>© {new Date().getFullYear()} Citepoint. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('privacy')} className="hover:text-white transition-colors">
              Privacy
            </button>
            <button onClick={() => handleNav('terms')} className="hover:text-white transition-colors">
              Terms
            </button>
            <a href="mailto:hello@citepoint.io" className="hover:text-white transition-colors">
              Support
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
