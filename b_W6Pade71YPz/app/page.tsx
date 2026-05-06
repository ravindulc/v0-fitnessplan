import { Navigation } from '@/components/sections/navigation'
import { Hero } from '@/components/sections/hero'
import { Architect } from '@/components/sections/architect'
import { BuildPhases } from '@/components/sections/build-phases'
import { Testimonials } from '@/components/sections/testimonials'
import { Pricing } from '@/components/sections/pricing'
import { FAQ } from '@/components/sections/faq'
import { FinalCTA } from '@/components/sections/final-cta'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Architect />
        <BuildPhases />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
