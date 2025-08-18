import Image from "next/image"

export default function ServicesSection() {
  const services = [
    {
      title: "Destapación de Cañerías",
      description:
        "Destapación profesional de cañerías, tuberías y desagües con equipos especializados. Servicio de termofusión, pinchaduras y reparaciones en general.",
      image: "/equipo-destapacion.webp",
    },
    {
      title: "Instalaciones Sanitarias",
      description:
        "Instalación y reparación de inodoros, mochilas, bidets, lavatorios, bachas y piletas de patio. Trabajos profesionales con garantía.",
      image: "/plumber-installing-toilet.webp",
    },
    {
      title: "Instalaciones de Gas",
      description:
        "Conexión de anafes, estufas tiro balanceado, cocinas, calefones, termotanques y calderas. Colocación de llaves de paso y reguladores.",
      image: "/gas.webp",
    },
    {
      title: "Instalaciones de Elementos",
      description:
        "Instalación de canillas, llaves de paso, griferías completas, válvulas y accesorios. Trabajos de precisión y calidad.",
      image: "/kitchen-sink-drain-cleaning.webp",
    },
    {
      title: "Instalaciones de Equipos",
      description:
        "Conexión de lavarropas, calefones, termotanques de todas las marcas. Instalaciones eléctricas y de agua para electrodomésticos.",
      image: "/plumber-cleaning-drain.webp",
    },
    {
      title: "Reparaciones en General",
      description:
        "Soldaduras, hidrobronz, termofusión, conexiones, reparaciones e instalaciones. Control de pérdidas de gas y mantenimiento.",
      image: "/plumber-pipes-drainage.webp",
    },
  ]

  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600">Soluciones completas de plomería para CABA y Gran Buenos Aires</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
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
