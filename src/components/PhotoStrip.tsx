export default function PhotoStrip() {
  const photos = [
    { src: '/images/DSC_0052.jpg', alt: 'Aircraft on the ramp at Platte Valley Airpark' },
    { src: '/images/DSC_0080.jpg', alt: 'Hangars and Colorado sky at 18V' },
    { src: '/images/DSC_0093.jpg', alt: 'Ramp operations at Platte Valley Airpark' },
    { src: '/images/DSC_0110.jpg', alt: 'Colorado Front Range scenery from 18V' },
    { src: '/images/DSC_0112.jpg', alt: 'General aviation aircraft at Fort Lupton airport' },
  ]

  return (
    <div className="w-full">
      {/* Desktop: 5 photos side by side */}
      <div className="hidden md:flex w-full h-72 overflow-hidden">
        {photos.map((photo) => (
          <div key={photo.src} className="flex-1 overflow-hidden">
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
      {/* Mobile: 2-col grid */}
      <div className="grid grid-cols-2 md:hidden w-full">
        {photos.map((photo) => (
          <div key={photo.src} className="overflow-hidden h-48">
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
