import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import KeyProductFeaturesShowcase from '@/components/KeyProductFeaturesShowcase'
import EnhancedProductFeatures from '@/components/EnhancedProductFeatures'
import KeyFeaturesSection from '@/components/KeyFeaturesSection'
import KeyFeaturesShowcase from '@/components/KeyFeaturesShowcase'
import HeroFeaturesShowcase from '@/components/HeroFeaturesShowcase'
import HomepageShowcase from '@/components/HomepageShowcase'
import KeyCapabilitiesSection from '@/components/KeyCapabilitiesSection'
import AboutUs from '@/components/AboutUs'
import ProductFeaturesSection from '@/components/ProductFeaturesSection'
import FeaturesShowcase from '@/components/FeaturesShowcase'
import PremiumKeyFeatures from '@/components/PremiumKeyFeatures'
import KeyProductFeatures from '@/components/KeyProductFeatures'
import BetaSignup from '@/components/BetaSignup'
import FeaturesHighlight from '@/components/FeaturesHighlight'
import NewFeaturesHighlight from '@/components/NewFeaturesHighlight'
import ProductFeatures from '@/components/ProductFeatures'
import KeyFeatures from '@/components/KeyFeatures'
import Features from '@/components/Features'
import ProductHighlights from '@/components/ProductHighlights'
import KeyHighlights from '@/components/KeyHighlights'
import Benefits from '@/components/Benefits'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <Navigation />
      <Hero />
      <KeyProductFeaturesShowcase />
      <EnhancedProductFeatures />
      <KeyFeaturesSection />
      <KeyFeaturesShowcase />
      <HeroFeaturesShowcase />
      <HomepageShowcase />
      <KeyCapabilitiesSection />
      <KeyFeatures />
      <AboutUs />
      <Features />
      <KeyHighlights />
      <ProductFeaturesSection />
      <FeaturesShowcase />
      <Benefits />
      <Testimonials />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}
