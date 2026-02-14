import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const About = () => {
  const sectionRef = useRef(null)
  const cardRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (!cardRef.current) return
    gsap.fromTo(
      cardRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )
    if (!statsRef.current?.children?.length) return
    gsap.fromTo(
      statsRef.current.children,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.4,
        stagger: 0.05,
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  const stats = [
    { label: 'Years Experience', value: '5+', color: 'cyan' },
    { label: 'Projects Completed', value: '50+', color: 'magenta' },
    { label: 'Technologies', value: '20+', color: 'blue' },
    { label: 'Happy Clients', value: '30+', color: 'green' },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section min-h-screen py-20 px-6 relative"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-cyber-cyan text-glow">
          ABOUT ME
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Holographic Card */}
          <div
            ref={cardRef}
            className="relative p-8 holographic hover:shadow-neon-cyan transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/10 to-cyber-magenta/10 opacity-50" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-cyber-magenta">
                {'> DEVELOPER_PROFILE'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Passionate developer crafting digital experiences at the intersection
                of technology and creativity. Specialized in building immersive web
                applications with cutting-edge frameworks and modern design principles.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When not coding, I explore the latest in 3D graphics, experiment with
                creative coding, and contribute to open-source projects that push the
                boundaries of web technology.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="space-y-6">
            {stats.map((stat, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 font-mono text-sm">
                    {stat.label.toUpperCase()}
                  </span>
                  <span className={`text-2xl font-bold text-cyber-${stat.color} text-glow`}>
                    {stat.value}
                  </span>
                </div>
                <div className="h-2 bg-cyber-navy rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-cyber-${stat.color} to-cyber-${stat.color}/50 rounded-full`}
                    style={{
                      width: `${(index + 1) * 25}%`,
                      boxShadow: `0 0 10px var(--tw-color-cyber-${stat.color})`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating UI Panels */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { key: 'fast', title: 'Fast', desc: 'Optimized Performance' },
            { key: 'creative', title: 'Creative', desc: 'Unique Designs' },
            { key: 'reliable', title: 'Reliable', desc: 'Production Ready' },
          ].map((panel) => (
            <div
              key={panel.key}
              className="p-6 border border-cyber-cyan/30 bg-cyber-darker/30 hover:border-cyber-cyan hover:shadow-glow transition-all duration-300"
            >
              {/* Futuristic icon block instead of emoji */}
              <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-full border border-cyber-cyan/60 bg-cyber-darker text-cyber-cyan text-sm font-mono tracking-widest">
                {panel.key.toUpperCase().slice(0, 2)}
              </div>
              <h4 className="text-xl font-bold text-cyber-cyan mb-2">{panel.title}</h4>
              <p className="text-gray-400 text-sm">{panel.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
