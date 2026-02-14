import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const SplashScreen = ({ onComplete }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          onComplete()
        }, 500)
      },
    })

    // Terminal boot sequence
    timeline
      .to('.terminal-line', {
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
      })
      .to('.splash-title', {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
      })
      .to('.splash-title', {
        textShadow: '0 0 40px rgba(250, 204, 21, 1), 0 0 80px rgba(250, 204, 21, 0.8), 0 0 120px rgba(250, 204, 21, 0.6)',
        duration: 0.5,
      })
      .to('.splash-title', {
        scale: 1.05,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
      })

    // Loading dots animation (3 cycles)
    for (let i = 0; i < 3; i++) {
      timeline
        .to('.splash-dots', {
          opacity: 1,
          duration: 0.3,
        })
        .to('.dot-1', { opacity: 1, scale: 1, duration: 0.15 })
        .to('.dot-2', { opacity: 1, scale: 1, duration: 0.15 })
        .to('.dot-3', { opacity: 1, scale: 1, duration: 0.15 })
        .to('.splash-dots', {
          opacity: 0,
          duration: 0.2,
        })
        .to('.dot-1, .dot-2, .dot-3', {
          opacity: 0,
          scale: 0.5,
          duration: 0.1,
        })
    }

    // Welcome message
    timeline
      .to('.splash-title', {
        opacity: 0,
        y: -50,
        scale: 0.9,
        duration: 0.5,
      })
      .to('.terminal-lines', {
        opacity: 0,
        duration: 0.3,
      })
      .to('.splash-welcome', {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
      })
      .to('.splash-welcome', {
        scale: 1.05,
        textShadow: '0 0 30px rgba(168, 85, 247, 1), 0 0 60px rgba(168, 85, 247, 0.8)',
        duration: 0.3,
        yoyo: true,
        repeat: 1,
      })
      .to('.splash-welcome', {
        opacity: 0,
        y: -30,
        duration: 0.5,
      })
      .to('.splash-container', {
        opacity: 0,
        duration: 0.6,
      })
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      className="splash-container fixed inset-0 z-[10000] bg-cyber-dark flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated Background Layers */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      
      {/* Hexagonal Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z' fill='none' stroke='%23facc15' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }}
      />


      {/* Terminal Console Lines */}
      <div className="terminal-lines absolute top-8 left-4 md:left-8 font-mono text-xs md:text-sm text-cyber-cyan opacity-0">
        <div className="terminal-line opacity-0 mb-1">
          <span className="text-cyber-magenta">{'>'}</span> INITIALIZING SYSTEM...
        </div>
        <div className="terminal-line opacity-0 mb-1">
          <span className="text-cyber-magenta">{'>'}</span> LOADING NEURAL NETWORK...
        </div>
        <div className="terminal-line opacity-0 mb-1">
          <span className="text-cyber-magenta">{'>'}</span> CONNECTING TO MATRIX...
        </div>
        <div className="terminal-line opacity-0">
          <span className="text-cyber-green">✓</span> SYSTEM READY
        </div>
      </div>

      {/* Holographic Border Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          border: '2px solid rgba(250, 204, 21, 0.3)',
          boxShadow: `
            inset 0 0 50px rgba(250, 204, 21, 0.1),
            inset 0 0 100px rgba(168, 85, 247, 0.1),
            0 0 50px rgba(250, 204, 21, 0.2)
          `,
        }}
      />

      {/* Main Content Container - Perfectly Centered */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-8 w-full">
        {/* Main Title with Glitch Effect */}
        <h1
          className="splash-title text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center opacity-0 scale-90 glitch-text w-full"
          data-text="IM PHANNYVATH"
          style={{
            color: '#facc15',
            textShadow: '0 0 30px rgba(250, 204, 21, 0.8), 0 0 60px rgba(250, 204, 21, 0.6)',
            fontFamily: 'Orbitron, sans-serif',
            letterSpacing: '0.1em',
            lineHeight: '1.1',
          }}
        >
          IM PHANNYVATH
        </h1>

        {/* Loading Dots with Enhanced Effects */}
        <div className="splash-dots flex gap-3 md:gap-4 mt-8 md:mt-12 opacity-0 justify-center items-center">
          {[1, 2, 3].map((num) => (
            <div key={num} className="relative flex items-center justify-center">
              <span
                className={`dot-${num} w-3 h-3 md:w-4 md:h-4 bg-cyber-cyan rounded-full opacity-0 scale-50 block`}
                style={{
                  boxShadow: `
                    0 0 10px #facc15,
                    0 0 20px #facc15,
                    0 0 30px rgba(250, 204, 21, 0.5)
                  `,
                }}
              />
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 md:mt-8 w-64 md:w-80 h-1 bg-cyber-navy/50 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-magenta to-cyber-blue rounded-full"
            style={{
              width: '0%',
              boxShadow: '0 0 10px rgba(250, 204, 21, 0.8)',
              animation: 'progress-load 4s ease-in-out forwards',
            }}
          />
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyber-cyan opacity-50" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyber-cyan opacity-50" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyber-cyan opacity-50" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyber-cyan opacity-50" />
      </div>

      {/* Welcome Message - Centered in middle of screen (positioned relative to splash-container) */}
      <div
        className="splash-welcome absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center opacity-0 px-4 w-full max-w-4xl z-20"
        style={{
          color: '#a855f7',
          textShadow: '0 0 20px rgba(168, 85, 247, 0.8), 0 0 40px rgba(168, 85, 247, 0.6)',
          fontFamily: 'Orbitron, sans-serif',
          letterSpacing: '0.1em',
          lineHeight: '1.2',
        }}
      >
        Welcome to ENEL website
      </div>

      {/* Style tag for progress animation */}
      <style>{`
        @keyframes progress-load {
          0% { width: 0%; }
          50% { width: 60%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  )
}

export default SplashScreen
