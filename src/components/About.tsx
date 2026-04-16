const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
      </div>
    </section>
  )
}

export default About