'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const CALENDAR = 'https://calendar.app.google/FAEue2ZuGUf3cR7J7'

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
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-gold/0 via-gold/20 to-gold/0 z-10 pointer-events-none" />

      <div className="flex-1 grid lg:grid-cols-2 min-h-screen">
        {/* LEFT — text */}
        <div className="flex flex-col justify-center pt-28 pb-12 px-6 md:px-10 lg:pl-16 lg:pr-12 relative z-10">
          <div className="hero-reveal reveal mb-8 flex items-center gap-4">
            <div className="w-6 h-px bg-gold" />
            <span className="section-label">Consultor en Marketing · Trade · E-commerce · IA</span>
          </div>

          <h1 className="hero-reveal reveal reveal-delay-1 font-serif text-5xl sm:text-6xl lg:text-7xl text-navy leading-[0.92] tracking-tight mb-4 max-w-xl">
            Tu empresa produce bien.{' '}
            <span className="block">Tu área comercial</span>
            <span className="font-serif italic text-gold block">necesita ponerse al día.</span>
          </h1>

          <p className="hero-reveal reveal reveal-delay-2 text-base md:text-lg text-navy/65 leading-relaxed mt-6 max-w-lg font-sans">
            Soy Fernando Rico. Llevo 27 años en el frente comercial de empresas manufactureras en Colombia, Centroamérica y el Caribe. No asesoro tu producción; asesoro cómo tu producto capta la atención, llega al canal y genera ventas rentables. Y cómo la IA hace ese camino más corto y barato.
          </p>

          <div className="hero-reveal reveal reveal-delay-3 flex flex-col sm:flex-row items-start gap-4 mt-10">
            <a href={CALENDAR} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Agenda diagnóstico de 45 min <span className="text-base">→</span>
            </a>
            <button onClick={() => scrollToSection('servicios')} className="btn-outline">
              ¿Cómo trabajo con empresas como la tuya?
            </button>
          </div>

          <div className="hero-reveal reveal reveal-delay-4 flex flex-wrap items-center gap-x-6 gap-y-2 mt-10">
            {['✓ 27 años en el frente comercial', '✓ Colombia, Centroamérica y Caribe', '✓ Especialista en pymes manufactureras'].map((item) => (
              <span key={item} className="text-sm text-navy/55 font-sans">{item}</span>
            ))}
          </div>
        </div>

        {/* RIGHT — hero photo (desktop) */}
        <div className="relative hidden lg:block">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <Image
            src="/images/fernando-bw.png"
            alt="Fernando Rico Medina — Consultor estratégico"
            fill
            className="object-cover object-center"
            priority
            sizes="50vw"
          />
          <div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur-sm px-5 py-3 border-l-2 border-gold">
            <p className="font-mono text-[10px] tracking-ultra uppercase text-navy/50">FRM · Bogotá</p>
            <p className="font-serif text-sm text-navy font-medium">1998 → 2026</p>
          </div>
        </div>
      </div>

      {/* Mobile hero image */}
      <div className="lg:hidden relative h-72 overflow-hidden">
        <Image
          src="/images/fernando-bw.png"
          alt="Fernando Rico Medina"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
      </div>

      {/* Ticker bar */}
      <div className="border-t border-navy/8 bg-navy/3 overflow-hidden py-3 ticker-wrapper">
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
