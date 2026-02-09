const steps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We visit your home to understand your vision, assess the space, and discuss budget, materials, and timeline. No pressure — just an honest conversation about what\'s possible.',
    detail: 'Free in-home visit',
  },
  {
    number: '02',
    title: 'Design & Planning',
    description:
      'Our design team creates a detailed plan with material selections, fixture choices, and a clear scope of work. You\'ll see exactly what your space will become before we break ground.',
    detail: '3D renderings included',
  },
  {
    number: '03',
    title: 'Build & Craft',
    description:
      'Our in-house craftsmen execute every detail with precision — from framing and plumbing to tile-setting and trim. We keep you informed at every stage.',
    detail: 'Dedicated project manager',
  },
  {
    number: '04',
    title: 'Final Walkthrough',
    description:
      'We walk the finished space together, reviewing every surface, fixture, and finish. We don\'t consider a project complete until you\'re completely satisfied.',
    detail: '2-year workmanship warranty',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-12 md:py-20 lg:py-24 bg-limestone-dark">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
            A Clear Path to Your
            <br className="hidden md:block" /> Dream Space
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
            We&apos;ve refined our process over hundreds of projects so you can
            enjoy the transformation without the stress.
          </p>
        </div>

        {/* Timeline steps */}
        <div className="relative">
          {/* Vertical connecting line — desktop only */}
          <div
            className="hidden md:block absolute left-[60px] top-0 bottom-0 w-px bg-brass/20"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex gap-6 md:gap-10 items-start">
                {/* Step number */}
                <div className="shrink-0 relative z-10">
                  <div className="w-[120px] hidden md:flex flex-col items-center">
                    <span className="font-serif text-5xl lg:text-6xl font-bold text-brass/40">
                      {step.number}
                    </span>
                  </div>
                  <span className="md:hidden font-serif text-4xl font-bold text-brass/40">
                    {step.number}
                  </span>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-limestone-light rounded-2xl border border-border shadow-soft p-6 md:p-8 lg:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-sans text-xl md:text-2xl font-semibold text-charcoal mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted leading-relaxed max-w-xl">
                        {step.description}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <span className="inline-flex items-center gap-2 bg-brass-soft text-brass-hover text-xs font-semibold tracking-wide uppercase px-4 py-2 rounded-full">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {step.detail}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-stone rounded-full px-6 py-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-subtle"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="text-muted text-sm">
              Most projects completed in <strong className="text-charcoal">6&ndash;10 weeks</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
