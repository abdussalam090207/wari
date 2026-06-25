import FAQ from '@/features/faq/components/FAQ'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'FAQ — WARI | Wayang Lestari',
  description: 'Pertanyaan yang sering diajukan seputar produk, pemesanan, dan inisiatif WARI.',
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-wari-cream flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24">
        <FAQ />
      </div>
      <Footer />
    </main>
  )
}
