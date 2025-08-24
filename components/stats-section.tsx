"use client"

import { useCounterAnimation } from "@/hooks/use-counter-animation"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"


export default function StatsSection() {
  const { ref, hasIntersected } = useIntersectionObserver()

  const stats = [
    { number: 100, suffix: "+", label: "Clientes" },
    { number: 250, suffix: "+", label: "Proyectos realizados" },
    { number: 15, suffix: "", label: "Reconocimientos" },
    { number: 12, suffix: "", label: "Años de Experiencia" },
  ]

  const count1 = useCounterAnimation(100, 2000, hasIntersected)
  const count2 = useCounterAnimation(250, 2000, hasIntersected)
  const count3 = useCounterAnimation(15, 1500, hasIntersected)
  const count4 = useCounterAnimation(12, 1500, hasIntersected)

  const counts = [count1, count2, count3, count4]

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center"
              style={{ 
                transitionDelay: `${index * 400}ms`,
                transitionDuration: '1200ms',
                transform: hasIntersected ? 'translateY(0)' : 'translateY(30px)',
                opacity: hasIntersected ? 1 : 0 
              }}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 hover:scale-110 transition-transform duration-300">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
