export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative h-[600px] bg-cover bg-center bg-gray-900"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/destapa3.webp')`,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Destapaciones Plomero 24hs</h1>
          <h2 className="text-2xl md:text-3xl mb-4 text-yellow-400 font-semibold">
            Servicio Profesional en CABA y Gran Buenos Aires
          </h2>
          <p className="sr-only text-xl md:text-2xl mb-8 text-gray-200">
            🔧 <strong>Plomero especializado</strong> en destapaciones urgentes, instalaciones sanitarias, reparaciones
            de gas y plomería general. <strong>Equipos profesionales</strong> - Garantía total - Precios justos
          </p>
          <div className="sr-only mt-8 text-lg text-gray-300">
            <p className="mb-2">
              ✅ <strong>Destapaciones plomero</strong> con máquinas especializadas
            </p>
            <p className="mb-2">✅ Plomero profesional - Servicio las 24 horas</p>
            <p>✅ Cobertura total: CABA, Zona Norte, Zona Sur y Oeste</p>
          </div>
        </div>
      </div>
    </section>
  )
}
