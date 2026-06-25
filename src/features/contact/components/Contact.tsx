'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, MessageCircle, Instagram, Linkedin, Send, CheckCircle2 } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations/variants'
import MagneticButton from '@/lib/animations/MagneticButton'

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    // Mock API call
    setTimeout(() => {
      setFormState('success')
      setTimeout(() => setFormState('idle'), 5000)
    }, 1500)
  }

  return (
    <section className="py-24 bg-white min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-wari-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-wari-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-wari-cream text-wari-green font-bold text-sm tracking-widest uppercase mb-4">
            Hubungi Kami
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-wari-dark mb-6 font-serif">
            Mari <span className="text-wari-green">Berkolaborasi</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tertarik dengan produk kami, ingin mengadakan workshop, atau 
            punya ide kolaborasi pelestarian lingkungan? Kami siap mendengarkan.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold text-wari-dark font-serif mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-wari-cream flex items-center justify-center text-wari-green group-hover:bg-wari-green group-hover:text-white transition-colors shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Workshop WARI</h4>
                    <p className="text-gray-600 leading-relaxed">
                      SMK Negeri 26 Jakarta<br />
                      Jl. Balai Pustaka Baru I No.2, Rawamangun<br />
                      Jakarta Timur, DKI Jakarta 13220
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-wari-cream flex items-center justify-center text-wari-gold group-hover:bg-wari-gold group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                    <a href="mailto:halo@wari.id" className="text-gray-600 hover:text-wari-gold transition-colors">
                      halo@wari.id
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct WhatsApp CTA */}
            <div className="bg-wari-cream p-8 rounded-3xl border border-wari-green/10">
              <h4 className="text-xl font-bold text-wari-dark mb-4">Butuh Respon Cepat?</h4>
              <p className="text-gray-600 mb-6">
                Tim kami siap melayani pesanan atau menjawab pertanyaan Anda melalui WhatsApp setiap hari kerja (08:00 - 17:00 WIB).
              </p>
              <MagneticButton>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 bg-wari-green text-white px-8 py-4 rounded-xl font-bold hover:bg-wari-green-light transition-all shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat Sekarang
                </a>
              </MagneticButton>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold text-gray-800 mb-4">Ikuti Perjalanan Kami</h4>
              <div className="flex gap-4">
                <MagneticButton>
                  <a href="#" className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-pink-600 hover:border-pink-200 transition-colors shadow-sm">
                    <Instagram className="w-5 h-5" />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href="#" className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-200 transition-colors shadow-sm">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </MagneticButton>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-wari-dark font-serif mb-8">Kirim Pesan</h3>
              
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Pesan Terkirim!</h4>
                  <p className="text-gray-600">
                    Terima kasih telah menghubungi kami. Tim WARI akan segera membalas pesan Anda melalui email.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-gray-700">Nama Lengkap</label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-wari-green focus:border-transparent outline-none transition-all"
                        placeholder="Bima"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-gray-700">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        required
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-wari-green focus:border-transparent outline-none transition-all"
                        placeholder="bima@pandawa.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold text-gray-700">Subjek</label>
                    <select 
                      id="subject"
                      required
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-wari-green focus:border-transparent outline-none transition-all text-gray-700"
                    >
                      <option value="">Pilih topik pembicaraan</option>
                      <option value="pemesanan">Pemesanan / Custom Wayang</option>
                      <option value="workshop">Undangan Workshop</option>
                      <option value="kerjasama">Kerja Sama / Partnership</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-gray-700">Pesan</label>
                    <textarea 
                      id="message"
                      rows={5}
                      required
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-wari-green focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tuliskan detail pertanyaan atau ide Anda di sini..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                      formState === 'submitting' 
                        ? 'bg-gray-400 text-white cursor-not-allowed' 
                        : 'bg-wari-dark text-white hover:bg-black shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {formState === 'submitting' ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Kirim Pesan
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
