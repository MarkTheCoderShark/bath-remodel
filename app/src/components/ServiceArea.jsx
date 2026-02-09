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
    <section id="service-area" className="py-16 md:py-24 bg-limestone-dark">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Left — text content */}
          <div className="lg:w-[40%] flex flex-col justify-center">
            <p className="text-brass text-sm font-semibold tracking-widest uppercase mb-3">
              Service Area
            </p>
            <h2 className="font-sans text-2xl md:text-3xl font-bold text-charcoal mb-4">
              Serving the Greater Sacramento Area
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-6">
              We proudly serve homeowners across the Sacramento metro region.
              If you&apos;re nearby, we&apos;d love to bring your vision to life.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {cities.map((city) => (
                <span
                  key={city}
                  className="text-muted text-sm bg-stone px-3 py-1.5 rounded-lg"
                >
                  {city}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-subtle text-sm">
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

          {/* Right — embedded map */}
          <div className="lg:w-[60%] min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden border border-border-strong shadow-soft">
            <iframe
              title="Service area map — Greater Sacramento"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d199412.2835498385!2d-121.44429569999999!3d38.5815719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
