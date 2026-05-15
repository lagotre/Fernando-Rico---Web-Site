import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import PainPoints from '@/components/sections/PainPoints'
import Services from '@/components/sections/Services'
import Diagnostic from '@/components/sections/Diagnostic'
import Industries from '@/components/sections/Industries'
import Methodology from '@/components/sections/Methodology'
import Team from '@/components/sections/Team'
import Clients from '@/components/sections/Clients'
import About from '@/components/sections/About'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <PainPoints />
        <Services />
        <Diagnostic />
        <Industries />
        <Methodology />
        <Team />
        <Clients />
        <About />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
