'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, PlayCircle } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations/variants'

// Sample Gallery Data
const galleryData = [
  {
    id: 1,
    title: "Karakter Gatotkaca",
    category: "Karakter",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=800&q=80",
    description: "Detail ukiran Gatotkaca dari botol hijau bekas sprite.",
    aspectRatio: "aspect-[4/5]"
  },
  {
    id: 2,
    title: "Workshop SMAN 26",
    category: "Workshop",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=80",
    description: "Antusiasme siswa dalam workshop daur ulang WARI.",
    aspectRatio: "aspect-video"
  },
  {
    id: 3,
    title: "Proses Pemotongan",
    category: "Proses",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    description: "Proses memipihkan dan memotong botol plastik PET.",
    aspectRatio: "aspect-square"
  },
  {
    id: 4,
    title: "Karakter Arjuna",
    category: "Karakter",
    image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=800&q=80",
    description: "Arjuna dengan sentuhan emas dari bungkus chitato.",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 5,
    title: "Pengecatan Wajah",
    category: "Proses",
    image: "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?auto=format&fit=crop&w=800&q=80",
    description: "Detailing ekspresi wajah wayang menggunakan cat akrilik.",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: 6,
    title: "Pameran Lingkungan",
    category: "Acara",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    description: "Instalasi seni WARI di pameran lingkungan hidup Jakarta.",
    aspectRatio: "aspect-[16/9]"
  },
  {
    id: 7,
    title: "Karakter Srikandi",
    category: "Karakter",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
    description: "Srikandi yang elegan dari daur ulang botol bening.",
    aspectRatio: "aspect-[3/5]"
  },
  {
    id: 8,
    title: "Hasil Akhir",
    category: "Karakter",
    image: "https://images.unsplash.com/photo-1518998053401-a41490219ca0?auto=format&fit=crop&w=800&q=80",
    description: "Koleksi lengkap wayang Pandawa Lima versi WARI.",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: 9,
    title: "Sesi Mentoring",
    category: "Workshop",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
    description: "Tim WARI mengajarkan teknik menyambung sendi wayang.",
    aspectRatio: "aspect-square"
  }
]

const categories = ["Semua", "Karakter", "Proses", "Workshop", "Acara"]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Semua")
  const [selectedImage, setSelectedImage] = useState<typeof galleryData[0] | null>(null)

  const filteredImages = useMemo(() => {
    if (activeCategory === "Semua") return galleryData
    return galleryData.filter(item => item.category === activeCategory)
  }, [activeCategory])

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-wari-gold/10 text-wari-gold font-bold text-sm tracking-widest uppercase mb-4">
            Galeri Visual
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold text-wari-dark mb-6 font-serif">
            Rekam Jejak <span className="text-wari-green">WARI</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
            Jelajahi berbagai karya, proses kreatif, dan momen kebersamaan 
            kami dalam melestarikan budaya dan menjaga lingkungan.
          </motion.p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-wari-green text-white shadow-lg shadow-wari-green/30 scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Gallery Grid */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                key={item.id}
                className="break-inside-avoid"
              >
                <div 
                  className={`relative w-full rounded-3xl overflow-hidden bg-gray-100 group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ${item.aspectRatio}`}
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-wari-dark/90 via-wari-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-wari-gold text-wari-dark text-xs font-bold rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white font-serif mb-1">{item.title}</h3>
                      <p className="text-white/80 text-sm line-clamp-2">{item.description}</p>
                    </div>
                    
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 delay-100">
                      <ZoomIn className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">Belum ada foto di kategori ini.</p>
          </div>
        )}

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-wari-dark/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="w-full md:w-2/3 h-[40vh] md:h-[80vh] bg-gray-100 relative">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full md:w-1/3 p-8 flex flex-col justify-center bg-wari-cream">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-wari-green/10 text-wari-green text-xs font-bold rounded-full uppercase tracking-wider">
                    {selectedImage.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-wari-dark font-serif mb-4">
                  {selectedImage.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
