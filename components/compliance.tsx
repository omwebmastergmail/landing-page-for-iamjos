'use client'

import { CheckCircle } from 'lucide-react'

const complianceItems = [
  {
    name: 'Google Scholar',
    description: 'Automatically indexed and visible to global research community',
    icon: '🎓'
  },
  {
    name: 'Scopus',
    description: 'Citation tracking and indexing for academic impact measurement',
    icon: '📊'
  },
  {
    name: 'Web of Science',
    description: 'Enterprise-grade citation and usage analytics',
    icon: '🌐'
  },
  {
    name: 'Crossref',
    description: 'Digital Object Identifier registration and management',
    icon: '🔗'
  },
  {
    name: 'COPE Standards',
    description: 'Committee on Publication Ethics compliance',
    icon: '✓'
  },
  {
    name: 'ICMJE Guidelines',
    description: 'International Committee of Medical Journal Editors standards',
    icon: '📋'
  }
]

export function ComplianceSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary">
                Global Compliance & Indexing
              </h2>
              <p className="text-lg text-foreground/60">
                IamJOS meets international standards and integrates with every major academic database.
                Your research gets the visibility it deserves.
              </p>
            </div>

            {/* Compliance Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {complianceItems.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {item.name}
                    </h4>
                    <p className="text-sm text-foreground/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl" />
            <div className="relative z-10 aspect-square rounded-3xl border border-primary/20 flex items-center justify-center overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-8">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform"
                  >
                    <div className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity">
                      {['🎓', '📊', '🌐', '🔗', '✓', '📋', '🚀', '🔒', '💼'][i]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
