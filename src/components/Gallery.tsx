import Link from 'next/link'
import rotationData from '../../data/gallery-rotation.json'

export default function Gallery() {
  const { sets, active_week, credit_airpark } = rotationData
  const currentSet = sets.find(s => s.week === active_week) || sets[0]

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

        {/* Airpark photos */}
        {airparkPhotos.length > 0 && (
          <div>
            <div className="masonry-grid">
              {airparkPhotos.map((photo) => (
                <img
                  key={photo.src}
                  src={photo.src.replace('/images/', '/images/thumbs/')}
                  alt={photo.alt}
                  loading="lazy"
                  className="hover:scale-[1.02] transition-transform duration-300 cursor-zoom-in"
                />
              ))}
            </div>
          </div>
        )}

        {/* View All Photos link */}
        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="text-airpark-red font-semibold hover:underline text-base"
          >
            View All Photos →
          </Link>
        </div>

      </div>
    </section>
  )
}
