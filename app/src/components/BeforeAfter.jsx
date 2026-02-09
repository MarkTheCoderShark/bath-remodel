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
    category: 'Full Remodel',
  },
  {
    image: afterShower,
    title: 'Frameless Walk-In Shower',
    location: 'Roseville',
    category: 'Shower',
  },
  {
    image: afterKitchen,
    title: 'Modern Farmhouse Kitchen',
    location: 'Sacramento',
    category: 'Kitchen',
  },
  {
    image: afterTub,
    title: 'Tub-to-Shower Conversion',
    location: 'Elk Grove',
    category: 'Conversion',
  },
  {
    image: serviceTile,
    title: 'Herringbone Marble Detail',
    location: 'Rocklin',
    category: 'Tile & Stone',
  },
  {
    image: serviceVanity,
    title: 'Custom Floating Vanity',
    location: 'Citrus Heights',
    category: 'Vanity',
  },
];

export default function BeforeAfter() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="gallery" className="py-16 md:py-24 bg-charcoal">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          {/* Header — light text on dark */}
          <div className="mb-10 md:mb-14">
            <p className="text-brass text-sm font-semibold tracking-widest uppercase mb-3">
              Portfolio
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Completed Projects
            </h2>
            <p className="text-white/50 text-lg mt-4 max-w-xl">
              A look at recent transformations across the Sacramento area.
            </p>
          </div>

          {/* Masonry-style grid — mixed sizes for visual variety */}
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4">
            {/* Row 1: hero-wide + tall */}
            <GalleryTile
              project={projects[0]}
              index={0}
              onSelect={setSelected}
              className="col-span-2 lg:col-span-7 aspect-[16/10]"
            />
            <GalleryTile
              project={projects[1]}
              index={1}
              onSelect={setSelected}
              className="col-span-1 lg:col-span-5 aspect-[4/3] lg:aspect-[16/10]"
            />
            <GalleryTile
              project={projects[2]}
              index={2}
              onSelect={setSelected}
              className="col-span-1 lg:col-span-5 aspect-[4/3] lg:aspect-auto lg:row-span-2"
            />

            {/* Row 2: two squares under the wide one */}
            <GalleryTile
              project={projects[3]}
              index={3}
              onSelect={setSelected}
              className="col-span-1 lg:col-span-4 aspect-[4/3] lg:aspect-square"
            />
            <GalleryTile
              project={projects[4]}
              index={4}
              onSelect={setSelected}
              className="col-span-1 lg:col-span-3 aspect-[4/3] lg:aspect-square"
            />

            {/* Row 3: full-width cinematic */}
            <GalleryTile
              project={projects[5]}
              index={5}
              onSelect={setSelected}
              className="col-span-2 lg:col-span-12 aspect-[21/9]"
            />
          </div>

          {/* CTA */}
          <div className="mt-10 md:mt-14 text-center">
            <a
              href="#contact"
              className="inline-block border border-white/20 text-white px-8 py-3.5 rounded-2xl font-semibold text-sm hover:bg-white/10 transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
            >
              Start Your Project &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-label={projects[selected].title}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white cursor-pointer transition-colors"
              aria-label="Close lightbox"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <img
              src={projects[selected].image}
              alt={projects[selected].title}
              className="w-full h-auto rounded-xl max-h-[80vh] object-contain"
            />

            <div className="flex items-center justify-between mt-4 flex-wrap gap-3">
              <div>
                <h3 className="text-white font-serif text-xl font-semibold">
                  {projects[selected].title}
                </h3>
                <p className="text-white/40 text-sm mt-0.5">
                  {projects[selected].category} &middot; {projects[selected].location}
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelected((s) => (s > 0 ? s - 1 : projects.length - 1))}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer transition-colors"
                  aria-label="Previous project"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  onClick={() => setSelected((s) => (s < projects.length - 1 ? s + 1 : 0))}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer transition-colors"
                  aria-label="Next project"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
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

function GalleryTile({ project, index, onSelect, className = '' }) {
  return (
    <button
      onClick={() => onSelect(index)}
      className={`group relative overflow-hidden rounded-xl cursor-pointer focus:outline-2 focus:outline-brass focus:outline-offset-2 ${className}`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />

      {/* Permanent subtle gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Hover overlay — deepens gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Category chip — always visible */}
      <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-widest text-white/80 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-md">
        {project.category}
      </span>

      {/* Bottom text — title always visible, location on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
        <h3 className="font-serif text-white text-base md:text-lg font-semibold drop-shadow-sm">
          {project.title}
        </h3>
        <p className="text-white/0 group-hover:text-white/60 text-xs mt-1 transition-colors duration-300">
          {project.location}
        </p>
      </div>
    </button>
  );
}
