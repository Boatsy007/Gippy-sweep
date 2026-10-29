import { MotionConfig } from 'framer-motion'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { TrustBar } from './components/sections/TrustBar'
import { ServicePlans } from './components/sections/ServicePlans'
import { ServicesOverview } from './components/sections/ServicesOverview'
import { ServiceSection } from './components/sections/ServiceSection'
import { Industries } from './components/sections/Industries'
import { WhyChoose } from './components/sections/WhyChoose'
import { Equipment } from './components/sections/Equipment'
import { Gallery } from './components/sections/Gallery'
import { About } from './components/sections/About'
import { Faq } from './components/sections/Faq'
import { Contact } from './components/sections/Contact'
import { serviceBrands } from './serviceBrands'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-500 focus:text-asphalt focus:px-4 focus:py-2 focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          <Hero />
          <TrustBar />
          <ServicesOverview />
          <ServicePlans />
          {serviceBrands.map((brand, i) => (
            <ServiceSection key={brand.id} brand={brand} tinted={i % 2 === 1} />
          ))}
          <Industries />
          <WhyChoose />
          <Equipment />
          <Gallery />
          <About />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
