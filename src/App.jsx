import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTheme } from './context/ThemeContext'
import Navigation from './components/Navigation'
import MobileNav from './components/MobileNav'
import MobileLayout from './components/mobile/MobileLayout'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SplashScreen from './components/SplashScreen'

gsap.registerPlugin(ScrollTrigger)

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const m = window.matchMedia('(max-width: 767px)')
    setIsMobile(m.matches)
    const fn = () => setIsMobile(m.matches)
    m.addEventListener('change', fn)
    return () => m.removeEventListener('change', fn)
  }, [])
  return isMobile
}

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [mobilePage, setMobilePage] = useState('hero')
  const isMobile = useIsMobile()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    if (!showSplash) {
      // Simple fade-in on scroll (lighter than full fromTo)
      gsap.utils.toArray('.section').forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }
  }, [showSplash])

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  return (
    <div className="app-root min-h-screen bg-cyber-dark text-white relative overflow-x-hidden">
      {/* Desktop: grid + top nav + main + footer */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none z-0 hidden md:block" />
      <div className="hidden md:block">
        <Navigation />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Mobile: one page at a time, nav switches page */}
      {isMobile && (
        <>
          <button
            onClick={toggleTheme}
            className="md:hidden fixed top-4 right-4 z-[60] p-2.5 rounded-xl border-2 border-cyber-cyan/50 bg-cyber-darker/90 text-cyber-cyan shadow-lg active:scale-95 transition-transform"
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <MobileNav activePage={mobilePage} onNavigate={setMobilePage} />
          <MobileLayout activePage={mobilePage} onNavigate={setMobilePage} />
        </>
      )}
    </div>
  )
}

export default App
