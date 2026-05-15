import Image from 'next/image'

const footerNav = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#industrias', label: 'Industrias' },
  { href: '#diagnostico', label: 'Diagnóstico' },
  { href: '#metodologia', label: 'Metodología' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#faq', label: 'FAQ' },
]

const CALENDLY = 'https://calendar.app.google/FAEue2ZuGUf3cR7J7'
const WHATSAPP = 'https://api.whatsapp.com/send/?phone=573158994202&text&type=phone_number&app_absent=0'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 relative flex-shrink-0">
                <Image
                  src="/images/logo-simbolo.png"
                  alt="Logo Fernando Rico"
                  fill
                  className="object-contain brightness-0 invert"
                  sizes="36px"
                />
              </div>
              <span className="font-serif text-xl font-medium">
                Fernando Rico<span className="text-gold">.</span>
              </span>
            </div>
            <p className="font-sans text-white/60 text-sm leading-relaxed max-w-xs">
              Consultor en marketing, trade marketing, e-commerce e IA aplicada a ventas para pymes manufactureras en Colombia y LATAM.
            </p>
            <p className="font-mono text-[10px] tracking-ultra uppercase text-white/30 mt-6">
              FRM · Bogotá · 1998 → 2026
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label mb-6">Navegación</p>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-6">Contacto</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:fernando.rico@grupodiforma.com"
                  className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-200 break-all"
                >
                  fernando.rico@grupodiforma.com
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  WhatsApp +57 315 899 4202
                </a>
              </li>
              <li>
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-gold hover:text-gold-light transition-colors duration-200"
                >
                  Agenda diagnóstico →
                </a>
              </li>
            </ul>
            <p className="section-label mt-8 mb-4">Redes</p>
            <ul className="space-y-2">
              <li>
                <a href="https://linkedin.com/in/fernandoricomedina" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-white/60 hover:text-white transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="https://instagram.com/fernando_rico_m" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-white/60 hover:text-white transition-colors">Instagram @fernando_rico_m</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] tracking-widest uppercase text-white/30">
            © 2026 Fernando Rico Medina · Bogotá, Colombia
          </p>
          <p className="font-mono text-[10px] tracking-widest uppercase text-white/20">
            Diforma In Store · Digitalli Agency · Disenni · Marketeros Agencia
          </p>
        </div>
      </div>
    </footer>
  )
}
