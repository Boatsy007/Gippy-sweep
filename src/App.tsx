import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { TrustBar } from './components/sections/TrustBar'
import { FoundationClients } from './components/sections/FoundationClients'
import { Services } from './components/sections/Services'
import { Industries } from './components/sections/Industries'
import { WhyChoose } from './components/sections/WhyChoose'
import { Equipment } from './components/sections/Equipment'
import { Gallery } from './components/sections/Gallery'
import { About } from './components/sections/About'
import { Testimonials } from './components/sections/Testimonials'
import { FinalCTA } from './components/sections/FinalCTA'

export default function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-orange-500 focus:text-white focus:px-4 focus:py-2 focus:font-semibold"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <FoundationClients />
        <Services />
        <Industries />
        <WhyChoose />
        <Equipment />
        <Gallery />
        <About />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
