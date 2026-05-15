'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const CALENDAR = 'https://calendar.app.google/FAEue2ZuGUf3cR7J7'

const formation = [
  'Diseño Industrial · Pontificia Universidad Javeriana',
  'Maestría en Marketing Digital y E-Commerce · OBS Business School / Universitat de Barcelona',
  'Formación especializada en Marketing Digital',
  'Formación en Innovación y Experiencia del Cliente',
]

export default function About() {
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
    <section id="sobre-mi" className="py-20 md:py-28 bg-cream" ref={ref}>
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Photo column */}
          <div className="reveal">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone">
              <Image
                src="/images/fernando-portrait.jpg"
                alt="Fernando Rico Medina"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle gold overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>
            <div className="flex items-center justify-between mt-4 px-1">
              <p className="font-mono text-[10px] tracking-ultra uppercase text-navy/40">FRM · Bogotá</p>
              <p className="font-mono text-[10px] tracking-ultra uppercase text-navy/40">1998 → 2026</p>
            </div>
          </div>

          {/* Text column */}
          <div>
            <div className="reveal mb-8">
              <div className="section-divider" />
              <span className="section-label">11 · Sobre Mí · Fernando Rico Medina</span>
            </div>

            <h2 className="reveal heading-display mt-4 mb-8">
              He vivido el negocio desde la línea de producción, el piso de venta, el e-commerce{' '}
              <span className="italic-serif">y la junta directiva.</span>
            </h2>

            <div className="reveal reveal-delay-1 space-y-5 mb-8">
              <p className="font-sans text-base text-navy/65 leading-relaxed">
                No vengo del aula a explicarte tu mercado. Vengo de pararme delante de un cliente, perder una venta, recuperarla, abrir un canal, cerrarlo cuando no daba y volver a empezar. He fundado empresas, las he sacado adelante, algunas las he quebrado y de todas he aprendido. Por eso, cuando me siento contigo, sé lo que cuesta cada decisión.
              </p>
              <p className="font-sans text-base text-navy/65 leading-relaxed">
                Soy Diseñador Industrial de la Pontificia Universidad Javeriana, con maestría en Marketing Digital y Comercio Electrónico de OBS Business School (Universitat de Barcelona). Esa mezcla me dejó una manera particular de mirar: la empresa como un sistema vivo donde producto, marca, canal, experiencia y cliente no son compartimentos, son la misma conversación.
              </p>
              <p className="font-sans text-base text-navy/65 leading-relaxed">
                Durante 27 años he construido estrategia y ejecución comercial para marcas como Nestlé, Colombina, Unilever, Bermudez Group, Vemco y DirecTV Caribbean. He desarrollado más de 50 tiendas en línea para fabricantes colombianos. He trabajado codo a codo con más de 50 pymes manufactureras que se parecen mucho a la tuya.
              </p>
              <p className="font-sans text-base text-navy/65 leading-relaxed">
                <strong className="text-navy font-medium">Lo que no hago lo digo de frente:</strong> no asesoro plantas, ni procesos productivos, ni ERPs, ni cadena de abastecimiento operativa. Mi terreno empieza cuando el producto ya está listo y termina cuando el cliente vuelve a comprarlo.
              </p>
            </div>

            {/* Quote */}
            <div className="reveal reveal-delay-2 border-l-2 border-gold pl-6 mb-8">
              <p className="font-serif text-xl italic text-navy/70 leading-relaxed">
                "Mi lema, ganado a pulso: emprender para aprender, aprender para emprender."
              </p>
            </div>

            {/* Formation */}
            <div className="reveal reveal-delay-3 mb-8">
              <p className="section-label mb-4">Formación</p>
              <ul className="space-y-2">
                {formation.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-sans text-navy/60">
                    <span className="text-gold mt-1 shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="reveal reveal-delay-4 flex flex-wrap gap-4">
              <a href={CALENDAR} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Agendar diagnóstico <span className="text-base">→</span>
              </a>
              <a
                href="https://linkedin.com/in/fernandoricomedina"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                LinkedIn <span className="text-base">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
