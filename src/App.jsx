import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SplashScreen from './components/SplashScreen'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [showSplash, setShowSplash] = useState(true)

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
    <div className="min-h-screen bg-cyber-dark text-white relative overflow-x-hidden">
      {/* Cyberpunk Effects - grid only (no particles/scanlines for performance) */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none z-0" />

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
  )
}

export default App
