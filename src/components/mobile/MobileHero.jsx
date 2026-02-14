import { useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useTheme } from '../../context/ThemeContext'
import SpaceBackground from '../SpaceBackground'
import SkyWithClouds from '../SkyWithClouds'
import LightModePlane from '../LightModePlane'

const yourName = 'ENEL'
const yourSkill = 'Full Stack Developer'
const skillWords = yourSkill.split(' ')

export default function MobileHero({ onNavigate }) {
  const { theme } = useTheme()
  const [visibleWords, setVisibleWords] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setVisibleWords((prev) => (prev >= skillWords.length ? 0 : prev + 1))
    }, 450)
    return () => clearInterval(t)
  }, [])

  const goTo = (id) => {
    onNavigate?.(id)
  }

  return (
    <section
      id="mobile-hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-12 pb-28 relative overflow-hidden md:hidden"
    >
      {/* Dark: 3D space + spaceship (auto-spin). Light: blue sky + float plane */}
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
                autoRotate={true}
                autoRotateSpeed={0.4}
              />
            </Canvas>
          </div>
        </>
      ) : (
        <>
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
                autoRotate={true}
                autoRotateSpeed={0.4}
              />
            </Canvas>
          </div>
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background: 'linear-gradient(180deg, rgba(5,3,10,0.85) 0%, rgba(30,27,75,0.7) 40%, rgba(5,3,10,0.9) 100%)',
            }}
          />
          <div
            className="absolute inset-0 z-[1] opacity-40"
            style={{
              backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% 20%, rgba(250, 204, 21, 0.15), transparent 50%)',
            }}
          />
        </>
      )}
      {/* Light mode: subtle overlay so text is readable on sky */}
      {theme === 'light' && (
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 40%, transparent 100%)',
          }}
        />
      )}

      <div className="relative z-10 text-center">
        <h1
          className="text-5xl font-black uppercase tracking-[0.2em] mb-4"
          style={{
            fontFamily: 'Orbitron, sans-serif',
            color: 'var(--cyber-cyan)',
            textShadow: '0 0 20px var(--cyber-cyan), 0 0 40px color-mix(in srgb, var(--cyber-cyan) 50%, transparent)',
          }}
        >
          {yourName}
        </h1>
        <p
          className="text-lg font-mono mb-10 text-slate-200"
          style={{ textShadow: '0 0 10px var(--cyber-cyan)', color: 'var(--cyber-cyan)' }}
        >
          <span>{skillWords.slice(0, visibleWords).join(' ')}</span>
          <span className="animate-pulse">_</span>
        </p>

        <div className="flex flex-col gap-4 max-w-xs mx-auto">
          <button
            onClick={() => goTo('projects')}
            className="btn-secondary w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-widest border-2 transition-all active:scale-[0.98]"
            style={{
              borderColor: 'var(--cyber-cyan)',
              color: 'var(--cyber-cyan)',
              boxShadow: '0 0 20px color-mix(in srgb, var(--cyber-cyan) 40%, transparent)',
            }}
          >
            View Projects
          </button>
          <button
            onClick={() => goTo('contact')}
            className="w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, var(--cyber-cyan), var(--cyber-blue))',
              color: 'var(--cyber-btn-on-accent)',
              boxShadow: '0 0 25px color-mix(in srgb, var(--cyber-cyan) 40%, transparent), 0 0 40px color-mix(in srgb, var(--cyber-blue) 30%, transparent)',
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}
