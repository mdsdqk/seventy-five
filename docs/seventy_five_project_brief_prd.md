# Seventy Five — Project Brief & Product Requirements

## 1. Product Vision

**Seventy Five** is a premium, editorial-grade lifestyle tool designed for absolute discipline. It strips away the gamification and "noise" of traditional fitness trackers, replacing them with a high-contrast, stone-carved aesthetic and a frictionless command-line logging experience. It is built for those who value permanence over performance metrics.

---

## 2. Design Philosophy & Visual Identity

### Brand Identity

- **Aesthetic:** Editorial, disciplined, and timeless.
- **Color Palette:** Monochromatic. Pure ink black (`#000000`) backgrounds with high-contrast Silver (`#E5E5E5`) typography. Success states use a muted, clinical green (`#2E7D32`).
- **Typography:**
  - **Headers/Streaks:** Sharp, high-contrast serif (Playfair Display) for an "etched in stone" feel.
  - **UI/Structural:** Clean, highly readable sans-serif (Inter/SF Pro).
- **Logo:** A minimalist, geometric "75" numeral.

---

## 3. Core Functional Requirements (The Daily Five)

The app tracks five non-negotiable daily tasks. Completion is binary: you finish all five, or the streak resets.

### 1. Nutrition

- **Constraint:** Clean eating. No alcohol. No cheat meals.
- **Input:** Single-tap checkbox or NLP command ("ate clean").

### 2. Workouts (Two discrete sessions)

- **Logic:** Exactly two 45-minute sessions. Only one may be indoors; the other _must_ be outdoors.
- **Interaction:**
  - Dynamic card with a "+" trigger.
  - Dropdown for Indoor/Outdoor selection.
  - Intelligent restriction: If "Indoor" is logged first, the second must be "Outdoor."
- **Integration:** Optional background sync with Google Fit to auto-verify outdoor GPS tags.

### 3. Water Intake (128 oz)

- **Interaction:** Precision stepper (+/- buttons) and a tactile slider for fine-tuning.
- **Quick Actions:** Dedicated +16oz and +32oz buttons for rapid entry.

### 4. Reading (10 Pages)

- **Constraint:** Non-fiction only.
- **Interaction:** Similar to water—precision stepper and manual checkbox for completion.

### 5. Progress Picture

- **Privacy:** Local-first storage (sandbox directory). No cloud sync to ensure absolute privacy.
- **Interaction:** Modern media picker (camera/gallery) integrated into the dashboard and chat interface.

---

## 4. Navigation & Interface Mechanics

### Dual-Input Architecture

1.  **Direct Dashboard Interaction:** Each task has dedicated buttons and sliders for manual logging.
2.  **Command-Line Logger (Chat):** A minimal bottom-docked input bar (WhatsApp-style) that parses natural language (e.g., "drank 32oz").

### View Hierarchy

- **Primary Dashboard:** Active day progress.
- **History Grid:** A monochromatic chronological archive of daily progress photos.
- **Onboarding:** A high-impact "Path to Permanence" entry flow with passwordless email and social auth.

---

## 5. Widget Strategy (Zero-Launch Tracking)

- **Small (1x1):** Current day number and a circular progress ring.
- **Medium (2x2):** Quick-log water buttons and binary status toggles.
- **Large (4x4):** Full command center with steppers, "Snap" button for photos, and weekly streak visualization.
