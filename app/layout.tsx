import type { Metadata } from 'next'
import { Geist, Geist_Mono, Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: 'IamJOS - Sistem Manajemen Jurnal Terintegrasi',
  description: 'Platform publikasi jurnal premium dengan kepatuhan Google Scholar, Scopus, Crossref, dan DOI. Alternatif profesional OJS dengan kemampuan pengindeksan lanjutan. Didukung oleh APJI (Asosiasi Pengelola Jurnal Indonesia).',
  keywords: 'manajemen jurnal, platform publikasi, Google Scholar, Scopus, Crossref, DOI, alternatif OJS, APJI',
  authors: [{ name: 'IamJOS' }, { name: 'APJI' }],
  generator: 'v0.app',
  openGraph: {
    title: 'IamJOS - Sistem Manajemen Jurnal Terintegrasi',
    description: 'Platform publikasi jurnal premium dengan pengindeksan dan kepatuhan lanjutan',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth bg-background" style={{ colorScheme: 'light' }}>
      <body className={`${_plusJakarta.variable} ${_playfair.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
