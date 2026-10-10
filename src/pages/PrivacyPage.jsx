import React from 'react';
import { ShieldCheck } from 'lucide-react';
import PageHeader from '../components/PageHeader';

/**
 * Citepoint PrivacyPage
 * Apple-style minimal monochrome:
 * - Canvas: White (#FFFFFF) and Light Gray (#F5F5F7)
 * - Text: Near-black (#1D1D1F) and Gray (#6E6E73)
 * - Borders: Hairline (#D2D2D7)
 * - Zero gradients, zero shadows
 */
export default function PrivacyPage({ setCurrentRoute }) {
  const handleNav = (route) => {
    if (setCurrentRoute) setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white text-[#1d1d1f] font-sans selection:bg-[#1d1d1f] selection:text-white">
      {/* PAGE HERO */}
      <PageHeader
        eyebrow="LEGAL DISCLOSURE"
        title="Privacy Policy"
        intro="Last Updated: September 2026 • Citepoint Agency"
      />

      {/* POLICY CONTENT */}
      <section className="site-section bg-white">
        <div className="site-container">
          <div className="p-8 sm:p-12 space-y-10 body-text rounded-[24px] border border-[#d2d2d7] bg-[#f5f5f7] relative overflow-hidden">
            
            <div>
              <h2 className="text-xl font-medium text-[#1d1d1f] mb-3 leading-[1.2]">
                01. Overview & Commitment to Client Privacy
              </h2>
              <p>
                Citepoint (“Citepoint,” “we,” “us,” or “our”), operated by <strong className="text-[#1d1d1f]">Citepoint Technologies Pvt. Ltd.</strong>, respects the proprietary nature of your enterprise data. This Privacy Policy governs how we collect, process, and safeguard information collected through our website (<code className="text-[#1d1d1f] font-mono font-semibold">citepoint.io</code>), diagnostic visibility audits, and client advisory engagements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1d1d1f] mb-3 leading-[1.2]">
                02. Information We Collect
              </h2>
              <p className="mb-4">
                We collect information strictly necessary to evaluate your brand’s AI search visibility and deliver professional consulting services:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span><strong className="text-[#1d1d1f]">Contact Information:</strong> Full name, work email, job title, company name, and official website URL submitted via our audit request forms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span><strong className="text-[#1d1d1f]">Audit Input Data:</strong> Information you provide regarding your category, key competitors, target buyer questions, and evaluation priorities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span><strong className="text-[#1d1d1f]">Publicly Available Data:</strong> We inspect public web information, schema markups, knowledge graph entities, and generative model outputs referencing your brand.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span><strong className="text-[#1d1d1f]">Technical Telemetry:</strong> Standard non-identifying telemetry collected via privacy-compliant analytics to improve site performance.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1d1d1f] mb-3 leading-[1.2]">
                03. How We Use Audit Information
              </h2>
              <p>
                Data submitted in audit requests is used solely to research your company’s presence across ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews. We never sell your company data or contact details to third parties, data brokers, or advertising networks.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1d1d1f] mb-3 leading-[1.2]">
                04. Mutual Confidentiality & NDAs
              </h2>
              <p>
                We treat all client diagnostic findings, competitor matrices, and strategic roadmaps as strictly confidential business information. Mutual Non-Disclosure Agreements (NDAs) are executed prior to onboarding for formal advisory programs.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1d1d1f] mb-3 leading-[1.2]">
                05. International Data Transfers & Compliance
              </h2>
              <p>
                Citepoint delivers services globally to clients across the United States, Europe, the United Kingdom, India, and the UAE. We adhere to applicable global data protection principles, including GDPR and CCPA standards.
              </p>
            </div>

            <div className="pt-6 border-t border-[#d2d2d7]">
              <h2 className="text-xl font-medium text-[#1d1d1f] mb-3 leading-[1.2]">
                06. Contact Our Data Governance Team
              </h2>
              <p>
                For privacy inquiries, data deletion requests, or NDA submissions, please contact our team at: <code className="text-[#1d1d1f] font-mono font-semibold">privacy@citepoint.io</code>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
