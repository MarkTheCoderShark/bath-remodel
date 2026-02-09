import { useEstimateModal } from '../context/EstimateModalContext';

export default function CostTransparency() {
  const { openModal } = useEstimateModal();
  return (
    <section id="pricing" className="bg-limestone-dark py-16 md:py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — editorial content */}
          <div>
            <p className="text-brass text-sm font-semibold tracking-widest uppercase mb-3">
              Pricing
            </p>
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
              Honest Pricing,
              <br />
              No Surprises
            </h2>
            <p className="text-muted text-lg mt-6 leading-relaxed max-w-lg">
              We&apos;re not the cheapest remodeler in Austin, and that&apos;s by
              design. When you see our estimate, you&apos;ll notice every line
              item is accounted for &mdash; no allowances that balloon later, no
              vague &ldquo;material costs&rdquo; that double on site. We&apos;d
              rather give you an honest number upfront than win a bid with a
              lowball.
            </p>

            <div className="mt-10">
              <p className="font-semibold text-charcoal text-base mb-4">
                What affects your investment
              </p>
              <ul className="flex flex-col gap-3 text-muted leading-relaxed">
                <li className="flex gap-3 items-baseline">
                  <span className="text-subtle-2 shrink-0">&mdash;</span>
                  <span>
                    Material selections &mdash; porcelain vs. natural marble,
                    stock vs. custom vanities
                  </span>
                </li>
                <li className="flex gap-3 items-baseline">
                  <span className="text-subtle-2 shrink-0">&mdash;</span>
                  <span>
                    Structural changes &mdash; moving walls, relocating plumbing,
                    electrical upgrades
                  </span>
                </li>
                <li className="flex gap-3 items-baseline">
                  <span className="text-subtle-2 shrink-0">&mdash;</span>
                  <span>
                    Scope of finish &mdash; hardware, fixtures, lighting, and
                    trim details
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right — pricing card */}
          <div className="bg-stone rounded-2xl border border-border-strong shadow-soft p-8 md:p-10 lg:p-12">
            <p className="text-subtle text-xs uppercase tracking-widest mb-6">
              Typical Investment Ranges
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-baseline border-b border-border pb-4">
                <span className="font-sans text-lg font-semibold text-charcoal">
                  Standard Bathroom
                </span>
                <span className="text-muted font-medium">$15,000 &ndash; $25,000</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-border pb-4">
                <span className="font-sans text-lg font-semibold text-charcoal">
                  Premium Bathroom
                </span>
                <span className="text-muted font-medium">$25,000 &ndash; $45,000</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-border pb-4">
                <span className="font-sans text-lg font-semibold text-charcoal">
                  Kitchen Remodel
                </span>
                <span className="text-muted font-medium">$30,000 &ndash; $65,000</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-sans text-lg font-semibold text-charcoal">
                  Tub-to-Shower Conversion
                </span>
                <span className="text-muted font-medium">$8,000 &ndash; $15,000</span>
              </div>
            </div>

            {/* What's included */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-subtle text-xs uppercase tracking-widest mb-4">
                What&apos;s included in every project
              </p>
              <ul className="flex flex-col gap-2.5 text-muted text-sm leading-relaxed">
                <li className="flex gap-2.5 items-baseline">
                  <svg
                    className="w-4 h-4 text-muted shrink-0 translate-y-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Free in-home design consultation</span>
                </li>
                <li className="flex gap-2.5 items-baseline">
                  <svg
                    className="w-4 h-4 text-muted shrink-0 translate-y-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>3D renderings before any work begins</span>
                </li>
                <li className="flex gap-2.5 items-baseline">
                  <svg
                    className="w-4 h-4 text-muted shrink-0 translate-y-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Dedicated project manager</span>
                </li>
                <li className="flex gap-2.5 items-baseline">
                  <svg
                    className="w-4 h-4 text-muted shrink-0 translate-y-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>2-year craftsmanship warranty</span>
                </li>
              </ul>
            </div>

            <button
              onClick={openModal}
              className="mt-8 inline-flex items-center gap-2 text-charcoal font-semibold text-sm hover:text-ink transition-colors duration-200 cursor-pointer focus:outline-2 focus:outline-brass focus:outline-offset-2"
            >
              Get your personalized estimate
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
