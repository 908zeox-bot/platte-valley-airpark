const Gallery = () => {
  const images = [
    { src: '/images/DSC_0113.jpg', alt: 'Aircraft on ramp at sunset' },
    { src: '/images/DSC_0114.jpg', alt: 'View from a cockpit during takeoff' },
    { src: '/images/DSC_0115.jpg', alt: 'Biplane flying over the airpark' },
    { src: '/images/DSC_0119.jpg', alt: 'Historic aircraft parked on the grass strip' },
    { src: '/images/DSC_0049.jpg', alt: 'Pilots chatting next to an aircraft' },
    { src: '/images/DSC_0045.jpg', alt: 'Close-up of an aircraft propeller' },
    { src: '/images/IMG_3224.jpg', alt: 'Community gathering at the airpark' },
    { src: '/images/DSC_0056.jpg', alt: 'Small aircraft preparing for takeoff' },
    { src: '/images/DSC_0066.jpg', alt: 'Aerial view of the paved runway' },
    { src: '/images/IMG_2093.jpg', alt: 'Taildragger aircraft landing on grass' },
    { src: '/images/DSC_0084.jpg', alt: 'Sunset over the airpark hangars' },
    { src: '/images/DSC_0107.jpg', alt: 'Aircraft engine maintenance' },
  ]

  return (
    <section id="gallery" className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-bold text-dark-charcoal mb-12">The Field</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-103">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery