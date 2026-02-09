import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

const serviceOptions = [
  'Bathroom Remodeling',
  'Kitchen Remodeling',
  'Walk-In Showers',
  'Tub-to-Shower Conversions',
  'Tile & Stone',
  'Vanity & Countertops',
  'Other',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateField = useCallback((field, value) => {
    switch (field) {
      case 'name':
        if (!value || value.trim().length < 2) return 'Please enter your name';
        return '';
      case 'phone':
        if (!value || !/[\d\s\-().+]{7,}/.test(value))
          return 'Please enter a valid phone number';
        return '';
      case 'email':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return 'Please enter a valid email address';
        return '';
      default:
        return '';
    }
  }, []);

  const validateAll = useCallback(
    (values) => {
      const newErrors = {};
      for (const field of ['name', 'phone', 'email']) {
        const error = validateField(field, values[field]);
        if (error) newErrors[field] = error;
      }
      return newErrors;
    },
    [validateField]
  );

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (submitted) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, form[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const allTouched = {
      name: true,
      phone: true,
      email: true,
      service: true,
      message: true,
    };
    setTouched(allTouched);

    const newErrors = validateAll(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const inputClass =
    'w-full rounded-lg border border-border-strong bg-limestone-light px-4 py-3 text-charcoal text-sm focus:outline-2 focus:outline-brass focus:outline-offset-1 placeholder:text-subtle-2 transition-colors duration-200';

  return (
    <>
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
            Contact Us
          </p>
          <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Get In Touch
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mt-4">
            Ready to start your renovation? Reach out for a free, no-obligation
            consultation. We&apos;ll walk through your vision and provide a
            transparent estimate.
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

      {/* Contact Form + Info */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Left Column: Form (3/5) */}
            <div className="lg:col-span-3">
              {success ? (
                <div className="bg-stone rounded-2xl p-8 md:p-12 border border-border-strong shadow-soft">
                  <div className="text-center py-8 flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-brass/10 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-brass"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="font-sans text-2xl font-bold text-charcoal">
                      Thank You!
                    </h3>
                    <p className="text-muted max-w-sm">
                      Your message has been received. We&apos;ll get back to you
                      within 24 hours to discuss your project.
                    </p>
                    <p className="text-subtle text-sm">
                      In the meantime, feel free to call us at{' '}
                      <a
                        href="tel:5551234567"
                        className="text-brass hover:text-brass-hover transition-colors duration-200"
                      >
                        (555) 123-4567
                      </a>
                    </p>
                    <Link
                      to="/gallery"
                      className="mt-4 text-charcoal font-medium text-sm tracking-wide hover:text-brass transition-colors duration-200"
                    >
                      Browse our portfolio &rarr;
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="bg-stone rounded-2xl p-8 md:p-12 border border-border-strong shadow-soft">
                  <h2 className="font-sans text-2xl md:text-3xl font-bold text-charcoal mb-2">
                    Request a Free Estimate
                  </h2>
                  <p className="text-muted text-sm mb-8">
                    Fill out the form below and we&apos;ll get back to you
                    promptly. No pressure, no obligation.
                  </p>

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="flex flex-col gap-6">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="contact-name"
                          className="text-sm font-medium text-charcoal"
                        >
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          onBlur={() => handleBlur('name')}
                          className={inputClass}
                          required
                        />
                        {errors.name && touched.name && (
                          <p className="text-red-600 text-xs" role="alert">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="contact-phone"
                          className="text-sm font-medium text-charcoal"
                        >
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={form.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          onBlur={() => handleBlur('phone')}
                          className={inputClass}
                          required
                        />
                        {errors.phone && touched.phone && (
                          <p className="text-red-600 text-xs" role="alert">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="contact-email"
                          className="text-sm font-medium text-charcoal"
                        >
                          Email
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          onBlur={() => handleBlur('email')}
                          className={inputClass}
                        />
                        {errors.email && touched.email && (
                          <p className="text-red-600 text-xs" role="alert">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Service Dropdown */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="contact-service"
                          className="text-sm font-medium text-charcoal"
                        >
                          Service Interested In
                        </label>
                        <select
                          id="contact-service"
                          value={form.service}
                          onChange={(e) =>
                            handleChange('service', e.target.value)
                          }
                          className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2378716C%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat pr-10`}
                        >
                          <option value="">Select a service...</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Project Description */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="contact-message"
                          className="text-sm font-medium text-charcoal"
                        >
                          Project Description
                        </label>
                        <textarea
                          id="contact-message"
                          rows={5}
                          placeholder="Tell us about your project, timeline, budget, or any specific ideas you have in mind..."
                          value={form.message}
                          onChange={(e) =>
                            handleChange('message', e.target.value)
                          }
                          className={inputClass}
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-brass text-white py-4 rounded-2xl font-semibold hover:bg-brass-hover cursor-pointer transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-2 focus:outline-brass focus:outline-offset-2"
                      >
                        {loading ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg
                              className="animate-spin w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              aria-hidden="true"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeDasharray="31.4 31.4"
                                strokeLinecap="round"
                              />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </div>

                    <p className="text-subtle text-xs text-center mt-4">
                      No pressure. No obligation. Your information stays private.
                    </p>
                  </form>
                </div>
              )}
            </div>

            {/* Right Column: Contact Info (2/5) */}
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brass/10 flex items-center justify-center shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.75}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brass"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-subtle-2 uppercase tracking-widest font-semibold mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:5551234567"
                      className="text-charcoal font-semibold text-lg hover:text-brass transition-colors duration-200"
                    >
                      (555) 123-4567
                    </a>
                    <p className="text-subtle text-sm mt-0.5">
                      Call or text anytime
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brass/10 flex items-center justify-center shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.75}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brass"
                      aria-hidden="true"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-subtle-2 uppercase tracking-widest font-semibold mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@luxebathkitchen.com"
                      className="text-charcoal font-semibold hover:text-brass transition-colors duration-200"
                    >
                      info@luxebathkitchen.com
                    </a>
                    <p className="text-subtle text-sm mt-0.5">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brass/10 flex items-center justify-center shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.75}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brass"
                      aria-hidden="true"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-subtle-2 uppercase tracking-widest font-semibold mb-1">
                      Service Area
                    </p>
                    <p className="text-charcoal font-semibold">
                      Sacramento, CA &amp; Surrounding Areas
                    </p>
                    <p className="text-subtle text-sm mt-0.5">
                      Roseville, Elk Grove, Folsom, Rancho Cordova &amp; more
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brass/10 flex items-center justify-center shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.75}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brass"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-subtle-2 uppercase tracking-widest font-semibold mb-1">
                      Business Hours
                    </p>
                    <p className="text-charcoal font-semibold">
                      Mon&ndash;Fri: 8am&ndash;6pm
                    </p>
                    <p className="text-charcoal font-semibold">
                      Sat: 9am&ndash;2pm
                    </p>
                    <p className="text-subtle text-sm mt-0.5">
                      Sun: Closed
                    </p>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="mt-4 pt-6 border-t border-border-strong">
                  <div className="flex flex-wrap gap-4">
                    <span className="inline-flex items-center gap-1.5 text-subtle text-sm">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.75}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brass"
                        aria-hidden="true"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <polyline points="9 12 11 14 15 10" />
                      </svg>
                      Licensed &amp; Insured
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-subtle text-sm">
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
                      4.9 Rating (180+ Reviews)
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-subtle text-sm">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.75}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brass"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Free Consultations
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-border-strong shadow-soft">
            <iframe
              title="Luxe Bath & Kitchen Service Area - Sacramento, CA"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199665.90328520843!2d-121.59596859550779!3d38.56157139816498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA!5e0!3m2!1sen!1sus!4v1700000000000!5m2!1sen!1sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-subtle text-sm text-center mt-4">
            Proudly serving Sacramento, Roseville, Elk Grove, Folsom, Rancho
            Cordova, Citrus Heights, Rocklin, Davis &amp; surrounding communities.
          </p>
        </div>
      </section>
    </>
  );
}
