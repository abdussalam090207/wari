import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroNew from '@/features/home/components/HeroNew'
import VisionMission from '@/features/home/components/VisionMission'
import ImpactPreview from '@/features/home/components/ImpactPreview'
import TargetMarket from '@/features/home/components/TargetMarket'
import MarketVisualization from '@/features/home/components/MarketVisualization'
import WhyWARI from '@/features/home/components/WhyWARI'
import FinalCTA from '@/features/home/components/FinalCTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroNew />
      <VisionMission />
      <ImpactPreview />
      <TargetMarket />
      <MarketVisualization />
      <WhyWARI />
      <FinalCTA />
      <Footer />
    </main>
  )
}
