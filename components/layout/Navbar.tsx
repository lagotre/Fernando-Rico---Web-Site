'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#industrias', label: 'Industrias' },
  { href: '#diagnostico', label: 'Diagnóstico' },
  { href: '#metodologia', label: 'Metodología' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#faq', label: 'FAQ' },
]

const WHATSAPP = 'https://api.whatsapp.com/send/?phone=573158994202&text&type=phone_number&app_absent=0'
const CALENDLY = 'https://calendar.app.google/FAEue2ZuGUf3cR7J7'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-md border-b border-navy/8 shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="flex items-center gap-3 group"
              aria-label="Fernando Rico Medina - Inicio"
            >
              <div className="w-9 h-9 relative flex-shrink-0">
                <Image
                  src="/images/logo-simbolo.png"
                  alt="Logo Fernando Rico"
                  fill
                  className="object-contain"
                  sizes="36px"
                />
              </div>
              <span className="font-serif text-xl font-medium text-navy">
                Fernando Rico<span className="text-gold">.</span>
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="font-mono text-[10px] tracking-widest uppercase text-navy/60 hover:text-navy transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xs"
              >
                Agenda diagnóstico <span className="text-base leading-none">→</span>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Abrir menú"
            >
              <span className={`block w-6 h-px bg-navy transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`block w-6 h-px bg-navy transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-0.5' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 flex flex-col ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-16 md:h-20 border-b border-navy/10" />
        <nav className="flex-1 flex flex-col justify-center container-site gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-serif text-4xl text-navy text-left hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <div className="flex flex-col gap-3 pt-8 border-t border-navy/10">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-gold text-sm justify-center">
              Agenda diagnóstico →
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm justify-center">
              WhatsApp →
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
