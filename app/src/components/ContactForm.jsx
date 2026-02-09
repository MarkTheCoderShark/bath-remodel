import { useState, useCallback } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
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
        if (!value || !(/[\d\s\-().+]{7,}/).test(value))
          return 'Please enter a valid phone number';
        return '';
      case 'email':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return 'Please enter a valid email';
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

    const allTouched = { name: true, phone: true, email: true, message: true };
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

  if (success) {
    return (
      <section id="contact" className="bg-limestone py-12 md:py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-xl mx-auto bg-stone rounded-2xl p-8 md:p-12 border border-border-strong shadow-soft">
            <div className="text-center py-12 flex flex-col items-center gap-4">
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
              <p className="text-muted">
                We'll be in touch within 24 hours.
              </p>
              <p className="text-subtle text-sm">
                In the meantime, feel free to call us at (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-limestone py-12 md:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-charcoal text-center">
          Get Your Free Remodeling Estimate
        </h2>
        <p className="text-muted text-lg text-center mt-3 mb-12">
          Thoughtful guidance. No pressure.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="max-w-xl mx-auto bg-stone rounded-2xl p-8 md:p-12 border border-border-strong shadow-soft"
        >
          <div className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-charcoal">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                className={inputClass}
              />
              {errors.name && touched.name && (
                <p className="text-red-600 text-xs">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-sm font-medium text-charcoal">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={form.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                onBlur={() => handleBlur('phone')}
                className={inputClass}
              />
              {errors.phone && touched.phone && (
                <p className="text-red-600 text-xs">{errors.phone}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-charcoal">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                className={inputClass}
              />
              {errors.email && touched.email && (
                <p className="text-red-600 text-xs">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-charcoal">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={(e) => handleChange('message', e.target.value)}
                onBlur={() => handleBlur('message')}
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
                'Request Free Estimate'
              )}
            </button>
          </div>

          <p className="text-subtle text-xs text-center mt-4">
            No pressure. No obligation. Your information stays private.
          </p>
        </form>
      </div>
    </section>
  );
}
