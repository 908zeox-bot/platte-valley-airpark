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

interface FlyInProps {
  site: Site;
}

const FlyIn = ({ site }: FlyInProps) => {
  return (
    <section
      id="fly-in"
      className="relative py-24 bg-cover bg-center text-white text-center"
      style={{ backgroundImage: 'url(/images/DSC_0092.jpg)' }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-5xl font-serif font-bold mb-12">Come Fly In</h2>
        <div className="bg-white text-dark-charcoal p-8 md:p-12 rounded-lg shadow-xl max-w-2xl mx-auto">
          <p className="text-xl mb-4">
            <span className="font-bold">📍</span> {site.address}
          </p>
          <p className="text-xl mb-4">
            <span className="font-bold">📻 CTAF:</span> {site.ctaf}
          </p>
          <p className="text-xl mb-4">
            <span className="font-bold">✈️ Pattern Altitude:</span> {site.patternAltitude}
          </p>
          <p className="text-xl mb-4">
            <span className="font-bold">🛬 Runways:</span> {site.runways[0].id} ({site.runways[0].length} {site.runways[0].surface}) · {site.runways[1].id} ({site.runways[1].length} {site.runways[1].surface})
          </p>
          <p className="text-xl mb-4">
            <span className="font-bold">💰 No landing fee</span>
          </p>
          <p className="text-xl">
            <span className="font-bold">🌐 Coordinates:</span> {site.coordinates}
          </p>
        </div>
      </div>
    </section>
  )
}

export default FlyIn