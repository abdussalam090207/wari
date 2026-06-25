'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Users, Globe, ShoppingBag, TreePine, Landmark } from 'lucide-react'
import MagneticButton from '@/lib/animations/MagneticButton'
import { fadeUp, staggerContainer } from '@/lib/animations/variants'

const segments = [
  {
    icon: GraduationCap,
    title: 'Sekolah & Pendidikan',
    description: 'Mengintegrasikan keberlanjutan dan warisan budaya ke dalam kurikulum siswa melalui lokakarya praktik langsung.',
    stat: 'Pasar Utama',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Users,
    title: 'Orang Tua & Anak',
    description: 'Keluarga yang mencari mainan dan alat edukasi ramah lingkungan yang bermakna dan mengajarkan nilai budaya.',
    stat: 'Permintaan Meningkat',
    gradient: 'from-purple-500 to-pink-400',
  },
  {
    icon: Globe,
    title: 'Komunitas Budaya',
    description: 'Penggemar wayang dan organisasi pelestari budaya yang mendukung bentuk seni tradisional.',
    stat: 'Mitra Strategis',
    gradient: 'from-wari-gold to-amber-400',
  },
  {
    icon: ShoppingBag,
    title: 'Turis & Pembeli Suvenir',
    description: 'Wisatawan yang mencari kerajinan autentik Indonesia dengan cerita ramah lingkungan di balik setiap karyanya.',
    stat: 'Nilai Tinggi',
    gradient: 'from-emerald-500 to-green-400',
  },
  {
    icon: TreePine,
    title: 'Organisasi Lingkungan',
    description: 'LSM dan kelompok lingkungan yang mencari mitra daur ulang kreatif dan program keterlibatan masyarakat.',
    stat: 'Berorientasi Dampak',
    gradient: 'from-teal-500 to-cyan-400',
  },
  {
    icon: Landmark,
    title: 'Program Pemerintah',
    description: 'Kementerian kebudayaan dan lingkungan hidup yang mendukung inovasi lokal dan pelestarian warisan.',
    stat: 'Institusional',
    gradient: 'from-rose-500 to-orange-400',
  },
]

export default function TargetMarket() {
  return (
    <section className="relative py-32 bg-wari-cream overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-wari-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-wari-dark text-white font-bold text-xs tracking-[0.2em] uppercase mb-6">
            Siapa yang Kami Layani
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-wari-dark font-serif mb-6">
            Target{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-wari-green to-wari-green-light">
              Pasar Kami
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
            WARI melayani beragam segmen pasar yang disatukan oleh semangat yang sama terhadap 
            budaya, keberlanjutan, dan produk yang bermakna.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <MagneticButton className="block h-full" stiffness={100} damping={20}>
                <div className="group relative h-full p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Hover Background Glow */}
                  <div className={`absolute -inset-10 bg-gradient-to-br ${segment.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-3xl`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${segment.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <segment.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Stat Badge */}
                    <span className="inline-block px-3 py-1 bg-gray-50 text-gray-500 text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                      {segment.stat}
                    </span>

                    <h3 className="text-xl font-bold text-wari-dark font-serif mb-3 group-hover:text-wari-green transition-colors">
                      {segment.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {segment.description}
                    </p>
                  </div>
                </div>
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
