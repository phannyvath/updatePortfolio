import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NoDemoPage from './NoDemoPage'

const Projects = () => {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)

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

  const projects = [
    {
      id: 1,
      title: 'Nhamey Food Ordering System',
      description: 'Online food ordering platform with restaurant menus, cart, and order tracking built as a full-stack web app.',
      tech: ['React', 'Node.js', 'REST API', 'MongoDB'],
      iconLabel: 'NH',
      github: '',         // private / not linked
      demo: 'https://nhamey.vercel.app/',
    },
    {
      id: 2,
      title: 'Mori Coffee & Tea Website',
      description: 'Marketing website for a modern coffee shop, focusing on branding, product showcases, and responsive layout.',
      tech: ['Next.js', 'Tailwind CSS', 'Animations'],
      iconLabel: 'MO',
      github: '',
      demo: 'https://www.moricoffeeandtea.com/',
    },
    {
      id: 3,
      title: 'E&A Consultant Website',
      description: 'Corporate site for an environmental consulting firm, presenting services, mission, and contact details.',
      tech: ['Next.js', 'Tailwind CSS', 'Responsive UI'],
      iconLabel: 'EA',
      github: '',
      demo: 'https://ea-consultant.vercel.app/',
    },
    {
      id: 4,
      title: 'OCM Ticket Management System',
      description: 'Internal ticketing platform for the Office of the Council of Ministers to track and manage support requests.',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      iconLabel: 'TK',
      image: '/ticketsystem.jpg',
      github: '',
      demo: '',
    },
    {
      id: 5,
      title: 'OCM Document Management System',
      description: 'Document workflow and archive system used to manage official documents and approvals for OCM.',
      tech: ['React', 'REST API', 'Role-based Access'],
      iconLabel: 'DM',
      image: '/documentsystem.jpg',
      github: '',
      demo: '',
    },
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section min-h-screen py-20 px-6 relative"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-cyber-cyan text-glow">
          PROJECTS
        </h2>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <>
          {selectedProject.demo ? (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          ) : (
            <NoDemoPage onClose={() => setSelectedProject(null)} />
          )}
        </>
      )}
    </section>
  )
}

const ProjectCard = ({ project, onClick }) => {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className="relative p-6 border-2 border-cyber-cyan/30 bg-cyber-darker/50 cursor-pointer group hover:border-cyber-cyan hover:shadow-glow transition-all duration-300 overflow-hidden holographic"
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
      }}
    >
      {/* Hover glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(0, 255, 255, 0.1), transparent 40%)`,
        }}
      />

      <div className="relative z-10">
        {/* Futuristic project icon instead of emoji */}
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full border border-cyber-cyan/60 bg-cyber-darker text-cyber-cyan text-sm font-mono tracking-widest">
          {project.iconLabel}
        </div>
        <h3 className="text-2xl font-bold text-cyber-cyan mb-2 font-mono">
          {'> '}{project.title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs border border-cyber-magenta/30 text-cyber-magenta bg-cyber-darker"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 text-sm">
          {project.demo ? (
            <a
              href={project.demo}
              onClick={(e) => e.stopPropagation()}
              className="text-cyber-magenta hover:text-cyber-purple transition-colors"
            >
              Live Demo →
            </a>
          ) : (
            <span className="text-gray-500 cursor-not-allowed">
              No Demo →
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    if (modalRef.current) {
      gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25 })
    }
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full border-2 border-cyber-cyan bg-cyber-darker p-8 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cyber-cyan hover:text-cyber-red text-2xl"
        >
          ×
        </button>
        <div className="text-6xl mb-4">{project.image}</div>
        <h2 className="text-4xl font-bold text-cyber-cyan mb-4">{project.title}</h2>
        <p className="text-gray-300 mb-6">{project.description}</p>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-cyber-magenta mb-2">Tech Stack:</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 border border-cyber-cyan text-cyber-cyan"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          {project.demo ? (
            <a
              href={project.demo}
              className="px-6 py-3 bg-cyber-cyan text-cyber-dark hover:bg-cyber-blue transition-all"
            >
              Live Demo
            </a>
          ) : (
            <span className="px-6 py-3 bg-gray-600 text-gray-400 cursor-not-allowed">
              No Demo Available
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Projects
