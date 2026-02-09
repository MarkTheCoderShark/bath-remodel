export default function TrustStrip() {
  const trustPoints = [
    'Licensed & Insured',
    'Family-Owned & Operated',
    'Free, No-Pressure Estimates',
    '2-Year Craftsmanship Warranty',
  ];

  return (
    <section className="bg-limestone py-8 md:py-10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 text-center">
        <p className="text-subtle-2 text-xs tracking-wide mb-3">
          Trusted by Austin homeowners since 2014
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          {trustPoints.map((point, i) => (
            <span key={point} className="flex items-center gap-2 text-charcoal text-sm font-medium">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted shrink-0"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {point}
              {i < trustPoints.length - 1 && (
                <span className="text-muted/40 ml-1 hidden md:inline" aria-hidden="true">&middot;</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
