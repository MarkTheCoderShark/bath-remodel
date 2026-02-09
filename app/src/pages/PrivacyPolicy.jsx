import { Helmet } from 'react-helmet-async';
import Breadcrumb from '../components/Breadcrumb';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Luxe Bath & Kitchen</title>
        <meta name="description" content="Read the Luxe Bath & Kitchen privacy policy. Learn how we collect, use, and protect your personal information when you use our home remodeling services in Sacramento, CA." />
        <link rel="canonical" href="https://luxebathkitchen.com/privacy" />
        <meta property="og:title" content="Privacy Policy | Luxe Bath & Kitchen" />
        <meta property="og:description" content="Read the Luxe Bath & Kitchen privacy policy. Learn how we collect, use, and protect your personal information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luxebathkitchen.com/privacy" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy | Luxe Bath & Kitchen" />
        <meta name="twitter:description" content="Read the Luxe Bath & Kitchen privacy policy. Learn how we collect, use, and protect your personal information." />
      </Helmet>
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Privacy Policy' },
      ]} />

      <section className="py-12 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="font-serif text-[#1C1917] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="font-sans text-[#1C1917]/60 text-sm mb-12">
            Last updated: February 2026
          </p>

          <div className="font-sans text-[#1C1917] space-y-10">
            <div>
              <p className="leading-relaxed">
                Luxe Bath & Kitchen (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, contact us, or use our home remodeling services in the Sacramento, CA area.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[#1C1917] text-xl sm:text-2xl font-bold mb-3">
                Information We Collect
              </h2>
              <p className="leading-relaxed mb-3">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and mailing address that you provide when requesting an estimate, filling out our contact form, or communicating with us.</li>
                <li><strong>Project Information:</strong> Details about your remodeling project, including property address, project scope, budget, and timeline preferences.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and referring website.</li>
                <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-[#1C1917] text-xl sm:text-2xl font-bold mb-3">
                How We Use Your Information
              </h2>
              <p className="leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Respond to your inquiries and provide project estimates</li>
                <li>Schedule consultations and coordinate remodeling services</li>
                <li>Communicate with you about your project status and updates</li>
                <li>Improve our website, services, and customer experience</li>
                <li>Send occasional updates about our services, promotions, or industry tips (you can opt out at any time)</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-[#1C1917] text-xl sm:text-2xl font-bold mb-3">
                Information Sharing
              </h2>
              <p className="leading-relaxed mb-3">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li><strong>Service Partners:</strong> With trusted subcontractors, suppliers, or partners directly involved in your remodeling project, and only to the extent necessary to complete the work.</li>
                <li><strong>Service Providers:</strong> With third-party companies that help us operate our website, process payments, or manage communications (e.g., email services, analytics tools).</li>
                <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process, or to protect our rights, safety, or property.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-[#1C1917] text-xl sm:text-2xl font-bold mb-3">
                Data Security
              </h2>
              <p className="leading-relaxed">
                We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[#1C1917] text-xl sm:text-2xl font-bold mb-3">
                Your Rights
              </h2>
              <p className="leading-relaxed mb-3">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
                <li><strong>Correction:</strong> Request that we update or correct inaccurate information.</li>
                <li><strong>Deletion:</strong> Request that we delete your personal information, subject to certain legal exceptions.</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time by following the unsubscribe link in our emails or contacting us directly.</li>
              </ul>
              <p className="leading-relaxed mt-3">
                California residents may have additional rights under the California Consumer Privacy Act (CCPA). To exercise any of these rights, please contact us using the information below.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[#1C1917] text-xl sm:text-2xl font-bold mb-3">
                Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 space-y-1 leading-relaxed">
                <p><strong>Luxe Bath & Kitchen</strong></p>
                <p>Email: <a href="mailto:info@luxebathkitchen.com" className="text-amber-700 hover:text-amber-800 underline underline-offset-2 transition-colors duration-200">info@luxebathkitchen.com</a></p>
                <p>Phone: <a href="tel:5551234567" className="text-amber-700 hover:text-amber-800 underline underline-offset-2 transition-colors duration-200">(555) 123-4567</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
