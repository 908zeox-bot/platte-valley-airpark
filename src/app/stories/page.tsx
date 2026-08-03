import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import siteData from '../../../data/site.json'
import storiesData from '../../../data/stories.json'

export const metadata: Metadata = {
  title: 'Community Stories | Platte Valley Airpark (18V)',
  description: 'Pilots share their memories, first solos, and stories from 60 years of flying at Platte Valley Airpark.',
  openGraph: {
    title: 'Community Stories | 18V',
    description: 'Sixty years of flight. A hundred stories. Here are ours.',
  },
}

export default function StoriesPage() {
  const stories = storiesData.stories

  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 bg-white">
        <div className="container mx-auto px-4">

          {/* Breadcrumb */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-sm text-gray-400 uppercase tracking-wider">
              <Link href="/history" className="hover:text-airpark-red">Our History</Link>
              <span className="mx-2">›</span>
              Community Stories
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">From the community</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark-charcoal leading-tight mb-2">
                Your Stories
              </h1>
              <div className="w-12 h-1 bg-airpark-red mt-4 mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sixty years of flight. Hundreds of pilots. These are their words.
              </p>
            </div>

            {stories.length === 0 ? (
              <div className="bg-gray-50 rounded-xl p-12 text-center">
                <p className="text-2xl mb-4">✈️</p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Stories are coming in. Check back soon, or be the first.
                </p>
                <Link
                  href="/history#share"
                  className="inline-block bg-airpark-red text-white font-bold px-8 py-4 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Share Your Story
                </Link>
              </div>
            ) : (
              <div className="space-y-12">
                {stories.map((story: {
                  id: string
                  name: string
                  date?: string
                  excerpt?: string
                  body: string
                  era?: string
                }) => (
                  <article key={story.id} className="border-b border-gray-100 pb-12 last:border-0">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                        ✈️
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-bold text-dark-charcoal">{story.name}</span>
                          {story.era && (
                            <span className="text-xs text-gray-400 uppercase tracking-wide bg-gray-100 px-2 py-1 rounded">
                              {story.era}
                            </span>
                          )}
                          {story.date && (
                            <span className="text-sm text-gray-400">{story.date}</span>
                          )}
                        </div>
                        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed font-serif">
                          {story.body.split('\n\n').map((para: string, i: number) => (
                            <p key={i}>{para}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* CTA to submit */}
            <div className="mt-16 bg-gray-50 rounded-xl p-8 text-center">
              <h2 className="text-xl font-serif font-bold text-dark-charcoal mb-3">Have a story to share?</h2>
              <p className="text-gray-600 mb-6">
                A first solo. A fly-in you'll never forget. Someone who shaped this community.
              </p>
              <Link
                href="/history#share"
                className="inline-block bg-airpark-red text-white font-bold px-8 py-4 rounded-lg hover:bg-red-700 transition-colors"
              >
                Share Your Story →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer site={siteData} />
    </>
  )
}
