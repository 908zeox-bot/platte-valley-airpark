import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Platte Valley Airpark (18V) | GA Airport near Denver, CO',
  description: 'Platte Valley Airpark (18V) — Fort Lupton, CO. Self-serve 100LL at $6.15/gal, 24/7. 4,100 ft paved + 2,500 ft grass runway. Colorado\'s friendliest GA community airport, north of Denver on the Front Range.',
  keywords: '18V, Platte Valley Airpark, Fort Lupton airport, GA airport Denver, 100LL fuel Colorado, general aviation Front Range',
  openGraph: {
    title: 'Platte Valley Airpark (18V) | GA Airport near Denver, CO',
    description: 'Self-serve 100LL at $6.15/gal, 24/7. 4,100 ft paved + 2,500 ft grass strip. Community airport north of Denver on Colorado\'s Front Range.',
    url: 'https://www.plattevalleyairpark.com',
    siteName: 'Platte Valley Airpark',
    images: [{ url: 'https://www.plattevalleyairpark.com/images/66.jpg' }],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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