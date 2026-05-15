import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, DM_Mono } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fernando Rico Medina — Consultor en Marketing, Trade e IA para Pymes Manufactureras',
  description:
    '27 años en el frente comercial. Consultor en marketing, trade marketing, e-commerce e IA aplicada a ventas para pymes manufactureras en Colombia y LATAM.',
  keywords: [
    'consultor innovación Colombia',
    'transformación digital con IA',
    'consultor IA empresarial',
    'consultor trade marketing Colombia',
    'innovación empresarial pymes',
    'consultoría estratégica PYME',
    'marketing para pymes manufactureras',
    'e-commerce para fabricantes',
    'Fernando Rico Medina',
    'consultor comercial LATAM',
  ],
  authors: [{ name: 'Fernando Rico Medina' }],
  openGraph: {
    title: 'Fernando Rico Medina — Consultor Estratégico',
    description:
      '27 años en el frente comercial. Especialista en marketing, trade, e-commerce e IA para pymes manufactureras.',
    type: 'website',
    locale: 'es_CO',
    siteName: 'Fernando Rico Medina',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fernando Rico Medina — Consultor Estratégico',
    description: '27 años transformando el frente comercial de pymes manufactureras en LATAM.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://fernandoricomedina.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
