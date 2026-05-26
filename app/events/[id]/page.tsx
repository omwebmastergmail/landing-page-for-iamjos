import { ArrowLeft, Calendar, Clock, MapPin, Users, Ticket } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const getAllEvents = () => [
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
    price: 'Rp 299.000 (Early Bird)',
    description: 'Workshop interaktif tentang transformasi digital jurnal dengan para expert industri',
    fullDescription: `Workshop eksklusif IamJOS 2026 adalah acara tahunan yang dirancang khusus untuk para pengelola jurnal, editor, dan profesional di bidang penerbitan akademik. Acara ini menghadirkan para expert industri yang akan berbagi pengalaman dan best practices dalam memanfaatkan teknologi untuk transformasi digital jurnal.

Workshop ini mencakup berbagai topik penting seperti:
• Strategi digitalisasi jurnal akademik
• Optimalisasi platform penerbitan dengan IamJOS
• Integrasi dengan database internasional (Scopus, Google Scholar, Crossref)
• Manajemen peer review yang efisien
• Meningkatkan citation rate dan impact factor
• Marketing dan promosi jurnal di era digital

Peserta akan mendapatkan:
✓ Sertifikat kehadiran resmi
✓ Materi workshop lengkap
✓ Akses eksklusif ke resources premium IamJOS
✓ Networking dengan profesional industri
✓ Konsultasi gratis dengan tim IamJOS
✓ Diskon khusus untuk paket berlangganan IamJOS`,
    schedule: [
      { time: '09:00 - 09:30', title: 'Registrasi & Coffee Break' },
      { time: '09:30 - 10:30', title: 'Keynote: Masa Depan Penerbitan Akademik' },
      { time: '10:30 - 12:00', title: 'Workshop: Transformasi Digital Jurnal' },
      { time: '12:00 - 13:00', title: 'Istirahat Makan Siang' },
      { time: '13:00 - 14:30', title: 'Session 2: Integrasi Database & Optimalisasi SEO' },
      { time: '14:30 - 15:00', title: 'Coffee Break' },
      { time: '15:00 - 16:30', title: 'Panel Discussion & Q&A' },
      { time: '16:30 - 17:00', title: 'Closing & Networking' }
    ]
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
    price: 'Rp 499.000 (Early Bird)',
    description: 'Summit tahunan terbesar untuk komunitas penerbit akademik Indonesia',
    fullDescription: `Academic Publishing Summit 2026 adalah konferensi internasional terbesar yang menghadirkan para pemimpin dan innovator di industri penerbitan akademik. Acara dua hari ini akan menjadi platform utama untuk berbagi pengetahuan, pengalaman, dan inovasi dalam ekosistem penerbitan akademik modern.

Topik Utama:
• Tren global dalam penerbitan akademik
• Open Access dan transformasi model bisnis
• Teknologi AI dalam peer review dan editorial management
• Etika publikasi dan integritas penelitian
• Kolaborasi internasional dalam penerbitan
• Peran penerbit dalam mendorong penelitian berkualitas

Pembicara:
Konferensi ini menghadirkan pembicara internasional dari universitas terkemuka dan penerbit akademik global, serta praktisi terbaik dari Indonesia.

Manfaat:
✓ Akses ke presentasi dari para expert terkemuka
✓ Networking opportunities dengan profesional dari seluruh dunia
✓ Pameran teknologi penerbitan terbaru
✓ Workshop praktis tentang best practices
✓ Sertifikat kehadiran untuk pengembangan profesional
✓ Akses recording untuk peserta yang tidak hadir secara langsung`,
    schedule: [
      { time: 'Hari 1 - 22 Juni', title: 'Opening Keynote & Parallel Sessions' },
      { time: 'Hari 1 - 13:00-14:00', title: 'Lunch & Exhibitor Area' },
      { time: 'Hari 1 - 14:00-17:00', title: 'Workshop & Discussion Panels' },
      { time: 'Hari 1 - 18:00-20:00', title: 'Welcome Dinner' },
      { time: 'Hari 2 - 23 Juni', title: 'Keynote & Specialist Tracks' },
      { time: 'Hari 2 - 12:00-13:00', title: 'Lunch Break' },
      { time: 'Hari 2 - 13:00-16:30', title: 'Final Sessions & Case Studies' },
      { time: 'Hari 2 - 16:30-17:30', title: 'Closing & Networking' }
    ]
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
    price: 'Gratis',
    description: 'Sesi webinar gratis untuk membahas best practices pengelolaan jurnal',
    fullDescription: `Webinar eksklusif gratis ini menghadirkan expert dari IamJOS dan praktisi berpengalaman untuk membahas best practices dalam journal management. Sesi ini dirancang khusus untuk editor, manager, dan staff jurnal yang ingin meningkatkan efisiensi operasional.

Materi Pembahasan:
• Struktur organisasi yang efektif untuk tim editorial
• Workflow management yang optimal
• Komunikasi dengan authors dan reviewers
• Quality assurance dalam proses review
• Strategi peningkatan impact dan citation
• Handling conflict of interest dan plagiarism

Pembicara:
Expert speakers dari universitas terkemuka dan platform penerbitan internasional akan berbagi pengalaman dan insights mereka.

Apa yang Anda Dapatkan:
✓ Slide presentasi lengkap
✓ Recording webinar untuk ditonton kembali
✓ Sumber daya tambahan dan template yang dapat digunakan
✓ Akses Q&A session dengan pembicara
✓ Sertifikat partisipasi digital
✓ Konsultasi gratis dengan tim IamJOS (untuk 10 peserta pertama)

Catatan: Webinar akan dilaksanakan dalam Bahasa Indonesia dengan subtitle Inggris tersedia.`,
    schedule: [
      { time: '14:00 - 14:10', title: 'Pembukaan & Introduction' },
      { time: '14:10 - 14:45', title: 'Presentasi Utama: Best Practices dalam Journal Management' },
      { time: '14:45 - 15:15', title: 'Q&A Session & Discussion' },
      { time: '15:15 - 15:30', title: 'Penutup & Resources' }
    ]
  }
]

export default function EventDetail({ params }: { params: { id: string } }) {
  const eventId = parseInt(params.id)
  const event = getAllEvents().find(e => e.id === eventId)

  if (!event) {
    return (
      <main className="min-h-screen bg-background pt-16">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Event Tidak Ditemukan</h1>
          <Link href="/#news" className="text-accent hover:underline">
            Kembali ke daftar event
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background pt-16">
      <Header />
      
      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/#news"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Event
          </Link>

          {/* Hero Image */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-primary/20 to-accent/20">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Event Header */}
          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm font-semibold text-accent bg-accent/15 px-4 py-1 rounded-full">
                {event.type}
              </span>
              <span className="text-sm font-semibold text-green-600 bg-green-50 px-4 py-1 rounded-full">
                {event.status}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary leading-tight text-pretty">
              {event.title}
            </h1>

            {/* Event Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-primary/20">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground/60">Tanggal</p>
                  <p className="font-semibold text-foreground">{event.date}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground/60">Waktu</p>
                  <p className="font-semibold text-foreground">{event.time}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground/60">Lokasi</p>
                  <p className="font-semibold text-foreground">{event.location}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground/60">Kapasitas</p>
                  <p className="font-semibold text-foreground">{event.capacity}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Ticket className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground/60">Harga</p>
                  <p className="font-semibold text-accent">{event.price}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6 mb-12 pb-12 border-b border-primary/20">
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Deskripsi Event</h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                {event.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="space-y-6 mb-12">
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Jadwal Acara</h2>
              <div className="space-y-3">
                {event.schedule.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-white/50 backdrop-blur-sm border border-primary/10 rounded-lg">
                    <div className="flex items-center gap-3 min-w-fit">
                      <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="font-semibold text-primary whitespace-nowrap">{item.time}</span>
                    </div>
                    <p className="text-foreground/80">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 space-y-6">
            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                Siap untuk Menghadiri?
              </h3>
              <p className="text-foreground/70">
                Daftarkan diri Anda sekarang dan jangan lewatkan kesempatan untuk belajar dari para expert industri.
              </p>
            </div>
            
            <button className="w-full py-3 px-6 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Daftar Sekarang
            </button>
            
            <p className="text-sm text-foreground/60 text-center">
              Ada pertanyaan? Hubungi kami di events@iamjos.com
            </p>
          </div>

          {/* Back to Events */}
          <div className="mt-12 pt-8 border-t border-primary/20">
            <Link
              href="/#news"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Lihat Event Lainnya
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
