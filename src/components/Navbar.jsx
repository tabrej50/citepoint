import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
          className={`relative rounded-full transition-all duration-300 ${
            isScrolled
              ? 'px-4 sm:px-6 py-2.5 bg-white/90 border border-[#d2d2d7]'
              : 'px-5 sm:px-7 py-3 bg-white/80 border border-[#d2d2d7]'
          }`}
          style={{
            WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'blur(16px)',
            backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'blur(16px)',
          }}
        >
          <div className="flex items-center justify-between gap-4 relative z-10">
            
            {/* Citepoint Brand Mark with Gold Emblem */}
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="flex items-center shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1d1d1f] rounded-full transition-opacity duration-150 hover:opacity-85 min-h-[44px] py-1"
              aria-label="Citepoint Home"
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/brand/logo-light-transparent.png`}
                alt="Citepoint — Get Cited. Get Chosen."
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled ? 'h-6 sm:h-7' : 'h-7 sm:h-8'
                }`}
              />
            </button>

            {/* Desktop Navigation Links */}
            <nav
              ref={navContainerRef}
              className="hidden lg:flex items-center gap-1 relative"
              aria-label="Main Navigation"
              onMouseLeave={() => {
                setHoveredRoute(null);
                handleDropdownLeave();
              }}
            >
              {/* Sliding Active/Hover Highlight Pill */}
              <div
                className="absolute pointer-events-none rounded-full bg-[#f5f5f7] border border-[#d2d2d7] transition-all duration-150"
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
                        className={`relative z-10 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-[13px] font-sans whitespace-nowrap transition-colors duration-150 cursor-pointer bg-transparent border-none select-none ${
                          isHighlighted
                            ? 'text-[#1d1d1f] font-semibold'
                            : 'text-[#6e6e73] hover:text-[#1d1d1f] font-medium'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Clean Apple Minimal Dropdown */}
                      <AnimatePresence>
                        {servicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -6 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: -4 }}
                            transition={{ type: 'spring', damping: 28, stiffness: 340, mass: 0.8 }}
                            style={{ transformOrigin: 'top center' }}
                            className="header-dropdown"
                            onMouseEnter={handleDropdownEnter}
                            onMouseLeave={handleDropdownLeave}
                          >
                            <div className="text-[11px] uppercase tracking-[0.08em] font-bold text-[#1d1d1f] px-3.5 py-1.5 border-b border-[#d2d2d7] mb-1">
                              Enterprise AI Capabilities
                            </div>
                            {serviceItems.map((item) => (
                              <button
                                key={item.title}
                                onClick={() => {
                                  handleNavClick(item.route);
                                  setServicesDropdownOpen(false);
                                }}
                                className="group w-full text-left px-3.5 py-2.5 rounded-[12px] hover:bg-[#f5f5f7] transition-colors cursor-pointer active:scale-[0.98]"
                              >
                                <div className="text-[13px] font-medium text-[#1d1d1f] group-hover:text-black transition-colors">
                                  {item.title}
                                </div>
                                <div className="text-[12px] text-[#6e6e73] leading-snug">
                                  {item.desc}
                                </div>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
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
                    className={`relative z-10 px-3.5 py-1.5 rounded-full text-[13px] font-sans whitespace-nowrap transition-colors duration-150 cursor-pointer bg-transparent border-none select-none ${
                      isHighlighted
                        ? 'text-[#1d1d1f] font-semibold'
                        : 'text-[#6e6e73] hover:text-[#1d1d1f] font-medium'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* Right Action: Solid Black Button with White Text */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <button
                onClick={() => handleNavClick('audit')}
                className="btn-primary inline-flex items-center gap-2 px-5 py-2 rounded-full font-sans font-semibold text-[13px] whitespace-nowrap cursor-pointer"
              >
                <span>Get AI Visibility Audit</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <div className="flex lg:hidden items-center gap-2 shrink-0">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-11 h-11 flex items-center justify-center text-[#1d1d1f] rounded-full bg-[#f5f5f7] border border-[#d2d2d7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1d1d1f] cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#1d1d1f]" /> : <Menu className="w-5 h-5 text-[#1d1d1f]" />}
              </button>
            </div>

          </div>
        </header>

        {/* Mobile / Tablet Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ type: 'spring', damping: 26, stiffness: 280, mass: 0.9 }}
              style={{ transformOrigin: 'top center' }}
              className="lg:hidden mt-2 p-5 rounded-[20px] bg-white border border-[#d2d2d7] pointer-events-auto"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#d2d2d7] text-[12px] text-[#6e6e73]">
                <span className="uppercase tracking-wider font-semibold text-[#1d1d1f]">Navigation</span>
                <span className="uppercase tracking-wider text-[11px] font-mono text-[#6e6e73]">Citepoint</span>
              </div>

              <nav className="flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const isActive = currentRoute === link.route;
                  return (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.route)}
                      className={`text-left text-[13px] py-2.5 px-4 rounded-full transition-colors cursor-pointer active:scale-[0.98] ${
                        isActive
                          ? 'bg-[#f5f5f7] text-[#1d1d1f] font-semibold border border-[#d2d2d7]'
                          : 'text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#f5f5f7]'
                      }`}
                    >
                      {link.name}
                    </button>
                  );
                })}
              </nav>

              <div className="pt-4 mt-3 border-t border-[#d2d2d7]">
                <button
                  onClick={() => handleNavClick('audit')}
                  className="btn-primary w-full py-3 px-5 rounded-full inline-flex items-center justify-center gap-2 text-[13px] font-sans font-semibold cursor-pointer active:scale-[0.97]"
                >
                  <span>Get Your AI Visibility Audit</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
