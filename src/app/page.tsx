import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import PhotoStrip from '@/components/PhotoStrip'
import About from '@/components/About'
import FuelServices from '@/components/FuelServices'
import Gallery from '@/components/Gallery'
import RunwayReports from '@/components/RunwayReports'
import Events from '@/components/Events'
import MailingList from '@/components/MailingList'
import Footer from '@/components/Footer'
import siteData from '../../data/site.json'
import eventsData from '../../data/events.json'
import runwayReportsData from '../../data/runway-reports.json'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero site={siteData} />
      <Stats site={siteData} />
      <PhotoStrip />
      <About />
      <FuelServices site={siteData} />
      <Gallery />
      <RunwayReports reports={runwayReportsData} />
      <Events events={eventsData} />
      <MailingList />
      <Footer site={siteData} />
    </main>
  )
}
