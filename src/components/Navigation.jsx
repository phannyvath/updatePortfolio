import { useState, useEffect } from 'react'

const Navigation = () => {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
                color: '#a855f7',
                textShadow: '0 0 8px #a855f7, 0 0 16px rgba(168, 85, 247, 0.6)',
              }}
            >
              &lt;
            </span>
            <span
              className="text-lg md:text-2xl font-bold font-mono uppercase tracking-[0.4em] md:tracking-[0.5em]"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                background: 'linear-gradient(90deg, #facc15 0%, #a855f7 50%, #facc15 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 8px rgba(250, 204, 21, 0.9)) drop-shadow(0 0 16px rgba(168, 85, 247, 0.5))',
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
                color: '#a855f7',
                textShadow: '0 0 8px #a855f7, 0 0 16px rgba(168, 85, 247, 0.6)',
              }}
            >
              /&gt;
            </span>
            {/* System tag */}
            <span
              className="hidden sm:inline text-[10px] md:text-xs font-mono ml-1 px-1.5 py-0.5 rounded border border-cyber-cyan/50"
              style={{
                color: '#facc15',
                textShadow: '0 0 6px rgba(250, 204, 21, 0.8)',
              }}
            >
              v2.0
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
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
