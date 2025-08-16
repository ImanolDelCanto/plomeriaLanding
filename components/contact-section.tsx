import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contacto</h2>
          <p className="text-gray-600">
            Ante cualquier duda o consulta puede comunicarse mediante nuestro formulario de contacto o llamando al 11
            8765-4321
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Input type="text" placeholder="Nombre" className="w-full" />
            </div>
            <div>
              <Input type="email" placeholder="Email" className="w-full" />
            </div>
          </div>

          <div>
            <Input type="text" placeholder="Asunto" className="w-full" />
          </div>

          <div>
            <Textarea placeholder="Mensaje" rows={5} className="w-full" />
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
              Enviar Mensaje
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
