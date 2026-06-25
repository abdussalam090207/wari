'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, MessageCircle, Check, X, Search, Filter } from 'lucide-react'
import catalogData from '@/data/catalog.json'
import { fadeUp, staggerContainer } from '@/lib/animations/variants'
import MagneticButton from '@/lib/animations/MagneticButton'
import { Button } from '@/components/ui/button'

interface WayangItem {
  id: number
  name: string
  character: string
  price: number
  available: boolean
  description: string
  philosophy: string
  image: string
  color: string
}

type SortOption = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc'

export default function Catalog() {
  const [wayangList, setWayangList] = useState<WayangItem[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filterAvailable, setFilterAvailable] = useState<string>('all')
  const [sortBy, setSortBy] = useState<SortOption>('name-asc')

  useEffect(() => {
    setWayangList(catalogData as WayangItem[])
  }, [])

  const filteredAndSorted = useMemo(() => {
    let result = [...wayangList]

    // Search
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(w => 
        w.name.toLowerCase().includes(q) || 
        w.character.toLowerCase().includes(q)
      )
    }

    // Filter
    if (filterAvailable === 'available') {
      result = result.filter(w => w.available)
    } else if (filterAvailable === 'sold') {
      result = result.filter(w => !w.available)
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name)
        case 'name-desc':
          return b.name.localeCompare(a.name)
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        default:
          return 0
      }
    })

    return result
  }, [wayangList, searchQuery, filterAvailable, sortBy])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price)
  }

  const handleWhatsApp = (name: string) => {
    const message = encodeURIComponent(`Halo, saya tertarik untuk memesan wayang ${name} dari WARI. Apakah masih tersedia?`)
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank')
  }

  return (
    <section id="katalog" className="py-20 bg-wari-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-wari-green mb-4 font-serif">
            Katalog Wayang
          </h2>
          <p className="text-xl text-wari-brown/80 max-w-2xl mx-auto">
            Koleksi eksklusif wayang kulit dari botol plastik bekas, dibuat dengan cinta untuk melestarikan budaya Nusantara
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div 
          className="bg-white rounded-2xl shadow-md p-6 mb-12 flex flex-col md:flex-row gap-4 justify-between items-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Cari karakter wayang..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-wari-gold bg-gray-50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <Filter className="text-gray-500 w-5 h-5 hidden sm:block" />
              <select 
                className="w-full sm:w-auto py-3 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-wari-gold bg-gray-50 cursor-pointer"
                value={filterAvailable}
                onChange={(e) => setFilterAvailable(e.target.value)}
              >
                <option value="all">Semua Status</option>
                <option value="available">Tersedia</option>
                <option value="sold">Habis</option>
              </select>
            </div>
            
            <select 
              className="w-full sm:w-auto py-3 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-wari-gold bg-gray-50 cursor-pointer"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
            >
              <option value="name-asc">Nama (A-Z)</option>
              <option value="name-desc">Nama (Z-A)</option>
              <option value="price-asc">Harga (Terendah)</option>
              <option value="price-desc">Harga (Tertinggi)</option>
            </select>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          layout
        >
          <AnimatePresence>
            {filteredAndSorted.length === 0 ? (
              <motion.div 
                className="col-span-full text-center py-20 text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-2xl font-serif mb-2 text-wari-brown">Wayang tidak ditemukan</div>
                <p>Coba sesuaikan kata kunci pencarian atau filter Anda.</p>
              </motion.div>
            ) : (
              filteredAndSorted.map((wayang) => (
                <motion.div
                  key={wayang.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col group"
                >
                  <div className="relative h-80 bg-gradient-to-br from-wari-cream to-white flex items-center justify-center p-8 overflow-hidden">
                    <motion.img
                      src={wayang.image}
                      alt={wayang.name}
                      className="w-full h-full object-contain"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 backdrop-blur-sm ${
                      wayang.available 
                        ? 'bg-green-100/90 text-green-800' 
                        : 'bg-red-100/90 text-red-800'
                    }`}>
                      {wayang.available ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                      {wayang.available ? 'Tersedia' : 'Habis'}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <div className="mb-4">
                      <h3 className="text-3xl font-bold text-wari-dark mb-1 font-serif group-hover:text-wari-green transition-colors">
                        {wayang.name}
                      </h3>
                      <p className="text-sm text-wari-brown/80 mb-3 font-medium">
                        Karakter: {wayang.character}
                      </p>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {wayang.description}
                      </p>
                    </div>

                    <div className="bg-wari-cream/50 rounded-xl p-4 mb-6 mt-auto">
                      <p className="text-sm text-wari-brown/90 italic font-serif leading-relaxed">
                        "{wayang.philosophy}"
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <div className="text-3xl font-bold text-wari-green font-serif tracking-tight">
                          {formatPrice(wayang.price)}
                        </div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mt-1">per unit</div>
                      </div>
                      
                      <Button
                        onClick={() => handleWhatsApp(wayang.name)}
                        disabled={!wayang.available}
                        className={`rounded-full px-6 h-12 shadow-md transition-all flex items-center gap-2 ${
                          wayang.available
                            ? 'bg-wari-green text-white hover:bg-wari-green-light hover:shadow-xl hover:-translate-y-1'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <MessageCircle className="w-5 h-5" />
                        Pesan
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="text-center mt-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-wari-gold to-[#fff0cc] rounded-3xl p-10 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 batik-pattern opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <p className="text-wari-dark/80 font-bold mb-6 text-xl">
                Tertarik pesanan khusus atau pembelian jumlah besar untuk instansi?
              </p>
              <MagneticButton>
                <Button asChild size="lg" className="bg-wari-dark text-wari-gold hover:bg-black font-bold text-lg px-8 h-14 rounded-full shadow-xl">
                  <a
                    href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20pesanan%20khusus%20wayang%20WARI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Hubungi untuk Pesanan Khusus
                  </a>
                </Button>
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
