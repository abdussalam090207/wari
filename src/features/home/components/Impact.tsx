'use client'

import { motion } from 'framer-motion'
import { Recycle, Leaf, Users, Award, TrendingUp, Target, AlertCircle, CheckCircle } from 'lucide-react'
import Counter from '@/lib/animations/Counter'
import { fadeUp, staggerContainer, hoverLift } from '@/lib/animations/variants'

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
    <section id="dampak" className="py-20 bg-gradient-to-b from-wari-cream to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-wari-green mb-4 font-serif">
            Dampak Kami
          </h2>
          <p className="text-xl text-wari-brown/80 max-w-2xl mx-auto">
            Statistik nyata dari kontribusi WARI dalam pelestarian budaya dan lingkungan
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl text-center border border-gray-100"
              variants={fadeUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <stat.icon className={`w-16 h-16 ${stat.color} mx-auto mb-6 drop-shadow-md`} />
              <div className="text-5xl font-bold text-wari-dark mb-2 font-serif flex justify-center items-end">
                <Counter value={stat.value} duration={2.5} />
                <span className="text-3xl mb-1 ml-1 text-wari-gold">{stat.suffix}</span>
              </div>
              <div className="text-wari-brown/80 font-medium text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-wari-green mb-8 text-center font-serif">
            Analisis SWOT
          </h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {swot.map((item, index) => (
              <motion.div
                key={index}
                className={`rounded-2xl p-6 border-2 shadow-sm ${item.color}`}
                variants={fadeUp}
              >
                <div className="flex items-center gap-3 mb-4">
                  <item.icon className="w-8 h-8" />
                  <h4 className="text-2xl font-bold">{item.title}</h4>
                </div>
                <ul className="space-y-3">
                  {item.items.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 font-medium opacity-90">
                      <span className="text-lg">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-24 bg-gradient-to-br from-wari-green to-wari-green-light rounded-[3rem] p-12 lg:p-16 text-white text-center shadow-2xl relative overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-wari-gold opacity-10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Leaf className="w-24 h-24 mx-auto mb-8 text-wari-gold" />
            </motion.div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Kontribusi Lingkungan
            </h3>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90 font-light leading-relaxed">
              Setiap wayang yang kami produksi setara dengan menyelamatkan 10 botol plastik dari lautan dan TPA. 
              Bersama-sama, kita bisa membuat perbedaan nyata untuk bumi!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20" whileHover={{ scale: 1.05 }}>
                <div className="text-5xl font-bold mb-3 font-serif">50+</div>
                <div className="text-lg opacity-90 font-medium">Botol per Wayang</div>
              </motion.div>
              <motion.div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20" whileHover={{ scale: 1.05 }}>
                <div className="text-5xl font-bold mb-3 font-serif">90%</div>
                <div className="text-lg opacity-90 font-medium">Material Daur Ulang</div>
              </motion.div>
              <motion.div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20" whileHover={{ scale: 1.05 }}>
                <div className="text-5xl font-bold mb-3 font-serif">0</div>
                <div className="text-lg opacity-90 font-medium">Limbah Produksi</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
