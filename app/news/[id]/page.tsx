import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const getAllNews = () => [
  {
    id: 1,
    title: 'IamJOS Resmi Didukung APJI, Platform Jurnal Terdepan di Indonesia',
    date: '25 Mei 2026',
    author: 'Tim IamJOS',
    authorRole: 'Official Announcement',
    category: 'Pengumuman',
    readTime: '5 menit',
    image: '/images/news-1.jpg',
    content: 'Asosiasi Pengelola Jurnal Indonesia (APJI) secara resmi memberikan dukungan penuh kepada IamJOS sebagai platform manajemen jurnal modern dan terpercaya. Dukungan ini menjadi bukti komitmen APJI dalam mendorong transformasi digital dalam ekosistem penerbitan jurnal akademik Indonesia. Kerjasama antara IamJOS dan APJI dirancang untuk memberikan manfaat maksimal bagi para pengelola jurnal di seluruh Indonesia.\n\nDalam pernyataan resminya, APJI menyebutkan bahwa IamJOS memiliki fitur-fitur canggih yang memudahkan manajemen jurnal, dari proses submission hingga publikasi. Platform ini juga terintegrasi dengan database akademik internasional seperti Google Scholar, Scopus, dan Crossref.'
  },
  {
    id: 2,
    title: 'Integrasi Scopus Sempurna: Tingkatkan Visibilitas Jurnal Anda',
    date: '20 Mei 2026',
    author: 'Tim Teknis IamJOS',
    authorRole: 'Technical Team',
    category: 'Fitur Baru',
    readTime: '7 menit',
    image: '/images/news-2.jpg',
    content: 'IamJOS dengan bangga mengumumkan integrasi seamless dengan Scopus, salah satu database akademik terbesar dan paling terpercaya di dunia. Integrasi ini memungkinkan setiap artikel yang dipublikasikan di platform IamJOS untuk langsung terindeks dan dapat ditemukan oleh jutaan peneliti global. Dengan integrasi Scopus yang telah dioptimalkan, proses pengindeksan menjadi lebih cepat dan efisien.\n\nFitur baru ini memungkinkan pengelola jurnal untuk memantau indeksasi artikel secara real-time melalui dashboard IamJOS. Selain itu, kami juga menyediakan panduan lengkap tentang cara memastikan artikel Anda lolos proses review Scopus.'
  },
  {
    id: 3,
    title: 'Webinar Gratis: Optimalisasi Pengindeksan Journal di IamJOS',
    date: '15 Mei 2026',
    author: 'Event Team IamJOS',
    authorRole: 'Events Coordinator',
    category: 'Event',
    readTime: '4 menit',
    image: '/images/news-3.jpg',
    content: 'IamJOS mengundang Anda untuk menghadiri webinar gratis eksklusif tentang optimalisasi pengindeksan jurnal. Event ini dirancang khusus untuk para pengelola jurnal yang ingin meningkatkan visibilitas dan impact factor publikasi mereka. Topik pembahasan meliputi best practices dalam submission dan metadata optimization, strategi meningkatkan citation rate, dan cara memaksimalkan Google Scholar indexing.\n\nWebinar akan dipandu oleh para expert yang berpengalaman di industri penerbitan akademik. Peserta akan mendapatkan sertifikat resmi dan akses eksklusif ke resources premium kami.'
  },
  {
    id: 4,
    title: 'Peningkatan Security: Sertifikasi SOC 2 Type II Diraih',
    date: '10 Mei 2026',
    author: 'Tim Security IamJOS',
    authorRole: 'Security Team',
    category: 'Keamanan',
    readTime: '6 menit',
    image: '/images/news-4.jpg',
    content: 'IamJOS dengan bangga mengumumkan bahwa kami telah meraih sertifikasi keamanan SOC 2 Type II. Pencapaian ini membuktikan komitmen kami terhadap keamanan data dan privasi pengguna dengan standar internasional tertinggi. SOC 2 (Service Organization Control) Type II adalah sertifikasi keamanan yang paling ketat, menunjukkan bahwa IamJOS telah melewati audit independen terhadap berbagai aspek keamanan.\n\nSertifikasi ini mencakup penilaian menyeluruh atas sistem keamanan, availability, processing integrity, confidentiality, dan privacy kami. Dengan pencapaian ini, kami berkomitmen untuk terus meningkatkan standar keamanan platform demi perlindungan maksimal data penelitian Anda.'
  }
]

export default function NewsDetail({ params }: { params: { id: string } }) {
  const newsId = parseInt(params.id)
  const news = getAllNews().find(n => n.id === newsId)

  if (!news) {
    return (
      <main className="min-h-screen bg-background pt-16">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Berita Tidak Ditemukan</h1>
          <Link href="/#news" className="text-accent hover:underline">
            Kembali ke daftar berita
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const allNews = getAllNews()
  const relatedNews = allNews.filter(n => n.id !== newsId).slice(0, 2)

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
            Kembali ke Berita
          </Link>

          {/* Hero Image with Overlay */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-primary/20 to-accent/20">
            <Image
              src={news.image}
              alt={news.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Article Header */}
          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-1 rounded-full">
                {news.category}
              </span>
              <span className="text-sm text-foreground/60 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {news.date}
              </span>
              <span className="text-sm text-foreground/60 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {news.readTime}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary leading-tight text-pretty">
              {news.title}
            </h1>

            <div className="flex items-center gap-4 pt-6 border-t border-primary/20">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                {news.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-foreground">{news.author}</p>
                <p className="text-sm text-foreground/60">{news.authorRole}</p>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed prose prose-lg max-w-none">
            {news.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-foreground/80">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related News */}
          <div className="mt-16 pt-8 border-t border-primary/20 space-y-6">
            <h3 className="text-2xl font-serif font-bold text-primary">
              Berita Terkait Lainnya
            </h3>
            {relatedNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedNews.map((relatedNewsItem) => (
                  <Link
                    key={relatedNewsItem.id}
                    href={`/news/${relatedNewsItem.id}`}
                    className="group p-6 bg-white/50 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-accent/30 transition-all duration-300 hover:shadow-md"
                  >
                    <p className="text-sm text-accent font-semibold mb-2">{relatedNewsItem.category}</p>
                    <h3 className="font-semibold text-primary group-hover:text-accent transition-colors line-clamp-2">
                      {relatedNewsItem.title}
                    </h3>
                    <p className="text-xs text-foreground/60 mt-2">{relatedNewsItem.date}</p>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center space-y-4">
            <h3 className="text-2xl font-serif font-bold text-primary">
              Dapatkan Update Berita Terbaru
            </h3>
            <p className="text-foreground/70">
              Berlangganan newsletter kami untuk mendapatkan informasi eksklusif langsung ke inbox
            </p>
            <Link
              href="/#newsletter"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Berlangganan Sekarang
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
