# WARI Wireframes & Layout Architecture

This document provides textual wireframes for all WARI pages. It defines the structural layout, section order, content hierarchy, and strategic placement of Calls to Action (CTAs) before any UI coding begins.

---

## 1. Home Page (`/`)

**Visual Hierarchy:** High-impact visuals first, transitioning to informative and trust-building metrics.
**Content Hierarchy:** Hook -> Mission -> Product Teaser -> Proof of Impact -> Process Teaser -> Team Teaser -> Final Push.

```text
[ Global Navigation Bar: Sticky, Glassmorphic ]
  Logo (L) | Links: Catalog, Process, Impact... (C) | CTA: Hubungi Kami (R)

[ Section 1: Hero ]
  (Visual: Large animated Wayang illustration floating on right)
  (Text L): Display H1: "Transforming Plastic Waste Into Cultural Heritage"
  (Text L): Body: Short description of WARI's mission.
  (CTA): Primary Button -> "Lihat Katalog" | Secondary Button -> "Pelajari Proses"

[ Section 2: Mission Statement ]
  (Layout: Centered, minimal, large typography)
  (Text): H2: "Menghidupkan Kembali Budaya, Menyelamatkan Lingkungan"

[ Section 3: Featured Products ]
  (Header): H2: "Karya Unggulan" + "Lihat Semua" Link
  (Layout: Horizontal scroll or 3-column grid)
  (Cards): Product Image | Name | Price
  (Hover): Image zooms slightly, magnetic effect.

[ Section 4: Environmental Impact Snapshot ]
  (Layout: Dark background for contrast, 4 columns)
  (Content): Large animated numbers (e.g., "500+ Botol Diselamatkan", "50+ Wayang Tercipta")
  (CTA): "Lihat Detail Dampak" -> routes to /impact

[ Section 5: Process Preview ]
  (Layout: Split screen. Left: Image of crafting. Right: Text)
  (Text): H2: "Dari Limbah Menjadi Seni"
  (CTA): "Pelajari Proses 3R" -> routes to /process

[ Section 6: Team Preview ]
  (Layout: 3-column grid showing Founders' faces)
  (Text): "Inovator dari SMKN 26 Jakarta"

[ Section 7: Final CTA (Pre-Footer) ]
  (Layout: Large banner, Emerald Green background)
  (Text): "Tertarik untuk kolaborasi atau memesan dalam jumlah besar?"
  (CTA): Large Gold Button -> "Hubungi via WhatsApp"

[ Global Footer ]
  Links, Socials, Copyright
```

---

## 2. Catalog Page (`/catalog`)

**Visual Hierarchy:** Functional and grid-based. The products are the absolute focus.
**Content Hierarchy:** Search/Filter -> Products -> Pagination.

```text
[ Global Navigation Bar ]

[ Section 1: Catalog Header ]
  (Text): H1: "Katalog Wayang"
  (Text): Body: "Pilih karakter wayang favoritmu yang terbuat dari 100% material daur ulang."

[ Section 2: Search & Filter Toolbar ]
  (Layout: Sticky below navbar on scroll)
  (Input): Search Bar (L)
  (Dropdowns/Pills): Kategori (Pandawa, Kurawa, dll), Urutkan (Harga, Abjad) (R)

[ Section 3: Product Grid ]
  (Layout: 3 or 4-column responsive masonry or standard grid)
  (Card Structure):
    - Top: Image container (grey background, image centered)
    - Middle: Character Name (H3), Short description (Body Muted)
    - Bottom: Price (Bold)
    - Hover CTA: "Detail Produk" overlay or button.

[ Section 4: Pagination / Load More ]
  (CTA): "Muat Lebih Banyak" Button
```

---

## 3. Product Detail Page (`/catalog/[slug]`)

**Visual Hierarchy:** Image-heavy, storytelling approach mimicking premium e-commerce (e.g., Apple product pages).
**Content Hierarchy:** Product Specs -> Lore/Story -> Material Impact -> Purchasing.

```text
[ Global Navigation Bar ]

[ Section 1: Main Product View ]
  (Layout: Split screen. Sticky right column on desktop)
  
  (Left Column - Visuals):
    - Large Main Image (Sticky until scrolled past gallery)
    - Thumbnail Strip below

  (Right Column - Content & Action):
    - Breadcrumbs: Katalog / Pandawa / Arjuna
    - Title: H1: "Arjuna"
    - Price: Large, bold.
    - Description: The cultural story of Arjuna.
    - Spec Box: 
        - "Terbuat dari: 3 Botol Plastik"
        - "Tinggi: 45 cm"
    - CTA: Large Primary Button -> "Pesan via WhatsApp" (Opens pre-filled message)

[ Section 2: Material & Impact Story ]
  (Layout: Full width, dark background)
  (Content): Infographic showing exactly how this specific puppet helps the environment.

[ Section 3: Related Products ]
  (Layout: 4-column grid)
  (Header): "Karakter Lainnya"
```

---

## 4. Process Page (`/process`)

**Visual Hierarchy:** Linear, narrative flow. Vertical scrolling timeline.
**Content Hierarchy:** Introduction -> Step 1 -> Step 2 -> Step 3 -> Workshop CTA.

```text
[ Global Navigation Bar ]

[ Section 1: Hero ]
  (Text): H1: "Proses Transformasi 3R"
  (Subtitle): "Bagaimana kami mengubah sampah menjadi mahakarya."

[ Section 2: Interactive Timeline ]
  (Layout: Central vertical line. Alternating Left/Right content blocks)
  
  [Block 1: Pengumpulan] (Left)
    - Image/Animation of sorting bottles.
    - Text: Deskripsi.
    
  [Block 2: Pembersihan & Pemipihan] (Right)
    - Image/Animation of cleaning.
    - Text: Deskripsi.

  [Block 3: Pemotongan Karakter] (Left)
    - Image/Animation of shaping the plastic.
    - Text: Deskripsi.
    
  [Block 4: Pengecatan & Finishing] (Right)
    - Image/Animation of painting with eco-friendly paint.
    - Text: Deskripsi.

[ Section 3: Workshop CTA ]
  (Layout: Centered block)
  (Text): "Ingin belajar langsung cara membuatnya?"
  (CTA): "Undang WARI ke Sekolah/Event Anda"
```

---

## 5. Impact Page (`/impact`)

**Visual Hierarchy:** Data-driven but highly visual using charts, bold numbers, and Framer Motion counters.
**Content Hierarchy:** Headline Stats -> SWOT -> Future Goals.

```text
[ Global Navigation Bar ]

[ Section 1: Hero Dashboard ]
  (Text): H1: "Dampak Nyata WARI"
  (Layout: 3 massive animated counters)
  [Counter 1]: Kg Sampah Berkurang
  [Counter 2]: Wayang Terjual
  [Counter 3]: Siswa Teredukasi

[ Section 2: Data Visualizations ]
  (Layout: 2-column)
  (Left): Bar chart/Infographic of plastic waste issues in Jakarta.
  (Right): How WARI's production directly counters this.

[ Section 3: Analisis SWOT ]
  (Layout: 2x2 Grid)
  [S] Strengths Card | [W] Weaknesses Card
  [O] Opportunities  | [T] Threats Card

[ Section 4: Roadmap 2024-2025 ]
  (Layout: Horizontal scroll timeline)
  (Content): Milestones (e.g., "Pameran Nasional", "Integrasi Mesin Press").
```

---

## 6. Team Page (`/team`)

**Visual Hierarchy:** Clean, professional yet approachable.
**Content Hierarchy:** Mission -> Founder Cards.

```text
[ Global Navigation Bar ]

[ Section 1: Header ]
  (Text): H1: "Di Balik WARI"
  (Subtitle): "Inovator muda dari SMKN 26 Jakarta."

[ Section 2: Team Grid ]
  (Layout: 3-column grid)
  (Card Structure):
    - Top: High-quality portrait (Black/White turning to color on hover)
    - Name: H3
    - Role: (e.g., "Production Manager", "UI/UX Designer")
    - Divider Line
    - Bio/Responsibilities (Short text)
    - Social Links: Icons (LinkedIn, Instagram)
```

---

## 7. Gallery Page (`/gallery`)

**Visual Hierarchy:** Immersive, image-first layout. Minimal text.
**Content Hierarchy:** Categories -> Masonry Image Grid.

```text
[ Global Navigation Bar ]

[ Section 1: Header ]
  (Text): H1: "Galeri Dokumentasi"

[ Section 2: Category Tabs ]
  (Layout: Horizontal pill buttons)
  [Semua] [Produk] [Proses] [Workshop & Event]

[ Section 3: Masonry Grid ]
  (Layout: Dynamic masonry layout)
  (Interaction): Clicking an image opens a full-screen Lightbox with a caption.
```

---

## 8. FAQ Page (`/faq`)

**Visual Hierarchy:** Text-focused, highly structured for quick scanning.
**Content Hierarchy:** Search -> Categories -> Accordion Lists.

```text
[ Global Navigation Bar ]

[ Section 1: Header & Search ]
  (Text): H1: "Ada Pertanyaan?"
  (Input): Large search bar centered.

[ Section 2: FAQ Content ]
  (Layout: 2-column or sidebar layout)
  
  (Sidebar - Left):
    Categories (Produk, Pengiriman, Pemesanan, Material)
    
  (Main Content - Right):
    [Accordion Item]: "Terbuat dari bahan apa wayang ini?"
      -> (Expands on click to reveal answer)
    [Accordion Item]: "Berapa lama proses pembuatan?"
    [Accordion Item]: "Apakah menerima pesanan custom?"

[ Section 3: Unanswered Questions CTA ]
  (Text): "Tidak menemukan jawaban yang Anda cari?"
  (CTA): "Hubungi Admin" -> routes to /contact
```

---

## 9. Contact Page (`/contact`)

**Visual Hierarchy:** Split utility. Direct links vs. form submission.
**Content Hierarchy:** Direct Channels -> Email Form -> Location.

```text
[ Global Navigation Bar ]

[ Section 1: Header ]
  (Text): H1: "Hubungi Kami"
  (Subtitle): "Mari berkolaborasi untuk Indonesia yang lebih bersih dan berbudaya."

[ Section 2: Main Contact Layout ]
  (Layout: Split screen, 2 columns)
  
  (Left Column - Direct Channels):
    - [Card]: WhatsApp (Primary CTA) -> Large button
    - [Card]: Instagram -> Follow for updates
    - [Card]: TikTok -> Watch our process
    
  (Right Column - Embedded Form):
    - Input: Nama Lengkap
    - Input: Email
    - Dropdown: Subjek (Pembelian / Kerjasama / Event)
    - Textarea: Pesan
    - CTA: "Kirim Pesan" Button

[ Section 3: Location / Basecamp ]
  (Text): "Basecamp Produksi: SMKN 26 Jakarta"
  (Visual): Optional stylized map graphic.
```
