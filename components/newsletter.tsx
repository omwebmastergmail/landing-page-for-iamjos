'use client'

import { useState } from 'react'
import { Mail, Send } from 'lucide-react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Save to localStorage for prototyping
      const subscribers = JSON.parse(localStorage.getItem('iamjos_subscribers') || '[]')
      subscribers.push({ email, date: new Date().toISOString() })
      localStorage.setItem('iamjos_subscribers', JSON.stringify(subscribers))
      setSubscribed(true)
      setEmail('')
      // Reset after 3 seconds
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-primary/5">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-12 sm:p-16 text-white text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold">
              Stay Updated
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Get the latest updates on journal publishing trends, new features, and academic insights delivered to your inbox.
            </p>
          </div>

          {subscribed ? (
            <div className="max-w-md mx-auto p-6 rounded-2xl bg-white/20 border border-white/30 text-center space-y-2">
              <p className="text-white font-semibold">✓ Thanks for subscribing!</p>
              <p className="text-white/80 text-sm">Check your email for confirmation.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground opacity-50" />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-white/20 hover:bg-white/30 border border-white/30 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Subscribe</span>
                </button>
              </div>
              <p className="text-xs text-white/70 mt-3">
                We&apos;ll never share your email. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
