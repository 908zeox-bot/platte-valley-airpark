import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import siteData from '../../../data/site.json';
import runwayReports from '../../../data/runway-reports.json';

export const metadata: Metadata = {
  title: 'From the GM | Platte Valley Airpark (18V)',
  description: 'Personal updates from Dave Shull, General Manager of Platte Valley Airpark. What\'s happening at 18V — straight from the field.',
};

const gmLetters = (runwayReports as any[]).filter((r: any) => r.category === 'From the GM');

export default function GMPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Nav />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-dark-charcoal text-white py-20 px-4 pt-32 md:pt-40">
          <div className="container mx-auto max-w-3xl">
            <p className="text-airpark-red text-sm font-bold uppercase tracking-widest mb-3 font-sans">Platte Valley Airpark · 18V</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">From the GM</h1>
            <p className="text-lg text-gray-300 max-w-xl">
              Personal updates from Dave Shull, General Manager. What&apos;s happening at 18V — straight from the field.
            </p>
          </div>
        </section>

        {/* Letters */}
        <section className="bg-white py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            {gmLetters.length > 0 ? (
              <div className="space-y-12">
                {gmLetters.map((letter: any) => (
                  <article key={letter.id} className="border-b border-gray-100 pb-12 last:border-0">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-dark-charcoal text-airpark-red text-xs font-bold px-3 py-1 rounded-full font-sans uppercase tracking-wider">From the GM</span>
                      <span className="text-gray-400 text-sm font-sans">{letter.date}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-dark-charcoal mb-6 leading-tight">{letter.headline}</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      {letter.body.split('\n\n').map((para: string, i: number) => (
                        <p key={i} className="mb-4">{para}</p>
                      ))}
                    </div>
                    {letter.tag && (
                      <p className="mt-6 text-airpark-red font-serif italic text-lg">{letter.tag}</p>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No letters yet — check back soon.</p>
            )}

            {/* Contact Dave */}
            <div className="mt-16 bg-gray-50 rounded-lg p-8 border border-gray-100">
              <h3 className="text-xl font-serif font-bold text-dark-charcoal mb-2">Get in Touch</h3>
              <p className="text-gray-600 mb-4">
                Have a question about the field, hangars, or anything at 18V? Dave reads his own email.
              </p>
              <a
                href="mailto:dave@plattevalleyairpark.com"
                className="text-airpark-red hover:underline font-medium font-sans"
              >
                dave@plattevalleyairpark.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer site={siteData} />
    </div>
  );
}
