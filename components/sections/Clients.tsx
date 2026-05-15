'use client'

import { useEffect, useRef } from 'react'

const multinationals = [
  'Nestlé', 'Colombina', 'Unilever', 'Bermudez Group', 'Vemco Ltd',
  'Puerto Rico Suppliers Group', 'DirecTV Caribbean', 'VSH Foods',
  'Supermercados Econo', 'Casinos Grupo Vicca',
]

const pymes = [
  'Angel Jeans', 'Ópticas 20/20', 'Yanuba', 'Newline', 'Zansui',
  'Felcan', 'Maxiempack', 'Docurrapid', 'Snack 360', 'Effecto Angel',
]

const institutions = [
  'Procolombia', 'Cámara de Comercio de Bogotá', 'FENALCO',
  'UNIPYMES', 'ANDIGRAF', 'CESA', 'ENEL',
]

export default function Clients() {
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
    <section id="clientes" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="container-site">
        {/* Header */}
        <div className="reveal mb-16 max-w-3xl">
          <div className="section-divider" />
          <span className="section-label">10 · Trayectoria · Marcas · Pymes · Instituciones</span>
          <h2 className="heading-display mt-4">
            Marcas y empresas que han confiado en mi{' '}
            <span className="italic-serif">trabajo.</span>
          </h2>
        </div>

        {/* Multinationals ticker */}
        <div className="reveal mb-12">
          <p className="section-label mb-6">Marcas Multinacionales y Regionales</p>
          <div className="border-t border-b border-navy/8 py-6 overflow-hidden ticker-wrapper">
            <div className="ticker-content flex whitespace-nowrap animate-ticker-slow">
              {[...multinationals, ...multinationals].map((name, i) => (
                <span key={i} className="inline-flex items-center gap-6 px-8 font-serif text-2xl md:text-3xl font-light text-navy/70">
                  {name}
                  <span className="text-gold text-base font-sans">·</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Pymes grid */}
        <div className="reveal mb-12">
          <p className="section-label mb-6">Pymes y Marcas con las que he Trabajado de Cerca</p>
          <div className="flex flex-wrap gap-3">
            {pymes.map((name) => (
              <span
                key={name}
                className="font-sans text-sm text-navy/60 border border-navy/10 px-4 py-2 hover:border-gold/40 hover:text-navy transition-all duration-200"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Institutions */}
        <div className="reveal">
          <p className="section-label mb-6">Instituciones donde he sido Facilitador y Conferencista</p>
          <div className="flex flex-wrap gap-3">
            {institutions.map((name) => (
              <span
                key={name}
                className="font-sans text-xs font-medium uppercase tracking-wider text-white bg-navy/80 px-4 py-2 hover:bg-navy transition-colors duration-200"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
