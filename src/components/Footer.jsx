const Footer = () => {
  return (
    <footer className="border-t border-cyber-cyan/30 py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 font-mono text-sm mb-4 md:mb-0">
            {'> COPYRIGHT 2024 | BUILT WITH NEON & CODE'}
          </div>
          <div className="flex gap-4 text-cyber-cyan">
            <span className="font-mono text-sm">v1.0.0</span>
            <span className="text-gray-600">|</span>
            <span className="font-mono text-sm animate-pulse">● ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
