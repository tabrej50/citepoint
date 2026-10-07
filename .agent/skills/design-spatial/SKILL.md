---
name: design-spatial
description: Design — spatial composition
risk: critical
source: https://github.com/connerkward/ckw-design-skill/tree/main/deterministic-design/design-spatial
source_repo: connerkward/ckw-design-skill
source_type: community
date_added: 2026-07-01
license: MIT
license_source: https://github.com/connerkward/ckw-design-skill/blob/main/LICENSE
---

# Design — spatial composition
## When to Use

Use this skill when you need design — spatial composition.

A model cannot trust its own UI output. Everything else follows from two failures.

## 1. It can't see what it made

UI is generated as a token stream, never as pixels — so the model cannot perceive collisions, overlap, imbalance, or broken spacing. It will write a headline that runs into the hero image and have no idea.

**Render it and judge the image, not the code.** Serve with any static server (e.g. `python3 -m http.server` or `npx serve`) and screenshot headless via Playwright. Screenshot at a few widths.

**Critique with fresh eyes — not your own.** Grading your own output rationalizes it; the builder looks at its overlapping headline and calls it fine (this is exactly how a real collision shipped in testing). Use a separate judge — a subagent that did *not* write the page — and tell it to hunt for what's *wrong*: collisions, edge tangents, ragged alignment, lopsided weight, no clear focal point, breaks at some width. Fix, re-render, re-judge.

## 2. Its first idea is the average

Whatever it produces first is the mean of its training data — and there is more than one mean:

- the **generic-AI mean**: Inter, purple-on-white gradients, centered single column, three equal cards;
- the **designer-trend mean**: oversized condensed caps, dark-mode + grain, monospace "vibes" microtext, sticker badges.

Landing on the second isn't taste — it's a more flattering average, which is why it slips past. **Treat your first instinct as the mean and deviate deliberately — toward *this product's specific world*** (use design-thinking's domain / color-world / signature as the direction), **not toward another trend.** If the result could be any startup, you shipped the mean.

## 3. So don't prescribe a style

Any fixed rule — a 12-col grid, an 8-point scale, "mono = data" — *becomes* next cycle's mean, and a blind model executes it into collisions anyway. Prescribe the **process, not the look**: see it with fresh eyes, and push off the average toward the domain. Taste supplies the direction (design-thinking / design-philosophy); this skill only insists you **look** and **don't ship the mean**.

For iterative spatial tuning, a local page with live controls (sliders, pickers, drag handles) beats one-shot critique.

## 4. NEVER ship horizontal overflow — THE mandatory gate, no exceptions

> **BLOCKING GATE. You may not call any web UI "done", "working", "fixed", or
> "looks good" until you have run the `scrollWidth` check below at a narrow width
> THIS turn and seen `0`. Not "I added overflow-x:clip so it's fine." Not "it
> looked fine at my width." MEASURE. Narrow. Every time. If you didn't measure,
> it isn't done — say "haven't checked overflow yet" instead of claiming done.**

A side-to-side scrollbar that doesn't match the content is the **single most common
and most embarrassing** layout failure, and it ships *over and over* because the dev
viewport is wide enough to hide it — the overflow only appears once the window is
narrower than some element. It is **invisible at desktop width**, so the §1
render-critique loop will NOT catch it unless you screenshot narrow. Separate,
explicit, non-negotiable gate.

**It recurs because layouts GROW after they were last checked.** Every time you add a
nav tab, a toolbar button, a header control, a chip, a wider equation/`<pre>`, or any
new item to a `flex`/`inline` row, you have invalidated the last overflow check — the
row that fit yesterday now pushes past the edge between ~720–1200px while your 1440px
dev window shows nothing wrong.

**Default defenses to apply up front (so the gate passes by construction):**
- **Header / nav / toolbar rows: `flex-wrap: wrap`, never `nowrap`.** A growing
  single-row flex is the #1 source of this bug. Wrapping is a no-op when it fits and
  saves you when it doesn't.
- **`body { overflow-x: clip }`** as a backstop on every app (clip, not hidden — keeps
  sticky/anchored layouts working). A backstop, NOT a substitute for measuring.

**The check — run before calling ANY page done:** `document.documentElement.scrollWidth - document.documentElement.clientWidth` must equal `0`, tested at your dev width AND resized narrow (≤1024px, and a phone width ~390px). If > 0, find the offender:
```js
document.querySelectorAll('*').forEach(el=>{const r=el.getBoundingClientRect();
  if(r.right>innerWidth+1||r.left<-1) console.log(Math.round(r.right), el);});
```

**Safety net:** `overflow-x: clip` on `body` (prefer `clip` over `hidden`).

The generalization: **anything pinned to an edge or sized in viewport units is a horizontal-overflow suspect — test narrow, measure `scrollWidth`, clip the body as backstop, and anchor edge-pinned content inward.**

## 5. Lay out in TASK order — minimize transition cost

Before placing elements, **walk the user's actual step sequence for completing the
page's action**, then arrange elements in that same perceptual/view order. The
layout should read like the task: orient → work → confirm. Any mouse travel or
scrolling that serves no practical purpose is a defect.

- **Orient at top:** controls/options up top are good.
- **Confirm where the work ENDS:** if the task is "review a long list, then act", the action buttons must ALSO exist at the bottom.
- **The heuristic: save the user transit time.**

## 6. Balance is measurable — don't eyeball it (or trust a VLM's eye)

Visual balance is the *center of mass of visual weight*. It's arithmetic, not taste — so compute it.

**Optical center, not geometric.** Target `x = 0.50`, `y ≈ 0.46` — slightly high, because a centroid at literal 50% reads as sagging.

**Visual weight = area × ink-density, not area alone.**
```js
const DENS = {portrait:0.34, h1:0.82, kicker:0.42, lead:0.22, body:0.16, meta:0.5};
```

**Centroid.** Per axis, `centroid = Σ(wᵢ·posᵢ) / Σwᵢ`; balanced ⇔ the centroid sits
on the optical center.

## 7. The layout audit — metrics that MEDIATE the eye, never replace it

| check | how (deterministic) | tier |
|---|---|---|
| **collision** | content-rect intersection ≥12% | gate |
| **contrast** | WCAG luminance ratio of text vs effective bg (<4.5, large <3) | gate |
| **tap** | interactive targets <44×44 (Apple HIG) | gate |
| **overflow** | `scrollWidth − clientWidth` (the §4 gate) | gate |
| **alignment** | left-edge clusters → near-misses 1–7px off the shared line | signal |
| **spacing** | gap CoV among a container's children | signal |
| **balance** | ink-density-weighted centroid vs optical center (§6) | signal |

**Heuristics vs Gates:**
- **GATES = correctness** (overflow, contrast, tap). Must pass without exception.
- **SIGNALS = convention** (balance, alignment, spacing rhythm). Pointers to evaluate with eye; don't bland the design towards generic symmetry.

## 8. Optical craft — perception beats geometry

- **Optical alignment — nudge ±1–2px when it *looks* off though it measures centered.**
- **Balance icon/text lockups:** Match visual mass between icons and accompanying text.

## Limitations

- Use this skill only when the task clearly matches its upstream source and local project context.
- Verify commands, generated code, dependencies, credentials, and external service behavior before applying changes.
- Do not treat examples as a substitute for environment-specific tests, security review, or user approval for destructive or costly actions.
