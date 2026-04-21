import Link from 'next/link'

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  cost: string;
  image: string | null;
  link: string | null;
  featured: boolean;
}

interface EventsProps {
  events: Event[];
}

const Events = ({ events }: EventsProps) => {
  const featuredEvent = events.find(event => event.featured)
  const regularEvents = events.filter(event => !event.featured)

  return (
    <section id="events" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-bold text-dark-charcoal mb-12">Upcoming Events</h2>

        {featuredEvent && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden lg:flex items-center mb-12">
            {featuredEvent.image && (
              <div className="lg:w-1/2">
                <img src={featuredEvent.image} alt={featuredEvent.title} className="w-full h-80 object-cover" loading="lazy" />
              </div>
            )}
            <div className="p-8 lg:w-1/2 text-left">
              <h3 className="text-3xl font-serif font-bold text-dark-charcoal mb-4">{featuredEvent.title}</h3>
              <p className="text-airpark-red text-lg mb-2"><strong>Date:</strong> {featuredEvent.date}</p>
              <p className="text-gray-700 text-lg mb-4"><strong>Time:</strong> {featuredEvent.time}</p>
              <p className="text-gray-700 mb-4">{featuredEvent.description}</p>
              <p className="text-gray-700 mb-6"><strong>Cost:</strong> {featuredEvent.cost}</p>
              {featuredEvent.link && (
                <Link href={featuredEvent.link} className="bg-airpark-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                  View Details
                </Link>
              )}
            </div>
          </div>
        )}

        {regularEvents.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularEvents.map(event => (
              <div key={event.id} className="bg-white p-6 rounded-lg shadow-md text-left">
                <h3 className="text-2xl font-serif font-bold text-dark-charcoal mb-2">{event.title}</h3>
                <p className="text-airpark-red mb-1"><strong>Date:</strong> {event.date}</p>
                {event.time && <p className="text-gray-700 mb-3"><strong>Time:</strong> {event.time}</p>}
                <p className="text-gray-700 mb-3">{event.description}</p>
                {event.cost && <p className="text-gray-500 text-sm"><strong>Cost:</strong> {event.cost}</p>}
                {event.link && (
                  <a href={event.link} className="text-airpark-red hover:underline text-sm font-semibold mt-2 inline-block">Details →</a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Events