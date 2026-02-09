import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/hero-bathroom.png';

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
    title: 'Specialists in Mid-Century & Ranch-Style Renovations',
    description:
      'Rancho Cordova has a large stock of ranch-style homes built from the 1960s through the 1980s. These homes often feature original tile, dated vanities, and compact layouts. We specialize in opening up these spaces, replacing worn materials, and modernizing plumbing and electrical while preserving the open, single-story flow that makes ranch homes so livable.',
  },
  {
    title: 'Budget-Conscious Without Cutting Corners',
    description:
      'We understand that value matters. Our team works with you to prioritize upgrades that deliver the biggest visual and functional impact for your budget. We offer a range of material options at every price point and are upfront about costs from day one so there are never any uncomfortable surprises.',
  },
  {
    title: 'Quick Turnaround Times',
    description:
      'Many Rancho Cordova homes have a single shared bathroom, which means speed matters. Our crews are experienced in fast-track renovations that minimize downtime. We pre-order materials, coordinate trades in advance, and maintain a tight schedule so your family is back to normal as quickly as possible.',
  },
];

export default function RanchoCordovaArea() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Luxury bathroom remodel in a Rancho Cordova home"
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
              Rancho Cordova Bathroom &amp; Kitchen Remodeling
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mt-4 md:mt-6">
              Modernizing Rancho Cordova&apos;s classic ranch homes and growing
              communities with quality craftsmanship at honest prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/contact"
                className="bg-brass text-white px-8 py-4 rounded-2xl font-semibold hover:bg-brass-hover text-center transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
              >
                Get a Free Estimate
              </Link>
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
              Bringing New Life to Rancho Cordova Homes
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-4">
              Rancho Cordova has been on an upward trajectory for years,
              evolving from a post-war suburb into an incorporated city with its
              own identity, economic momentum, and strong sense of community.
              Neighborhoods like Mather, Cordova Meadows, Anatolia, Sunridge,
              and the revitalizing areas along Folsom Boulevard offer a wide
              range of housing &mdash; from affordable starter homes to newer
              construction with modern layouts.
            </p>
            <p className="text-muted text-base md:text-lg leading-relaxed">
              Many of the established homes in Rancho Cordova were built in the
              1960s and 1970s with solid bones but dated interiors. Original
              pink or avocado tile, laminate countertops, and small, enclosed
              kitchens are common. Luxe Bath &amp; Kitchen excels at these
              transformations &mdash; we remove walls where structurally
              possible, install modern plumbing and electrical, and finish
              with materials that are built to last another 50 years. For
              homeowners in the newer Sunridge and Anatolia developments, we
              upgrade builder-grade finishes to the custom quality your home
              deserves.
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
            Services We Offer in Rancho Cordova
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
            Why Rancho Cordova Homeowners Choose Us
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
            Serving All of Rancho Cordova
          </h2>
          <div className="rounded-2xl overflow-hidden border border-border-strong shadow-soft">
            <iframe
              title="Map of Rancho Cordova, California"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d-121.3028!3d38.5891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2sus"
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

      {/* CTA */}
      <section className="py-16 md:py-24 bg-stone">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-4">
            Ready to Remodel Your Rancho Cordova Home?
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto mb-8">
            Schedule a free in-home consultation. We&apos;ll discuss your vision,
            measure your space, and provide a transparent quote &mdash; no
            pressure, no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-brass text-white px-8 py-4 rounded-2xl font-semibold hover:bg-brass-hover transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
            >
              Get a Free Estimate
            </Link>
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
