import { useEffect, useRef, useState, createContext, useContext } from 'react';

// Context for section-level layer registration
export const ParallaxContext = createContext(null);

class ParallaxEngine {
  constructor() {
    this.sections = new Set();
    this.rafId = null;
    this.isRunning = false;
    this.isTabVisible = true;
    this.isReducedMotion = false;
    this.isFinePointer = false;

    // Smoothed coordinates
    this.targetMouse = { x: 0, y: 0 };
    this.currentMouse = { x: 0, y: 0 };

    this.windowHeight = typeof window !== 'undefined' ? window.innerHeight : 900;
    this.windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1440;

    this.init();
  }

  init() {
    if (typeof window === 'undefined') return;

    // Detect fine pointer (mouse/trackpad, not touch)
    const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    this.isFinePointer = pointerQuery.matches;
    pointerQuery.addEventListener?.('change', (e) => {
      this.isFinePointer = e.matches;
    });

    // Detect reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.isReducedMotion = motionQuery.matches;
    motionQuery.addEventListener?.('change', (e) => {
      this.isReducedMotion = e.matches;
      if (this.isReducedMotion) {
        this.resetAllTransforms();
      }
    });

    // Tab visibility
    document.addEventListener('visibilitychange', () => {
      this.isTabVisible = !document.hidden;
      if (this.isTabVisible) {
        this.startLoop();
      } else {
        this.stopLoop();
      }
    });

    // Mouse move on fine pointer devices only
    window.addEventListener(
      'mousemove',
      (e) => {
        if (!this.isFinePointer || this.isReducedMotion) return;
        // Normalize coordinates to [-1, 1]
        this.targetMouse.x = (e.clientX / this.windowWidth) * 2 - 1;
        this.targetMouse.y = (e.clientY / this.windowHeight) * 2 - 1;
      },
      { passive: true }
    );

    // Scroll listener to resume RAF loop if idle
    window.addEventListener(
      'scroll',
      () => {
        if (this.sections.size > 0 && !this.isRunning && this.isTabVisible && !this.isReducedMotion) {
          this.startLoop();
        }
      },
      { passive: true }
    );

    // Window resize
    window.addEventListener(
      'resize',
      () => {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
        this.needsMeasure = true;
      },
      { passive: true }
    );
  }

  registerSection(section) {
    this.sections.add(section);
    this.needsMeasure = true;
    this.startLoop();
  }

  unregisterSection(section) {
    this.sections.delete(section);
    if (this.sections.size === 0) {
      this.stopLoop();
    }
  }

  startLoop() {
    if (this.isRunning || !this.isTabVisible) return;
    this.isRunning = true;
    this.tick();
  }

  stopLoop() {
    this.isRunning = false;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  resetAllTransforms() {
    this.sections.forEach((section) => {
      section.layers.forEach((layer) => {
        if (layer.el) {
          layer.el.style.transform = 'translate3d(0px, 0px, 0px)';
        }
      });
    });
  }

  tick = () => {
    if (!this.isRunning) return;

    if (this.isReducedMotion) {
      this.resetAllTransforms();
      this.stopLoop();
      return;
    }

    // Lerp mouse coordinates with smooth easing (factor ~0.08)
    const lerpFactor = 0.08;
    this.currentMouse.x += (this.targetMouse.x - this.currentMouse.x) * lerpFactor;
    this.currentMouse.y += (this.targetMouse.y - this.currentMouse.y) * lerpFactor;

    const vh = this.windowHeight;
    const vhCenter = vh * 0.5;
    const scrollY = window.scrollY;

    // Process each section
    this.sections.forEach((section) => {
      if (!section.isVisible || !section.containerEl) return;

      if (section.topOffset === undefined || this.needsMeasure) {
        const rect = section.containerEl.getBoundingClientRect();
        section.topOffset = rect.top + scrollY;
        section.cachedHeight = rect.height;
      }

      const currentTop = section.topOffset - scrollY;
      // Distance from section center to viewport center
      const sectionCenter = currentTop + (section.cachedHeight || 0) * 0.5;
      const distanceFromCenter = sectionCenter - vhCenter;

      section.layers.forEach((layer) => {
        if (!layer.el) return;

        // Scroll parallax translation
        // Positive direction moves along with scroll (slower than foreground)
        const speed = layer.speed ?? 0.12;
        const dir = layer.direction ?? 1;
        const scrollOffsetY = -distanceFromCenter * speed * dir;

        // Pointer cursor shift (desktop fine pointer only)
        let cursorOffsetX = 0;
        let cursorOffsetY = 0;
        if (this.isFinePointer && layer.cursorFactor) {
          cursorOffsetX = this.currentMouse.x * layer.cursorFactor * (layer.cursorXDir ?? 1);
          cursorOffsetY = this.currentMouse.y * layer.cursorFactor * (layer.cursorYDir ?? 1);
        }

        const totalX = cursorOffsetX;
        const totalY = scrollOffsetY + cursorOffsetY;

        // Skip DOM update if transform delta is imperceptible (< 0.04px)
        if (
          layer.lastX !== undefined &&
          Math.abs(totalX - layer.lastX) < 0.04 &&
          Math.abs(totalY - layer.lastY) < 0.04
        ) {
          return;
        }

        layer.lastX = totalX;
        layer.lastY = totalY;

        // Apply hardware-accelerated 3D transform
        layer.el.style.transform = `translate3d(${totalX.toFixed(2)}px, ${totalY.toFixed(2)}px, 0)`;
      });
    });

    this.needsMeasure = false;
    this.rafId = requestAnimationFrame(this.tick);
  };
}

// Singleton engine instance
export const parallaxEngine = typeof window !== 'undefined' ? new ParallaxEngine() : null;

/**
 * Hook to manage a section's parallax lifecycle
 */
export function useParallaxSection(sectionRef) {
  const sectionEntryRef = useRef({
    containerEl: null,
    layers: [],
    isVisible: true,
  });

  useEffect(() => {
    if (!parallaxEngine || !sectionRef.current) return;

    const entry = sectionEntryRef.current;
    entry.containerEl = sectionRef.current;

    const observer = new IntersectionObserver(
      ([record]) => {
        entry.isVisible = record.isIntersecting;
        if (record.isIntersecting && !parallaxEngine.isRunning && !parallaxEngine.isReducedMotion) {
          parallaxEngine.startLoop();
        }
      },
      {
        root: null,
        rootMargin: '160px 0px 160px 0px', // Pre-activate slightly before entering viewport
        threshold: 0,
      }
    );

    observer.observe(sectionRef.current);
    parallaxEngine.registerSection(entry);

    return () => {
      observer.disconnect();
      parallaxEngine.unregisterSection(entry);
    };
  }, [sectionRef]);

  const registerLayer = (layerConfig) => {
    const entry = sectionEntryRef.current;
    if (entry) {
      // Avoid duplicate registrations
      const exists = entry.layers.some((l) => l.el === layerConfig.el);
      if (!exists) {
        entry.layers.push(layerConfig);
      }
    }
  };

  const unregisterLayer = (layerEl) => {
    const entry = sectionEntryRef.current;
    if (entry) {
      entry.layers = entry.layers.filter((l) => l.el !== layerEl);
    }
  };

  return { registerLayer, unregisterLayer };
}
