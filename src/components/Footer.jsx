import React from 'react';
import { Mail } from 'lucide-react';

/**
 * Technical Footer (30% Secondary Black #111111)
 * - Canvas surface: #111111 (var(--color-dark-bg))
 * - Hairline divider: 1px at 10% opacity (rgba(255, 255, 255, 0.10))
 * - Typography: Pure White #FFFFFF headers, white at 60% opacity for body/links
 * - Accents: Gold #E60023 on hover and accent markers (gold text allowed on black sections)
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
    <footer className="footer-dark bg-[#111111] border-t border-white/10 text-white/60 pt-16 pb-12 lg:pt-20 lg:pb-16 relative overflow-hidden font-sans">
      <div className="site-container relative z-10">
        
        {/* Top Brand Identity & Positioning Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-10 border-b border-white/10 mb-10 lg:mb-14">
          <div>
            <button
              onClick={() => handleNav('home')}
              className="inline-flex items-center text-left mb-3 group focus:outline-none cursor-pointer min-h-[44px] py-1"
              aria-label="Citepoint Home"
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/brand/logo-dark-transparent.png`}
                alt="Citepoint — Get Cited. Get Chosen."
                className="h-7 w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity"
              />
            </button>
            <p className="text-[13px] text-white/60 max-w-md leading-relaxed mb-3">
              AI search visibility and Generative Engine Optimization for B2B brands competing in the answer economy.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/60">
              <span className="text-white font-semibold whitespace-nowrap">Get Cited. Get Chosen.</span>
              <span className="text-white/20">•</span>
              <a
                href="mailto:hello@citepoint.xyz"
                className="hover:text-[#E60023] transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5 text-[#E60023]" />
                <span>hello@citepoint.xyz</span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full max-w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E60023] shrink-0" />
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.06em] sm:tracking-[0.08em] text-white font-semibold text-center truncate sm:whitespace-nowrap">
              AI Search Visibility Infrastructure
            </span>
          </div>
        </div>

        {/* 4 Main Columns (Stacked 1-col on mobile, 2-col on small tablet, 4-col on tablet/desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 md:gap-5 lg:gap-6 pb-12 border-b border-white/10">
          
          {/* Column 1: Services */}
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.08em] font-semibold text-white mb-4">
              Services
            </h4>
            <ul className="space-y-1.5 text-[13px] text-white/60">
              <li>
                <button onClick={() => handleNav('audit')} className="hover:text-[#E60023] transition-colors text-left cursor-pointer py-1 inline-flex items-center">
                  AI Visibility Audit
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-[#E60023] transition-colors text-left cursor-pointer py-1 inline-flex items-center">
                  Pricing & Engagements
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#E60023] transition-colors text-left cursor-pointer py-1 inline-flex items-center">
                  Generative Engine Optimization
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#E60023] transition-colors text-left cursor-pointer py-1 inline-flex items-center">
                  Citation Engineering
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#E60023] transition-colors text-left cursor-pointer py-1 inline-flex items-center">
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
            <ul className="space-y-1.5 text-[13px] text-white/60">
              <li>
                <button onClick={() => handleNav('how-it-works')} className="hover:text-[#E60023] transition-colors text-left cursor-pointer py-1 inline-flex items-center">
                  4-Phase Operating System
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('how-it-works')} className="hover:text-[#E60023] transition-colors text-left cursor-pointer py-1 inline-flex items-center">
                  Discovery & Audit
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('how-it-works')} className="hover:text-[#E60023] transition-colors text-left cursor-pointer py-1 inline-flex items-center">
                  Diagnostic & Gap Analysis
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('how-it-works')} className="hover:text-[#E60023] transition-colors text-left cursor-pointer py-1 inline-flex items-center">
                  Foundation Building
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('how-it-works')} className="hover:text-[#E60023] transition-colors text-left cursor-pointer py-1 inline-flex items-center">
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
            <ul className="space-y-1.5 text-[13px] text-white/60">
              <li>
                <button onClick={() => handleNav('case-studies')} className="hover:text-[#E60023] transition-colors text-left cursor-pointer py-1 inline-flex items-center">
                  Case Studies & Proof
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('insights')} className="hover:text-[#E60023] transition-colors text-left cursor-pointer py-1 inline-flex items-center">
                  Insights & Research
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('insights')} className="hover:text-[#E60023] transition-colors text-left cursor-pointer py-1 inline-flex items-center">
                  GEO vs. Traditional SEO
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('insights')} className="hover:text-[#E60023] transition-colors text-left cursor-pointer py-1 inline-flex items-center">
                  AI Shortlist Anatomy
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('insights')} className="hover:text-[#E60023] transition-colors text-left cursor-pointer py-1 inline-flex items-center">
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
            <ul className="space-y-1.5 text-[13px] text-white/60">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#E60023] transition-colors text-left cursor-pointer py-1 inline-flex items-center">
                  About Citepoint
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#E60023] transition-colors text-left cursor-pointer py-1 inline-flex items-center">
                  Operating Principles
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#E60023] transition-colors text-left cursor-pointer py-1 inline-flex items-center">
                  Contact & Briefing
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('privacy')} className="hover:text-[#E60023] transition-colors text-left cursor-pointer py-1 inline-flex items-center">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('terms')} className="hover:text-[#E60023] transition-colors text-left cursor-pointer py-1 inline-flex items-center">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-white/60">
          <p>© {new Date().getFullYear()} Citepoint. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('privacy')} className="hover:text-[#E60023] transition-colors py-1.5">
              Privacy
            </button>
            <button onClick={() => handleNav('terms')} className="hover:text-[#E60023] transition-colors py-1.5">
              Terms
            </button>
            <a href="mailto:hello@citepoint.xyz" className="hover:text-[#E60023] transition-colors py-1.5">
              Support
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
