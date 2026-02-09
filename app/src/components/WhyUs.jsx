import serviceTile from '../assets/images/service-tile.png';

const differentiators = [
  {
    title: 'Design-Build Under One Roof',
    description:
      'No subcontractor juggling. One team handles design, materials, and construction.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: 'Fixed-Scope Proposals',
    description:
      'Your price is your price. No open-ended allowances that balloon on site.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Dust & Site Protection',
    description:
      'Sealed work zones, daily cleanup, and covered surfaces — we treat your home like our own.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Dedicated Project Manager',
    description:
      'One point of contact from demo day to final walkthrough. No runaround.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: '2-Year Craftsmanship Warranty',
    description:
      'We stand behind every surface, seam, and fixture we install.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div className="w-full lg:w-[55%]">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-charcoal">
              Why Homeowners Choose Us
            </h2>
            <p className="text-muted text-lg mt-3 mb-10 max-w-lg">
              Five things we do differently that you&apos;ll notice from day one.
            </p>

            <div className="flex flex-col gap-6">
              {differentiators.map((d) => (
                <div key={d.title} className="flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-stone flex items-center justify-center text-muted">
                    {d.icon}
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-charcoal">
                      {d.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mt-0.5">
                      {d.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="w-full lg:w-[45%]">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={serviceTile}
                alt="Herringbone marble tile detail showing craftsmanship"
                className="w-full h-auto object-cover aspect-[3/4]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
