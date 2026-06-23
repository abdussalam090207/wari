'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Recycle, Leaf, Users, Award, TrendingUp, Target, AlertCircle, CheckCircle } from 'lucide-react'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

function Counter({ end, duration = 2, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById(`counter-${end}`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [end])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <span id={`counter-${end}`}>
      {count.toLocaleString('id-ID')}{suffix}
    </span>
  )
}

export default function Impact() {
  const stats = [
    {
      icon: Recycle,
      value: 5000,
      suffix: '+',
      label: 'Botol Plastik Didaur Ulang',
      color: 'text-green-600'
    },
    {
      icon: Award,
      value: 500,
      suffix: '+',
      label: 'Wayang Terproduksi',
      color: 'text-wari-gold'
    },
    {
      icon: Users,
      value: 150,
      suffix: '+',
      label: 'Peserta Workshop',
      color: 'text-blue-600'
    },
    {
      icon: Leaf,
      value: 250,
      suffix: 'kg',
      label: 'Sampah Terkurangi',
      color: 'text-wari-green'
    }
  ]

  const swot = [
    {
      title: 'Strengths',
      icon: CheckCircle,
      color: 'bg-green-100 border-green-500 text-green-800',
      items: [
        'Produk unik & inovatif',
        'Ramah lingkungan',
        'Nilai budaya tinggi',
        'Harga terjangkau (Rp10.000)'
      ]
    },
    {
      title: 'Weaknesses',
      icon: AlertCircle,
      color: 'bg-yellow-100 border-yellow-500 text-yellow-800',
      items: [
        'Produksi masih manual',
        'Kapasitas terbatas',
        'Brand awareness rendah',
        'Durabilitas produk'
      ]
    },
    {
      title: 'Opportunities',
      icon: TrendingUp,
      color: 'bg-blue-100 border-blue-500 text-blue-800',
      items: [
        'Tren eco-friendly meningkat',
        'Dukungan pemerintah',
        'Pasar souvenir luas',
        'Kolaborasi sekolah'
      ]
    },
    {
      title: 'Threats',
      icon: Target,
      color: 'bg-red-100 border-red-500 text-red-800',
      items: [
        'Kompetitor souvenir',
        'Fluktuasi harga bahan',
        'Perubahan tren budaya',
        'Regulasi lingkungan'
      ]
    }
  ]

  return (
    <section id="dampak" className="py-20 bg-gradient-to-b from-wari-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-wari-green mb-4 font-serif">
            Dampak Kami
          </h2>
          <p className="text-xl text-wari-brown/80 max-w-2xl mx-auto">
            Statistik nyata dari kontribusi WARI dalam pelestarian budaya dan lingkungan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg text-center card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <stat.icon className={`w-16 h-16 ${stat.color} mx-auto mb-4`} />
              <div className="text-4xl font-bold text-wari-dark mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-wari-brown/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-wari-green mb-8 text-center font-serif">
            Analisis SWOT
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {swot.map((item, index) => (
              <motion.div
                key={index}
                className={`rounded-2xl p-6 border-2 ${item.color}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <item.icon className="w-8 h-8" />
                  <h4 className="text-2xl font-bold">{item.title}</h4>
                </div>
                <ul className="space-y-2">
                  {item.items.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-lg">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-20 bg-gradient-to-r from-wari-green to-wari-green-light rounded-3xl p-12 text-white text-center shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Leaf className="w-20 h-20 mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Kontribusi Lingkungan
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Setiap wayang yang kami produksi setara dengan menyelamatkan 10 botol plastik dari lautan dan TPA. 
            Bersama-sama, kita bisa membuat perbedaan nyata untuk bumi!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Botol per Wayang</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">90%</div>
              <div className="text-sm opacity-90">Material Daur Ulang</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">0</div>
              <div className="text-sm opacity-90">Limbah Produksi</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
