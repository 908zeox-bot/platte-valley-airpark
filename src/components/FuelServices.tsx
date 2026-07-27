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

interface FuelServicesProps {
  site: Site;
}

const FuelServices = ({ site }: FuelServicesProps) => {
  const services = [
    {
      icon: '⛽',
      title: 'Self-Serve 100LL',
      description: `$6.53/gal · 24/7 credit card`,
    },
    {
      icon: '🛬',
      title: 'Paved Runway',
      description: '4,100 ft paved · 15/33',
    },
    {
      icon: '🌿',
      title: 'Grass Strip',
      description: '2,500 ft · tailwheel-friendly · 09/27',
    },
    {
      icon: '🅿️',
      title: 'Transient Parking',
      description: 'Free · overnight welcome',
    },
    {
      icon: '📻',
      title: 'CTAF 122.9',
      description: 'No landing fee',
    },
    {
      icon: '📍',
      title: 'Fort Lupton, CO',
      description: '40 min north of Denver',
    },
  ]

  return (
    <section id="fuel-services" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-bold text-dark-charcoal mb-12">Fuel & Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <div className="text-5xl text-airpark-red mb-4">{service.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-dark-charcoal mb-2">{service.title}</h3>
              <p className="text-gray-700 text-center">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Airport Diagram */}
        <div className="mt-12">
          <h3 className="text-2xl font-serif font-bold text-dark-charcoal mb-6">Airport Diagram</h3>
          <div className="mx-auto rounded-lg shadow-md bg-white w-full max-w-xl p-8">
            <div className="grid grid-cols-2 gap-4 text-left mb-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Runway 15/33</p>
                <p className="text-lg font-bold text-dark-charcoal">4,100 ft paved</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Runway 09/27</p>
                <p className="text-lg font-bold text-dark-charcoal">2,500 ft grass</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Coordinates</p>
                <p className="text-lg font-bold text-dark-charcoal">40°6.2'N 104°42.1'W</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Elevation</p>
                <p className="text-lg font-bold text-dark-charcoal">4,934 ft MSL</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://skyvector.com/?ll=40.1027222,-104.7011944&chart=301&zoom=2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-airpark-red text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors text-center"
              >
                View on SkyVector →
              </a>
              <a
                href="https://foreflight.com/airports/18V"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors text-center"
              >
                View on ForeFlight →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FuelServices