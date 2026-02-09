import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useEstimateModal } from '../../context/EstimateModalContext';
import heroImg from '../../assets/images/hero-bathroom.png';
import Breadcrumb from '../../components/Breadcrumb';
import OtherAreas from '../../components/OtherAreas';

const services = [
  { name: 'Bathroom Remodeling', path: '/services/bathroom-remodeling' },
  { name: 'Kitchen Remodeling', path: '/services/kitchen-remodeling' },
  { name: 'Walk-In Showers', path: '/services/walk-in-showers' },
  { name: 'Tub-to-Shower Conversions', path: '/services/tub-to-shower-conversions' },
  { name: 'Tile & Stone Work', path: '/services/tile-stone-work' },
  { name: 'Vanity & Countertops', path: '/services/vanity-countertops' },
];

const reasons = [
  {
    title: 'Built for Elk Grove\'s Newer Homes',
    description:
      'Many Elk Grove homes were built in the 2000s and 2010s with builder-grade finishes that are ready for an upgrade. We specialize in transforming standard-issue master baths and production kitchens into custom spaces that feel high-end without the high-end price tag.',
  },
  {
    title: 'Family-Focused Design',
    description:
      'Elk Grove is one of the most family-oriented communities in the Sacramento region. We design with families in mind \u2014 durable quartz countertops that resist staining, slip-resistant shower tile, soft-close cabinetry, and smart storage solutions that keep busy households organized.',
  },
  {
    title: 'Consistent Communication',
    description:
      'We know how important your daily routine is. Our project managers provide daily updates, stick to agreed timelines, and coordinate all sub-trades so your family experiences minimal disruption. Most bathroom remodels in Elk Grove are completed within two to three weeks.',
  },
];

export default function ElkGroveArea() {
  const { openModal } = useEstimateModal();
  return (
    <>
      <Helmet>
        <title>Elk Grove Bathroom & Kitchen Remodeling | Luxe</title>
        <meta name="description" content="Professional bathroom and kitchen remodeling in Elk Grove, CA. Luxe Bath & Kitchen provides expert design-build renovations with fixed-price estimates." />
        <link rel="canonical" href="https://luxebathkitchen.com/service-areas/elk-grove" />
        <meta property="og:title" content="Elk Grove Bathroom & Kitchen Remodeling | Luxe" />
        <meta property="og:description" content="Professional bathroom and kitchen remodeling in Elk Grove, CA. Luxe Bath & Kitchen provides expert design-build renovations with fixed-price estimates." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luxebathkitchen.com/service-areas/elk-grove" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elk Grove Bathroom & Kitchen Remodeling | Luxe" />
        <meta name="twitter:description" content="Professional bathroom and kitchen remodeling in Elk Grove, CA. Luxe Bath & Kitchen provides expert design-build renovations with fixed-price estimates." />
      </Helmet>
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Service Areas', href: '/service-areas/sacramento' },
        { label: 'Elk Grove', href: '/service-areas/elk-grove' },
      ]} />
      {/* Hero */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Luxury bathroom remodel in an Elk Grove home"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(12,10,9,0.35) 0%, rgba(12,10,9,0.6) 40%, rgba(12,10,9,0.8) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col justify-end pb-20 md:pb-28 min-h-[75vh] md:min-h-[85vh]">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 w-full">
            <p className="text-brass text-sm font-semibold tracking-widest uppercase mb-3">
              Service Area
            </p>
            <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
              Elk Grove Bathroom &amp; Kitchen Remodeling
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mt-4 md:mt-6">
              Elevating builder-grade homes into custom showpieces across
              Elk Grove&apos;s thriving neighborhoods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={openModal}
                className="bg-brass text-white px-8 py-4 rounded-2xl font-semibold hover:bg-brass-hover text-center transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2 cursor-pointer"
              >
                Get a Free Estimate
              </button>
              <a
                href="tel:5551234567"
                className="text-white border border-white/30 px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 text-center transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
              >
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 bg-limestone">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-6">
              Your Elk Grove Remodeling Partner
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-4">
              Elk Grove has grown from a quiet agricultural community into one
              of the Sacramento region&apos;s most sought-after suburbs, earning
              recognition as one of the safest and most diverse cities in
              California. Its master-planned neighborhoods &mdash; from the
              established homes near Old Town Elk Grove to the newer
              developments in Laguna West, Sheldon, and the Cosumnes River
              corridor &mdash; are filled with homeowners who take pride in
              their properties.
            </p>
            <p className="text-muted text-base md:text-lg leading-relaxed">
              Luxe Bath &amp; Kitchen has completed hundreds of projects across
              Elk Grove, and we understand what works in these homes. Many
              feature open floor plans with large kitchen islands, spacious
              master suites, and hall bathrooms shared by kids. We know how to
              maximize these layouts &mdash; whether that means converting a
              standard tub into a luxurious walk-in shower, upgrading laminate
              countertops to durable quartz, or redesigning a cramped guest bath
              to feel twice its size.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-limestone-dark">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <p className="text-brass text-sm font-semibold tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-10">
            Services We Offer in Elk Grove
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="group flex items-center gap-4 bg-limestone-light border border-border rounded-2xl p-5 hover:shadow-soft transition-shadow duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-brass-soft text-brass shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </span>
                <span className="text-charcoal font-semibold text-sm group-hover:text-brass transition-colors duration-200">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-limestone">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <p className="text-brass text-sm font-semibold tracking-widest uppercase mb-3">
            Local Expertise
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-10">
            Why Elk Grove Homeowners Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-limestone-light border border-border rounded-2xl p-6 md:p-8"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brass-soft text-brass font-bold text-sm mb-4">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-lg font-bold text-charcoal mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 md:py-24 bg-limestone-dark">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <p className="text-brass text-sm font-semibold tracking-widest uppercase mb-3">
            Find Us
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-8">
            Serving All of Elk Grove
          </h2>
          <div className="rounded-2xl overflow-hidden border border-border-strong shadow-soft">
            <iframe
              title="Map of Elk Grove, California"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d-121.3716!3d38.4088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <OtherAreas currentPath="/service-areas/elk-grove" />

      {/* CTA */}
      <section className="py-16 md:py-24 bg-stone">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-4">
            Ready to Remodel Your Elk Grove Home?
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto mb-8">
            Schedule a free in-home consultation. We&apos;ll discuss your vision,
            measure your space, and provide a transparent quote &mdash; no
            pressure, no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="bg-brass text-white px-8 py-4 rounded-2xl font-semibold hover:bg-brass-hover transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2 cursor-pointer"
            >
              Get a Free Estimate
            </button>
            <a
              href="tel:5551234567"
              className="border border-border-strong text-muted px-8 py-4 rounded-2xl font-semibold hover:bg-limestone-dark transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
            >
              (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
