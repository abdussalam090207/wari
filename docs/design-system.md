# WARI Design System (WDS)

This design system establishes the visual and interaction foundation for the WARI web application. It is heavily inspired by the premium, high-craft aesthetics of Apple, Stripe, Linear, Framer, and Vercel, seamlessly blended with WARI's eco-cultural identity.

## 1. Core Philosophy
*   **Minimalism & Focus:** Content (the Wayang) is the hero. UI elements should recede into the background.
*   **Craft & Precision:** Pixel-perfect alignment, smooth gradients, and intentional micro-interactions.
*   **Tactile & Physical:** Use of glassmorphism, soft multi-layered shadows, and spring animations to make digital elements feel physical and premium.
*   **Cultural Elegance:** Balancing ultra-modern SaaS design with warm, organic, traditional Indonesian tones.

---

## 2. Color System

We use a highly curated palette to evoke sustainability (Greens), cultural richness (Golds), and modern premium feel (Neutrals/Glass).

### Brand Colors
*   **Primary (Emerald Green):** `hsl(142, 57%, 21%)` / `#165431` — Used for primary actions, prominent branding.
*   **Secondary (Forest Green):** `hsl(145, 63%, 12%)` / `#0B321C` — Used for deep backgrounds, heavy contrast elements.
*   **Accent (Traditional Gold):** `hsl(45, 68%, 51%)` / `#D4AF37` — Used sparingly for highlights, cultural motifs, and active states.

### Backgrounds & Surfaces
*   **Background (Warm White):** `hsl(40, 33%, 98%)` / `#FAF9F5` — The main canvas. Softer than pure white, easier on the eyes, feels organic.
*   **Surface 1 (Card Background):** `hsl(0, 0%, 100%)` / `#FFFFFF` — Pure white for elevated elements to create depth.
*   **Surface 2 (Subtle Fill):** `hsl(40, 20%, 95%)` / `#F3F0EA` — For secondary sections or inactive inputs.

### Typography & Neutrals
*   **Text Primary (Off-Black):** `hsl(0, 0%, 9%)` / `#171717` — Maximum readability without the harshness of pure black.
*   **Text Secondary (Muted):** `hsl(0, 0%, 45%)` / `#737373` — For descriptions, metadata, and secondary labels.
*   **Border / Divider:** `hsl(0, 0%, 89%)` / `#E5E5E5` — Very subtle lines to separate content without cluttering.

---

## 3. Typography System

The typography scale is designed to be editorial, establishing a strong, readable hierarchy similar to Apple's marketing pages.

### Fonts
*   **Display / Headings:** **Playfair Display** (Serif) — Brings cultural weight, elegance, and storytelling elements.
*   **Body / UI:** **Inter** (Sans-Serif) — Clean, geometric, and perfectly legible for all UI elements and long-form text (Inspired by Linear/Stripe).

### Scale
*   **Display 1:** `5rem` (80px), Tracking: `-0.02em`, Leading: `1.1` — Hero Headers
*   **Heading 1:** `3.5rem` (56px), Tracking: `-0.01em`, Leading: `1.2` — Page Titles
*   **Heading 2:** `2.5rem` (40px), Tracking: `0em`, Leading: `1.2` — Section Titles
*   **Heading 3:** `1.5rem` (24px), Tracking: `0em`, Leading: `1.3` — Card Titles
*   **Body Large:** `1.125rem` (18px), Tracking: `0em`, Leading: `1.6` — Introductory paragraphs
*   **Body Base:** `1rem` (16px), Tracking: `0em`, Leading: `1.5` — Standard text
*   **Caption:** `0.875rem` (14px), Tracking: `0.01em`, Leading: `1.5` — Metadata, tags

---

## 4. Shadow & Depth System

Shadows are never harsh. They are soft, multi-layered, and colored slightly to blend organically with the environment (Stripe/Vercel inspired).

*   **Elevation 1 (Buttons / Inputs):** 
    `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
*   **Elevation 2 (Cards / Dropdowns):** 
    `0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)`
*   **Elevation 3 (Hover States / Modals):** 
    `0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)`
*   **Elevation Premium (Floating/Hero Assets):** 
    `0 30px 60px -15px rgba(22, 84, 49, 0.15)` (Tinted with WARI Green)

---

## 5. Radius System

Corners define the "feel" of the app. We use smooth, organic radii (Framer/Apple style).

*   **Small (`sm`):** `6px` — For small UI elements, badges, checkboxes.
*   **Medium (`md`):** `12px` — Standard for buttons, inputs, dropdowns.
*   **Large (`lg`):** `24px` — Standard for product cards, feature containers.
*   **Extra Large (`xl`):** `32px` — For major layout sections, hero imagery, large modals.
*   **Full:** `9999px` — For pills, circular buttons, avatars.

---

## 6. Spacing Scale

A generous spacing scale ensures the UI feels uncluttered and premium.
Using an 8pt grid system.

*   `xs`: 4px
*   `sm`: 8px
*   `md`: 16px
*   `lg`: 24px
*   `xl`: 32px
*   `2xl`: 48px
*   `3xl`: 64px
*   `4xl`: 96px (Standard section vertical padding)
*   `5xl`: 128px (Hero padding)

---

## 7. Animation System (Framer Motion)

Animations must feel natural, physical, and intentional. No harsh linear transitions.

### Physics (Springs)
*   **Snappy (Buttons/Hover):** `stiffness: 400, damping: 25`
*   **Smooth (Page Transitions):** `stiffness: 100, damping: 20`
*   **Fluid (Layout Changes):** `type: "spring", bounce: 0, duration: 0.6`

### Interaction Patterns
*   **Hover Lift:** Cards translate Y by `-4px` and elevate shadow to `Elevation 3`.
*   **Magnetic Buttons:** CTA buttons gently pull towards the cursor when hovered (Framer style).
*   **Scroll Reveal:** Sections fade in (`opacity: 0 -> 1`) and slide up (`y: 20 -> 0`) using intersection observers.
*   **Staggered Children:** Grids (like the Product Catalog) load items with a `0.1s` stagger delay.
*   **Glassmorphism Transition:** Navbar blurs (`backdrop-filter: blur(12px)`) and gains a subtle border when scrolling past 50px.

---

## 8. Component Tokens

### Primary Button
*   **Background:** WARI Emerald Green
*   **Text:** White (Inter, Semi-bold)
*   **Radius:** Full (Pill shape)
*   **Hover:** Slight scale up (`1.02`), shadow increase, background brightness increase.

### Glassmorphic Card (Premium UI)
*   **Background:** `rgba(255, 255, 255, 0.6)`
*   **Backdrop Filter:** `blur(16px)`
*   **Border:** `1px solid rgba(255, 255, 255, 0.4)`
*   **Shadow:** Elevation 2

### Inputs / Forms
*   **Background:** Surface 2 (`#F3F0EA`)
*   **Border:** Transparent
*   **Focus Ring:** `2px solid WARI Gold`
*   **Radius:** Medium (`12px`)
