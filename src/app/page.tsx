
import Sidebar from '@/components/sidebar/sidebar'
import Header from '@/components/header/header'
import Services from '@/components/services/services'
import PortfolioSection from '@/components/portfolio/PortfolioSection'
export default function Home() {
  return (
    <main className="min-h-screen border border-red-500 2xl:mx-40">

      <Sidebar />

      <Header />

      <Services />

      <PortfolioSection />

    </main>
  )
} 