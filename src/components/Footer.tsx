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

interface FooterProps {
  site: Site;
}

const Footer = ({ site }: FooterProps) => {
  return (
    <footer id="contact" className="bg-dark-charcoal text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold mb-4">Platte Valley Airpark</h3>
          <p className="mb-2">{site.address}</p>
          <p className="mb-2">CTAF: {site.ctaf}</p>
          <p className="mb-2">Email: <a href={`mailto:${site.email}`} className="text-airpark-red hover:underline">{site.email}</a></p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Navigation</h3>
          <ul>
            <li className="mb-2"><Link href="/" className="hover:text-airpark-red">Home</Link></li>
            <li className="mb-2"><Link href="/#about" className="hover:text-airpark-red">About</Link></li>
            <li className="mb-2"><Link href="/#fuel-services" className="hover:text-airpark-red">Fuel & Services</Link></li>
            <li className="mb-2"><Link href="/#fly-in" className="hover:text-airpark-red">Fly In</Link></li>
            <li className="mb-2"><Link href="/#gallery" className="hover:text-airpark-red">Gallery</Link></li>
            <li className="mb-2"><Link href="/#events" className="hover:text-airpark-red">Events</Link></li>
            <li className="mb-2"><Link href="/training" className="hover:text-airpark-red">Training</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
          <p className="mb-3 text-sm text-gray-400">Interested in basing at 18V or joining the hangar waitlist?</p>
          <a href={`mailto:${site.email}?subject=Hangar Waitlist Inquiry`} className="inline-block bg-airpark-red hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded mb-6 transition duration-300">Hangar Waitlist</a>
          <h3 className="text-xl font-bold mb-4">Connect</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            {site.facebook && (
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-airpark-red text-2xl">
                Facebook
              </a>
            )}
            {site.instagram && (
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-airpark-red text-2xl">
                Instagram
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
        © 2026 18V Management / Delta Zulu · plattevalleyairpark.com
      </div>
    </footer>
  )
}

export default Footer