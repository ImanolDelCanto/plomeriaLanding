import { Phone, Clock} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Plomero Zona Sur</h3>
            <p className="text-gray-400 mb-4">
              Servicio de plomería profesional las 24 horas. 
              Experiencia, calidad y precio justo garantizado.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nuestros Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Destapaciones</li>
              <li className="hover:text-white cursor-pointer transition-colors">Reparación de cañerías</li>
              <li className="hover:text-white cursor-pointer transition-colors">Instalación de grifos</li>
              <li className="hover:text-white cursor-pointer transition-colors">Reparación de inodoros</li>
              <li className="hover:text-white cursor-pointer transition-colors">Mantenimiento general</li>
              <li className="hover:text-white cursor-pointer transition-colors">Emergencias 24hs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span className="text-gray-400">+54 11 5915-1536</span>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-gray-400">24 horas, 7 días</span>
              </div>
            </div>
          </div>

          {/* Coverage Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Zonas de Cobertura</h3>
            <ul className="space-y-2 text-gray-400">
              <li>CABA</li>
              <li>Gran Buenos Aires</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Destapaciones y Plomerías. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}