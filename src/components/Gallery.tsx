export default function Gallery() {
  const photos = [
    { src: '/images/1.jpg', alt: 'Aircraft at Platte Valley Airpark 18V' },
    { src: '/images/2.jpg', alt: 'Ramp scene at Fort Lupton general aviation airport' },
    { src: '/images/3.jpg', alt: 'Colorado skies over Platte Valley Airpark' },
    { src: '/images/4.jpg', alt: 'Aircraft on the ramp at 18V' },
    { src: '/images/5.jpg', alt: 'Hangar row at Platte Valley Airpark' },
    { src: '/images/6.jpg', alt: 'Light aircraft at 18V Fort Lupton Colorado' },
    { src: '/images/7.jpg', alt: 'General aviation scene at Platte Valley Airpark' },
    { src: '/images/8.jpg', alt: 'Pilots and aircraft at 18V community airport' },
    { src: '/images/9.jpg', alt: 'Ramp activity at Platte Valley Airpark' },
    { src: '/images/10.jpg', alt: 'Aircraft parked at Platte Valley Airpark 18V' },
    { src: '/images/11.jpg', alt: 'Colorado Front Range aviation at 18V' },
    { src: '/images/12.jpg', alt: 'Community flying at Platte Valley Airpark' },
    { src: '/images/13.jpg', alt: 'Aircraft detail at 18V Fort Lupton' },
    { src: '/images/14.jpg', alt: 'Airpark event at Platte Valley 18V' },
    { src: '/images/15.jpg', alt: 'Community gathering at Platte Valley Airpark' },
    { src: '/images/16.jpg', alt: 'Pilots at Platte Valley Airpark Colorado' },
    { src: '/images/17.jpg', alt: 'Ramp scene at 18V general aviation airport' },
    { src: '/images/18.jpg', alt: 'CubCrafters NXCub at Platte Valley Airpark' },
    { src: '/images/19.jpg', alt: 'Aircraft detail at Platte Valley Airpark' },
    { src: '/images/20.jpg', alt: 'Flying scene at 18V Colorado' },
    { src: '/images/21.jpg', alt: 'General aviation at Fort Lupton airport' },
    { src: '/images/22.jpg', alt: 'Aircraft at Platte Valley Airpark 18V' },
    { src: '/images/23.jpg', alt: 'Ramp operations at 18V Fort Lupton' },
    { src: '/images/24.jpg', alt: 'Colorado aviation at Platte Valley Airpark' },
    { src: '/images/25.jpg', alt: 'Light aircraft at 18V community airport' },
    { src: '/images/26.jpg', alt: 'Aircraft on the ramp at Platte Valley Airpark' },
    { src: '/images/27.jpg', alt: 'General aviation community at 18V' },
    { src: '/images/28.jpg', alt: 'Platte Valley Airpark from the ramp' },
    { src: '/images/29.jpg', alt: 'Aircraft operations at Fort Lupton 18V' },
    { src: '/images/30.jpg', alt: 'Colorado Front Range flying at Platte Valley Airpark' },
    { src: '/images/31.jpg', alt: 'Hangar scene at 18V general aviation airport' },
    { src: '/images/32.jpg', alt: 'Aircraft at Platte Valley Airpark' },
    { src: '/images/33.jpg', alt: 'Ramp life at 18V Fort Lupton Colorado' },
    { src: '/images/34.jpg', alt: 'Platte Valley Airpark community event' },
    { src: '/images/35.jpg', alt: 'Aircraft detail at 18V airpark' },
    { src: '/images/36.jpg', alt: 'Light aircraft on the ramp at 18V' },
    { src: '/images/37.jpg', alt: 'Colorado skies and aircraft at Platte Valley Airpark' },
    { src: '/images/38.jpg', alt: 'Pilots and planes at 18V Fort Lupton' },
    { src: '/images/39.jpg', alt: 'Ramp scene at Platte Valley Airpark 18V' },
    { src: '/images/40.jpg', alt: 'Aircraft at general aviation airport 18V' },
    { src: '/images/41.jpg', alt: 'Platte Valley Airpark ramp activity' },
    { src: '/images/42.jpg', alt: 'Colorado aviation community at 18V' },
    { src: '/images/43.jpg', alt: 'Aircraft parked at Platte Valley Airpark' },
    { src: '/images/44.jpg', alt: 'Hangar row at 18V Fort Lupton Colorado' },
    { src: '/images/45.jpg', alt: 'General aviation at Platte Valley Airpark' },
    { src: '/images/46.jpg', alt: 'Aircraft operations at 18V community airport' },
    { src: '/images/47.jpg', alt: 'Ramp life at Platte Valley Airpark Colorado' },
    { src: '/images/48.jpg', alt: 'Colorado Front Range flying from 18V' },
    { src: '/images/49.jpg', alt: 'Aircraft at Platte Valley Airpark 18V' },
    { src: '/images/50.jpg', alt: 'Community gathering at 18V Fort Lupton' },
    { src: '/images/51.jpg', alt: 'Aircraft detail at Platte Valley Airpark' },
    { src: '/images/52.jpg', alt: 'Ramp scene at 18V general aviation airport' },
    { src: '/images/53.jpg', alt: 'Colorado aviation at Platte Valley Airpark' },
    { src: '/images/54.jpg', alt: 'General aviation scene at 18V' },
    { src: '/images/55.jpg', alt: 'Aircraft and hangars at Platte Valley Airpark' },
    { src: '/images/56.jpg', alt: 'Ramp activity at 18V Fort Lupton' },
    { src: '/images/57.jpg', alt: 'Aircraft on the ramp at Platte Valley Airpark' },
    { src: '/images/58.jpg', alt: 'Pilots at 18V community airport' },
    { src: '/images/59.jpg', alt: 'Colorado skies at Platte Valley Airpark' },
    { src: '/images/60.jpg', alt: 'Aircraft departing 18V with mountain views' },
    { src: '/images/61.jpg', alt: 'Hangar operations at Platte Valley Airpark' },
    { src: '/images/62.jpg', alt: 'Light aircraft at Fort Lupton general aviation' },
    { src: '/images/63.jpg', alt: 'Ramp scene at 18V Colorado' },
    { src: '/images/64.jpg', alt: 'Aircraft detail at Platte Valley Airpark' },
    { src: '/images/65.jpg', alt: 'Community event at 18V airpark' },
    { src: '/images/66.jpg', alt: 'Colorado Front Range from Platte Valley Airpark' },
    { src: '/images/67.jpg', alt: 'Aircraft on the ramp at 18V Fort Lupton' },
    { src: '/images/68.jpg', alt: 'Platte Valley Airpark aerial view' },
    { src: '/images/69.jpg', alt: 'Aircraft and pilots at 18V community airport' },
    { src: '/images/70.jpg', alt: 'Ramp life at Platte Valley Airpark' },
    { src: '/images/71.jpg', alt: 'Colorado aviation community at 18V' },
    { src: '/images/72.jpg', alt: 'Aircraft at Platte Valley Airpark 18V' },
    { src: '/images/73.jpg', alt: 'General aviation at Fort Lupton 18V' },
    { src: '/images/74.jpg', alt: 'Platte Valley Airpark ramp and hangars' },
    { src: '/images/77.jpg', alt: 'Aircraft operations at 18V Colorado' },
    { src: '/images/78.jpg', alt: 'Community flying at Platte Valley Airpark' },
    { src: '/images/79.jpg', alt: 'Ramp scene at Platte Valley Airpark 18V' },
    { src: '/images/80.jpg', alt: 'Aircraft at general aviation airport 18V' },
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
