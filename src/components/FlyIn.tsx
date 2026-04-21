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
      style={{ backgroundImage: 'url(/images/57.jpg)' }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-5xl font-serif font-bold mb-12">Come Fly In</h2>
        <div className="bg-white text-dark-charcoal p-8 md:p-12 rounded-lg shadow-xl max-w-2xl mx-auto text-left">
          <dl className="divide-y divide-gray-100">
            <div className="flex flex-col sm:flex-row py-3">
              <dt className="w-40 shrink-0 font-semibold text-gray-500 text-sm uppercase tracking-wide">Address</dt>
              <dd className="text-dark-charcoal mt-1 sm:mt-0">{site.address}</dd>
            </div>
            <div className="flex flex-col sm:flex-row py-3">
              <dt className="w-40 shrink-0 font-semibold text-gray-500 text-sm uppercase tracking-wide">CTAF</dt>
              <dd className="text-dark-charcoal mt-1 sm:mt-0">{site.ctaf}</dd>
            </div>
            <div className="flex flex-col sm:flex-row py-3">
              <dt className="w-40 shrink-0 font-semibold text-gray-500 text-sm uppercase tracking-wide">Pattern Alt</dt>
              <dd className="text-dark-charcoal mt-1 sm:mt-0">{site.patternAltitude}</dd>
            </div>
            <div className="flex flex-col sm:flex-row py-3">
              <dt className="w-40 shrink-0 font-semibold text-gray-500 text-sm uppercase tracking-wide">Runways</dt>
              <dd className="text-dark-charcoal mt-1 sm:mt-0">
                {site.runways[0].id} — {site.runways[0].length} {site.runways[0].surface}<br />
                {site.runways[1].id} — {site.runways[1].length} {site.runways[1].surface}
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row py-3">
              <dt className="w-40 shrink-0 font-semibold text-gray-500 text-sm uppercase tracking-wide">Landing Fee</dt>
              <dd className="text-dark-charcoal mt-1 sm:mt-0">None</dd>
            </div>
            <div className="flex flex-col sm:flex-row py-3">
              <dt className="w-40 shrink-0 font-semibold text-gray-500 text-sm uppercase tracking-wide">Coordinates</dt>
              <dd className="text-dark-charcoal mt-1 sm:mt-0">{site.coordinates}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default FlyIn