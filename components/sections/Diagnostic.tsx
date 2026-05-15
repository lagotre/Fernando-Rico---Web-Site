'use client'

import { useEffect, useRef } from 'react'

const CALENDLY = 'https://calendly.com/fernandoricomedina'
const WHATSAPP = 'https://wa.me/573158994202?text=Hola%20Fernando%2C%20quiero%20hablar%20sobre%20mi%20empresa.'

const includes = [
  'Análisis de tu situación competitiva en el canal',
  'Identificación del mayor freno a tu crecimiento comercial',
  'Evaluación del potencial de IA en marketing y ventas',
  'Tres recomendaciones priorizadas con secuencia clara',
  'Grabación de la sesión para tu equipo',
]

const plans = [
  {
    tag: 'PYME PEQUEÑA · HASTA 30 EMPLEADOS',
    name: 'Sesión esencial',
    price: 'USD 50',
    featured: false,
    cta: 'Reservar →',
    href: CALENDLY,
  },
  {
    tag: 'PYME MEDIANA · 31 A 100 EMPLEADOS',
    name: 'Sesión completa',
    price: 'USD 100',
    featured: true,
    badge: 'MÁS ELEGIDA',
    cta: 'Reservar →',
    href: CALENDLY,
  },
  {
    tag: 'CASO ESPECIAL · EMPRESA MÁS GRANDE',
    name: 'Conversación previa',
    price: 'A convenir',
    featured: false,
    cta: 'WhatsApp →',
    href: WHATSAPP,
  },
]

export default function Diagnostic() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="diagnostico" className="py-20 md:py-28 bg-cream" ref={ref}>
      <div className="container-site">
        {/* Header */}
        <div className="reveal max-w-4xl mb-16">
          <div className="section-divider" />
          <span className="section-label">07 · Diagnóstico Estratégico · 45 Minutos</span>
          <h2 className="heading-display mt-4">
            45 minutos. Tres frentes priorizados.{' '}
            <span className="italic-serif">Cero humo.</span>
          </h2>
          <p className="body-lead mt-6 max-w-3xl">
            No es una llamada de venta, es una conversación entre dos personas que entienden el frente comercial. Tú llegas con la pregunta que te quita el sueño y yo llego con 27 años escuchando preguntas parecidas. Si al final de los 45 minutos sales con tres movimientos claros para los próximos 90 días, ganamos los dos. Si no, <strong>te devuelvo el dinero</strong>. Así de simple.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* What's included */}
          <div className="reveal bg-white border border-navy/10 p-8 md:p-10">
            <p className="section-label mb-6">Qué incluye la sesión</p>
            <ul className="space-y-4">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-1 w-4 h-4 shrink-0 border border-gold/50 flex items-center justify-center">
                    <span className="text-gold text-xs">✓</span>
                  </span>
                  <span className="font-sans text-sm text-navy/70 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-navy/8">
              <p className="font-mono text-[10px] tracking-ultra uppercase text-navy/40 leading-relaxed">
                Pago seguro · Sesión virtual · Reagendamiento sin costo con 24 horas de anticipación
              </p>
            </div>
          </div>

          {/* Guarantee */}
          <div className="reveal reveal-delay-1 bg-navy p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 border-2 border-gold/40 rounded-full flex items-center justify-center mb-6">
                <span className="font-serif text-gold text-sm font-medium leading-tight text-center">100%<br/>GARANTÍA</span>
              </div>
              <p className="font-serif text-2xl text-white font-medium leading-snug mb-4">
                Mi <span className="italic text-gold">promesa</span>: si no puedo ayudarte, te devuelvo el dinero.
              </p>
              <p className="font-sans text-sm text-white/60 leading-relaxed">
                Si después de nuestra conversación entiendo que no soy la persona indicada para tu caso, o que necesitas otro profesional, te devuelvo el 100% de lo que pagaste. Sin preguntas, sin formularios. Mi tiempo y el tuyo valen.
              </p>
            </div>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-8 self-start"
            >
              Agenda ahora <span className="text-base">→</span>
            </a>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative p-8 border transition-all duration-300 ${
                plan.featured
                  ? 'bg-navy border-gold/30 shadow-gold-lg'
                  : 'bg-white border-navy/10 hover:border-navy/30'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-8 text-[10px] font-mono tracking-widest uppercase bg-gold text-white px-3 py-1">
                  {plan.badge}
                </span>
              )}
              <p className={`section-label mb-4 ${plan.featured ? 'text-gold' : ''}`}>
                {plan.tag}
              </p>
              <p className={`font-serif text-xl font-medium mb-3 ${plan.featured ? 'text-white' : 'text-navy'}`}>
                {plan.name}
              </p>
              <p className={`font-serif text-5xl font-light mb-6 ${plan.featured ? 'text-white' : 'text-navy'}`}>
                {plan.price}
              </p>
              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className={plan.featured ? 'btn-gold text-sm' : 'btn-outline text-sm'}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
