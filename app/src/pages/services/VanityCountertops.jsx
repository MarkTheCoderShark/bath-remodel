import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useEstimateModal } from '../../context/EstimateModalContext';
import Breadcrumb from '../../components/Breadcrumb';
import RelatedServices from '../../components/RelatedServices';
import heroImg from '../../assets/images/service-vanity.png';
import StructuredData from '../../components/StructuredData';

const included = [
  'Removal and disposal of your existing vanity, countertop, and plumbing connections',
  'Custom or semi-custom vanity selection with soft-close drawers and quality hardware',
  'Precision-templated countertop fabrication in quartz, granite, marble, or solid surface',
  'Undermount or vessel sink integration with faucet and drain installation',
  'Mirror, medicine cabinet, and above-vanity lighting coordination',
  'Backsplash installation, plumbing hook-up, caulking, and final cleanup',
];

const whyUs = [
  {
    title: 'Trade-Only Sourcing',
    description:
      'We partner directly with cabinet manufacturers and stone fabricators, giving you access to designer-grade materials at contractor pricing that is not available at retail showrooms.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    title: 'Precision Fit',
    description:
      'Every countertop is laser-templated after the vanity is installed, ensuring a gap-free fit around walls, plumbing, and backsplashes. No filler strips, no caulk-covered mistakes.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: 'Complete Coordination',
    description:
      'Vanity, countertop, sink, faucet, mirror, and lighting -- we select and install every element as a cohesive package so everything looks intentional and works together perfectly.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: 'What countertop material is best for bathrooms?',
    answer:
      'Quartz is our most popular recommendation for bathroom countertops because it is non-porous, stain-resistant, and never needs sealing. It handles the humidity and daily splashes of a bathroom better than most natural stones. That said, marble remains a timeless choice for primary bathrooms -- it just requires periodic sealing and a bit more care.',
  },
  {
    question: 'Can you install a floating vanity?',
    answer:
      'Absolutely. Floating (wall-mounted) vanities are one of the most requested styles we install. They create a clean, modern look and make the floor easier to clean. We secure them to wall studs with concealed heavy-duty brackets so they are rock-solid and can support a stone countertop without issue.',
  },
  {
    question: 'How long does a vanity and countertop replacement take?',
    answer:
      'A straightforward vanity and countertop swap -- where plumbing stays in the same location -- typically takes 3 to 5 days. If we are moving plumbing, adding electrical for new lighting, or tiling the surrounding area, the project may take 1 to 2 weeks.',
  },
  {
    question: 'Do you offer double vanities for shared bathrooms?',
    answer:
      'Yes -- double vanities are ideal for shared primary or guest bathrooms. We can install a single long vanity with two sinks, or two separate vanities with a tower or open shelf in between. We will help you find the layout that works best for your space and daily routine.',
  },
];

export default function VanityCountertops() {
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
    name: 'Vanity & Countertops',
    description: 'Custom vanities and precision-fitted countertops that anchor your bathroom with style, storage, and lasting quality.',
    url: 'https://luxebathkitchen.com/services/vanity-countertops',
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
        <title>Vanity & Countertops Sacramento | Luxe Bath & Kitchen</title>
        <meta name="description" content="Custom vanity and countertop installation in Sacramento by Luxe Bath & Kitchen. Quartz, granite, marble countertops with expert fabrication and precise fitting." />
        <link rel="canonical" href="https://luxebathkitchen.com/services/vanity-countertops" />
        <meta property="og:title" content="Vanity & Countertops Sacramento | Luxe Bath & Kitchen" />
        <meta property="og:description" content="Custom vanity and countertop installation in Sacramento by Luxe Bath & Kitchen. Quartz, granite, marble countertops with expert fabrication." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luxebathkitchen.com/services/vanity-countertops" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vanity & Countertops Sacramento | Luxe Bath & Kitchen" />
        <meta name="twitter:description" content="Custom vanity and countertop installation in Sacramento by Luxe Bath & Kitchen. Quartz, granite, marble countertops with expert fabrication." />
      </Helmet>
      <StructuredData data={faqSchema} />
      <StructuredData data={serviceSchema} />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/bathroom-remodeling' },
        { label: 'Vanity & Countertops', href: '/services/vanity-countertops' },
      ]} />
      {/* ── Hero ── */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Custom bathroom vanity with quartz countertop and undermount sink in Sacramento home"
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
              Vanity &amp; Countertops
            </h1>
            <p className="text-white/80 text-base md:text-lg lg:text-xl max-w-2xl mt-4 md:mt-6">
              Custom vanities and precision-fitted countertops that anchor your bathroom with style, storage, and lasting quality.
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
            The Focal Point of Every Bathroom
          </h2>
          <div className="space-y-5 text-muted text-base md:text-lg leading-relaxed">
            <p>
              Your vanity is the first thing you see when you walk into the bathroom and the last thing you use before you leave the house. It sets the tone for the entire room. When the vanity is outdated, the storage is lacking, or the countertop is stained and worn, the whole bathroom feels tired -- no matter how fresh the rest of the space may be.
            </p>
            <p>
              Luxe Bath &amp; Kitchen designs and installs vanity and countertop packages that combine beautiful aesthetics with real-world function. We source from cabinet manufacturers that build with dovetail joints, soft-close hardware, and moisture-resistant finishes specifically engineered for bathroom environments. Countertops are laser-templated and fabricated to fit your space with zero guesswork.
            </p>
            <p>
              Whether you want a sleek floating vanity with a vessel sink for a modern powder room, a generous double vanity with under-mount sinks for a shared primary bath, or a furniture-style piece that adds character to a guest bathroom, our design team will walk you through options that fit your style, space, and budget. We handle everything from plumbing connections to mirror hanging so the finished result feels cohesive and complete.
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
            Everything that comes with a Luxe vanity and countertop installation.
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
            Why Luxe for Vanities &amp; Countertops
          </h2>
          <p className="text-muted text-lg mb-12 max-w-xl">
            The details that make our installations stand out.
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
            Vanity &amp; Countertop FAQ
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
      <RelatedServices currentPath="/services/vanity-countertops" />

      {/* ── Bottom CTA ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Upgrade the Heart of Your Bathroom
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            Schedule a free consultation and explore vanity styles, countertop materials, and fixture options for your Sacramento bathroom.
          </p>
          <button
            onClick={openModal}
            className="inline-block bg-brass text-white px-10 py-4 rounded-2xl font-semibold hover:bg-brass-hover transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
          >
            Get a Free Estimate
          </button>
          <p className="text-subtle text-sm mt-5">
            Most consultations scheduled within 48 hours.
          </p>
        </div>
      </section>
    </>
  );
}
