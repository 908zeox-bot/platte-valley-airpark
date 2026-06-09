import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import siteData from '../../../data/site.json'

export const metadata: Metadata = {
  title: 'Our History | Platte Valley Airpark (18V)',
  description: 'The story of Platte Valley Airpark — from a rancher\'s dream of trains and planes in 1966 to one of Colorado\'s most beloved GA communities.',
  openGraph: {
    title: 'The Story of 18V',
    description: 'A train, a dream, and a field that\'s been flying for 60 years.',
    images: [{ url: 'https://deltazulullc.box.com/shared/static/yegw65a08twuzes3krjbe5csr5y9n8d4.jpg' }],
  },
}

export default function HistoryPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 bg-white">
        <div className="container mx-auto px-4">

          {/* Breadcrumb */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-sm text-gray-400 uppercase tracking-wider">
              <Link href="/#about" className="hover:text-airpark-red">About</Link>
              <span className="mx-2">›</span>
              Our History
            </p>
          </div>

          {/* Hero image — tower + aircraft */}
          <div className="max-w-4xl mx-auto mb-4 rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://deltazulullc.box.com/shared/static/jetukg9u6msuzpijnxit9zcrquga9y95.jpg"
              alt="The tower and aircraft on the ramp at Platte Valley Airpark"
              className="w-full h-auto"
              style={{filter: 'brightness(1.3)'}}
              loading="eager"
            />
          </div>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-center text-sm text-gray-400 italic py-2">
              The tower — built for trains, now a landmark for pilots.
            </p>
          </div>

          {/* Letter */}
          <article className="max-w-3xl mx-auto">
            <div className="mb-10">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">A Note from the General Manager</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark-charcoal leading-tight mb-2">
                The Story of 18V
              </h1>
              <div className="w-12 h-1 bg-airpark-red mt-4 mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6 font-serif">
              <p>
                I want to tell you something about this place that most people don't know.
              </p>
              <p>
                That three-story tower at the entrance — the one that's become part of the airpark's identity? It wasn't built for airplanes. It was built so a man could stand up high and watch his trains run.
              </p>
              <p>
                His name was Don Drawer. In the mid-1960s, he acquired 237 acres of Weld County farmland along the South Platte River and had a vision that went far beyond a runway. He called it the Flying D Ranch. He wanted a four-mile loop of narrow-gauge railroad track winding around the property, a replica old western town for visitors to explore, and yes — a place for planes to land too.
              </p>
              <p>
                The FAA activated the airfield in March 1966. The railroad came later. In 1973, Drawer acquired a 1926 steam locomotive — IRCA #111, a Baldwin 2-8-0 that had worked the coffee plantations of El Salvador — and brought it here to anchor the Sundown &amp; Southern Railway. It sat on this property for 29 years. It never ran.
              </p>
              <p>
                Life and finances have a way of changing plans. The western town never got built. The railroad never turned a wheel under steam here. Drawer passed away in 2000. Two years later, the estate was auctioned off.
              </p>
              <p>
                But here's the part that still gives me chills: <strong>that locomotive is still running.</strong> The Town of Breckenridge bought it at auction. History Colorado restored it. Today, IRCA #111 makes its rounds through the Rocky Mountain canyon at Georgetown Loop Railroad. You can go ride it.
              </p>
              <p>
                We've been an aviation community for 60 years. Over 100 aircraft call this field home. Pilots have learned to fly here, logged their first solos here, and built friendships here that have lasted decades. That's the living history — and it belongs to all of us.
              </p>
              <p>
                We're publishing what we've learned about this place. But the story doesn't end with what we know. It ends with what <em>you</em> know.
              </p>
              <p>
                If you have an old photo of the ramp, a story about your first flight in and out of 18V, a memory of someone who shaped this community — we want it. Use the form below to share it. We'll build this history together.
              </p>
              <p>
                It's a hell of a place. Always has been.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 mb-12">
              <p className="font-serif text-lg text-dark-charcoal">— Dave Shull</p>
              <p className="text-sm text-gray-500 mt-1">General Manager, Platte Valley Airpark</p>
            </div>

            {/* Secondary image — runway sunrise */}
            <div className="mb-16 rounded-xl overflow-hidden shadow-md">
              <img
                src="https://deltazulullc.box.com/shared/static/yegw65a08twuzes3krjbe5csr5y9n8d4.jpg"
                alt="Platte Valley Airpark — runway at sunrise"
                className="w-full h-auto"
                style={{filter: 'brightness(1.3)'}}
                loading="lazy"
              />
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-12"></div>

            {/* Community form */}
            <div id="share" className="bg-gray-50 rounded-xl p-8 md:p-12">
              <h2 className="text-2xl font-serif font-bold text-dark-charcoal mb-3">Share Your Story</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have a photo of the old ramp? A memory from your first flight in? A story about someone who shaped this community? We want to hear it. The history of 18V belongs to everyone who's ever landed here.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Stories we publish will appear on the{' '}
                <a href="/stories" className="text-airpark-red hover:underline">Community Stories page</a>.
              </p>
              <form
                name="history-stories"
                method="POST"
                data-netlify="true"
                action="/thanks"
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="history-stories" />
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
                    placeholder="Tell us about your connection to 18V — a first solo, a memorable flight, a person who made this place what it is..."
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
            </div>

          </article>
        </div>
      </main>
      <Footer site={siteData} />
    </>
  )
}
