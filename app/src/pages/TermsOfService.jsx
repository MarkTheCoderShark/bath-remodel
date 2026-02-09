import { Helmet } from 'react-helmet-async';
import Breadcrumb from '../components/Breadcrumb';

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Luxe Bath & Kitchen</title>
        <meta name="description" content="Review the terms of service for Luxe Bath & Kitchen home remodeling services in Sacramento, CA. Understand our policies on estimates, scheduling, payments, and warranties." />
        <link rel="canonical" href="https://luxebathkitchen.com/terms" />
        <meta property="og:title" content="Terms of Service | Luxe Bath & Kitchen" />
        <meta property="og:description" content="Review the terms of service for Luxe Bath & Kitchen home remodeling services in Sacramento, CA." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luxebathkitchen.com/terms" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Terms of Service | Luxe Bath & Kitchen" />
        <meta name="twitter:description" content="Review the terms of service for Luxe Bath & Kitchen home remodeling services in Sacramento, CA." />
      </Helmet>
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Terms of Service' },
      ]} />

      <section className="py-12 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="font-serif text-[#1C1917] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="font-sans text-[#1C1917]/60 text-sm mb-12">
            Last updated: February 2026
          </p>

          <div className="font-sans text-[#1C1917] space-y-10">
            <div>
              <h2 className="font-serif text-[#1C1917] text-xl sm:text-2xl font-bold mb-3">
                Acceptance of Terms
              </h2>
              <p className="leading-relaxed">
                By accessing or using the Luxe Bath & Kitchen website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services. We reserve the right to update these terms at any time, and your continued use of our services constitutes acceptance of any changes.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[#1C1917] text-xl sm:text-2xl font-bold mb-3">
                Services Description
              </h2>
              <p className="leading-relaxed">
                Luxe Bath & Kitchen provides home remodeling services in the Sacramento, CA metropolitan area, including but not limited to bathroom remodeling, kitchen remodeling, walk-in showers, tub-to-shower conversions, tile and stone work, and vanity and countertop installations. The specific scope, materials, and timeline for each project are defined in individual project agreements between Luxe Bath & Kitchen and the client.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[#1C1917] text-xl sm:text-2xl font-bold mb-3">
                Estimates and Pricing
              </h2>
              <p className="leading-relaxed mb-3">
                All estimates provided by Luxe Bath & Kitchen are based on the information available at the time of assessment. Please be aware of the following:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Estimates are provided free of charge and are valid for 30 days from the date of issue unless otherwise stated.</li>
                <li>Final pricing may vary based on actual site conditions, material selections, design changes, or unforeseen structural issues discovered during the project.</li>
                <li>Any changes to the original scope of work will be documented in a written change order and must be approved by the client before work proceeds.</li>
                <li>Material prices are subject to market fluctuations and may be adjusted if there is a significant change between the estimate date and project start date.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-[#1C1917] text-xl sm:text-2xl font-bold mb-3">
                Scheduling and Access
              </h2>
              <p className="leading-relaxed mb-3">
                To ensure your project proceeds smoothly:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Project start dates are scheduled based on current workload and material availability. We will communicate any anticipated delays promptly.</li>
                <li>The client must provide reasonable access to the work area during scheduled work hours. Restricted access may result in project delays.</li>
                <li>Work areas should be cleared of personal belongings prior to the start of the project. Luxe Bath & Kitchen is not responsible for damage to items left in the work zone.</li>
                <li>We will make reasonable efforts to minimize disruption to your daily routine during the project.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-[#1C1917] text-xl sm:text-2xl font-bold mb-3">
                Payment Terms
              </h2>
              <p className="leading-relaxed mb-3">
                Payment for remodeling services is structured as follows:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>A deposit is required to secure your project on our schedule. The deposit amount will be specified in your project agreement.</li>
                <li>Progress payments may be required at predetermined project milestones as outlined in the agreement.</li>
                <li>Final payment is due upon project completion and your satisfaction with the work performed.</li>
                <li>We accept checks, bank transfers, and major credit cards. A processing fee may apply to credit card payments.</li>
                <li>Late payments may be subject to interest charges as permitted by California law.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-[#1C1917] text-xl sm:text-2xl font-bold mb-3">
                Warranties
              </h2>
              <p className="leading-relaxed mb-3">
                Luxe Bath & Kitchen stands behind the quality of our work:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>We provide a workmanship warranty on all labor performed. The specific warranty duration is detailed in your project agreement.</li>
                <li>Manufacturer warranties on materials and fixtures are passed through to the client. We will assist with any manufacturer warranty claims.</li>
                <li>Warranties do not cover damage caused by misuse, neglect, unauthorized modifications, or normal wear and tear.</li>
                <li>Warranty claims must be submitted in writing within the warranty period. We will address valid claims promptly.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-[#1C1917] text-xl sm:text-2xl font-bold mb-3">
                Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                To the fullest extent permitted by California law, Luxe Bath & Kitchen shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to our services or this website. Our total liability for any claim shall not exceed the total amount paid by the client for the specific project giving rise to the claim. This limitation does not apply to damages arising from gross negligence or willful misconduct.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[#1C1917] text-xl sm:text-2xl font-bold mb-3">
                Governing Law
              </h2>
              <p className="leading-relaxed">
                These Terms of Service are governed by and construed in accordance with the laws of the State of California. Any disputes arising under these terms shall be resolved in the courts of Sacramento County, California. Both parties agree to attempt good-faith mediation before pursuing litigation.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[#1C1917] text-xl sm:text-2xl font-bold mb-3">
                Contact
              </h2>
              <p className="leading-relaxed">
                If you have questions about these Terms of Service, please contact us:
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
