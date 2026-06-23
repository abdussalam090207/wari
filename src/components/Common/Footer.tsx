import { Leaf, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-wari-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-wari-green to-wari-gold rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-serif">WARI</span>
            </div>
            <p className="text-gray-400 mb-4">
              Wayang Lestari - Melestarikan budaya Nusantara melalui daur ulang limbah plastik.
            </p>
            <p className="text-sm text-gray-500">
              SMK Negeri 26 Jakarta
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-wari-gold">Navigasi</h3>
            <ul className="space-y-2">
              <li><a href="#beranda" className="text-gray-400 hover:text-wari-gold transition-colors">Beranda</a></li>
              <li><a href="#katalog" className="text-gray-400 hover:text-wari-gold transition-colors">Katalog Wayang</a></li>
              <li><a href="#proses" className="text-gray-400 hover:text-wari-gold transition-colors">Proses 3R</a></li>
              <li><a href="#dampak" className="text-gray-400 hover:text-wari-gold transition-colors">Dampak</a></li>
              <li><a href="#tim" className="text-gray-400 hover:text-wari-gold transition-colors">Tim Kami</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-wari-gold">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <a href="tel:+6281234567890" className="hover:text-wari-gold transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:wari@smkn26jakarta.sch.id" className="hover:text-wari-gold transition-colors">
                  wari@smkn26jakarta.sch.id
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Jl. Raya Pendidikan No. 1, Jakarta Timur</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-wari-gold">Ikuti Kami</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/wari.official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-wari-green rounded-full flex items-center justify-center hover:bg-wari-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-wari-green rounded-full flex items-center justify-center hover:bg-wari-gold transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@wari.official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-wari-green rounded-full flex items-center justify-center hover:bg-wari-gold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z"/>
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Bergabunglah dengan komunitas kami untuk updates terbaru!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} WARI - Wayang Lestari. All rights reserved.</p>
          <p className="text-sm mt-2">Dibuat dengan ❤️ oleh Tim WARI SMK Negeri 26 Jakarta</p>
        </div>
      </div>
    </footer>
  )
}
