/**
 * Mobile-only "No Demo" overlay – same message as desktop, layout tuned for small screens.
 */
export default function NoDemoPageMobile({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/98 px-5 py-8 md:hidden"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-3xl border-2 border-cyber-cyan/50 bg-cyber-darker/95 p-6 no-demo-mobile-shadow"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="btn-close-light absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full border-2 border-cyber-cyan/50 text-cyber-cyan text-xl font-bold active:scale-95"
          style={{ textShadow: '0 0 10px currentColor' }}
        >
          ×
        </button>

        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-2xl border-2 border-cyber-magenta/50 bg-cyber-magenta/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-cyber-magenta no-demo-icon-glow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
        </div>

        <h2
          className="text-xl font-black uppercase tracking-wider text-center mb-3 text-cyber-cyan"
          style={{
            fontFamily: 'Orbitron, sans-serif',
            textShadow: '0 0 12px var(--cyber-cyan)',
          }}
        >
          No demo available
        </h2>

        <p className="text-sm text-gray-300 text-center font-mono leading-relaxed mb-4">
          This is a{' '}
          <span className="text-cyber-magenta font-bold no-demo-magenta-glow">
            credential system
          </span>
          . Access is for authorized personnel only.
        </p>

        <p className="text-xs text-gray-500 text-center font-mono mb-6">
          Requires authentication.
        </p>

        <button
          onClick={onClose}
          className="btn-secondary w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-widest border-2 border-cyber-cyan text-cyber-cyan active:scale-[0.98]"
          style={{
            textShadow: '0 0 10px var(--cyber-cyan)',
            boxShadow: '0 0 20px color-mix(in srgb, var(--cyber-cyan) 25%, transparent)',
          }}
        >
          ← Go back
        </button>
      </div>
    </div>
  )
}
