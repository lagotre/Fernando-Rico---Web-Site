'use client'

import { useEffect, useRef } from 'react'

const CALENDLY = 'https://calendly.com/fernandoricomedina'

const steps = [
  {
    num: '01',
    title: 'Escucha estratégica',
    body: 'Antes de proponer, entiendo el negocio, el canal, el cliente y el producto. No llego con plantillas; llego con preguntas.',
  },
  {
    num: '02',
    title: 'Diagnóstico con perspectiva sectorial',
    body: '27 años en 9 verticales manufactureras me dejan ver patrones que, desde adentro, son invisibles.',
  },
  {
    num: '03',
    title: 'Tres movimientos en 90 días',
    body: 'No entrego reportes de 80 páginas. Entrego foco: las 3 acciones que mueven el 80% del resultado comercial.',
  },
  {
    num: '04',
    title: 'Acompañamiento real',
    body: 'No desaparezco después de la sesión. Estoy disponible para que la estrategia se convierta en venta.',
  },
]

export default function Methodology() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="metodologia" className="py-20 md:py-28 bg-navy" ref={ref}>
      <div className="container-site">
        {/* Header */}
        <div className="reveal mb-16 max-w-3xl">
          <div className="w-8 h-px bg-gold mb-8" />
          <span className="section-label">08 · Cómo Trabajo · 4 Pasos</span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.92] tracking-tight mt-4">
            Metodología:{' '}
            <span className="italic text-gold">escuchar, diagnosticar, enfocar, acompañar.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal reveal-delay-${(i % 2) + 1} bg-navy p-10 md:p-12 border border-white/5 group hover:border-gold/20 transition-all duration-300`}
            >
              <p className="font-serif text-7xl md:text-8xl font-light text-white/10 group-hover:text-gold/20 transition-colors duration-300 mb-6 leading-none">
                {step.num}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-white mb-4 leading-snug">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-white/55 leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Empieza con el diagnóstico <span className="text-base">→</span>
          </a>
          <p className="font-sans text-sm text-white/40 max-w-xs">
            45 minutos. Tres frentes priorizados. Garantía de devolución si no hay valor.
          </p>
        </div>
      </div>
    </section>
  )
}
