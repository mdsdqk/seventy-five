---
name: Seventy Five Editorial Design System
colors:
  surface: "#131313"
  surface-dim: "#131313"
  surface-bright: "#393939"
  surface-container-lowest: "#0e0e0e"
  surface-container-low: "#1b1b1b"
  surface-container: "#1f1f1f"
  surface-container-high: "#2a2a2a"
  surface-container-highest: "#353535"
  on-surface: "#e2e2e2"
  on-surface-variant: "#c4c7c8"
  inverse-surface: "#e2e2e2"
  inverse-on-surface: "#303030"
  outline: "#8e9192"
  outline-variant: "#444748"
  surface-tint: "#c6c6c6"
  primary: "#ffffff"
  on-primary: "#2f3131"
  primary-container: "#e2e2e2"
  on-primary-container: "#636465"
  inverse-primary: "#5d5f5f"
  secondary: "#c8c6c5"
  on-secondary: "#313030"
  secondary-container: "#4a4949"
  on-secondary-container: "#bab8b7"
  tertiary: "#ffffff"
  on-tertiary: "#003909"
  tertiary-container: "#a3f69c"
  on-tertiary-container: "#237329"
  error: "#ffb4ab"
  on-error: "#690005"
  error-container: "#93000a"
  on-error-container: "#ffdad6"
  primary-fixed: "#e2e2e2"
  primary-fixed-dim: "#c6c6c6"
  on-primary-fixed: "#1a1c1c"
  on-primary-fixed-variant: "#454747"
  secondary-fixed: "#e5e2e1"
  secondary-fixed-dim: "#c8c6c5"
  on-secondary-fixed: "#1c1b1b"
  on-secondary-fixed-variant: "#474646"
  tertiary-fixed: "#a3f69c"
  tertiary-fixed-dim: "#88d982"
  on-tertiary-fixed: "#002204"
  on-tertiary-fixed-variant: "#005312"
  background: "#131313"
  on-background: "#e2e2e2"
  surface-variant: "#353535"
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: "700"
    lineHeight: "1.1"
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: "700"
    lineHeight: "1.1"
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: "600"
    lineHeight: "1.2"
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: "600"
    lineHeight: "1.3"
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: "1.6"
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "600"
    lineHeight: "1"
    letterSpacing: 0.1em
  button:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "500"
    lineHeight: "1"
    letterSpacing: 0.05em
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

The design system is rooted in high-performance discipline and editorial sophistication. It targets an audience that values precision, quiet luxury, and mental clarity. The visual language is **Monochromatic Minimalism** with a heavy emphasis on **Typography-led Hierarchy**.

The goal is to evoke the feeling of a high-end print magazine or a luxury fitness boutique—serious, focused, and expensive. By stripping away shadows and decorative gradients, the UI forces the user to focus on their data and content, creating an environment of "Digital Stoicism."

## Colors

The palette is intentionally restricted to a monochromatic scale to maintain a disciplined aesthetic.

- **Backgrounds:** Pure Ink Black (`#000000`) is used for the primary canvas to maximize contrast and focus.
- **Surfaces:** Dark Basalt Gray (`#121212`) provides subtle separation for containers, cards, and navigation bars.
- **Accents:** Off-white/Silver (`#E5E5E5`) serves as the primary action color and high-impact text color.
- **Feedback:** Muted Clinical Green (`#2E7D32`) is used sparingly for success states, indicating completed tasks or positive metrics without breaking the somber tone.

## Typography

Typography is the primary structural element of this design system.

- **Headlines:** Playfair Display provides a "stone-carved," authoritative feel. Use tight letter-spacing for large display titles to create a dense, editorial look.
- **Body:** Inter provides a utilitarian contrast to the serif headers. It ensures high legibility for fitness data and long-form lifestyle articles.
- **Hierarchy:** Use the `label-caps` style for section headers and metadata to maintain a clean, organized layout.

## Layout & Spacing

The layout philosophy relies on **Generous Negative Space**. White space (or "black space" in this context) is treated as a premium asset to signify focus and luxury.

- **Grid:** Use a 12-column fixed grid for desktop (centered) and a fluid 4-column grid for mobile.
- **Breathing Room:** Avoid crowding elements. Use `xxl` (80px) spacing between major content sections to emphasize the "wide-screen" editorial feel.
- **Alignment:** Strict left-alignment for all text-heavy content to mirror traditional magazine layouts.

## Elevation & Depth

In alignment with the disciplined, flat aesthetic, this design system **eschews traditional shadows**. Depth is communicated through color and borders:

- **Tonal Separation:** Elements "rise" by shifting from `#000000` to `#121212`.
- **Ghost Borders:** Use 1px solid borders in `#262626` to define card boundaries or input fields.
- **High-Contrast Overlays:** Modals and menus use a slightly lighter surface or a high-contrast border to separate from the background.

## Shapes

To maintain the "sharp" and "disciplined" visual direction, all UI elements utilize **0px border radius**.

Sharp corners convey precision, strength, and an architectural quality. This applies to buttons, input fields, cards, and images.

## Components

- **Buttons:** Primary buttons are solid `#E5E5E5` with `#000000` text (Inter Bold, All Caps). Secondary buttons are outlined (1px `#E5E5E5`) with white text. No rounded corners.
- **Cards:** Background `#121212` with no shadow. Content within cards should have generous internal padding (min 24px).
- **Inputs:** Underline-only or 1px border. Focus state is indicated by a weight increase in the border or a transition to pure white.
- **Progress Bars:** Thin 2px lines. The track is `#262626` and the progress fill is `#E5E5E5` or `#2E7D32` for completed goals.
- **Chips/Tags:** Small, rectangular, with `#262626` backgrounds and uppercase Inter typography.
- **Lists:** Separated by thin 1px horizontal rules (`#262626`) with significant vertical padding to maintain the editorial rhythm.
