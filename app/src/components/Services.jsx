import heroImage from '../assets/images/hero-bathroom.png';
import afterShower from '../assets/images/after-shower.png';
import afterKitchen from '../assets/images/after-kitchen.png';
import afterTub from '../assets/images/after-tub.png';
import serviceTile from '../assets/images/service-tile.png';
import serviceVanity from '../assets/images/service-vanity.png';

const featuredServices = [
  {
    title: 'Full Bathroom Remodeling',
    description:
      'Complete transformation from design to final detail, creating a space that blends beauty with everyday function. We handle every step — layout, plumbing, tile, fixtures — so you get a cohesive result without the stress of managing multiple contractors.',
    image: heroImage,
  },
  {
    title: 'Custom Walk-In Showers',
    description:
      'Frameless glass, premium tile, and brass fixtures tailored to your style and space. Whether you prefer a minimal rain-shower design or a spa-like enclosure with built-in niches, we build it to last.',
    image: afterShower,
  },
  {
    title: 'Kitchen Remodeling',
    description:
      'Modern layouts, quality materials, and thoughtful design for the heart of your home. From countertops and cabinetry to backsplash tile and lighting, we bring your vision together with precision.',
    image: afterKitchen,
  },
];

const compactServices = [
  {
    title: 'Tub-to-Shower Conversions',
    description: 'Upgrade your dated tub to a spacious, accessible walk-in shower.',
    image: afterTub,
  },
  {
    title: 'Tile & Stone Work',
    description: 'Expert installation of marble, porcelain, and natural stone for lasting elegance.',
    image: serviceTile,
  },
  {
    title: 'Vanity & Countertops',
    description: 'Custom vanities and premium countertops that anchor your bathroom with style.',
    image: serviceVanity,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-stone py-16 md:py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Editorial header — left-aligned */}
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

        {/* Featured services — alternating editorial blocks */}
        <div className="space-y-16 md:space-y-24">
          {featuredServices.map((service, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <div
                key={service.title}
                className={`flex flex-col ${imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
              >
                {/* Image side — ~58% width */}
                <div className="w-full md:w-[58%] shrink-0">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto object-cover aspect-[4/3]"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text side */}
                <div className="w-full md:w-[42%]">
                  <h3 className="font-sans text-2xl md:text-3xl font-bold text-charcoal mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="text-charcoal font-medium text-sm tracking-wide hover:underline underline-offset-4 transition-colors"
                  >
                    Learn more &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact services row */}
        <div className="mt-20 md:mt-28 pt-12 border-t border-border">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {compactServices.map((service) => (
              <div key={service.title} className="flex gap-4 items-start">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="font-sans text-base font-semibold text-charcoal mb-1">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
