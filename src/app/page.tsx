import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import FuelServices from '@/components/FuelServices'
import FlyIn from '@/components/FlyIn'
import Gallery from '@/components/Gallery'
import Events from '@/components/Events'
import MailingList from '@/components/MailingList'
import Footer from '@/components/Footer'
import siteData from '../../data/site.json'
import eventsData from '../../data/events.json'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero site={siteData} />
      <Stats site={siteData} />
      <About />
      <FuelServices site={siteData} />
      <FlyIn site={siteData} />
      <Gallery />
      <Events events={eventsData} />
      <MailingList />
      <Footer site={siteData} />
    </main>
  )
}