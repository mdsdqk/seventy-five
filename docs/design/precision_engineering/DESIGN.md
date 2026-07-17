---
name: Precision Engineering
colors:
  surface: "#121414"
  surface-dim: "#121414"
  surface-bright: "#38393a"
  surface-container-lowest: "#0d0f0f"
  surface-container-low: "#1a1c1c"
  surface-container: "#1e2020"
  surface-container-high: "#282a2b"
  surface-container-highest: "#333535"
  on-surface: "#e2e2e2"
  on-surface-variant: "#c4c7c8"
  inverse-surface: "#e2e2e2"
  inverse-on-surface: "#2f3131"
  outline: "#8e9192"
  outline-variant: "#444748"
  surface-tint: "#c6c6c7"
  primary: "#ffffff"
  on-primary: "#2f3131"
  primary-container: "#e2e2e2"
  on-primary-container: "#636565"
  inverse-primary: "#5d5f5f"
  secondary: "#88d982"
  on-secondary: "#003909"
  secondary-container: "#005b14"
  on-secondary-container: "#81d27c"
  tertiary: "#ffffff"
  on-tertiary: "#313030"
  tertiary-container: "#e5e2e1"
  on-tertiary-container: "#656464"
  error: "#ffb4ab"
  on-error: "#690005"
  error-container: "#93000a"
  on-error-container: "#ffdad6"
  primary-fixed: "#e2e2e2"
  primary-fixed-dim: "#c6c6c7"
  on-primary-fixed: "#1a1c1c"
  on-primary-fixed-variant: "#454747"
  secondary-fixed: "#a3f69c"
  secondary-fixed-dim: "#88d982"
  on-secondary-fixed: "#002204"
  on-secondary-fixed-variant: "#005312"
  tertiary-fixed: "#e5e2e1"
  tertiary-fixed-dim: "#c8c6c5"
  on-tertiary-fixed: "#1b1b1b"
  on-tertiary-fixed-variant: "#474746"
  background: "#121414"
  on-background: "#e2e2e2"
  surface-variant: "#333535"
typography:
  headline-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: "700"
    lineHeight: "1.1"
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: "600"
    lineHeight: "1.3"
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: "400"
    lineHeight: "1.5"
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.5"
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: "500"
    lineHeight: "1.2"
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: "400"
    lineHeight: "1.2"
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  column-gap: 16px
---

## Brand & Style

This design system is built for a professional, technical environment where precision and clarity are paramount. The brand personality is utilitarian, efficient, and unyielding, targeting a high-performance audience in fields such as software development, architecture, or industrial design.

The design style is a hybrid of **Modern Minimalism** and **Technical Brutalism**. It prioritizes structural integrity over decorative flair, utilizing a monochrome-first approach with high-contrast accents. The UI should evoke a sense of professional reliability, appearing as a calibrated tool rather than a consumer interface. Every element is aligned to a strict grid, emphasizing a "no-nonsense" aesthetic that feels both futuristic and grounded.

## Colors

The palette is strictly functional. The default mode is **dark**, providing a high-contrast foundation for technical work.

- **Primary**: Pure White (#FFFFFF). Used for critical text, active icons, and primary actions.
- **Secondary**: Success Green (#2E7D32). Reserved exclusively for completion states and positive status indicators.
- **Tertiary**: Surface Container Low (#1B1B1B). Used for subtle depth, hover states, and background layering.
- **Neutral**: Silver/Off-white (#E5E5E5). Used for structural borders, secondary text, and inactive states.
- **Background**: Deep Black (#000000). The base layer for all screens to maximize contrast.

## Typography

Typography is treated as a structural element. **Geist** is used for primary headings and body copy to maintain a clean, technical, and highly legible appearance.

For data-heavy elements, metadata, and labels, **JetBrains Mono** is employed to provide a distinct monospaced contrast, reinforcing the "tooling" aesthetic.

- Large headlines should use negative letter-spacing to feel tight and impactful.
- Labels are always presented in a slightly smaller size with increased letter-spacing to improve scannability in dense interfaces.
- Line heights are generous for body text but tight for headlines to maintain a vertical rhythm.

## Layout & Spacing

This design system utilizes a **Fluid Grid** model based on a 4px baseline unit.

- **Desktop**: 12-column grid with 64px outer margins and 24px gutters.
- **Tablet**: 8-column grid with 32px outer margins and 16px gutters.
- **Mobile**: 4-column grid with 20px outer margins and 16px gutters.

Spacing should always be multiples of 4px. Use larger gaps (32px, 48px) to separate logical sections and smaller gaps (8px, 12px) for related components within a group.

## Elevation & Depth

In line with the technical aesthetic, depth is conveyed through **Tonal Layers** and **Bold Borders** rather than soft shadows.

- **Z-0 (Base)**: Pure Black (#000000).
- **Z-1 (Surface)**: Surface Container Low (#1B1B1B). Used for cards, panels, and input fields.
- **Z-2 (Overlay)**: Surface Container High (#2A2A2A). Used for modals and tooltips.

Separation is achieved primarily through 1px solid borders using the Neutral color (#E5E5E5) or Tertiary color (#1B1B1B) depending on the required prominence. Shadows, if used at all, are 100% opaque, 1px-offset "hard" shadows to simulate a physical stack.

## Shapes

The shape language is strictly **Sharp**. To maintain the technical and industrial feel, there are no rounded corners (0px radius) on any UI elements. This applies to buttons, inputs, cards, and modal windows. This creates a rigid, grid-aligned look that suggests precision engineering.

## Components

### Task Completion Buttons

A specialized pattern for action confirmation and task management. These must never use native browser checkbox styling.

- **Structure**: A 24x24px sharp square.
- **Border**: 1px or 2px solid Neutral (#E5E5E5).
- **Background**: Transparent in default state; Black in high-contrast scenarios.
- **States**:
  - **Hover**: Background shifts to Surface Container Low (#1B1B1B).
  - **Active/Pressed**: 0.8 opacity. Transitions should be instantaneous to simulate a crisp haptic feel.
  - **Completed**: A secondary green (#2E7D32) tick icon appears centered within the square. The border remains constant or may transition to the green color.

### Buttons (Primary)

- **Shape**: Sharp square.
- **Background**: White (#FFFFFF).
- **Text**: Black (#000000), Bold Geist.
- **Interaction**: Invert colors on hover (Black background, White text).

### Input Fields

- **Border**: 1px solid Neutral (#E5E5E5).
- **Background**: Transparent.
- **Focus**: 2px solid White (#FFFFFF).
- **Typography**: JetBrains Mono for all input text.

### Cards

- **Border**: 1px solid Tertiary (#1B1B1B).
- **Background**: Black (#000000).
- **Header**: Separated by a 1px horizontal line.
