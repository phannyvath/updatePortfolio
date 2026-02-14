export default function MobileAbout() {
  const stats = [
    { label: 'Years Exp', value: '5+' },
    { label: 'Projects', value: '50+' },
    { label: 'Tech', value: '20+' },
    { label: 'Clients', value: '30+' },
  ]

  return (
    <section id="mobile-about" className="min-h-screen py-16 px-5 pb-28 md:hidden">
      <div className="max-w-md mx-auto">
        <h2
          className="text-2xl font-black uppercase tracking-widest mb-8 text-center"
          style={{
            fontFamily: 'Orbitron, sans-serif',
            color: 'var(--cyber-cyan)',
            textShadow: '0 0 15px var(--cyber-cyan)',
          }}
        >
          About
        </h2>

        <div
          className="rounded-3xl p-6 mb-6 border border-cyber-cyan/30 bg-cyber-darker/80"
          style={{
            boxShadow: '0 0 30px color-mix(in srgb, var(--cyber-cyan) 15%, transparent), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          <h3 className="text-sm font-mono text-cyber-magenta mb-3">&gt; DEVELOPER_PROFILE</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            Passionate developer crafting digital experiences at the intersection of technology and
            creativity. Specialized in building immersive web applications.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            When not coding, I explore 3D graphics, creative coding, and open-source projects.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl p-4 text-center border border-cyber-cyan/25 bg-cyber-darker/60"
              style={{
                boxShadow: '0 0 20px color-mix(in srgb, var(--cyber-cyan) 12%, transparent)',
              }}
            >
              <div className="text-xl font-black text-cyber-cyan" style={{ textShadow: '0 0 10px var(--cyber-cyan)' }}>
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
