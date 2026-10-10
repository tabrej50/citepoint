import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SlideReveal } from './SlideReveal';

/**
 * Shared PageHeader Component for Inner Pages
 * - Clearance: padding-top 144px desktop / 120px mobile (nav height 64/56px + top 16px + 64px)
 * - Container: shared site-container (1200px max, centered)
 * - Alignment: Left-aligned starting at container's left edge
 * - Eyebrow: 12px, 500 weight, uppercase, letter-spacing 0.08em, #6E6E73, 16px margin bottom, no pill border
 * - H1: clamp(40px, 6vw, 72px), 600 weight, line-height 1.08, letter-spacing -0.03em, max-w-[900px], text-wrap: balance
 * - Intro: 21px desktop / 18px mobile, line-height 1.45, max-w-[680px], #6E6E73, 16px spacing below headline
 * - Buttons: At most 1 primary + 1 secondary, 48px tall, 24px padding, 16px gap, 32px spacing below intro, full width & stacked on mobile
 */
export default function PageHeader({
  eyebrow,
  title,
  intro,
  primaryButton,
  secondaryButton,
  children,
  className = '',
}) {
  return (
    <section className={`page-header border-b border-[var(--color-border-light)] bg-white relative overflow-hidden ${className}`}>
      <div className="site-container relative z-10">
        <div className="max-w-[900px] text-left">
          <SlideReveal direction="down" distance={15} duration={0.5}>
            <h1 className="page-title text-[40px] sm:text-5xl md:text-6xl lg:text-[72px] font-semibold text-[var(--color-text-primary)] leading-[1.08] tracking-[-0.03em] [text-wrap:balance] text-left m-0">
              {title}
            </h1>
          </SlideReveal>

          {intro && (
            <SlideReveal direction="up" distance={15} duration={0.5} delay={0.08}>
              <p className="intro-text mt-4 text-[18px] lg:text-[21px] leading-[1.45] text-[var(--color-text-secondary)] max-w-[680px] text-left">
                {intro}
              </p>
            </SlideReveal>
          )}

          {(primaryButton || secondaryButton) && (
            <SlideReveal direction="up" distance={15} duration={0.5} delay={0.14}>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 hero-buttons-container">
                {primaryButton && (
                  <button
                    type="button"
                    onClick={primaryButton.onClick}
                    className="btn-primary"
                  >
                    <span>{primaryButton.text}</span>
                    {primaryButton.icon !== false && (
                      <ArrowRight className="w-4 h-4 text-[var(--color-accent-text)]" />
                    )}
                  </button>
                )}
                {secondaryButton && (
                  <button
                    type="button"
                    onClick={secondaryButton.onClick}
                    className="btn-secondary"
                  >
                    <span>{secondaryButton.text}</span>
                  </button>
                )}
              </div>
            </SlideReveal>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
