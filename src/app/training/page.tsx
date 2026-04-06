import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import siteData from '../../../data/site.json';

export const metadata: Metadata = {
  title: 'Pilot Resources | Platte Valley Airpark',
  description: 'A few training resources we\'ve found useful at 18V — podcast episodes, study tools, and links to great aviation content.',
};

const episodes = [
  {
    episode: 1,
    title: 'SR22T Systems',
    audioUrl: 'https://cleared-for-commercial.netlify.app/ep1.mp3',
    description: 'Engine, fuel, avionics, pressurization, and CAPS.',
  },
  {
    episode: 2,
    title: 'Commercial Maneuvers',
    audioUrl: 'https://cleared-for-commercial.netlify.app/ep2.mp3',
    description: 'Chandelles, lazy eights, steep turns, eights on pylons, power-off 180s.',
  },
  {
    episode: 3,
    title: 'Regulations',
    audioUrl: 'https://cleared-for-commercial.netlify.app/ep3.mp3',
    description: 'Certificate requirements, ARROW documents, airworthiness directives, and flight rules.',
  },
  {
    episode: 4,
    title: 'Weather and Aerodynamics',
    audioUrl: 'https://cleared-for-commercial.netlify.app/ep4.mp3',
    description: 'Pressure systems, fronts, icing, lift, drag, and load factor.',
  },
  {
    episode: 5,
    title: 'Emergency Procedures',
    audioUrl: 'https://cleared-for-commercial.netlify.app/ep5.mp3',
    description: 'Engine failures, CAPS decisions, IMSAFE, DECIDE model, and human factors.',
  },
];

export default function TrainingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Nav />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-dark-charcoal text-white py-20 px-4 pt-32 md:pt-40">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">Pilot Resources</h1>
            <p className="text-lg text-gray-300 max-w-xl mx-auto">A few things we&apos;ve found useful in our own training. Take what helps, ignore what doesn&apos;t.</p>
          </div>
        </section>

        {/* Podcast Section */}
        <section className="bg-white py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-serif font-bold text-dark-charcoal mb-2">Cleared for Commercial</h2>
            <p className="text-gray-600 mb-2">Conversational checkride prep — a student and CFI working through SR22T systems, maneuvers, regs, weather, and emergencies. Produced by Altitude Z Aviation.</p>
            <p className="text-xs text-gray-400 mb-8 italic">AI-assisted content. Use as a study aid alongside official FAA materials and your CFI.</p>
            <div className="space-y-6">
              {episodes.map((ep) => (
                <div key={ep.episode} className="border border-gray-200 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-airpark-red text-white text-xs font-bold px-2.5 py-1 rounded-full">EP {ep.episode}</span>
                    <h3 className="text-lg font-serif font-bold text-dark-charcoal">{ep.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{ep.description}</p>
                  <audio controls className="w-full">
                    <source src={ep.audioUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center">
              <Link href="https://cleared-for-commercial.netlify.app" target="_blank" rel="noopener noreferrer" className="text-airpark-red hover:underline text-sm">Full podcast site →</Link>
            </p>
          </div>
        </section>

        {/* Flashcards Section */}
        <section className="bg-gray-50 py-16 px-4 border-t border-gray-200">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-serif font-bold text-dark-charcoal mb-2">Checkride Flashcards</h2>
            <p className="text-gray-600 mb-8">A companion study deck covering systems, regs, maneuvers, weather, and emergencies for the SR22T commercial checkride.</p>
            <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <iframe
                src="https://cpl-checkride.netlify.app/checkride-flashcards.html"
                className="w-full"
                style={{height: '580px', border: 'none'}}
                title="Commercial Checkride Flashcards"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-center">
              <Link href="https://cpl-checkride.netlify.app" target="_blank" rel="noopener noreferrer" className="text-airpark-red hover:underline text-sm">Open full flashcard app →</Link>
            </p>
          </div>
        </section>

        {/* External Resources */}
        <section className="bg-white py-16 px-4 border-t border-gray-200">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-serif font-bold text-dark-charcoal mb-2">Worth Bookmarking</h2>
            <p className="text-gray-600 mb-8">Other resources that have been genuinely useful.</p>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-dark-charcoal mb-1">Bold Method — Direct To Podcast</h3>
                    <p className="text-gray-600 text-sm">Real aviation stories, training topics, and conversations from the field. One of the better GA podcasts out there.</p>
                  </div>
                </div>
                <Link href="https://www.boldmethod.com/podcasts/direct-to/" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-airpark-red hover:underline text-sm font-medium">boldmethod.com/podcasts/direct-to/ →</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer site={siteData} />
    </div>
  );
}
