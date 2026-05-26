'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const newsItems = [
  {
    id: 1,
    title: 'IamJOS Resmi Didukung APJI, Platform Jurnal Terdepan di Indonesia',
    excerpt: 'Asosiasi Pengelola Jurnal Indonesia (APJI) secara resmi memberikan dukungan penuh kepada IamJOS sebagai platform manajemen jurnal modern dan terpercaya.',
    date: '25 Mei 2026',
    category: 'Pengumuman',
    image: '/images/news-1.jpg',
    readTime: '5 menit'
  },
  {
    id: 2,
    title: 'Integrasi Scopus Sempurna: Tingkatkan Visibilitas Jurnal Anda',
    excerpt: 'IamJOS kini menyediakan integrasi seamless dengan Scopus untuk memastikan setiap publikasi Anda terindeks dan terlihat oleh komunitas akademik global.',
    date: '20 Mei 2026',
    category: 'Fitur Baru',
    image: '/images/news-2.jpg',
    readTime: '7 menit'
  },
  {
    id: 3,
    title: 'Webinar Gratis: Optimalisasi Pengindeksan Journal di IamJOS',
    excerpt: 'Bergabunglah dengan para ahli di industri untuk mempelajari best practices dalam meningkatkan kualitas dan visibilitas jurnal Anda di platform IamJOS.',
    date: '15 Mei 2026',
    category: 'Event',
    image: '/images/news-3.jpg',
    readTime: '4 menit'
  },
  {
    id: 4,
    title: 'Peningkatan Security: Sertifikasi SOC 2 Type II Diraih',
    excerpt: 'IamJOS telah meraih sertifikasi keamanan SOC 2 Type II, memastikan data jurnal dan penelitian Anda terlindungi dengan standar keamanan tertinggi.',
    date: '10 Mei 2026',
    category: 'Keamanan',
    image: '/images/news-4.jpg',
    readTime: '6 menit'
  }
]

const events = [
  {
    id: 1,
    title: 'IamJOS Workshop 2026: Transformasi Digital Jurnal',
    date: '15 Juni 2026',
    time: '09:00 - 17:00 WIB',
    location: 'Jakarta Convention Center',
    type: 'Workshop',
    status: 'Mendatang',
    image: '/images/event-1.jpg',
    capacity: '150 peserta',
    description: 'Workshop interaktif tentang transformasi digital jurnal dengan para expert industri'
  },
  {
    id: 2,
    title: 'Academic Publishing Summit 2026',
    date: '22-23 Juni 2026',
    time: '08:00 - 18:00 WIB',
    location: 'Bandung, Indonesia',
    type: 'Konferensi',
    status: 'Mendatang',
    image: '/images/event-2.jpg',
    capacity: '500+ peserta',
    description: 'Summit tahunan terbesar untuk komunitas penerbit akademik Indonesia'
  },
  {
    id: 3,
    title: 'Webinar: Best Practices dalam Journal Management',
    date: '8 Juni 2026',
    time: '14:00 - 15:30 WIB',
    location: 'Virtual (Online)',
    type: 'Webinar',
    status: 'Mendatang',
    image: '/images/event-3.jpg',
    capacity: 'Unlimited',
    description: 'Sesi webinar gratis untuk membahas best practices pengelolaan jurnal'
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
              <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-accent to-transparent rounded-full group-hover:h-16 transition-all duration-300 z-10" />
              
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <Image
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {newsItems[0].category}
                  </span>
                  <span className="text-xs text-foreground/60 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {newsItems[0].date}
                  </span>
                  <span className="text-xs text-foreground/60 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {newsItems[0].readTime}
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
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="group relative bg-white/50 backdrop-blur-sm border border-primary/10 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-lg flex flex-col h-full"
              >
                <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-accent to-transparent rounded-full group-hover:h-16 transition-all duration-300 z-10" />
                
                {/* Event Image */}
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div>
                    <span className="text-xs font-semibold text-accent bg-accent/15 px-3 py-1 rounded-full">
                      {event.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors leading-tight">
                    {event.title}
                  </h3>
                  
                  <p className="text-sm text-foreground/70">{event.description}</p>
                  
                  <div className="space-y-2 text-sm text-foreground/70 mt-auto">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-accent text-lg mt-0.5">📍</span>
                      <span>{event.location}</span>
                    </div>
                    <div className="text-xs text-foreground/60 pt-2 border-t border-primary/10">
                      {event.capacity}
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 py-2 px-4 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                    Daftar Sekarang
                  </button>
                </div>
              </Link>
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
