import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const Navigation = () => {
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 200

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'contact', label: 'CONTACT' },
  ]

  return (
    <nav
      className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cyber-darker/90 backdrop-blur-md border-b border-cyber-cyan/30 holographic'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 md:gap-2">
            {/* Left bracket */}
            <span
              className="text-lg md:text-xl font-bold font-mono"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                color: 'var(--cyber-blue)',
                textShadow: '0 0 8px var(--cyber-blue), 0 0 16px color-mix(in srgb, var(--cyber-blue) 60%, transparent)',
              }}
            >
              &lt;
            </span>
            <span
              className="text-lg md:text-2xl font-bold font-mono uppercase tracking-[0.4em] md:tracking-[0.5em]"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                background: 'linear-gradient(90deg, var(--cyber-cyan) 0%, var(--cyber-blue) 50%, var(--cyber-cyan) 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 8px var(--cyber-cyan)) drop-shadow(0 0 16px var(--cyber-blue))',
                letterSpacing: '0.4em',
              }}
            >
              NYVATH
            </span>
            {/* Right bracket */}
            <span
              className="text-lg md:text-xl font-bold font-mono"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                color: 'var(--cyber-blue)',
                textShadow: '0 0 8px var(--cyber-blue), 0 0 16px color-mix(in srgb, var(--cyber-blue) 60%, transparent)',
              }}
            >
              /&gt;
            </span>
            {/* System tag */}
            <span
              className="hidden sm:inline text-[10px] md:text-xs font-mono ml-1 px-1.5 py-0.5 rounded border border-cyber-cyan/50"
              style={{
                color: 'var(--cyber-cyan)',
                textShadow: '0 0 6px var(--cyber-cyan)',
              }}
            >
              v2.0
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 font-mono text-sm transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-cyber-cyan text-glow'
                    : 'text-gray-400 hover:text-cyber-cyan'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyber-cyan shadow-neon-cyan" />
                )}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-cyber-cyan/40 text-cyber-cyan hover:bg-cyber-cyan/10 transition-colors"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
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
          </div>
          <div className="md:hidden">
            <button className="text-cyber-cyan">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
