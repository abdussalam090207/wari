# WARI (Wayang Lestari) - Project Discovery & Analysis

## 1. Executive Summary

WARI (Wayang Lestari) is an innovative social enterprise initiative spearheaded by students from SMKN 26 Jakarta. It brilliantly merges environmental sustainability with cultural preservation by transforming plastic waste (bottles, straws, packaging) into handcrafted, traditional Indonesian shadow puppets (Wayang Kulit). 

The digital platform for WARI is designed to be a premium, modern, and highly interactive multi-page web application. Moving away from the typical "school project" aesthetic, the website aims to deliver an award-winning digital experience reminiscent of a global environmental startup. It will serve as both a digital catalog for their upcycled products and an interactive educational platform highlighting their environmental impact and production process.

## 2. Project Analysis

### Project Goals
*   **Environmental Impact:** Actively reduce plastic waste by applying circular economy (3R) principles.
*   **Cultural Preservation:** Reintroduce Wayang Kulit to the younger generation through a modern, accessible medium.
*   **Digital Excellence:** Build a premium, world-class digital presence that establishes trust and authority.
*   **Education & Engagement:** Create interactive learning experiences about local culture and environmental responsibility.

### Target Audience
*   **Primary:** Gen Z / Students (ages 13-22) who are digital natives, appreciate modern design, but may be disconnected from traditional culture.
*   **Secondary:** Eco-conscious consumers, environmental activists, educators looking for interactive learning materials, and potential partners/sponsors.

### Current Architecture
*   **Framework:** Next.js 14 App Router.
*   **Rendering:** Static Site Generation (SSG) via `output: 'export'`.
*   **Styling:** Tailwind CSS integrated with shadcn/ui components.
*   **Animations:** Framer Motion for premium, scroll-driven interactions.
*   **Data Strategy:** Serverless and database-less. Uses static JSON files (`data/catalog.json`) for product data.
*   **Hosting:** Vercel for fast, edge-network delivery.

### Folder Structure Analysis
The planned folder structure is highly optimized for a Next.js App Router SSG project:
*   `app/`: Contains all route definitions (`/catalog`, `/process`, `/impact`, etc.) ensuring strict multi-page architecture.
*   `components/`: Modular UI components separated by domain (e.g., `Catalog`, `Home`, `Common`).
*   `data/`: Houses the static JSON 'database'.
*   `public/`: Stores static assets (images, icons).

### Value Proposition
*   **Business Value:** Generates economic value from zero-cost waste materials. Offers an affordable cultural product (Rp10.000/unit) with low overhead.
*   **Environmental Value:** Diverts plastic bottles and packaging from landfills/oceans, providing a tangible, measurable environmental impact.
*   **Cultural Value:** Revitalizes interest in Wayang Kulit by decoupling it from purely traditional materials and adapting it to modern sustainability narratives.

### Scalability Potential
*   **Technical Scalability:** The SSG architecture ensures near-instant load times and infinite scalability with zero backend bottlenecks.
*   **Feature Scalability:** The static JSON approach can easily be swapped for a Headless CMS (like Sanity or Contentful) in the future without rewriting the UI. E-commerce capabilities (e.g., Stripe integration) can be added seamlessly.

---

## 3. Feature List

1.  **Multi-Page Routing:** Dedicated pages with smooth route transitions.
2.  **Interactive Product Catalog:** Grid layout with search, category filtering, and sorting capabilities.
3.  **Detailed Product Pages:** High-quality image galleries, character storytelling, material breakdown, and direct WhatsApp CTA.
4.  **Educational Process Timeline:** Interactive, scroll-animated timeline detailing the 3R production process.
5.  **Impact Dashboard:** Animated data visualizations and counters showing waste saved, puppets created, and communities reached.
6.  **Dynamic Navigation:** Glassmorphic, sticky navbar with mobile full-screen animated menu.
7.  **Premium Micro-Interactions:** Magnetic buttons, hover elevations, and skeleton loading states powered by Framer Motion.
8.  **Direct Communication Channels:** WhatsApp ordering integration and embedded contact forms.

---

## 4. User Personas

### Persona 1: "The Curious Student" (Budi, 16)
*   **Motivation:** Needs an interesting topic for an environmental/arts school project. Likes engaging, fast websites.
*   **Pain Points:** Finds traditional culture boring and environmental topics overly academic.
*   **Goals:** Wants to quickly understand what WARI is and download images/info for his project.

### Persona 2: "The Eco-Advocate" (Siti, 24)
*   **Motivation:** Passionate about sustainability. Actively looks for local brands reducing plastic waste.
*   **Pain Points:** Skeptical of greenwashing. Needs to see real impact and transparent processes.
*   **Goals:** Wants to see the environmental data (Impact Dashboard) and potentially purchase a product to support the cause.

### Persona 3: "The Modern Educator" (Pak Andi, 40)
*   **Motivation:** Looking for innovative ways to teach local culture and ecology.
*   **Pain Points:** Existing cultural materials are outdated and don't engage Gen Z.
*   **Goals:** Wants to use the 'Process' timeline as a teaching tool and contact the team for a potential workshop.

---

## 5. User Journey

**Scenario: Purchasing a Wayang Product**
1.  **Awareness & Discovery:** User clicks a link from TikTok/Instagram and lands on the **Home Page**. They are greeted with premium animations and a clear mission statement.
2.  **Exploration:** User navigates to the **Impact Page** to verify the project's legitimacy and environmental claims, impressed by the animated counters.
3.  **Browsing:** User clicks to the **Catalog Page**, using filters to find specific characters (e.g., "Arjuna").
4.  **Consideration:** User enters the **Product Detail Page**. They read the story behind the character and see the materials used (e.g., "3 Recycled Bottles").
5.  **Action:** User clicks the "Order via WhatsApp" button, which opens a pre-filled message to the WARI team.

---

## 6. Site Map

```text
WARI Platform
├── / (Home)
├── /catalog (Product Catalog)
│   └── /catalog/[slug] (Product Details)
├── /process (Production Process)
├── /impact (Environmental & Social Impact)
├── /team (Team Members & Profiles)
├── /gallery (Photo & Event Gallery)
├── /faq (Frequently Asked Questions)
└── /contact (Contact Information & Socials)
```

---

## 7. Information Architecture

**Global Elements:** Sticky Glassmorphism Header, Footer with Quick Links.

*   **Home:** Hero Sequence -> Mission -> Featured Products Highlight -> Impact Metrics Summary -> Final CTA.
*   **Catalog:** Search/Filter Bar -> Dynamic Product Grid -> Pagination/Load More.
*   **Product Detail:** Breadcrumbs -> Image Gallery (Left) -> Product Info & Story (Right) -> Sticky CTA -> Related Products.
*   **Process:** Vertical Scroll-Driven Timeline (Collection -> Sorting -> Cleaning -> Crafting).
*   **Impact:** Hero Statistic -> Animated Counters Grid -> SWOT Analysis -> Future Roadmap.
*   **Team:** Mission Statement -> Team Member Cards Grid.
*   **Gallery:** Category Tabs -> Masonry Image Grid -> Lightbox View.
*   **FAQ:** Categorized Accordion Lists -> Search Bar.
*   **Contact:** Direct Links (WA, IG, TikTok) -> Embedded Email Form.
