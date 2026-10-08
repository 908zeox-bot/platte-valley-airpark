import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import siteData from '../../../data/site.json';

export const metadata: Metadata = {
  title: 'FAQ | Platte Valley Airpark (18V) — Fort Lupton, CO',
  description:
    'Frequently asked questions about Platte Valley Airpark (18V) in Fort Lupton, CO. Fuel prices, CTAF, runways, hangar waitlist, the Hangar House, and more.',
  keywords:
    '18V FAQ, Platte Valley Airpark questions, 100LL fuel Fort Lupton, CTAF 122.9, taildragger grass strip Colorado, hangar waitlist 18V',
  openGraph: {
    title: 'FAQ | Platte Valley Airpark (18V)',
    description:
      'Fuel prices, CTAF, runways, taildragger info, overnight stays, hangar waitlist, and more — everything pilots ask about 18V.',
    url: 'https://www.plattevalleyairpark.com/faq',
    siteName: 'Platte Valley Airpark',
    images: [{ url: 'https://www.plattevalleyairpark.com/images/66.jpg' }],
    locale: 'en_US',
    type: 'website',
  },
};

const faqs = [
  {
    category: 'Fuel & Services',
    icon: '⛽',
    items: [
      {
        q: 'Does 18V have self-serve fuel?',
        a: 'Yes. Platte Valley Airpark has a self-serve 100LL fuel pump available 24 hours a day, 7 days a week. Payment is by credit card — no attendant needed.',
      },
      {
        q: 'What is the current 100LL fuel price at 18V?',
        a: '$6.65 per gallon as of 2026. Self-serve, 24/7, credit card. Consistently lower than nearby towered airports (KBJC, KAPA, KGXY). Check plattevalleyairpark.com for the latest price.',
      },
      {
        q: 'Is there a landing fee at Platte Valley Airpark?',
        a: 'No. There is no landing fee at 18V. You\'re welcome to land, fuel up, and go.',
      },
      {
        q: 'What fuel types are available?',
        a: '100LL avgas only. No Jet-A on field.',
      },
    ],
  },
  {
    category: 'Radio & Procedures',
    icon: '📻',
    items: [
      {
        q: 'What is the CTAF at Platte Valley Airpark (18V)?',
        a: '122.9 MHz. Platte Valley Airpark is an uncontrolled airport — no tower. Make standard position announcements on 122.9 when operating in the traffic pattern.',
      },
      {
        q: 'What is the traffic pattern altitude at 18V?',
        a: '5,500 ft MSL (approximately 600 ft AGL above the field elevation of ~4,900 ft MSL). Left traffic for Runway 15/33; check the Chart Supplement for current NOTAMs.',
      },
      {
        q: 'Is 18V a towered or uncontrolled airport?',
        a: 'Uncontrolled. No tower, no Class D airspace. Self-announce on CTAF 122.9. Airspace is Class G/E at the field.',
      },
    ],
  },
  {
    category: 'Runways',
    icon: '🛬',
    items: [
      {
        q: 'What are the runways at 18V?',
        a: 'Two runways: (1) Runway 15/33 — 4,100 ft paved asphalt, main runway; (2) Runway 9/27 — 2,500 ft grass strip, ideal for taildraggers and backcountry-capable aircraft.',
      },
      {
        q: 'Can taildraggers land at Platte Valley Airpark?',
        a: 'Absolutely. The 2,500-foot grass strip (Runway 9/27) is popular with tailwheel and backcountry aircraft. It\'s a regular training ground for pilots building grass-strip time.',
      },
      {
        q: 'Is the grass runway open year-round?',
        a: 'Generally yes, but condition varies with weather. Check NOTAMs and call ahead if conditions are uncertain. The 4,100 ft paved runway (15/33) is available year-round.',
      },
      {
        q: 'Are the runways lighted?',
        a: 'Runway 15/33 has pilot-controlled lighting (PCL) on CTAF 122.9 — click the mic 7 times within 5 seconds. The grass strip (9/27) is not lighted.',
      },
    ],
  },
  {
    category: 'Location & Getting Here',
    icon: '📍',
    items: [
      {
        q: 'Where is Platte Valley Airpark?',
        a: '7507 County Road 39, Fort Lupton, Colorado 80621. On Colorado\'s Front Range, approximately 40 minutes north of Denver. FAA identifier: 18V.',
      },
      {
        q: 'How far is 18V from Denver?',
        a: 'Approximately 35–40 miles north of Denver (KDEN). About 25 miles from Rocky Mountain Metropolitan Airport (KBJC) and about 40 miles from Centennial Airport (KAPA).',
      },
      {
        q: 'What is the field elevation at 18V?',
        a: 'Approximately 4,900 ft MSL. Density altitude is a real factor in summer — plan your performance accordingly.',
      },
      {
        q: 'Are there any nearby airports?',
        a: 'Fort Collins–Loveland (KFNL) ~25 nm north; Rocky Mountain Metro (KBJC) ~20 nm south; Greeley–Weld (KGXY) ~20 nm northeast. 18V is the best-priced fuel stop in the region.',
      },
    ],
  },
  {
    category: 'The Hangar House',
    icon: '🏠',
    items: [
      {
        q: 'What is the Hangar House?',
        a: 'The Hangar House is an aviation-themed Airbnb located right on the airport property at Platte Valley Airpark. It\'s a fully refurbished 1,704 sq ft ranch-style home built in 1942, with direct access to the runways.',
      },
      {
        q: 'How many guests does the Hangar House sleep?',
        a: 'Up to 5 guests. The home has 2 bedrooms (1 king bed + bunk bed with 2 twins) and a living room couch that can sleep a 5th guest. 2.5 bathrooms.',
      },
      {
        q: 'Is aircraft tie-down included with the Hangar House?',
        a: 'Yes. Aircraft tie-down on the field is included with your Hangar House stay. Temporary hangar space may also be available — contact erin@plattevalleyairpark.com.',
      },
      {
        q: 'How do I book the Hangar House?',
        a: 'The Hangar House is listed on Airbnb. Visit plattevalleyairpark.com/hangar-house for the direct booking link, or search "18V Hangar House" on Airbnb.',
      },
      {
        q: 'Is the Hangar House pet-friendly?',
        a: 'Yes — dogs on a leash are welcome.',
      },
    ],
  },
  {
    category: 'Hangars & Basing',
    icon: '✈️',
    items: [
      {
        q: 'Can I base my aircraft at Platte Valley Airpark?',
        a: 'Yes. 18V is home to 100+ based aircraft. T-hangars and tie-downs are available. Space is limited — join the waitlist.',
      },
      {
        q: 'How do I get on the hangar waitlist?',
        a: 'Fill out the waitlist form at plattevalleyairpark.com/hangars or email erin@plattevalleyairpark.com. We\'ll contact you when space opens up.',
      },
      {
        q: 'Are tie-downs available for transient aircraft?',
        a: 'Yes. Transient tie-downs are available. No fee to land and tie down.',
      },
    ],
  },
  {
    category: 'Contact',
    icon: '📧',
    items: [
      {
        q: 'Who manages Platte Valley Airpark?',
        a: 'Erin Shoffit is the Airpark Manager. Email: erin@plattevalleyairpark.com. The airpark is owned by Dave Shull through Delta Zulu.',
      },
      {
        q: 'How do I contact the airpark?',
        a: 'Email erin@plattevalleyairpark.com for general inquiries, hangar waitlist, or Hangar House questions. For community updates and events, follow @fly18v on Instagram or Facebook.',
      },
      {
        q: 'Does 18V have a mailing list?',
        a: 'Yes. Sign up at plattevalleyairpark.com to receive fuel price updates, event announcements, and community news.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Nav />
      <main className="flex-grow">

        {/* Hero */}
        <section className="bg-dark-charcoal text-white py-20 px-4 pt-32 md:pt-40">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="text-airpark-red text-sm font-bold tracking-widest uppercase mb-3">18V · Fort Lupton, CO</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Everything pilots, visitors, and aviation enthusiasts ask about Platte Valley Airpark.
              Quick answers — no runaround.
            </p>
          </div>
        </section>

        {/* Quick-reference bar */}
        <section className="bg-airpark-red text-white py-4 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-1 text-sm font-medium text-center">
              <span>⛽ 100LL · $6.65/gal · 24/7 credit card</span>
              <span>📻 CTAF 122.9</span>
              <span>🛬 4,100 ft paved + 2,500 ft grass</span>
              <span>📍 Fort Lupton, CO · 18V</span>
              <span>🚫 No landing fee</span>
            </div>
          </div>
        </section>

        {/* FAQ sections */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            {faqs.map((section) => (
              <div key={section.category} className="mb-14">
                <h2 className="text-2xl font-serif font-bold text-dark-charcoal mb-6 flex items-center gap-3 border-b border-gray-200 pb-3">
                  <span>{section.icon}</span>
                  <span>{section.category}</span>
                </h2>
                <div className="space-y-6">
                  {section.items.map((faq) => (
                    <div
                      key={faq.q}
                      className="bg-gray-50 rounded-lg p-6 border border-gray-100"
                    >
                      <h3 className="font-bold text-dark-charcoal mb-2 text-base leading-snug">
                        {faq.q}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still have questions CTA */}
        <section className="bg-gray-50 border-t border-gray-200 py-14 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-serif font-bold text-dark-charcoal mb-3">
              Still have a question?
            </h2>
            <p className="text-gray-600 mb-6">
              Reach out to Erin at the airpark — she knows this place inside and out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:erin@plattevalleyairpark.com"
                className="bg-airpark-red hover:bg-red-700 text-white font-bold px-6 py-3 rounded transition duration-300"
              >
                Email the Airpark Manager
              </a>
              <a
                href="/hangars"
                className="border border-dark-charcoal text-dark-charcoal hover:bg-dark-charcoal hover:text-white font-bold px-6 py-3 rounded transition duration-300"
              >
                Join the Hangar Waitlist
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer site={siteData} />
    </div>
  );
}
