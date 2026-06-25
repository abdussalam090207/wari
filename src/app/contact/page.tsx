import Contact from '@/features/contact/components/Contact'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Hubungi Kami — WARI | Wayang Lestari',
  description: 'Punya pertanyaan atau ingin berkolaborasi dengan WARI? Hubungi kami melalui form kontak, email, atau WhatsApp.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
