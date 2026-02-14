
const navItems = [
  { id: 'hero', label: 'Home', icon: HomeIcon },
  { id: 'about', label: 'About', icon: UserIcon },
  { id: 'skills', label: 'Skills', icon: CodeIcon },
  { id: 'projects', label: 'Work', icon: GridIcon },
  { id: 'experience', label: 'Exp', icon: BriefcaseIcon },
  { id: 'contact', label: 'Contact', icon: ChatIcon },
]

function HomeIcon({ active }) {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )
}
function UserIcon({ active }) {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )
}
function CodeIcon({ active }) {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  )
}
function GridIcon({ active }) {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  )
}
function BriefcaseIcon({ active }) {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}
function ChatIcon({ active }) {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  )
}

export default function MobileNav({ activePage = 'hero', onNavigate }) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 safe-area-pb">
      <div
        className="mx-3 mb-3 rounded-2xl border border-cyber-cyan/40 bg-cyber-darker/95 backdrop-blur-xl px-2 py-2 shadow-2xl"
        style={{
          boxShadow: '0 0 30px color-mix(in srgb, var(--cyber-cyan) 20%, transparent), 0 0 60px color-mix(in srgb, var(--cyber-blue) 10%, transparent), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const isActive = activePage === item.id
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => onNavigate?.(item.id)}
                className={`mobile-nav-item flex flex-col items-center justify-center min-w-[52px] py-2 px-1 rounded-xl transition-all duration-300 active:scale-95 ${isActive ? 'mobile-nav-item-active' : ''}`}
                style={{
                  color: isActive ? 'var(--cyber-cyan)' : 'rgba(148, 163, 184, 0.9)',
                  textShadow: isActive ? '0 0 12px var(--cyber-cyan)' : 'none',
                }}
              >
                <Icon active={isActive} />
                <span className="text-[10px] font-semibold mt-0.5 uppercase tracking-wider">
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
