---
name: Swiss Architectural Monolith
colors:
  surface: '#fcf9f3'
  surface-dim: '#dcdad4'
  surface-bright: '#fcf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ed'
  surface-container: '#f0eee8'
  surface-container-high: '#ebe8e2'
  surface-container-highest: '#e5e2dc'
  on-surface: '#1c1c18'
  on-surface-variant: '#444748'
  inverse-surface: '#31312d'
  inverse-on-surface: '#f3f0ea'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#b7131a'
  on-secondary: '#ffffff'
  secondary-container: '#db322f'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1e1b14'
  on-tertiary-container: '#898379'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb4ac'
  on-secondary-fixed: '#410002'
  on-secondary-fixed-variant: '#93000d'
  tertiary-fixed: '#e9e2d5'
  tertiary-fixed-dim: '#cdc6ba'
  on-tertiary-fixed: '#1e1b14'
  on-tertiary-fixed-variant: '#4a463d'
  background: '#fcf9f3'
  on-background: '#1c1c18'
  surface-variant: '#e5e2dc'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 96px
    fontWeight: '700'
    lineHeight: 92px
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 52px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 58px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Space Grotesk
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Space Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  mono-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: -0.01em
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
  mono-micro:
    fontFamily: JetBrains Mono
    fontSize: 9px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.12em
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1rem
  margin-tablet: 2.5rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 3rem
---

## Brand & Style

This design system establishes the visual identity for an elite software engineer. The aesthetic synthesizes the architectural discipline of mid-century Swiss International Typographic Style with the calculated, unapologetic edge of restrained Neo-Brutalism. 

### Narrative & Emotional Response
The interface communicates intellectual authority, absolute technical precision, and quiet irreverence. It deliberately strips away commercial tech tropes—refusing pastel gradients, blurred surfaces, and rounded pill containers. The resulting impression is cerebral, archive-grade, and uncompromising. Visitors should perceive someone who crafts high-performance systems from first principles.

### Visual Foundations
- **Purity of Surface**: Pure flat planes of warm bone and chalky off-white replace clinical cool grays.
- **Structural Tension**: Extreme typographic contrast—pairing monumental, structural display headlines with surgical, dense monospace data columns.
- **Graphic Hardness**: Absolute 0px border radii across every container, boundary, and interactive element.
- **Singular Intent**: An unyielding monochromatic foundation pierced exclusively by a relentless signal red for state markers, telemetry, and critical navigation points.

## Colors

The palette operates under absolute discipline. The surface behaves as unbleached, archival newsprint; typography and structural lines operate as carbon ink.

### Palette Roles
- **Canvas Base (`#F7F4EE`)**: Warm off-white canvas. Establishes an organic, tactile paper backdrop that mitigates ocular strain while anchoring high-contrast ink.
- **Sub-Surface Tier (`#EFECE4`)**: Structural container fill for code blocks, architectural callouts, and inset metrics tables.
- **Carbon Black (`#191919`)**: Primary typography, heavy structural 2px container perimeters, and solid state block fills.
- **Hairline Muted (`#D8D3C8`)**: 1px structural dividing lines, subtle matrix grids, and secondary tabular borders.
- **Muted Stone (`#767167`)**: Technical metadata, timestamps, secondary labels, and terminal commentary.
- **Signal Red (`#E53935`)**: The sole chromatic accent. Reserved for active runtime indicators, live commit diffs, alert states, and focal hover states. Never diluted into tints.

### Contrast & State Directives
- **Zero Opacity Fades**: Never introduce 50% opacity text. Secondary text relies directly on `#767167` or hairline borders at `#D8D3C8`.
- **Inversion as Elevation**: Active and focused elements invert instantly from `#F7F4EE` canvas to `#191919` solid background with pure `#F7F4EE` typography.

## Typography

Typography carries the entire weight of this design system. It functions as both message and raw architectural material.

### Font Pairings & Roles
- **Space Grotesk**: Selected for display headlines, sectional titles, and reading prose. Its mechanical, slightly idiosyncratic grotesque forms reflect early Swiss modernism infused with digital constructivism. Large titles use tight tracking and compressed leading.
- **JetBrains Mono**: Selected for navigational taxonomy, tabular metrics, metadata keys, commit SHAs, technical indices, and micro-labels. It brings strict industrial credibility and alignment discipline.

### Typographic Rules
- **Micro-Label Casing**: All `mono-label` and `mono-micro` tokens must render in pure `uppercase` with expanded tracking (`0.08em` to `0.12em`).
- **Punctuation & Symbols**: Editorial accents such as sectional numbering (`[01]`, `§04`), arrows (`→`, `↳`), and slashed delimiters (`//`) must always inherit `JetBrains Mono`.
- **Zero Justification**: Body text remains strictly left-aligned (ragged right) to ensure readable cadence across columns without mechanical distortion.

## Layout & Spacing

The layout is built upon an asymmetric, modernist column framework defined by explicit structural bounding lines.

### Grid Framework
- **Desktop (≥ 1280px)**: 12-column asymmetric grid with `margin-desktop: 4rem` and `gutter-desktop: 2.5rem`. Layouts favour dynamic tension—for example, allocating 4 columns to metadata and indices, paired with 8 columns of content or oversized headline blocks.
- **Tablet (768px – 1279px)**: 6-column grid with `margin-tablet: 2.5rem` and `gutter: 1.5rem`.
- **Mobile (< 768px)**: 2-column or single-column stack with `margin: 1rem` and `gutter: 1rem`.

### Spatial Rhythm
- **Internal Density vs. Structural Voids**: Elements within a component (e.g., table cells, code cards) maintain high density using `space-xs` and `space-sm`. Conversely, major sectional chapters are separated by expansive empty fields (`space-xl` or larger), providing deliberate pauses between dense engineering data.
- **Exposed Structural Seams**: Content cells are contained within explicit full-bleed hairline grid lines (`#D8D3C8`), evoking blueprint drafting plates and Swiss poster layouts.

## Elevation & Depth

This system is completely flat. Physical depth metaphors are strictly prohibited.

### Forbidden Techniques
- **No Drop Shadows**: Zero `box-shadow` blurs across all components.
- **No Skeuomorphic Highlights**: No inner highlights, bevels, or gradient surfaces.
- **No Backdrop Filters**: Transparent blurs (`backdrop-filter`) and faux frosted glass are entirely disallowed.

### Spatial Layering & Surface Division
- **Hairline Division**: Spatial distinction is established solely via `1px solid #D8D3C8` or `1px solid #191919` rules.
- **Hard Offsets**: Where interactive feedback requires a physical presence (e.g., pinned hover tags or command palette popups), depth is conveyed exclusively via a hard, non-blurred offset: `box-shadow: 4px 4px 0px 0px #191919`.
- **Color Inversion**: Elevated or prioritized states do not float—they invert. A standard card with a `#F7F4EE` ground and black border inverts to a solid `#191919` block with `#F7F4EE` text upon selection.

## Shapes

The geometry of the interface is rigorously orthogonal.

### Architectural Rules
- **0px Border Radius**: Every button, input, badge, modal window, image wrapper, and table boundary must have `border-radius: 0px`. No softened corners under any circumstance.
- **Rectangular Hardness**: Imagery, avatars, and visual media must be cropped to sharp rectangles or perfect squares.
- **Hairline Stroke Grammar**:
  - `1px solid #D8D3C8`: Subordinate boundaries, item separators, grid guides.
  - `1px solid #191919`: Interactive element bounds, standard buttons, input fields.
  - `2px solid #191919`: Active emphasis bounds, header divider tracks, focal hero modules.
- **Solid Inset Blocks**: Visual accents take the form of miniature filled squares (`6px × 6px` or `8px × 8px`) in `#E53935` or `#191919`, serving as bullet markers or status glyphs.

## Components

### Buttons & Action Triggers
- **Primary Action**: Solid `#191919` fill, `#F7F4EE` label in `mono-label`. Zero radius, padding: `12px 20px`. Hover: background changes immediately to `#E53935` with white typography.
- **Secondary Action**: Background `#F7F4EE`, border `1px solid #191919`, text `#191919` in `mono-label`. Hover: fills solid `#191919` with `#F7F4EE` text. Transition timing is instantaneous (`0ms` or maximum `100ms linear`).
- **Tertiary / Link**: Raw inline text in `mono-code`, accompanied by an arrow symbol (`→`). Hover: underlined with a 1px offset line or highlighted with a `#E53935` text shift.

### Chips, Tags & Badges
- **Specification**: Zero radius. Never pill-shaped. Border `1px solid #D8D3C8`, background `#EFECE4`, text `#191919` using `mono-micro`.
- **Status Badges**: An inline square (`6px × 6px` of `#E53935` for active, `#767167` for archived) followed by mono text. Never rounded dots.

### Lists & Key-Value Matrices
- **Table / Data Row**: Border-bottom `1px solid #D8D3C8`. Padding `12px 0`. Left side: `mono-label` in `#767167` (the key/timestamp). Right side: `body-md` in `#191919` (the value/project title).
- **Hover State**: Entire row background switches to `#EFECE4`, with an arrow indicator (`↳`) appearing in `#E53935`.

### Input Fields & Controls
- **Text Inputs**: Flat background `#F7F4EE`, border `1px solid #191919`, padding `12px 16px`, font `mono-code`. Placeholder text `#767167`.
- **Focus State**: Border thickens to `2px solid #191919` (or single hairline with an exterior hard offset: `2px 2px 0px 0px #191919`).
- **Checkboxes & Radios**: 
  - Checkbox: `16px × 16px` square, border `1px solid #191919`, zero radius. Checked state: Solid `#191919` fill with an internal `#F7F4EE` cross or pure filled `#191919` square.
  - Radios: Square footprint (never circular) featuring an inset solid inner square when selected.

### Cards & Project Showcases
- **Structure**: Surface `#F7F4EE`, border `1px solid #191919`. Padded interior with `space-lg`.
- **Header**: Top technical bar separated by a `1px solid #191919` horizontal hairline; contains project index (`01 // REPO`) in `mono-label` and status indicator.
- **Interactive State**: Hover triggers a hard-edge offset shadow: `4px 4px 0px 0px #191919`, shifting the card `-2px, -2px` in translation.

### Code & Terminal Blocks
- **Container**: Background `#EFECE4`, border `1px solid #D8D3C8`, padding `space-md`.
- **Header Bar**: Displays filename and SHA in `mono-micro` uppercase with a solid `#E53935` indicator square at the top right. Syntax highlighting uses pure `#191919`, `#767167`, and `#E53935`.