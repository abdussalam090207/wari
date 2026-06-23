'use client'

import { motion } from 'framer-motion'
import { Package, Scissors, Palette, Sparkles, ArrowRight, MessageCircle } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      icon: Package,
      title: "Kumpulkan",
      description: "Kumpulkan botol plastik bekas, sedotan, dan bungkus makanan ringan dari lingkungan sekitar",
      details: [
        "Botol plastik minuman (300ml - 1.5L)",
        "Sedotan plastik bekas",
        "Bungkus camilan/snack",
        "Lem, cat, dan alat potong"
      ],
      color: "from-green-400 to-green-600"
    },
    {
      icon: Scissors,
      title: "Potong & Bentuk",
      description: "Potong botol plastik menjadi bentuk badan wayang sesuai pola karakter yang diinginkan",
      details: [
        "Botol dipipihkan sebagai badan",
        "Potong sesuai pola karakter",
        "Bentuk tangan dan kaki",
        "Siapkan bagian kepala"
      ],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Palette,
      title: "Hias & Warna",
      description: "Hias wayang dengan bungkus snack sebagai busana dan berikan warna sesuai karakter",
      details: [
        "Bungkus snack sebagai busana",
        "Cat sesuai warna karakter",
        "Tambahkan detail ornamen",
        "Buat mahkota/headpiece"
      ],
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Sparkles,
      title: "Finishing",
      description: "Lakukan finishing dengan sentuhan akhir untuk menghasilkan wayang yang siap dipajang",
      details: [
        "Pasang gagang wayang",
        "Coating pelindung",
        "Quality control",
        "Siap dipajang/dijual"
      ],
      color: "from-yellow-400 to-yellow-600"
    }
  ]

  return (
    <section id="proses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-wari-green mb-4 font-serif">
            Proses 3R
          </h2>
          <p className="text-xl text-wari-brown/80 max-w-2xl mx-auto">
            Panduan lengkap daur ulang botol plastik menjadi wayang kulit yang bernilai seni tinggi
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-wari-green via-wari-gold to-wari-brown hidden md:block"></div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex-1 w-full">
                  <div className={`bg-gradient-to-br ${step.color} p-8 rounded-2xl shadow-xl text-white`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                        <step.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold opacity-80">Step {index + 1}</div>
                        <h3 className="text-3xl font-bold">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-lg mb-4 opacity-90">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:flex w-16 h-16 bg-wari-gold rounded-full items-center justify-center shadow-xl z-10">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-20 bg-gradient-to-r from-wari-green to-wari-green-light rounded-3xl p-12 text-center text-white shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Ingin Belajar Langsung?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Kami membuka workshop daur ulang wayang untuk sekolah dan komunitas. 
            Hubungi kami untuk informasi lebih lanjut!
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20workshop%20daur%20ulang%20wayang%20WARI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-wari-gold text-wari-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-wari-gold-light transition-all shadow-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Daftar Workshop
          </a>
        </motion.div>
      </div>
    </section>
  )
}
