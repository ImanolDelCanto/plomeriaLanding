export default function SEOContentSection() {
  return (
    <section className="sr-only" aria-hidden="true">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ¿Por qué elegir nuestro servicio de Destapaciones Plomero?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Destapaciones Plomero Especializado</h3>
              <p className="mb-4">
                Nuestro servicio de <strong>destapaciones plomero</strong> cuenta con equipos de última generación y
                técnicos especializados. Realizamos destapaciones en CABA y Gran Buenos Aires las 24 horas, garantizando
                soluciones rápidas y efectivas.
              </p>
              <p>
                Como <strong>plomero profesional</strong>, utilizamos máquinas especializadas para destapaciones
                complejas, termofusión y reparaciones urgentes. Nuestro equipo está capacitado para resolver cualquier
                problema de plomería.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Plomero 24 Horas en Buenos Aires</h3>
              <p className="mb-4">
                Somos el <strong>plomero de confianza</strong> en Buenos Aires. Nuestro servicio de
                <strong> destapaciones plomero</strong> está disponible las 24 horas, los 365 días del año. Atendemos
                emergencias en toda CABA, Zona Norte, Sur y Oeste.
              </p>
              <p>
                Nuestros <strong>plomeros profesionales</strong> ofrecen garantía en todos los trabajos. Desde
                destapaciones simples hasta instalaciones complejas, somos tu mejor opción en servicios de plomería
                profesional.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
              Zonas de Cobertura - Destapaciones Plomero
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <h4 className="font-semibold text-gray-900">CABA</h4>
                <p className="text-sm text-gray-600">Plomero en todos los barrios de Capital Federal</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Zona Norte</h4>
                <p className="text-sm text-gray-600">San Isidro, Vicente López, Tigre, San Fernando</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Zona Sur</h4>
                <p className="text-sm text-gray-600">Avellaneda, Quilmes, Lanús, Lomas de Zamora</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
