# 🌿 WARI (Wayang Lestari) — Frontend Web Application

<div align="center">
  <p align="center">
    <strong>An Eco-Cultural Initiative: Transforming Plastic Waste into Traditional Wayang Kulit Heritage</strong>
  </p>
  <p>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Framework-Next.js%2014%20(SSG)-black?style=for-the-badge&logo=next.js" alt="Next.js 14"></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Styling-Tailwind%20CSS-blue?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS"></a>
    <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Animation-Framer%20Motion-purple?style=for-the-badge&logo=framer" alt="Framer Motion"></a>
    <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Deployment-Vercel-black?style=for-the-badge&logo=vercel" alt="Vercel"></a>
  </p>
</div>

---

## 🌿 Apa itu WARI? (Deskripsi Proyek)

**WARI (Wayang Lestari)** adalah sebuah proyek bisnis kreatif dan gerakan sosial ramah lingkungan yang diinisiasi oleh tim inovator dari **SMK Negeri 26 Jakarta**[cite: 1]. Nama proyek ini diambil langsung dari file proposal resmi kami: *WARI_SMKN 26 Jakarta_PENGELOLAAN LIMBAH PLASTIK UNTUK PELESTARIAN WARISAN BUDAYA BERUPA WAYANG KULIT (WARI_ WAYANG LESTARI)_BusinessPlanABCD2024.pdf*[cite: 1].

### 🚨 Latar Belakang & Masalah
Proyek ini lahir untuk menjawab dua tantangan besar di era modernisasi saat ini:
1. **Darurat Sampah Plastik:** Indonesia memproduksi jutaan ton sampah plastik setiap tahunnya, di mana botol plastik minuman kemasan menjadi salah satu penyumbang terbesar yang mencemari lingkungan dan lautan.
2. **Krisis Identitas Budaya Lokal:** Berdasarkan riset, lebih dari 52% remaja (Gen Z) memiliki minat yang rendah terhadap kesenian tradisional seperti wayang kulit dan cenderung lebih bangga atau tertarik pada budaya asing yang sedang tren.

### 💡 Solusi Inovatif WARI
WARI hadir sebagai jembatan melalui konsep **Ekonomi Sirkular** dan **Modernisasi Kebudayaan**. Kami mengubah limbah botol plastik yang tidak bernilai menjadi produk karya seni karakter wayang kulit yang unik, bernilai estetika tinggi, dan memiliki nilai ekonomi baru[cite: 1]. 

* **Metode Produksi Hijau (3R):** Produk WARI dibuat secara manual (dan semi-mesin untuk skala besar) dengan memanfaatkan botol plastik bekas yang dipipihkan sebagai badan utama wayang, sedotan bekas, serta bungkus makanan ringan/camilan sebagai busana atau hiasan karakter pewayangan.
* **Tujuan Akhir:** Mengurangi volume sampah plastik di lingkungan sekaligus menjadi media edukasi interaktif bagi para pelajar untuk mengenal kembali tokoh, moral, dan filosofi pewayangan Nusantara dengan pendekatan abad ke-21.

---

## 🗺️ Arsitektur Informasi Web App

Berdasarkan blueprint alur kerja pada file *wari_frontend_workflow.jpg*, web app informatif ini dirancang tanpa backend server maupun database portal admin (Supabase/Firebase). Seluruh informasi disajikan secara statis dan interaktif melalui 5 bagian utama:

1. **Landing Page (Hero & Tagline)** — Menyajikan visualisasi *first-impression* yang kuat mengenai misi WARI dan *tagline* kampanye budaya-lingkungan.
2. **Katalog Wayang** — Komponen grid produk statis yang menampilkan foto produk wayang dari botol plastik, nama karakter tokoh, harga satuan (Rp10.000,-/unit berdasarkan proyeksi keuangan), dan ketersediaan[cite: 1].
3. **Proses Edukasi (3R)** — Panduan visual interaktif *step-by-step* daur ulang botol plastik menjadi badan wayang untuk kebutuhan edukasi/workshop.
4. **Impact Dashboard** — Ruang edukasi yang menampilkan visualisasi statistik penanganan limbah, *counter* sampah yang berhasil diselamatkan, infografis budaya, dan analisis SWOT visual.
5. **Team Portal** — Profil singkat tiga anggota tim penyusun (Marwan Wisnu, Abdus Salam, Ayudya Al Jahraa) beserta kontak media sosial[cite: 1].

> 🚀 **Interaksi CTA:** Transaksi pembelian produk dan pengenalan komunitas dialihkan secara langsung (*direct link*) menggunakan tombol eksternal mengarah ke WhatsApp, Instagram, dan TikTok tanpa integrasi backend API.

---

## 🛠️ Tech Stack & Architecture

* **Core Framework:** `Next.js 14` dengan konfigurasi `output: 'export'` (Static Site Generation/SSG).
* **Styling Engine:** `Tailwind CSS` untuk desain UI yang bersih, modern, dan responsif.
* **Animation Library:** `Framer Motion` khusus menangani *scroll-driven animations* interaktif pada section "Dampak" dan "Proses".
* **Deployment & CI/CD:** `Vercel Infrastructure` (Hosting gratis domain `.vercel.app`).

---

## 📂 Directory Structure

```text
wari-frontend/
├── public/              # Aset statis (Gambar Wayang, Icon, Logo WARI)
├── src/
│   ├── app/             # Next.js App Router (Halaman Utama & Layout)
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/      # Komponen UI Reusable (Navbar, Footer, Grid)
│   │   ├── Common/
│   │   ├── Catalog/
│   │   └── Home/
│   ├── data/            # Data Statis berbasis JSON (Pengganti Database)
│   │   └── catalog.json # Menyimpan data statis karakter wayang & harga
│   └── styles/          # Konfigurasi global CSS & Tailwind
├── tailwind.config.ts   # Konfigurasi kustom tema Tailwind
└── next.config.js       # Konfigurasi output static export


By : Abdussalam & Marwan Wisnu