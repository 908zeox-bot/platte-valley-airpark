import Link from 'next/link'

interface Site {
  name: string;
  identifier: string;
  tagline: string;
  address: string;
  city: string;
  coordinates: string;
  ctaf: string;
  patternAltitude: string;
  fuel: {
    type: string;
    price: string;
    unit: string;
    hours: string;
    payment: string;
  };
  runways: {
    id: string;
    length: string;
    surface: string;
    lighted?: boolean;
  }[];
  basedAircraft: string;
  landingFee: boolean;
  email: string;
  facebook: string;
  instagram: string;
}

interface HeroProps {
  site: Site;
}

const Hero = ({ site }: HeroProps) => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: 'url(/images/66.jpg)' }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-white p-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-4">
          Colorado's Friendliest GA Airport
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Platte Valley Airpark (18V) · Fort Lupton, CO · 40 minutes north of Denver
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <Link href="#fly-in" className="bg-airpark-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Plan Your Flight
          </Link>
          <Link href="#gallery" className="bg-airpark-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero