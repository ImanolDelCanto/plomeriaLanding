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
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Destapaciones y Plomerías 24hs | Servicio Urgente CABA y GBA | DestapacionesPlomero.com",
  description:
    "DESTAPACIONES URGENTES 24HS  Plomeros profesionales en CABA y Gran Buenos Aires.  Equipos especializados - Precios justos. ¡Llamá ahora!",
  alternates: {
    canonical: "https://www.destapacionesplomero.com",
  },
}

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
      <VisualSeparator />
      <FAQSection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
