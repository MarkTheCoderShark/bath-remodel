import { useState, useRef, useCallback, useEffect } from 'react';
import afterShower from '../assets/images/after-shower.png';
import afterTub from '../assets/images/after-tub.png';
import heroImage from '../assets/images/hero-bathroom.png';
import serviceVanity from '../assets/images/service-vanity.png';

const transformations = [
  {
    before: afterTub,
    after: afterShower,
    title: 'Walk-In Shower Conversion',
    caption:
      'Dated tub alcove replaced with a frameless glass walk-in, heated floors, and a built-in niche.',
  },
  {
    before: serviceVanity,
    after: heroImage,
    title: 'Master Bath Renovation',
    caption:
      'Complete gut renovation — new layout, freestanding tub, double vanity, and floor-to-ceiling marble.',
  },
];

export default function BeforeAfter() {
  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <p className="text-brass text-sm font-semibold tracking-widest uppercase mb-3">
          Transformations
        </p>
        <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
          See the Difference
        </h2>
        <p className="text-muted text-lg mt-4 max-w-xl mb-12 md:mb-16">
          Real projects, real results. Drag to compare before and after.
        </p>

        <div className="flex flex-col gap-12 md:gap-16">
          {transformations.map((t) => (
            <ComparisonSlider key={t.title} transformation={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSlider({ transformation }) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [mobileView, setMobileView] = useState('after');
  const containerRef = useRef(null);

  const updatePosition = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e) =>
      updatePosition(e.touches ? e.touches[0].clientX : e.clientX);
    const onUp = () => setIsDragging(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  }, [isDragging, updatePosition]);

  const handlePointerDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    updatePosition(e.touches ? e.touches[0].clientX : e.clientX);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setPosition((p) => Math.max(0, p - 2));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setPosition((p) => Math.min(100, p + 2));
    }
  };

  return (
    <div>
      {/* Desktop: Draggable slider */}
      <div className="hidden md:block">
        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-xl aspect-[16/10] cursor-col-resize select-none"
          onMouseDown={handlePointerDown}
          onTouchStart={handlePointerDown}
          role="slider"
          aria-label={`Before and after comparison: ${transformation.title}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          {/* After image (full, behind) */}
          <img
            src={transformation.after}
            alt={`${transformation.title} — after`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />

          {/* Before image (clipped from right) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <img
              src={transformation.before}
              alt={`${transformation.title} — before`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Divider line + drag handle */}
          <div
            className="absolute top-0 bottom-0 z-10 pointer-events-none"
            style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-px h-full bg-white/90" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center pointer-events-auto">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-ink"
                aria-hidden="true"
              >
                <path d="M8 6l-4 6 4 6" />
                <path d="M16 6l4 6-4 6" />
              </svg>
            </div>
          </div>

          {/* Labels */}
          <span className="absolute top-4 left-4 bg-ink/60 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-lg">
            Before
          </span>
          <span className="absolute top-4 right-4 bg-ink/60 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-lg">
            After
          </span>
        </div>
      </div>

      {/* Mobile: Toggle buttons */}
      <div className="md:hidden">
        <div className="flex gap-2 mb-3">
          <button
            onClick={() => setMobileView('before')}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
              mobileView === 'before'
                ? 'bg-ink text-white'
                : 'bg-stone text-muted'
            }`}
          >
            Before
          </button>
          <button
            onClick={() => setMobileView('after')}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
              mobileView === 'after'
                ? 'bg-ink text-white'
                : 'bg-stone text-muted'
            }`}
          >
            After
          </button>
        </div>
        <div className="overflow-hidden rounded-xl aspect-[4/3]">
          <img
            src={mobileView === 'before' ? transformation.before : transformation.after}
            alt={`${transformation.title} — ${mobileView}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Caption */}
      <div className="mt-4">
        <h3 className="font-sans text-lg font-semibold text-charcoal">
          {transformation.title}
        </h3>
        <p className="text-muted text-sm mt-1">{transformation.caption}</p>
      </div>
    </div>
  );
}
