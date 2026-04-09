'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function ThanksPage() {
  useEffect(() => {
    // Fire GA4 newsletter_signup conversion event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'newsletter_signup', {
        event_category: 'engagement',
        event_label: 'email_list',
        value: 1,
      })
    }
  }, [])

  return (
    <main className="min-h-screen bg-dark-charcoal flex items-center justify-center text-center px-4">
      <div className="max-w-xl">
        <div className="text-6xl mb-6">✈️</div>
        <h1 className="text-4xl font-serif font-bold text-white mb-4">
          You&apos;re in the loop.
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Welcome to the Platte Valley Airpark community. You&apos;ll hear from us when
          there&apos;s something worth knowing — fuel prices, events, field updates, and
          the occasional sunrise departure story.
        </p>
        <Link
          href="/"
          className="bg-airpark-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block"
        >
          Back to 18V
        </Link>
      </div>
    </main>
  )
}
