import Catalog from '@/features/catalog/components/Catalog'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-wari-cream flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24">
        <Catalog />
      </div>
      <Footer />
    </main>
  )
}
