interface RegionalEvent {
  id: string;
  name: string;
  airport: string;
  date: string;
  dateDisplay: string;
  time: string;
  event_type: string;
  website: string;
  notes: string;
}

interface RegionalEventsProps {
  events: RegionalEvent[];
}

const RegionalEvents = ({ events }: RegionalEventsProps) => {
  if (!events || events.length === 0) return null

  return (
    <section id="regional-events" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-dark-charcoal mb-4 text-center">
          Front Range Aviation Events
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
          What&apos;s happening at airports across the Front Range this summer. Get out there and fly.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <div key={event.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200 flex flex-col">
              <h3 className="text-xl font-serif font-bold text-dark-charcoal mb-1">{event.name}</h3>
              <p className="text-airpark-red font-semibold text-sm mb-1">{event.dateDisplay}</p>
              {event.time && (
                <p className="text-gray-500 text-sm mb-2">{event.time}</p>
              )}
              <p className="text-gray-600 text-sm mb-1">
                <span className="font-semibold">📍</span> {event.airport}
              </p>
              <p className="text-gray-600 text-sm mt-3 flex-grow">{event.notes}</p>
              {event.website && (
                <a
                  href={event.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-airpark-red hover:underline text-sm font-semibold mt-4 inline-block"
                >
                  Details →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RegionalEvents
