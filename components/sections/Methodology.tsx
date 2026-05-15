'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const CALENDAR = 'https://calendar.app.google/FAEue2ZuGUf3cR7J7'

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
    <section id="metodologia" className="bg-navy" ref={ref}>
      {/* Top image strip */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/consulting.jpg"
          alt="Fernando Rico Medina en sesión estratégica"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 flex items-end container-site pb-8">
          <div className="reveal">
            <div className="w-8 h-px bg-gold mb-6" />
            <span className="section-label">08 · Cómo Trabajo · 4 Pasos</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 md:py-20">
        <div className="container-site">
          <h2 className="reveal font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.92] tracking-tight mb-16 max-w-3xl">
            Metodología:{' '}
            <span className="italic text-gold">escuchar, diagnosticar, enfocar, acompañar.</span>
          </h2>

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
            <a href={CALENDAR} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Empieza con el diagnóstico <span className="text-base">→</span>
            </a>
            <p className="font-sans text-sm text-white/40 max-w-xs">
              45 minutos. Tres frentes priorizados. Garantía de devolución si no hay valor.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
