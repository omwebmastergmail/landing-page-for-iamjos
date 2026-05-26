'use client'

import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Starter',
    price: 'Rp 1.584.000',
    period: '/bulan',
    description: 'Sempurna untuk jurnal akademik kecil',
    features: [
      'Hingga 5 edisi/tahun',
      'Artikel tidak terbatas',
      'Pengindeksan Google Scholar',
      'Analitik dasar',
      'Dukungan email',
      'Akses forum komunitas'
    ],
    cta: 'Coba Gratis',
    highlighted: false
  },
  {
    name: 'Professional',
    price: 'Rp 4.784.000',
    period: '/bulan',
    description: 'Untuk jurnal mapan dengan pertumbuhan',
    features: [
      'Edisi tidak terbatas',
      'Artikel tidak terbatas',
      'Google Scholar + Scopus',
      'Penugasan DOI via Crossref',
      'Analitik lanjutan',
      'Dukungan email prioritas',
      'Akses API',
      'Domain kustom'
    ],
    cta: 'Coba Gratis',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Kustom',
    period: 'harga',
    description: 'Untuk operasi skala besar',
    features: [
      'Semua fitur Professional',
      'Manajer akun khusus',
      'Integrasi kustom',
      'Keamanan lanjutan',
      'Dukungan telepon 24/7',
      'Jaminan SLA',
      'Solusi white-label',
      'Dukungan migrasi data'
    ],
    cta: 'Hubungi Penjualan',
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
            Harga Sederhana dan Transparan
          </h2>
          <p className="text-lg text-foreground/60">
            Pilih paket yang sesuai dengan kebutuhan jurnal Anda
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
                  Paling Populer
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
            Semua paket termasuk uji coba gratis 14 hari. Tidak perlu kartu kredit.
          </p>
          <p className="text-sm text-foreground/50">
            Butuh solusi khusus? <a href="#contact" className="text-accent font-semibold hover:underline">Hubungi tim penjualan kami</a>
          </p>
        </div>
      </div>
    </section>
  )
}
