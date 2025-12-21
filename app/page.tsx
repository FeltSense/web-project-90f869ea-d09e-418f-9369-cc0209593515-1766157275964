import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import KeyProductFeatures from '@/components/KeyProductFeatures'
import FeaturesHighlight from '@/components/FeaturesHighlight'
import NewFeaturesHighlight from '@/components/NewFeaturesHighlight'
import ProductFeatures from '@/components/ProductFeatures'
import KeyFeatures from '@/components/KeyFeatures'
import Features from '@/components/Features'
import ProductHighlights from '@/components/ProductHighlights'
import Benefits from '@/components/Benefits'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <Hero />
      <KeyProductFeatures />
      <FeaturesHighlight />
      <NewFeaturesHighlight />
      <ProductFeatures />
      <KeyFeatures />
      <ProductHighlights />
      <Features />
      <Benefits />
      <Services />
      <Testimonials />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}
