'use client'

import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small academic journals',
    features: [
      'Up to 5 issues/year',
      'Unlimited articles',
      'Google Scholar indexing',
      'Basic analytics',
      'Email support',
      'Community forum access'
    ],
    cta: 'Start Free Trial',
    highlighted: false
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'For established journals with growth',
    features: [
      'Unlimited issues',
      'Unlimited articles',
      'Google Scholar + Scopus',
      'DOI assignment via Crossref',
      'Advanced analytics',
      'Priority email support',
      'API access',
      'Custom domain'
    ],
    cta: 'Start Free Trial',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large-scale operations',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom integrations',
      'Advanced security',
      '24/7 phone support',
      'SLA guarantees',
      'White-label solution',
      'Data migration support'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
]

export function PricingSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-foreground/60">
            Choose the plan that fits your journal&apos;s needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? 'border-2 border-accent shadow-2xl scale-105 bg-gradient-to-br from-white to-accent/5'
                  : 'border border-primary/20 bg-white hover:border-primary/40'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-primary px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="p-8 space-y-8">
                {/* Plan Name */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-foreground/60">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-primary">
                    {plan.price}
                  </div>
                  <p className="text-sm text-foreground/60">
                    {plan.period}
                  </p>
                </div>

                {/* CTA */}
                <Button
                  className={`w-full h-11 rounded-lg font-semibold transition-all ${
                    plan.highlighted
                      ? 'bg-primary hover:bg-primary/90 text-white'
                      : 'bg-primary/10 text-primary hover:bg-primary/20'
                  }`}
                >
                  {plan.cta}
                </Button>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/70">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-foreground/60 text-lg">
            All plans include 14-day free trial. No credit card required.
          </p>
          <p className="text-sm text-foreground/50">
            Need a custom solution? <a href="#contact" className="text-accent font-semibold hover:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  )
}
