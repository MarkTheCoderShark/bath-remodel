import heroImage from '../assets/images/hero-bathroom.png';
import afterShower from '../assets/images/after-shower.png';
import afterKitchen from '../assets/images/after-kitchen.png';
import afterTub from '../assets/images/after-tub.png';
import serviceTile from '../assets/images/service-tile.png';
import serviceVanity from '../assets/images/service-vanity.png';

const projects = [
  { src: heroImage, title: 'Master Bath Suite', category: 'Bathroom' },
  { src: afterShower, title: 'Frameless Walk-In Shower', category: 'Shower' },
  { src: afterKitchen, title: 'Modern Farmhouse Kitchen', category: 'Kitchen' },
  { src: afterTub, title: 'Tub-to-Shower Conversion', category: 'Bathroom' },
  { src: serviceTile, title: 'Herringbone Marble Detail', category: 'Tile & Stone' },
  { src: serviceVanity, title: 'Custom Floating Vanity', category: 'Vanity' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Editorial header — left-aligned */}
        <div className="mb-12 md:mb-16">
          <p className="text-brass text-sm font-semibold tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
            Our Recent Work
          </h2>
          <p className="text-muted text-lg mt-4 max-w-xl">
            A curated look at recent projects — each one reflecting our commitment to
            design, quality materials, and meticulous craftsmanship.
          </p>
        </div>

        {/* Asymmetric masonry grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {/* Row 1: Large image spanning 2 cols + one smaller */}
          <GalleryItem
            project={projects[0]}
            className="col-span-2 aspect-[4/3]"
          />
          <GalleryItem
            project={projects[1]}
            className="col-span-2 sm:col-span-1 aspect-[3/4]"
          />

          {/* Row 2: Two medium + one tall */}
          <GalleryItem
            project={projects[2]}
            className="aspect-square"
          />
          <GalleryItem
            project={projects[3]}
            className="aspect-[4/3]"
          />
          <GalleryItem
            project={projects[4]}
            className="row-span-2 aspect-auto h-full"
          />

          {/* Row 3 partial: one wide image under the two mediums */}
          <GalleryItem
            project={projects[5]}
            className="col-span-2 aspect-[16/9]"
          />
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ project, className = '' }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl ${className}`}>
      <img
        src={project.src}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
          {project.category}
        </p>
        <p className="text-white font-serif text-xl font-semibold">
          {project.title}
        </p>
      </div>

      {/* Permanent subtle overlay on mobile */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/60 to-transparent p-4 sm:hidden">
        <p className="text-white text-sm font-medium">{project.title}</p>
      </div>
    </div>
  );
}
