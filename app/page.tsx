import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import ServicesSection from "@/components/services-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import WhyChooseUsSection from "@/components/why-choose-us-section"
import PaymentMethodsSection from "@/components/payment-methods-section"
import FAQSection from "@/components/faq-section"
import FloatingButtons from "@/components/floating-buttons"
import Footer from "@/components/footer"
import VisualSeparator from "@/components/visual-separator"
import SEOContentSection from "@/components/seo-content-section"

// ... existing metadata ...

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <SEOContentSection />
      <FeaturesSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <PaymentMethodsSection />
      <VisualSeparator />
      <FAQSection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
