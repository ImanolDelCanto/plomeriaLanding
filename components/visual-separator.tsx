import { Droplets } from "lucide-react"

export default function VisualSeparator() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100 relative overflow-hidden">
      {/* Floating bubbles animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-300/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-500/25 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-blue-300/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
            <Droplets className="w-10 h-10 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Soluciones que <span className="text-blue-600">funcionan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tu tranquilidad es nuestra prioridad
          </p>
        </div>

     
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 w-full h-16">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  )
}