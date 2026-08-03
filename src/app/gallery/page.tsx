'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import siteData from '../../../data/site.json';
import galleryData from '../../../data/gallery-page.json';

type GalleryPhoto = {
  src: string;
  alt: string;
  group: string;
  credit?: string;
};

export default function GalleryPage() {
  const photos = galleryData as GalleryPhoto[];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = useCallback(() => setLightboxIndex(i => i !== null ? (i - 1 + photos.length) % photos.length : null), [photos.length]);
  const showNext = useCallback(() => setLightboxIndex(i => i !== null ? (i + 1) % photos.length : null), [photos.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIndex, showPrev, showNext]);

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
              Life at 18V, Platte Valley Airpark
            </p>
          </div>
        </section>

        {/* Back link + gallery */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-6xl mx-auto">

            <div className="mb-10">
              <Link href="/" className="text-airpark-red font-semibold hover:underline text-sm">
                ← Back to Home
              </Link>
            </div>

            {/* Social tag + photo submission note */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-5 mb-10 text-center">
              <p className="text-gray-800 font-semibold mb-2">📸 Share your 18V moments!</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tag us on{' '}
                <a href="https://www.instagram.com/fly18v" target="_blank" rel="noopener noreferrer" className="text-airpark-red font-semibold hover:underline">@fly18v</a>
                {' '}on Instagram or{' '}
                <a href="https://www.facebook.com/profile.php?id=1078047562053650" target="_blank" rel="noopener noreferrer" className="text-airpark-red font-semibold hover:underline">Fly18V</a>
                {' '}on Facebook
              </p>
              <p className="text-gray-600 text-sm mt-1">
                or email your photos to{' '}
                <a href="mailto:erin@plattevalleyairpark.com" className="text-airpark-red font-semibold hover:underline">erin@plattevalleyairpark.com</a>
                {' '}to be featured here.
              </p>
            </div>

            <div className="masonry-grid">
              {photos.map((photo, index) => {
                const thumbSrc = photo.src.replace('/images/', '/images/thumbs/');
                return (
                  <div key={photo.src} className="relative group cursor-zoom-in" onClick={() => openLightbox(index)}>
                    <img
                      src={thumbSrc}
                      alt={photo.alt}
                      loading="lazy"
                      className="w-full hover:scale-[1.02] transition-transform duration-300 rounded-lg"
                    />
                    {photo.credit && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs px-2 py-1 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center">
                        📷 {photo.credit}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

      </main>
      <Footer site={siteData} />

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
        >
          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); showPrev(); }}
            className="absolute left-2 md:left-4 bottom-10 md:bottom-auto md:top-1/2 md:-translate-y-1/2 text-white text-5xl font-bold px-3 py-2 hover:text-gray-300 select-none z-10"
            aria-label="Previous photo"
          >&#8249;</button>

          {/* Photo */}
          <img
            src={photos[lightboxIndex].src}
            alt={photos[lightboxIndex].alt}
            onClick={e => e.stopPropagation()}
            className="max-h-[85vh] max-w-[88vw] md:max-w-[90vw] rounded shadow-2xl object-contain"
          />

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); showNext(); }}
            className="absolute right-2 md:right-4 bottom-10 md:bottom-auto md:top-1/2 md:-translate-y-1/2 text-white text-5xl font-bold px-3 py-2 hover:text-gray-300 select-none z-10"
            aria-label="Next photo"
          >&#8250;</button>

          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-3xl font-bold px-3 py-1 hover:text-gray-300 select-none"
            aria-label="Close"
          >&times;</button>

          {/* Counter + credit */}
          <div className="absolute bottom-4 flex flex-col items-center gap-1">
            <p className="text-gray-400 text-sm">{lightboxIndex + 1} / {photos.length}</p>
            {photos[lightboxIndex].credit && (
              <p className="text-gray-400 text-xs">📷 {photos[lightboxIndex].credit}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
