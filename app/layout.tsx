import type { Metadata } from 'next'
import { Geist, Geist_Mono, Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: 'IamJOS - Integrated Journal Management System',
  description: 'Premium journal publication platform with Google Scholar, Scopus, Crossref, and DOI compliance. Professional alternative to OJS with advanced indexing capabilities.',
  keywords: 'journal management, publication platform, Google Scholar, Scopus, Crossref, DOI, OJS alternative',
  authors: [{ name: 'IamJOS' }],
  generator: 'v0.app',
  openGraph: {
    title: 'IamJOS - Integrated Journal Management System',
    description: 'Premium journal publication platform with advanced indexing and compliance',
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
    <html lang="en" className="scroll-smooth bg-background" style={{ colorScheme: 'light' }}>
      <body className={`${_plusJakarta.variable} ${_playfair.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
