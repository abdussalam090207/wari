'use client'

import { motion } from 'framer-motion'
import { Leaf, Recycle, Users, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-wari-green via-wari-green-light to-wari-brown"></div>
      <div className="absolute inset-0 batik-pattern opacity-20"></div>

      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-wari-gold/20 rounded-full blur-xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-wari-gold/20 rounded-full blur-xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
            <Leaf className="w-4 h-4 text-wari-gold" />
            <span className="text-white text-sm font-medium">Eco-Cultural Initiative</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-serif">
            <span className="block">WARI</span>
            <span className="block text-wari-gold text-3xl md:text-4xl lg:text-5xl mt-2">
              Wayang Lestari
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Mengubah Limbah Plastik Menjadi Warisan Budaya Nusantara
          </p>

          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Inisiatif kreatif dari SMK Negeri 26 Jakarta yang menggabungkan pelestarian budaya wayang kulit dengan gerakan daur ulang sampah plastik untuk masa depan yang lebih hijau.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.a
              href="#katalog"
              className="bg-wari-gold text-wari-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-wari-gold-light transition-all shadow-2xl hover:shadow-wari-gold/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Lihat Katalog Wayang
            </motion.a>
            <motion.a
              href="#proses"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-wari-green transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Pelajari Proses 3R
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Recycle className="w-12 h-12 text-wari-gold mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">3R</div>
              <div className="text-white/80">Reduce, Reuse, Recycle</div>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Users className="w-12 h-12 text-wari-gold mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">52%</div>
              <div className="text-white/80">Gen Z Peduli Budaya</div>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Leaf className="w-12 h-12 text-wari-gold mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-white/80">Eco-Friendly</div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </div>
    </section>
  )
}
