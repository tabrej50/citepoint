# Formium Alliance Design System

## 1. Context and Goals

Formium Alliance delivers an implementation-ready, structured, and strictly accessible design system built for buyers, teams, and decision-makers across the Formium Alliance marketing surface ([formium.in](https://formium.in/)).

> **Design Intent**: Deliver high-contrast, structured, and keyboard-first marketing interfaces with zero typographic ambiguity, robust responsive behavior, and strict WCAG 2.2 AA compliance.

The system enforces tokenized consistency across all visual primitives, eliminates hardcoded values, mandates 7 distinct interaction states for every component, and provides testable accessibility acceptance criteria.

---

## 2. Design Tokens and Foundations

All components **must** reference semantic tokens rather than hardcoded hex values or arbitrary measurements.

### 2.1 Color Tokens

| Token | Value | Semantic Role | Minimum Contrast Ratio |
| :--- | :--- | :--- | :--- |
| `color.surface.base` | `#000000` | Deep canvas baseline, dark section background, modal backdrop base | Baseline |
| `color.surface.muted` | `#ffffff` | Pure white light surface, card container background, inverted reading canvas | 21:1 vs `color.surface.base` |
| `color.surface.raised` | `#f4f5f8` | Elevated light surface, secondary panels, recessed cards, subtle tag backdrops | 19.3:1 vs `color.surface.base` |
| `color.surface.strong` | `#e60023` | High-impact brand red accent, primary action anchor, critical state indicators | 3.99:1 vs `color.surface.base` / 4.54:1 vs `color.surface.muted` |
| `color.text.secondary` | `#1a1a1c` | High-contrast dark text on light and raised surfaces | 17.5:1 vs `color.surface.muted` (WCAG AAA) |
| `color.text.tertiary` | `#fff0f0` | High-legibility light text on dark base surfaces and strong red fills | 19.1:1 vs `color.surface.base` (WCAG AAA) |
| `color.text.inverse` | `#222222` | Inverted body copy for light surfaces, muted cards, and secondary badges | 15.9:1 vs `color.surface.muted` (WCAG AAA) |

#### State & Functional Color Derivations
- **Focus Ring Light**: `color.surface.strong` on light surfaces; **Focus Ring Dark**: `color.surface.muted` on dark surfaces.
- **Surface Hover Strong**: Filter brightness `0.90` over `color.surface.strong`.
- **Surface Active Strong**: Filter brightness `0.80` over `color.surface.strong`.
- **Subtle Border Light**: `rgba(26, 26, 28, 0.10)` using `color.text.secondary` at 10% opacity.
- **Subtle Border Dark**: `rgba(255, 240, 240, 0.12)` using `color.text.tertiary` at 12% opacity.
- **Disabled Surface**: `color.surface.raised` with 60% opacity on light surfaces; `rgba(255, 255, 255, 0.08)` on dark surfaces.
- **Disabled Text**: `color.text.secondary` with 40% opacity on light; `color.text.tertiary` with 40% opacity on dark.

---

### 2.2 Typography Foundations

- **Primary Font Family**: `Bricolage Grotesque`
- **Fallback Font Stack**: `Bricolage Grotesque, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Base Typography**: `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=24px`

| Token | Size | Line Height | Allowed Weights | Semantic Role & Hierarchy |
| :--- | :--- | :--- | :--- | :--- |
| `font.size.xs` | `10px` | `14px` | 600, 700 | Micro-labels, status indicators, kicker tags |
| `font.size.sm` | `12px` | `16px` | 500, 600 | Pill captions, metadata, technical spec labels |
| `font.size.md` | `13px` | `18px` | 400, 500 | Compact table cells, auxiliary footer navigation |
| `font.size.lg` | `13.5px` | `20px` | 400, 500 | Form placeholder text, secondary action buttons |
| `font.size.xl` | `14px` | `20px` | 500, 600 | Primary action buttons, card titles, input values |
| `font.size.2xl` | `15px` | `22px` | 400, 500 | Sub-lead text, structured feature descriptions |
| `font.size.3xl` | `16px` | `24px` | 400, 500 | Default reading paragraph copy (body base) |
| `font.size.4xl` | `18px` | `26px` | 600, 700 | Section subheadings, modal titles, callout headers |

Typographic elements **must** strictly utilize the declared scale. Heading elements larger than `18px` on marketing hero surfaces **should** use fluid `clamp()` responsive rules tied to proportional multiples of `font.size.3xl`.

---

### 2.3 Spacing Scale

Every margin, padding, and layout gap **must** snap to this discrete 8-step scale. Custom or one-off spacing values are prohibited.

| Token | Value | Rem Value | Canonical Application |
| :--- | :--- | :--- | :--- |
| `space.1` | `4px` | `0.25rem` | Icon-to-text inline gap, tight badge padding |
| `space.2` | `8px` | `0.5rem` | Badge horizontal padding, pill internal vertical spacing |
| `space.3` | `10px` | `0.625rem` | Compact button vertical padding, segmented item gap |
| `space.4` | `12px` | `0.75rem` | Standard input vertical padding, compact card gutters |
| `space.5` | `13px` | `0.8125rem` | Balanced button vertical padding |
| `space.6` | `14px` | `0.875rem` | Input horizontal padding, card content gutters |
| `space.7` | `16px` | `1.0rem` | Button horizontal padding, mobile container margin |
| `space.8` | `20px` | `1.25rem` | Primary button horizontal padding, standard card padding |

---

### 2.4 Border Radius, Shadows, and Motion

#### Radius Tokens
- `radius.xs`: `24px` — Structured input fields, dialog containers, card corners.
- `radius.sm`: `50px` — Compact utility badges, filter chips, secondary pills.
- `radius.md`: `999px` — Standard action buttons, search bars, status tags.
- `radius.lg`: `26843500px` — Full geometric clamp (infinite capsule).

#### Shadow Tokens
- `shadow.1`: `rgba(0, 0, 0, 0.4) 0px 2px 12px 0px` — Floating navigation bars, active dropdown popovers, raised modal dialogs.

#### Motion Tokens
- `motion.duration.instant`: `200ms` — Color shifts, focus ring appearance, micro-toggles.
- `motion.duration.fast`: `300ms` — Hover elevations, badge fades, button transforms.
- `motion.duration.normal`: `400ms` — Accordion expands, modal scale-ins, card reflows.
- `motion.duration.slow`: `500ms` — Off-canvas drawers, page transitions, hero reveals.
- **Timing Curve**: `cubic-bezier(0.16, 1, 0.3, 1)` — All motion **must** use this deceleration curve. Linear animations are prohibited except for infinite loading spinners.
- **Reduced Motion**: When `prefers-reduced-motion: reduce` is detected, durations **must** collapse to `0ms` or instant opacity transitions.

---

## 3. Component-Level Rules

Every component family **must** define rules across anatomy, variants, 7 required interactive states, input/touch behavior, overflow edge cases, and responsive adaptation.

---

### 3.1 Buttons (`Button`)

#### Anatomy
1. **Container**: Height at least `44px` on mobile/touch; radius `radius.md=999px`.
2. **Label**: Typography `font.size.xl=14px` (or `font.size.lg=13.5px` for compact), weight `600`.
3. **Leading / Trailing Icon**: Optical box `16px x 16px` with inline gap `space.2=8px`.
4. **Padding**: Vertical `space.4=12px` (or `space.5=13px`), Horizontal `space.8=20px`.

#### Variants
- **Primary (`Button.Primary`)**:
  - Surface: `color.surface.strong`.
  - Text: `color.text.tertiary`.
- **Secondary / Outline (`Button.Secondary`)**:
  - Surface: Transparent with 1px border `color.text.secondary` (on light) or `color.text.tertiary` (on dark).
  - Text: `color.text.secondary` (on light) or `color.text.tertiary` (on dark).
- **Ghost / Inverted (`Button.Ghost`)**:
  - Surface: `color.surface.raised`.
  - Text: `color.text.secondary`.

#### 7 Required States
- `default`:
  - Background and text mapped to variant tokens.
  - Transform: `none`. Border: variant specified.
- `hover`:
  - Primary: Surface brightness `0.90`, transform `translateY(-1px)`.
  - Secondary/Ghost: Surface tint with `rgba(0, 0, 0, 0.05)`, transform `translateY(-1px)`.
  - Transition: `motion.duration.instant` with standard bezier curve.
- `focus-visible`:
  - Outline: `2px solid color.surface.strong` (on light) or `2px solid color.surface.muted` (on dark).
  - Outline Offset: `2px`.
  - Focus ring **must** remain visible regardless of browser vendor defaults.
- `active`:
  - Transform: `translateY(1px) scale(0.98)`.
  - Surface: Brightness `0.80`.
- `disabled`:
  - Opacity: `0.4`.
  - Cursor: `not-allowed`.
  - Pointer events: disabled.
  - Attribute: `aria-disabled="true"` or native `disabled`.
- `loading`:
  - Text content: `visibility: hidden` or `aria-hidden="true"`.
  - Spinner: Replaces label with centered 16px indicator; spin animation `linear infinite`.
  - Container dimensions **must not** shift or collapse during loading transition.
  - Attribute: `aria-busy="true"`.
- `error`:
  - Border: `1px solid color.surface.strong`.
  - Animation: Horizontal shake (`8px` keyframe) for `motion.duration.instant`.

#### Touch, Keyboard, and Pointer Behavior
- **Touch**: Tapping area **must** meet minimum `44px x 44px` bounding box.
- **Keyboard**: Button **must** trigger on `Enter` or `Space` keydown.
- **Pointer**: Pointer cursor on interactive states; `not-allowed` on disabled.

#### Long-Content, Overflow, and Empty States
- Text labels exceeding available width **must** truncate with `text-overflow: ellipsis` and `white-space: nowrap`.
- Icon-only variants **must** include an accessible `aria-label`.
- Button **must not** wrap text into multiple lines unless explicitly styled as a multi-line card action.

#### Responsive Adaptation
- On mobile viewports (`<640px`), full-width CTA buttons **should** span `width: 100%`.
- Stack dual CTA buttons vertically with `space.3=10px` gap below `640px`.

---

### 3.2 Badges and Status Pills (`Badge`)

#### Anatomy
1. **Container**: Radius `radius.sm=50px` or `radius.md=999px`.
2. **Text**: Typography `font.size.xs=10px`, uppercase or title case, weight `700`.
3. **Padding**: Vertical `space.1=4px`, Horizontal `space.2=8px` (or `space.3=10px`).
4. **Dot Indicator (Optional)**: `6px x 6px` circle with `space.1=4px` margin-right.

#### Variants
- **Brand Accent (`Badge.Strong`)**:
  - Background: `color.surface.strong`.
  - Text: `color.text.tertiary`.
- **Raised Muted (`Badge.Raised`)**:
  - Background: `color.surface.raised`.
  - Text: `color.text.secondary`.
- **Inverted Dark (`Badge.Dark`)**:
  - Background: `color.surface.base`.
  - Text: `color.text.tertiary`.

#### 7 Required States
- `default`: Base variant tokens applied.
- `hover` (interactive badges): Opacity `0.85`, transform `translateY(-1px)`.
- `focus-visible` (if linked/interactive): `2px solid color.surface.strong`, offset `2px`.
- `active`: Transform `scale(0.96)`.
- `disabled`: Opacity `0.35`, cursor `default`.
- `loading`: Subtle shimmer animation across background for `motion.duration.normal`.
- `error`: Background `color.surface.strong`, text `color.text.tertiary`, icon alert badge.

#### Overflow & Responsive Rules
- Badges **must not** wrap text. If label exceeds container, clamp max-width and truncate with ellipsis.

---

### 3.3 Surface Cards (`Card`)

#### Anatomy
1. **Container**: Radius `radius.xs=24px`, border `1px solid rgba(26, 26, 28, 0.08)`.
2. **Padding**: Internal padding `space.8=20px`.
3. **Header**: Title in `font.size.4xl=18px`, weight `700`, color `color.text.secondary`.
4. **Body**: Text in `font.size.3xl=16px`, weight `400`, color `color.text.inverse`.
5. **Footer / Actions**: Space-between row aligned with `space.4=12px`.

#### Variants
- **Raised Surface (`Card.Raised`)**: Background `color.surface.raised`.
- **Pure White Canvas (`Card.Muted`)**: Background `color.surface.muted`.
- **Dark Inverted (`Card.Base`)**: Background `color.surface.base`, text `color.text.tertiary`.

#### 7 Required States (for Interactive Cards)
- `default`: Flat baseline, subtle border, shadow none.
- `hover`: Border `1px solid color.surface.strong`, shadow `shadow.1`, transform `translateY(-2px)`, transition `motion.duration.fast`.
- `focus-visible`: Outline `2px solid color.surface.strong`, outline-offset `3px`.
- `active`: Transform `translateY(0) scale(0.99)`.
- `disabled`: Grayscale filter `100%`, opacity `0.5`, pointer-events `none`.
- `loading`: Skeleton placeholder pulses using `color.surface.raised` and shimmer.
- `error`: Border `2px solid color.surface.strong`, error status banner displayed at top.

#### Overflow and Empty-State Handling
- Dynamic card body copy **must** break words gracefully using `overflow-wrap: break-word`.
- Empty state cards **must** display an optical 32px placeholder graphic, a descriptive label in `font.size.xl=14px`, and an action button.

#### Responsive Adaptation
- Grid arrangements **must** render 1 column on screens `<768px`, 2 columns on `768px-1023px`, and 3 columns on `>=1024px`.
- Padding **must** maintain at least `space.7=16px` on mobile viewports.

---

### 3.4 Text Inputs and Form Fields (`Input`)

#### Anatomy
1. **Container**: Height `44px` minimum; radius `radius.xs=24px` (or `radius.md=999px` for search pills).
2. **Surface**: Background `color.surface.muted`, border `1px solid rgba(26, 26, 28, 0.15)`.
3. **Text Value**: Typography `font.size.lg=13.5px` or `font.size.xl=14px`, color `color.text.secondary`.
4. **Placeholder**: Color `color.text.secondary` at 50% opacity.
5. **Padding**: Vertical `space.4=12px`, Horizontal `space.6=14px` (or `space.7=16px`).
6. **Label**: Typography `font.size.xs=10px` or `font.size.sm=12px`, weight `600`, color `color.text.secondary`.

#### Variants
- **Default Field (`Input.Base`)**: Radius `radius.xs=24px`.
- **Search Capsule (`Input.Search`)**: Radius `radius.md=999px`, leading magnifying glass icon.

#### 7 Required States
- `default`: Border `1px solid rgba(26, 26, 28, 0.15)`.
- `hover`: Border `1px solid rgba(26, 26, 28, 0.35)`.
- `focus-visible`: Border `1px solid color.surface.strong`, box-shadow `0 0 0 3px rgba(230, 0, 35, 0.15)`, outline `none`.
- `active`: Border `1px solid color.surface.strong`.
- `disabled`: Background `color.surface.raised`, text opacity `0.4`, cursor `not-allowed`.
- `loading`: Trailing spinner replacing clear icon, `aria-busy="true"`.
- `error`: Border `1px solid color.surface.strong`, error message text rendered below in `font.size.xs=10px` with `color.surface.strong`.

#### Keyboard, Touch, and Screen Reader Behavior
- Form fields **must** link to labels using matching `id` and `for` attributes.
- When invalid, `aria-invalid="true"` and `aria-describedby="[error-id]"` **must** be present.
- Input fields **must** respond to `Tab` navigation and allow text selection without layout shift.

---

### 3.5 Navigation Bar (`Navigation`)

#### Anatomy
1. **Bar Container**: Fixed or sticky top anchor, height `64px` on desktop, `56px` on mobile.
2. **Background**: `color.surface.base` (dark) or `color.surface.muted` (light) with 95% opacity and backdrop filter blur `12px`.
3. **Shadow**: `shadow.1` when page is scrolled > 10px.
4. **Links**: Typography `font.size.md=13px` or `font.size.xl=14px`, weight `500`.

#### Variants
- **Dark Header**: Canvas `color.surface.base`, links `color.text.tertiary`.
- **Light Header**: Canvas `color.surface.muted`, links `color.text.secondary`.

#### 7 Required States (Nav Items)
- `default`: Base link color.
- `hover`: Color `color.surface.strong`, transition `motion.duration.instant`.
- `focus-visible`: Outline `2px solid color.surface.strong`, offset `2px`.
- `active`: Current page link features an underline or indicator dot in `color.surface.strong`.
- `disabled`: Opacity `0.4`, pointer-events `none`.
- `loading`: Skeleton bar placeholder during route change.
- `error`: Network reconnection banner pinned directly below navigation bar.

#### Responsive Adaptation
- Viewports `<1024px` **must** collapse links into an accessible slide-over mobile drawer or sheet.
- The mobile hamburger toggle **must** provide `aria-expanded="true/false"` and `aria-controls="mobile-menu"`.
- Opening the mobile menu **must** trap focus within the navigation sheet and close on `Escape`.

---

## 4. Accessibility Requirements & Testable Criteria (WCAG 2.2 AA)

Compliance with WCAG 2.2 Level AA is mandatory across all views. Every rule in this section **must** be verified with programmatic or manual test procedures.

### 4.1 Contrast Conformance (SC 1.4.3 / SC 1.4.11)
- **Normal Text (`font.size.3xl` and smaller)**: **Must** achieve a contrast ratio of at least **4.5:1** against its background.
  - Verification: Automated axe-core or Lighthouse audit; manual Color Contrast Analyzer test.
- **Large Text (`font.size.4xl` weight 700 or `>=24px`)**: **Must** achieve at least **3.0:1** contrast.
- **UI Components and Graphical Objects (SC 1.4.11)**: Focus rings, active button borders, and input edges **must** achieve at least **3.0:1** against adjacent background colors.

### 4.2 Keyboard Navigation & Focus Visibility (SC 2.1.1 / SC 2.4.7 / SC 2.4.13)
- **Full Operability**: Every interactive element (buttons, links, inputs, dialogs) **must** be completely operable via keyboard alone (`Tab`, `Shift+Tab`, `Enter`, `Space`, `Arrow keys`).
- **No Hidden Outlines**: Global CSS rules removing focus outlines (e.g., `*:focus { outline: none; }`) are **strictly prohibited** unless immediately replaced with an equivalent high-contrast `:focus-visible` indicator.
- **Focus Indicator Size & Contrast**: The focus indicator **must** enclose the element, have a minimum stroke width of `2px`, and provide at least `3:1` contrast against adjacent pixels.
- **Focus Order**: Tab sequence **must** match the logical DOM reading order without arbitrary positive `tabindex` values.

### 4.3 Target Sizing (SC 2.5.8 Target Size Minimum)
- All interactive controls on mobile and touch devices **must** present an interactive target area of at least **44px by 44px** (including padding).
- Compact desktop controls **must** present at least **24px by 24px** with sufficient spacing to adjacent targets.

### 4.4 Non-Text Semantics and Screen Readers (SC 1.1.1 / SC 4.1.2)
- All interactive icons without accompanying visible text **must** include an explicit `aria-label` describing the specific action (e.g., `<button aria-label="Close dialog">`).
- Images and brand logos **must** provide descriptive `alt` text or `aria-hidden="true"` if purely decorative.
- Modal dialogs **must** use `role="dialog"`, `aria-modal="true"`, and maintain a focus trap while active.

---

## 5. Content and Tone Standards

- **Core Voice**: Concise, confident, implementation-focused.
- **Principles**: Avoid marketing fluff, ungrounded superlatives, and vague verbs. Prefer exact, actionable terminology.

### Writing Standards & Concrete Examples

| Surface / Component | Prohibited (Don't) | Required (Do) | Rationale |
| :--- | :--- | :--- | :--- |
| **Primary Action CTA** | *"Click here to get started"* | *"Request Enterprise Access"* | State the exact outcome, not the physical interaction. |
| **Search Input Placeholder** | *"Type something..."* | *"Search citations, models, or domains..."* | Provide clear domain context for input expectation. |
| **Feature Tag / Badge** | *"Amazing AI Speed"* | *"Sub-200ms Citation Latency"* | Use quantified, testable claims over subjective hype. |
| **Form Error Message** | *"Error: Invalid data"* | *"Enter a valid work email address (name@company.com)"* | Explain precisely what failed and how to resolve it. |
| **Modal Dismiss Action** | *"Go away"* | *"Cancel and Return to Dashboard"* | Inform user of both action and destination state. |
| **Empty State Header** | *"Nothing here yet!"* | *"No Search Results Found for 'Query'"* | Ground status in user's query context. |

---

## 6. Anti-Patterns & Prohibited Implementations

The following patterns are **strictly forbidden** in production codebases:

1. **Hardcoded Hex Values**: Writing raw color hex codes (e.g. `color: #e60023`, `background: #000000`) in component files. Developers **must** use semantic CSS variables or tokens.
2. **One-Off Spacing Arbitrariness**: Declaring margins or paddings outside the discrete scale (e.g., `margin-top: 17px`, `padding: 11px`). Developers **must** snap to `space.1` through `space.8`.
3. **Suppressed Focus Outlines**: Writing `outline: none` or `outline: 0` without an explicit `:focus-visible` replacement.
4. **Low-Contrast Micro-Copy**: Setting grey text (e.g. `#666666` or `#777777`) on `color.surface.base`, violating the 4.5:1 ratio.
5. **Fixed Viewport Heights**: Forcing `height: 100vh` on mobile containers, causing scroll clipping on iOS Safari toolbars. Developers **must** use `min-height: 100svh` or `100dvh`.
6. **Horizontal Scrolling Breakages**: Employing fixed container widths (e.g., `width: 1200px`) that cause horizontal overflow on mobile screens (`320px–768px`). Containers **must** use `width: 100%` and `max-width`.
7. **Ambiguous Call-to-Actions**: Using generic words like *"Submit"*, *"Next"*, or *"OK"* when the user is performing a distinct domain action.

---

## 7. QA Checklist

Before shipping any component or template to production, verify each gate:

- [ ] **Token Mapping**: Are all colors, fonts, line-heights, spaces, radii, and shadows mapped to declared tokens?
- [ ] **State Completeness**: Does the component properly handle all 7 states: `default`, `hover`, `focus-visible`, `active`, `disabled`, `loading`, and `error`?
- [ ] **Keyboard Navigation**: Can every interactive element be navigated and triggered using keyboard only?
- [ ] **Focus Ring Visibility**: Is the focus indicator clearly visible with at least 3:1 contrast against both light and dark backgrounds?
- [ ] **Contrast Verification**: Does normal body text pass 4.5:1 and large text pass 3:1 on a contrast checker tool?
- [ ] **Touch Target Sizing**: Are interactive elements on mobile at least `44px x 44px`?
- [ ] **Screen Reader Labels**: Do all icon buttons, forms, and dynamic overlays have correct `aria-label`, `aria-describedby`, or `role` attributes?
- [ ] **Viewport Stress Test**: Does the layout reflow cleanly at `320px`, `375px`, `768px`, `1024px`, `1440px`, and `1920px` without horizontal scrollbars?
- [ ] **Content Clamping & Overflow**: Does long text truncate or wrap gracefully without breaking surrounding card layouts?
- [ ] **Reduced Motion**: Does animation cleanly collapse when `prefers-reduced-motion: reduce` is simulated?
