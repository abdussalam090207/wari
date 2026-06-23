'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, MessageCircle, Check, X } from 'lucide-react'
import catalogData from '@/data/catalog.json'

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

export default function Catalog() {
  const [wayangList, setWayangList] = useState<WayangItem[]>([])

  useEffect(() => {
    setWayangList(catalogData as WayangItem[])
  }, [])

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
    <section id="katalog" className="py-20 bg-wari-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-wari-green mb-4 font-serif">
            Katalog Wayang
          </h2>
          <p className="text-xl text-wari-brown/80 max-w-2xl mx-auto">
            Koleksi wayang kulit dari botol plastik bekas, dibuat dengan cinta untuk melestarikan budaya Nusantara
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wayangList.map((wayang, index) => (
            <motion.div
              key={wayang.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-80 bg-gradient-to-br from-wari-cream to-white flex items-center justify-center p-8">
                <img
                  src={wayang.image}
                  alt={wayang.name}
                  className="w-full h-full object-contain"
                />
                
                <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 ${
                  wayang.available 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {wayang.available ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                  {wayang.available ? 'Tersedia' : 'Habis'}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-wari-dark mb-1 font-serif">
                    {wayang.name}
                  </h3>
                  <p className="text-sm text-wari-brown/60 mb-2">
                    Karakter: {wayang.character}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    {wayang.description}
                  </p>
                </div>

                <div className="bg-wari-cream rounded-lg p-3 mb-4">
                  <p className="text-xs text-wari-brown/80 italic">
                    "{wayang.philosophy}"
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-wari-green">
                      {formatPrice(wayang.price)}
                    </div>
                    <div className="text-xs text-gray-500">per unit</div>
                  </div>
                  
                  <button
                    onClick={() => handleWhatsApp(wayang.name)}
                    disabled={!wayang.available}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                      wayang.available
                        ? 'bg-wari-green text-white hover:bg-wari-green-light shadow-lg hover:shadow-xl'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Pesan
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-wari-brown/80 mb-4">
            Tertarik pesanan khusus atau jumlah besar?
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20pesanan%20khusus%20wayang%20WARI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-wari-gold text-wari-dark px-8 py-4 rounded-full font-bold hover:bg-wari-gold-light transition-all shadow-lg"
          >
            <ShoppingCart className="w-5 h-5" />
            Hubungi untuk Pesanan Khusus
          </a>
        </motion.div>
      </div>
    </section>
  )
}
