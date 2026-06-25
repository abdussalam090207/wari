import Gallery from '@/features/gallery/components/Gallery'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Galeri Visual — WARI | Wayang Lestari',
  description: 'Jelajahi rekam jejak karya, proses kreatif, dan kegiatan tim WARI dalam mendaur ulang limbah plastik menjadi wayang.',
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24">
        <Gallery />
      </div>
      <Footer />
    </main>
  )
}
