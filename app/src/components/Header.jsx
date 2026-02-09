import { useState } from 'react';
import logo from '../assets/images/logo.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30">
        {/* Top bar — brand / utility */}
        <div className="bg-stone border-b border-border">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-24 md:h-28">
            {/* Left: Tagline (desktop only) */}
            <div className="hidden lg:block">
              <p className="text-charcoal font-serif text-base lg:text-lg font-bold leading-tight">
                Your Vision, Our Craftsmanship
              </p>
              <p className="text-subtle text-sm">
                Sacramento&apos;s Trusted Home Remodeling Experts
              </p>
            </div>

            {/* Center on desktop / Left on mobile: Brand */}
            <a
              href="#"
              className="cursor-pointer"
            >
              <img
                src={logo}
                alt="Oakwood Remodel"
                className="h-32 md:h-36 w-auto"
              />
            </a>

            {/* Right: Phone + CTA (desktop) */}
            <div className="hidden md:flex items-center gap-5">
              <a
                href="tel:5551234567"
                className="flex items-center gap-1.5 text-muted text-base font-medium hover:text-charcoal cursor-pointer transition-colors duration-200"
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
                href="#contact"
                className="bg-brass text-white px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-brass-hover cursor-pointer transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
              >
                Free Estimate
              </a>
            </div>

            {/* Mobile: phone + hamburger */}
            <div className="flex md:hidden gap-1">
              <a
                href="tel:5551234567"
                className="flex items-center justify-center w-10 h-10 rounded-lg text-muted hover:text-charcoal cursor-pointer transition-colors duration-200"
                aria-label="Call us"
              >
                <svg
                  width="18"
                  height="18"
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
              </a>
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="flex items-center justify-center w-10 h-10 rounded-lg text-muted hover:text-charcoal cursor-pointer transition-colors duration-200"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {mobileMenuOpen ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar — navigation (desktop only) */}
        <div className="hidden md:block bg-limestone-light/95 backdrop-blur-md border-b border-border">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
            <nav className="flex items-center justify-center gap-8 h-11">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-charcoal hover:text-brass cursor-pointer transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed top-24 left-0 right-0 z-40 bg-limestone-light border-b border-border shadow-lg md:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-4 text-charcoal hover:bg-limestone-dark text-sm font-medium cursor-pointer transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 py-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block bg-brass text-white text-center px-5 py-3 rounded-lg text-sm font-semibold hover:bg-brass-hover cursor-pointer transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
              >
                Get a Free Estimate
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
