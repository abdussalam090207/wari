'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { AlertTriangle, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations/variants'

const timeline = [
  {
    phase: 'Masalah',
    icon: AlertTriangle,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20',
    lineColor: 'bg-red-500',
    items: [
      {
        title: 'Krisis Sampah Plastik',
        description: 'Indonesia adalah penyumbang polusi plastik laut terbesar kedua di dunia. 6,8 juta ton sampah plastik diproduksi setiap tahun, dengan hanya 10% yang didaur ulang.',
      },
      {
        title: 'Penurunan Kesadaran Budaya',
        description: 'Bentuk seni tradisional seperti Wayang Kulit mulai memudar di kalangan generasi muda. UNESCO memperingatkan hilangnya pengetahuan budaya yang kritis di seluruh Asia Tenggara.',
      },
    ],
  },
  {
    phase: 'Solusi',
    icon: Lightbulb,
    color: 'text-wari-gold',
    bgColor: 'bg-wari-gold/10',
    borderColor: 'border-wari-gold/20',
    lineColor: 'bg-wari-gold',
    items: [
      {
        title: 'Pendidikan Berkelanjutan',
        description: 'WARI menjembatani dua krisis ini dengan satu inovasi: mengubah sampah plastik menjadi seni Wayang, mengajarkan keberlanjutan dan budaya secara bersamaan.',
      },
      {
        title: 'Melestarikan Budaya Wayang',
        description: 'Setiap karya buatan tangan membawa tradisi penceritaan berabad-abad, ditata ulang dengan material ramah lingkungan modern yang memberikan makna baru pada warisan.',
      },
    ],
  },
  {
    phase: 'Dampak',
    icon: TrendingUp,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    lineColor: 'bg-emerald-500',
    items: [
      {
        title: 'Dampak Lingkungan Terukur',
        description: 'Lebih dari 2.500 botol dialihkan dari tempat pembuangan. Setiap wayang mewakili sekitar 15 botol plastik yang diberi kehidupan baru yang bermakna.',
      },
      {
        title: 'Kebangkitan Budaya',
        description: '1.200+ siswa dan anggota masyarakat kini aktif terlibat dalam pelestarian budaya melalui lokakarya dan program pendidikan kami.',
      },
    ],
  },
]

export default function WhyWARI() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%'])

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#fafaf8] overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-wari-dark text-white font-bold text-xs tracking-[0.2em] uppercase mb-6">
            Mengapa Ini Penting
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-wari-dark font-serif mb-6">
            Kisah di Balik{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-wari-green to-wari-green-light">
              WARI
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Memahami mengapa kami ada membutuhkan pemahaman tentang dua krisis yang saling terhubung 
            yang dihadapi Indonesia saat ini.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Progress Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200">
            <motion.div
              className="w-full bg-gradient-to-b from-red-500 via-wari-gold to-emerald-500 rounded-full origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {timeline.map((phase, phaseIndex) => (
            <div key={phase.phase} className="relative mb-20 last:mb-0">
              {/* Phase Header */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="relative flex items-center gap-4 mb-10"
              >
                <div className={`relative z-10 w-12 h-12 rounded-full ${phase.bgColor} border-2 ${phase.borderColor} flex items-center justify-center shadow-lg bg-white`}>
                  <phase.icon className={`w-5 h-5 ${phase.color}`} />
                </div>
                <h3 className={`text-2xl font-bold font-serif ${phase.color}`}>
                  {phase.phase}
                </h3>
              </motion.div>

              {/* Phase Items */}
              <div className="space-y-8 pl-16 md:pl-0">
                {phase.items.map((item, itemIndex) => {
                  const isLeft = itemIndex % 2 === 0

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: itemIndex * 0.15, ease: [0.22, 1, 0.36, 1] }}
                      className={`md:w-[45%] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}
                    >
                      <div className={`p-6 rounded-2xl bg-white border ${phase.borderColor} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                        <div className="flex items-center gap-2 mb-3">
                          <ArrowRight className={`w-4 h-4 ${phase.color}`} />
                          <h4 className="text-lg font-bold text-wari-dark font-serif">{item.title}</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
