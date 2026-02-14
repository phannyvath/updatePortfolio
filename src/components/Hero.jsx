import { useEffect, useRef, useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useTheme } from '../context/ThemeContext'
import SpaceBackground from './SpaceBackground'
import SkyWithClouds from './SkyWithClouds'
import LightModePlane from './LightModePlane'

const Hero = () => {
  const { theme } = useTheme()
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)

  // ✏️ CUSTOMIZE: Replace with your actual name and skill
  const yourName = 'ENEL'
  const yourSkill = 'Full Stack Developer'

  // Typing animation state for the skill line (word by word)
  const skillWords = yourSkill.split(' ')
  const [visibleWords, setVisibleWords] = useState(0)

  useEffect(() => {
    // Loop typing effect forever: clear → type words one by one → clear → repeat
    const interval = setInterval(() => {
      setVisibleWords((prev) =>
        prev >= skillWords.length ? 0 : prev + 1
      )
    }, 450) // word appears every 0.45s

    return () => clearInterval(interval)
  }, [yourSkill])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cyber-dark"
      style={{ position: 'relative' }}
    >
      {/* Grid: theme-aware (yellow dark / blue light) */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none" style={{ zIndex: 0 }} />

      {/* Dark: space + stars + spaceship. Light: blue sky + float plane */}
      {theme === 'light' ? (
        <>
          <SkyWithClouds />
          <div className="absolute inset-0 z-0 w-full min-h-screen" style={{ height: '100%' }}>
            <Canvas
              camera={{ position: [0, 0, 8], fov: 60 }}
              gl={{ antialias: true, alpha: true }}
              style={{ width: '100%', height: '100%', display: 'block' }}
            >
              <Suspense fallback={null}>
                <LightModePlane />
              </Suspense>
              <OrbitControls
                enableZoom={false}
                enableRotate={true}
                enablePan={false}
                autoRotate={false}
              />
            </Canvas>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 z-0 w-full min-h-screen" style={{ height: '100%' }}>
          <Canvas
            camera={{ position: [0, 0, 8], fov: 60 }}
            gl={{ antialias: true, alpha: false }}
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            <Suspense fallback={null}>
              <SpaceBackground />
            </Suspense>
            <OrbitControls
              enableZoom={false}
              enableRotate={true}
              enablePan={false}
              autoRotate={false}
            />
          </Canvas>
        </div>
      )}

      {/* Content Container – simple overlays */}
      <div className="relative z-10 w-full flex flex-col items-center justify-between min-h-screen py-20 px-6 pointer-events-none">
        {/* Name + skill at top */}
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-12 text-center"
          style={{ 
            color: 'var(--cyber-cyan)',
            textShadow: '0 0 20px rgba(255,255,255,0.8)',
            fontFamily: 'Orbitron, sans-serif',
            letterSpacing: '0.15em',
            pointerEvents: 'auto',
          }}
        >
          {yourName}
        </h1>

        <div ref={subtitleRef} className="mb-16 pointer-events-auto">
          <p 
            className="text-2xl md:text-3xl lg:text-4xl font-mono text-center" 
            style={{ 
              color: 'var(--cyber-cyan)',
              textShadow: '0 0 18px var(--cyber-cyan)',
              fontWeight: '600',
            }}
          >
            <span className="inline-flex items-center justify-center mr-2 align-middle text-cyber-cyan">
              {/* Modern minimal \"code\" icon instead of emoji */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5L3.75 12l4.5 4.5M15.75 7.5L20.25 12l-4.5 4.5M13.5 4.5l-3 15" />
              </svg>
            </span>
            <span className="inline-block">
              {skillWords.slice(0, visibleWords).join(' ')}
            </span>
            <span className="animate-flicker">_</span>
          </p>
        </div>

        {/* CTA Buttons at bottom */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center pointer-events-auto"
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              scrollToSection('projects')
            }}
            className="px-8 py-4 bg-transparent border-2 border-cyber-cyan text-cyber-cyan font-mono text-lg hover:bg-cyber-cyan hover:text-cyber-dark transition-all duration-300 hover:scale-110 relative overflow-hidden"
            style={{
              textShadow: '0 0 10px var(--cyber-cyan)',
              boxShadow: '0 0 20px color-mix(in srgb, var(--cyber-cyan) 30%, transparent)',
              opacity: 1,
            }}
          >
            <span className="relative z-10">VIEW PROJECTS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              scrollToSection('contact')
            }}
            className="px-8 py-4 bg-cyber-cyan text-cyber-dark font-mono text-lg hover:bg-cyber-blue transition-all duration-300 hover:scale-110 relative overflow-hidden"
            style={{
              textShadow: '0 0 10px rgba(0,0,0,0.5)',
              boxShadow: '0 0 20px color-mix(in srgb, var(--cyber-cyan) 50%, transparent)',
              opacity: 1,
            }}
          >
            <span className="relative z-10">GET IN TOUCH</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>

      </div>

      {/* No extra colored dust – keep background clean */}
    </section>
  )
}

export default Hero
