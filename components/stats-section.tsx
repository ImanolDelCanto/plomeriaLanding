export default function StatsSection() {
  const stats = [
    { number: "100+", label: "Clientes" },
    { number: "250+", label: "Proyectos realizados" },
    { number: "15", label: "Reconocimientos" },
    { number: "12", label: "Años de Experiencia" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
