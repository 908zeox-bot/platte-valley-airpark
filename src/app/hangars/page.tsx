import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import siteData from '../../../data/site.json';

export const metadata: Metadata = {
  title: 'Hangar Waitlist | Platte Valley Airpark (18V)',
  description: 'Interested in basing your aircraft at Platte Valley Airpark? Join the hangar waitlist and we\'ll reach out when space opens up.',
};

export default function HangarsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Nav />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-dark-charcoal text-white py-20 px-4 pt-32 md:pt-40">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">Hangar Waitlist</h1>
            <p className="text-lg text-gray-300 max-w-xl mx-auto">
              We&apos;d love to have you based at 18V. Fill out the application below and we&apos;ll be in touch when space opens up.
            </p>
          </div>
        </section>

        {/* Why Base at 18V */}
        <section className="bg-white py-12 px-4 border-b border-gray-100">
          <div className="container mx-auto max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl mb-2">⛽</div>
                <h3 className="font-serif font-bold text-dark-charcoal mb-1">Best Fuel Price Near Denver</h3>
                <p className="text-gray-600 text-sm">Self-serve 100LL at $6.15/gal, 24/7 credit card. Consistently lower than KBJC, KAPA, and KGXY.</p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">🛬</div>
                <h3 className="font-serif font-bold text-dark-charcoal mb-1">Two Runways</h3>
                <p className="text-gray-600 text-sm">4,100 ft paved + 2,500 ft grass. No landing fee. 100+ aircraft already based here.</p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">🤝</div>
                <h3 className="font-serif font-bold text-dark-charcoal mb-1">Real Community</h3>
                <p className="text-gray-600 text-sm">Monthly Coffee & Donuts. Fly-ins. Pilots who actually know each other. This is what GA is supposed to feel like.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Google Form */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-serif font-bold text-dark-charcoal mb-2 text-center">Hangar Waitlist Application</h2>
            <p className="text-gray-600 text-center mb-8">Takes about 2 minutes. We&apos;ll reach out as soon as something becomes available.</p>
            <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 bg-white">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScwczEdL9inCKFw2qSl6eaYGwWqiioVPcQ1602PRQ64ia3gBQ/viewform?embedded=true"
                className="w-full"
                style={{ height: '900px', border: 'none' }}
                title="Hangar Waitlist Application"
                loading="lazy"
              >
                Loading…
              </iframe>
            </div>
            <p className="mt-6 text-center text-sm text-gray-500">
              Prefer email? Reach us at{' '}
              <a href="mailto:erin@plattevalleyairpark.com" className="text-airpark-red hover:underline">
                erin@plattevalleyairpark.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer site={siteData} />
    </div>
  );
}
