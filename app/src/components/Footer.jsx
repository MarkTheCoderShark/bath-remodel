const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#gallery' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Service Areas', href: '#service-area' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Bathroom Remodeling',
  'Kitchen Remodeling',
  'Walk-In Showers',
  'Tub-to-Shower Conversions',
  'Tile & Stone Work',
  'Vanity & Countertops',
];

export default function Footer() {
  return (
    <footer className="bg-stone">
      {/* Pre-footer CTA band */}
      <div className="border-b border-border-strong">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-charcoal text-xl md:text-2xl font-bold">
              Ready to transform your space?
            </h3>
            <p className="text-subtle text-sm mt-1">
              Schedule a free consultation and see what&apos;s possible.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-brass text-white px-6 py-3 rounded-2xl font-semibold text-sm hover:bg-brass-hover cursor-pointer transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
            >
              Get a Free Estimate
            </a>
            <a
              href="tel:5551234567"
              className="border border-border-strong text-muted px-6 py-3 rounded-2xl font-semibold text-sm hover:bg-limestone-dark cursor-pointer transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
            >
              (555) 123-4567
            </a>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-serif text-charcoal text-xl font-bold">
              Luxe Bath &amp; Kitchen
            </p>
            <p className="text-subtle text-sm mt-3 max-w-xs leading-relaxed">
              Premium bathroom and kitchen remodeling for homeowners who value
              craftsmanship, honesty, and lasting quality.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <span className="inline-flex items-center gap-1.5 text-subtle-2 text-xs">
                <svg
                  width="14"
                  height="14"
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
                Licensed &amp; Insured
              </span>
              <span className="text-subtle-2/40">|</span>
              <span className="inline-flex items-center gap-1.5 text-subtle-2 text-xs">
                CA License #12345
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-subtle-2 text-xs uppercase tracking-widest mb-4 font-semibold">
              Company
            </p>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted hover:text-charcoal text-sm cursor-pointer transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <p className="text-subtle-2 text-xs uppercase tracking-widest mb-4 font-semibold">
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-muted hover:text-charcoal text-sm cursor-pointer transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-subtle-2 text-xs uppercase tracking-widest mb-4 font-semibold">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:5551234567"
                className="text-muted hover:text-charcoal text-sm flex items-center gap-2 cursor-pointer transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
              >
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (555) 123-4567
              </a>
              <a
                href="mailto:info@luxebathkitchen.com"
                className="text-muted hover:text-charcoal text-sm flex items-center gap-2 cursor-pointer transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
              >
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
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                info@luxebathkitchen.com
              </a>
              <p className="text-subtle text-sm flex items-center gap-2 mt-1">
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
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Sacramento, CA &amp; Surrounding Areas
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-strong mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-subtle-2 text-xs">
            &copy; 2026 Luxe Bath &amp; Kitchen. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-subtle-2 hover:text-muted text-xs cursor-pointer transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-subtle-2 hover:text-muted text-xs cursor-pointer transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
