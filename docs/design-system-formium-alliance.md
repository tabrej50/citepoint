# Formium Alliance Design System

## 1. Context and Goals
Formium Alliance delivers an implementation-ready, structured, and strictly accessible design system built to empower buyers, teams, and executive decision-makers across the Formium Alliance marketing surface (`https://formium.in/`).

> **Design Intent**: Deliver high-contrast, structured, and keyboard-first marketing interfaces with zero typographic ambiguity and strict WCAG 2.2 AA compliance.

---

## 2. Design Tokens and Foundations

### 2.1 Color Tokens
All components **must** reference semantic tokens rather than hardcoded hex values.

| Token | Value | Role / Usage | Contrast Ratio vs Background |
| :--- | :--- | :--- | :--- |
| `color.surface.base` | `#000000` | Primary dark page background & dark container surfaces | Baseline |
| `color.surface.muted` | `#ffffff` | Pure white light surface, card containers & inverted backgrounds | 21:1 vs `#000000` |
| `color.surface.raised` | `#f4f5f8` | Elevated light surface, secondary panels & recessed cards | 19.3:1 vs `#000000` |
| `color.surface.strong` | `#e60023` | High-impact brand red accent, active indicators & primary action triggers | 3.99:1 vs `#000000` / 4.54:1 vs `#ffffff` |
| `color.text.secondary` | `#1a1a1c` | High-contrast dark text on light surfaces | 17.5:1 vs `#ffffff` (AAA) |
| `color.text.tertiary` | `#fff0f0` | High-legibility light text on dark surfaces | 19.1:1 vs `#000000` (AAA) |
| `color.text.inverse` | `#222222` | Inverted body text for light surfaces & high-emphasis labels | 15.9:1 vs `#ffffff` (AAA) |

### 2.2 Typography Foundations
- **Primary Font Family**: `Bricolage Grotesque`
- **Fallback Font Stack**: `Bricolage Grotesque, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Base Body Settings**: `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=24px`

| Token | Size | Line Height | Recommended Weight | Primary Application |
| :--- | :--- | :--- | :--- | :--- |
| `font.size.xs` | `10px` | `14px` | 600 / 700 | Badges, kicker labels, technical micro-copy |
| `font.size.sm` | `12px` | `16px` | 500 / 600 | Secondary captions, engine pills, metadata |
| `font.size.md` | `13px` | `18px` | 400 / 500 | Compact table data, auxiliary navigation links |
| `font.size.lg` | `13.5px` | `20px` | 400 / 500 | Form placeholder text, interactive secondary actions |
| `font.size.xl` | `14px` | `20px` | 500 / 600 | Standard UI buttons, card headers, input labels |
| `font.size.2xl` | `15px` | `22px` | 400 / 500 | Sub-lead paragraphs, structured item descriptions |
| `font.size.3xl` | `16px` | `24px` | 400 / 500 | Base body copy, default reading column |
| `font.size.4xl` | `18px` | `26px` | 600 / 700 | Section subheadings, callout banners |

### 2.3 Spacing Scale
All margins, paddings, and gaps **must** use the discrete 8-step spacing scale. Arbitrary values are prohibited.

| Token | Value | Rem Equivalent | Primary Application |
| :--- | :--- | :--- | :--- |
| `space.1` | `4px` | `0.25rem` | Micro-gaps between icons and label text |
| `space.2` | `8px` | `0.5rem` | Compact element padding, pill internal vertical spacing |
| `space.3` | `10px` | `0.625rem` | Button vertical padding (compact) |
| `space.4` | `12px` | `0.75rem` | Standard input vertical padding, card micro-gutters |
| `space.5` | `13px` | `0.8125rem` | Balanced button vertical padding |
| `space.6` | `14px` | `0.875rem` | Standard component horizontal gutters |
| `space.7` | `16px` | `1.0rem` | Default container padding, standard button horizontal padding |
| `space.8` | `20px` | `1.25rem` | Section block spacing, card internal padding |

### 2.4 Border Radius, Shadows, and Motion

#### Radius Tokens
- `radius.xs`: `24px` (Inputs, dialog cards, segmented controls)
- `radius.sm`: `50px` (Compact interactive pills, utility badges)
- `radius.md`: `999px` (Standard pill buttons, search bars, status tags)
- `radius.lg`: `26843500px` (Infinite pill geometric clamp)

#### Shadow Tokens
- `shadow.1`: `rgba(0, 0, 0, 0.4) 0px 2px 12px 0px` (Elevated overlays, floating sticky headers, popovers)

#### Motion Tokens
- `motion.duration.instant`: `200ms` (Micro-state toggles, color transitions)
- `motion.duration.fast`: `300ms` (Hover translation, badge fade)
- `motion.duration.normal`: `400ms` (Dialog scale-in, accordion expansion)
- `motion.duration.slow`: `500ms` (Page transition reveals, drawer slides)
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (Signature expressive ease-out)

---

## 3. Component-Level Rules

### 3.1 Primary Action Button (`Button.Primary`)
- **Anatomy**:
  - Container: Pill shape (`radius.md=999px`), background `color.surface.strong=#e60023`.
  - Content: Centered label in `font.size.xl=14px`, `font.weight=600`, color `color.surface.muted=#ffffff`.
  - Padding: Vertical `space.4=12px`, Horizontal `space.8=20px`.
  - Icon (Optional): `16px` trailing or leading icon with `space.2=8px` gap.

- **Required Interactive States**:
  - `default`: Background `color.surface.strong`, text `#ffffff`, transform `translateY(0)`.
  - `hover`: Background `#cc001f`, transform `translateY(-1px)`, transition `motion.duration.instant`.
  - `focus-visible`: Outline `2px solid #ffffff`, outline-offset `2px`, shadow `shadow.1`.
  - `active`: Transform `translateY(1px) scale(0.99)`, background `#b3001b`.
  - `disabled`: Background `#3a3a3c`, text `#8a8a8e`, cursor `not-allowed`, opacity `0.6`.
  - `loading`: Text hidden (`aria-hidden="true"`), centered spinner in `#ffffff`, pointer events disabled.
  - `error`: Subtle shake animation (`200ms`), border `1px solid #ff4d4f`.

- **Responsive & Overflow**:
  - Full width on mobile screens (`<640px`) using `w-full`.
  - Single-line clamp with `text-overflow: ellipsis` when label exceeds container width.

### 3.2 Secondary Surface Card (`Card.Raised`)
- **Anatomy**:
  - Container: Background `color.surface.raised=#f4f5f8`, radius `radius.xs=24px`, border `1px solid rgba(0,0,0,0.06)`.
  - Inner Padding: `space.8=20px`.
  - Text Hierarchy:
    - Title: `font.size.4xl=18px`, color `color.text.secondary=#1a1a1c`, weight `700`.
    - Body: `font.size.3xl=16px`, color `color.text.inverse=#222222`, weight `400`.
    - Meta/Tag: `font.size.xs=10px`, color `color.surface.strong=#e60023`, weight `700`.

- **Required Interactive States**:
  - `default`: Shadow none, border `rgba(0,0,0,0.06)`.
  - `hover` (if clickable): Border `rgba(230, 0, 35, 0.35)`, shadow `shadow.1`, transform `translateY(-2px)`.
  - `focus-visible`: Outline `2px solid color.surface.strong`, outline-offset `3px`.

### 3.3 Text Input Field (`Input.Base`)
- **Anatomy**:
  - Container: Radius `radius.xs=24px`, background `color.surface.muted=#ffffff`, border `1px solid #d1d5db`.
  - Text: `font.size.lg=13.5px`, color `color.text.secondary=#1a1a1c`.
  - Padding: Vertical `space.4=12px`, Horizontal `space.7=16px`.

- **Required Interactive States**:
  - `default`: Border `#d1d5db`, text `color.text.secondary`.
  - `hover`: Border `#9ca3af`.
  - `focus-visible`: Border `color.surface.strong=#e60023`, box-shadow `0 0 0 3px rgba(230,0,35,0.15)`.
  - `disabled`: Background `color.surface.raised`, text `#9ca3af`, cursor `not-allowed`.
  - `error`: Border `color.surface.strong=#e60023`, helper text in `color.surface.strong`, `aria-invalid="true"`.

---

## 4. Accessibility Requirements & Testable Criteria (WCAG 2.2 AA)

1. **Focus Visibility (Non-Negotiable)**
   - Every interactive element **must** produce a visible focus indicator with at least `3:1` contrast against adjacent pixels.
   - Focus rings **must never** be suppressed via `outline: none` without an explicit replacement style.

2. **Contrast Conformance**
   - Body copy (`font.size.3xl`) **must** maintain at least `4.5:1` contrast against its surface.
   - Large text (`font.size.4xl` weight `700` or `>=24px`) **must** maintain at least `3:1` contrast.
   - UI controls and active border states **must** maintain at least `3:1` against adjacent background colors.

3. **Keyboard-First Navigation**
   - All interactive controls **must** be reachable using `Tab` and `Shift+Tab`.
   - Action triggering **must** be supported via `Enter` and `Space`.
   - Dismissable overlays **must** close on `Escape` keypress and restore focus to the trigger element.

4. **Screen Reader Semantics**
   - Buttons **must** have descriptive text or an `aria-label` explaining the target action.
   - Icon-only controls **must** include an accessible name.
   - Dynamic error messages **must** use `aria-live="polite"` or `role="alert"`.

---

## 5. Content and Tone Standards

- **Tone**: Concise, confident, implementation-focused.
- **Rule**: Avoid marketing jargon, vague superlatives, or ambiguous button labels.

### Examples

| Context | Prohibited (Don't) | Required (Do) |
| :--- | :--- | :--- |
| **Primary CTA** | *"Click here to get started"* | *"Request Enterprise Access"* |
| **Status Tag** | *"Awesome Performance"* | *"Verified 99.98% Model Citation"* |
| **Error Message** | *"Something went wrong"* | *"Invalid corporate email address"* |
| **Section Header** | *"We do good stuff"* | *"Structured Authority for Enterprise AI"* |

---

## 6. Anti-Patterns & Prohibited Implementations

- **No Hardcoded Hex Values**: Never use `#e60023` directly in UI markup. You **must** reference `color.surface.strong` or semantic CSS variables.
- **No Fractional / Arbitrary Spacing**: Never use `margin: 11px` or `padding: 17px`. You **must** snap to the `space.*` scale (`space.4=12px`, `space.5=13px`, `space.6=14px`, `space.7=16px`).
- **No Unlabeled Icon Buttons**: Never render `<button><Icon /></button>` without `aria-label` or visible text.
- **No Low-Contrast Text**: Never use `#777777` on dark surfaces.
- **No Invisible Focus Outlines**: Removing outline with `outline: none` without providing custom focus rings is strictly rejected.

---

## 7. QA Checklist

- [ ] **Token Adherence**: Are all typography, color, spacing, radius, and motion values mapped to defined tokens?
- [ ] **State Coverage**: Are all 7 component states (default, hover, focus-visible, active, disabled, loading, error) verified?
- [ ] **Keyboard Navigability**: Can the entire flow be operated without a mouse?
- [ ] **Focus Ring Visibility**: Is the focus indicator clearly visible against both light (`#ffffff`) and dark (`#000000`) surfaces?
- [ ] **Contrast Verification**: Does body copy pass 4.5:1 and large text pass 3:1 on a contrast checker?
- [ ] **Responsive Fluidity**: Does the component render without horizontal scrollbars down to `320px` width?
- [ ] **Long-String Stress Test**: Does text wrap or truncate gracefully when content length doubles?
