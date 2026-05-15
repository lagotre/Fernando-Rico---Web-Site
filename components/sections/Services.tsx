'use client'

import { useEffect, useRef } from 'react'

const CALENDLY = 'https://calendar.app.google/FAEue2ZuGUf3cR7J7'

const services = [
  {
    num: '01',
    tag: 'Servicio insignia',
    badge: 'EMPEZAR AQUÍ',
    title: 'Diagnóstico Estratégico Comercial de 45 minutos',
    body: 'Una conversación quirúrgica para identificar dónde está la fuga de valor más cara en tu frente comercial hoy. ¿Es trade, es shopper, es canal, es portafolio, es e-commerce, es tu equipo de ventas, es pricing? Sales con tres frentes priorizados para los próximos 90 días.',
    bullets: [
      'Análisis de tu situación comercial frente al mercado',
      'Identificación del cuello de botella que más te cuesta',
      'Hoja de ruta de acción para 90 días',
      'Cero presentación corporativa, cero relleno',
    ],
    featured: true,
  },
  {
    num: '02',
    tag: 'La especialidad de la casa',
    title: 'Trade y Shopper Marketing para Pymes',
    body: 'He desarrollado estrategias de visibilidad en punto de venta para Nestlé, Puerto Rico Supplies, Colombina, Curacao Foods Traders y VSH Foods en Colombia, Trinidad, Jamaica y Puerto Rico. Te ayudo a competir en el piso de venta sin el presupuesto de un multinacional.',
    bullets: [
      'Estrategia de visibilidad y exhibición en punto de venta',
      'Category management aplicado a tu portafolio',
      'Material POP que vende, no que decora',
      'Plan de activación con distribuidores y canal moderno',
    ],
    featured: false,
  },
  {
    num: '03',
    tag: 'Canal digital',
    title: 'E-commerce y Marketing Digital',
    body: 'Para empresarios que llevan 20 años vendiendo B2B por catálogo y fuerza de ventas, y ahora necesitan llegar al consumidor final, abrir marketplaces o exportar digitalmente. Más de 100 sitios comerciales desarrollados con Marketeros Agencia y Digitalli.',
    bullets: [
      'Diseño del canal e-commerce propio (B2B, B2C o D2C)',
      'Desarrollo de activos digitales que convierten',
      'Automatización comercial con CRM y ecosistema Zoho',
      'Branding, experiencias digitales y comunicación visual',
    ],
    featured: false,
  },
  {
    num: '04',
    tag: 'Sin humo',
    title: 'IA Aplicada a Marketing y Ventas',
    body: 'Casos concretos para pymes manufactureras: pronóstico de demanda, optimización de pricing, generación de contenido para canales, análisis de ventas por SKU, chatbots para distribuidores y automatización de cotizaciones. Lo que sí mueve la aguja.',
    bullets: [
      'Identificación de 3 a 5 casos de uso de alto impacto',
      'Selección de herramientas según presupuesto pyme',
      'Piloto en 30 a 60 días con resultados medibles',
      'Capacitación al equipo comercial y de marketing',
    ],
    featured: false,
  },
  {
    num: '05',
    tag: 'Con el equipo de Disenni',
    title: 'Innovación y Gestión del Cambio',
    body: 'Programas de innovación estructurada para empresas que quieren dejar de improvisar y empezar a innovar con metodología y propósito. Diseño estratégico aplicado al negocio, no como ejercicio teórico.',
    bullets: [
      'Talleres de cultura de innovación',
      'Design Thinking aplicado al negocio',
      'Portafolio de iniciativas priorizadas',
      'Métricas de innovación',
    ],
    featured: false,
  },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicios" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="container-site">
        {/* Header */}
        <div className="reveal max-w-3xl mb-16">
          <div className="section-divider" />
          <span className="section-label">06 · Servicios · 5 Frentes</span>
          <h2 className="heading-display mt-4">
            Cinco frentes donde una pyme manufacturera puede ganar,{' '}
            <span className="italic-serif">rápido y de verdad.</span>
          </h2>
        </div>

        {/* Services list */}
        <div className="flex flex-col gap-0">
          {services.map((svc, i) => (
            <div
              key={svc.num}
              className={`reveal reveal-delay-${(i % 3) + 1} group border border-navy/10 ${
                svc.featured ? 'bg-navy text-white' : 'bg-white hover:bg-cream'
              } transition-all duration-300`}
            >
              <div className="p-8 md:p-10">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className={`section-label mb-1 ${svc.featured ? 'text-gold' : ''}`}>
                      {svc.num} · {svc.tag}
                    </p>
                    <h3 className={`font-serif text-2xl md:text-3xl font-medium leading-snug ${svc.featured ? 'text-white' : 'text-navy'}`}>
                      {svc.title}
                    </h3>
                  </div>
                  {svc.badge && (
                    <span className="shrink-0 text-[10px] font-mono tracking-widest uppercase bg-gold text-white px-3 py-1.5">
                      {svc.badge}
                    </span>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <p className={`font-sans text-sm leading-relaxed ${svc.featured ? 'text-white/70' : 'text-navy/60'}`}>
                    {svc.body}
                  </p>
                  <ul className="space-y-2.5">
                    {svc.bullets.map((b) => (
                      <li key={b} className={`flex items-start gap-3 text-sm font-sans ${svc.featured ? 'text-white/80' : 'text-navy/70'}`}>
                        <span className="text-gold mt-0.5 text-base leading-none shrink-0">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {svc.featured && (
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <a
                      href={CALENDLY}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold"
                    >
                      Agenda tu diagnóstico <span className="text-base">→</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
