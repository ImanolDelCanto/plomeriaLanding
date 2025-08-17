import Image from "next/image"

export default function PaymentMethodsSection() {
  return (
    <section className="py-16 bg-white flex flex-col justify-center min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Métodos de Pago</h2>
          <p className="text-xl text-gray-600">Aceptamos todos los medios de pago para tu comodidad</p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Digital Payment Platforms */}
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center h-32 w-56">
              <Image
                src="/mercadoPago.png"
                alt="Mercado Pago"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center h-32 w-56">
              <Image
                src="/efectivo.jpg"
                alt="Efectivo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center h-32 w-56">
              <Image src="/mastercard.png" alt="Argencard" width={120} height={100} className="object-contain" />
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">También aceptamos transferencias bancarias y efectivo</p>
        </div>
      </div>
    </section>
  )
}
