import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import siteData from '../../../data/site.json';
import galleryData from '../../../data/gallery-page.json';

export const metadata: Metadata = {
  title: 'Photo Gallery | Platte Valley Airpark (18V)',
  description: 'Browse photos of life at Platte Valley Airpark (18V) — aircraft, fly-ins, community events, and the Colorado Front Range.',
};

type GalleryPhoto = {
  src: string;
  alt: string;
  group: string;
};

export default function GalleryPage() {
  const photos = galleryData as GalleryPhoto[];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Nav />
      <main className="flex-grow">

        {/* Hero bar */}
        <section className="bg-dark-charcoal text-white py-20 px-4 pt-32 md:pt-40">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="text-[#BD212F] text-sm font-bold tracking-widest uppercase mb-3">18V in Photos</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">Photo Gallery</h1>
            <p className="text-lg text-gray-300 max-w-xl mx-auto">
              Life at 18V — Platte Valley Airpark
            </p>
          </div>
        </section>

        {/* Back link + gallery groups */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-6xl mx-auto">

            <div className="mb-10">
              <Link
                href="/"
                className="text-airpark-red font-semibold hover:underline text-sm"
              >
                ← Back to Home
              </Link>
            </div>

            <div className="masonry-grid">
              {photos.map((photo) => (
                <img
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="hover:scale-[1.02] transition-transform duration-300 cursor-zoom-in"
                />
              ))}
            </div>

          </div>
        </section>

      </main>
      <Footer site={siteData} />
    </div>
  );
}
