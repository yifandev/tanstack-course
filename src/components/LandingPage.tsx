import CTASection from './sections/CTASection'
import FeaturesSection from './sections/FeaturesSection'
import HeroSection from './sections/HeroSection'
import HowItWorksSection from './sections/HowItWorksSection'

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
    </main>
  )
}
