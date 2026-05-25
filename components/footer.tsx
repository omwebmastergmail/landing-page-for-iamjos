'use client'

import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { label: 'Fitur', href: '#features' },
      { label: 'Harga', href: '#pricing' },
      { label: 'Keamanan', href: '#security' },
      { label: 'Roadmap', href: '#roadmap' }
    ],
    company: [
      { label: 'Tentang Kami', href: '#about' },
      { label: 'Blog', href: '#blog' },
      { label: 'Karir', href: '#careers' },
      { label: 'Hubungi', href: '#contact' }
    ],
    resources: [
      { label: 'Dokumentasi', href: '#docs' },
      { label: 'Referensi API', href: '#api' },
      { label: 'Pusat Bantuan', href: '#help' },
      { label: 'Komunitas', href: '#community' }
    ],
    legal: [
      { label: 'Kebijakan Privasi', href: '#privacy' },
      { label: 'Syarat Layanan', href: '#terms' },
      { label: 'Kebijakan Cookie', href: '#cookies' },
      { label: 'Kepatuhan', href: '#compliance' }
    ]
  }

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold">IamJOS</h3>
              <p className="text-sm text-white/70">
                Manajemen jurnal premium untuk dunia akademik modern.
              </p>
              <p className="text-xs text-white/60 font-medium">
                Didukung oleh APJI<br/>
                (Asosiasi Pengelola Jurnal Indonesia)
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#twitter" className="hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#linkedin" className="hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#github" className="hover:text-accent transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#email" className="hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold">Produk</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Perusahaan</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Sumber Daya</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Hukum</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>
            © {currentYear} IamJOS. Semua hak dilindungi. | Integrated Management of Journal System
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-accent transition-colors">
              Privasi
            </a>
            <a href="#terms" className="hover:text-accent transition-colors">
              Syarat
            </a>
            <a href="#cookies" className="hover:text-accent transition-colors">
              Cookie
            </a>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-xs text-white/50 text-center mb-4">
            Kepatuhan Tingkat Enterprise
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-white/60">
            <span>✓ GDPR Patuh</span>
            <span>✓ ISO 27001</span>
            <span>✓ SOC 2 Tersertifikasi</span>
            <span>✓ CCPA Siap</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
