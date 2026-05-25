import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero'
import { FeaturesSection } from '@/components/features'
import { ComplianceSection } from '@/components/compliance'
import { ComparisonSection } from '@/components/comparison'
import { PricingSection } from '@/components/pricing'
import { FAQSection } from '@/components/faq'
import { NewsletterSection } from '@/components/newsletter'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      
      <section id="features">
        <FeaturesSection />
      </section>
      
      <section id="compliance">
        <ComplianceSection />
      </section>
      
      <section id="comparison">
        <ComparisonSection />
      </section>
      
      <section id="pricing">
        <PricingSection />
      </section>
      
      <section id="faq">
        <FAQSection />
      </section>
      
      <section id="newsletter">
        <NewsletterSection />
      </section>
      
      <Footer />
    </main>
  )
}
