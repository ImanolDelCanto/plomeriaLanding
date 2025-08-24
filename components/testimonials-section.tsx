"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const { ref, hasIntersected } = useIntersectionObserver()

  const testimonials = [
    {
      name: "María González",
      location: "Lomas de Zamora",
      rating: 5,
      comment:
        "Excelente servicio, vinieron en menos de 30 minutos y solucionaron el problema de mi cocina. Muy profesionales y precio justo.",
    },
    {
      name: "Carlos Rodríguez",
      location: "Banfield",
      rating: 5,
      comment:
        "Llamé por una urgencia en el baño y llegaron rapidísimo. Trabajo impecable y muy buena atención. Los recomiendo 100%.",
    },
    {
      name: "Ana Martínez",
      location: "Temperley",
      rating: 5,
      comment:
        "Muy conformes con el servicio. Destaparon las cañerías de toda la casa y nos dieron consejos para evitar futuros problemas.",
    },
  ]

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Miles de clientes satisfechos en toda la Zona Sur confían en nuestro servicio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-800 ${
                hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 250}ms` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current hover:scale-110 transition-transform duration-200"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">&quot;{testimonial.comment}&quot;</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
