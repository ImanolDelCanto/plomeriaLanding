"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Clock, Shield, Wrench, Phone } from "lucide-react"


export default function WhyChooseUsSection() {
  const { ref, hasIntersected } = useIntersectionObserver()

  const reasons = [
    {
      icon: Clock,
      title: "Servicio 24/7",
      description: "Disponibles las 24 horas, los 7 días de la semana para emergencias",
    },
    {
      icon: Shield,
      title: "Garantía de Trabajo",
      description: "Todos nuestros trabajos tienen garantía por escrito",
    },
    {
      icon: Wrench,
      title: "Equipos Profesionales",
      description: "Utilizamos herramientas y equipos de última generación",
    },
    {
      icon: Phone,
      title: "Respuesta Rápida",
      description: "Tiempo de respuesta promedio de 30 minutos en Zona Sur",
    },
  ]

  return (
    <section ref={ref} className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegir Destapaciones y Plomerías?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Más de 12 años de experiencia nos respaldan como líderes en servicios de plomería
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <div
                key={index}
                className={`text-center group transition-all duration-700 ${
                  hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-blue-200 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-blue-100 text-sm">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
