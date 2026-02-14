import { useState } from 'react'
import NoDemoPageMobile from './NoDemoPageMobile'

const projects = [
  { id: 1, title: 'Nhamey Food Ordering', desc: 'Full-stack food ordering platform.', tech: ['React', 'Node', 'MongoDB'], demo: 'https://nhamey.vercel.app/', iconLabel: 'NH' },
  { id: 2, title: 'Mori Coffee & Tea', desc: 'Coffee shop marketing site.', tech: ['Next.js', 'Tailwind'], demo: 'https://www.moricoffeeandtea.com/', iconLabel: 'MO' },
  { id: 3, title: 'E&A Consultant', desc: 'Corporate consulting site.', tech: ['Next.js', 'Tailwind'], demo: 'https://ea-consultant.vercel.app/', iconLabel: 'EA' },
  { id: 4, title: 'OCM Ticket System', desc: 'Internal ticketing platform.', tech: ['React', 'Node', 'PostgreSQL'], demo: '', iconLabel: 'TK' },
  { id: 5, title: 'OCM Document System', desc: 'Document workflow system.', tech: ['React', 'REST API'], demo: '', iconLabel: 'DM' },
]

export default function MobileProjects() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <section id="mobile-projects" className="min-h-screen py-16 px-5 pb-28 md:hidden">
        <div className="max-w-md mx-auto">
          <h2
            className="text-2xl font-black uppercase tracking-widest mb-8 text-center"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              color: 'var(--cyber-cyan)',
              textShadow: '0 0 15px var(--cyber-cyan)',
            }}
          >
            Projects
          </h2>

          <div className="space-y-4">
            {projects.map((p) => (
              <button
                key={p.id}
                onClick={() => (p.demo ? window.open(p.demo, '_blank') : setSelected(p))}
                className="w-full text-left rounded-2xl p-5 border border-cyber-cyan/30 bg-cyber-darker/80 active:scale-[0.99] transition-transform"
                style={{
                  boxShadow: '0 0 25px color-mix(in srgb, var(--cyber-cyan) 12%, transparent), inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold border border-cyber-cyan/50 text-cyber-cyan"
                    style={{ textShadow: '0 0 10px var(--cyber-cyan)' }}
                  >
                    {p.iconLabel}
                  </span>
                  <span className="font-bold text-white">{p.title}</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded-lg bg-cyber-blue/20 text-cyber-purple">
                      {t}
                    </span>
                  ))}
                </div>
                {p.demo ? (
                  <span className="text-xs text-cyber-cyan mt-2 inline-block">View demo →</span>
                ) : (
                  <span className="text-xs text-cyber-magenta mt-2 inline-block">No demo (credential) →</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <NoDemoPageMobile onClose={() => setSelected(null)} />
      )}
    </>
  )
}
