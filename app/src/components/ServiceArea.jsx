const cities = [
  'Sacramento',
  'Elk Grove',
  'Roseville',
  'Folsom',
  'Rancho Cordova',
  'Citrus Heights',
  'Rocklin',
  'Davis',
];

export default function ServiceArea() {
  return (
    <section className="py-10 md:py-14 bg-limestone-dark">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <h2 className="font-sans text-lg font-semibold text-charcoal">
                Serving the Greater Sacramento Area
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <span
                  key={city}
                  className="text-muted text-sm bg-stone px-3 py-1 rounded-lg"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 text-subtle text-sm shrink-0">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
            <span>All permits &amp; code compliance handled</span>
          </div>
        </div>
      </div>
    </section>
  );
}
