import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

/**
 * Linear-Style Navigation Bar
 * - Near-black surface-1 (#0f1011) with hairline border (#23252a)
 * - Restrained typography: 13px Inter with subtle muted states
 * - Primary lavender accent (#5e6ad2) for the action CTA
 * - Dark technical dropdown and mobile menu
 */
export default function Navbar({ currentRoute, setCurrentRoute }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  // Sliding highlight pill state
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

  // Update sliding pill position
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
    <div className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        
        <header
          className={`relative rounded-[12px] transition-all duration-300 ${
            isScrolled
              ? 'px-4 sm:px-5 py-2.5 bg-[#0f1011]/85 border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.12)]'
              : 'px-5 sm:px-6 py-3 bg-[#0f1011]/70 border border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)]'
          }`}
          style={{
            WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'blur(16px)',
            backdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'blur(16px)',
          }}
        >
          {/* Subtle top hairline specular highlight */}
          <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

          <div className="flex items-center justify-between gap-4 relative z-10">
            
            {/* Citepoint Brand Mark */}
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="flex items-center shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5e69d1] rounded-[8px] transition-opacity duration-150 hover:opacity-90"
              aria-label="Citepoint Home"
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/brand/logo-dark-primary.png`}
                alt="Citepoint — Get Cited. Get Chosen."
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled ? 'h-6 sm:h-7' : 'h-7 sm:h-8'
                }`}
              />
            </button>

            {/* Desktop Navigation Links */}
            <nav
              ref={navContainerRef}
              className="hidden md:flex items-center gap-1 relative"
              aria-label="Main Navigation"
              onMouseLeave={() => {
                setHoveredRoute(null);
                handleDropdownLeave();
              }}
            >
              {/* Sliding Active/Hover Highlight Pill */}
              <div
                className="absolute pointer-events-none rounded-[8px] bg-[#141516] border border-[#23252a] transition-all duration-150"
                style={{
                  left: `${pillStyle.left}px`,
                  top: `${pillStyle.top}px`,
                  width: `${pillStyle.width}px`,
                  height: `${pillStyle.height}px`,
                  opacity: pillStyle.opacity,
                  transition: isInitialRender ? 'opacity 150ms ease-out' : undefined,
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
                        className={`relative z-10 inline-flex items-center gap-1 px-3 py-1.5 rounded-[8px] text-[13px] font-sans transition-colors duration-150 cursor-pointer bg-transparent border-none select-none ${
                          isHighlighted
                            ? 'text-[#f7f8f8] font-medium'
                            : 'text-[#8a8f98] hover:text-[#f7f8f8] font-normal'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Linear Dark Dropdown */}
                      {servicesDropdownOpen && (
                        <div
                          className="header-dropdown animate-fadeIn"
                          onMouseEnter={handleDropdownEnter}
                          onMouseLeave={handleDropdownLeave}
                        >
                          <div className="text-[11px] uppercase tracking-[0.06em] font-medium text-[#8a8f98] px-3 py-1.5 border-b border-[#23252a] mb-1">
                            Enterprise AI Capabilities
                          </div>
                          {serviceItems.map((item) => (
                            <button
                              key={item.title}
                              onClick={() => {
                                handleNavClick(item.route);
                                setServicesDropdownOpen(false);
                              }}
                              className="group w-full text-left px-3 py-2 rounded-[8px] hover:bg-[#18191a] transition-colors cursor-pointer"
                            >
                              <div className="text-[13px] font-medium text-[#f7f8f8] group-hover:text-white">
                                {item.title}
                              </div>
                              <div className="text-[12px] text-[#8a8f98] group-hover:text-[#d0d6e0] leading-snug">
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
                    className={`relative z-10 px-3 py-1.5 rounded-[8px] text-[13px] font-sans transition-colors duration-150 cursor-pointer bg-transparent border-none select-none ${
                      isHighlighted
                        ? 'text-[#f7f8f8] font-medium'
                        : 'text-[#8a8f98] hover:text-[#f7f8f8] font-normal'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* Right Action: Linear Lavender Button */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <button
                onClick={() => handleNavClick('audit')}
                className="btn-primary inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[8px] font-sans font-medium text-[13px] cursor-pointer"
              >
                <span>Get AI Visibility Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2 shrink-0">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#8a8f98] hover:text-[#f7f8f8] rounded-[8px] bg-[#141516] border border-[#23252a] focus:outline-none cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>

          </div>
        </header>

        {/* Mobile Navigation Drawer with Linear Dark Styling */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-[12px] bg-[#0f1011] border border-[#23252a] shadow-2xl animate-fadeIn pointer-events-auto">
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#23252a] text-[12px] text-[#8a8f98]">
              <span className="uppercase tracking-wider font-medium text-[#f7f8f8]">Navigation</span>
              <span className="uppercase tracking-wider text-[11px] font-mono">Citepoint</span>
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = currentRoute === link.route;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.route)}
                    className={`text-left text-[13px] py-2 px-3 rounded-[8px] transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#141516] text-[#f7f8f8] font-medium'
                        : 'text-[#8a8f98] hover:text-[#f7f8f8] hover:bg-[#141516]'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

            <div className="pt-3 mt-3 border-t border-[#23252a]">
              <button
                onClick={() => handleNavClick('audit')}
                className="btn-primary w-full py-2.5 px-4 inline-flex items-center justify-center gap-2 text-[13px] font-sans font-medium cursor-pointer"
              >
                <span>Get Your AI Visibility Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
