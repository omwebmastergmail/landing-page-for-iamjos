'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [hasScrolled, setHasScrolled] = useState(false)

  const navItems = [
    { label: 'Fitur', href: '#features' },
    { label: 'Kepatuhan', href: '#compliance' },
    { label: 'Harga', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Berita', href: '#news' },
    { label: 'Event', href: '#event' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Detect scroll position for header styling
      setHasScrolled(window.scrollY > 10)

      // Detect active section
      const sections = ['features', 'compliance', 'pricing', 'faq', 'news', 'event']
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      } else {
        setActiveSection('home')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] backdrop-blur-md transition-all duration-300 ${
      hasScrolled
        ? 'bg-white border-b border-primary/20 shadow-md'
        : 'bg-white border-b border-primary/10 shadow-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-white font-serif font-bold text-lg">J</span>
          </div>
          <span className="font-serif font-bold text-lg text-primary hidden sm:inline">
            IamJOS
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.slice(1)
            return (
              <a
                key={index}
                href={item.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-primary'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent" />
                )}
              </a>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" className="text-primary border-primary/30">
            Masuk
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Coba Gratis
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-primary/10 bg-white">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <a
                  key={index}
                  href={item.href}
                  className={`block text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-foreground/70 hover:text-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            })}
            <div className="pt-4 border-t border-primary/10 space-y-3">
              <Button variant="outline" className="w-full text-primary border-primary/30">
                Masuk
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Coba Gratis
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
