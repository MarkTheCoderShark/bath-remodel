import { useState } from 'react';

const faqs = [
  {
    question: 'How much does a bathroom remodel cost?',
    answer:
      'Most bathroom remodels in the Austin area range from $15,000 to $45,000 depending on scope, materials, and structural changes. We provide a detailed, line-item estimate after our in-home consultation so there are no surprises.',
  },
  {
    question: 'How long will my project take?',
    answer:
      'A standard bathroom remodel typically takes 6\u20138 weeks from demolition to final walkthrough. Kitchen projects run 8\u201312 weeks. We\u2019ll give you a detailed timeline before work begins and keep you updated throughout.',
  },
  {
    question: 'Can I stay in my home during construction?',
    answer:
      'Yes \u2014 most of our clients stay home during the project. We set up sealed dust barriers, use dedicated entry points, and clean up at the end of every workday. If we need to shut off water or utilities, we\u2019ll coordinate timing with you in advance.',
  },
  {
    question: 'What happens if you find hidden damage?',
    answer:
      'It happens, especially in older homes. If we uncover water damage, mold, or structural issues behind walls, we stop and walk you through the findings with photos. We\u2019ll present repair options and costs before touching anything \u2014 no surprise charges.',
  },
  {
    question: 'How do payments work?',
    answer:
      'We structure payments in phases tied to project milestones: a deposit at contract signing, a progress payment at the midpoint, and a final payment at walkthrough. We never ask for full payment upfront.',
  },
  {
    question: 'Do you handle permits and inspections?',
    answer:
      'Absolutely. We pull all required permits, coordinate inspections, and ensure your project meets current building codes. It\u2019s one of the advantages of working with a licensed design-build firm.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-[720px] mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="font-sans text-2xl md:text-3xl font-bold text-charcoal text-center mb-10">
          Common Questions
        </h2>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className="border border-border-strong rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer hover:bg-stone/50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-sans text-sm font-semibold text-charcoal">
                  {faq.question}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`text-subtle shrink-0 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {openIndex === i && (
                <div className="px-5 pb-4">
                  <p className="text-muted text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
