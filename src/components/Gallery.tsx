import rotationData from '../../data/gallery-rotation.json'

export default function Gallery() {
  const { sets, active_week, credit_zachery, credit_airpark } = rotationData
  const currentSet = sets.find(s => s.week === active_week) || sets[0]

  const zacheryPhotos = currentSet.photos.filter(p => p.credit === 'zachery')
  const airparkPhotos = currentSet.photos.filter(p => p.credit === 'airpark')

  return (
    <section id="gallery" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-[#BD212F] text-sm font-bold tracking-widest uppercase mb-3">18V in Photos</p>
          <h2 className="text-4xl font-serif font-bold text-[#1a1a1a]">The Field</h2>
          <p className="text-gray-500 mt-3 text-sm">Updated weekly · {currentSet.label}</p>
        </div>

        {/* Zachery's fly-in photos */}
        {zacheryPhotos.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
              <h3 className="text-lg font-serif font-bold text-[#1a1a1a]">Pancake Breakfast Fly-In · April 2026</h3>
              <span className="text-xs text-gray-400 italic">{credit_zachery}</span>
            </div>
            <div className="masonry-grid">
              {zacheryPhotos.map((photo) => (
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
        )}

        {/* Airpark photos */}
        {airparkPhotos.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
              <h3 className="text-lg font-serif font-bold text-[#1a1a1a]">Platte Valley Airpark (18V)</h3>
              <span className="text-xs text-gray-400 italic">{credit_airpark}</span>
            </div>
            <div className="masonry-grid">
              {airparkPhotos.map((photo) => (
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
        )}

      </div>
    </section>
  )
}
