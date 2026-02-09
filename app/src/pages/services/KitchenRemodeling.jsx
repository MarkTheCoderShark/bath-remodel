import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/after-kitchen.png';

const process = [
  {
    step: '01',
    title: 'Discovery & Layout',
    description:
      'We evaluate your current kitchen workflow, discuss pain points, and explore layout options that improve function without unnecessary structural cost.',
  },
  {
    step: '02',
    title: 'Material Selection',
    description:
      'Visit our partner showrooms or browse curated selections for cabinetry, countertops, backsplash, hardware, and appliance placement.',
  },
  {
    step: '03',
    title: 'Demolition & Rough-In',
    description:
      'Our crew removes old cabinets, flooring, and fixtures, then handles plumbing, electrical, and any structural modifications needed for the new layout.',
  },
  {
    step: '04',
    title: 'Cabinet & Countertop Install',
    description:
      'Custom or semi-custom cabinetry is installed plumb and level, followed by templated countertops -- quartz, granite, or marble -- precision-cut to fit.',
  },
  {
    step: '05',
    title: 'Backsplash, Fixtures & Finishing',
    description:
      'Tile backsplash, under-cabinet lighting, plumbing fixtures, and hardware are installed. We handle touch-up paint, caulk, and a thorough cleaning before handoff.',
  },
];

const whyUs = [
  {
    title: 'Functional Design First',
    description:
      'A beautiful kitchen that does not work well is a missed opportunity. We optimize the work triangle, storage, and counter space so your kitchen performs as well as it looks.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: 'Minimal Disruption',
    description:
      'We know losing your kitchen is stressful. Our phased approach keeps a temporary prep area functional as long as possible and sticks to a tight schedule to get you cooking again quickly.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Premium Material Access',
    description:
      'Through our trade partnerships, you get access to designer-grade cabinetry, natural stone slabs, and specialty tile at contractor pricing -- savings you would not find on your own.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: 'What is the average cost of a kitchen remodel in Sacramento?',
    answer:
      'Kitchen remodels in the Sacramento area typically range from $30,000 for a cosmetic refresh (new cabinets, counters, backsplash) to $85,000 or more for a full gut renovation with layout changes. We provide a transparent, line-item estimate after our in-home consultation.',
  },
  {
    question: 'How long will my kitchen be out of commission?',
    answer:
      'Most kitchen remodels take 8 to 12 weeks from demolition to completion. During the first 2 to 3 weeks your kitchen will be largely unusable, but we help you set up a temporary prep station so you are not completely without a workspace.',
  },
  {
    question: 'Can you work with my existing cabinets?',
    answer:
      'If your cabinet boxes are structurally sound and the layout works for you, we can reface or refinish them and pair them with new countertops, hardware, and a backsplash for a significant cost savings over full replacement.',
  },
  {
    question: 'Do I need to pick out every material myself?',
    answer:
      'Not at all. Our design team will curate a selection of materials that match your style and budget. We walk you through options with physical samples, and we can coordinate showroom visits for countertops and cabinetry.',
  },
];

export default function KitchenRemodeling() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Modern kitchen remodel with quartz countertops and custom cabinetry in Sacramento"
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
              Our Services
            </p>
            <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
              Kitchen Remodeling
            </h1>
            <p className="text-white/80 text-base md:text-lg lg:text-xl max-w-2xl mt-4 md:mt-6">
              The heart of your home deserves thoughtful design, quality materials, and expert craftsmanship from start to finish.
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
            A Kitchen That Works as Hard as You Do
          </h2>
          <div className="space-y-5 text-muted text-base md:text-lg leading-relaxed">
            <p>
              Your kitchen is where meals are made, homework gets done, and guests naturally gather. When the layout is awkward, the counters are worn, or the storage just is not cutting it anymore, every day feels a little harder than it should. Luxe Bath &amp; Kitchen designs kitchen renovations that solve those real-life problems while delivering the look you have been saving on your inspiration board.
            </p>
            <p>
              We specialize in the complete kitchen experience: cabinetry, countertops, backsplash, flooring, lighting, and plumbing fixtures, all managed by one team. Whether you want a clean modern aesthetic with flat-panel cabinets and waterfall quartz, or a warm transitional style with shaker doors and natural stone, our design team translates your vision into a space that feels exactly right.
            </p>
            <p>
              Sacramento kitchens face unique considerations -- from hard water that takes a toll on fixtures to older homes with galvanized plumbing that should be addressed during a remodel. Our local experience means we anticipate these issues and build solutions into the plan, not as surprise extras on your invoice.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="py-16 md:py-24 bg-limestone-dark">
        <div className="max-w-[800px] mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-charcoal mb-3">
            Our Kitchen Remodel Process
          </h2>
          <p className="text-muted text-lg mb-10">
            A proven five-step approach refined over hundreds of Sacramento-area kitchens.
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
            Why Luxe for Your Kitchen
          </h2>
          <p className="text-muted text-lg mb-12 max-w-xl">
            What sets our kitchen remodels apart from the competition.
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
            Kitchen Remodeling FAQ
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
            Let&apos;s Design Your Dream Kitchen
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            Book a free in-home consultation and receive a detailed proposal for your Sacramento kitchen remodel -- no pressure, no obligation.
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
