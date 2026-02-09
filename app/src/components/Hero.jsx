import heroImage from '../assets/images/hero-bathroom.png';
import { useEstimateModal } from '../context/EstimateModalContext';

export default function Hero() {
  const { openModal } = useEstimateModal();
  return (
    <section className="relative min-h-[min(95vh,800px)] md:min-h-[100vh] overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Luxury bathroom with natural stone and glass shower"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Dark gradient overlay — strong enough for white text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(12,10,9,0.3) 0%, rgba(12,10,9,0.55) 30%, rgba(12,10,9,0.75) 70%, rgba(12,10,9,0.85) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end pb-32 md:pb-40 min-h-[min(95vh,800px)] md:min-h-[100vh]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 w-full">
          <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            Bathrooms &amp; Kitchens Designed to Last
          </h1>
          <p className="text-white/80 text-base md:text-lg lg:text-xl max-w-2xl mt-4 md:mt-6">
            We handle every detail from layout to tile — so your renovation
            is done right the first time.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={openModal}
              className="bg-brass text-white px-8 py-4 rounded-2xl font-semibold hover:bg-brass-hover text-center cursor-pointer transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
            >
              Get a Free Estimate
            </button>
            <a
              href="#gallery"
              className="text-white border border-white/30 px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 text-center cursor-pointer transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
            >
              View Our Work
            </a>
          </div>

          {/* Trust microcopy */}
          <p className="text-white/60 text-sm mt-6">
            Licensed &bull; Insured &bull; Free Consultations
          </p>
        </div>
      </div>

      {/* Hero footer rail */}
      <div className="absolute bottom-24 md:bottom-28 left-0 right-0 z-10">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 border-t border-white/20 pt-4">
          <div className="flex justify-between items-center flex-wrap gap-4">
            {/* Left: service area */}
            <span className="text-white/50 text-xs tracking-wide uppercase">
              Serving Sacramento, Roseville &amp; Elk Grove
            </span>

            {/* Right: trust chips */}
            <div className="flex gap-4 md:gap-6 items-center text-white/60 text-xs">
              <span className="flex items-center gap-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-brass"
                  aria-hidden="true"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                4.9 Avg Rating (180+ Reviews)
              </span>
              <span>Licensed &amp; Insured</span>
              <span>Design-Build Experts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Curved separator into next section */}
      <svg
        className="absolute -bottom-px left-0 right-0 w-full pointer-events-none"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{ height: 'clamp(3rem, 6vw, 5rem)' }}
        aria-hidden="true"
      >
        <defs>
          <filter id="brass-glow" x="-10%" y="-50%" width="120%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
          </filter>
        </defs>
        {/* Fill first */}
        <path d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z" fill="#FAFAF9" />
        {/* Wide soft glow — underside */}
        <path
          d="M0,0 C360,80 1080,80 1440,0"
          fill="none"
          stroke="#CA8A04"
          strokeWidth="12"
          opacity="0.45"
          filter="url(#brass-glow)"
          transform="translate(0, 4)"
        />
        {/* Tight glow — underside */}
        <path
          d="M0,0 C360,80 1080,80 1440,0"
          fill="none"
          stroke="#CA8A04"
          strokeWidth="5"
          opacity="0.6"
          filter="url(#brass-glow)"
          transform="translate(0, 2)"
        />
        {/* Crisp accent line */}
        <path
          d="M0,0 C360,80 1080,80 1440,0"
          fill="none"
          stroke="#CA8A04"
          strokeWidth="2.5"
          opacity="0.8"
        />
      </svg>
    </section>
  );
}
