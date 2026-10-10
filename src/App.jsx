import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import ServicesPage from './pages/ServicesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import AboutPage from './pages/AboutPage';
import InsightsPage from './pages/InsightsPage';
import ContactPage from './pages/ContactPage';
import AuditPage from './pages/AuditPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import LiquidGlassFilter from './components/LiquidGlassFilter';

// Apple Fluid Interface: Unified elevated cross-fade with spatial continuity
// Animates strictly GPU-compositor properties (opacity, scale, micro-y).
// Eliminates expensive full-page raster blur filters.
const APPLE_PAGE_TRANSITION = {
  initial: { opacity: 0, scale: 0.992, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.996, y: -8 },
};


export default function App() {
  // Sync with window.location.pathname or hash or fallback to 'home'
  const getInitialRoute = () => {
    const rawPath = window.location.pathname.replace(/^\/+/, '').replace(/\/+$/, '');
    const rawHash = window.location.hash.replace('#/', '').replace('#', '');
    const validRoutes = [
      'home',
      'services',
      'how-it-works',
      'pricing',
      'case-studies',
      'about',
      'insights',
      'contact',
      'audit',
      'privacy',
      'terms'
    ];
    if (rawPath && rawPath !== 'index.html' && validRoutes.includes(rawPath)) {
      return rawPath;
    }
    if (rawHash && validRoutes.includes(rawHash)) {
      return rawHash;
    }
    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);

  // Initialize Lenis Momentum Smooth Scrolling
  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      infinite: false,
    });

    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      const route = getInitialRoute();
      setCurrentRoute(route);
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentRoute]);

  const navigateTo = (route) => {
    if (route === 'home') {
      window.history.pushState(null, '', '/');
    } else {
      window.history.pushState(null, '', `/${route}`);
    }
    window.location.hash = `#/${route}`;
    setCurrentRoute(route);
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 0.8 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Track pageview / navigation event
    if (window.gtag) {
      window.gtag('event', 'page_view', { page_path: `/${route}` });
    }
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'services':
        return <ServicesPage setCurrentRoute={navigateTo} />;
      case 'how-it-works':
        return <HowItWorksPage setCurrentRoute={navigateTo} />;
      case 'pricing':
        return <PricingPage setCurrentRoute={navigateTo} />;
      case 'case-studies':
        return <CaseStudiesPage setCurrentRoute={navigateTo} />;
      case 'about':
        return <AboutPage setCurrentRoute={navigateTo} />;
      case 'insights':
        return <InsightsPage setCurrentRoute={navigateTo} />;
      case 'contact':
        return <ContactPage setCurrentRoute={navigateTo} />;
      case 'audit':
        return <AuditPage setCurrentRoute={navigateTo} />;
      case 'privacy':
        return <PrivacyPage setCurrentRoute={navigateTo} />;
      case 'terms':
        return <TermsPage setCurrentRoute={navigateTo} />;
      case 'home':
      default:
        return <HomePage setCurrentRoute={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#1d1d1f] font-sans selection:bg-[#1d1d1f] selection:text-white relative">
      <LiquidGlassFilter />

      {/* Sticky / Transparent Floating Header Navbar */}
      <Navbar currentRoute={currentRoute} setCurrentRoute={navigateTo} />

      {/* Main Page Body with distinct sliding transitions per page */}
      <main className="flex-grow relative z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoute}
            initial={APPLE_PAGE_TRANSITION.initial}
            animate={APPLE_PAGE_TRANSITION.animate}
            exit={APPLE_PAGE_TRANSITION.exit}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Deep Midnight Navy Footer */}
      <Footer setCurrentRoute={navigateTo} />
    </div>
  );
}
