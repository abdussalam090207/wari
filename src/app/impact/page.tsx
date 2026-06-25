import Impact from '@/features/home/components/Impact'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-wari-cream flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24">
        <Impact />
      </div>
      <Footer />
    </main>
  )
}
