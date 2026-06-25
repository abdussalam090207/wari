'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, HelpCircle, MessageCircle } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations/variants'
import MagneticButton from '@/lib/animations/MagneticButton'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqData = [
  {
    id: "q1",
    category: "Umum",
    question: "Apa itu WARI (Wayang Lestari)?",
    answer: "WARI adalah inisiatif sosial dan lingkungan yang mendaur ulang limbah botol plastik dan bungkus makanan ringan menjadi karya seni wayang kulit kontemporer yang bernilai tinggi, sekaligus melestarikan budaya lokal."
  },
  {
    id: "q2",
    category: "Produk",
    question: "Apakah wayang WARI aman untuk anak-anak?",
    answer: "Ya, wayang kami telah melalui proses pembersihan yang ketat dan dilapisi pelindung (coating) khusus yang aman. Bagian tepi juga dipotong sedemikian rupa agar tidak tajam. Namun, tetap disarankan pengawasan untuk anak di bawah umur."
  },
  {
    id: "q3",
    category: "Pemesanan",
    question: "Bagaimana cara memesan wayang WARI?",
    answer: "Anda dapat memesan melalui halaman Katalog di website ini. Klik tombol 'Pesan Sekarang' pada produk yang tersedia, dan Anda akan langsung diarahkan ke WhatsApp admin kami untuk konfirmasi dan pembayaran."
  },
  {
    id: "q4",
    category: "Workshop",
    question: "Apakah WARI mengadakan workshop atau pelatihan?",
    answer: "Ya! Kami membuka kelas workshop daur ulang untuk sekolah, komunitas, maupun perusahaan. Peserta akan diajarkan proses pembuatan wayang dari awal hingga akhir."
  },
  {
    id: "q5",
    category: "Produk",
    question: "Berapa lama proses pembuatan satu wayang?",
    answer: "Satu wayang membutuhkan waktu pengerjaan 2-4 hari, tergantung pada tingkat kerumitan karakter dan detail ornamen yang diaplikasikan."
  },
  {
    id: "q6",
    category: "Pemesanan",
    question: "Apakah melayani pengiriman ke luar Jabodetabek?",
    answer: "Tentu. Kami melayani pengiriman ke seluruh Indonesia menggunakan jasa ekspedisi terpercaya. Wayang dikemas dengan aman untuk mencegah kerusakan selama perjalanan."
  },
  {
    id: "q7",
    category: "Umum",
    question: "Dari mana bahan baku WARI didapatkan?",
    answer: "Bahan baku dikumpulkan dari lingkungan sekitar sekolah SMK Negeri 26 Jakarta, sumbangan dari siswa, dan kerja sama dengan bank sampah lokal."
  },
  {
    id: "q8",
    category: "Pemesanan",
    question: "Apakah bisa request/custom karakter tertentu?",
    answer: "Sangat bisa! Anda dapat memesan karakter khusus (custom request). Silakan hubungi admin kami melalui WhatsApp untuk mendiskusikan detail desain dan estimasi biayanya."
  }
]

const categories = ["Semua", "Umum", "Produk", "Pemesanan", "Workshop"]

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("Semua")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFAQs = useMemo(() => {
    return faqData.filter((faq) => {
      const matchCategory = activeCategory === "Semua" || faq.category === activeCategory
      const matchSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      return matchCategory && matchSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <section className="py-24 bg-wari-cream min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-wari-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-wari-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-xl text-wari-green mb-6">
            <HelpCircle className="w-8 h-8" />
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-wari-dark mb-6 font-serif">
            Ada Pertanyaan?
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang paling sering diajukan seputar 
            produk, pemesanan, dan inisiatif WARI.
          </motion.p>
        </motion.div>

        {/* Search & Filter Bar */}
        <motion.div 
          className="bg-white p-4 rounded-[2rem] shadow-xl border border-gray-100 mb-12 flex flex-col md:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text"
              placeholder="Cari pertanyaan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-gray-50 rounded-full border-none focus:ring-2 focus:ring-wari-green/50 focus:bg-white transition-all text-gray-700 outline-none"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 md:justify-end items-center px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-wari-dark text-white shadow-lg scale-105'
                    : 'bg-transparent text-gray-500 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div 
          className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            {filteredFAQs.length > 0 ? (
              <motion.div
                key="faq-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full"
              >
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {filteredFAQs.map((faq) => (
                    <AccordionItem 
                      key={faq.id} 
                      value={faq.id}
                      className="border border-gray-100 rounded-2xl px-6 bg-gray-50/50 data-[state=open]:bg-white data-[state=open]:shadow-md transition-all duration-300"
                    >
                      <AccordionTrigger className="hover:no-underline py-6 text-left font-bold text-wari-dark text-lg md:text-xl">
                        <span className="flex items-center gap-4">
                          <span className="hidden sm:inline-block px-3 py-1 bg-wari-green/10 text-wari-green text-xs font-bold rounded-full uppercase tracking-wider shrink-0">
                            {faq.category}
                          </span>
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Tidak Ditemukan</h3>
                <p className="text-gray-500">
                  Maaf, kami tidak dapat menemukan jawaban untuk pencarian Anda.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Still Need Help CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6 font-medium">
            Masih punya pertanyaan yang belum terjawab?
          </p>
          <MagneticButton>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-wari-green text-white px-8 py-4 rounded-full font-bold hover:bg-wari-green-light transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Chat Admin via WhatsApp
            </a>
          </MagneticButton>
        </motion.div>

      </div>
    </section>
  )
}
