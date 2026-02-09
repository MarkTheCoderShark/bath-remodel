import { useState } from 'react';
import { useEstimateModal } from '../../context/EstimateModalContext';
import heroImg from '../../assets/images/hero-bathroom.png';

const included = [
  'Complete demolition and haul-away of existing fixtures, tile, and drywall',
  'New plumbing rough-in and supply-line relocation as needed',
  'Custom tile installation for floors, walls, and shower surrounds',
  'Vanity, countertop, and mirror selection and installation',
  'Electrical updates including GFCI outlets, lighting, and exhaust fans',
  'Final paint, trim, caulk, and a professional deep clean before handoff',
];

const whyUs = [
  {
    title: 'Design-Build Simplicity',
    description:
      'One team handles every phase from initial layout to final grout line. No bouncing between designers, plumbers, and tile setters -- we coordinate it all in-house so your project stays on schedule.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: 'Fixed-Price Proposals',
    description:
      'We present a detailed, line-item estimate before work begins. No allowances that balloon mid-project, no surprise change orders. Your price is your price.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Sacramento Expertise',
    description:
      'We understand the unique needs of Sacramento-area homes -- from older Midtown Victorians to newer Natomas builds. Local knowledge means fewer surprises behind your walls.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: 'How much does a full bathroom remodel cost in Sacramento?',
    answer:
      'Most full bathroom remodels in the Sacramento area range from $18,000 to $55,000 depending on the size of the space, material selections, and whether structural or plumbing changes are needed. We provide a free in-home consultation with a detailed, no-obligation estimate so you know exactly what to expect.',
  },
  {
    question: 'How long does a bathroom remodel take from start to finish?',
    answer:
      'A typical bathroom remodel takes 6 to 8 weeks from demolition day to final walkthrough. More complex projects involving layout changes or custom tile work may take 8 to 10 weeks. We build a detailed schedule before work begins and keep you updated at every milestone.',
  },
  {
    question: 'Can I stay in my home during the renovation?',
    answer:
      'Yes -- the vast majority of our clients stay home during their bathroom remodel. We set up sealed dust barriers, use a dedicated entry point, and clean up at the end of every workday. If we need to shut off water, we coordinate timing with you well in advance.',
  },
  {
    question: 'Do you handle permits and inspections in Sacramento County?',
    answer:
      'Absolutely. We pull all required permits through the City of Sacramento or the relevant county office, coordinate inspections at each phase, and ensure your project meets current California building codes. It is one of the key advantages of working with a licensed design-build firm.',
  },
];

export default function BathroomRemodeling() {
  const { openModal } = useEstimateModal();
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Luxury bathroom remodel with walk-in shower and natural stone tile in Sacramento home"
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
              Bathroom Remodeling
            </h1>
            <p className="text-white/80 text-base md:text-lg lg:text-xl max-w-2xl mt-4 md:mt-6">
              Complete bathroom transformations designed around the way you live -- from first sketch to final grout line.
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
            Your Bathroom, Reimagined
          </h2>
          <div className="space-y-5 text-muted text-base md:text-lg leading-relaxed">
            <p>
              A bathroom remodel is one of the most impactful upgrades you can make to your Sacramento home. Whether you are updating a cramped hall bath from the 1970s or creating a spa-like primary suite, Luxe Bath &amp; Kitchen brings the design vision, skilled trades, and project management under one roof so nothing falls through the cracks.
            </p>
            <p>
              We start every project with an in-home consultation where we listen to how you use the space, identify structural opportunities, and discuss material options that fit your style and budget. From there, our design team creates a detailed plan -- complete with 3D renderings -- so you can see the finished result before we swing a hammer.
            </p>
            <p>
              Once construction begins, a dedicated project manager keeps the schedule tight and communication clear. We handle plumbing, electrical, tile, cabinetry, and every finish detail so you never have to coordinate multiple contractors. The result is a bathroom that looks stunning, functions flawlessly, and adds lasting value to your home.
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
            Every full bathroom remodel from Luxe Bath &amp; Kitchen covers these core items.
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
            Why Sacramento Homeowners Choose Luxe
          </h2>
          <p className="text-muted text-lg mb-12 max-w-xl">
            Three things we do differently that you will notice from day one.
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
            Bathroom Remodeling FAQ
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
            Ready to Transform Your Bathroom?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            Schedule a free in-home consultation and get a detailed, no-obligation estimate for your Sacramento bathroom remodel.
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
