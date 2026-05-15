'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const teams = [
  {
    num: '01',
    tag: 'Visibilidad · In-Store',
    name: 'Diforma In Store',
    logo: '/images/logo-diforma.png',
    logoDark: true,
    body: 'Agencia experta en visibilidad de marca y punto de venta. Socio fundador desde 1998. Producción, exhibición, material POP y activación en piso de venta para fabricantes que pelean cada metro de espacio.',
    sub: '1998 → hoy · Bogotá',
  },
  {
    num: '02',
    tag: 'Innovación · Diseño',
    name: 'Disenni',
    logo: '/images/logo-disenni.png',
    logoDark: false,
    body: 'Laboratorio de diseño e innovación. Programas de cultura, Design Thinking aplicado al negocio, portafolio de iniciativas y métricas de innovación para empresas que quieren dejar de improvisar.',
    sub: 'Innovación estructurada',
  },
  {
    num: '03',
    tag: 'Branding · Experiencia Digital',
    name: 'Digitalli Agency',
    logo: '/images/logo-digitalli.png',
    logoDark: true,
    body: 'Agencia de diseño de marca y experiencia digital. Branding estratégico, sitios comerciales, e-commerce y activos digitales que convierten para fabricantes que llegan al consumidor final.',
    sub: 'Brand · Digital · E-commerce',
  },
  {
    num: '04',
    tag: 'CRM · Automatización',
    name: 'Marketeros Agencia',
    logo: '/images/logo-marketeros.png',
    logoDark: false,
    body: 'Socio estratégico. Zoho Partner Premium. Automatización comercial, CRM, integraciones y operación digital del área de ventas para que el equipo deje de cargar Excel y empiece a vender.',
    sub: 'Zoho Premium Partner',
  },
]

export default function Team() {
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
    <section id="equipo" className="py-20 md:py-28 bg-cream" ref={ref}>
      <div className="container-site">

        {/* Header + team photo */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="reveal">
            <div className="section-divider" />
            <span className="section-label">09 · Mi Equipo · 4 Frentes Operativos</span>
            <h2 className="heading-display mt-4">
              No construyo proyectos en solitario. Cada desafío se respalda en equipos, experiencia y empresas consolidadas que convierten{' '}
              <span className="italic-serif">ideas en ejecución.</span>
            </h2>
            <p className="body-lead mt-6">
              La asesoría llega contigo en la conversación; la ejecución llega con mis equipos. Cada uno cubre un frente del mismo problema: cómo tu marca aparece, vende y crece.
            </p>
          </div>
          <div className="reveal reveal-delay-1 relative aspect-video overflow-hidden">
            <Image
              src="/images/hero.jpg"
              alt="Fernando Rico Medina — consultor estratégico en su oficina"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teams.map((team, i) => (
            <div
              key={team.num}
              className={`reveal reveal-delay-${(i % 2) + 1} bg-white border border-navy/10 p-8 md:p-10 group hover:border-gold/30 hover:shadow-card-hover transition-all duration-300`}
            >
              {/* Header row: num + logo */}
              <div className="flex items-start justify-between mb-6">
                <p className="section-label">{team.num}</p>
                {/* Logo monocromático — brightness(0) convierte cualquier color en negro */}
                <div className="relative h-7 w-32">
                  <Image
                    src={team.logo}
                    alt={`Logo ${team.name}`}
                    fill
                    className="object-contain object-right"
                    style={{ filter: 'brightness(0) opacity(0.65)' }}
                    sizes="128px"
                  />
                </div>
              </div>

              <p className="section-label text-gold mb-2">{team.tag}</p>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-navy mb-4 leading-snug">
                {team.name}
              </h3>
              <p className="font-sans text-sm text-navy/60 leading-relaxed mb-6">
                {team.body}
              </p>
              <p className="font-mono text-[10px] tracking-widest uppercase text-navy/35 pt-6 border-t border-navy/8">
                {team.sub}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
