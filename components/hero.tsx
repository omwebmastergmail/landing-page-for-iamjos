'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 px-4 py-3 rounded-full bg-accent/15 border border-accent/30">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary">Platform Ilmiah Terdepan</span>
            </div>
            <span className="text-xs text-primary/70 hidden sm:inline">|</span>
            <span className="text-xs font-medium text-primary">Didukung oleh APJI</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Publikasikan dengan Presisi
            </span>
            <br />
            <span className="text-primary">Kelola dengan Keunggulan</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            IamJOS adalah platform manajemen publikasi jurnal premium yang dibangun untuk keunggulan akademik. 
            Terindeks Google Scholar, sesuai Scopus, dan siap untuk sitasi global.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white rounded-lg h-14 px-8 text-base font-semibold"
            >
              Coba Gratis Sekarang
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-lg h-14 px-8 text-base font-semibold border-primary/30 text-primary hover:bg-primary/5"
            >
              Lihat Demo
            </Button>
          </div>

          {/* Compliance Badges */}
          <div className="pt-8 flex flex-wrap justify-center gap-6 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Terindeks Google Scholar</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Sesuai Scopus</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>DOI Aktif</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Siap Crossref</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
