'use client'

import { motion } from 'framer-motion'
import { Leaf, Recycle, Users, ArrowDown } from 'lucide-react'
import Link from 'next/link'
import MagneticButton from '@/lib/animations/MagneticButton'
import { fadeUp, staggerContainer, hoverLift } from '@/lib/animations/variants'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-wari-green via-wari-green-light to-wari-brown"></div>
      <div className="absolute inset-0 batik-pattern opacity-20 mix-blend-overlay"></div>

      {/* Animated Orbs */}
      <motion.div
        className="absolute top-1/4 left-10 w-32 h-32 bg-wari-gold/30 rounded-full blur-[80px]"
        animate={{ y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-48 h-48 bg-wari-gold/20 rounded-full blur-[100px]"
        animate={{ y: [0, 50, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2">
              <Leaf className="w-4 h-4 text-wari-gold" />
              <span className="text-white text-sm font-medium tracking-wide uppercase">Eco-Cultural Initiative</span>
            </div>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-serif leading-tight">
            <span className="block">WARI</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-wari-gold to-[#fff0cc] text-4xl md:text-5xl lg:text-6xl mt-2">
              Wayang Lestari
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
            Mengubah Limbah Plastik Menjadi Warisan Budaya Nusantara
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <MagneticButton>
              <Button asChild size="lg" className="bg-wari-gold text-wari-dark hover:bg-wari-gold/90 font-bold text-lg px-8 h-14 rounded-full shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transition-all">
                <Link href="/catalog">
                  Lihat Katalog Wayang
                </Link>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white font-bold text-lg px-8 h-14 rounded-full backdrop-blur-sm">
                <Link href="/process">
                  Pelajari Proses 3R
                </Link>
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              variants={fadeUp}
              whileHover="whileHover"
              whileTap="whileTap"
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <motion.div variants={hoverLift}>
                <Recycle className="w-10 h-10 text-wari-gold mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2 font-serif">3R</div>
                <div className="text-white/70 font-medium">Reduce, Reuse, Recycle</div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover="whileHover"
              whileTap="whileTap"
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <motion.div variants={hoverLift}>
                <Users className="w-10 h-10 text-wari-gold mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2 font-serif">52%</div>
                <div className="text-white/70 font-medium">Gen Z Peduli Budaya</div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover="whileHover"
              whileTap="whileTap"
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <motion.div variants={hoverLift}>
                <Leaf className="w-10 h-10 text-wari-gold mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2 font-serif">100%</div>
                <div className="text-white/70 font-medium">Eco-Friendly</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-wari-gold" />
        </motion.div>
      </div>
    </section>
  )
}
