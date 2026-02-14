import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

// Static Astronaut Component (no animation, stays still)
const StaticAstronaut = () => {
  const { scene } = useGLTF('/astronaut.glb')

  return (
    <primitive 
      object={scene} 
      position={[0, 0, 0]} 
      scale={0.3}
    />
  )
}

// Cyberpunk Background (like CyberpunkBackground.jsx)
const CyberpunkBackgroundScene = () => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      const speed = 0.2
      const tilt = 0.1
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * tilt
      meshRef.current.rotation.y = state.clock.elapsedTime * speed
    }
  })

  return (
    <>
      {/* Grid Plane - Purple/Yellow theme */}
      <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[20, 20, 50, 50]} />
        <meshBasicMaterial
          color="#facc15"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Floating Cubes - Purple, Yellow, Red */}
      {Array.from({ length: 20 }).map((_, i) => (
        <FloatingCube
          key={i}
          position={[
            (Math.random() - 0.5) * 20,
            Math.random() * 5,
            (Math.random() - 0.5) * 20,
          ]}
          color={i % 3 === 0 ? '#facc15' : i % 3 === 1 ? '#fb7185' : '#a855f7'}
        />
      ))}
    </>
  )
}

const FloatingCube = ({ position, color }) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      const floatAmount = 0.5
      const rotationSpeed = 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * floatAmount
      meshRef.current.rotation.x += rotationSpeed
      meshRef.current.rotation.y += rotationSpeed
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshBasicMaterial 
        color={color} 
        transparent 
        opacity={0.8}
      />
    </mesh>
  )
}

// Astronaut Scene (for inside the card) - Keep soft white lighting for astronaut
const AstronautScene = () => {
  return (
    <>
      {/* Soft, even studio-like lighting for astronaut (keep same as before) */}
      <ambientLight intensity={1.2} color="#ffffff" />
      
      {/* Multiple directional lights for even, soft illumination */}
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <directionalLight position={[-5, 5, 5]} intensity={0.6} color="#ffffff" />
      <directionalLight position={[0, 5, -5]} intensity={0.5} color="#ffffff" />
      <directionalLight position={[0, -5, 5]} intensity={0.4} color="#ffffff" />
      
      {/* Additional fill lights for even coverage */}
      <pointLight position={[0, 3, 3]} intensity={0.5} color="#ffffff" />
      <pointLight position={[0, -2, 3]} intensity={0.3} color="#ffffff" />

      {/* Cyberpunk Background Elements */}
      <CyberpunkBackgroundScene />

      {/* Static Astronaut - stays still, can be rotated 360° with OrbitControls */}
      <StaticAstronaut />
    </>
  )
}

// Main No Demo Page Component
const NoDemoPage = ({ onClose }) => {
  const pageRef = useRef(null)

  return (
    <div
      ref={pageRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >

      {/* Content Overlay */}
      <div
        className="relative z-10 max-w-4xl w-full px-8 py-12 text-center pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cyberpunk Grid Overlay */}
        <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

        {/* Main Content Card */}
        <div className="relative border-2 border-cyber-cyan/50 bg-cyber-darker/90 backdrop-blur-md p-10 md:p-16 shadow-[0_0_40px_rgba(250,204,21,0.3)]">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-cyber-cyan hover:text-cyber-red text-3xl font-bold transition-colors z-20"
            style={{ textShadow: '0 0 10px currentColor' }}
          >
            ×
          </button>

          {/* Astronaut Canvas - Inside the Card */}
          <div className="relative w-full h-64 md:h-80 mb-8 rounded-lg overflow-hidden border border-cyber-cyan/30 bg-black">
            <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
              {/* Cyberpunk background lighting for grid and cubes */}
              <ambientLight intensity={0.3} />
              <pointLight position={[10, 10, 10]} intensity={0.5} color="#facc15" />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
              
              <AstronautScene />
              <OrbitControls
                enableZoom={true}
                enableRotate={true}
                enablePan={false}
                autoRotate={false}
              />
            </Canvas>
          </div>

          {/* Error Icon */}
          <div className="mb-6 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 md:h-20 md:w-20 text-cyber-magenta"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              style={{ filter: 'drop-shadow(0 0 10px #fb7185)' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>

          {/* Title */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-cyber-cyan glitch-text"
            data-text="NO DEMO AVAILABLE"
            style={{
              textShadow: '0 0 20px rgba(250, 204, 21, 0.8)',
              fontFamily: 'Orbitron, sans-serif',
              letterSpacing: '0.1em',
            }}
          >
            NO DEMO AVAILABLE
          </h2>

          {/* Message */}
          <p
            className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 font-mono leading-relaxed"
            style={{
              textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
            }}
          >
            Sorry, no demo available because this is a{' '}
            <span
              className="text-cyber-magenta font-bold"
              style={{ textShadow: '0 0 10px #fb7185' }}
            >
              credential system
            </span>
            .
          </p>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-cyber-cyan/30">
            <p className="text-sm text-gray-400 font-mono">
              This system requires authentication and is only accessible to authorized personnel.
            </p>
          </div>

          {/* Back Button */}
          <button
            onClick={onClose}
            className="mt-8 px-8 py-3 border-2 border-cyber-cyan text-cyber-cyan font-mono text-lg hover:bg-cyber-cyan hover:text-cyber-dark transition-all duration-300"
            style={{
              textShadow: '0 0 10px #facc15',
              boxShadow: '0 0 20px rgba(250, 204, 21, 0.3)',
            }}
          >
            ← GO BACK
          </button>
        </div>
      </div>
    </div>
  )
}

// Preload the astronaut model
useGLTF.preload('/astronaut.glb')

export default NoDemoPage
