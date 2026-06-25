import ProductDetail from '@/features/catalog/components/ProductDetail'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import catalogData from '@/data/catalog.json'

export function generateStaticParams() {
  return catalogData.map((item) => ({
    id: item.id.toString(),
  }))
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-wari-cream flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24">
        <ProductDetail id={params.id} />
      </div>
      <Footer />
    </main>
  )
}
