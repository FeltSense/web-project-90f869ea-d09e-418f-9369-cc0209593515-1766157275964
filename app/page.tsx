import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import CoreProductFeatures from '@/components/CoreProductFeatures'
import ProductFeaturesShowcase from '@/components/ProductFeaturesShowcase'
import HeroKeyFeaturesSection from '@/components/HeroKeyFeaturesSection'
import NewProductFeaturesSection from '@/components/NewProductFeaturesSection'
import AdvancedFeaturesSection from '@/components/AdvancedFeaturesSection'
import KeyProductFeaturesShowcase from '@/components/KeyProductFeaturesShowcase'
import EnhancedProductFeatures from '@/components/EnhancedProductFeatures'
import KeyCapabilitiesSection from '@/components/KeyCapabilitiesSection'
import AboutUs from '@/components/AboutUs'
import BetaSignup from '@/components/BetaSignup'
import Benefits from '@/components/Benefits'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import SampleRecipes from '@/components/SampleRecipes'
import PremiumFeaturesSection from '@/components/PremiumFeaturesSection'
import CustomerSuccessStories from '@/components/CustomerSuccessStories'

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <Navigation />
      <Hero />
      
      {/* Core Product Features - Comprehensive Feature Showcase */}
      <CoreProductFeatures />
      
      {/* Primary Features Section - Main Product Showcase */}
      <ProductFeaturesShowcase />
      
      {/* Key Features Highlight - Core Capabilities */}
      <HeroKeyFeaturesSection />
      
      {/* Premium Key Features Section - Main Feature Highlight */}
      <div id="premium-features">
        <PremiumFeaturesSection />
      </div>
      
      {/* Testimonials Section - Moved Higher for Social Proof */}
      <Testimonials />
      
      {/* Customer Success Stories - Showcase Real Results */}
      <CustomerSuccessStories />
      
      {/* Additional Features & Benefits */}
      <KeyProductFeaturesShowcase />
      <NewProductFeaturesSection />
      <AdvancedFeaturesSection />
      <SampleRecipes />
      <EnhancedProductFeatures />
      <KeyCapabilitiesSection />
      <AboutUs />
      <Benefits />
      
      {/* Call to Action & Conversion */}
      <div id="beta-signup">
        <BetaSignup />
      </div>
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}
