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
    `$6.15/gal 100LL`,
    `4,100 ft Paved`,
    `2,500 ft Grass Strip`,
    `100+ Based Aircraft`,
  ]

  return (
    <section className="bg-dark-charcoal py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <p className="text-3xl md:text-4xl font-bold text-airpark-red mb-1">{stat.split(' ')[0]}</p>
              <p className="text-lg md:text-xl">{stat.substring(stat.indexOf(' ') + 1)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats