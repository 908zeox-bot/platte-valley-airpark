export default function Gallery() {
  const photos = [
    { src: '/images/DSC_0001.jpg', alt: 'Fire and rescue vehicle at Platte Valley Airpark' },
    { src: '/images/DSC_0003.jpg', alt: 'Aircraft operations at 18V Fort Lupton' },
    { src: '/images/DSC_0004.jpg', alt: 'Ramp scene at Platte Valley Airpark' },
    { src: '/images/DSC_0018.jpg', alt: 'Colorado general aviation at 18V' },
    { src: '/images/DSC_0029.jpg', alt: 'Aerial overview of Platte Valley Airpark from above' },
    { src: '/images/DSC_0045.jpg', alt: 'Aircraft parked at 18V hangar row' },
    { src: '/images/DSC_0049.jpg', alt: 'Light aircraft on the ramp at Fort Lupton airport' },
    { src: '/images/DSC_0052.jpg', alt: 'Ramp atmosphere at Platte Valley Airpark' },
    { src: '/images/DSC_0053.jpg', alt: 'Colorado Front Range flying from 18V' },
    { src: '/images/DSC_0056.jpg', alt: 'Community day at Platte Valley Airpark' },
    { src: '/images/DSC_0064.jpg', alt: 'Comprehensive aerial view of 18V runways and hangars' },
    { src: '/images/DSC_0066.jpg', alt: 'Pilots gathering at Platte Valley Airpark event' },
    { src: '/images/DSC_0080.jpg', alt: 'T-hangars under Colorado blue sky at 18V' },
    { src: '/images/DSC_0084.jpg', alt: 'Aircraft taxiing at Platte Valley Airpark' },
    { src: '/images/DSC_0092.jpg', alt: 'Mountain aerial view looking west from 18V' },
    { src: '/images/DSC_0093.jpg', alt: 'Ramp operations with Rocky Mountain backdrop' },
    { src: '/images/DSC_0105.jpg', alt: 'Light aircraft at Fort Lupton general aviation airport' },
    { src: '/images/DSC_0106.jpg', alt: 'Aircraft lineup on the ramp at 18V' },
    { src: '/images/DSC_0107.jpg', alt: 'Platte Valley Airpark ramp with Colorado skies' },
    { src: '/images/DSC_0110.jpg', alt: 'Colorado plains and mountains from Platte Valley Airpark' },
    { src: '/images/DSC_0112.jpg', alt: 'General aviation scene at 18V Fort Lupton' },
    { src: '/images/DSC_0113.jpg', alt: 'Aircraft detail at Platte Valley Airpark' },
    { src: '/images/DSC_0114.jpg', alt: 'Prop aircraft at 18V community airport' },
    { src: '/images/DSC_0115.jpg', alt: 'Light aircraft on the grass at Platte Valley Airpark' },
    { src: '/images/DSC_0119.jpg', alt: 'Aircraft departing 18V with mountain views' },
    { src: '/images/IMG_3224.jpg', alt: 'CubCrafters NXCub at Platte Valley Airpark' },
    { src: '/images/IMG_2093.jpg', alt: 'Community event at Platte Valley Airpark 18V' },
    { src: '/images/IMG_2098.jpg', alt: 'Pilots and community at 18V Fort Lupton' },
    { src: '/images/IMG_3227.jpg', alt: 'Aircraft detail at Platte Valley Airpark' },
    { src: '/images/IMG_3254.jpg', alt: 'Flying scene at 18V Colorado' },
    { src: '/images/IMG_3256.jpg', alt: 'General aviation community at Platte Valley Airpark' },
  ]

  return (
    <section id="gallery" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#BD212F] text-sm font-bold tracking-widest uppercase mb-3">18V in Photos</p>
          <h2 className="text-4xl font-serif font-bold text-[#1a1a1a]">The Field</h2>
        </div>
        <div className="masonry-grid">
          {photos.map((photo) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="hover:scale-[1.02] transition-transform duration-300 cursor-zoom-in"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
