import React from 'react';

/**
 * Apple Design Footer
 * - 80px top padding: pt-[80px] pb-12
 * - Light gray background (#F5F5F7) with 1px hairline border (#D2D2D7) at top
 * - Captions only: logo, a few links and captions
 * - Container: .apple-container
 */
export default function Footer({ setCurrentRoute }) {
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

  const footerLinks = [
    { name: 'Services', route: 'services' },
    { name: 'How It Works', route: 'how-it-works' },
    { name: 'Pricing', route: 'pricing' },
    { name: 'Results', route: 'case-studies' },
    { name: 'About', route: 'about' },
    { name: 'Contact', route: 'contact' },
    { name: 'Privacy', route: 'privacy' },
    { name: 'Terms', route: 'terms' },
  ];

  return (
    <footer className="pt-[80px] pb-12 bg-[#F5F5F7] border-t border-[#D2D2D7] text-[#6E6E73] font-sans">
      <div className="apple-container">
        
        {/* Top: Brand Logo and Navigation Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#D2D2D7]">
          <button
            onClick={() => handleNav('home')}
            className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F] rounded-full transition-opacity hover:opacity-80"
            aria-label="Citepoint Home"
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/brand/logo-light-transparent.png`}
              alt="Citepoint — Get Cited. Get Chosen."
              className="h-7 w-auto object-contain"
            />
          </button>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Footer Navigation">
            {footerLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNav(link.route)}
                className="text-[13px] text-[#6E6E73] hover:text-[#1D1D1F] transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom: Captions Only */}
        <div className="pt-8 space-y-3 text-[12px] text-[#86868B] leading-relaxed">
          <p>
            Citepoint provides Generative Engine Optimization (GEO) and AI search authority infrastructure for enterprise B2B organizations. AI answer engines synthesize recommendations from authoritative third-party citation graphs and structured entities.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 text-[11px] text-[#86868B]">
            <span>© {new Date().getFullYear()} Citepoint Inc. All rights reserved.</span>
            <span>San Francisco, CA • Built for high-consideration B2B brands.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
