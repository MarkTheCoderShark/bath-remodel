import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/after-tub.png';

const process = [
  {
    step: '01',
    title: 'Assessment & Measurement',
    description:
      'We evaluate your existing tub alcove, check plumbing placement, and discuss your goals -- more space, better accessibility, or a completely new look.',
  },
  {
    step: '02',
    title: 'Design & Material Selection',
    description:
      'Choose your tile, glass enclosure style, fixtures, and any extras like built-in niches or a fold-down bench. We present options at every price point.',
  },
  {
    step: '03',
    title: 'Tub Removal & Prep',
    description:
      'We carefully remove the old tub, inspect the subfloor and wall framing for moisture damage, and make any structural repairs before moving forward.',
  },
  {
    step: '04',
    title: 'Plumbing & Waterproofing',
    description:
      'Drain relocation, new valve installation, and a full waterproofing membrane ensure your new shower is leak-free from day one.',
  },
  {
    step: '05',
    title: 'Tile, Glass & Finishing',
    description:
      'Tile goes up, the glass enclosure is installed, and we finish with fixtures, hardware, paint touch-ups, and a thorough cleaning.',
  },
];

const whyUs = [
  {
    title: 'Same-Footprint Transformation',
    description:
      'We convert your existing tub alcove into a spacious shower without expanding walls or moving plumbing unnecessarily -- saving you time and money on structural work.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="15 3 21 3 21 9" />
        <polyline points="9 21 3 21 3 15" />
        <line x1="21" y1="3" x2="14" y2="10" />
        <line x1="3" y1="21" x2="10" y2="14" />
      </svg>
    ),
  },
  {
    title: 'Aging-in-Place Ready',
    description:
      'Low-threshold or zero-entry showers, ADA-compliant grab bars, and slip-resistant tile give you safety and independence without compromising on design.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: 'Fast Turnaround',
    description:
      'Most tub-to-shower conversions are completed in 2 to 3 weeks -- significantly faster than a full bathroom remodel -- so you get your bathroom back quickly.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: 'How much does a tub-to-shower conversion cost in Sacramento?',
    answer:
      'A standard tub-to-shower conversion in the Sacramento area ranges from $6,000 to $18,000 depending on tile selection, glass type, and fixture upgrades. A basic conversion with porcelain tile and a semi-frameless enclosure sits around $8,000 to $10,000, while a premium conversion with marble and frameless glass runs higher.',
  },
  {
    question: 'Will removing my tub hurt my home\'s resale value?',
    answer:
      'As long as your home retains at least one bathtub (typically in a secondary bathroom), converting a tub to a shower in the primary bath is actually a net positive for resale value. Most Sacramento buyers prefer a spacious walk-in shower in the master suite.',
  },
  {
    question: 'How long does a tub-to-shower conversion take?',
    answer:
      'Most conversions take 2 to 3 weeks from tub removal to final walkthrough. If we discover hidden water damage or need to relocate plumbing, it may add a few days, but we will communicate that clearly before any additional work begins.',
  },
  {
    question: 'Can you make the shower bigger than my current tub?',
    answer:
      'In many cases, yes. If there is adjacent closet space or unused square footage, we can expand the shower footprint during the conversion. We will assess the possibilities during our free in-home consultation and show you layout options.',
  },
];

export default function TubToShower() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Completed tub-to-shower conversion with frameless glass and modern tile in Sacramento"
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
              Tub-to-Shower Conversions
            </h1>
            <p className="text-white/80 text-base md:text-lg lg:text-xl max-w-2xl mt-4 md:mt-6">
              Replace your unused bathtub with a spacious, modern walk-in shower -- more room, better access, and a fresh look.
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
            Out With the Tub, In With the Space
          </h2>
          <div className="space-y-5 text-muted text-base md:text-lg leading-relaxed">
            <p>
              If your bathtub has become a glorified storage shelf or you find yourself stepping over a high tub wall every day, a tub-to-shower conversion is one of the smartest upgrades you can make. You gain usable shower space, eliminate a slip hazard, and give your bathroom a completely refreshed look -- all within the existing footprint of your tub alcove.
            </p>
            <p>
              Luxe Bath &amp; Kitchen has completed hundreds of tub-to-shower conversions across Sacramento, Roseville, Elk Grove, and surrounding communities. We know the common challenges -- uneven subfloors in older homes, outdated galvanized plumbing, and cast-iron tubs that weigh hundreds of pounds. Our crew handles every phase cleanly and efficiently, from careful tub removal to waterproofing, tile installation, and frameless glass.
            </p>
            <p>
              This project is also one of the most popular aging-in-place upgrades in the Sacramento area. A zero-threshold entry, slip-resistant tile, and strategically placed grab bars let you or your loved ones shower safely and independently. And because we integrate these features into the design from the start, they look like intentional luxury -- not afterthought accessibility add-ons.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="py-16 md:py-24 bg-limestone-dark">
        <div className="max-w-[800px] mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-charcoal mb-3">
            How We Convert Your Tub to a Shower
          </h2>
          <p className="text-muted text-lg mb-10">
            A streamlined process designed to minimize downtime and maximize results.
          </p>
          <div className="space-y-6">
            {process.map((item) => (
              <div key={item.step} className="flex gap-5 items-start">
                <span className="font-serif text-3xl font-bold text-brass/40 shrink-0 w-10 text-right">
                  {item.step}
                </span>
                <div className="border-l border-brass/20 pl-5">
                  <h3 className="font-sans text-base font-semibold text-charcoal mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-3">
            Why Luxe for Your Conversion
          </h2>
          <p className="text-muted text-lg mb-12 max-w-xl">
            What makes our tub-to-shower conversions different.
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
            Tub-to-Shower Conversion FAQ
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
            Ditch the Tub You Never Use
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            Get a free in-home assessment and see how a tub-to-shower conversion can open up your bathroom and simplify your daily routine.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brass text-white px-10 py-4 rounded-2xl font-semibold hover:bg-brass-hover transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
          >
            Get a Free Estimate
          </Link>
          <p className="text-subtle text-sm mt-5">
            Most conversions completed in 2-3 weeks.
          </p>
        </div>
      </section>
    </>
  );
}
