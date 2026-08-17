import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import ConsultingSuite from './pages/ConsultingSuite'
import SiteAnalytics from './pages/SiteAnalytics'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    const loader = document.getElementById('app-loader')
    if (!loader) return
    // Hold the overlay until the progress bar finishes (~1.4s: fast to 80%,
    // slower through the last 20%), measured from page load, then fade out.
    const MIN_DISPLAY_MS = 1700
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const wait = reducedMotion ? 0 : Math.max(0, MIN_DISPLAY_MS - performance.now())
    const fade = setTimeout(() => loader.classList.add('done'), wait)
    const remove = setTimeout(() => loader.remove(), wait + 600)
    return () => {
      clearTimeout(fade)
      clearTimeout(remove)
    }
  }, [])

  // The analytics page is a standalone tool view: no site chrome.
  const bare = location.pathname === '/site-analytics-k4n8'

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      {!bare && <Navbar />}
      <main key={location.pathname} className="page-fade flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Unlisted: direct link only, noindex; not in nav or footer */}
          <Route path="/consulting-suite-mq7x" element={<ConsultingSuite />} />
          <Route path="/site-analytics-k4n8" element={<SiteAnalytics />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {!bare && <Footer />}
      {!bare && <WhatsAppFloat />}
    </div>
  )
}
