# WARI Website Master Specification

# Project Name

WARI — Wayang Lestari

Transforming Plastic Waste Into Indonesian Cultural Heritage.

---

# Project Goal

Create a premium multi-page website for WARI, a social impact project that transforms plastic waste into handcrafted Indonesian shadow puppets while preserving local culture and educating younger generations.

The website should feel like:

* A global environmental startup
* A modern NGO website
* An award-winning digital experience
* A premium social enterprise platform

The website must NOT look like:

* A school project website
* A single-page landing page
* A template website
* A static informational website

---

# Website Architecture

This website MUST use a real multi-page architecture.

Each navigation item must have its own dedicated route and page.

Routes:

/                     → Home
/catalog              → Product Catalog
/catalog/[slug]       → Product Details
/process              → Production Process
/impact               → Environmental Impact
/team                 → Team Members
/gallery              → Photo Gallery
/faq                  → Frequently Asked Questions
/contact              → Contact Page

---

# Navigation

Sticky Navbar

Desktop:

* Logo
* Home
* Catalog
* Process
* Impact
* Team
* Gallery
* FAQ
* Contact

Mobile:

* Animated full-screen menu
* Smooth opening animation
* Backdrop blur effect

Navbar behavior:

* Transparent on hero section
* Glassmorphism on scroll
* Active route highlighting
* Animated underline indicator
* Smooth page transitions

---

# Design Language

Follow principles from:

* UI UX Pro Max Skill
* Modern SaaS UI
* Apple website
* Stripe website
* Framer showcase websites
* Awwwards websites

Design keywords:

* Premium
* Elegant
* Minimal
* Modern
* Storytelling
* Cultural
* Sustainable

---

# Color Palette

Primary:
Emerald Green

Secondary:
Forest Green

Accent:
Traditional Gold

Background:
Warm White

Additional:
Indonesian cultural color inspirations.

---

# Typography

Large editorial typography.

Requirements:

* Strong hierarchy
* Large spacing
* Premium reading experience
* Responsive typography scaling

---

# Animation Requirements

Animation Framework:

* Framer Motion

Animation Inspiration:

* ReactBits
* Apple
* Stripe
* Framer examples

Animation Philosophy:

Elegant, premium and meaningful.

Never excessive.

---

# Global Animations

Page Transition:

* Fade transition
* Slide transition
* Shared element transition
* Route transition animation

Micro Interactions:

* Magnetic buttons
* Hover elevation
* Icon movement
* Card expansion
* Smooth scrolling

Loading Experience:

* Animated page loader
* Skeleton loading
* Smooth content reveal

---

# Home Page

Route:

/

Purpose:

Introduce WARI and encourage exploration.

Sections:

* Hero Section
* Mission Statement
* Featured Products
* Environmental Statistics
* Process Preview
* Team Preview
* Final CTA

Hero Elements:

* Animated Wayang Illustration
* Floating Elements
* Scroll Indicator
* Animated Statistics
* CTA Buttons

---

# Catalog Page

Route:

/catalog

Purpose:

Display all WARI products.

Features:

* Product Grid
* Search Function
* Category Filter
* Availability Badge
* Sorting System

Card Content:

* Product Image
* Character Name
* Description
* Price
* Availability
* WhatsApp Button

Animations:

* Hover Lift
* Image Zoom
* Card Reveal

---

# Product Detail Page

Route:

/catalog/[slug]

Purpose:

Display product details.

Sections:

* Product Gallery
* Description
* Materials
* Story Behind Character
* Price
* Order Button
* Related Products

Animations:

* Shared Layout Transition
* Image Zoom
* Gallery Animation

---

# Process Page

Route:

/process

Purpose:

Explain production process.

Timeline:

Collect Plastic
↓
Sort Materials
↓
Clean Materials
↓
Reuse Process
↓
Recycle Process
↓
Crafting
↓
Painting
↓
Finished Product

Visual Style:

* Timeline Layout
* Interactive Steps
* Scroll Animation
* Animated Illustrations

---

# Impact Page

Route:

/impact

Purpose:

Show environmental and social impact.

Metrics:

* Plastic Waste Recycled
* Puppets Created
* Workshops Conducted
* Students Educated
* Communities Involved

Additional Sections:

* SWOT Analysis
* Growth Roadmap
* Sustainability Goals

Animations:

* Counter Animation
* Progress Bar
* Data Visualization
* Scroll Reveal

---

# Team Page

Route:

/team

Purpose:

Introduce members.

Card Content:

* Photo
* Name
* Position
* Responsibilities
* Social Media Links

Animations:

* Hover Effect
* Social Icon Animation
* Card Elevation

---

# Gallery Page

Route:

/gallery

Purpose:

Display documentation.

Categories:

* Products
* Workshops
* Production Process
* Events

Features:

* Masonry Layout
* Lightbox
* Filter Categories

Animations:

* Image Reveal
* Smooth Transitions
* Gallery Expansion

---

# FAQ Page

Route:

/faq

Purpose:

Answer common questions.

Features:

* Accordion Animation
* Search Function
* Category Grouping

---

# Contact Page

Route:

/contact

Purpose:

Provide communication channels.

Sections:

* WhatsApp
* Instagram
* TikTok
* Email
* Contact Form

Animations:

* Button Hover
* Input Focus Animation
* Success State Animation

---

# Technical Stack

Framework:
Next.js 14 App Router

Styling:
Tailwind CSS

Animation:
Framer Motion

UI Components:
shadcn/ui

Icons:
Lucide React

Deployment:
Vercel

Rendering:
Static Site Generation

Backend:
Not required.

---

# Folder Structure

app/

page.tsx

catalog/
page.tsx
[slug]/page.tsx

process/
page.tsx

impact/
page.tsx

team/
page.tsx

gallery/
page.tsx

faq/
page.tsx

contact/
page.tsx

components/

animations/

lib/

public/

---

# Performance Requirements

Target Lighthouse Score:

95+

Requirements:

* SEO Optimized
* Mobile First
* Accessibility Compliant
* Fast Loading
* Optimized Images
* Lazy Loading

---

# Final Objective

Visitors should immediately think:

"This looks like an international social startup."

Not:

"This is a school project website."

The website must create trust, professionalism and emotional connection while showcasing Indonesian culture and environmental responsibility.
