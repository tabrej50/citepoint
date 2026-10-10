import React from 'react';
import PageHeader from '../components/PageHeader';

/**
 * Citepoint TermsPage
 * Apple-style minimal monochrome:
 * - Canvas: White (#FFFFFF) and Light Gray (#F5F5F7)
 * - Text: Near-black (#1D1D1F) and Gray (#6E6E73)
 * - Borders: Hairline (#D2D2D7)
 * - Zero gradients, zero shadows
 */
export default function TermsPage({ setCurrentRoute }) {
  const handleNav = (route) => {
    if (setCurrentRoute) setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white text-[#1d1d1f] font-sans selection:bg-[#1d1d1f] selection:text-white">
      {/* PAGE HERO */}
      <PageHeader
        eyebrow="TERMS OF ENGAGEMENT"
        title="Terms of Service"
        intro="Last Updated: September 2026 • Citepoint Agency"
      />

      {/* TERMS CONTENT */}
      <section className="site-section bg-white">
        <div className="site-container">
          <div className="p-8 sm:p-12 space-y-10 body-text rounded-[24px] border border-[#d2d2d7] bg-[#f5f5f7] relative overflow-hidden">
            
            <div>
              <h2 className="text-xl font-medium text-[#1d1d1f] mb-3 leading-[1.2]">
                01. Acceptance of Terms
              </h2>
              <p>
                By accessing this website (<code className="text-[#1d1d1f] font-mono font-semibold">citepoint.io</code>) or engaging Citepoint (operated by <strong className="text-[#1d1d1f]">Citepoint Technologies Pvt. Ltd.</strong>) for advisory, diagnostic auditing, or Generative Engine Optimization (GEO) services, you agree to comply with and be bound by these Terms of Service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1d1d1f] mb-3 leading-[1.2]">
                02. Scope of Services & Independent Advisory
              </h2>
              <p>
                Citepoint provides strategic, technical, and analytical consulting services designed to improve client brand discoverability and citation frequency across generative AI search platforms. We are an independent consultancy and are not affiliated with, sponsored by, or endorsed by OpenAI, Anthropic, Google, Microsoft, or Perplexity.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1d1d1f] mb-3 leading-[1.2]">
                03. Disclaimer Regarding Third-Party AI Models
              </h2>
              <p className="mb-4">
                Third-party generative AI models (including ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews) are operated by autonomous third parties. Their model weights, training corpora, retrieval algorithms, and output filters evolve unpredictably.
              </p>
              <div className="p-5 rounded-[16px] bg-white border border-[#d2d2d7] text-xs text-[#6e6e73] leading-relaxed">
                <strong className="text-[#1d1d1f] block mb-1 font-semibold">Explicit Agency Disclaimer:</strong>
                Citepoint does not warrant or guarantee fixed rankings, guaranteed #1 recommendations, or permanent inclusion in any third-party synthetic response. All services focus on controllable variables: data integrity, citation authority, structured schemas, and empirical measurement.
              </div>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1d1d1f] mb-3 leading-[1.2]">
                04. Intellectual Property
              </h2>
              <p>
                All custom diagnostic audits, strategy playbooks, and deliverables prepared specifically for a client become client property upon full payment of fees. Citepoint retains ownership of its proprietary methodologies, evaluation software, prompt cluster libraries, and analytical frameworks.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1d1d1f] mb-3 leading-[1.2]">
                05. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, Citepoint shall not be liable for any indirect, incidental, consequential, or punitive damages resulting from algorithmic changes, model deprecations, or sudden shifts in third-party search indexes.
              </p>
            </div>

            <div className="pt-6 border-t border-[#d2d2d7]">
              <h2 className="text-xl font-medium text-[#1d1d1f] mb-3 leading-[1.2]">
                06. Governing Law & Arbitration
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with standard commercial arbitration laws stipulated in specific client engagement statements of work.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
