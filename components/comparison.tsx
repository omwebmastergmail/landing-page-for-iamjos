'use client'

import { CheckCircle2, X } from 'lucide-react'

const comparisonData = [
  { feature: 'Google Scholar Indexing', iamjos: true, ojs: false },
  { feature: 'Scopus Integration', iamjos: true, ojs: false },
  { feature: 'DOI Management', iamjos: true, ojs: true },
  { feature: 'Citation Analytics', iamjos: true, ojs: false },
  { feature: 'Cloud-Based', iamjos: true, ojs: false },
  { feature: 'Automatic Backups', iamjos: true, ojs: false },
  { feature: 'Multi-Language UI', iamjos: true, ojs: true },
  { feature: 'Real-time Collaboration', iamjos: true, ojs: false },
  { feature: 'Advanced Security', iamjos: true, ojs: false },
  { feature: 'API Access', iamjos: true, ojs: true },
]

export function ComparisonSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary">
            Why Choose IamJOS?
          </h2>
          <p className="text-lg text-foreground/60">
            The modern alternative to traditional journal management systems
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-primary/20 overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Header */}
              <thead>
                <tr className="border-b border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
                  <th className="px-6 py-4 text-left">
                    <span className="font-semibold text-foreground">Features</span>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <span className="font-semibold text-primary">IamJOS</span>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <span className="font-semibold text-foreground/60">Traditional OJS</span>
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-primary/10 ${
                      index % 2 === 0 ? 'bg-background' : 'bg-primary/2'
                    } hover:bg-primary/5 transition-colors`}
                  >
                    <td className="px-6 py-4 font-medium text-foreground">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.iamjos ? (
                        <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-foreground/30 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.ojs ? (
                        <CheckCircle2 className="w-5 h-5 text-foreground/40 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-foreground/20 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-foreground/60 mb-4">
            Ready to upgrade your journal management system?
          </p>
          <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  )
}
