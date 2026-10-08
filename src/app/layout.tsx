import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Airport',
      '@id': 'https://www.plattevalleyairpark.com/#airport',
      name: 'Platte Valley Airpark',
      identifier: '18V',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '7507 County Road 39',
        addressLocality: 'Fort Lupton',
        addressRegion: 'CO',
        postalCode: '80621',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 40.1027,
        longitude: -104.7012,
      },
      url: 'https://www.plattevalleyairpark.com',
      email: 'erin@plattevalleyairpark.com',
      publicAccess: true,
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.plattevalleyairpark.com/#business',
      name: 'Platte Valley Airpark',
      description:
        "General aviation airport on Colorado's Front Range. Self-serve 100LL fuel at $6.65/gal, 24/7 credit card. Dual runways: 4,100 ft paved (15/33) and 2,500 ft grass strip (9/27). Home to 100+ based aircraft. No landing fee.",
      url: 'https://www.plattevalleyairpark.com',
      email: 'erin@plattevalleyairpark.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '7507 County Road 39',
        addressLocality: 'Fort Lupton',
        addressRegion: 'CO',
        postalCode: '80621',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 40.1027,
        longitude: -104.7012,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      priceRange: '$',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Credit Card',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does Platte Valley Airpark (18V) have self-serve fuel?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Platte Valley Airpark offers 100LL self-serve fuel at $6.65 per gallon, available 24 hours a day, 7 days a week with a credit card. No attendant is required.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the CTAF frequency at 18V?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The CTAF at Platte Valley Airpark (18V) is 122.9 MHz. 18V is an uncontrolled airport — no tower. Announce your position on 122.9.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can taildraggers land at Platte Valley Airpark?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Platte Valley Airpark has a 2,500-foot grass strip (Runway 9/27) that is well-suited for taildraggers and backcountry aircraft training, in addition to a 4,100-foot paved main runway (Runway 15/33).',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is Platte Valley Airpark?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Platte Valley Airpark (FAA identifier 18V) is located at 7507 County Road 39, Fort Lupton, Colorado 80621, on the Front Range north of Denver — approximately 40 minutes from the Denver metro area.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there overnight accommodation at Platte Valley Airpark?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The Hangar House is an aviation-themed Airbnb accommodation located on the airport property, available for overnight stays. Aircraft tie-down is included with your stay.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a landing fee at Platte Valley Airpark?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. There is no landing fee at Platte Valley Airpark (18V).',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the runway length at 18V?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Platte Valley Airpark has two runways: a 4,100-foot paved main runway (Runway 15/33) and a 2,500-foot grass strip (Runway 9/27).',
          },
        },
      ],
    },
  ],
}

export const metadata: Metadata = {
  title: 'Platte Valley Airpark (18V) | GA Airport near Denver, CO',
  description: 'Platte Valley Airpark (18V) in Fort Lupton, CO. Self-serve 100LL at $6.65/gal, 24/7. 4,100 ft paved + 2,500 ft grass runway. Colorado\'s friendliest GA community airport, north of Denver on the Front Range.',
  keywords: '18V, Platte Valley Airpark, Fort Lupton airport, GA airport Denver, 100LL fuel Colorado, general aviation Front Range',
  openGraph: {
    title: 'Platte Valley Airpark (18V) | GA Airport near Denver, CO',
    description: 'Self-serve 100LL at $6.65/gal, 24/7. 4,100 ft paved + 2,500 ft grass strip. Community airport north of Denver on Colorado\'s Front Range.',
    url: 'https://www.plattevalleyairpark.com',
    siteName: 'Platte Valley Airpark',
    images: [{ url: 'https://www.plattevalleyairpark.com/images/66.jpg' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Platte Valley Airpark (18V) | GA Airport near Denver, CO',
    description: 'Self-serve 100LL at $6.65/gal, 24/7. 4,100 ft paved + 2,500 ft grass strip. Community airport north of Denver on Colorado\'s Front Range.',
    images: ['https://www.plattevalleyairpark.com/images/66.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
        {/* Codex918 redesign stylesheet — staged 2026-10-06, Dave approved */}
        <link rel="stylesheet" href="/assets/style.css" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        {/* JSON-LD structured data — Airport, LocalBusiness, FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DZNGNKV4CJ"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DZNGNKV4CJ', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}