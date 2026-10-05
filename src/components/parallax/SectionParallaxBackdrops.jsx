import React from 'react';
import {
  ParallaxBackdrop,
  ParallaxLayer,
  LiquidBlob,
  CitationDot,
  OrbitalRing,
  DotGrid,
  NetworkLines,
  GlassBubble,
} from './ParallaxBackdrop';
import { useParallaxSection } from '../../hooks/useParallaxController';

/**
 * 1. HERO PARALLAX BACKDROP
 * Layer 1 (0.08x-0.12x): Large pale-gold & pale-cyan blurred liquid fields + coordinate dot grid
 * Layer 2 (0.18x-0.25x): Abstract orbital citation rings, vector network lines, glass bubbles, gold signal points
 */
export function HeroParallaxBackdrop({ sectionRef }) {
  const { registerLayer, unregisterLayer } = useParallaxSection(sectionRef);

  return (
    <ParallaxBackdrop registerLayer={registerLayer} unregisterLayer={unregisterLayer}>
      {/* Far Background Plane (0.09x scroll, 8px cursor shift) */}
      <ParallaxLayer speed={0.09} cursorFactor={8} className="inset-0">
        <LiquidBlob
          color="gold"
          size="w-[620px] h-[620px]"
          opacity={0.24}
          className="absolute -top-32 right-[-5%] transform-gpu"
        />
        <LiquidBlob
          color="cyan"
          size="w-[540px] h-[540px]"
          opacity={0.18}
          className="absolute top-52 left-[-8%] transform-gpu"
        />
        <DotGrid spacing={32} opacity={0.05} />
      </ParallaxLayer>

      {/* Ambient Midground Plane (0.22x scroll, 10px cursor shift) */}
      <ParallaxLayer speed={0.22} cursorFactor={10} cursorXDir={-1} className="inset-0">
        <OrbitalRing
          size={440}
          dash
          color="gold"
          opacity={0.20}
          className="absolute -top-12 right-[12%]"
        />
        <NetworkLines
          color="cyan"
          opacity={0.22}
          className="absolute top-44 left-[10%] w-[380px]"
        />
        <CitationDot
          color="gold"
          size={7}
          className="absolute top-28 right-[22%]"
        />
        <CitationDot
          color="cyan"
          size={6}
          className="absolute top-64 left-[20%]"
        />
        <GlassBubble
          size={90}
          opacity={0.35}
          className="absolute top-[48%] right-[8%]"
        />
      </ParallaxLayer>
    </ParallaxBackdrop>
  );
}

/**
 * 2. THE ANSWER ECONOMY / PROBLEM SECTION BACKDROP
 * Dual opposing blurred liquid orbs (gold top-right, cyan bottom-left) + 3 floating gold citation points
 */
export function ProblemParallaxBackdrop({ sectionRef }) {
  const { registerLayer, unregisterLayer } = useParallaxSection(sectionRef);

  return (
    <ParallaxBackdrop registerLayer={registerLayer} unregisterLayer={unregisterLayer}>
      {/* Pale Gold Orb (Starts Upper Right, moves downward at 0.10x) */}
      <ParallaxLayer speed={0.10} direction={1} cursorFactor={8} className="inset-0">
        <LiquidBlob
          color="gold"
          size="w-[560px] h-[560px]"
          opacity={0.22}
          className="absolute -top-24 right-[-4%] transform-gpu"
        />
      </ParallaxLayer>

      {/* Pale Cyan Orb (Starts Lower Left, moves upward at 0.10x in opposite direction) */}
      <ParallaxLayer speed={0.10} direction={-1} cursorFactor={8} cursorXDir={-1} className="inset-0">
        <LiquidBlob
          color="cyan"
          size="w-[580px] h-[580px]"
          opacity={0.18}
          className="absolute bottom-[-10%] left-[-6%] transform-gpu"
        />
      </ParallaxLayer>

      {/* 3 Floating Gold Citation Points at independent speeds */}
      <ParallaxLayer speed={0.16} cursorFactor={8} className="inset-0">
        <CitationDot
          color="gold"
          size={6}
          className="absolute top-[18%] right-[32%]"
        />
      </ParallaxLayer>

      <ParallaxLayer speed={0.22} cursorFactor={10} cursorYDir={-1} className="inset-0">
        <CitationDot
          color="gold"
          size={7}
          className="absolute top-[52%] left-[46%]"
        />
      </ParallaxLayer>

      <ParallaxLayer speed={0.27} cursorFactor={10} cursorXDir={-1} className="inset-0">
        <CitationDot
          color="gold"
          size={5}
          className="absolute bottom-[20%] right-[16%]"
        />
      </ParallaxLayer>
    </ParallaxBackdrop>
  );
}

/**
 * 3. SERVICES BENTO GRID BACKDROP
 * Far background dot grid (0.08x), pale-gold soft radial glow left, pale-blue liquid glow right
 */
export function ServicesParallaxBackdrop({ sectionRef }) {
  const { registerLayer, unregisterLayer } = useParallaxSection(sectionRef);

  return (
    <ParallaxBackdrop registerLayer={registerLayer} unregisterLayer={unregisterLayer}>
      {/* Ultra-subtle Dot Grid at 0.08x */}
      <ParallaxLayer speed={0.08} cursorFactor={6} className="inset-0">
        <DotGrid spacing={30} opacity={0.04} color="#edfffe" />
      </ParallaxLayer>

      {/* Pale-Gold Soft Radial Glow (Left Side) */}
      <ParallaxLayer speed={0.11} direction={1} cursorFactor={7} className="inset-0">
        <LiquidBlob
          color="gold"
          size="w-[520px] h-[520px]"
          opacity={0.18}
          className="absolute top-[15%] left-[-6%]"
        />
      </ParallaxLayer>

      {/* Pale-Blue Liquid Wave / Glow (Opposite Right Side) */}
      <ParallaxLayer speed={0.13} direction={-1} cursorFactor={7} cursorXDir={-1} className="inset-0">
        <LiquidBlob
          color="cyan"
          size="w-[550px] h-[550px]"
          opacity={0.16}
          className="absolute bottom-[10%] right-[-5%]"
        />
        <GlassBubble
          size={75}
          opacity={0.3}
          className="absolute top-[40%] right-[8%]"
        />
      </ParallaxLayer>
    </ParallaxBackdrop>
  );
}

/**
 * 4. CITEPOINT METHODOLOGY & FLOW BAND BACKDROP
 * Connection line beneath process nodes (0.15x parallax shift) + ambient gold signal pulses
 */
export function MethodParallaxBackdrop({ sectionRef }) {
  const { registerLayer, unregisterLayer } = useParallaxSection(sectionRef);

  return (
    <ParallaxBackdrop registerLayer={registerLayer} unregisterLayer={unregisterLayer}>
      {/* Ambient background glow */}
      <ParallaxLayer speed={0.08} cursorFactor={6} className="inset-0">
        <LiquidBlob
          color="kelp"
          size="w-[650px] h-[650px]"
          opacity={0.4}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </ParallaxLayer>

      {/* Background connection vector line with 0.15x parallax shift */}
      <ParallaxLayer speed={0.15} cursorFactor={8} className="inset-0">
        <svg
          viewBox="0 0 1200 240"
          fill="none"
          className="w-full absolute top-[45%] left-0 pointer-events-none opacity-25"
        >
          <path
            d="M 50 120 C 300 60, 500 180, 800 90 T 1150 120"
            stroke="url(#methodGradient)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />
          <defs>
            <linearGradient id="methodGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4a555" />
              <stop offset="50%" stopColor="#cbfffc" />
              <stop offset="100%" stopColor="#d4a555" />
            </linearGradient>
          </defs>
        </svg>
        <CitationDot
          color="gold"
          size={6}
          className="absolute top-[44%] left-[28%]"
        />
        <CitationDot
          color="cyan"
          size={6}
          className="absolute top-[48%] right-[32%]"
        />
      </ParallaxLayer>
    </ParallaxBackdrop>
  );
}

/**
 * 5. AUDIT PREVIEW & CASE STUDIES BACKDROP
 * Layered depth scene: Back layer (0.12x), Middle chart/grid layer (0.20x), with stable HTML cards
 */
export function CaseStudiesParallaxBackdrop({ sectionRef }) {
  const { registerLayer, unregisterLayer } = useParallaxSection(sectionRef);

  return (
    <ParallaxBackdrop registerLayer={registerLayer} unregisterLayer={unregisterLayer}>
      {/* Back Dashboard Layer (0.12x) */}
      <ParallaxLayer speed={0.12} cursorFactor={6} className="inset-0">
        <LiquidBlob
          color="cyan"
          size="w-[500px] h-[500px]"
          opacity={0.15}
          className="absolute top-[10%] left-[5%]"
        />
        <LiquidBlob
          color="gold"
          size="w-[480px] h-[480px]"
          opacity={0.14}
          className="absolute bottom-[5%] right-[8%]"
        />
      </ParallaxLayer>

      {/* Middle Chart / Grid Layer (0.20x) */}
      <ParallaxLayer speed={0.20} cursorFactor={9} className="inset-0">
        <OrbitalRing
          size={380}
          dash
          color="cyan"
          opacity={0.15}
          className="absolute top-[25%] right-[15%]"
        />
        <CitationDot
          color="gold"
          size={6}
          className="absolute top-[35%] left-[22%]"
        />
        <CitationDot
          color="cyan"
          size={5}
          className="absolute bottom-[25%] right-[28%]"
        />
      </ParallaxLayer>
    </ParallaxBackdrop>
  );
}

/**
 * 6. WHY CITEPOINT (DIFFERENTIATION) BACKDROP
 * Subtle glass bubbles & soft refraction rings behind cards (0.10x-0.18x)
 */
export function WhyUsParallaxBackdrop({ sectionRef }) {
  const { registerLayer, unregisterLayer } = useParallaxSection(sectionRef);

  return (
    <ParallaxBackdrop registerLayer={registerLayer} unregisterLayer={unregisterLayer}>
      {/* Background Soft Liquid Glow (0.10x) */}
      <ParallaxLayer speed={0.10} cursorFactor={6} className="inset-0">
        <LiquidBlob
          color="gold"
          size="w-[520px] h-[520px]"
          opacity={0.16}
          className="absolute top-[20%] right-[10%]"
        />
        <LiquidBlob
          color="cyan"
          size="w-[460px] h-[460px]"
          opacity={0.14}
          className="absolute bottom-[10%] left-[12%]"
        />
      </ParallaxLayer>

      {/* Mid Layer Glass Bubbles & Refraction Rings (0.17x) */}
      <ParallaxLayer speed={0.17} cursorFactor={9} cursorXDir={-1} className="inset-0">
        <OrbitalRing
          size={340}
          dash
          color="gold"
          opacity={0.18}
          className="absolute top-[15%] left-[18%]"
        />
        <GlassBubble
          size={85}
          opacity={0.35}
          className="absolute top-[42%] right-[22%]"
        />
        <GlassBubble
          size={65}
          opacity={0.28}
          className="absolute bottom-[25%] left-[10%]"
        />
        <CitationDot
          color="gold"
          size={6}
          className="absolute top-[30%] right-[35%]"
        />
      </ParallaxLayer>
    </ParallaxBackdrop>
  );
}

/**
 * 7. ENGAGEMENTS / PRICING BACKDROP
 * Pale-gold and pale-blue liquid fields moving gently in opposing directions (0.12x)
 */
export function EngagementsParallaxBackdrop({ sectionRef }) {
  const { registerLayer, unregisterLayer } = useParallaxSection(sectionRef);

  return (
    <ParallaxBackdrop registerLayer={registerLayer} unregisterLayer={unregisterLayer}>
      {/* Pale-Gold Liquid Field (Moving down at 0.12x) */}
      <ParallaxLayer speed={0.12} direction={1} cursorFactor={7} className="inset-0">
        <LiquidBlob
          color="gold"
          size="w-[540px] h-[540px]"
          opacity={0.20}
          className="absolute -top-12 left-[15%]"
        />
      </ParallaxLayer>

      {/* Pale-Blue Liquid Field (Moving up in opposing direction at 0.12x) */}
      <ParallaxLayer speed={0.12} direction={-1} cursorFactor={7} cursorXDir={-1} className="inset-0">
        <LiquidBlob
          color="cyan"
          size="w-[560px] h-[560px]"
          opacity={0.18}
          className="absolute -bottom-16 right-[10%]"
        />
        <CitationDot
          color="gold"
          size={6}
          className="absolute top-[35%] right-[26%]"
        />
      </ParallaxLayer>
    </ParallaxBackdrop>
  );
}

/**
 * 8. FAQ SECTION BACKDROP
 * Kept mostly calm and still for readability (0.05x-0.08x)
 */
export function FaqParallaxBackdrop({ sectionRef }) {
  const { registerLayer, unregisterLayer } = useParallaxSection(sectionRef);

  return (
    <ParallaxBackdrop registerLayer={registerLayer} unregisterLayer={unregisterLayer}>
      {/* Pale Blue Blurred Shape at 0.06x */}
      <ParallaxLayer speed={0.06} cursorFactor={5} className="inset-0">
        <LiquidBlob
          color="cyan"
          size="w-[450px] h-[450px]"
          opacity={0.14}
          className="absolute top-[20%] right-[18%]"
        />
      </ParallaxLayer>

      {/* Pale Gold Citation Dot at 0.08x */}
      <ParallaxLayer speed={0.08} cursorFactor={6} className="inset-0">
        <CitationDot
          color="gold"
          size={6}
          className="absolute top-[40%] left-[16%]"
        />
      </ParallaxLayer>
    </ParallaxBackdrop>
  );
}

/**
 * 9. FINAL CTA BAND BACKDROP
 * Second-strongest parallax scene after hero: layered gold & cyan light fields + citation ring
 */
export function FinalCtaParallaxBackdrop({ sectionRef }) {
  const { registerLayer, unregisterLayer } = useParallaxSection(sectionRef);

  return (
    <ParallaxBackdrop registerLayer={registerLayer} unregisterLayer={unregisterLayer}>
      {/* Large Gold Light Field (0.11x) */}
      <ParallaxLayer speed={0.11} cursorFactor={8} className="inset-0">
        <LiquidBlob
          color="gold"
          size="w-[580px] h-[580px]"
          opacity={0.24}
          className="absolute -top-20 left-[20%]"
        />
      </ParallaxLayer>

      {/* Large Pale-Blue Liquid Light Field (0.18x) */}
      <ParallaxLayer speed={0.18} cursorFactor={10} cursorXDir={-1} className="inset-0">
        <LiquidBlob
          color="cyan"
          size="w-[520px] h-[520px]"
          opacity={0.20}
          className="absolute bottom-[-10%] right-[15%]"
        />
      </ParallaxLayer>

      {/* Faint Abstract Citation Ring (0.22x) */}
      <ParallaxLayer speed={0.22} cursorFactor={9} className="inset-0">
        <OrbitalRing
          size={420}
          dash
          color="gold"
          opacity={0.22}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <CitationDot
          color="cyan"
          size={7}
          className="absolute top-[32%] right-[28%]"
        />
      </ParallaxLayer>
    </ParallaxBackdrop>
  );
}

/**
 * 10. FOOTER PARALLAX BACKDROP
 * Minimal parallax only (0.06x) - zero interference with links or text
 */
export function FooterParallaxBackdrop({ sectionRef }) {
  const { registerLayer, unregisterLayer } = useParallaxSection(sectionRef);

  return (
    <ParallaxBackdrop registerLayer={registerLayer} unregisterLayer={unregisterLayer}>
      <ParallaxLayer speed={0.06} cursorFactor={4} className="inset-0">
        <LiquidBlob
          color="kelp"
          size="w-[500px] h-[500px]"
          opacity={0.25}
          className="absolute -top-16 right-[10%]"
        />
        <CitationDot
          color="gold"
          size={5}
          pulse={false}
          className="absolute top-[25%] left-[12%]"
        />
      </ParallaxLayer>
    </ParallaxBackdrop>
  );
}

/**
 * 11. INSIGHTS EDITORIAL GRID BACKDROP
 * Low-opacity editorial grid with muted gold circles and geometric forms (0.10x-0.16x)
 */
export function InsightsParallaxBackdrop({ sectionRef }) {
  const { registerLayer, unregisterLayer } = useParallaxSection(sectionRef);

  return (
    <ParallaxBackdrop registerLayer={registerLayer} unregisterLayer={unregisterLayer}>
      {/* Fine Editorial Grid at 0.08x */}
      <ParallaxLayer speed={0.08} cursorFactor={5} className="inset-0">
        <DotGrid spacing={36} opacity={0.04} color="#cbfffc" />
      </ParallaxLayer>

      {/* Muted Gold Circle & Pale-Blue Form at 0.14x */}
      <ParallaxLayer speed={0.14} cursorFactor={8} className="inset-0">
        <LiquidBlob
          color="gold"
          size="w-[450px] h-[450px]"
          opacity={0.16}
          className="absolute top-[18%] right-[8%]"
        />
        <OrbitalRing
          size={320}
          dash
          color="cyan"
          opacity={0.16}
          className="absolute bottom-[20%] left-[12%]"
        />
        <CitationDot
          color="gold"
          size={6}
          className="absolute top-[32%] left-[24%]"
        />
      </ParallaxLayer>
    </ParallaxBackdrop>
  );
}
