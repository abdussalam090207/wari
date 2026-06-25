import ProcessTimeline from '@/features/process/components/ProcessTimeline'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Proses 3R — WARI | Wayang Lestari',
  description: 'Delapan langkah transformasi botol plastik bekas menjadi wayang kulit bernilai seni tinggi melalui proses Reduce, Reuse, Recycle.'
}

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-wari-cream flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24">
        <ProcessTimeline />
      </div>
      <Footer />
    </main>
  )
}
