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
        {/* Features Grid with Title Card in First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Title Card - Styled as featured card */}
          <div className="group relative bg-white/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 hover:shadow-lg md:col-span-1 lg:col-span-1 flex flex-col justify-center h-full">
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-accent to-transparent rounded-full group-hover:h-16 transition-all duration-300" />

            {/* Title Content */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary leading-tight">
                Fitur Unggulan untuk Keunggulan
              </h2>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Semua yang Anda butuhkan untuk mengelola jurnal akademik berkelas dunia
              </p>
            </div>
          </div>

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
