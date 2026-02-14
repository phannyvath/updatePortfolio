const skillCategories = {
  'Frontend': ['React', 'TypeScript', 'Next.js', 'Tailwind'],
  'Backend': ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
  'Tools': ['Git', 'Docker', 'AWS', 'CI/CD'],
  '3D & Graphics': ['Three.js', 'Blender', 'WebGL', 'GSAP'],
}

export default function MobileSkills() {
  return (
    <section id="mobile-skills" className="min-h-screen py-16 px-5 pb-28 md:hidden">
      <div className="max-w-md mx-auto">
        <h2
          className="text-2xl font-black uppercase tracking-widest mb-8 text-center"
          style={{
            fontFamily: 'Orbitron, sans-serif',
            color: 'var(--cyber-cyan)',
            textShadow: '0 0 15px var(--cyber-cyan)',
          }}
        >
          Skills & Tech
        </h2>

        <div className="space-y-4">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div
              key={category}
              className="rounded-2xl p-5 border border-cyber-blue/30 bg-cyber-darker/80"
              style={{
                boxShadow: '0 0 25px rgba(168, 85, 247, 0.12), inset 0 1px 0 rgba(255,255,255,0.04)',
              }}
            >
              <h3 className="text-xs font-mono text-cyber-magenta mb-3">&gt; {category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl text-xs font-medium border border-cyber-cyan/40 text-cyber-cyan"
                    style={{ boxShadow: '0 0 12px color-mix(in srgb, var(--cyber-cyan) 20%, transparent)' }}
                  >
                    {skill}
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
