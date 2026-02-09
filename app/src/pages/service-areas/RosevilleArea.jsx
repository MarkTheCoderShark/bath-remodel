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
    title: 'Experience with Roseville\'s Diverse Housing',
    description:
      'From the established neighborhoods near historic Downtown Roseville and Maidu to the newer luxury homes in West Park and Fiddyment Farm, we have remodeled bathrooms and kitchens across every era of Roseville construction. We know the plumbing layouts, stud spacing, and common builder shortcuts in each generation of homes.',
  },
  {
    title: 'Designs That Match Your Lifestyle',
    description:
      'Roseville homeowners love to entertain, and many are looking for open-concept kitchens with large islands, statement backsplashes, and spa-inspired master baths. We bring these visions to life with designer-curated materials, custom cabinetry, and meticulous tile work that impresses guests and increases home value.',
  },
  {
    title: 'Stress-Free Renovation Process',
    description:
      'We protect your floors, seal off work areas, and clean up every evening. Our dedicated project managers keep you updated via text and email so you always know what is happening and what comes next. Roseville clients consistently tell us the process was far easier than they expected.',
  },
];

export default function RosevilleArea() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Luxury bathroom remodel in a Roseville home"
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
        <div className="relative z-10 flex flex-col justify-end pb-20 md:pb-28 min-h-[60vh] md:min-h-[70vh]">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 w-full">
            <p className="text-brass text-sm font-semibold tracking-widest uppercase mb-3">
              Service Area
            </p>
            <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
              Roseville Bathroom &amp; Kitchen Remodeling
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mt-4 md:mt-6">
              Transforming Roseville homes with expert craftsmanship &mdash; from
              charming Downtown neighborhoods to the luxury estates of West Roseville.
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
              Premium Remodeling for Roseville Homes
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-4">
              Roseville has earned its reputation as one of the best places to
              live in the greater Sacramento area. With top-rated schools in the
              Roseville Joint Union High School District, excellent shopping at
              the Westfield Galleria and Fountains, and easy freeway access
              along I-80 and Highway 65, it attracts homeowners who value both
              convenience and quality of life.
            </p>
            <p className="text-muted text-base md:text-lg leading-relaxed">
              That same attention to quality extends to the home. Whether you
              live in an early-2000s stucco home near Blue Oaks, a 1990s
              two-story in Highland Reserve, or one of the newer builds in West
              Park or Fiddyment Farm, there comes a time when builder-grade
              bathrooms and kitchens no longer reflect how you live. Luxe
              Bath &amp; Kitchen specializes in that upgrade &mdash; replacing
              fiberglass shower surrounds with floor-to-ceiling porcelain,
              swapping out oak cabinets for clean-lined shaker styles, and
              turning ordinary rooms into spaces you genuinely look forward to
              using every day.
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
            Services We Offer in Roseville
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
            Why Roseville Homeowners Choose Us
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
            Serving All of Roseville
          </h2>
          <div className="rounded-2xl overflow-hidden border border-border-strong shadow-soft">
            <iframe
              title="Map of Roseville, California"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d-121.2880!3d38.7521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2sus"
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
            Ready to Remodel Your Roseville Home?
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
