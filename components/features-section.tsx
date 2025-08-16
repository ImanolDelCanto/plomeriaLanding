export default function FeaturesSection() {
  const features = [
    {
      icon: "👷‍♂️",
      title: "Servicio de Calidad",
      description: "Técnicos especializados con años de experiencia",
    },
    {
      icon: "🔧",
      title: "Destapaciones con Equipos Profesionales",
      description: "Utilizamos equipos de última generación para garantizar resultados",
    },
    {
      icon: "🚛",
      title: "Destapaciones de Cañerías Principales",
      description: "Solucionamos problemas en cañerías principales y secundarias",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
