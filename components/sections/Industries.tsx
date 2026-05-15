'use client'

import { useEffect, useRef } from 'react'

const industries = [
  {
    num: '01',
    name: 'Confitería y Snacks',
    italic: 'Snacks',
    body: 'Trabajé con Yogos y Swiss en Trinidad & Tobago. Sé cómo se gana el espacio de impulso en el punto de venta.',
    icon: '◇',
  },
  {
    num: '02',
    name: 'Metalmecánica',
    body: 'Sé cómo se vende un producto técnico a un comprador racional, sin caer en catálogo aburrido.',
    icon: '⊙',
  },
  {
    num: '03',
    name: 'Moda y Confecciones',
    italic: 'Confecciones',
    body: 'Acompañé a Angel Jeans (Efecto Angel) a abrir canal call-center y online, sin canibalizar su tienda física.',
    icon: '△',
  },
  {
    num: '04',
    name: 'CPG · Consumo Masivo',
    italic: 'Consumo Masivo',
    body: 'Construí estrategias de visibilidad y trade para Nestlé y Colombina. Sé cómo pelea una pyme contra un gigante.',
    icon: '▣',
  },
  {
    num: '05',
    name: 'Alimentos',
    body: 'La diferencia entre vender a HORECA y vender a retail no es el producto. Es la conversación.',
    icon: '⊟',
  },
  {
    num: '06',
    name: 'Bebidas',
    body: 'Rotación, exhibición y temperatura: tres palabras que resumen un canal completo.',
    icon: '▽',
  },
  {
    num: '07',
    name: 'Horeca',
    body: 'Le vendí a hoteles, restaurantes y casinos en el Caribe. Sé qué le importa al chef y qué al gerente de compras.',
    icon: '⌂',
  },
  {
    num: '08',
    name: 'Impresión y Artes Gráficas',
    italic: 'Artes Gráficas',
    body: 'Capacité al gremio (ANDIGRAF) en cómo dejar de vender impresión y empezar a vender soluciones de comunicación.',
    icon: '⊕',
  },
  {
    num: '09',
    name: 'E-commerce',
    body: 'No es un canal, es un sistema. He montado más de 100 tiendas para fabricantes.',
    icon: '⊞',
  },
]

export default function Industries() {
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
    <section id="industrias" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="container-site">
        {/* Header */}
        <div className="reveal mb-16 max-w-3xl">
          <div className="section-divider" />
          <span className="section-label">04 · Industrias · 9 Verticales</span>
          <h2 className="heading-display mt-4">
            No vendo a <span className="italic-serif">todas</span> las industrias.{' '}
            A estas <span className="italic-serif">nueve</span>, sí.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/8">
          {industries.map((ind, i) => (
            <div
              key={ind.num}
              className={`reveal reveal-delay-${(i % 3) + 1} bg-white p-8 group hover:bg-navy transition-all duration-400`}
            >
              <div className="flex items-start justify-between mb-6">
                <p className="section-label group-hover:text-gold-light transition-colors">{ind.num}</p>
                <span className="text-2xl text-navy/20 group-hover:text-gold/40 transition-colors font-mono leading-none">
                  {ind.icon}
                </span>
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-medium text-navy group-hover:text-white transition-colors duration-400 mb-3 leading-snug">
                {ind.name}
              </h3>
              <p className="font-sans text-sm text-navy/55 group-hover:text-white/65 leading-relaxed transition-colors duration-400">
                {ind.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
