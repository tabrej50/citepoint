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

// Distinct sliding transitions tailored to each page type
const PAGE_TRANSITIONS = {
  home: {
    initial: { opacity: 0, y: 28, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, y: -24, filter: 'blur(4px)' },
  },
  services: {
    initial: { opacity: 0, x: 48, filter: 'blur(4px)' },
    animate: { opacity: 1, x: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, x: -40, filter: 'blur(4px)' },
  },
  'how-it-works': {
    initial: { opacity: 0, x: -48, filter: 'blur(4px)' },
    animate: { opacity: 1, x: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, x: 40, filter: 'blur(4px)' },
  },
  pricing: {
    initial: { opacity: 0, y: 36, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -28, scale: 0.98 },
  },
  'case-studies': {
    initial: { opacity: 0, x: 38, y: 22, filter: 'blur(4px)' },
    animate: { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, x: -35, y: -20, filter: 'blur(4px)' },
  },
  about: {
    initial: { opacity: 0, x: -38, y: 20, filter: 'blur(4px)' },
    animate: { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, x: 35, y: -20, filter: 'blur(4px)' },
  },
  insights: {
    initial: { opacity: 0, y: -26, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, y: 24, filter: 'blur(4px)' },
  },
  audit: {
    initial: { opacity: 0, y: 38, scale: 0.99 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -30, scale: 0.99 },
  },
  contact: {
    initial: { opacity: 0, x: 38, filter: 'blur(4px)' },
    animate: { opacity: 1, x: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, x: -35, filter: 'blur(4px)' },
  },
  privacy: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  terms: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
};

export default function App() {
  // Sync with window.location.hash or fallback to 'home'
  const getInitialRoute = () => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
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
    return validRoutes.includes(hash) ? hash : 'home';
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
    const handleHashChange = () => {
      const route = getInitialRoute();
      setCurrentRoute(route);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
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
    <div className="min-h-screen flex flex-col bg-[#010102] text-[#f7f8f8] font-sans selection:bg-[#5e6ad2]/30 selection:text-white relative">
      <LiquidGlassFilter />

      {/* Sticky / Transparent Floating Header Navbar */}
      <Navbar currentRoute={currentRoute} setCurrentRoute={navigateTo} />

      {/* Main Page Body with distinct sliding transitions per page */}
      <main className="flex-grow relative z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoute}
            initial={PAGE_TRANSITIONS[currentRoute]?.initial || PAGE_TRANSITIONS.home.initial}
            animate={PAGE_TRANSITIONS[currentRoute]?.animate || PAGE_TRANSITIONS.home.animate}
            exit={PAGE_TRANSITIONS[currentRoute]?.exit || PAGE_TRANSITIONS.home.exit}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
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
