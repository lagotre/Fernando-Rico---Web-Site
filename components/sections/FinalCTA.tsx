'use client'

import { useEffect, useRef } from 'react'

const CALENDLY = 'https://calendly.com/fernandoricomedina'
const WHATSAPP = 'https://wa.me/573158994202?text=Hola%20Fernando%2C%20quiero%20agendar%20mi%20diagn%C3%B3stico%20estrat%C3%A9gico.'

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="container-site">
        {/* Section label */}
        <div className="reveal mb-8">
          <div className="section-divider" />
          <span className="section-label">14 · Último Paso</span>
        </div>

        {/* Main block */}
        <div className="reveal bg-navy relative overflow-hidden p-12 md:p-16 lg:p-20">
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-48 h-48 border-l border-b border-gold/10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-r border-t border-gold/10" />

          <div className="relative z-10 max-w-3xl">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.92] tracking-tight mb-8">
              El mercado no espera a que tu área comercial{' '}
              <span className="italic text-gold">esté lista.</span>
            </h2>
            <p className="font-sans text-lg text-white/65 leading-relaxed mb-10 max-w-2xl">
              Cada trimestre sin claridad comercial es un trimestre que tu competencia aprovecha. Si llevas una pyme manufacturera y sientes que algo se está apretando en ventas o mercadeo, hablemos 45 minutos. Si no hay valor, no hay siguiente paso. Así de simple.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Agenda tu diagnóstico <span className="text-base">→</span>
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light"
              >
                Escríbeme por WhatsApp <span className="text-base">→</span>
              </a>
            </div>

            {/* Micro-copy */}
            <p className="font-mono text-[10px] tracking-ultra uppercase text-white/25 mt-8">
              Pyme pequeña: USD 50 · Pyme mediana: USD 100 · Garantía de devolución 100%
            </p>
          </div>
        </div>

        {/* Contact form teaser */}
        <div className="reveal mt-12 border border-navy/10 p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="section-label mb-3">¿Prefieres escribir primero?</p>
              <p className="font-sans text-sm text-navy/60 leading-relaxed">
                Cuéntame brevemente qué está pasando en el frente comercial de tu empresa y te respondo en menos de 24 horas.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const name = (form.elements.namedItem('name') as HTMLInputElement)?.value
                const company = (form.elements.namedItem('company') as HTMLInputElement)?.value
                const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value
                const wa = `${WHATSAPP}&text=Hola%20Fernando%2C%20soy%20${encodeURIComponent(name)}%20de%20${encodeURIComponent(company)}.%20${encodeURIComponent(message)}`
                window.open(wa, '_blank')
              }}
              className="flex flex-col gap-3"
            >
              <div className="grid grid-cols-2 gap-3">
                <input
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  required
                  className="font-sans text-sm border border-navy/15 px-4 py-3 outline-none focus:border-gold transition-colors placeholder:text-navy/30"
                />
                <input
                  name="company"
                  type="text"
                  placeholder="Tu empresa"
                  required
                  className="font-sans text-sm border border-navy/15 px-4 py-3 outline-none focus:border-gold transition-colors placeholder:text-navy/30"
                />
              </div>
              <textarea
                name="message"
                rows={3}
                placeholder="¿Qué está pasando en el frente comercial de tu empresa?"
                required
                className="font-sans text-sm border border-navy/15 px-4 py-3 outline-none focus:border-gold transition-colors placeholder:text-navy/30 resize-none"
              />
              <button type="submit" className="btn-primary self-start">
                Enviar por WhatsApp <span className="text-base">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
