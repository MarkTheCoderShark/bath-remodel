import { useState, useEffect, useCallback, useRef } from 'react';
import { useEstimateModal } from '../context/EstimateModalContext';

const serviceOptions = [
  'Bathroom Remodeling',
  'Kitchen Remodeling',
  'Walk-In Showers',
  'Tub-to-Shower Conversions',
  'Tile & Stone',
  'Vanity & Countertops',
  'Other',
];

export default function EstimateModal() {
  const { isOpen, closeModal } = useEstimateModal();
  const [form, setForm] = useState({ name: '', phone: '', address: '', service: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const nameRef = useRef(null);

  // Lock body scroll & focus first input when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Small delay to allow transition to start before focusing
      const t = setTimeout(() => nameRef.current?.focus(), 100);
      return () => clearTimeout(t);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, closeModal]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      // Delay reset so it doesn't flash during close animation
      const t = setTimeout(() => {
        setForm({ name: '', phone: '', address: '', service: '' });
        setErrors({});
        setSubmitted(false);
        setLoading(false);
        setSuccess(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const validateField = useCallback((field, value) => {
    switch (field) {
      case 'name':
        if (!value || value.trim().length < 2) return 'Please enter your name';
        return '';
      case 'phone':
        if (!value || !/[\d\s\-().+]{7,}/.test(value))
          return 'Please enter a valid phone number';
        return '';
      default:
        return '';
    }
  }, []);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (submitted) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleBlur = (field) => {
    const error = validateField(field, form[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const newErrors = {};
    for (const field of ['name', 'phone']) {
      const error = validateField(field, form[field]);
      if (error) newErrors[field] = error;
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  if (!isOpen) return null;

  const inputClass =
    'w-full rounded-lg border border-border-strong bg-limestone-light px-4 py-3 text-charcoal text-sm focus:outline-2 focus:outline-brass focus:outline-offset-1 placeholder:text-subtle-2 transition-colors duration-200';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Request a free estimate"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-[fadeIn_200ms_ease-out]"
        onClick={closeModal}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-stone rounded-2xl border border-border-strong shadow-soft animate-[scaleIn_200ms_ease-out]">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-subtle hover:text-charcoal hover:bg-limestone-dark cursor-pointer transition-colors duration-200"
          aria-label="Close"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="p-8">
          {success ? (
            <div className="text-center py-4 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-brass/10 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-brass"
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
              <h3 className="font-sans text-xl font-bold text-charcoal">
                Thank You!
              </h3>
              <p className="text-muted text-sm max-w-xs">
                We&apos;ll be in touch within 24 hours to discuss your project.
              </p>
              <p className="text-subtle text-xs">
                Or call us now at{' '}
                <a
                  href="tel:5551234567"
                  className="text-brass hover:text-brass-hover transition-colors duration-200"
                >
                  (555) 123-4567
                </a>
              </p>
              <button
                onClick={closeModal}
                className="mt-2 text-charcoal font-medium text-sm hover:text-brass cursor-pointer transition-colors duration-200"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h2 className="font-sans text-xl md:text-2xl font-bold text-charcoal mb-1">
                Get a Free Estimate
              </h2>
              <p className="text-muted text-sm mb-6">
                No pressure. No obligation.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="estimate-name"
                      className="text-sm font-medium text-charcoal"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      ref={nameRef}
                      id="estimate-name"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      className={inputClass}
                      required
                    />
                    {errors.name && (
                      <p className="text-red-600 text-xs" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="estimate-phone"
                      className="text-sm font-medium text-charcoal"
                    >
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="estimate-phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      onBlur={() => handleBlur('phone')}
                      className={inputClass}
                      required
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-xs" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Address */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="estimate-address"
                      className="text-sm font-medium text-charcoal"
                    >
                      Address
                    </label>
                    <input
                      id="estimate-address"
                      type="text"
                      placeholder="123 Main St, Sacramento, CA"
                      value={form.address}
                      onChange={(e) => handleChange('address', e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  {/* Service */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="estimate-service"
                      className="text-sm font-medium text-charcoal"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="estimate-service"
                      value={form.service}
                      onChange={(e) => handleChange('service', e.target.value)}
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

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brass text-white py-3.5 rounded-2xl font-semibold hover:bg-brass-hover cursor-pointer transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-2 focus:outline-brass focus:outline-offset-2"
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

                <p className="text-subtle text-xs text-center mt-3">
                  Your information stays private.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
