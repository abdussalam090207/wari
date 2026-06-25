# WARI Information Architecture & Site Map

This document outlines the multi-page architecture for the WARI web application. Moving away from a single-page structure allows for better SEO, clearer user journeys, and faster perceived load times through Next.js App Router.

---

## 1. `/` (Home Page)
*   **Purpose:** The digital storefront and primary hook for WARI. It introduces the mission (turning plastic into culture) and establishes the premium brand identity.
*   **User Flow:** User lands from social media -> Views premium hero animation -> Reads mission -> Sees a teaser of the top products -> Sees the impact statistics -> Clicks CTA to view Catalog or Process.
*   **Conversion Goal:** Drive users deeper into the site, specifically to the `/catalog` or `/impact` pages.
*   **SEO Purpose:** Target broad keywords like "Wayang Plastik", "Daur Ulang Botol", and "Eco-cultural Indonesia". Establish domain authority.

## 2. `/catalog` (Product Catalog)
*   **Purpose:** To showcase the full range of WARI Wayang characters available for purchase or review.
*   **User Flow:** User browses grid -> Uses filters (e.g., Pandawa, Kurawa) or search -> Clicks on a specific character card.
*   **Conversion Goal:** Funnel users to individual product pages (`/catalog/[slug]`).
*   **SEO Purpose:** Target category-level keywords like "Jual Wayang Plastik", "Karakter Wayang Kulit", and "Kerajinan Daur Ulang".

## 3. `/catalog/[slug]` (Product Detail Page)
*   **Purpose:** Provide deep, immersive storytelling about a specific character alongside material details and purchasing options.
*   **User Flow:** User lands from Catalog -> Views high-res image gallery -> Reads the character's traditional lore -> Sees how many plastic bottles were saved to make it -> Clicks the WhatsApp CTA.
*   **Conversion Goal:** Primary macro-conversion: User clicks the WhatsApp button to initiate an order or inquiry.
*   **SEO Purpose:** Highly specific long-tail keywords (e.g., "Beli Wayang Arjuna Plastik", "Cerita Wayang Bima"). Excellent for capturing high-intent search traffic.

## 4. `/process` (Production Process)
*   **Purpose:** Educational platform detailing the 3R (Reduce, Reuse, Recycle) journey from raw bottle to finished art piece.
*   **User Flow:** User scrolls through an interactive vertical timeline -> Engages with animations showing plastic being cleaned and crafted -> Understands the manual labor and care involved.
*   **Conversion Goal:** Build trust and justify the product's value. Secondary goal: Encourage educators to reach out for workshops.
*   **SEO Purpose:** Target educational queries like "Cara Daur Ulang Botol Plastik", "Proses Pembuatan Wayang", and "Edukasi Lingkungan".

## 5. `/impact` (Environmental & Social Impact)
*   **Purpose:** To transparently display WARI's tangible success metrics and future goals.
*   **User Flow:** User sees large animated counters (Bottles Saved, Puppets Made) -> Reads SWOT analysis -> Reviews the sustainability roadmap.
*   **Conversion Goal:** Secure buy-in from eco-conscious consumers, activists, and potential sponsors. Validate the project's real-world impact.
*   **SEO Purpose:** Target sustainability queries like "Dampak Lingkungan Limbah Plastik", "Inisiatif Ekonomi Sirkular Indonesia", and "Social Enterprise Jakarta".

## 6. `/team` (Team Members)
*   **Purpose:** Humanize the brand by introducing the SMKN 26 Jakarta students behind the initiative.
*   **User Flow:** User views team grid -> Hovers over profiles to see roles -> Clicks social media links to connect.
*   **Conversion Goal:** Establish credibility and foster community connections.
*   **SEO Purpose:** Brand searches for the founders' names or connections to "SMKN 26 Jakarta Innovators".

## 7. `/gallery` (Photo Gallery)
*   **Purpose:** A visual repository of WARI's activities, including workshops, exhibitions, and high-quality product shots.
*   **User Flow:** User filters photos by category (Events, Products, Process) -> Opens images in a lightbox for detailed viewing.
*   **Conversion Goal:** Inspire users and provide visual proof of community engagement.
*   **SEO Purpose:** Image SEO. High-quality, alt-tagged images targeting "Workshop Daur Ulang", "Pameran Wayang", etc.

## 8. `/faq` (Frequently Asked Questions)
*   **Purpose:** Pre-emptively answer common questions regarding materials, ordering processes, durability, and bulk orders.
*   **User Flow:** User searches for a keyword or expands categorized accordions to find answers.
*   **Conversion Goal:** Reduce customer service friction and increase buyer confidence prior to clicking the WhatsApp CTA.
*   **SEO Purpose:** Target question-based long-tail queries (e.g., "Apakah wayang plastik awet?", "Bagaimana cara pesan wayang WARI?"). Capture Featured Snippets on Google.

## 9. `/contact` (Contact Page)
*   **Purpose:** Provide direct, multiple channels for users to reach out to the WARI team.
*   **User Flow:** User clicks a direct social link (WhatsApp, IG, TikTok) OR fills out the embedded email form.
*   **Conversion Goal:** Lead generation for bulk orders, partnerships, media inquiries, or school workshop requests.
*   **SEO Purpose:** Capture "Hubungi WARI", "Kontak WARI Wayang", and local SEO signals.
