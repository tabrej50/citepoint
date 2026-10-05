import { useState, useEffect, useRef, type KeyboardEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Check,
  ArrowUpRight,
  Clock3,
  UsersRound,
  ShieldCheck,
  Info,
  Sparkles,
} from "lucide-react";
import {
  CITEPOINT_ENGAGEMENTS,
  TRANSPARENCY_DISCLOSURE,
  type CitepointEngagement,
  type CitepointEngagementId,
  type CitepointEngagementSelectorProps,
} from "./citepoint-engagement-data";
import { cn } from "@/lib/utils";

export default function CitepointEngagementSelector({
  defaultSelected = "foundation",
  onEngagementChange,
  className,
  showDisclosure = true,
  hideHeader = false,
  onCtaClick,
}: CitepointEngagementSelectorProps) {
  const [selectedId, setSelectedId] = useState<CitepointEngagementId>(defaultSelected);
  const [reducedMotion, setReducedMotion] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setReducedMotion(e.matches);
      };
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  const handleSelect = (engagement: CitepointEngagement, focusIdx?: number) => {
    setSelectedId(engagement.id);
    onEngagementChange?.(engagement);
    if (typeof focusIdx === "number" && cardRefs.current[focusIdx]) {
      cardRefs.current[focusIdx]?.focus();
    }
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLDivElement>,
    currentIndex: number
  ) => {
    let nextIndex = -1;

    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        e.preventDefault();
        nextIndex = (currentIndex + 1) % CITEPOINT_ENGAGEMENTS.length;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        e.preventDefault();
        nextIndex =
          (currentIndex - 1 + CITEPOINT_ENGAGEMENTS.length) %
          CITEPOINT_ENGAGEMENTS.length;
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        handleSelect(CITEPOINT_ENGAGEMENTS[currentIndex], currentIndex);
        return;
      default:
        return;
    }

    if (nextIndex !== -1) {
      const nextEngagement = CITEPOINT_ENGAGEMENTS[nextIndex];
      handleSelect(nextEngagement, nextIndex);
    }
  };

  return (
    <section
      aria-labelledby="citepoint-engagement-heading"
      className={cn("w-full max-w-[1040px] mx-auto font-sans", className)}
    >
      {/* 1. Section Header (Optional) */}
      {!hideHeader && (
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#5e6ad2]/40 bg-[#141516]/30 text-[11px] font-sans font-medium tracking-[0.16em] uppercase text-[#828fff] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#828fff]" aria-hidden="true" />
            <span>WAYS TO WORK TOGETHER</span>
          </div>
          <h2
            id="citepoint-engagement-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-normal text-white tracking-tight mb-4"
          >
            Start with clarity. Build toward visibility.
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#8a8f98] leading-relaxed">
            Every Citepoint engagement begins with your market, buyer questions,
            existing authority, and AI-search opportunity—not a one-size-fits-all
            package.
          </p>
        </div>
      )}

      {/* 2. Interactive Radio Group with Progressive Disclosure */}
      <div
        role="radiogroup"
        aria-label="Choose a Citepoint engagement"
        className="space-y-4"
      >
        {CITEPOINT_ENGAGEMENTS.map((engagement, idx) => {
          const isSelected = selectedId === engagement.id;
          const Icon = engagement.icon;

          return (
            <div
              key={engagement.id}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              role="radio"
              aria-checked={isSelected}
              tabIndex={isSelected ? 0 : -1}
              aria-labelledby={`engagement-title-${engagement.id}`}
              aria-describedby={`engagement-desc-${engagement.id}`}
              onClick={() => handleSelect(engagement)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={cn(
                "group relative rounded-2xl transition-all duration-200 cursor-pointer outline-none",
                "border backdrop-blur-md select-none",
                "focus-visible:ring-2 focus-visible:ring-[#828fff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#010102]",
                isSelected
                  ? "bg-[#0f1011]/95 border-[#5e6ad2] shadow-[0_8px_32px_-8px_rgba(0,130,124,0.3)] ring-1 ring-[#5e6ad2]/50"
                  : "bg-[#0f1011]/60 border-white/10 hover:border-white/20 hover:bg-[#0f1011]/80"
              )}
            >
              {/* Highlight Menu Meniscus & Glow */}
              {isSelected && (
                <div
                  className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#828fff]/60 to-transparent pointer-events-none rounded-t-2xl"
                  aria-hidden="true"
                />
              )}

              {/* Collapsed Header / Radio Row */}
              <div className="p-5 sm:p-6 md:p-7">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Left: Radio Control + Number + Name + Label */}
                  <div className="flex items-start gap-3.5 sm:gap-4 flex-1 min-w-0">
                    {/* Accessible Radio Selector Control */}
                    <div
                      className={cn(
                        "mt-1 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-200",
                        isSelected
                          ? "border-[#5e6ad2] bg-[#141516]"
                          : "border-white/30 group-hover:border-white/50 bg-white/5"
                      )}
                      aria-hidden="true"
                    >
                      {isSelected && (
                        <motion.span
                          initial={reducedMotion ? { scale: 1 } : { scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="w-2.5 h-2.5 rounded-full bg-[#828fff] shadow-[0_0_8px_#828fff]"
                        />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                        <span className="font-mono text-xs text-[#5e6ad2] font-semibold tracking-wider">
                          [{engagement.number}]
                        </span>
                        <h3
                          id={`engagement-title-${engagement.id}`}
                          className={cn(
                            "text-base sm:text-lg md:text-xl font-medium tracking-tight transition-colors",
                            isSelected ? "text-white" : "text-white/90 group-hover:text-white"
                          )}
                        >
                          {engagement.name}
                        </h3>

                        {/* Engagement Stage Label */}
                        <span
                          className={cn(
                            "text-[11px] font-sans uppercase tracking-[0.1em] px-2.5 py-0.5 rounded-full border",
                            engagement.featured
                              ? "bg-[#5e6ad2]/20 border-[#5e6ad2]/50 text-[#828fff] font-medium"
                              : "bg-white/5 border-white/10 text-[#8a8f98]"
                          )}
                        >
                          {engagement.label}
                        </span>
                      </div>

                      {/* One-Sentence Description */}
                      <p
                        id={`engagement-desc-${engagement.id}`}
                        className="text-xs sm:text-sm text-[#8a8f98] leading-relaxed max-w-2xl"
                      >
                        {engagement.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Scope Label & Timeline Badge */}
                  <div className="flex flex-wrap md:flex-col items-start md:items-end justify-between md:justify-center gap-2 pl-8 md:pl-0 shrink-0 border-t border-white/5 md:border-none pt-3 md:pt-0">
                    <span className="text-xs font-mono font-medium text-white/95 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                      {engagement.scopeLabel}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#8a8f98]">
                      <Clock3 className="w-3.5 h-3.5 text-[#5e6ad2]" aria-hidden="true" />
                      <span>{engagement.timeline}</span>
                    </span>
                  </div>
                </div>

                {/* 3. Expanded Selected-Item Details with Motion */}
                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.div
                      id={`engagement-panel-${engagement.id}`}
                      role="region"
                      aria-labelledby={`engagement-title-${engagement.id}`}
                      initial={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={reducedMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                      exit={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 sm:pt-8 mt-5 sm:mt-6 border-t border-white/10">
                        {/* Two Columns: What's Included & Best For */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                          {/* Deliverables Column */}
                          <div>
                            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-medium text-[#828fff] mb-3.5">
                              <Check className="w-4 h-4 text-[#5e6ad2]" aria-hidden="true" />
                              <h4 className="text-xs uppercase tracking-[0.14em] font-medium text-[#828fff]">What’s included</h4>
                            </div>
                            <ul className="space-y-2.5">
                              {engagement.includes.map((deliverable) => (
                                <li
                                  key={deliverable}
                                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[#8a8f98] leading-snug"
                                >
                                  <span
                                    className="w-1.5 h-1.5 rounded-full bg-[#5e6ad2] shrink-0 mt-1.5"
                                    aria-hidden="true"
                                  />
                                  <span>{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Best For Column */}
                          <div>
                            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-medium text-[#828fff] mb-3.5">
                              <UsersRound className="w-4 h-4 text-[#5e6ad2]" aria-hidden="true" />
                              <h4 className="text-xs uppercase tracking-[0.14em] font-medium text-[#828fff]">Best for</h4>
                            </div>
                            <ul className="space-y-2.5">
                              {engagement.bestFor.map((profile) => (
                                <li
                                  key={profile}
                                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[#8a8f98] leading-snug"
                                >
                                  <span
                                    className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-1.5"
                                    aria-hidden="true"
                                  />
                                  <span>{profile}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Reassurance Callout Box */}
                        <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start sm:items-center gap-3">
                          <ShieldCheck
                            className="w-4 h-4 sm:w-5 sm:h-5 text-[#828fff] shrink-0 mt-0.5 sm:mt-0"
                            aria-hidden="true"
                          />
                          <p className="text-xs sm:text-sm text-[#8a8f98]/95 leading-relaxed">
                            {engagement.reassurance}
                          </p>
                        </div>

                        {/* 4. Action CTA Button */}
                        <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                          <div className="text-xs text-[#8a8f98]/80 flex items-center gap-2">
                            <Icon className="w-4 h-4 text-[#5e6ad2]" aria-hidden="true" />
                            <span>
                              {engagement.scopeLabel} · {engagement.timeline}
                            </span>
                          </div>

                          <a
                            href={engagement.ctaHref}
                            onClick={(e) => {
                              e.stopPropagation();
                              onCtaClick?.(engagement, e);
                            }}
                            className={cn(
                              "btn-v2-white btn-white inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full",
                              "text-xs sm:text-sm font-medium tracking-wide uppercase transition-all duration-200 cursor-pointer shadow-md text-white text-center"
                            )}
                          >
                            <span className="relative z-10 text-white font-medium">
                              {engagement.ctaLabel}
                            </span>
                            <ArrowUpRight
                              className="w-4 h-4 relative z-10 text-white"
                              aria-hidden="true"
                            />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 5. Crawlable Semantic Content Fallback for SEO & Non-JS Bots */}
                {!isSelected && (
                  <div className="sr-only">
                    <h4>What’s included</h4>
                    <ul>
                      {engagement.includes.map((deliverable) => (
                        <li key={deliverable}>{deliverable}</li>
                      ))}
                    </ul>
                    <h4>Best for</h4>
                    <ul>
                      {engagement.bestFor.map((profile) => (
                        <li key={profile}>{profile}</li>
                      ))}
                    </ul>
                    <p>{engagement.reassurance}</p>
                    <a href={engagement.ctaHref}>{engagement.ctaLabel}</a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 5. Optional Transparency Disclosure Note */}
      {showDisclosure && (
        <aside
          aria-label="Citepoint Engagement Transparency Statement"
          className="mt-8 flex items-start gap-3 p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.02] text-xs sm:text-sm text-[#8a8f98]/90 leading-relaxed"
        >
          <Info
            className="w-4 h-4 sm:w-5 sm:h-5 text-[#828fff] shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p>{TRANSPARENCY_DISCLOSURE}</p>
        </aside>
      )}
    </section>
  );
}
