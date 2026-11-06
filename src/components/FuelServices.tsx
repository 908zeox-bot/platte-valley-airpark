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
      description: `$6.89/gal · 24/7 credit card`,
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
      description: '40 Minutes North of Denver',
    },
  ]

  return (
    <section id="fuel-services" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-bold text-dark-charcoal mb-8">Fuel & Services</h2>

        {/* Temporary field notice for Nov 9–19, 2026. Remove after maintenance is complete. */}
        <aside
          aria-labelledby="runway-maintenance-notice"
          className="mb-12 text-left rounded-lg shadow-md bg-white border border-red-200 overflow-hidden"
        >
          <div className="bg-airpark-red text-white px-6 py-3 sm:px-8">
            <p className="font-sans text-xs font-bold uppercase tracking-widest">
              Field notice · Nov 9–19, 2026
            </p>
          </div>
          <div className="px-6 py-6 sm:px-8 border-l-4 border-airpark-red">
            <h3
              id="runway-maintenance-notice"
              className="text-2xl md:text-3xl font-serif font-bold text-dark-charcoal mb-3"
            >
              Upcoming Runway & Taxiway Maintenance
            </h3>
            <p className="text-gray-700 mb-6 max-w-3xl">
              Please see the upcoming runway and taxiway maintenance schedule below and plan accordingly. All work is weather permitting.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif font-bold text-lg text-dark-charcoal mb-3">Crack Seal</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 marker:text-airpark-red">
                  <li>Monday, Nov 9 — Runway 15/33 closed</li>
                  <li>Tuesday, Nov 10 — Runway 15/33 closed</li>
                  <li>Wednesday, Nov 11 — Runway 15/33 closed; taxiway access to FBO closed</li>
                  <li>Thursday, Nov 12 — Taxiway access to FBO and fuel station closed</li>
                </ul>
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-dark-charcoal mb-3">Infrared Patching</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 marker:text-airpark-red">
                  <li>Tuesday, Nov 17 — Taxiway east of 15/33 closed</li>
                  <li>Wednesday, Nov 18 — Taxiway east of 15/33 closed</li>
                  <li>Thursday, Nov 19 — Access to fuel center closed before noon</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-gray-700">
              The contractor expects Runway 15/33 may be completed as early as Tuesday, Nov 10.
            </p>
            <p className="mt-3 text-dark-charcoal">
              Questions? Contact Erin at{' '}
              <a
                href="mailto:erin@plattevalleyairpark.com"
                className="text-airpark-red font-semibold hover:underline"
              >
                erin@plattevalleyairpark.com
              </a>
              {' '}|{' '}
              <a href="tel:+17209143854" className="text-airpark-red font-semibold hover:underline">
                (720) 914-3854
              </a>
            </p>
          </div>
        </aside>

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