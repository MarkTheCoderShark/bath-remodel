const testimonials = [
  {
    name: 'Sarah M.',
    initials: 'SM',
    project: 'Master Bath Remodel',
    location: 'Round Rock',
    quote:
      'We interviewed four contractors before choosing Luxe. What sold us was the detail in their estimate. Every line item was explained. Our master bath turned out better than the 3D rendering.',
  },
  {
    name: 'James R.',
    initials: 'JR',
    project: 'Kitchen Renovation',
    location: 'Cedar Park',
    quote:
      'Our kitchen hadn\'t been updated since 2003. The Luxe team kept the project on a tight schedule \u2014 six weeks start to finish. The only surprise was how little disruption there was.',
  },
  {
    name: 'Maria & Carlos D.',
    initials: 'MD',
    project: 'Tub-to-Shower Conversion',
    location: 'Austin',
    quote:
      'We were nervous about the process, but our project manager kept us informed at every step. The frameless shower is beautiful, and they finished two days early.',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="font-sans text-2xl md:text-3xl font-bold text-charcoal text-center mb-12 md:mb-16">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-stone rounded-xl p-6 md:p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 text-brass/60"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    aria-hidden="true"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1">
                <p className="text-charcoal text-sm leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              {/* Attribution */}
              <footer className="mt-5 flex items-center gap-3 pt-5 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-limestone-dark flex items-center justify-center">
                  <span className="text-xs font-semibold text-muted">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal">
                    {t.name}
                  </p>
                  <p className="text-subtle-2 text-xs">
                    {t.project} &middot; {t.location}
                  </p>
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
