import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import siteData from '../../../data/site.json';

export const metadata: Metadata = {
  title: 'Training — Cleared for Commercial | Platte Valley Airpark',
  description: 'Conversational study sessions for pilots preparing for the FAA Commercial Pilot checkride, covering SR22T systems, commercial maneuvers, regulations, weather, and emergency procedures.',
};

const episodes = [
  {
    episode: 1,
    title: 'SR22T Systems Deep Dive',
    duration: '25:34',
    audioUrl: 'https://cleared-for-commercial.netlify.app/ep1.mp3',
    description: 'Cirrus SR22T systems from the ground up — engine, fuel, avionics, pressurization, CAPS, and the questions every DPE will ask.',
  },
  {
    episode: 2,
    title: 'Commercial Maneuvers Mastery',
    duration: '25:20',
    audioUrl: 'https://cleared-for-commercial.netlify.app/ep2.mp3',
    description: 'Chandelles, lazy eights, steep turns, eights on pylons, power-off 180s — the mechanics, the standards, and how to fly them in the SR22T.',
  },
  {
    episode: 3,
    title: 'Regulations Oral Exam Prep',
    duration: '25:08',
    audioUrl: 'https://cleared-for-commercial.netlify.app/ep3.mp3',
    description: 'Full mock oral exam — Jordan as the DPE, Alex in the hot seat. Certificate requirements, endorsements, ARROW documents, airworthiness directives, maintenance, and flight operations rules.',
  },
  {
    episode: 4,
    title: 'Weather and Aerodynamics',
    duration: '26:16',
    audioUrl: 'https://cleared-for-commercial.netlify.app/ep4.mp3',
    description: 'Pressure systems, fronts, icing, thunderstorms, lift, drag, load factor, stall speed in turns — thinking like an engineer, not just a pilot.',
  },
  {
    episode: 5,
    title: 'Emergency Procedures and Human Factors',
    duration: '25:32',
    audioUrl: 'https://cleared-for-commercial.netlify.app/ep5.mp3',
    description: 'Engine failures, electrical emergencies, CAPS decisions, IMSAFE, DECIDE model, hypoxia, spatial disorientation, and a rapid-fire V-speeds and limitations close.',
  },
];

export default function TrainingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Nav />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-dark-charcoal text-white py-20 px-4 pt-32 md:pt-40">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold mb-2 text-airpark-red uppercase tracking-wider">FROM THE FLIGHT DECK</p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 leading-tight">Cleared for Commercial</h1>
            <p className="text-xl md:text-2xl mb-6 font-light">Conversational study sessions for pilots preparing for the FAA Commercial Pilot checkride.</p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">Each episode is a dialogue between Alex, a student pilot, and Jordan, an experienced CFI — covering SR22T systems, commercial maneuvers, regulations, weather, and emergency procedures. Built for technically advanced aircraft. No filler, just the knowledge you need.</p>
            <p className="text-xs text-gray-400">Produced by Altitude Z Aviation | Hosted at Platte Valley Airpark (18V)</p>
            <p className="text-xs text-gray-500 mt-3 max-w-xl mx-auto">⚠️ This content is produced with the assistance of AI. It is intended as a study aid and does not replace official FAA publications, approved training materials, or the guidance of a certified flight instructor.</p>
          </div>
        </section>

        {/* Episodes Section */}
        <section className="bg-white py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-serif font-bold text-dark-charcoal text-center mb-12">Episodes</h2>
            <div className="grid gap-8 md:grid-cols-1">
              {episodes.slice().reverse().map((ep) => ( // Reverse order for newest first display
                <div key={ep.episode} className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto w-full">
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-airpark-red text-white text-xs font-bold px-3 py-1 rounded-full">EP {ep.episode}</span>
                    <span className="text-gray-500 text-sm">{ep.duration}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-dark-charcoal mb-2">{ep.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">{ep.description}</p>
                  <audio controls className="w-full mt-3">
                    <source src={ep.audioUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flashcards Section */}
        <section className="bg-gray-100 py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold mb-2 text-airpark-red uppercase tracking-wider">Study Tool</p>
              <h2 className="text-4xl font-serif font-bold text-dark-charcoal mb-4">Checkride Flashcards</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">The companion study guide to the podcast. 100+ flashcards covering systems, regulations, maneuvers, weather, and emergency procedures — built for the SR22T commercial checkride.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-3xl mx-auto">
              <iframe
                src="https://cpl-checkride.netlify.app/checkride-flashcards.html"
                className="w-full"
                style={{height: '600px', border: 'none'}}
                title="Altitude Z Aviation Commercial Checkride Flashcards"
                loading="lazy"
              />
            </div>
            <p className="text-center mt-6">
              <Link href="https://cpl-checkride.netlify.app" target="_blank" rel="noopener noreferrer" className="text-airpark-red hover:underline font-semibold">Open full flashcard app →</Link>
            </p>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="bg-dark-charcoal text-white py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Listen Everywhere</h2>
            <p className="text-lg mb-8">Cleared for Commercial is available on all major podcast platforms.</p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 text-airpark-red text-lg">
              <Link href="https://anchor.fm/altitudezaviation" target="_blank" rel="noopener noreferrer" className="hover:underline">Spotify</Link>
              <Link href="https://anchor.fm/altitudezaviation" target="_blank" rel="noopener noreferrer" className="hover:underline">Apple Podcasts</Link>
              <Link href="https://anchor.fm/s/110ff330c/podcast/rss" target="_blank" rel="noopener noreferrer" className="hover:underline">RSS Feed</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer site={siteData} />
    </div>
  );
}
