import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import ServicesSection from "@/components/services-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import WhyChooseUsSection from "@/components/why-choose-us-section"
import PaymentMethodsSection from "@/components/payment-methods-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import FloatingButtons from "@/components/floating-buttons"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <PaymentMethodsSection />
      <FAQSection />
      <ContactSection />
      <FloatingButtons />
    </main>
  )
}
