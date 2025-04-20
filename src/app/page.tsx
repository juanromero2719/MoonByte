
import Sidebar from '@/components/sidebar/sidebar'
import Header from '@/components/header/header'
import Services from '@/components/services/services'
import PortfolioSection from '@/components/portfolio/PortfolioSection'
import WhoWeAre from '@/components/opiniones/WhoWeAre'
import Contact from '@/components/contact/Contact'
export default function Home() {
  return (
    <main className="min-h-screen2xl:mx-40">

      <Sidebar />

      <Header />

      <Services id="servicios" />

      <PortfolioSection id="portafolio" />

      <WhoWeAre id="quienes-somos" />

    </main>
  )
} 