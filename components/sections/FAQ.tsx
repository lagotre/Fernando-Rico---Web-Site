'use client'

import { useState, useEffect, useRef } from 'react'

const WHATSAPP = 'https://api.whatsapp.com/send/?phone=573158994202&text&type=phone_number&app_absent=0'

const faqs = [
  {
    q: '¿Trabajas con empresas fuera de Colombia?',
    a: 'Sí. He trabajado en Trinidad & Tobago, Jamaica, Puerto Rico y Centroamérica, y acompaño a pymes manufactureras colombianas que exportan a LATAM. Las sesiones son virtuales; el conocimiento sectorial viaja sin fricción.',
  },
  {
    q: '¿En qué se diferencia tu consultoría de una agencia de marketing digital normal?',
    a: 'Una agencia ejecuta entregables (pauta, contenido, redes). Yo asesoro la estrategia comercial completa: trade, shopper, canal, e-commerce, equipo de ventas, IA. Trabajo con tu equipo y con las agencias que ya tienes, no contra ellas.',
  },
  {
    q: '¿Asesoras procesos productivos o solo la parte comercial?',
    a: 'Solo la parte comercial y de marketing. No toco planta, ni lean, ni ERP, ni cadena de abastecimiento operativa. Mi terreno empieza cuando el producto está listo y termina cuando el cliente vuelve a comprarlo.',
  },
  {
    q: '¿Cuánto demora ver resultados en mercadeo y ventas?',
    a: 'Los primeros movimientos del plan de 90 días suelen mostrar señales en 30 a 45 días: mejor exhibición, primer canal digital activo, primer piloto de IA. Resultados estructurales (margen, mix de canal, recompra) toman entre 6 y 12 meses.',
  },
  {
    q: '¿Qué pasa si después del diagnóstico quiero seguir trabajando contigo?',
    a: 'Si hay encaje, definimos un acompañamiento mensual o por proyecto (90 días suele ser el mínimo útil). Si no hay encaje, te lo digo. No me caso por necesidad; trabajo donde puedo mover la aguja.',
  },
  {
    q: '¿Trabajas con fabricantes que aún no venden online?',
    a: 'Sí, y muchas veces es donde más valor entrego. Diseñamos la estrategia desde cero: B2B, B2C o D2C, propio o marketplace, sin canibalizar tus canales tradicionales.',
  },
  {
    q: '¿La IA aplicada a marketing y ventas realmente sirve para una pyme de mi tamaño?',
    a: 'Sí, si se eligen bien los casos de uso. Pricing dinámico, pronóstico de demanda, contenido para canales y chatbots para distribuidores cuestan hoy una fracción de lo que costaban hace dos años. La trampa está en arrancar por moda, no por dolor.',
  },
  {
    q: '¿Por qué solo 45 minutos?',
    a: 'Porque alcanza. Con la información correcta antes de la sesión y foco en el problema más caro, 45 minutos dan para diagnosticar y priorizar tres movimientos. Más tiempo, sin acción, es solo conversación.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.06 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="faq" className="py-20 md:py-28 bg-cream" ref={ref}>
      <div className="container-site">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          {/* Left */}
          <div className="reveal">
            <div className="section-divider" />
            <span className="section-label">13 · Preguntas Frecuentes · 8 Respuestas</span>
            <h2 className="heading-display mt-4">
              Las preguntas que{' '}
              <span className="italic-serif">siempre</span>{' '}
              me hacen.
            </h2>
            <p className="body-lead mt-6">
              Si la tuya no está aquí, escríbeme por WhatsApp y la respondo en menos de 24 horas. Sin formularios largos.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-8 inline-flex"
            >
              WhatsApp <span className="text-base">→</span>
            </a>
          </div>

          {/* Right – accordion */}
          <div className="reveal reveal-delay-1">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-navy/10 last:border-b-0">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  aria-expanded={open === i}
                >
                  <span className="flex items-start gap-4">
                    <span className="font-mono text-[10px] tracking-widest text-gold mt-1 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-sans text-base font-medium text-navy group-hover:text-navy/70 transition-colors leading-snug">
                      {faq.q}
                    </span>
                  </span>
                  <span className={`shrink-0 w-6 h-6 border border-navy/20 flex items-center justify-center text-navy/60 text-sm transition-all duration-300 ${open === i ? 'rotate-45 border-gold text-gold' : ''}`}>
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    open === i ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <div className="pl-10 pr-8">
                    <div className="w-8 h-px bg-gold mb-4" />
                    <p className="font-sans text-sm text-navy/65 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
