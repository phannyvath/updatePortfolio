import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme } from '../context/ThemeContext'

// Static Astronaut (dark mode)
const StaticAstronaut = () => {
  const { scene } = useGLTF('/astronaut.glb')
  return (
    <primitive object={scene} position={[0, 0, 0]} scale={0.3} />
  )
}

// Lil Bird Man (light mode)
const StaticLilBirdMan = () => {
  const { scene } = useGLTF('/lil_bird_man.glb')
  return (
    <primitive object={scene} position={[0, 0, 0]} scale={0.65} />
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

// 3D Scene inside the card: astronaut (dark) or lil_bird_man (light)
const AstronautScene = () => {
  const { theme } = useTheme()
  return (
    <>
      <ambientLight intensity={1.2} color="#ffffff" />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <directionalLight position={[-5, 5, 5]} intensity={0.6} color="#ffffff" />
      <directionalLight position={[0, 5, -5]} intensity={0.5} color="#ffffff" />
      <directionalLight position={[0, -5, 5]} intensity={0.4} color="#ffffff" />
      <pointLight position={[0, 3, 3]} intensity={0.5} color="#ffffff" />
      <pointLight position={[0, -2, 3]} intensity={0.3} color="#ffffff" />

      <CyberpunkBackgroundScene />

      {theme === 'light' ? <StaticLilBirdMan /> : <StaticAstronaut />}
    </>
  )
}

// Main No Demo Page Component
const NoDemoPage = ({ onClose }) => {
  const pageRef = useRef(null)

  return (
    <div
      ref={pageRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >

      {/* Content Overlay - compact */}
      <div
        className="relative z-10 max-w-lg w-full px-4 py-6 text-center pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cyberpunk Grid Overlay */}
        <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

        {/* Main Content Card */}
        <div className="relative border-2 border-cyber-cyan/50 bg-cyber-darker/90 backdrop-blur-md p-6 md:p-8 shadow-[0_0_40px_rgba(250,204,21,0.3)]">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-cyber-cyan hover:text-cyber-red text-2xl font-bold transition-colors z-20 w-8 h-8 flex items-center justify-center"
            style={{ textShadow: '0 0 10px currentColor' }}
          >
            ×
          </button>

          {/* Astronaut Canvas - Inside the Card */}
          <div className="relative w-full h-44 md:h-52 mb-5 rounded-lg overflow-hidden border border-cyber-cyan/30 bg-black">
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
          <div className="mb-3 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 md:h-12 md:w-12 text-cyber-magenta"
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
            className="text-xl md:text-2xl font-bold mb-3 text-cyber-cyan glitch-text"
            data-text="NO DEMO AVAILABLE"
            style={{
              textShadow: '0 0 20px rgba(250, 204, 21, 0.8)',
              fontFamily: 'Orbitron, sans-serif',
              letterSpacing: '0.08em',
            }}
          >
            NO DEMO AVAILABLE
          </h2>

          {/* Message */}
          <p
            className="text-sm md:text-base mb-4 text-gray-300 font-mono leading-relaxed"
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
          <div className="mt-4 pt-4 border-t border-cyber-cyan/30">
            <p className="text-xs text-gray-400 font-mono">
              This system requires authentication and is only accessible to authorized personnel.
            </p>
          </div>

          {/* Back Button */}
          <button
            onClick={onClose}
            className="mt-5 px-5 py-2 border-2 border-cyber-cyan text-cyber-cyan font-mono text-sm hover:bg-cyber-cyan hover:text-cyber-dark transition-all duration-300"
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

// Preload both models (astronaut = dark, lil_bird_man = light)
useGLTF.preload('/astronaut.glb')
useGLTF.preload('/lil_bird_man.glb')

export default NoDemoPage
