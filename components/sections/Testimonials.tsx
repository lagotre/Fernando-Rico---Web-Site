'use client'

import { useEffect, useRef } from 'react'

const CALENDLY = 'https://calendly.com/fernandoricomedina'

const testimonials = [
  {
    quote: 'Sus aportes y reflexiones en el panel «Cómo las tendencias de consumo están revolucionando la experiencia en los centros comerciales» fueron muy valiosos y tuvieron gran acogida entre la audiencia.',
    name: 'FENALCO Colombia',
    role: 'Gremio · Panel Sectorial',
    initial: 'F',
  },
  {
    quote: 'Fernando se ha presentado como un consultor honesto, con un asesoramiento de altos estándares de calidad y servicio. Su conocimiento técnico y práctico ha hecho que nuestras marcas tengan resultados exitosos.',
    name: 'Angela Escamilla',
    role: 'Gerente · Grupo 20/20 · Ópticas',
    initial: 'A',
  },
  {
    quote: 'La consultoría de Fernando aceleró nuestro proceso de apertura de nuevos mercados internacionales y generó ventas reales en nuestra tienda virtual y otros canales.',
    name: 'Diana Molina Caicedo',
    role: 'Gerente · Efecto Angel SAS · Moda',
    initial: 'D',
  },
  {
    quote: 'Fernando nos asesoró en marketing digital y transformación digital para el mercado internacional: branding estratégico, gestión de contenido y desarrollo de plataforma web con catálogo online. Lo recomendamos ampliamente.',
    name: 'Maxiempack',
    role: 'Manufactura · Empaques',
    initial: 'M',
  },
  {
    quote: 'Fernando fue nuestro consultor y desarrollador del proyecto «Marketing Internacional»: digitalización de procesos documentales y venta de servicios profesionales a través de plataforma online. Profesionalismo, seriedad, cumplimiento y alto grado de confidencialidad.',
    name: 'Docurrapid Corp',
    role: 'Marketing Digital · Internacional',
    initial: 'D',
  },
]

export default function Testimonials() {
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
    <section id="testimonios" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="container-site">
        {/* Header */}
        <div className="reveal mb-16 max-w-3xl">
          <div className="section-divider" />
          <span className="section-label">12 · Testimonios · 5 Voces · 5 Contextos</span>
          <h2 className="heading-display mt-4">
            Lo que dicen quienes ya{' '}
            <span className="italic-serif">trabajaron conmigo.</span>
          </h2>
          <p className="body-lead mt-4">
            Cinco voces, cinco contextos distintos: una institución gremial, fabricantes de moda, ópticas, empaques y servicios profesionales.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1} bg-cream border border-navy/8 p-8 flex flex-col justify-between group hover:border-gold/30 transition-all duration-300 ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div>
                <span className="font-serif text-4xl text-gold/40 leading-none block mb-4">&ldquo;</span>
                <p className="font-sans text-sm text-navy/70 leading-relaxed mb-6">
                  {t.quote}
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-navy/8">
                <div className="w-10 h-10 bg-navy flex items-center justify-center shrink-0">
                  <span className="font-serif text-white font-medium">{t.initial}</span>
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-navy">{t.name}</p>
                  <p className="font-mono text-[9px] tracking-widest uppercase text-navy/40 mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center">
          <p className="font-serif text-2xl md:text-3xl text-navy mb-6">
            ¿Listo para que tu marca sea el{' '}
            <span className="italic text-gold">próximo caso</span>?
          </p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Agenda tu diagnóstico <span className="text-base">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
