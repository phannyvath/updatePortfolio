const ScanlineOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] scanline-effect">
      {/* Additional CRT screen effect */}
      <div 
        className="absolute inset-0 crt-flicker opacity-30" 
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0px, rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)'
        }} 
      />
    </div>
  )
}

export default ScanlineOverlay
