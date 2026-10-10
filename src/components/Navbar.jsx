import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

/**
 * Apple Design Navigation Bar
 * - Edge-to-edge sticky navigation bar
 * - Height: 64px desktop, 56px mobile
 * - Background: White (#FFFFFF) with 1px hairline border (#D2D2D7) at bottom
 * - Container: .apple-container (1200px max on 1440px+, 1080px on 1024-1439px, 40px margin on tablet, 20px on mobile)
 * - Layout: Logo on the left, 5 links in center, one 48px pill button on the right
 */
export default function Navbar({ currentRoute, setCurrentRoute }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', route: 'services' },
    { name: 'How It Works', route: 'how-it-works' },
    { name: 'Pricing', route: 'pricing' },
    { name: 'Results', route: 'case-studies' },
    { name: 'About', route: 'about' },
  ];

  const handleNavClick = (route) => {
    setMobileMenuOpen(false);
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

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full h-[56px] lg:h-[64px] bg-white/95 backdrop-blur-md border-b border-[#D2D2D7] transition-all">
      <div className="apple-container h-full flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F] rounded-full transition-opacity duration-150 hover:opacity-85 py-1"
          aria-label="Citepoint Home"
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/brand/logo-light-transparent.png`}
            alt="Citepoint — Get Cited. Get Chosen."
            className="h-6 sm:h-7 lg:h-8 w-auto object-contain"
          />
        </button>

        {/* Center: 5 Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = currentRoute === link.route;
            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.route)}
                className={`text-[14px] font-sans transition-colors duration-150 cursor-pointer bg-transparent border-none select-none ${
                  isActive
                    ? 'text-[#1D1D1F] font-semibold'
                    : 'text-[#6E6E73] hover:text-[#1D1D1F] font-medium'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Right: One 48px Pill Button */}
        <div className="hidden lg:flex items-center shrink-0">
          <button
            onClick={() => handleNavClick('audit')}
            className="btn-primary"
          >
            <span>Get AI Visibility Audit</span>
            <ArrowRight className="w-4 h-4 ml-2 text-white" />
          </button>
        </div>

        {/* Mobile / Tablet Menu Button (Height matched to 56px navbar) */}
        <div className="flex lg:hidden items-center shrink-0">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center text-[#1D1D1F] rounded-full hover:bg-[#F5F5F7] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F] cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#1D1D1F]" /> : <Menu className="w-5 h-5 text-[#1D1D1F]" />}
          </button>
        </div>

      </div>

      {/* Mobile / Tablet Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="lg:hidden absolute top-[56px] left-0 right-0 bg-white border-b border-[#D2D2D7] shadow-none px-5 py-6"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = currentRoute === link.route;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.route)}
                    className={`text-left text-[15px] py-3 px-4 rounded-xl transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#F5F5F7] text-[#1D1D1F] font-semibold'
                        : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

            <div className="pt-4 mt-3 border-t border-[#D2D2D7]">
              <button
                onClick={() => handleNavClick('audit')}
                className="btn-primary w-full"
              >
                <span>Get AI Visibility Audit</span>
                <ArrowRight className="w-4 h-4 ml-2 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
