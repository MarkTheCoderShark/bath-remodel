import { Helmet } from 'react-helmet-async'
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
import StructuredData from '../components/StructuredData'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Luxe Bath & Kitchen',
  url: 'https://luxebathkitchen.com',
  telephone: '(555) 123-4567',
  email: 'info@luxebathkitchen.com',
  priceRange: '$$$',
  image: 'https://luxebathkitchen.com/og-image.jpg',
  areaServed: [
    { '@type': 'City', name: 'Sacramento' },
    { '@type': 'City', name: 'Elk Grove' },
    { '@type': 'City', name: 'Roseville' },
    { '@type': 'City', name: 'Folsom' },
    { '@type': 'City', name: 'Rancho Cordova' },
    { '@type': 'City', name: 'Citrus Heights' },
    { '@type': 'City', name: 'Rocklin' },
    { '@type': 'City', name: 'Davis' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    ratingCount: '180',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://luxebathkitchen.com/',
    },
  ],
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Premium Bath & Kitchen Remodeling Sacramento | Luxe</title>
        <meta name="description" content="Luxe Bath & Kitchen offers premium bathroom and kitchen remodeling in Sacramento, CA. Expert craftsmanship, transparent pricing, and stunning results. Get a free estimate today." />
        <link rel="canonical" href="https://luxebathkitchen.com/" />
        <meta property="og:title" content="Premium Bath & Kitchen Remodeling Sacramento | Luxe" />
        <meta property="og:description" content="Luxe Bath & Kitchen offers premium bathroom and kitchen remodeling in Sacramento, CA. Expert craftsmanship, transparent pricing, and stunning results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luxebathkitchen.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Bath & Kitchen Remodeling Sacramento | Luxe" />
        <meta name="twitter:description" content="Luxe Bath & Kitchen offers premium bathroom and kitchen remodeling in Sacramento, CA. Expert craftsmanship, transparent pricing, and stunning results." />
      </Helmet>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={breadcrumbSchema} />
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
