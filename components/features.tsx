'use client'

import { BookOpen, Search, Shield, Zap, Users, BarChart3, Globe, Lock, Sparkles } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Dukungan Multi-Bahasa',
    description: 'Publikasikan dan kelola jurnal dalam berbagai bahasa dengan dukungan internasionalisasi penuh.'
  },
  {
    icon: Search,
    title: 'Pengindeksan Lanjutan',
    description: 'Integrasi otomatis Google Scholar, Scopus, dan Web of Science untuk visibilitas maksimal.'
  },
  {
    icon: BarChart3,
    title: 'Analitik Sitasi',
    description: 'Pelacakan sitasi real-time dan analitik dengan metrik dampak terperinci.'
  },
  {
    icon: Globe,
    title: 'Sistem DOI Global',
    description: 'Penugasan DOI terintegrasi melalui Crossref untuk penemuan di tingkat dunia.'
  },
  {
    icon: Users,
    title: 'Sistem Peer Review',
    description: 'Manajemen alur kerja canggih untuk editor, reviewer, dan penulis.'
  },
  {
    icon: Shield,
    title: 'Kepatuhan Akademik',
    description: 'Kepatuhan COPE, ICMJE, dan standar akademik internasional penuh.'
  },
  {
    icon: Zap,
    title: 'Ultra Cepat',
    description: 'Performa optimal dengan distribusi CDN global untuk akses instan.'
  },
  {
    icon: Lock,
    title: 'Keamanan Enterprise',
    description: 'Enkripsi tingkat bank dan protokol perlindungan data komprehensif.'
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Title - Above the grid */}
        <div className="mb-12 space-y-2">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary">
            Fitur Unggulan untuk IamJOS
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Semua yang Anda butuhkan untuk mengelola jurnal akademik berkelas dunia
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature Cards */}
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-accent to-transparent rounded-full group-hover:h-16 transition-all duration-300" />

                {/* First Row: Icon + Title (Left aligned) */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg pt-1">
                    {feature.title}
                  </h3>
                </div>

                {/* Second Row: Description (Left aligned) */}
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
