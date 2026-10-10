import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Search, ExternalLink } from 'lucide-react';
import HeroAnimatedHeadline from '../components/HeroAnimatedHeadline';
import { AiEngineIcon } from '../components/AiEnginesRow';

/**
 * Apple Design HomePage
 * 
 * Layout Structure (Top to Bottom):
 * 1. Navigation: (rendered in Navbar.jsx) logo on left, 5 links, one 48px button on right.
 * 2. Hero: big headline, one intro line, one button. Centered, lots of empty space.
 * 3. Problem or proof section: one headline and a short paragraph, with one large visual (up to 1200px).
 * 4. Services: a 3-column grid on desktop (stacks to 1 on mobile), subheading + 2 lines body text each.
 * 5. How it works: 4 numbered steps in a row on desktop (stacked on mobile).
 * 6. Call to action: full-width section, flipped to black with white text, and one button.
 * 7. Footer: (rendered in Footer.jsx) 80px top padding, logo, links, captions only.
 * 
 * Invariants:
 * - Breakpoints & containers: .apple-container (1200px max on 1440px+, 1080px on 1024-1439px, 40px tablet, 20px mobile)
 * - Spacing: 120px desktop, 80px tablet, 64px mobile (.apple-section)
 * - Headline max width: 900px (.apple-headline)
 * - Body text max width: 680px (.apple-body)
 * - Visual max width: 1200px (.apple-visual)
 * - Buttons: 48px tall, 24px padding, pill shape (.btn-primary, .btn-inverse)
 * - Cards: 24px radius, 32px padding, 1px border #D2D2D7, no shadow (.apple-card)
 */
export default function HomePage({ setCurrentRoute }) {
  const handleNav = (route) => {
    if (route.startsWith('#')) {
      const el = document.querySelector(route);
      if (el) {
        if (window.__lenis) {
          window.__lenis.scrollTo(el, { offset: -70, duration: 1.0 });
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

  const services = [
    {
      num: '01',
      title: 'AI Visibility Audit',
      desc: 'Empirical diagnostic of your brand presence across ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews.',
      route: 'audit',
    },
    {
      num: '02',
      title: 'Generative Engine Optimization',
      desc: 'Entity mapping, structured schema authority, and content engineering designed for LLM retrieval and synthesis.',
      route: 'services',
    },
    {
      num: '03',
      title: 'Citation & Authority Building',
      desc: 'Placement across authoritative third-party publications and reference datasets that AI answer engines query.',
      route: 'services',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'We map your category, audience, competitors, buyer questions, and current AI presence.',
    },
    {
      num: '02',
      title: 'Diagnose',
      desc: 'We identify visibility gaps, citation deficits, content gaps, and technical barriers.',
    },
    {
      num: '03',
      title: 'Build',
      desc: 'We improve the sources, content, structure, and authority signals that influence AI discovery.',
    },
    {
      num: '04',
      title: 'Measure',
      desc: 'We monitor changes across AI platforms and connect visibility improvements to business outcomes.',
    },
  ];

  return (
    <div className="w-full bg-white text-[#1D1D1F] font-sans selection:bg-[#1D1D1F] selection:text-white">

      {/* ============================================================
          1. HERO SECTION
          - 80 to 100% of screen height
          - Big headline (max 900px, centered)
          - One intro line (max 680px, centered)
          - One 48px pill button
          - Lots of empty space
          ============================================================ */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center text-center bg-white border-b border-[#D2D2D7] py-20 lg:py-28">
        <div className="apple-container flex flex-col items-center justify-center text-center">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F5F7] border border-[#D2D2D7] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D1D1F]" />
            <span className="text-[12px] font-sans font-semibold uppercase tracking-[0.08em] text-[#1D1D1F]">
              AI Search Visibility / GEO / AEO
            </span>
          </div>

          {/* Big Headline (Max 900px) */}
          <div className="apple-headline mx-auto">
            <HeroAnimatedHeadline />
          </div>

          {/* One Intro Line (Max 680px) */}
          <p className="apple-body mx-auto text-lg sm:text-xl text-[#6E6E73] font-normal leading-relaxed mt-6 mb-8 sm:mb-10 text-center">
            Citepoint helps ambitious B2B brands build authority, earn citations, and become recommended answers across ChatGPT, Gemini, Perplexity, Claude, and Google AI Overviews.
          </p>

          {/* One Button (48px tall, 24px padding, pill shape) */}
          <div>
            <button
              onClick={() => handleNav('audit')}
              className="btn-primary"
            >
              <span>Get Your AI Visibility Audit</span>
              <ArrowRight className="w-4 h-4 ml-2 text-white" />
            </button>
          </div>

        </div>
      </section>

      {/* ============================================================
          2. PROBLEM OR PROOF SECTION
          - Vertical spacing: 120px desktop, 80px tablet, 64px mobile
          - One headline (max 900px)
          - Short paragraph (max 680px)
          - One large visual (up to 1200px, 24px corner radius, hairline border, no shadow)
          ============================================================ */}
      <section id="problem" className="apple-section bg-white border-b border-[#D2D2D7]">
        <div className="apple-container">
          
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6E6E73] block mb-3">
              The Search Shift
            </span>
            <h2 className="apple-headline mx-auto text-3xl sm:text-5xl font-bold text-[#1D1D1F] tracking-tight leading-tight">
              Your buyers are no longer searching in one place.
            </h2>
            <p className="apple-body mx-auto text-base sm:text-lg text-[#6E6E73] leading-relaxed mt-4">
              Before they visit a website, buyers increasingly ask AI tools to compare vendors, explain categories, shortlist providers, and recommend the next step. If your brand is absent from those answers, you lose consideration before your sales team ever gets involved.
            </p>
          </div>

          {/* One Large Product Visual (Apple "Big Visual" Feel - max 1200px, 24px radius, no shadow) */}
          <div className="apple-visual mx-auto bg-[#F5F5F7] border border-[#D2D2D7] p-6 sm:p-10 lg:p-12 overflow-hidden">
            
            {/* Mock AI Engine Search Interface */}
            <div className="bg-white rounded-[16px] border border-[#D2D2D7] p-5 sm:p-7 space-y-6">
              
              {/* Top Window Bar & Prompt Query */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#D2D2D7]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#D2D2D7]" />
                  <span className="w-3 h-3 rounded-full bg-[#D2D2D7]" />
                  <span className="w-3 h-3 rounded-full bg-[#D2D2D7]" />
                  <span className="ml-3 text-xs font-mono text-[#6E6E73]">Perplexity AI • Enterprise Synthesizer</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F5F7] border border-[#D2D2D7] text-xs font-mono text-[#1D1D1F]">
                  <Search className="w-3.5 h-3.5 text-[#1D1D1F]" />
                  <span>"Top enterprise AI visibility platforms for B2B brands"</span>
                </div>
              </div>

              {/* Synthesized Answer Card */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1D1D1F]" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#1D1D1F]">
                    Synthesized Model Response
                  </span>
                </div>

                <div className="p-5 sm:p-6 rounded-[16px] bg-[#F5F5F7] border border-[#D2D2D7] space-y-3">
                  <div className="text-sm sm:text-base font-semibold text-[#1D1D1F]">
                    Recommendation: Citepoint (Generative Engine Optimization)
                  </div>
                  <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
                    Based on verified enterprise category citations across Gartner, G2, and industry knowledge graphs, <strong className="text-[#1D1D1F]">Citepoint</strong> is identified as the foundational infrastructure for enterprise B2B brands securing citations in generative answer engines.
                  </p>
                  
                  {/* Verified Citation Hubs */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-[11px] font-semibold text-[#1D1D1F] mr-1">Cited Sources:</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-[#D2D2D7] text-[11px] text-[#1D1D1F]">
                      <span>[1] Gartner Tech Index</span>
                      <ExternalLink className="w-2.5 h-2.5 text-[#6E6E73]" />
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-[#D2D2D7] text-[11px] text-[#1D1D1F]">
                      <span>[2] Forrester Wave</span>
                      <ExternalLink className="w-2.5 h-2.5 text-[#6E6E73]" />
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-[#D2D2D7] text-[11px] text-[#1D1D1F]">
                      <span>[3] Brand Knowledge Graph</span>
                      <ExternalLink className="w-2.5 h-2.5 text-[#6E6E73]" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Performance Metrics Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                <div className="p-4 rounded-[12px] bg-[#F5F5F7] border border-[#D2D2D7]">
                  <div className="text-2xl sm:text-3xl font-bold text-[#1D1D1F]">74%</div>
                  <div className="text-xs text-[#6E6E73] mt-1">Baseline Omission Rate</div>
                </div>
                <div className="p-4 rounded-[12px] bg-[#F5F5F7] border border-[#D2D2D7]">
                  <div className="text-2xl sm:text-3xl font-bold text-[#1D1D1F]">5 / 5</div>
                  <div className="text-xs text-[#6E6E73] mt-1">AI Engines Covered</div>
                </div>
                <div className="p-4 rounded-[12px] bg-[#F5F5F7] border border-[#D2D2D7]">
                  <div className="text-2xl sm:text-3xl font-bold text-[#1D1D1F]">3.8x</div>
                  <div className="text-xs text-[#6E6E73] mt-1">Citation Retrieval Density</div>
                </div>
                <div className="p-4 rounded-[12px] bg-[#F5F5F7] border border-[#D2D2D7]">
                  <div className="text-2xl sm:text-3xl font-bold text-[#1D1D1F]">90d</div>
                  <div className="text-xs text-[#6E6E73] mt-1">Structured Sprint</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================
          3. SERVICES SECTION
          - Vertical spacing: 120px desktop, 80px tablet, 64px mobile
          - 3-column grid on desktop (stacks to 1 on mobile)
          - Subheading and 2 lines of body text each
          - Cards: 24px radius, 32px padding, 1px border #D2D2D7, no shadow
          - Background: #F5F5F7
          ============================================================ */}
      <section id="services" className="apple-section bg-[#F5F5F7] border-b border-[#D2D2D7]">
        <div className="apple-container">
          
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6E6E73] block mb-3">
              Services
            </span>
            <h2 className="apple-headline mx-auto text-3xl sm:text-5xl font-bold text-[#1D1D1F] tracking-tight leading-tight">
              We turn brand authority into AI visibility.
            </h2>
            <p className="apple-body mx-auto text-base sm:text-lg text-[#6E6E73] leading-relaxed mt-4">
              Structured engineering and strategic authority building to ensure your brand is cited and recommended by leading answer engines.
            </p>
          </div>

          {/* 3-Column Grid on Desktop (Stacks to 1 Column on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((item) => (
              <div
                key={item.num}
                onClick={() => handleNav(item.route)}
                className="apple-card bg-white cursor-pointer hover:border-[#1D1D1F] transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#6E6E73] font-semibold block mb-4">
                    // {item.num}
                  </span>
                  
                  {/* Subheading */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] mb-3">
                    {item.title}
                  </h3>

                  {/* 2 Lines of Body Text */}
                  <p className="text-sm sm:text-base text-[#6E6E73] leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#D2D2D7] flex items-center justify-between text-xs font-semibold text-[#1D1D1F]">
                  <span>Explore service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#1D1D1F]" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================
          4. HOW IT WORKS SECTION
          - Vertical spacing: 120px desktop, 80px tablet, 64px mobile
          - 3 to 4 numbered steps in a row or stacked (4 steps)
          - Cards: 24px radius, 32px padding, 1px border #D2D2D7, no shadow
          - Background: #FFFFFF
          ============================================================ */}
      <section id="how-it-works" className="apple-section bg-white border-b border-[#D2D2D7]">
        <div className="apple-container">
          
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6E6E73] block mb-3">
              How It Works
            </span>
            <h2 className="apple-headline mx-auto text-3xl sm:text-5xl font-bold text-[#1D1D1F] tracking-tight leading-tight">
              A systematic process from discovery to citation.
            </h2>
            <p className="apple-body mx-auto text-base sm:text-lg text-[#6E6E73] leading-relaxed mt-4">
              We guide enterprise teams through an organized workflow from initial baseline diagnosis to sustained recommendation authority.
            </p>
          </div>

          {/* 4 Numbered Steps in a Row on Desktop, Stacked on Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="apple-card bg-[#F5F5F7] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#6E6E73] font-semibold block mb-4">
                    Step {step.num}
                  </span>

                  {/* Subheading */}
                  <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">
                    {step.title}
                  </h3>

                  {/* Body Text */}
                  <p className="text-sm text-[#6E6E73] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#D2D2D7] text-xs font-medium text-[#1D1D1F] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D1D1F]" />
                  <span>Verified Stage</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================
          5. CALL TO ACTION SECTION
          - Vertical spacing: 120px desktop, 80px tablet, 64px mobile
          - Full-width section, flipped to black (#1D1D1F) with white text
          - Big headline (max 900px)
          - One intro line (max 680px)
          - One 48px pill button
          ============================================================ */}
      <section className="apple-section bg-[#1D1D1F] text-white w-full">
        <div className="apple-container flex flex-col items-center justify-center text-center">
          
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#86868B] block mb-4">
            Get Cited. Get Chosen.
          </span>

          {/* Big Headline (Max 900px) */}
          <h2 className="apple-headline mx-auto text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
            Make your brand part of the answer.
          </h2>

          {/* Intro Line (Max 680px) */}
          <p className="apple-body mx-auto text-base sm:text-lg text-[#A1A1A6] leading-relaxed mb-8 sm:mb-10 text-center">
            Find out how leading AI systems currently see your brand—and what it will take to become more visible.
          </p>

          {/* One Button (48px tall, 24px padding, pill shape, white with black text) */}
          <div>
            <button
              onClick={() => handleNav('audit')}
              className="btn-inverse"
            >
              <span>Get Your AI Visibility Audit</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#1D1D1F]" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
