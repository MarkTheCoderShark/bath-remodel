import { useState } from 'react';
import heroImage from '../assets/images/hero-bathroom.png';
import afterShower from '../assets/images/after-shower.png';
import afterKitchen from '../assets/images/after-kitchen.png';
import afterTub from '../assets/images/after-tub.png';
import serviceTile from '../assets/images/service-tile.png';
import serviceVanity from '../assets/images/service-vanity.png';

const projects = [
  {
    image: heroImage,
    title: 'Master Bath Suite',
    location: 'Folsom',
    tags: ['Full Remodel', 'Marble', 'Heated Floors'],
  },
  {
    image: afterShower,
    title: 'Frameless Walk-In Shower',
    location: 'Roseville',
    tags: ['Shower', 'Glass Enclosure'],
  },
  {
    image: afterKitchen,
    title: 'Modern Farmhouse Kitchen',
    location: 'Sacramento',
    tags: ['Kitchen', 'Quartz Counters'],
  },
  {
    image: afterTub,
    title: 'Tub-to-Shower Conversion',
    location: 'Elk Grove',
    tags: ['Conversion', 'Accessible'],
  },
  {
    image: serviceTile,
    title: 'Herringbone Marble Detail',
    location: 'Rocklin',
    tags: ['Tile & Stone', 'Custom Pattern'],
  },
  {
    image: serviceVanity,
    title: 'Custom Floating Vanity',
    location: 'Citrus Heights',
    tags: ['Vanity', 'Modern'],
  },
];

export default function BeforeAfter() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="gallery" className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <p className="text-brass text-sm font-semibold tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
            Completed Projects
          </h2>
          <p className="text-muted text-lg mt-4 max-w-xl mb-12 md:mb-16">
            A look at recent transformations across the Sacramento area —
            each reflecting our commitment to quality and craftsmanship.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <button
                key={project.title}
                onClick={() => setSelected(i)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer text-left bg-stone border border-border-strong hover:border-brass/30 transition-all duration-300 hover:shadow-soft focus:outline-2 focus:outline-brass focus:outline-offset-2"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-subtle-2 text-xs mb-2">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {project.location}
                  </div>
                  <h3 className="font-sans text-base font-semibold text-charcoal group-hover:text-brass transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-subtle bg-limestone-dark px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-label={projects[selected].title}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white cursor-pointer transition-colors"
              aria-label="Close lightbox"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Image */}
            <img
              src={projects[selected].image}
              alt={projects[selected].title}
              className="w-full h-auto rounded-xl max-h-[80vh] object-contain"
            />

            {/* Caption bar */}
            <div className="flex items-center justify-between mt-4 flex-wrap gap-3">
              <div>
                <h3 className="text-white font-sans text-lg font-semibold">
                  {projects[selected].title}
                </h3>
                <p className="text-white/50 text-sm">
                  {projects[selected].location}
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() =>
                    setSelected((s) => (s > 0 ? s - 1 : projects.length - 1))
                  }
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer transition-colors"
                  aria-label="Previous project"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setSelected((s) => (s < projects.length - 1 ? s + 1 : 0))
                  }
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer transition-colors"
                  aria-label="Next project"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
