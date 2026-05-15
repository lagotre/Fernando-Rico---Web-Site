'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { number: 27, suffix: '', label: 'años en el frente comercial', sub: 'Puntos de venta, agencias, e-commerce y mesas comerciales' },
  { number: 100, suffix: '+', label: 'pymes acompañadas', sub: 'En LATAM y el Caribe' },
  { number: 75, suffix: '+', label: 'marcas construidas', sub: 'Con frente comercial desarrollado' },
  { number: 9, suffix: '', label: 'verticales industriales', sub: 'CPG, Confección, Horeca, Manufactura, Empaques, Retail y más' },
]

function useCountUp(target: number, duration = 1800, trigger: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setValue(target)
        clearInterval(timer)
      } else {
        setValue(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, trigger])
  return value
}

function StatItem({ stat, trigger }: { stat: typeof stats[0]; trigger: boolean }) {
  const count = useCountUp(stat.number, 1600, trigger)
  return (
    <div className="flex flex-col items-start border-l-2 border-gold/30 pl-8 py-2">
      <div className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-white leading-none">
        {count}
        <span className="text-gold text-5xl">{stat.suffix}</span>
      </div>
      <p className="font-sans text-sm font-medium text-white mt-3 leading-snug">{stat.label}</p>
      <p className="font-sans text-xs text-white/50 mt-1 leading-relaxed">{stat.sub}</p>
    </div>
  )
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-navy py-20 md:py-28" ref={ref}>
      <div className="container-site">
        <div className="mb-12">
          <span className="section-label">FRM · 1998 a 2026</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} trigger={triggered} />
          ))}
        </div>

        {/* Client logos row */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <p className="section-label mb-6 text-white/40">Referencias destacadas</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {['Yanuba', 'Colombina', 'Grupo 20/20', 'Bermudez', 'VSH Foods', 'Nestlé', 'Unilever', 'DirecTV Caribbean'].map((name) => (
              <span key={name} className="font-sans text-sm text-white/40 hover:text-white/70 transition-colors duration-200">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
