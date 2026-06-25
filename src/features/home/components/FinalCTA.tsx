'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Instagram, ArrowRight, ShoppingBag, Mail } from 'lucide-react'
import MagneticButton from '@/lib/animations/MagneticButton'
import { fadeUp, staggerContainer } from '@/lib/animations/variants'

/* Floating Background Elements */
function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-wari-gold/20 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 6 + i * 0.8,
            repeat: Infinity,
            delay: i * 0.6,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0a1a08] to-[#0d2108] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-wari-green/10 rounded-full blur-[250px]" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-wari-gold/5 rounded-full blur-[150px]" />

      <FloatingElements />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-white/[0.06] text-wari-gold font-bold text-xs tracking-[0.2em] uppercase mb-8 border border-white/[0.06]">
            Ambil Tindakan
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-serif mb-6 leading-tight">
            Bergabung Dengan{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-wari-gold via-[#f0d060] to-wari-gold">
              Gerakan Kami
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-14 leading-relaxed">
            Bantu kami melestarikan budaya dan melindungi lingkungan bersama-sama. 
            Setiap tindakan berarti — baik itu pembelian, mengikuti kami, atau sebuah percakapan.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticButton>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-white text-wari-dark px-8 py-4 rounded-full font-bold text-base hover:bg-wari-gold transition-all duration-300 shadow-[0_0_60px_rgba(255,255,255,0.08)]"
              >
                <Mail className="w-5 h-5" />
                Hubungi Kami
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <a
                href="https://instagram.com/wari.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-base hover:opacity-90 transition-all duration-300 shadow-lg"
              >
                <Instagram className="w-5 h-5" />
                Ikuti Instagram
              </a>
            </MagneticButton>

            <MagneticButton>
              <Link
                href="/catalog"
                className="inline-flex items-center gap-3 bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/[0.12] transition-all duration-300"
              >
                <ShoppingBag className="w-5 h-5" />
                Jelajahi Produk
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
