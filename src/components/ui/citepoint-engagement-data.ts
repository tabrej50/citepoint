import { ScanSearch, Compass, Radar, type LucideIcon } from "lucide-react";
import type React from "react";

export type CitepointEngagementId =
  | "audit"
  | "foundation"
  | "ongoing";

export type CitepointEngagement = {
  id: CitepointEngagementId;
  number: string;
  name: string;
  label: string;
  description: string;
  scopeLabel: string;
  timeline: string;
  includes: string[];
  bestFor: string[];
  reassurance: string;
  ctaLabel: string;
  ctaHref: string;
  icon: LucideIcon;
  featured?: boolean;
};

export type CitepointEngagementSelectorProps = {
  defaultSelected?: CitepointEngagementId;
  onEngagementChange?: (engagement: CitepointEngagement) => void;
  className?: string;
  showDisclosure?: boolean;
  hideHeader?: boolean;
  onCtaClick?: (engagement: CitepointEngagement, e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const CITEPOINT_ENGAGEMENTS: CitepointEngagement[] = [
  {
    id: "audit",
    number: "01",
    name: "AI Visibility Audit",
    label: "Start here",
    description:
      "A focused diagnostic for teams that want to understand how their brand is currently positioned for AI-powered discovery—and which visibility gaps matter most.",
    scopeLabel: "Custom scope",
    timeline: "Typically 2–3 weeks",
    includes: [
      "AI search visibility baseline",
      "Buyer-question and prompt-cluster mapping",
      "Competitor appearance review",
      "Brand, content, authority, and technical-readiness assessment",
      "Citation-source opportunity analysis",
      "Priority action roadmap",
      "Executive-ready findings summary",
      "Audit debrief call"
    ],
    bestFor: [
      "Companies exploring AI visibility for the first time",
      "Marketing teams that need a clear baseline",
      "Founders who want evidence before committing to a longer program",
      "Teams deciding where GEO fits within SEO, content, PR, and demand generation"
    ],
    reassurance:
      "No fixed AI rankings. No vague reports. Just a clear baseline and a prioritized plan.",
    ctaLabel: "Request an AI Visibility Audit",
    ctaHref: "/ai-visibility-audit",
    icon: ScanSearch
  },
  {
    id: "foundation",
    number: "02",
    name: "Visibility Foundation",
    label: "Most popular",
    description:
      "A structured 90-day engagement for companies ready to turn their AI visibility gaps into a focused, measurable execution plan.",
    scopeLabel: "From custom scope",
    timeline: "Structured 90-day program",
    includes: [
      "Everything in the AI Visibility Audit",
      "Generative Engine Optimization strategy",
      "Priority service and buyer-question content plan",
      "Content optimization for key conversion pages",
      "Technical AI-readiness recommendations",
      "Schema and information-architecture guidance",
      "Citation and authority-building roadmap",
      "Monthly AI visibility monitoring",
      "Biweekly strategy sessions",
      "90-day execution roadmap and review"
    ],
    bestFor: [
      "B2B SaaS and technology companies",
      "Growth-stage firms entering competitive categories",
      "Brands absent, unclear, or underrepresented in AI-generated answers",
      "Companies with internal SEO or content teams that need a GEO strategy layer"
    ],
    reassurance:
      "Designed to build durable authority—not short-term AI-search tricks.",
    ctaLabel: "Build My Visibility Foundation",
    ctaHref: "/contact?engagement=visibility-foundation",
    icon: Compass,
    featured: true
  },
  {
    id: "ongoing",
    number: "03",
    name: "Ongoing AI Visibility",
    label: "Strategic partnership",
    description:
      "A retained strategic partnership for brands that want ongoing monitoring, content guidance, authority building, and optimization as AI platforms evolve.",
    scopeLabel: "Monthly custom engagement",
    timeline: "Ongoing monthly partnership",
    includes: [
      "Everything in Visibility Foundation",
      "Continuous AI platform monitoring",
      "Prompt-cluster expansion and competitor tracking",
      "Ongoing authority and citation strategy",
      "Content briefs and editorial guidance",
      "Technical GEO and knowledge-architecture support",
      "AI reputation and accuracy monitoring",
      "Quarterly strategic planning",
      "Executive reporting",
      "Dedicated strategic lead"
    ],
    bestFor: [
      "Established B2B brands",
      "Multi-product or multi-market companies",
      "Companies competing in high-consideration categories",
      "Teams needing continuous strategic support rather than a one-time project"
    ],
    reassurance:
      "Your program evolves as buyer behavior, AI platforms, and category competition change.",
    ctaLabel: "Book a Strategy Call",
    ctaHref: "/contact?engagement=ongoing-ai-visibility",
    icon: Radar
  }
];

export const TRANSPARENCY_DISCLOSURE =
  "No credible company can guarantee a fixed ranking, citation, placement, or recommendation in AI-generated answers. Citepoint identifies controllable opportunities, improves authority and citation readiness, and reports progress transparently.";
