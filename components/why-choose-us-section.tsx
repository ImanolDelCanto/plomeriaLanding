import { Clock, Shield, Wrench, Phone } from "lucide-react"

export default function WhyChooseUsSection() {
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
    <section className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegir Destapaciones Zona Sur?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Más de 12 años de experiencia nos respaldan como líderes en servicios de plomería
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-blue-200" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-blue-100 text-sm">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
