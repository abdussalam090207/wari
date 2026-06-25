'use client'

import { motion } from 'framer-motion'
import { Instagram, Mail } from 'lucide-react'

export default function Team() {
  const team = [
    {
      name: "Marwan Wisnu",
      role: "Project Lead",
      description: "Memimpin koordinasi proyek dan memastikan visi WARI tercapai dengan baik",
      skills: ["Leadership", "Project Management", "Strategy"],
      instagram: "https://instagram.com/marwan.wisnu",
      email: "mailto:marwan@smkn26jakarta.sch.id"
    },
    {
      name: "Abdus Salam",
      role: "Creative Director",
      description: "Bertanggung jawab atas desain produk dan konsep kreatif wayang",
      skills: ["Design", "Creativity", "Craftsmanship"],
      instagram: "https://instagram.com/abdus.salam",
      email: "mailto:abdus@smkn26jakarta.sch.id"
    },
    {
      name: "Ayudya Al Jahraa",
      role: "Marketing & Outreach",
      description: "Mengelola pemasaran, media sosial, dan hubungan dengan komunitas",
      skills: ["Marketing", "Social Media", "Communication"],
      instagram: "https://instagram.com/ayudya.jahraa",
      email: "mailto:ayudya@smkn26jakarta.sch.id"
    }
  ]

  return (
    <section id="tim" className="py-20 bg-wari-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-wari-green mb-4 font-serif">
            Tim Kami
          </h2>
          <p className="text-xl text-wari-brown/80 max-w-2xl mx-auto">
            Tiga inovator muda dari SMK Negeri 26 Jakarta yang berdedikasi untuk melestarikan budaya dan lingkungan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-32 h-32 bg-gradient-to-br from-wari-green to-wari-gold rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-5xl font-bold text-white">
                  {member.name.charAt(0)}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-wari-dark mb-2 font-serif">
                {member.name}
              </h3>
              <p className="text-wari-gold font-semibold mb-4">
                {member.role}
              </p>
              <p className="text-gray-600 mb-6 text-sm">
                {member.description}
              </p>

              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {member.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-wari-cream text-wari-green px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 justify-center">
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-wari-green rounded-full flex items-center justify-center text-white hover:bg-wari-gold transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={member.email}
                  className="w-10 h-10 bg-wari-green rounded-full flex items-center justify-center text-white hover:bg-wari-gold transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-wari-brown/80 mb-4">
            Ingin berkolaborasi atau bertanya tentang proyek kami?
          </p>
          <a
            href="mailto:wari@smkn26jakarta.sch.id"
            className="inline-flex items-center gap-2 bg-wari-green text-white px-8 py-4 rounded-full font-bold hover:bg-wari-green-light transition-all shadow-lg"
          >
            <Mail className="w-5 h-5" />
            Hubungi Tim WARI
          </a>
        </motion.div>
      </div>
    </section>
  )
}
