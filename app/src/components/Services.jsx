import heroImage from '../assets/images/hero-bathroom.png';
import afterShower from '../assets/images/after-shower.png';
import afterKitchen from '../assets/images/after-kitchen.png';
import afterTub from '../assets/images/after-tub.png';
import serviceTile from '../assets/images/service-tile.png';
import serviceVanity from '../assets/images/service-vanity.png';

const services = [
  {
    title: 'Full Bathroom Remodeling',
    description:
      'Complete transformation from design to final detail — layout, plumbing, tile, and fixtures.',
    image: heroImage,
  },
  {
    title: 'Custom Walk-In Showers',
    description:
      'Frameless glass, premium tile, and brass fixtures tailored to your style and space.',
    image: afterShower,
  },
  {
    title: 'Kitchen Remodeling',
    description:
      'Modern layouts, quality materials, and thoughtful design for the heart of your home.',
    image: afterKitchen,
  },
  {
    title: 'Tub-to-Shower Conversions',
    description:
      'Upgrade your dated tub to a spacious, accessible walk-in shower.',
    image: afterTub,
  },
  {
    title: 'Tile & Stone Work',
    description:
      'Expert installation of marble, porcelain, and natural stone for lasting elegance.',
    image: serviceTile,
  },
  {
    title: 'Vanity & Countertops',
    description:
      'Custom vanities and premium countertops that anchor your bathroom with style.',
    image: serviceVanity,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-stone py-16 md:py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <p className="text-brass text-sm font-semibold tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
            Our Services
          </h2>
          <p className="text-muted text-lg mt-4 max-w-xl">
            From full renovations to focused upgrades, every project receives the
            same level of care and craftsmanship.
          </p>
        </div>

        {/* Vertical cards — 3 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-limestone-light rounded-2xl overflow-hidden border border-border-strong hover:border-brass/30 transition-all duration-300 hover:shadow-soft"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-sans text-lg font-semibold text-charcoal mb-2 group-hover:text-brass transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-block mt-4 text-charcoal font-medium text-sm tracking-wide hover:text-brass transition-colors duration-200"
                >
                  Get a quote &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
