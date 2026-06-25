'use client'

import { motion } from 'framer-motion'
import { Recycle, Palette, GraduationCap, Users, Building2 } from 'lucide-react'
import Counter from '@/lib/animations/Counter'
import { fadeUp, staggerContainer } from '@/lib/animations/variants'

const metrics = [
  {
    icon: Recycle,
    value: 2500,
    suffix: '+',
    label: 'Botol Plastik Didaur Ulang',
    description: 'Dialihkan dari tempat pembuangan akhir dan lautan',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    glowColor: 'shadow-emerald-500/20',
  },
  {
    icon: Palette,
    value: 150,
    suffix: '+',
    label: 'Produk Wayang Dibuat',
    description: 'Mahakarya budaya buatan tangan',
    color: 'text-wari-gold',
    bgColor: 'bg-wari-gold/10',
    glowColor: 'shadow-wari-gold/20',
  },
  {
    icon: GraduationCap,
    value: 24,
    suffix: '',
    label: 'Lokakarya Diselenggarakan',
    description: 'Di berbagai sekolah dan komunitas',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    glowColor: 'shadow-blue-500/20',
  },
  {
    icon: Users,
    value: 1200,
    suffix: '+',
    label: 'Siswa Teredukasi',
    description: 'Belajar keberlanjutan melalui budaya',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    glowColor: 'shadow-purple-500/20',
  },
  {
    icon: Building2,
    value: 15,
    suffix: '',
    label: 'Komunitas Terlibat',
    description: 'Jaringan pembawa perubahan yang terus berkembang',
    color: 'text-rose-500',
    bgColor: 'bg-rose-500/10',
    glowColor: 'shadow-rose-500/20',
  },
]

export default function ImpactPreview() {
  return (
    <section className="relative py-32 bg-[#0a1a08] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-wari-green/10 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-white/[0.06] text-wari-gold font-bold text-xs tracking-[0.2em] uppercase mb-6 border border-white/[0.06]">
            Dampak Terukur
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6">
            Angka Nyata,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-wari-gold to-[#f0d060]">
              Perubahan Nyata
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-white/50 max-w-2xl mx-auto">
            Setiap botol yang kami ubah dan setiap lokakarya yang kami adakan menciptakan dampak positif terukur 
            bagi lingkungan dan budaya kita.
          </motion.p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className={`relative p-6 rounded-3xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${metric.glowColor} text-center h-full`}>
                {/* Glow Pulse */}
                <div className={`absolute -inset-px rounded-3xl ${metric.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`} />

                <div className={`w-12 h-12 ${metric.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>

                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <Counter value={metric.value} className={`text-4xl font-bold text-white font-serif`} />
                  {metric.suffix && (
                    <span className={`text-2xl font-bold ${metric.color}`}>{metric.suffix}</span>
                  )}
                </div>

                <h3 className="text-white font-bold text-sm mb-1">{metric.label}</h3>
                <p className="text-white/40 text-xs">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
