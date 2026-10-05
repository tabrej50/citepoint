import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

/**
 * Citepoint Liquid Glass Navigation Bar (.header-six)
 * - Layered liquid-glass technique with empty SVG distortion pseudo-layer (#lg-dist)
 * - Visual tint, specular highlights, and soft outer shadow layer
 * - Crisp, unaffected foreground content, navigation links & icons
 * - Liquid glass CTA buttons (.btn-v2-white, .btn-white, .btn-outline-white)
 * - Light frosted-glass dropdown & mobile off-canvas drawer
 */
export default function Navbar({ currentRoute, setCurrentRoute }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  // Sliding highlight pill state and references
  const [hoveredRoute, setHoveredRoute] = useState(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, top: 0, width: 0, height: 0, opacity: 0 });
  const [isInitialRender, setIsInitialRender] = useState(true);
  const navContainerRef = useRef(null);
  const navItemRefs = useRef({});

  const targetRoute = hoveredRoute || currentRoute;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', route: 'services', hasDropdown: true },
    { name: 'How It Works', route: 'how-it-works' },
    { name: 'Pricing', route: 'pricing' },
    { name: 'Results', route: 'case-studies' },
    { name: 'Insights', route: 'insights' },
    { name: 'About', route: 'about' },
  ];

  const serviceItems = [
    { title: 'Generative Engine Optimization (GEO)', desc: 'AI visibility, entity grounding & citation ranking', route: 'services' },
    { title: 'AI Citation Engineering', desc: 'Acquisition & verification across LLM answer engines', route: 'services' },
    { title: 'Brand Knowledge Graphing', desc: 'Structured schema authority & semantic modeling', route: 'services' },
    { title: 'Answer Engine Optimization (AEO)', desc: 'Optimized direct synthetic answers for B2B buyers', route: 'services' },
  ];

  const handleNavClick = (route) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setHoveredRoute(null);
    if (route === 'pricing') {
      window.location.hash = '#/pricing';
      setCurrentRoute('pricing');
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { duration: 0.8 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
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

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  // Update sliding pill position based on active/hovered nav item
  useEffect(() => {
    const updatePosition = () => {
      const container = navContainerRef.current;
      const targetEl = navItemRefs.current[targetRoute];

      if (targetEl && container) {
        const containerRect = container.getBoundingClientRect();
        const itemRect = targetEl.getBoundingClientRect();

        setPillStyle({
          left: Math.round(itemRect.left - containerRect.left),
          top: Math.round(itemRect.top - containerRect.top),
          width: Math.round(itemRect.width),
          height: Math.round(itemRect.height),
          opacity: 1,
        });
      } else {
        setPillStyle((prev) => ({ ...prev, opacity: 0 }));
      }
    };

    updatePosition();

    if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(updatePosition);
    }

    const timer = setTimeout(() => {
      setIsInitialRender(false);
    }, 60);

    window.addEventListener('resize', updatePosition);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updatePosition);
    };
  }, [targetRoute, currentRoute]);

  return (
    <div className="fixed top-3 sm:top-4 lg:top-5 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        
        {/* Fixed Top Liquid Glass Navigation Header (.header-six) */}
        <header
          className={`header-six rounded-full transition-all duration-300 relative ${
            isScrolled
              ? 'px-4 sm:px-6 lg:px-7 py-2.5 sm:py-3'
              : 'px-5 sm:px-7 lg:px-8 py-3 sm:py-3.5'
          }`}
        >
          <div className="flex items-center justify-between gap-4 sm:gap-6 relative z-10">
            
            {/* Official Citepoint Brand Mark */}
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="flex items-center shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-full p-1 transition-transform duration-200 hover:scale-[1.02]"
              aria-label="Citepoint Home"
            >
              <img
                src="/assets/brand/logo-dark-primary.png"
                alt="Citepoint — Get Cited. Get Chosen."
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled ? 'h-7 sm:h-8' : 'h-8 sm:h-9'
                }`}
              />
            </button>

            {/* Desktop Navigation Links with Sliding Glass Highlight Pill */}
            <nav
              ref={navContainerRef}
              className="hidden md:flex items-center gap-0.5 lg:gap-1.5 relative"
              aria-label="Main Navigation"
              onMouseLeave={() => {
                setHoveredRoute(null);
                handleDropdownLeave();
              }}
            >
              {/* Sliding Glass Highlight Pill */}
              <div
                className="nav-highlight-pill"
                style={{
                  left: `${pillStyle.left}px`,
                  top: `${pillStyle.top}px`,
                  width: `${pillStyle.width}px`,
                  height: `${pillStyle.height}px`,
                  opacity: pillStyle.opacity,
                  transition: isInitialRender ? 'opacity 180ms ease-out' : undefined,
                }}
                aria-hidden="true"
              />

              {navLinks.map((link) => {
                const isHighlighted = hoveredRoute
                  ? hoveredRoute === link.route
                  : currentRoute === link.route;

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => {
                        setHoveredRoute(link.route);
                        handleDropdownEnter();
                      }}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <button
                        ref={(el) => {
                          if (el) navItemRefs.current[link.route] = el;
                        }}
                        onClick={() => {
                          handleNavClick(link.route);
                          setServicesDropdownOpen(!servicesDropdownOpen);
                        }}
                        className={`relative z-10 inline-flex items-center gap-1 px-2.5 lg:px-3.5 py-1.5 rounded-full text-[12px] lg:text-[13px] font-matter tracking-[0.05em] uppercase transition-colors duration-200 cursor-pointer bg-transparent border-none select-none ${
                          isHighlighted
                            ? 'text-white font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]'
                            : 'text-white/85 hover:text-white font-normal'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Light Frosted-Glass Dropdown Surface */}
                      {servicesDropdownOpen && (
                        <div
                          className="header-dropdown animate-fadeIn"
                          onMouseEnter={handleDropdownEnter}
                          onMouseLeave={handleDropdownLeave}
                        >
                          <div className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#0a1d2c]/60 px-3 py-1 border-b border-black/10 mb-1">
                            Enterprise AI Capabilities
                          </div>
                          {serviceItems.map((item) => (
                            <button
                              key={item.title}
                              onClick={() => {
                                handleNavClick(item.route);
                                setServicesDropdownOpen(false);
                              }}
                              className="group w-full text-left px-3 py-2 rounded-lg hover:bg-black/5 transition-colors cursor-pointer"
                            >
                              <div className="text-[13px] font-semibold text-[#0a1d2c] group-hover:text-black">
                                {item.title}
                              </div>
                              <div className="text-[11px] text-[#4b5563] group-hover:text-[#1f2937] leading-tight">
                                {item.desc}
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={link.name}
                    ref={(el) => {
                      if (el) navItemRefs.current[link.route] = el;
                    }}
                    onClick={() => handleNavClick(link.route)}
                    onMouseEnter={() => setHoveredRoute(link.route)}
                    className={`relative z-10 px-2.5 lg:px-3.5 py-1.5 rounded-full text-[12px] lg:text-[13px] font-matter tracking-[0.05em] uppercase transition-colors duration-200 cursor-pointer bg-transparent border-none select-none ${
                      isHighlighted
                        ? 'text-white font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]'
                        : 'text-white/85 hover:text-white font-normal'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* Right Action: Glass CTA Buttons (.btn-v2-white) */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <button
                onClick={() => handleNavClick('audit')}
                className="btn-v2-white btn-white inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-matter font-medium text-[13px] tracking-wide uppercase cursor-pointer"
              >
                <span className="relative z-10 text-white">Get Your AI Visibility Audit</span>
                <ArrowRight className="w-3.5 h-3.5 relative z-10 text-white" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2 shrink-0">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-white/80 rounded-full bg-white/10 border border-white/15 focus:outline-none cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </header>

        {/* Mobile Navigation Drawer with Light Frosted Glass Style */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2.5 p-5 rounded-2xl glass-mobile-drawer mobile-offcanvas animate-fadeIn pointer-events-auto">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-black/10 text-xs font-matter text-[#0a1d2c]">
              <span className="flex items-center gap-1.5 uppercase tracking-[0.12em] font-semibold text-[#0a1d2c]">
                <Sparkles className="w-3.5 h-3.5 text-[#0a1d2c]" />
                // MENU
              </span>
              <span className="text-[#0a1d2c]/60 uppercase tracking-[0.12em] font-semibold">CITEPOINT</span>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = currentRoute === link.route;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.route)}
                    className={`text-left text-xs font-matter uppercase tracking-[0.12em] py-2.5 px-3.5 rounded-xl transition-all cursor-pointer ${
                      isActive
                        ? 'bg-black/10 text-black font-semibold shadow-sm'
                        : 'text-[#0a1d2c] hover:text-black hover:bg-black/5 font-medium'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

            <div className="pt-4 mt-4 border-t border-black/10">
              <button
                onClick={() => handleNavClick('audit')}
                className="btn-v2-white btn-white w-full py-3 px-5 inline-flex items-center justify-center gap-2 text-[13px] font-matter font-medium uppercase tracking-wide cursor-pointer"
              >
                <span className="relative z-10 text-white">Get Your AI Visibility Audit</span>
                <ArrowRight className="w-3.5 h-3.5 relative z-10 text-white" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
