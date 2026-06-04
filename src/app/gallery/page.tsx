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

type GroupConfig = {
  key: string;
  label: string;
  credit: string;
};

const GROUP_ORDER: GroupConfig[] = [
  {
    key: 'may30-flyIn',
    label: 'Pancake Fly-In — May 30, 2026',
    credit: 'Photography: Erin Shoffit',
  },
  {
    key: 'april-pancake',
    label: 'Pancake Breakfast — April 2026',
    credit: 'Photography: Zachery Shull · Edited by Erin Shoffit',
  },
  {
    key: 'may02-morning',
    label: 'Morning at 18V — May 2026',
    credit: 'Photography: Dave Shull',
  },
  {
    key: 'airpark-general',
    label: 'Platte Valley Airpark',
    credit: '',
  },
];

export default function GalleryPage() {
  const photos = galleryData as GalleryPhoto[];

  // Group photos by their group key
  const grouped: Record<string, GalleryPhoto[]> = {};
  for (const photo of photos) {
    if (!grouped[photo.group]) grouped[photo.group] = [];
    grouped[photo.group].push(photo);
  }

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

            {GROUP_ORDER.map((groupCfg) => {
              const groupPhotos = grouped[groupCfg.key];
              if (!groupPhotos || groupPhotos.length === 0) return null;

              return (
                <div key={groupCfg.key} className="mb-16">
                  <h3 className="font-serif text-2xl font-bold text-dark-charcoal mb-1">
                    {groupCfg.label}
                  </h3>
                  {groupCfg.credit && (
                    <p className="text-sm text-gray-400 italic mb-6">{groupCfg.credit}</p>
                  )}
                  {!groupCfg.credit && <div className="mb-6" />}
                  <div className="masonry-grid">
                    {groupPhotos.map((photo) => (
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
              );
            })}

          </div>
        </section>

      </main>
      <Footer site={siteData} />
    </div>
  );
}
