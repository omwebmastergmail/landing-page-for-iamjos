'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    id: 1,
    question: 'Bagaimana IamJOS dibandingkan dengan Open Journal Systems (OJS)?',
    answer: 'IamJOS adalah alternatif modern berbasis cloud untuk OJS yang menawarkan pengindeksan Google Scholar dan Scopus langsung dari paket, kolaborasi real-time, backup otomatis, dan analitik lanjutan. Sementara OJS memerlukan self-hosting dan konfigurasi ekstensif, IamJOS sepenuhnya dikelola dan siap digunakan segera.'
  },
  {
    id: 2,
    question: 'Apakah IamJOS kompatibel dengan pengindeksan Google Scholar?',
    answer: 'Ya, IamJOS sepenuhnya dioptimalkan untuk pengindeksan Google Scholar dengan kepatuhan metadata otomatis, format XML yang tepat, dan penanda skema. Jurnal Anda akan dapat ditemukan oleh Google Scholar dalam hitungan hari setelah publikasi.'
  },
  {
    id: 3,
    question: 'Dapatkah IamJOS menangani Scopus dan pelacakan sitasi?',
    answer: 'Tentu saja. IamJOS terintegrasi langsung dengan Scopus dan menyediakan pelacakan sitasi dan analitik real-time. Anda dapat memantau dampak sitasi, melacak kinerja artikel, dan mengakses metrik terperinci melalui dasbor kami.'
  },
  {
    id: 4,
    question: 'Bagaimana manajemen DOI bekerja di IamJOS?',
    answer: 'IamJOS menyediakan penugasan DOI otomatis melalui Crossref. Setiap artikel yang diterbitkan di IamJOS secara otomatis menerima DOI unik, membuat konten Anda dapat ditemukan dan dikutip secara global. Manajemen DOI disertakan dalam semua paket.'
  },
  {
    id: 5,
    question: 'Bagaimana dengan migrasi data dari OJS?',
    answer: 'IamJOS mendukung migrasi mulus dari Open Journal Systems. Tim migrasi kami akan menangani transfer semua data jurnal, artikel, edisi, dan akun pengguna Anda dengan downtime nol dan integritas data penuh.'
  },
  {
    id: 6,
    question: 'Apakah IamJOS aman dan patuh terhadap standar?',
    answer: 'Ya. IamJOS memenuhi GDPR, CCPA, dan standar akademik internasional. Kami menggunakan enkripsi tingkat bank, backup otomatis, perlindungan DDoS, dan audit keamanan reguler. Semua data disimpan di infrastruktur cloud yang aman dan tersertifikasi.'
  },
  {
    id: 7,
    question: 'Dapatkah saya menyesuaikan antarmuka jurnal?',
    answer: 'Tentu saja. IamJOS menawarkan solusi white-label dengan tema, logo, warna, dan tata letak yang dapat disesuaikan. Anda dapat membuatnya terlihat persis seperti merek Anda sambil mempertahankan backend kami yang canggih.'
  },
  {
    id: 8,
    question: 'Bagaimana model penetapan harga?',
    answer: 'IamJOS menawarkan harga fleksibel berdasarkan ukuran jurnal dan fitur yang Anda butuhkan. Kami menyediakan uji coba gratis, paket startup, dan solusi enterprise. Hubungi tim penjualan kami untuk penawaran khusus berdasarkan kebutuhan Anda.'
  },
  {
    id: 9,
    question: 'Bagaimana dukungan pelanggan disediakan?',
    answer: 'Kami menyediakan dukungan 24/7 melalui email, live chat, dan telepon. Manajer akun khusus ditugaskan untuk pelanggan enterprise. Kami juga menawarkan dokumentasi komprehensif dan tutorial video.'
  },
  {
    id: 10,
    question: 'Dapatkah saya mengintegrasikan IamJOS dengan sistem yang ada?',
    answer: 'Ya. IamJOS menyediakan REST API yang kuat untuk integrasi dengan sistem yang ada, platform LMS, dan repositori institusional. Dokumentasi API lengkap tersedia untuk semua pelanggan.'
  }
]

export function FAQSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-foreground/60">
            Semua yang perlu Anda ketahui tentang IamJOS
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition-colors"
            >
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-primary/2 to-accent/2 hover:from-primary/5 hover:to-accent/5 transition-colors text-left"
              >
                <h3 className="font-semibold text-foreground text-lg">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-primary transition-transform flex-shrink-0 ml-4',
                    expandedId === faq.id && 'rotate-180'
                  )}
                />
              </button>

              {expandedId === faq.id && (
                <div className="px-6 py-4 bg-background border-t border-primary/20">
                  <p className="text-foreground/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center space-y-4">
          <h3 className="text-2xl font-serif font-bold text-primary">
            Masih ada pertanyaan?
          </h3>
          <p className="text-foreground/60 mb-6">
            Tim kami siap membantu. Hubungi kami untuk dukungan personal.
          </p>
          <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Hubungi Dukungan
          </button>
        </div>
      </div>
    </section>
  )
}
