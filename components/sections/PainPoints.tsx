'use client'

import { useEffect, useRef } from 'react'

const CALENDLY = 'https://calendar.app.google/FAEue2ZuGUf3cR7J7'

const pains = [
  {
    num: '01',
    tag: 'Márgenes',
    title: 'Tu empresa produce bien, pero tus márgenes comerciales se siguen apretando.',
    body: 'Bajaste costos en producción. Pero el margen real lo está comiendo el canal: descuentos, devoluciones, espacios en punto de venta, pelea de precios. El problema no está en la planta.',
  },
  {
    num: '02',
    tag: 'Concentración',
    title: 'Dependes de pocos clientes y eso te quita el sueño.',
    body: 'Tres o cuatro grandes superficies o distribuidores concentran tu facturación. Cuando uno tose, tu flujo de caja se enferma. Diversificar canales suena fácil hasta que toca ejecutarlo.',
  },
  {
    num: '03',
    tag: 'Visibilidad',
    title: 'Te pelean el espacio en el punto de venta y no sabes con qué responder.',
    body: 'Las marcas grandes tienen presupuesto para visibilidad y trade. Tú compites con producto bueno y precio justo, pero el shopper no te ve. Llevas años así y ya cansa.',
  },
  {
    num: '04',
    tag: 'Equipo',
    title: 'Tu equipo comercial vende como hace 15 años.',
    body: 'Vendedores en ruta, Excel, llamadas y ferias. Funciona, pero todos los años cuesta más cerrar lo mismo. El equipo lo da todo, pero el modelo está agotado.',
  },
  {
    num: '05',
    tag: 'IA',
    title: 'Escuchas hablar de IA en ventas y marketing y no sabes si es para ti.',
    body: 'Tu competencia ya está usando IA para pricing, pronóstico de demanda, contenido y atención al cliente. No necesitas un proyecto de USD 200.000; necesitas saber por dónde se empieza.',
  },
  {
    num: '06',
    tag: 'Expansión',
    title: 'Quieres exportar o abrir e-commerce y no sabes cómo.',
    body: 'Tienes el producto y la capacidad. Falta la estrategia digital de entrada y alguien que ya haya recorrido ese camino antes, con fabricantes reales, no con teoría.',
  },
]

export default function PainPoints() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="problemas" className="py-20 md:py-28 bg-cream" ref={ref}>
      <div className="container-site">
        {/* Header */}
        <div className="reveal max-w-3xl mb-16">
          <div className="section-divider" />
          <span className="section-label">05 · Dolores del Frente Comercial</span>
          <h2 className="heading-display mt-4">
            Si llevas el área comercial o de marketing, probablemente{' '}
            <span className="italic-serif">reconoces alguno</span> de estos escenarios.
          </h2>
          <p className="body-lead mt-6">
            No son problemas de máquinas ni de planta. Son problemas de cómo tu producto bueno se convierte, o no, en una venta rentable y repetida.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/8">
          {pains.map((pain, i) => (
            <div
              key={pain.num}
              className={`reveal reveal-delay-${(i % 3) + 1} bg-white p-8 group hover:bg-navy transition-all duration-500`}
            >
              <p className="section-label mb-4 group-hover:text-gold-light transition-colors">
                {pain.num} · {pain.tag}
              </p>
              <h3 className="font-serif text-xl md:text-2xl text-navy group-hover:text-white font-medium leading-snug transition-colors duration-500 mb-4">
                {pain.title}
              </h3>
              <p className="font-sans text-sm text-navy/60 group-hover:text-white/70 leading-relaxed transition-colors duration-500">
                {pain.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA callout */}
        <div className="reveal mt-12 bg-navy p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-serif text-2xl md:text-3xl text-white max-w-xl leading-snug">
            Si reconociste al menos dos, esta conversación de 45 minutos te va a doler{' '}
            <span className="italic text-gold">en el buen sentido.</span>
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold shrink-0"
          >
            Reservar diagnóstico <span className="text-base">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
