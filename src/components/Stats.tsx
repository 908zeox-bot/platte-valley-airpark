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

interface StatsProps {
  site: Site;
}

const Stats = ({ site }: StatsProps) => {
  const stats = [
    { value: '$6.15/gal', label: '100LL Self-Serve' },
    { value: '4,100 ft', label: 'Paved Runway' },
    { value: '2,500 ft', label: 'Grass Strip' },
    { value: '100+', label: 'Based Aircraft' },
  ]

  return (
    <section className="bg-dark-charcoal py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <p className="text-3xl md:text-4xl font-bold text-airpark-red mb-1">{stat.value}</p>
              <p className="text-lg md:text-xl">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats