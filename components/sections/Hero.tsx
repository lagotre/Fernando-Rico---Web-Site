'use client'

import { useEffect, useRef } from 'react'

const CALENDLY = 'https://calendly.com/fernandoricomedina'
const WHATSAPP = 'https://wa.me/573158994202?text=Hola%20Fernando%2C%20quiero%20agendar%20mi%20diagn%C3%B3stico%20estrat%C3%A9gico.'

const credentials = [
  '27 años en el frente comercial',
  'Colombia · Centroamérica · Caribe',
  'Especialista en pymes manufactureras',
  '+100 empresas acompañadas en LATAM',
  '+75 marcas construidas',
  '9 verticales industriales',
  'Nestlé · Colombina · Unilever',
  'Diagnóstico en 45 minutos',
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll('.hero-reveal')
    els?.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 100 + i * 150)
    })
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col" ref={containerRef}>
      {/* Background subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-cream/30 to-white pointer-events-none" />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-gold/0 via-gold/20 to-gold/0" />

      <div className="container-site flex-1 flex flex-col justify-center pt-32 pb-16 relative z-10">
        {/* Label */}
        <div className="hero-reveal reveal mb-8 flex items-center gap-4">
          <div className="w-6 h-px bg-gold" />
          <span className="section-label">Consultor en Marketing · Trade · E-commerce · IA</span>
        </div>

        {/* Main heading */}
        <h1 className="hero-reveal reveal reveal-delay-1 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-navy leading-[0.92] tracking-tight mb-4 max-w-5xl">
          Tu empresa produce bien.{' '}
          <span className="block">Tu área comercial</span>
          <span className="italic-serif block">necesita ponerse al día.</span>
        </h1>

        {/* Subheading */}
        <p className="hero-reveal reveal reveal-delay-2 body-lead mt-8 max-w-2xl">
          Soy Fernando Rico. Llevo 27 años trabajando en el frente comercial de empresas manufactureras en Colombia, Centroamérica y el Caribe. No asesoro tu producción; asesoro cómo tu producto capta la atención, llega al canal y genera ventas rentables. Y cómo la IA hace ese camino más corto y más barato.
        </p>

        {/* CTAs */}
        <div className="hero-reveal reveal reveal-delay-3 flex flex-col sm:flex-row items-start gap-4 mt-10">
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Agenda tu diagnóstico de 45 min <span className="text-base">→</span>
          </a>
          <button
            onClick={() => scrollToSection('servicios')}
            className="btn-outline group"
          >
            ¿Cómo trabajo con empresas como la tuya?
          </button>
        </div>

        {/* Trust badges */}
        <div className="hero-reveal reveal reveal-delay-4 flex flex-wrap items-center gap-x-8 gap-y-3 mt-12">
          {[
            { icon: '✓', text: '27 años en el frente comercial' },
            { icon: '✓', text: 'Colombia, Centroamérica y Caribe' },
            { icon: '✓', text: 'Especialista en pymes manufactureras' },
          ].map((item) => (
            <span key={item.text} className="flex items-center gap-2 text-sm text-navy/60 font-sans">
              <span className="text-gold font-medium">{item.icon}</span>
              {item.text}
            </span>
          ))}
        </div>
      </div>

      {/* Ticker bar */}
      <div className="relative z-10 border-t border-navy/8 bg-navy/3 overflow-hidden py-3 ticker-wrapper">
        <div className="ticker-content flex whitespace-nowrap animate-ticker">
          {[...credentials, ...credentials].map((c, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-8 font-mono text-[10px] tracking-ultra uppercase text-navy/40">
              {c}
              <span className="text-gold">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
