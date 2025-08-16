import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/logo-destapaciones.jpeg"
              alt="Destapaciones Zona Sur"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Destapaciones Zona Sur</h1>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 font-medium">
                Inicio
              </a>
              <a href="#servicios" className="text-gray-700 hover:text-blue-600 font-medium">
                Servicios
              </a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 font-medium">
                FAQ
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">Contacto</Button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Urgencias 11 2345-6789
              </div>
              <div className="text-lg font-semibold text-gray-900">11 8765-4321</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
