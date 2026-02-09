import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useEstimateModal } from '../../context/EstimateModalContext';
import Breadcrumb from '../../components/Breadcrumb';
import RelatedServices from '../../components/RelatedServices';
import heroImg from '../../assets/images/service-tile.png';
import StructuredData from '../../components/StructuredData';

const included = [
  'Surface preparation including backer board installation, leveling, and waterproofing',
  'Precision layout and dry-fitting to minimize cuts and optimize pattern alignment',
  'Professional-grade thin-set application with proper trowel technique for full coverage',
  'Grout selection, mixing, and application with sealant to prevent staining',
  'Accent and border tile integration including mosaics, listello, and decorative inlays',
  'Final cleaning, sealing of natural stone, and care instructions for long-term maintenance',
];

const whyUs = [
  {
    title: 'Master Tile Setters',
    description:
      'Our tile installers average over 12 years of experience. They handle complex patterns -- herringbone, chevron, basket weave, and large-format slabs -- with the precision these layouts demand.',
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
    title: 'Material Expertise',
    description:
      'Porcelain, marble, travertine, slate, quartzite -- every stone has different requirements for cutting, setting, and sealing. We match the right technique to the right material so your investment lasts decades.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Showroom-Level Finish',
    description:
      'Tight grout lines, lippage-free surfaces, and seamless transitions between materials. We hold ourselves to a standard you would expect in a design magazine, not a production job.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: 'What type of tile is best for bathroom floors?',
    answer:
      'For bathroom floors, we typically recommend porcelain tile with a textured or matte finish for slip resistance. It is extremely durable, low-maintenance, and available in styles that convincingly mimic natural stone, wood, or concrete. Natural stone like marble or travertine is a beautiful option for primary baths but requires periodic sealing.',
  },
  {
    question: 'How much does professional tile installation cost?',
    answer:
      'Tile installation in the Sacramento area generally ranges from $12 to $30 per square foot for labor, depending on the complexity of the pattern and the type of tile. Natural stone requires more care in cutting and setting, so labor costs run higher than standard porcelain. We provide detailed estimates that break out material and labor costs separately.',
  },
  {
    question: 'Can you install large-format tiles (24x48 or larger)?',
    answer:
      'Yes -- large-format tiles are one of our specialties. These oversized tiles create a clean, contemporary look with minimal grout lines, but they require a perfectly level substrate, specialized handling, and proper lippage control systems. Our team has the tools and experience to install them flawlessly.',
  },
  {
    question: 'How long does natural stone tile need to be sealed?',
    answer:
      'Most natural stone should be sealed before grouting and then resealed every 1 to 3 years depending on the type of stone and the area of use. We apply the initial sealant as part of every natural stone installation and provide a care guide so you know exactly when and how to maintain it.',
  },
];

export default function TileStoneWork() {
  const { openModal } = useEstimateModal();
  const [openFaq, setOpenFaq] = useState(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Tile & Stone Work',
    description: 'Expert tile and natural stone installation that turns floors, walls, and showers into works of lasting craftsmanship.',
    url: 'https://luxebathkitchen.com/services/tile-stone-work',
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: 'Luxe Bath & Kitchen',
      url: 'https://luxebathkitchen.com',
      telephone: '(555) 123-4567',
    },
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
  };

  return (
    <>
      <Helmet>
        <title>Tile & Stone Work Sacramento | Luxe Bath & Kitchen</title>
        <meta name="description" content="Professional tile and stone installation in Sacramento by Luxe Bath & Kitchen. Porcelain, marble, mosaic, and large-format tile for floors, walls, and showers." />
        <link rel="canonical" href="https://luxebathkitchen.com/services/tile-stone-work" />
        <meta property="og:title" content="Tile & Stone Work Sacramento | Luxe Bath & Kitchen" />
        <meta property="og:description" content="Professional tile and stone installation in Sacramento by Luxe Bath & Kitchen. Porcelain, marble, mosaic, and large-format tile for floors, walls, and showers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luxebathkitchen.com/services/tile-stone-work" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tile & Stone Work Sacramento | Luxe Bath & Kitchen" />
        <meta name="twitter:description" content="Professional tile and stone installation in Sacramento by Luxe Bath & Kitchen. Porcelain, marble, mosaic, and large-format tile for floors, walls, and showers." />
        <meta property="og:image" content="https://luxebathkitchen.com/og-default.jpg" />
        <meta name="twitter:image" content="https://luxebathkitchen.com/og-default.jpg" />
      </Helmet>
      <StructuredData data={faqSchema} />
      <StructuredData data={serviceSchema} />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/bathroom-remodeling' },
        { label: 'Tile & Stone Work', href: '/services/tile-stone-work' },
      ]} />
      {/* ── Hero ── */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Detailed herringbone marble tile installation in a Sacramento bathroom"
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
              Tile &amp; Stone Work
            </h1>
            <p className="text-white/80 text-base md:text-lg lg:text-xl max-w-2xl mt-4 md:mt-6">
              Expert tile and natural stone installation that turns floors, walls, and showers into works of lasting craftsmanship.
            </p>
            <div className="mt-8">
              <button
                onClick={openModal}
                className="inline-block bg-brass text-white px-8 py-4 rounded-2xl font-semibold hover:bg-brass-hover text-center transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
              >
                Get a Free Estimate
              </button>
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
            Where Craftsmanship Meets Surface
          </h2>
          <div className="space-y-5 text-muted text-base md:text-lg leading-relaxed">
            <p>
              Tile and stone are the surfaces you touch, walk on, and see every single day. When they are installed with care, they define the character of a space for decades. When they are rushed, the cracks, lippage, and uneven grout lines become a daily reminder of a job done wrong. At Luxe Bath &amp; Kitchen, tile work is not an afterthought -- it is a core craft we take seriously.
            </p>
            <p>
              We install tile and natural stone for bathrooms, kitchens, entryways, laundry rooms, and fireplaces across the Sacramento metro area. Whether the project calls for a simple subway tile backsplash or a full shower surround in book-matched marble slabs, our tile setters bring the skill and attention to detail the material deserves.
            </p>
            <p>
              Our process starts with proper substrate preparation -- the unsexy but critical step that most homeowners never see. Backer board, leveling compound, waterproofing membranes, and movement joints are all installed before a single tile is set. It is this foundation work that ensures your tile looks perfect today and stays perfect for years to come, even with Sacramento&apos;s temperature swings and shifting soils.
            </p>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-16 md:py-24 bg-limestone-dark">
        <div className="max-w-[800px] mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-charcoal mb-3">
            What Every Tile Project Includes
          </h2>
          <p className="text-muted text-lg mb-10">
            The attention to detail behind every installation.
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
            Why Luxe for Tile &amp; Stone
          </h2>
          <p className="text-muted text-lg mb-12 max-w-xl">
            The craft and care behind every surface we install.
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
            Tile &amp; Stone FAQ
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

      {/* ── Related Services ── */}
      <RelatedServices currentPath="/services/tile-stone-work" />

      {/* ── Bottom CTA ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Surfaces That Speak for Themselves
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            From a single backsplash to a full bathroom of floor-to-ceiling stone, get a free estimate for expert tile installation in Sacramento.
          </p>
          <button
            onClick={openModal}
            className="inline-block bg-brass text-white px-10 py-4 rounded-2xl font-semibold hover:bg-brass-hover transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
          >
            Get a Free Estimate
          </button>
          <p className="text-subtle text-sm mt-5">
            Free material consultations available.
          </p>
        </div>
      </section>
    </>
  );
}
