'use client'

import { BookOpen, Search, Shield, Zap, Users, BarChart3, Globe, Lock } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Multi-Language Support',
    description: 'Publish and manage journals in multiple languages with full internationalization support.'
  },
  {
    icon: Search,
    title: 'Advanced Indexing',
    description: 'Automatic Google Scholar, Scopus, and Web of Science integration for maximum visibility.'
  },
  {
    icon: BarChart3,
    title: 'Citation Analytics',
    description: 'Real-time citation tracking and analytics with detailed impact metrics.'
  },
  {
    icon: Globe,
    title: 'Global DOI System',
    description: 'Integrated DOI assignment through Crossref for worldwide discoverability.'
  },
  {
    icon: Users,
    title: 'Peer Review System',
    description: 'Sophisticated workflow management for editors, reviewers, and authors.'
  },
  {
    icon: Shield,
    title: 'Academic Compliance',
    description: 'Full COPE, ICMJE, and international academic standards compliance.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with global CDN distribution for instant access.'
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and comprehensive data protection protocols.'
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary">
            Powerful Features Built for Excellence
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Everything you need to manage a world-class academic journal
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-accent to-transparent rounded-full group-hover:h-16 transition-all duration-300" />

                {/* Icon */}
                <div className="mb-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
