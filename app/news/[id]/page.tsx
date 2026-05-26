import { ArrowLeft, Calendar } from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const getAllNews = () => [
  {
    id: 1,
    title: 'IamJOS Resmi Didukung APJI, Platform Jurnal Terdepan di Indonesia',
    date: '25 Mei 2026',
    author: 'Tim IamJOS',
    category: 'Pengumuman',
    readTime: '5 menit',
    content: 'Asosiasi Pengelola Jurnal Indonesia (APJI) secara resmi memberikan dukungan penuh kepada IamJOS sebagai platform manajemen jurnal modern dan terpercaya. Dukungan ini menjadi bukti komitmen APJI dalam mendorong transformasi digital dalam ekosistem penerbitan jurnal akademik Indonesia. Kerjasama antara IamJOS dan APJI dirancang untuk memberikan manfaat maksimal bagi para pengelola jurnal di seluruh Indonesia.'
  },
  {
    id: 2,
    title: 'Integrasi Scopus Sempurna: Tingkatkan Visibilitas Jurnal Anda',
    date: '20 Mei 2026',
    author: 'Tim Teknis IamJOS',
    category: 'Fitur Baru',
    readTime: '7 menit',
    content: 'IamJOS dengan bangga mengumumkan integrasi seamless dengan Scopus, salah satu database akademik terbesar dan paling terpercaya di dunia. Integrasi ini memungkinkan setiap artikel yang dipublikasikan di platform IamJOS untuk langsung terindeks dan dapat ditemukan oleh jutaan peneliti global. Dengan integrasi Scopus yang telah dioptimalkan, proses pengindeksan menjadi lebih cepat dan efisien.'
  },
  {
    id: 3,
    title: 'Webinar Gratis: Optimalisasi Pengindeksan Journal di IamJOS',
    date: '15 Mei 2026',
    author: 'Event Team IamJOS',
    category: 'Event',
    readTime: '4 menit',
    content: 'IamJOS mengundang Anda untuk menghadiri webinar gratis eksklusif tentang optimalisasi pengindeksan jurnal. Event ini dirancang khusus untuk para pengelola jurnal yang ingin meningkatkan visibilitas dan impact factor publikasi mereka. Topik pembahasan meliputi best practices dalam submission dan metadata optimization, strategi meningkatkan citation rate, dan cara memaksimalkan Google Scholar indexing.'
  },
  {
    id: 4,
    title: 'Peningkatan Security: Sertifikasi SOC 2 Type II Diraih',
    date: '10 Mei 2026',
    author: 'Tim Security IamJOS',
    category: 'Keamanan',
    readTime: '6 menit',
    content: 'IamJOS dengan bangga mengumumkan bahwa kami telah meraih sertifikasi keamanan SOC 2 Type II. Pencapaian ini membuktikan komitmen kami terhadap keamanan data dan privasi pengguna dengan standar internasional tertinggi. SOC 2 (Service Organization Control) Type II adalah sertifikasi keamanan yang paling ketat, menunjukkan bahwa IamJOS telah melewati audit independen terhadap berbagai aspek keamanan.'
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
      
      <article className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/#news"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Berita
          </Link>

          {/* Hero Image */}
          <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-8" />

          {/* Article Header */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-1 rounded-full">
                {news.category}
              </span>
              <span className="text-sm text-foreground/60 flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {news.date}
              </span>
              <span className="text-sm text-foreground/60">{news.readTime}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary leading-tight">
              {news.title}
            </h1>

            <div className="flex items-center gap-4 pt-4 border-t border-primary/20">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                {news.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-foreground">{news.author}</p>
                <p className="text-sm text-foreground/60">{news.date}</p>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/80 leading-relaxed whitespace-pre-wrap">
              {news.content}
            </p>
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
