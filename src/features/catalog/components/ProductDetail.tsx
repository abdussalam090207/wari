'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, MessageCircle, ArrowLeft, Check, X, Leaf, Recycle } from 'lucide-react'
import Link from 'next/link'
import catalogData from '@/data/catalog.json'
import { fadeUp, staggerContainer, hoverLift } from '@/lib/animations/variants'
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

export default function ProductDetail({ id }: { id: string }) {
  const [product, setProduct] = useState<WayangItem | null>(null)
  const [related, setRelated] = useState<WayangItem[]>([])

  useEffect(() => {
    const data = catalogData as WayangItem[]
    const found = data.find(item => item.id === parseInt(id))
    if (found) {
      setProduct(found)
      // find related products (same character, or random if not enough)
      const others = data.filter(item => item.id !== found.id)
      setRelated(others.slice(0, 3)) // just pick 3 for demo
    }
  }, [id])

  if (!product) return <div className="min-h-screen flex items-center justify-center">Loading...</div>

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
    <section className="py-20 bg-wari-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/catalog" className="inline-flex items-center gap-2 text-wari-brown hover:text-wari-green transition-colors mb-8 font-medium">
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Katalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            className="bg-white rounded-[3rem] p-12 shadow-2xl flex items-center justify-center relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10`}></div>
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full max-w-md object-contain relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              layoutId={`product-img-${product.id}`}
            />
          </motion.div>

          <motion.div 
            className="flex flex-col justify-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-wari-gold/20 text-wari-gold px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                  {product.character}
                </span>
                <span className={`px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 ${
                  product.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {product.available ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                  {product.available ? 'Tersedia' : 'Habis'}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-wari-dark mb-4 font-serif">
                {product.name}
              </h1>
              <div className="text-4xl font-bold text-wari-green font-serif">
                {formatPrice(product.price)}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="prose prose-lg text-gray-600 mb-8">
              <p>{product.description}</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
              <h3 className="text-lg font-bold text-wari-dark mb-2 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-wari-gold" />
                Filosofi Karakter
              </h3>
              <p className="text-wari-brown/90 italic font-serif leading-relaxed">
                "{product.philosophy}"
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-wari-green/10 rounded-xl p-4 flex items-center gap-3">
                <Recycle className="w-8 h-8 text-wari-green" />
                <div>
                  <div className="font-bold text-wari-dark">100% Daur Ulang</div>
                  <div className="text-sm text-gray-500">Material ramah lingkungan</div>
                </div>
              </div>
              <div className="bg-wari-gold/10 rounded-xl p-4 flex items-center gap-3">
                <ShoppingCart className="w-8 h-8 text-wari-gold" />
                <div>
                  <div className="font-bold text-wari-dark">Beli & Donasi</div>
                  <div className="text-sm text-gray-500">Mendukung pelestarian budaya</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-4">
              <MagneticButton>
                <Button 
                  size="lg" 
                  onClick={() => handleWhatsApp(product.name)}
                  disabled={!product.available}
                  className={`h-14 px-8 rounded-full text-lg font-bold shadow-lg ${
                    product.available ? 'bg-wari-green text-white hover:bg-wari-green-light' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Pesan Sekarang
                </Button>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Related Products */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-wari-dark mb-8 font-serif">
            Mungkin Anda Suka
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
              >
                <Link href={`/catalog/${item.id}`}>
                  <div className="relative h-64 bg-gradient-to-br from-wari-cream to-white flex items-center justify-center p-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-wari-dark mb-2 font-serif group-hover:text-wari-green transition-colors">
                      {item.name}
                    </h3>
                    <div className="text-lg font-bold text-wari-green">
                      {formatPrice(item.price)}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
