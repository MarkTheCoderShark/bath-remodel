import heroImage from '../assets/images/hero-bathroom.png';

export default function CaseStudy() {
  return (
    <section className="py-16 md:py-24 bg-stone">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative">
          {/* Project image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={heroImage}
              alt="Completed master bath renovation in Folsom"
              className="w-full h-auto object-cover aspect-[4/3] md:aspect-[2/1]"
              loading="lazy"
            />
          </div>

          {/* Content card — stacked on mobile, overlaid on desktop */}
          <div className="mt-6 md:mt-0 md:absolute md:bottom-8 md:right-8 md:max-w-md bg-limestone-light md:bg-limestone-light/95 md:backdrop-blur-sm rounded-xl p-6 md:p-8 border border-border-strong md:border-0 md:shadow-soft">
            <p className="text-subtle-2 text-xs uppercase tracking-widest mb-3">
              Featured Project
            </p>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-charcoal mb-4">
              Folsom Master Suite
            </h3>

            <div className="grid grid-cols-3 gap-4 mb-5">
              <div>
                <p className="text-subtle-2 text-xs uppercase tracking-wide">
                  Timeline
                </p>
                <p className="font-sans text-sm font-semibold text-charcoal mt-0.5">
                  8 Weeks
                </p>
              </div>
              <div>
                <p className="text-subtle-2 text-xs uppercase tracking-wide">
                  Scope
                </p>
                <p className="font-sans text-sm font-semibold text-charcoal mt-0.5">
                  Full Gut
                </p>
              </div>
              <div>
                <p className="text-subtle-2 text-xs uppercase tracking-wide">
                  Investment
                </p>
                <p className="font-sans text-sm font-semibold text-charcoal mt-0.5">
                  $35&ndash;42k
                </p>
              </div>
            </div>

            <ul className="flex flex-col gap-2 text-muted text-sm mb-5">
              <li className="flex gap-2 items-baseline">
                <span className="text-subtle-2 shrink-0">&mdash;</span>
                <span>Load-bearing wall removed to open layout</span>
              </li>
              <li className="flex gap-2 items-baseline">
                <span className="text-subtle-2 shrink-0">&mdash;</span>
                <span>Relocated plumbing for freestanding tub</span>
              </li>
              <li className="flex gap-2 items-baseline">
                <span className="text-subtle-2 shrink-0">&mdash;</span>
                <span>Custom heated-floor system under marble tile</span>
              </li>
            </ul>

            <blockquote className="border-l-2 border-brass pl-4">
              <p className="text-charcoal text-sm italic leading-relaxed">
                &ldquo;They turned a cramped 1990s bathroom into something that
                feels like a boutique hotel.&rdquo;
              </p>
              <footer className="text-subtle text-xs mt-2">
                &mdash; David &amp; Lisa M., Folsom
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
