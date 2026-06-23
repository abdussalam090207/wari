import Navbar from '@/components/Common/Navbar'
import Hero from '@/components/Home/Hero'
import Catalog from '@/components/Catalog/Catalog'
import Process from '@/components/Home/Process'
import Impact from '@/components/Home/Impact'
import Team from '@/components/Home/Team'
import Footer from '@/components/Common/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-wari-cream">
      <Navbar />
      <Hero />
      <Catalog />
      <Process />
      <Impact />
      <Team />
      <Footer />
    </main>
  )
}
