import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/after-shower.png';

const included = [
  'Custom-sized frameless or semi-frameless glass enclosure',
  'Premium tile installation -- porcelain, marble, or large-format panels',
  'Linear or center drain with proper slope and waterproofing membrane',
  'Built-in niches, corner shelves, or recessed storage for toiletries',
  'Thermostatic valve, rain head, handheld wand, or multi-spray configuration',
  'Accent lighting, ventilation upgrade, and final finishing details',
];

const whyUs = [
  {
    title: 'Waterproofing Done Right',
    description:
      'Every walk-in shower we build starts with a Kerdi or RedGard waterproofing system tested before a single tile goes up. No shortcuts, no callbacks for leaks.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Tile Artistry',
    description:
      'From herringbone marble to textured porcelain, our tile setters have the precision and patience to execute intricate patterns that become the centerpiece of your bathroom.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: 'Accessible & Stylish',
    description:
      'Barrier-free entries, grab bars that look like luxury hardware, and bench seating -- we build showers that are aging-in-place ready without sacrificing an ounce of style.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: 'What size does my bathroom need to be for a walk-in shower?',
    answer:
      'A comfortable walk-in shower typically requires a minimum of 36 by 36 inches, though we recommend 48 by 36 inches or larger for the best experience. During our in-home consultation, we will measure your space and show you layout options that maximize comfort without wasting square footage.',
  },
  {
    question: 'Are frameless glass enclosures harder to keep clean?',
    answer:
      'Frameless glass is actually easier to clean than framed enclosures because there are no metal tracks where soap scum and mildew collect. We can also apply a protective coating to the glass that repels water and reduces mineral buildup from Sacramento\'s hard water.',
  },
  {
    question: 'How much does a custom walk-in shower cost?',
    answer:
      'Walk-in shower projects in the Sacramento area typically range from $8,000 to $25,000 depending on size, tile selection, glass type, and fixture upgrades. A basic conversion with standard porcelain tile sits at the lower end, while a large shower with marble and multiple spray heads will be at the higher end.',
  },
  {
    question: 'Can you add a bench or built-in shelf to my walk-in shower?',
    answer:
      'Absolutely -- built-in niches and floating benches are among our most requested features. We frame and waterproof them as an integral part of the shower structure so they look seamless and will never leak.',
  },
];

export default function WalkInShowers() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Custom frameless walk-in shower with marble tile and brass fixtures"
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
              Our Services
            </p>
            <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
              Custom Walk-In Showers
            </h1>
            <p className="text-white/80 text-base md:text-lg lg:text-xl max-w-2xl mt-4 md:mt-6">
              Step into something extraordinary -- frameless glass, premium tile, and spa-worthy fixtures designed for your daily ritual.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-block bg-brass text-white px-8 py-4 rounded-2xl font-semibold hover:bg-brass-hover text-center transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
              >
                Get a Free Estimate
              </Link>
            </div>
            <p className="text-white/50 text-sm mt-5">
              Licensed &bull; Insured &bull; Serving Sacramento, Roseville &amp; Elk Grove
            </p>
          </div>
        </div>
      </section>

      {/* ── Description ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-6">
            The Shower You Actually Look Forward To
          </h2>
          <div className="space-y-5 text-muted text-base md:text-lg leading-relaxed">
            <p>
              A walk-in shower is more than a bathroom upgrade -- it is a daily experience. The feel of warm water through a rain head, the look of natural stone catching the light, the ease of stepping in without wrestling a shower curtain or sliding door. When designed well, a walk-in shower transforms an ordinary bathroom into a space that feels like a retreat.
            </p>
            <p>
              At Luxe Bath &amp; Kitchen, we design and build custom walk-in showers that reflect your personal style while solving practical problems. Whether you want a minimalist curbless entry for universal accessibility, a dramatic floor-to-ceiling marble surround, or a multi-head spa system, we handle every detail from waterproofing and drain engineering to final glass installation.
            </p>
            <p>
              Sacramento homeowners particularly love our walk-in showers because we address local water conditions from the start. We specify fixtures with ceramic disc cartridges that resist hard-water buildup and recommend glass coatings that keep mineral spots at bay. It is the kind of forethought that comes from building hundreds of showers in the region.
            </p>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-16 md:py-24 bg-limestone-dark">
        <div className="max-w-[800px] mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-charcoal mb-3">
            What&apos;s Included
          </h2>
          <p className="text-muted text-lg mb-10">
            Every custom walk-in shower project includes these core elements.
          </p>
          <ul className="space-y-4">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-brass shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-charcoal text-sm md:text-base leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-3">
            Why Luxe for Walk-In Showers
          </h2>
          <p className="text-muted text-lg mb-12 max-w-xl">
            The details that make our showers stand apart.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="bg-limestone-light border border-border-strong rounded-2xl p-6 md:p-8 hover:shadow-soft transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-stone flex items-center justify-center text-muted mb-5">
                  {item.icon}
                </div>
                <h3 className="font-sans text-lg font-semibold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-24 bg-stone">
        <div className="max-w-[720px] mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-charcoal text-center mb-10">
            Walk-In Shower FAQ
          </h2>
          <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <div
                key={faq.question}
                className="border border-border-strong rounded-xl overflow-hidden bg-limestone-light"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer hover:bg-stone/50 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-sans text-sm font-semibold text-charcoal">
                    {faq.question}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-subtle shrink-0 transition-transform duration-200 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-muted text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Ready for a Shower That Inspires?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            Schedule a free consultation and let us design a custom walk-in shower tailored to your space, style, and budget.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brass text-white px-10 py-4 rounded-2xl font-semibold hover:bg-brass-hover transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
          >
            Get a Free Estimate
          </Link>
          <p className="text-subtle text-sm mt-5">
            Most consultations scheduled within 48 hours.
          </p>
        </div>
      </section>
    </>
  );
}
