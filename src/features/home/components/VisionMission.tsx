'use client'

import { motion } from 'framer-motion'
import { Eye, Target, Lightbulb, TrendingUp } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations/variants'

const missions = [
  {
    number: '01',
    icon: Target,
    title: 'Mengubah Sampah',
    description: 'Mengubah limbah plastik menjadi produk budaya bernilai yang memiliki makna artistik mendalam.',
    gradient: 'from-emerald-500/20 to-green-600/20',
    border: 'border-emerald-500/20',
  },
  {
    number: '02',
    icon: Eye,
    title: 'Melestarikan Warisan',
    description: 'Melestarikan dan memperkenalkan Wayang Kulit kepada generasi muda melalui produk modern yang mudah diakses.',
    gradient: 'from-wari-gold/20 to-amber-500/20',
    border: 'border-wari-gold/20',
  },
  {
    number: '03',
    icon: Lightbulb,
    title: 'Mengedukasi Masyarakat',
    description: 'Mengedukasi masyarakat tentang keberlanjutan dan prinsip ekonomi sirkular melalui lokakarya praktik langsung.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/20',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Menciptakan Peluang',
    description: 'Menciptakan peluang ekonomi melalui produk ramah lingkungan dan wirausaha sosial.',
    gradient: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-500/20',
  },
]

export default function VisionMission() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision */}
        <motion.div
          className="text-center mb-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-wari-cream text-wari-green font-bold text-xs tracking-[0.2em] uppercase mb-6">
            Visi Kami
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-wari-dark font-serif leading-[1.15] max-w-4xl mx-auto mb-8"
          >
            Menjadi wirausaha sosial inovatif yang{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-wari-green to-wari-green-light">
              melestarikan warisan budaya Indonesia
            </span>{' '}
            sekaligus mengurangi limbah plastik melalui kreativitas dan edukasi.
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-1 bg-wari-gold mx-auto rounded-full" />
        </motion.div>

        {/* Mission */}
        <motion.div
          className="mb-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-wari-dark text-white font-bold text-xs tracking-[0.2em] uppercase mb-6">
              Misi Kami
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-wari-dark font-serif">
              Empat Pilar Dampak
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {missions.map((mission, index) => (
              <motion.div
                key={mission.number}
                variants={fadeUp}
                className="group relative"
              >
                <div className={`relative p-8 md:p-10 rounded-3xl border ${mission.border} bg-gradient-to-br ${mission.gradient} backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}>
                  {/* Large Background Number */}
                  <span className="absolute top-4 right-6 text-[120px] font-bold font-serif text-black/[0.03] leading-none select-none">
                    {mission.number}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/80 border border-white/50 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <mission.icon className="w-6 h-6 text-wari-dark" />
                      </div>
                      <span className="text-sm font-bold text-wari-dark/40 tracking-wider">{mission.number}</span>
                    </div>
                    <h4 className="text-xl font-bold text-wari-dark font-serif mb-3">
                      {mission.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {mission.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
