'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Counter from '@/lib/animations/Counter'
import { fadeUp, staggerContainer } from '@/lib/animations/variants'

/* ─── Animated Bar Chart ─── */
function AnimatedBar({ label, value, maxValue, color, delay }: {
  label: string
  value: number
  maxValue: number
  color: string
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const percentage = (value / maxValue) * 100

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-baseline">
        <span className="text-sm font-bold text-wari-dark">{label}</span>
        <span className="text-sm font-bold text-gray-500">
          <Counter value={value} className="inline" />%
        </span>
      </div>
      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

/* ─── Animated Pie Segment ─── */
function AnimatedPie({ data }: { data: { label: string; value: number; color: string }[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const total = data.reduce((sum, d) => sum + d.value, 0)

  let cumulativeOffset = 0
  const segments = data.map((d) => {
    const dashArray = (d.value / total) * 251.2
    const dashOffset = -cumulativeOffset
    cumulativeOffset += dashArray
    return { ...d, dashArray, dashOffset }
  })

  return (
    <div ref={ref} className="relative w-48 h-48 mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        {segments.map((seg, i) => (
          <motion.circle
            key={seg.label}
            cx="50"
            cy="50"
            r="40"
            fill="none"
            strokeWidth="18"
            stroke={seg.color}
            strokeDasharray={`${seg.dashArray} ${251.2 - seg.dashArray}`}
            strokeDashoffset={seg.dashOffset}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <Counter value={total} className="text-2xl font-bold text-wari-dark font-serif" />
        <span className="text-xs text-gray-400 font-medium">Skor Total</span>
      </div>
    </div>
  )
}

/* ─── Animated Percentage Ring ─── */
function AnimatedPercentage({ label, value, color, delay }: {
  label: string
  value: number
  color: string
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const circumference = 2 * Math.PI * 36
  const strokeDashoffset = circumference - (value / 100) * circumference

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative w-24 h-24">
        <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
          <circle cx="40" cy="40" r="36" fill="none" strokeWidth="6" stroke="#f3f4f6" />
          <motion.circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            strokeWidth="6"
            stroke={color}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset } : {}}
            transition={{ duration: 1.5, delay, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Counter value={value} className="text-lg font-bold text-wari-dark font-serif" />
          <span className="text-xs text-wari-dark font-bold">%</span>
        </div>
      </div>
      <span className="text-xs font-bold text-gray-500 text-center max-w-[100px]">{label}</span>
    </div>
  )
}

/* ─── MAIN COMPONENT ─── */
export default function MarketVisualization() {
  const barData = [
    { label: 'Institusi Pendidikan', value: 78, color: 'bg-wari-green' },
    { label: 'Pasar Suvenir Budaya', value: 65, color: 'bg-wari-gold' },
    { label: 'Tren Kesadaran Lingk.', value: 89, color: 'bg-emerald-500' },
    { label: 'Minat Gen Z pada Budaya', value: 52, color: 'bg-blue-500' },
  ]

  const pieData = [
    { label: 'Pendidikan', value: 35, color: '#2D5016' },
    { label: 'Budaya', value: 25, color: '#D4AF37' },
    { label: 'Pariwisata', value: 20, color: '#3B82F6' },
    { label: 'Lingkungan', value: 20, color: '#10B981' },
  ]

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-wari-cream text-wari-green font-bold text-xs tracking-[0.2em] uppercase mb-6">
            Peluang Pasar
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-wari-dark font-serif mb-6">
            Wawasan Berbasis{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-wari-gold to-amber-400">
              Data
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Data pasar berbasis riset memvalidasi posisi WARI di persimpangan antara keberlanjutan, 
            pendidikan, dan pelestarian budaya.
          </motion.p>
        </motion.div>

        {/* Visualizations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 p-8 bg-gray-50 rounded-3xl border border-gray-100"
          >
            <h3 className="text-lg font-bold text-wari-dark font-serif mb-8">Indeks Kesiapan Pasar</h3>
            <div className="space-y-6">
              {barData.map((bar, i) => (
                <AnimatedBar key={bar.label} label={bar.label} value={bar.value} maxValue={100} color={bar.color} delay={i * 0.15} />
              ))}
            </div>
          </motion.div>

          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-gray-50 rounded-3xl border border-gray-100"
          >
            <h3 className="text-lg font-bold text-wari-dark font-serif mb-8 text-center">Segmentasi Pelanggan</h3>
            <AnimatedPie data={pieData} />
            <div className="mt-6 space-y-2">
              {pieData.map((d) => (
                <div key={d.label} className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
                  <span className="text-gray-600">{d.label}</span>
                  <span className="ml-auto font-bold text-wari-dark">{d.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Percentage Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 p-8 bg-gray-50 rounded-3xl border border-gray-100"
        >
          <h3 className="text-lg font-bold text-wari-dark font-serif mb-8 text-center">Potensi Pertumbuhan per Segmen</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <AnimatedPercentage label="Adopsi Sekolah" value={82} color="#2D5016" delay={0} />
            <AnimatedPercentage label="Pasar Suvenir" value={67} color="#D4AF37" delay={0.1} />
            <AnimatedPercentage label="Permintaan Lokakarya" value={91} color="#10B981" delay={0.2} />
            <AnimatedPercentage label="Penjualan Online" value={58} color="#3B82F6" delay={0.3} />
            <AnimatedPercentage label="Program CSR" value={74} color="#8B5CF6" delay={0.4} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
