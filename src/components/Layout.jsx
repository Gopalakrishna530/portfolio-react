import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingActions from './FloatingActions'
import ParticleBackground from './ParticleBackground'

const Layout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <ParticleBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
      <FloatingActions />
    </div>
  )
}

export default Layout
