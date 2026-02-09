import { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useEstimateModal } from '../context/EstimateModalContext';
import Breadcrumb from '../components/Breadcrumb';

import heroBathroom from '../assets/images/hero-bathroom.png';
import afterShower from '../assets/images/after-shower.png';
import afterKitchen from '../assets/images/after-kitchen.png';
import afterTub from '../assets/images/after-tub.png';
import serviceTile from '../assets/images/service-tile.png';
import serviceVanity from '../assets/images/service-vanity.png';

const projects = [
  {
    id: 1,
    src: heroBathroom,
    title: 'Master Bath Suite Renovation',
    category: 'Bathroom',
    location: 'Sacramento, CA',
  },
  {
    id: 2,
    src: afterShower,
    title: 'Frameless Walk-In Shower',
    category: 'Shower',
    location: 'Roseville, CA',
  },
  {
    id: 3,
    src: afterKitchen,
    title: 'Modern Farmhouse Kitchen',
    category: 'Kitchen',
    location: 'Elk Grove, CA',
  },
  {
    id: 4,
    src: afterTub,
    title: 'Spa-Inspired Soaking Tub',
    category: 'Bathroom',
    location: 'Folsom, CA',
  },
  {
    id: 5,
    src: serviceTile,
    title: 'Herringbone Marble Detail',
    category: 'Tile & Stone',
    location: 'Citrus Heights, CA',
  },
  {
    id: 6,
    src: serviceVanity,
    title: 'Custom Floating Vanity',
    category: 'Vanity',
    location: 'Rancho Cordova, CA',
  },
];

const categories = ['All', 'Bathroom', 'Kitchen', 'Shower', 'Tile & Stone', 'Vanity'];

export default function GalleryPage() {
  const { openModal } = useEstimateModal();
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const openLightbox = (projectId) => {
    const idx = filtered.findIndex((p) => p.id === projectId);
    setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, goNext, goPrev]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  return (
    <>
      <Helmet>
        <title>Our Work | Bathroom & Kitchen Remodeling Gallery | Luxe</title>
        <meta name="description" content="Browse our portfolio of bathroom and kitchen remodeling projects across Sacramento. See before-and-after transformations showcasing our expert craftsmanship." />
        <link rel="canonical" href="https://luxebathkitchen.com/gallery" />
        <meta property="og:title" content="Our Work | Bathroom & Kitchen Remodeling Gallery | Luxe" />
        <meta property="og:description" content="Browse our portfolio of bathroom and kitchen remodeling projects across Sacramento. See before-and-after transformations showcasing our expert craftsmanship." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luxebathkitchen.com/gallery" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Work | Bathroom & Kitchen Remodeling Gallery | Luxe" />
        <meta name="twitter:description" content="Browse our portfolio of bathroom and kitchen remodeling projects across Sacramento. See before-and-after transformations showcasing our expert craftsmanship." />
        <meta property="og:image" content="https://luxebathkitchen.com/og-default.jpg" />
        <meta name="twitter:image" content="https://luxebathkitchen.com/og-default.jpg" />
      </Helmet>
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Gallery', href: '/gallery' },
      ]} />
      {/* Hero Section */}
      <section className="relative bg-charcoal pt-40 md:pt-48 pb-16 md:pb-24 overflow-hidden">
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <p className="text-brass text-sm font-semibold tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Our Work
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mt-4">
            Browse our portfolio of completed projects across Sacramento and the
            surrounding areas. Every project reflects our commitment to design,
            quality materials, and meticulous craftsmanship.
          </p>
        </div>

        {/* Curved separator */}
        <svg
          className="absolute -bottom-px left-0 right-0 w-full pointer-events-none"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{ height: 'clamp(3rem, 6vw, 5rem)' }}
          aria-hidden="true"
        >
          <path d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z" fill="#FAFAF9" />
          <path
            d="M0,0 C360,80 1080,80 1440,0"
            fill="none"
            stroke="#CA8A04"
            strokeWidth="2.5"
            opacity="0.6"
          />
        </svg>
      </section>

      {/* Filter Tabs + Gallery Grid */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2 ${
                  activeCategory === cat
                    ? 'bg-brass text-white'
                    : 'bg-stone text-muted hover:text-charcoal hover:bg-limestone-dark border border-border-strong'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-subtle text-lg">
                No projects found in this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {filtered.map((project) => (
                <button
                  key={project.id}
                  onClick={() => openLightbox(project.id)}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer focus:outline-2 focus:outline-brass focus:outline-offset-2"
                  aria-label={`View ${project.title}`}
                >
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient overlay (always visible) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent transition-opacity duration-300" />

                  {/* Hover intensify */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
                      {project.category}
                    </p>
                    <p className="text-white font-serif text-lg md:text-xl font-semibold">
                      {project.title}
                    </p>
                    <p className="text-white/50 text-sm mt-1 flex items-center gap-1.5">
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
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-stone py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 text-center">
          <p className="text-brass text-sm font-semibold tracking-widest uppercase mb-3">
            Let&apos;s Build Something Beautiful
          </p>
          <h2 className="font-serif text-charcoal text-3xl md:text-4xl lg:text-5xl font-bold">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted text-lg mt-4 max-w-xl mx-auto">
            Tell us about your vision and we&apos;ll bring it to life with expert
            craftsmanship and thoughtful design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={openModal}
              className="bg-brass text-white px-8 py-4 rounded-2xl font-semibold hover:bg-brass-hover text-center transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2 cursor-pointer"
            >
              Get a Free Estimate
            </button>
            <a
              href="tel:5551234567"
              className="border border-border-strong text-muted px-8 py-4 rounded-2xl font-semibold hover:bg-limestone-dark text-center transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
            >
              (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing ${filtered[lightboxIndex].title}`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ink/90 backdrop-blur-sm"
            onClick={closeLightbox}
            aria-hidden="true"
          />

          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
            aria-label="Close lightbox"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Previous button */}
          {filtered.length > 1 && (
            <button
              onClick={goPrev}
              className="absolute left-2 md:left-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
              aria-label="Previous project"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Next button */}
          {filtered.length > 1 && (
            <button
              onClick={goNext}
              className="absolute right-2 md:right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
              aria-label="Next project"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}

          {/* Image + Info */}
          <div className="relative z-10 w-full max-w-4xl mx-4 md:mx-6">
            <div className="rounded-2xl overflow-hidden bg-charcoal">
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].title}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-1">
                {filtered[lightboxIndex].category}
              </p>
              <h3 className="text-white font-serif text-xl md:text-2xl font-semibold">
                {filtered[lightboxIndex].title}
              </h3>
              <p className="text-white/40 text-sm mt-1 flex items-center justify-center gap-1.5">
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
                {filtered[lightboxIndex].location}
              </p>
              <p className="text-white/30 text-xs mt-3">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
