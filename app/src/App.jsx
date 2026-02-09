import Header from './components/Header'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import BeforeAfter from './components/BeforeAfter'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import CaseStudy from './components/CaseStudy'
import Testimonials from './components/Testimonials'
import CostTransparency from './components/CostTransparency'
import FAQ from './components/FAQ'
import ServiceArea from './components/ServiceArea'
import ContactForm from './components/ContactForm'
import StickyMobileCTA from './components/StickyMobileCTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <BeforeAfter />
        <Services />
        <WhyUs />
        <Process />
        <CaseStudy />
        <Testimonials />
        <CostTransparency />
        <FAQ />
        <ServiceArea />
        <ContactForm />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  )
}

export default App
