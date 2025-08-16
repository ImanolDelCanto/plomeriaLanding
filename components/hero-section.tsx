import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative h-[600px] bg-cover bg-center bg-gray-900"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/plumber-pipes-drainage.png')`,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Destapaciones y Plomerías</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Servicios profesionales de plomería, destapaciones, instalaciones de gas y sanitarios en CABA y Gran Buenos
            Aires
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              Contacto
            </Button>
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-lg px-8 py-3">
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
