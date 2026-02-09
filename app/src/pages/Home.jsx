import Hero from '../components/Hero'
import TrustStrip from '../components/TrustStrip'
import BeforeAfter from '../components/BeforeAfter'
import Services from '../components/Services'
import WhyUs from '../components/WhyUs'
import Process from '../components/Process'
import CaseStudy from '../components/CaseStudy'
import Testimonials from '../components/Testimonials'
import CostTransparency from '../components/CostTransparency'
import FAQ from '../components/FAQ'
import ServiceArea from '../components/ServiceArea'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <>
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
    </>
  )
}
