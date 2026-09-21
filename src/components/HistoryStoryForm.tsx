'use client'

import { useState, useRef, useEffect } from 'react'

const HistoryStoryForm = () => {
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
    // All checks pass — allow Netlify form submission to proceed
  }

  return (
    <form
      name="history-stories"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/thanks/"
      className="space-y-5"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="history-stories" />
      {/* Netlify server-side honeypot field — required by Netlify spam filtering */}
      <input type="hidden" name="bot-field" />
      {/* Client-side honeypot — hidden from humans via CSS positioning; bots fill it in */}
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-airpark-red"
            placeholder="Pilot name or handle"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="email">Email (optional)</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-airpark-red"
            placeholder="So we can follow up"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="story">Your Story or Memory</label>
        <textarea
          id="story"
          name="story"
          required
          rows={6}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-airpark-red resize-y"
          placeholder="Tell us about your connection to 18V: a first solo, a memorable flight, a person who made this place what it is..."
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="bg-airpark-red text-white font-bold px-8 py-4 rounded-lg hover:bg-red-700 transition-colors"
        >
          Share Your Story
        </button>
      </div>
    </form>
  )
}

export default HistoryStoryForm
