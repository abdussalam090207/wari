import TeamPremium from '@/features/team/components/TeamPremium'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24">
        <TeamPremium />
      </div>
      <Footer />
    </main>
  )
}
