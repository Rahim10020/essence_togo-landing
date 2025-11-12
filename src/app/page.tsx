import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Screenshots from '@/components/Screenshots'
import Download from '@/components/Download'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Hero />
      <Features />
      <HowItWorks />
      <Screenshots />
      <Download />
      <Footer />
    </main>
  )
}