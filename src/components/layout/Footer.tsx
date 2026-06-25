import { Leaf, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-wari-dark text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-wari-green to-wari-gold rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-serif">WARI</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Wayang Lestari - Melestarikan budaya Nusantara melalui daur ulang limbah plastik.
            </p>
            <p className="text-sm text-gray-500 font-medium">
              SMK Negeri 26 Jakarta
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-wari-gold font-serif">Navigasi</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-wari-gold transition-colors font-medium">Beranda</Link></li>
              <li><Link href="/catalog" className="text-gray-400 hover:text-wari-gold transition-colors font-medium">Katalog Wayang</Link></li>
              <li><Link href="/process" className="text-gray-400 hover:text-wari-gold transition-colors font-medium">Proses 3R</Link></li>
              <li><Link href="/impact" className="text-gray-400 hover:text-wari-gold transition-colors font-medium">Dampak</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-wari-gold transition-colors font-medium">Galeri</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-wari-gold transition-colors font-medium">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-wari-gold font-serif">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-wari-gold" />
                </div>
                <a href="tel:+6281234567890" className="hover:text-wari-gold transition-colors font-medium">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-wari-gold" />
                </div>
                <a href="mailto:wari@smkn26jakarta.sch.id" className="hover:text-wari-gold transition-colors font-medium">
                  wari@smkn26jakarta.sch.id
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-wari-gold" />
                </div>
                <span className="mt-1 font-medium">Jl. Raya Pendidikan No. 1, Jakarta Timur</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-wari-gold font-serif">Ikuti Kami</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/wari.official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-wari-gold hover:text-wari-dark transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-wari-gold hover:text-wari-dark transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@wari.official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-wari-gold hover:text-wari-dark transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z"/>
                </svg>
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500 font-medium">
              Bergabunglah dengan komunitas kami untuk updates terbaru!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p className="font-medium">&copy; {new Date().getFullYear()} WARI - Wayang Lestari. All rights reserved.</p>
          <p className="text-sm mt-4 md:mt-0 font-medium">Dibuat dengan ❤️ oleh Tim WARI SMK Negeri 26 Jakarta</p>
        </div>
      </div>
    </footer>
  )
}
