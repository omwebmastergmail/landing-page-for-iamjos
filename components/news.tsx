'use client'

import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

const newsItems = [
  {
    id: 1,
    title: 'IamJOS Resmi Didukung APJI, Platform Jurnal Terdepan di Indonesia',
    excerpt: 'Asosiasi Pengelola Jurnal Indonesia (APJI) secara resmi memberikan dukungan penuh kepada IamJOS sebagai platform manajemen jurnal modern dan terpercaya.',
    date: '25 Mei 2026',
    category: 'Pengumuman',
    image: 'bg-gradient-to-br from-primary/20 to-accent/20'
  },
  {
    id: 2,
    title: 'Integrasi Scopus Sempurna: Tingkatkan Visibilitas Jurnal Anda',
    excerpt: 'IamJOS kini menyediakan integrasi seamless dengan Scopus untuk memastikan setiap publikasi Anda terindeks dan terlihat oleh komunitas akademik global.',
    date: '20 Mei 2026',
    category: 'Fitur Baru',
    image: 'bg-gradient-to-br from-accent/20 to-primary/10'
  },
  {
    id: 3,
    title: 'Webinar Gratis: Optimalisasi Pengindeksan Journal di IamJOS',
    excerpt: 'Bergabunglah dengan para ahli di industri untuk mempelajari best practices dalam meningkatkan kualitas dan visibilitas jurnal Anda di platform IamJOS.',
    date: '15 Mei 2026',
    category: 'Event',
    image: 'bg-gradient-to-br from-primary/15 to-primary/5'
  },
  {
    id: 4,
    title: 'Peningkatan Security: Sertifikasi SOC 2 Type II Diraih',
    excerpt: 'IamJOS telah meraih sertifikasi keamanan SOC 2 Type II, memastikan data jurnal dan penelitian Anda terlindungi dengan standar keamanan tertinggi.',
    date: '10 Mei 2026',
    category: 'Keamanan',
    image: 'bg-gradient-to-br from-accent/15 to-accent/5'
  }
]

const events = [
  {
    id: 1,
    title: 'IamJOS Workshop 2026: Transformasi Digital Jurnal',
    date: '15 Juni 2026',
    location: 'Jakarta Convention Center',
    type: 'Workshop',
    status: 'Mendatang'
  },
  {
    id: 2,
    title: 'Academic Publishing Summit 2026',
    date: '22-23 Juni 2026',
    location: 'Bandung, Indonesia',
    type: 'Konferensi',
    status: 'Mendatang'
  },
  {
    id: 3,
    title: 'Webinar: Best Practices dalam Journal Management',
    date: '8 Juni 2026',
    location: 'Virtual (Online)',
    type: 'Webinar',
    status: 'Mendatang'
  }
]

export function NewsSection() {
  return (
    <section id="news" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary">
            Berita & Event
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Tetap update dengan informasi terbaru, pengumuman produk, dan event eksklusif dari IamJOS
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Featured News */}
          <div className="lg:col-span-2">
            <div className="group relative bg-white/50 backdrop-blur-sm border border-primary/10 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-accent to-transparent rounded-full group-hover:h-16 transition-all duration-300" />
              
              <div className={`h-48 ${newsItems[0].image}`} />
              
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {newsItems[0].category}
                  </span>
                  <span className="text-xs text-foreground/60 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {newsItems[0].date}
                  </span>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-primary leading-tight">
                  {newsItems[0].title}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed">
                  {newsItems[0].excerpt}
                </p>
                
                <Link
                  href={`/news/${newsItems[0].id}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group"
                >
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* News List */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">Berita Terkini</h3>
            {newsItems.slice(1, 4).map((news) => (
              <Link
                key={news.id}
                href={`/news/${news.id}`}
                className="group block p-4 bg-white/50 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-accent/30 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    news.category === 'Fitur Baru' ? 'bg-accent' : 'bg-primary'
                  }`} />
                  <div className="space-y-2 min-w-0">
                    <p className="text-sm font-semibold text-primary line-clamp-2 group-hover:text-accent transition-colors">
                      {news.title}
                    </p>
                    <p className="text-xs text-foreground/60">{news.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Events Section */}
        <div className="border-t border-primary/10 pt-12 space-y-8">
          <h2 className="text-3xl font-serif font-bold text-primary">Event Mendatang</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="group relative bg-white/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-accent to-transparent rounded-full group-hover:h-16 transition-all duration-300" />
                
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-accent bg-accent/15 px-3 py-1 rounded-full">
                      {event.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      {event.date}
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-accent mt-1">📍</span>
                      {event.location}
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 py-2 px-4 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                    Daftar Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center space-y-4">
          <h3 className="text-2xl font-serif font-bold text-primary">
            Jangan Lewatkan Update Terbaru
          </h3>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Berlangganan newsletter kami untuk mendapatkan informasi berita dan event terbaru langsung ke inbox Anda
          </p>
          <Link
            href="#newsletter"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Berlangganan Sekarang
          </Link>
        </div>
      </div>
    </section>
  )
}
