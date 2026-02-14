import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Experience = () => {
  const sectionRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      timelineRef.current.children,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  const experiences = [
    {
      year: '2024',
      title: 'Web Developer & Designer',
      company: 'E & A Consultant',
      logo: '/ENA.jpg',
      description:
        'Designed and developed responsive websites and dashboards for clients, focusing on clean UI and smooth user experience.',
      tech: ['React', 'Tailwind CSS', 'UI/UX'],
    },
    {
      year: '2024 – 2025',
      title: 'Tech Advisor & System Analyst',
      company: 'OOne Power Technology',
      logo: '/OOne.jpg',
      description:
        'Advised on technology choices, analysed system requirements, and helped design scalable architectures for energy-tech solutions for EDC, PPWSA and MME.',
      tech: ['System Analysis', 'Architecture', 'Documentation'],
    },
    {
      year: '2025',
      title: 'System Developer',
      company: 'Office of the Council of Ministers (OCM)',
      logo: '/OCM.jpg',
      description:
        'Built and maintained internal systems for government workflows, improving reliability and performance for daily operations.',
      tech: ['React', 'APIs', 'System Integration','Node.js','Vue.js'],
    },
  ]

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section min-h-screen py-20 px-6 relative"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-cyber-cyan text-glow">
          EXPERIENCE
        </h2>

        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-cyan via-cyber-magenta to-cyber-blue" />

          {experiences.map((exp, index) => (
            <TimelineItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const TimelineItem = ({ experience, index }) => {
  const itemRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && itemRef.current) {
            gsap.to(itemRef.current, { opacity: 1, duration: 0.4 })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={itemRef} className="relative pl-20 mb-12 opacity-0">
      {/* Timeline Node */}
      <div className="absolute left-6 top-2 w-4 h-4 bg-cyber-cyan rounded-full border-4 border-cyber-dark shadow-neon-cyan" />

      {/* Content Card */}
      <div className="p-6 border-2 border-cyber-cyan/30 bg-cyber-darker/50 hover:border-cyber-cyan hover:shadow-glow transition-all duration-300 holographic">
        <div className="flex items-center gap-4 mb-3">
          {/* Company logo, if provided */}
          {experience.logo && (
            <div className="w-12 h-12 rounded bg-black/40 border border-cyber-cyan/30 flex items-center justify-center overflow-hidden">
              <img
                src={experience.logo}
                alt={experience.company}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
          <div className="flex flex-col">
            <span className="text-cyber-magenta font-mono font-bold text-sm">
              {experience.year}
            </span>
            <span className="text-cyber-cyan font-mono text-sm terminal-text">
              {'> '}{experience.company}
            </span>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
        <p className="text-gray-300 mb-4">{experience.description}</p>
        <div className="flex flex-wrap gap-2">
          {experience.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 text-xs border border-cyber-magenta/30 text-cyber-magenta bg-cyber-darker"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
