'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    id: 1,
    question: 'How does IamJOS compare to Open Journal Systems (OJS)?',
    answer: 'IamJOS is a cloud-native, modern alternative to OJS that offers Google Scholar and Scopus indexing out of the box, real-time collaboration, automated backups, and advanced analytics. While OJS requires self-hosting and extensive configuration, IamJOS is fully managed and ready to use immediately.'
  },
  {
    id: 2,
    question: 'Is IamJOS compatible with Google Scholar indexing?',
    answer: 'Yes, IamJOS is fully optimized for Google Scholar indexing with automatic metadata compliance, proper XML formatting, and schema markup. Your journal will be discoverable by Google Scholar within days of publication.'
  },
  {
    id: 3,
    question: 'Can IamJOS handle Scopus and citation tracking?',
    answer: 'Absolutely. IamJOS integrates directly with Scopus and provides real-time citation tracking and analytics. You can monitor citation impact, track article performance, and access detailed metrics through our dashboard.'
  },
  {
    id: 4,
    question: 'How does DOI management work in IamJOS?',
    answer: 'IamJOS provides automatic DOI assignment through Crossref. Every article published on IamJOS automatically receives a unique DOI, making your content globally discoverable and citeable. DOI management is included in all plans.'
  },
  {
    id: 5,
    question: 'What about data migration from OJS?',
    answer: 'IamJOS supports seamless migration from Open Journal Systems. Our migration team will handle the transfer of all your journal data, articles, issues, and user accounts with zero downtime and full data integrity.'
  },
  {
    id: 6,
    question: 'Is IamJOS secure and compliant?',
    answer: 'Yes. IamJOS meets GDPR, CCPA, and international academic standards. We use bank-grade encryption, automatic backups, DDoS protection, and regular security audits. All data is stored on secure, certified cloud infrastructure.'
  },
  {
    id: 7,
    question: 'Can I customize the journal interface?',
    answer: 'Completely. IamJOS offers white-label solutions with customizable themes, logos, colors, and layouts. You can make it look exactly like your brand while maintaining our powerful backend.'
  },
  {
    id: 8,
    question: 'What is the pricing model?',
    answer: 'IamJOS offers flexible pricing based on your journal size and features needed. We provide free trials, startup packages, and enterprise solutions. Contact our sales team for a custom quote based on your needs.'
  },
  {
    id: 9,
    question: 'How is customer support provided?',
    answer: 'We provide 24/7 support via email, live chat, and phone. Dedicated account managers are assigned to enterprise customers. We also offer comprehensive documentation and video tutorials.'
  },
  {
    id: 10,
    question: 'Can I integrate IamJOS with my existing systems?',
    answer: 'Yes. IamJOS provides a robust REST API for integrations with your existing systems, LMS platforms, and institutional repositories. Full API documentation is available for all customers.'
  }
]

export function FAQSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/60">
            Everything you need to know about IamJOS
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition-colors"
            >
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-primary/2 to-accent/2 hover:from-primary/5 hover:to-accent/5 transition-colors text-left"
              >
                <h3 className="font-semibold text-foreground text-lg">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-primary transition-transform flex-shrink-0 ml-4',
                    expandedId === faq.id && 'rotate-180'
                  )}
                />
              </button>

              {expandedId === faq.id && (
                <div className="px-6 py-4 bg-background border-t border-primary/20">
                  <p className="text-foreground/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center space-y-4">
          <h3 className="text-2xl font-serif font-bold text-primary">
            Still have questions?
          </h3>
          <p className="text-foreground/60 mb-6">
            Our team is ready to help. Get in touch with us for personalized support.
          </p>
          <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}
