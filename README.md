# Citepoint — AI Search Visibility & GEO Agency

Official B2B digital agency website for **Citepoint** ("Get Cited. Get Chosen."), built with React 18, Vite, and Tailwind CSS.

---

## Brand Identity & Specifications

- **Name**: Citepoint
- **Tagline**: Get Cited. Get Chosen.
- **Positioning**: AI search visibility for brands competing in the answer economy.
- **Primary CTA**: Get Your AI Visibility Audit
- **Secondary CTA**: Explore Our Services / See How It Works

### Color System
- Deep navy: `#061A2A`
- Midnight blue: `#082436`
- Dark slate: `#102F40`
- Warm gold: `#D7A84B`
- Light gold: `#F1D28A`
- Soft cream: `#F7F4EE`
- Pure white: `#FFFFFF`
- Ink text: `#0A1D2C`
- Muted text: `#66727C`
- Border gray: `#E7E5DF`
- Soft blue-gray: `#EAF0F2`

### Typography
- Headings: `Manrope` (Google Fonts, sentence case, tight line height)
- Body: `Inter` (17–19px, line height 1.6)
- Eyebrows & Small Labels: `Inter` uppercase (`letter-spacing: 0.16em`)

### Brand Assets (`public/assets/brand/`)
- `logo-dark-primary.png`: Dark navy full horizontal logo (Gold icon | CITEPOINT GET CITED. GET CHOSEN.)
- `logo-light-primary.png`: Light background full horizontal logo
- `logo-compact.png`: Compact logo without tagline for sticky header
- `logo-icon-dark.png` & `logo-icon-light.png`: High-resolution focal mark
- `app-icon.png`: Official squircle application mark
- `og-image.png`: 1200x630 OpenGraph social share card
- `favicon.png` / `favicon.ico`: 64x64 & 32x32 favicons

---

## Site Pages & Architecture

1. **Home** (`/#/home` or `/`):
   - Hero with interactive **AI Citation Map** & floating metric card ("AI visibility score: — / 100", "Audit required")
   - Restrained text-based client trust strip
   - "The Search Shift" problem section with 2-column layout and **SearchShiftSimulator**
   - Centered "What We Do" service intro with gold divider
   - 6-card **BentoServices** grid
   - "From question to citation" 5-step signature flow
   - 4-step interactive **ProcessTimeline** (Discover, Diagnose, Build, Measure)
   - Results / Case Studies with honest placeholders and directional metrics
   - "Not another content agency" 4 differentiator blocks
   - Interactive **ReadinessCalculator** self-assessment tool
   - Structured 3-tier engagement model
   - Accessible **FaqAccordion** with 7 official questions & answers
   - Dark navy final CTA band
2. **Services** (`/#/services`): In-depth breakdown of all 6 GEO services, deliverables, methodology, and SEO vs. GEO comparison table.
3. **How It Works** (`/#/how-it-works`): 4-phase framework deep dive and the 5-stage Generative Retrieval Pipeline diagram.
4. **Case Studies** (`/#/case-studies`): 3 detailed case study frameworks clearly marked as anonymized placeholders with directional metrics.
5. **About** (`/#/about`): Citepoint philosophy, answer economy perspective, core operating principles, and global delivery footprint.
6. **Insights** (`/#/insights`): Filterable research articles and interactive B2B GEO Glossary.
7. **Contact / Book an Audit** (`/#/contact`): Two-column layout with complete `AuditForm` (validation, spam protection, main goal selector, meeting time, consent) and global delivery specs.
8. **Privacy Policy** (`/#/privacy`): Full B2B enterprise privacy policy and data governance disclosure.
9. **Terms of Service** (`/#/terms`): Professional terms of service and third-party AI model disclaimers.

---

## Local Development & Production

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview -- --port 4173
```
