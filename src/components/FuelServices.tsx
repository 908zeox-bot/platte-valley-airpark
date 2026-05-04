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
      description: `$6.35/gal · 24/7 credit card`,
    },
    {
      icon: '🛬',
      title: 'Paved Runway',
      description: '4,100 ft paved · 15/33',
    },
    {
      icon: '🌿',
      title: 'Grass Strip',
      description: '2,500 ft · tailwheel-friendly · 9/27',
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
      </div>
    </section>
  )
}

export default FuelServices