const experiences = [
  { year: '2024', title: 'Web Developer & Designer', company: 'E & A Consultant', logo: '/ENA.jpg', desc: 'Responsive websites and dashboards for clients.', tech: ['React', 'Tailwind', 'UI/UX'] },
  { year: '2024 – 2025', title: 'Tech Advisor & System Analyst', company: 'OOne Power Technology', logo: '/OOne.jpg', desc: 'Technology advisory and system architecture for energy-tech.', tech: ['Analysis', 'Architecture', 'Documentation'] },
  { year: '2025', title: 'System Developer', company: 'Office of the Council of Ministers (OCM)', logo: '/OCM.jpg', desc: 'Internal government workflow systems.', tech: ['React', 'APIs', 'Node.js', 'Vue.js'] },
]

export default function MobileExperience() {
  return (
    <section id="mobile-experience" className="min-h-screen py-16 px-5 pb-28 md:hidden">
      <div className="max-w-md mx-auto">
        <h2
          className="text-2xl font-black uppercase tracking-widest mb-8 text-center"
          style={{
            fontFamily: 'Orbitron, sans-serif',
            color: 'var(--cyber-cyan)',
            textShadow: '0 0 15px var(--cyber-cyan)',
          }}
        >
          Experience
        </h2>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 border border-cyber-blue/30 bg-cyber-darker/80"
              style={{
                boxShadow: '0 0 25px rgba(168, 85, 247, 0.12), inset 0 1px 0 rgba(255,255,255,0.04)',
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                {exp.logo && (
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-black/40 border border-cyber-cyan/30 flex items-center justify-center overflow-hidden">
                    <img src={exp.logo} alt={exp.company} className="max-w-full max-h-full object-contain" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-mono text-cyber-magenta block">{exp.year}</span>
                  <span className="text-xs font-mono text-cyber-cyan">&gt; {exp.company}</span>
                </div>
              </div>
              <h3 className="font-bold text-white mb-1">{exp.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{exp.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((t, j) => (
                  <span key={j} className="text-[10px] px-2 py-0.5 rounded-lg bg-cyber-cyan/20 text-cyber-cyan">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
