'use client'

import { motion } from 'framer-motion'
import { Instagram, Mail, Linkedin, ExternalLink } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations/variants'
import MagneticButton from '@/lib/animations/MagneticButton'

export default function TeamPremium() {
  const team = [
    {
      name: "Marwan Wisnu",
      role: "Project Lead",
      description: "Memimpin koordinasi proyek dan memastikan visi WARI tercapai dengan baik, menjembatani inovasi dengan eksekusi.",
      responsibilities: ["Manajemen Proyek", "Strategi Bisnis", "Hubungan Kemitraan"],
      photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80",
      socials: {
        instagram: "https://instagram.com/marwan.wisnu",
        linkedin: "#",
        email: "mailto:marwan@smkn26jakarta.sch.id"
      },
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "Abdus Salam",
      role: "Creative Director",
      description: "Bertanggung jawab atas desain produk, estetika visual, dan konsep kreatif wayang kontemporer dari material daur ulang.",
      responsibilities: ["Desain Karakter", "Identitas Visual", "Inovasi Material"],
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      socials: {
        instagram: "https://instagram.com/abdus.salam",
        linkedin: "#",
        email: "mailto:abdus@smkn26jakarta.sch.id"
      },
      gradient: "from-wari-gold/20 to-orange-500/20"
    },
    {
      name: "Ayudya Al Jahraa",
      role: "Marketing & Outreach",
      description: "Mengelola kampanye pemasaran, media sosial, dan membangun komunitas peduli lingkungan bersama WARI.",
      responsibilities: ["Digital Marketing", "Social Media", "Community Management"],
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      socials: {
        instagram: "https://instagram.com/ayudya.jahraa",
        linkedin: "#",
        email: "mailto:ayudya@smkn26jakarta.sch.id"
      },
      gradient: "from-wari-green/20 to-emerald-500/20"
    }
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-wari-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-wari-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-wari-cream text-wari-green font-bold text-sm tracking-widest uppercase mb-4">
            Kolaborator
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-wari-dark mb-6 font-serif">
            Mengenal Lebih Dekat<br />Tim <span className="text-wari-green">WARI</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tiga inovator muda dari SMK Negeri 26 Jakarta yang berdedikasi tinggi 
            untuk melestarikan budaya dan menjaga lingkungan.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white rounded-[2.5rem] shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2" />
              
              <div className="relative p-8 h-full flex flex-col">
                {/* Photo & Background Glow */}
                <div className="relative mb-8 flex justify-center">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${member.gradient} blur-2xl rounded-full scale-110 transition-transform duration-500 group-hover:scale-125 opacity-70`} />
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl z-10 bg-white">
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center flex-1">
                  <h3 className="text-2xl font-bold text-wari-dark font-serif mb-1 group-hover:text-wari-green transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-wari-gold font-bold uppercase tracking-widest text-xs mb-4">
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {member.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-8 text-left">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 text-center">Tanggung Jawab</div>
                    <ul className="space-y-2">
                      {member.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2 border border-gray-100/50">
                          <div className="w-1.5 h-1.5 rounded-full bg-wari-green mr-3" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3 pt-6 border-t border-gray-100">
                  <MagneticButton>
                    <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-pink-600 hover:border-pink-200 transition-colors">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </MagneticButton>
                  <MagneticButton>
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-200 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </MagneticButton>
                  <MagneticButton>
                    <a href={member.socials.email} className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-wari-green hover:border-wari-green/30 transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex flex-col items-center p-8 bg-wari-cream rounded-3xl border border-wari-gold/20">
            <h4 className="text-2xl font-bold font-serif text-wari-dark mb-2">Ingin Berkolaborasi?</h4>
            <p className="text-gray-600 mb-6 max-w-md">
              Kami selalu terbuka untuk ide, saran, dan kemitraan baru demi masa depan yang lebih hijau.
            </p>
            <MagneticButton>
              <a
                href="mailto:wari@smkn26jakarta.sch.id"
                className="inline-flex items-center gap-2 bg-wari-green text-white px-8 py-4 rounded-full font-bold hover:bg-wari-green-light transition-all shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Hubungi Kami
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
