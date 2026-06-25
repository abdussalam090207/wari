'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import {
  Package, Search, Sparkles, Recycle, PaintBucket,
  Scissors, Truck, MessageCircle, ArrowDown
} from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations/variants'
import MagneticButton from '@/lib/animations/MagneticButton'
import { Button } from '@/components/ui/button'

const steps = [
  {
    icon: Package,
    title: 'Kumpulkan',
    subtitle: 'Collect',
    description: 'Mengumpulkan botol plastik bekas, sedotan, dan bungkus makanan ringan dari lingkungan sekitar — sekolah, rumah, dan tempat umum.',
    details: [
      'Botol plastik minuman (300ml – 1.5L)',
      'Sedotan plastik bekas',
      'Bungkus camilan & snack',
      'Tutup botol aneka warna'
    ],
    gradient: 'from-emerald-500 to-green-700',
    glow: 'rgba(16,185,129,0.25)',
    accent: '#10B981'
  },
  {
    icon: Search,
    title: 'Sortir',
    subtitle: 'Sort',
    description: 'Memisahkan bahan berdasarkan jenis plastik, warna, dan ukuran untuk memastikan kualitas material yang optimal.',
    details: [
      'Pisahkan berdasarkan jenis plastik (PET, HDPE)',
      'Kelompokkan berdasarkan warna',
      'Buang kontaminan (label, lem)',
      'Pilih material terbaik'
    ],
    gradient: 'from-teal-500 to-cyan-700',
    glow: 'rgba(20,184,166,0.25)',
    accent: '#14B8A6'
  },
  {
    icon: Sparkles,
    title: 'Bersihkan',
    subtitle: 'Clean',
    description: 'Membersihkan material secara menyeluruh agar bebas dari kontaminan dan siap untuk diproses lebih lanjut.',
    details: [
      'Rendam dalam larutan pembersih',
      'Sikat manual bagian dalam',
      'Bilas hingga bersih sempurna',
      'Keringkan di bawah sinar matahari'
    ],
    gradient: 'from-sky-500 to-blue-700',
    glow: 'rgba(14,165,233,0.25)',
    accent: '#0EA5E9'
  },
  {
    icon: Recycle,
    title: 'Gunakan Kembali',
    subtitle: 'Reuse',
    description: 'Memberikan fungsi baru pada material bekas — botol menjadi badan wayang, sedotan menjadi sendi, bungkus menjadi hiasan.',
    details: [
      'Botol dipipihkan menjadi badan wayang',
      'Sedotan menjadi sendi tangan',
      'Bungkus snack menjadi busana',
      'Tutup botol menjadi ornamen'
    ],
    gradient: 'from-violet-500 to-purple-700',
    glow: 'rgba(139,92,246,0.25)',
    accent: '#8B5CF6'
  },
  {
    icon: Recycle,
    title: 'Daur Ulang',
    subtitle: 'Recycle',
    description: 'Material yang tidak bisa langsung digunakan diolah kembali menjadi komponen baru yang mendukung struktur wayang.',
    details: [
      'Lebur plastik untuk komponen kecil',
      'Buat lembaran dari plastik daur ulang',
      'Cetak detail ornamen kecil',
      'Gabungkan dengan material alami'
    ],
    gradient: 'from-amber-500 to-orange-600',
    glow: 'rgba(245,158,11,0.25)',
    accent: '#F59E0B'
  },
  {
    icon: Scissors,
    title: 'Rangkai',
    subtitle: 'Craft',
    description: 'Merangkai semua komponen menjadi bentuk wayang utuh — menyatukan badan, tangan, kepala, dan sendi gerak.',
    details: [
      'Rangkai badan dan kepala',
      'Pasang tangan dengan sendi',
      'Tambahkan gagang penggerak',
      'Uji pergerakan sendi'
    ],
    gradient: 'from-rose-500 to-pink-700',
    glow: 'rgba(244,63,94,0.25)',
    accent: '#F43F5E'
  },
  {
    icon: PaintBucket,
    title: 'Hias',
    subtitle: 'Paint',
    description: 'Memberikan sentuhan seni pada wayang — mengecat, menghias, dan menambahkan detail karakter sesuai cerita pewayangan.',
    details: [
      'Cat dasar sesuai karakter',
      'Lukis detail wajah & ekspresi',
      'Tempel bungkus snack sebagai batik',
      'Tambahkan mahkota & aksesori'
    ],
    gradient: 'from-fuchsia-500 to-purple-700',
    glow: 'rgba(217,70,239,0.25)',
    accent: '#D946EF'
  },
  {
    icon: Truck,
    title: 'Antarkan',
    subtitle: 'Deliver',
    description: 'Wayang yang sudah jadi dikemas dengan aman dan diantarkan ke pembeli, sekolah, atau komunitas seni.',
    details: [
      'Quality control akhir',
      'Kemasan ramah lingkungan',
      'Sertakan kartu filosofi karakter',
      'Siap dikirim ke seluruh Indonesia'
    ],
    gradient: 'from-wari-green to-emerald-700',
    glow: 'rgba(45,80,22,0.25)',
    accent: '#2D5016'
  }
]

function TimelineStep({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-15% 0px -15% 0px' })
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-0 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Content Card */}
      <motion.div
        className="flex-1 w-full md:w-auto"
        initial={{ opacity: 0, x: isEven ? -80 : 80, y: 30 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <div
          className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100/80 overflow-hidden group hover:shadow-2xl transition-shadow duration-500"
          style={{ boxShadow: isInView ? `0 20px 60px ${step.glow}` : undefined }}
        >
          {/* Gradient accent stripe */}
          <div className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-1.5 h-full bg-gradient-to-b ${step.gradient}`} />

          <div className="flex items-center gap-4 mb-5">
            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}
            >
              <step.icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                Step {String(index + 1).padStart(2, '0')} — {step.subtitle}
              </div>
              <h3 className="text-2xl font-bold text-wari-dark font-serif">
                {step.title}
              </h3>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-5">
            {step.description}
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {step.details.map((detail, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-2 text-sm text-gray-500"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + idx * 0.08, duration: 0.4 }}
              >
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: step.accent }}
                />
                {detail}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Center timeline node */}
      <div className="relative flex items-center justify-center w-20 shrink-0 z-10">
        <motion.div
          className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl border-4 border-white`}
          initial={{ scale: 0, rotate: -90 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
        >
          <span className="text-lg font-bold text-white">{index + 1}</span>
        </motion.div>
        {/* Pulse ring */}
        {isInView && (
          <motion.div
            className={`absolute w-14 h-14 rounded-full border-2`}
            style={{ borderColor: step.accent }}
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
          />
        )}
      </div>

      {/* Empty spacer for the other side */}
      <div className="flex-1 hidden md:block" />
    </div>
  )
}

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section className="py-24 bg-wari-cream relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-wari-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-wari-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-wari-green/10 text-wari-green px-5 py-2 rounded-full mb-6">
            <Recycle className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">Proses 3R</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold text-wari-dark mb-6 font-serif">
            Dari <span className="text-wari-green">Sampah</span> Menjadi{' '}
            <span className="text-wari-gold">Seni</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-wari-brown/70 max-w-3xl mx-auto leading-relaxed">
            Delapan langkah transformasi botol plastik bekas menjadi wayang kulit bernilai seni tinggi.
            Setiap tahap dirancang untuk memaksimalkan kreativitas dan meminimalkan limbah.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-6 h-6 text-wari-green/50" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Vertical progress line — desktop only */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200/60 hidden md:block" />
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-wari-green via-wari-gold to-wari-green hidden md:block origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-16 md:space-y-20">
            {steps.map((step, index) => (
              <TimelineStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-24 bg-gradient-to-br from-wari-green via-emerald-800 to-wari-green-light rounded-[2rem] p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 border border-white/30 rounded-full" />
            <div className="absolute bottom-10 right-10 w-60 h-60 border border-white/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full" />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
              Ingin Belajar Langsung?
            </h3>
            <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Kami membuka workshop daur ulang wayang untuk sekolah dan komunitas.
              Pelajari setiap langkah bersama tim WARI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <MagneticButton>
                <Button
                  asChild
                  size="lg"
                  className="bg-wari-gold text-wari-dark hover:bg-wari-gold-light font-bold text-lg px-10 h-14 rounded-full shadow-xl"
                >
                  <a
                    href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20workshop%20daur%20ulang%20wayang%20WARI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Daftar Workshop
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
