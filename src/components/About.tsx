const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img src="/images/z-wwi-biplane-mountains.jpg" alt="WWI biplane at Platte Valley Airpark with Rocky Mountains" className="rounded-lg shadow-lg w-full h-auto" loading="lazy" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-serif font-bold text-dark-charcoal mb-6">
              For over 60 years, the Front Range's backyard runway.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Platte Valley Airpark sits north of Denver on Colorado's Front Range — 60+ years of GA history, 100+ based aircraft, a tight-knit community that welcomes everyone from Cubs to taildraggers to warbirds. This isn't a corporate FBO. It's a real community airport where you wave on downwind and leave with three new friends.
            </p>
            <blockquote className="border-l-4 border-airpark-red pl-4 italic text-gray-600 mb-6">
              "Whether you're flying in for the first time or you've been based here for decades — you're family."
            </blockquote>
            <img src="/images/z-community-ramp.jpg" alt="Community gathering on the ramp at 18V Pancake Breakfast" className="rounded-lg shadow-lg w-full h-auto" loading="lazy" />
          </div>
        </div>

        {/* Fly-In Info */}
        <div className="bg-gray-50 rounded-xl p-8 md:p-12">
          <h3 className="text-3xl font-serif font-bold text-dark-charcoal mb-8 text-center">Plan Your Visit</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <span className="font-semibold text-gray-500 text-sm uppercase tracking-wide w-36 shrink-0 pt-0.5">Address</span>
              <span className="text-dark-charcoal">7507 County Road 39, Fort Lupton, CO 80621</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <span className="font-semibold text-gray-500 text-sm uppercase tracking-wide w-36 shrink-0 pt-0.5">CTAF</span>
              <span className="text-dark-charcoal">122.9</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <span className="font-semibold text-gray-500 text-sm uppercase tracking-wide w-36 shrink-0 pt-0.5">Pattern Alt</span>
              <span className="text-dark-charcoal">5,500 ft MSL</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <span className="font-semibold text-gray-500 text-sm uppercase tracking-wide w-36 shrink-0 pt-0.5">Landing Fee</span>
              <span className="text-dark-charcoal">None</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <span className="font-semibold text-gray-500 text-sm uppercase tracking-wide w-36 shrink-0 pt-0.5">Runways</span>
              <span className="text-dark-charcoal">15/33 — 4,100 ft paved<br />9/27 — 2,500 ft grass</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <span className="font-semibold text-gray-500 text-sm uppercase tracking-wide w-36 shrink-0 pt-0.5">Coordinates</span>
              <span className="text-dark-charcoal">40°4.6'N / 104°47.6'W</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About