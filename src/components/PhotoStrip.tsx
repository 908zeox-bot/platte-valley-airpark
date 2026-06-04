export default function PhotoStrip() {
  const photos = [
    { src: '/images/64.jpg', alt: 'Aircraft on the ramp at Platte Valley Airpark' },
    { src: '/images/58.jpg', alt: 'Hangars and Colorado sky at 18V' },
    { src: '/images/55.jpg', alt: 'Ramp operations at Platte Valley Airpark' },
    { src: '/images/50.jpg', alt: 'Colorado Front Range scenery from 18V' },
    { src: '/images/52.jpg', alt: 'General aviation aircraft at Fort Lupton airport' },
  ]

  return (
    <div className="w-full">
      {/* Desktop: 5 photos side by side */}
      <div className="hidden md:flex w-full h-72 overflow-hidden">
        {photos.map((photo) => (
          <div key={photo.src} className="flex-1 overflow-hidden">
            <img
              src={photo.src.replace('/images/', '/images/thumbs/')}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
      {/* Mobile: 2-col grid, last photo full width if odd count */}
      <div className="grid grid-cols-2 md:hidden w-full">
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            className={`overflow-hidden h-48${
              i === photos.length - 1 && photos.length % 2 !== 0 ? ' col-span-2' : ''
            }`}
          >
            <img
              src={photo.src.replace('/images/', '/images/thumbs/')}
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
