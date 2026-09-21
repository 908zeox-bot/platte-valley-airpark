'use client'

import { useState, useRef, useEffect } from 'react'

const MailingList = () => {
  // Mailchimp form with redirect to /thanks for GA4 conversion tracking
  const mailchimpUrl = "https://plattevalleyairpark.us18.list-manage.com/subscribe/post?u=a1e8b622805331a4d6ccabc5b&id=278d3a6390"

  const [honeypot, setHoneypot] = useState('')
  const formLoadTime = useRef<number>(0)

  useEffect(() => {
    formLoadTime.current = Date.now()
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Timing check: reject submissions under 3 seconds (bot behavior)
    if (Date.now() - formLoadTime.current < 3000) {
      e.preventDefault()
      return
    }
    // Honeypot check: bots fill hidden fields; humans never see this input
    if (honeypot) {
      e.preventDefault()
      return
    }
    // All checks pass — allow natural form submission to Mailchimp
  }

  return (
    <section className="bg-dark-charcoal py-16 text-white text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl font-serif font-bold mb-4">Stay in the Loop</h2>
        <p className="text-lg mb-8">
          Fuel prices, events, and community news. Straight to your inbox.
        </p>
        <form
          action={mailchimpUrl}
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_self"
          noValidate
          onSubmit={handleSubmit}
        >
          {/* Redirect to /thanks so GA4 conversion event fires */}
          <input type="hidden" name="REDIRECT" value="https://www.plattevalleyairpark.com/thanks" />
          {/* Honeypot field — hidden from humans via CSS positioning; bots fill it in */}
          <input
            type="text"
            name="website"
            autoComplete="off"
            tabIndex={-1}
            aria-hidden="true"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            style={{
              position: 'absolute',
              left: '-9999px',
              width: '1px',
              height: '1px',
              overflow: 'hidden',
              opacity: 0,
              pointerEvents: 'none',
            }}
          />
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              placeholder="Your email address"
              required
              className="w-full sm:w-2/3 p-3 rounded-lg text-dark-charcoal focus:outline-none focus:ring-2 focus:ring-airpark-red"
            />
            <button
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="w-full sm:w-1/3 bg-airpark-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Subscribe
            </button>
          </div>
          {/* Mailchimp required anti-bot field — do not remove */}
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="text" name="b_a1e8b622805331a4d6ccabc5b_278d3a6390" tabIndex={-1} value="" readOnly />
          </div>
        </form>
      </div>
    </section>
  )
}

export default MailingList
