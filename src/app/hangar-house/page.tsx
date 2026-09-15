'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import siteData from '../../../data/site.json'

const photos = [
  // Exterior & field
  { src: '/hangar-house/web_DSC_0267.jpg', thumb: '/hangar-house/thumbs/DSC_0267_thumb.jpg', alt: 'Exterior of The Hangar House at Platte Valley Airpark' },
  { src: '/hangar-house/web_DSC_0276.jpg', thumb: '/hangar-house/thumbs/DSC_0276_thumb.jpg', alt: 'Airpark and surrounding Colorado countryside' },
  { src: '/hangar-house/web_DSC_0319.jpg', thumb: '/hangar-house/thumbs/DSC_0319_thumb.jpg', alt: 'Front exterior of The Hangar House' },
  { src: '/hangar-house/web_DSC_0320.jpg', thumb: '/hangar-house/thumbs/DSC_0320_thumb.jpg', alt: 'Side exterior and patio area' },
  { src: '/hangar-house/web_DSC_0322.jpg', thumb: '/hangar-house/thumbs/DSC_0322_thumb.jpg', alt: 'Hangar House exterior, wide view' },
  { src: '/hangar-house/web_DSC_0318.jpg', thumb: '/hangar-house/thumbs/DSC_0318_thumb.jpg', alt: 'Aircraft parked beside the hangar on the field' },
  { src: '/hangar-house/web_IMG_5867.jpg', thumb: '/hangar-house/thumbs/IMG_5867_thumb.jpg', alt: 'Vintage biplane on the ramp at 18V' },
  // Deck & outdoor
  { src: '/hangar-house/web_DSC_0315.jpg', thumb: '/hangar-house/thumbs/DSC_0315_thumb.jpg', alt: 'Deck with red chairs and open farmland views' },
  { src: '/hangar-house/web_DSC_0316.jpg', thumb: '/hangar-house/thumbs/DSC_0316_thumb.jpg', alt: 'Deck with bistro table and Colorado countryside' },
  // Living room & common areas
  { src: '/hangar-house/web_DSC_0288.jpg', thumb: '/hangar-house/thumbs/DSC_0288_thumb.jpg', alt: 'Living room with stone fireplace and sectional sofa' },
  { src: '/hangar-house/web_DSC_0290.jpg', thumb: '/hangar-house/thumbs/DSC_0290_thumb.jpg', alt: 'Open-concept living room and kitchen' },
  { src: '/hangar-house/web_DSC_0292.jpg', thumb: '/hangar-house/thumbs/DSC_0292_thumb.jpg', alt: 'Dining area with large windows and living room beyond' },
  // Kitchen
  { src: '/hangar-house/web_DSC_0293.jpg', thumb: '/hangar-house/thumbs/DSC_0293_thumb.jpg', alt: 'Kitchen with island, bar stools, and wood accents' },
  { src: '/hangar-house/web_DSC_0294.jpg', thumb: '/hangar-house/thumbs/DSC_0294_thumb.jpg', alt: 'Kitchen island with stone fireplace visible' },
  { src: '/hangar-house/web_DSC_0305.jpg', thumb: '/hangar-house/thumbs/DSC_0305_thumb.jpg', alt: 'Kitchen detail and cabinetry' },
  { src: '/hangar-house/web_DSC_0306.jpg', thumb: '/hangar-house/thumbs/DSC_0306_thumb.jpg', alt: 'Kitchen counter and appliances' },
  // Bedrooms
  { src: '/hangar-house/web_DSC_0295.jpg', thumb: '/hangar-house/thumbs/DSC_0295_thumb.jpg', alt: 'King bedroom with natural light' },
  { src: '/hangar-house/web_DSC_0296.jpg', thumb: '/hangar-house/thumbs/DSC_0296_thumb.jpg', alt: 'King bedroom corner detail' },
  { src: '/hangar-house/web_DSC_0297.jpg', thumb: '/hangar-house/thumbs/DSC_0297_thumb.jpg', alt: 'King bedroom with ceiling fan and closet' },
  { src: '/hangar-house/web_DSC_0298.jpg', thumb: '/hangar-house/thumbs/DSC_0298_thumb.jpg', alt: 'Bunk bedroom with twin bunk and desk' },
  { src: '/hangar-house/web_DSC_0307.jpg', thumb: '/hangar-house/thumbs/DSC_0307_thumb.jpg', alt: 'Bedroom detail' },
  { src: '/hangar-house/web_DSC_0308.jpg', thumb: '/hangar-house/thumbs/DSC_0308_thumb.jpg', alt: 'Bedroom with natural light' },
  { src: '/hangar-house/web_DSC_0309.jpg', thumb: '/hangar-house/thumbs/DSC_0309_thumb.jpg', alt: 'Bedroom corner and furnishings' },
  // Bathrooms
  { src: '/hangar-house/web_DSC_0299.jpg', thumb: '/hangar-house/thumbs/DSC_0299_thumb.jpg', alt: 'Bathroom with wood vanity' },
  { src: '/hangar-house/web_DSC_0300.jpg', thumb: '/hangar-house/thumbs/DSC_0300_thumb.jpg', alt: 'Walk-in tiled shower' },
  { src: '/hangar-house/web_DSC_0301.jpg', thumb: '/hangar-house/thumbs/DSC_0301_thumb.jpg', alt: 'Bathroom vanity with arched mirror' },
  { src: '/hangar-house/web_DSC_0302.jpg', thumb: '/hangar-house/thumbs/DSC_0302_thumb.jpg', alt: 'Half bath' },
  { src: '/hangar-house/web_DSC_0303.jpg', thumb: '/hangar-house/thumbs/DSC_0303_thumb.jpg', alt: 'Full bathroom with shower and vanity' },
  // Additional rooms & details
  { src: '/hangar-house/web_DSC_0310.jpg', thumb: '/hangar-house/thumbs/DSC_0310_thumb.jpg', alt: 'Interior detail and workspace' },
  { src: '/hangar-house/web_DSC_0311.jpg', thumb: '/hangar-house/thumbs/DSC_0311_thumb.jpg', alt: 'Living area detail' },
  { src: '/hangar-house/web_DSC_0312.jpg', thumb: '/hangar-house/thumbs/DSC_0312_thumb.jpg', alt: 'Interior detail' },
  { src: '/hangar-house/web_DSC_0313.jpg', thumb: '/hangar-house/thumbs/DSC_0313_thumb.jpg', alt: 'Interior room detail' },
]

export default function HangarHousePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (i: number) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const prevPhoto = () => setLightboxIndex(i => i !== null ? (i - 1 + photos.length) % photos.length : null)
  const nextPhoto = () => setLightboxIndex(i => i !== null ? (i + 1) % photos.length : null)

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Nav />
      <main className="flex-grow">

        {/* Hero */}
        <section
          className="relative bg-cover bg-center flex items-end justify-start text-white py-20 px-4 sm:px-6 pt-36 md:pt-48 pb-12 md:pb-16"
          style={{ backgroundImage: `url(/hangar-house/web_DSC_0315.jpg)`, minHeight: '70vh' }}
        >
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 max-w-3xl w-full">
            <p className="text-airpark-red text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">Stay at 18V</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight mb-3">The Hangar House</h1>
            <p className="text-base sm:text-lg text-gray-200 mb-6">Platte Valley Airpark · Fort Lupton, CO · 40 min north of Denver</p>
            <a
              href="https://airbnb.com/h/18vhangarhouse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-airpark-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              Book on Airbnb →
            </a>
          </div>
        </section>

        {/* Quick stats bar */}
        <section className="bg-dark-charcoal py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
              <div className="py-1"><span className="block text-airpark-red font-bold text-lg sm:text-xl leading-snug">1,704 sq ft</span><span className="text-xs sm:text-sm">Ranch-style home</span></div>
              <div className="py-1"><span className="block text-airpark-red font-bold text-lg sm:text-xl leading-snug">Sleeps 5</span><span className="text-xs sm:text-sm">2 bed · 2.5 bath</span></div>
              <div className="py-1"><span className="block text-airpark-red font-bold text-lg sm:text-xl leading-snug">On the Field</span><span className="text-xs sm:text-sm">Direct runway access</span></div>
              <div className="py-1"><span className="block text-airpark-red font-bold text-lg sm:text-xl leading-snug">Pets Welcome</span><span className="text-xs sm:text-sm">Dogs on leash</span></div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="bg-white py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <p className="text-sm font-bold tracking-widest uppercase text-airpark-red mb-3">About the property</p>
            <h2 className="text-3xl font-serif font-bold text-dark-charcoal mb-6">Wide open skies, Colorado countryside, and a runway right out the door.</h2>
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                The Hangar House is a fully refurbished 1,704 sq ft ranch-style home built in 1942, full of character, sitting right at Platte Valley Airpark (18V) on Colorado&apos;s Front Range. Whether you&apos;re a pilot flying in for the weekend or a family looking for something truly different, this is your base camp.
              </p>
              <p>
                Two bedrooms sleep up to 4 guests: one king bed and one bunk bed with two twins. The living room couch can accommodate a 5th guest if needed. 2.5 baths. A large kitchen with two ovens is ready for serious cooking or a big crew breakfast before a morning flight. Washer/dryer on site. Two TVs, Roku, DVD player, and WiFi keep everyone entertained on the ground.
              </p>
              <p>
                Cold Colorado nights? Light up the fireplace. Warm days? A moveable AC unit keeps things comfortable. Got work to do between flights? There&apos;s a dedicated desk with monitor. A proper workstation, not just a laptop on the kitchen table.
              </p>
            </div>
          </div>
        </section>

        {/* Pilot section */}
        <section className="bg-gray-50 py-16 px-4 border-t border-b border-gray-100">
          <div className="container mx-auto max-w-3xl">
            <p className="text-sm font-bold tracking-widest uppercase text-airpark-red mb-3">For pilots</p>
            <h2 className="text-3xl font-serif font-bold text-dark-charcoal mb-8">Fly in. Step off the plane. You&apos;re home.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-3">✈️</div>
                <h3 className="font-serif font-bold text-dark-charcoal mb-1">Tie-Down Included</h3>
                <p className="text-gray-600 text-sm">Aircraft tie-down is included with your stay. No extra fees, no hassle.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-3">🏗️</div>
                <h3 className="font-serif font-bold text-dark-charcoal mb-1">Hangar Space</h3>
                <p className="text-gray-600 text-sm">Temporary hangar space may be available depending on aircraft size and current availability. Just reach out and we&apos;ll sort it out.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-3">🛬</div>
                <h3 className="font-serif font-bold text-dark-charcoal mb-1">Direct Runway Access</h3>
                <p className="text-gray-600 text-sm">4,100 ft paved main runway and a 2,500 ft grass strip, right out the door. Perfect for taildraggers and backcountry-ready aircraft.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-3">⛽</div>
                <h3 className="font-serif font-bold text-dark-charcoal mb-1">Self-Serve 100LL · 24/7</h3>
                <p className="text-gray-600 text-sm">On-field fuel, credit card, around the clock. CTAF 122.9. No landing fee.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="bg-white py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <p className="text-sm font-bold tracking-widest uppercase text-airpark-red mb-3">What&apos;s included</p>
            <h2 className="text-3xl font-serif font-bold text-dark-charcoal mb-8">The Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 text-gray-700">
              {[
                '1,704 sq ft · Ranch style · Built 1942, fully refurbished',
                'Sleeps up to 5: 1 King bed + Bunk bed (2 twins) + living room couch',
                '2.5 bathrooms',
                'Large kitchen with 2 ovens',
                'Washer / Dryer',
                'WiFi · Roku · DVD player · 2 TVs',
                'Dedicated desk + monitor (workstation)',
                'Stone fireplace',
                'Moveable AC unit',
                'Pet-friendly — dogs on leash',
                'Aircraft tie-down included',
                'Temporary hangar space available (size & availability dependent)',
                'Direct runway access: 4,100 ft paved + 2,500 ft grass',
                'On-field 100LL self-serve fuel, 24/7',
                'Open year-round',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="text-airpark-red font-bold mt-0.5">✓</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo gallery */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <p className="text-sm font-bold tracking-widest uppercase text-airpark-red mb-3 text-center">Photos</p>
            <h2 className="text-3xl font-serif font-bold text-dark-charcoal mb-10 text-center">Take a look around</h2>
            <div className="columns-2 md:columns-3 lg:columns-4" style={{ columnGap: '0.75rem' }}>
              {photos.map((photo, i) => (
                <div
                  key={photo.src}
                  className="break-inside-avoid cursor-pointer overflow-hidden rounded-lg mb-3"
                  onClick={() => openLightbox(i)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.thumb}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-auto hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="bg-dark-charcoal text-white py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold tracking-widest uppercase text-airpark-red mb-3">Location</p>
            <h2 className="text-3xl font-serif font-bold mb-6">Platte Valley Airpark (18V)</h2>
            <p className="text-gray-300 mb-2">7507 County Road 39 · Fort Lupton, CO 80621</p>
            <p className="text-gray-300 mb-8">40 minutes north of Denver · CTAF 122.9</p>
            <a
              href="https://airbnb.com/h/18vhangarhouse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-airpark-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              Book on Airbnb →
            </a>
          </div>
        </section>

      </main>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-2"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-3 right-3 text-white text-2xl font-bold bg-black/40 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 z-10"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ✕
          </button>
          {/* Prev */}
          <button
            className="absolute left-2 sm:left-4 text-white text-4xl font-bold bg-black/40 rounded-full w-11 h-11 flex items-center justify-center hover:bg-black/70 z-10"
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            aria-label="Previous photo"
          >
            ‹
          </button>
          {/* Next */}
          <button
            className="absolute right-2 sm:right-4 text-white text-4xl font-bold bg-black/40 rounded-full w-11 h-11 flex items-center justify-center hover:bg-black/70 z-10"
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            aria-label="Next photo"
          >
            ›
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos[lightboxIndex].src}
            alt={photos[lightboxIndex].alt}
            className="max-h-[88vh] max-w-[88vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-3 text-gray-400 text-xs sm:text-sm">
            {lightboxIndex + 1} / {photos.length}
          </p>
        </div>
      )}

      <Footer site={siteData} />
    </div>
  )
}
