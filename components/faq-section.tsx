"use client"

import { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export default function FAQSection() {
  const { ref, hasIntersected } = useIntersectionObserver()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Qué servicios ofrecemos?",
      answer:
        "Ofrecemos servicios completos de destapación de cañerías, tuberías, desagües, cloacas pluviales, rejillas, lavaderos y baños. También realizamos trabajos de plomería general y mantenimiento preventivo.",
    },
    {
      question: "¿Qué medios de pago aceptan?",
      answer: "Aceptamos efectivo y transferencias bancarias.",
    },
    {
      question: "¿Cómo puedo solicitar un presupuesto?",
      answer:
        "Puede solicitar un presupuesto llamando al 11 5915-1536, por WhatsApp o completando nuestro formulario de contacto. Realizamos evaluaciones gratuitas y presupuestos sin compromiso.",
    },
  ]

  return (
    <section ref={ref} id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-lg hover:shadow-md transition-all duration-500 ${
                hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
