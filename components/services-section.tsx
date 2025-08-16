import Image from "next/image"

export default function ServicesSection() {
  const services = [
    {
      title: "Destapación de cocinas",
      description:
        "Destapación de cocinas en Zona Sur. Destapaciones de cocinas, desobstrucción y destapaciones de caños de desagüe de cocinas y lavaderos, destapación de rejillas en cocinas, patios y lavaderos.",
      image: "/kitchen-sink-drain-cleaning.png",
    },
    {
      title: "Destapación de cañerías",
      description:
        "Destapación de cañerías de distribución de agua con oxígeno aire comprimido regulado. Destapación de columnas de desagüe de cocinas, lavaderos y baños. Destapaciones de cañerías en hogares.",
      image: "/plumber-pipes-drainage.png",
    },
    {
      title: "Destapación de baños",
      description:
        "Destapaciones de baños e inodoros de baños, caños de desagüe de piletas del baño, lavamanos, bidets, bañeras y bañaderas.",
      image: "/equipo-destapacion.jpeg",
    },
  ]

  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
