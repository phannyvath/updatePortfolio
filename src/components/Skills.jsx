import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Skills = () => {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (!gridRef.current?.children?.length) return
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  const skillCategories = {
    'Frontend': [
      { name: 'React', level: 95, color: 'cyan' },
      { name: 'TypeScript', level: 90, color: 'blue' },
      { name: 'Next.js', level: 85, color: 'magenta' },
      { name: 'Tailwind CSS', level: 95, color: 'cyan' },
    ],
    'Backend': [
      { name: 'Node.js', level: 90, color: 'green' },
      { name: 'Python', level: 85, color: 'blue' },
      { name: 'PostgreSQL', level: 80, color: 'cyan' },
      { name: 'MongoDB', level: 75, color: 'green' },
    ],
    'Tools': [
      { name: 'Git', level: 95, color: 'magenta' },
      { name: 'Docker', level: 80, color: 'blue' },
      { name: 'AWS', level: 75, color: 'cyan' },
      { name: 'CI/CD', level: 85, color: 'green' },
    ],
    '3D & Graphics': [
      { name: 'Three.js', level: 90, color: 'cyan' },
      { name: 'Blender', level: 70, color: 'magenta' },
      { name: 'WebGL', level: 85, color: 'blue' },
      { name: 'GSAP', level: 95, color: 'green' },
    ],
  }

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section min-h-screen py-20 px-6 relative"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-cyber-cyan text-glow">
          SKILLS & TECH
        </h2>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div
              key={category}
              className="p-6 border-2 border-cyber-cyan/30 bg-cyber-darker/50 hover:border-cyber-cyan hover:shadow-glow transition-all duration-300 holographic"
            >
              <h3 className="text-xl font-bold text-cyber-magenta mb-4 font-mono">
                {'> '}{category}
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Icons Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-cyber-magenta">
            TECHNOLOGIES
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {[
              'React', 'Vue', 'Node', 'Python', 'TypeScript',
              'Next.js', 'Express', 'MongoDB', 'Git', 'Figma',
            ].map((tech, index) => (
              <div
                key={index}
                className="aspect-square border border-cyber-cyan/30 bg-cyber-darker/30 flex items-center justify-center hover:border-cyber-cyan hover:shadow-glow transition-all duration-300 group"
              >
                <span className="text-gray-400 group-hover:text-cyber-cyan transition-colors font-mono text-xs">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const SkillBar = ({ skill }) => {
  const barRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(barRef.current, {
              width: `${skill.level}%`,
              duration: 1.5,
              ease: 'power2.out',
            })
          }
        })
      },
      { threshold: 0.5 }
    )

    if (barRef.current) {
      observer.observe(barRef.current)
    }

    return () => observer.disconnect()
  }, [skill.level])

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-300">{skill.name}</span>
        <span className={`text-sm font-bold text-cyber-${skill.color}`}>
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-cyber-navy rounded-full overflow-hidden">
        <div
          ref={barRef}
          className={`h-full bg-gradient-to-r from-cyber-${skill.color} to-cyber-${skill.color}/50 rounded-full shadow-neon-${skill.color}`}
          style={{ width: '0%' }}
        />
      </div>
    </div>
  )
}

export default Skills
