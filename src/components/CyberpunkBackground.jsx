import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const CyberpunkBackground = ({ isAnimating }) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      const speed = isAnimating ? 5 : 0.2
      const tilt = isAnimating ? 0.3 : 0.1
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * tilt
      meshRef.current.rotation.y = state.clock.elapsedTime * speed
    }
  })

  return (
    <>
      {/* Ambient Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#facc15" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
      
      {/* Grid Plane - Purple/Yellow theme */}
      <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[20, 20, 50, 50]} />
        <meshBasicMaterial
          color={isAnimating ? "#fb7185" : "#facc15"}
          wireframe
          transparent
          opacity={isAnimating ? 0.7 : 0.4}
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
          isAnimating={isAnimating}
        />
      ))}
    </>
  )
}

const FloatingCube = ({ position, color, isAnimating }) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      const floatAmount = isAnimating ? 3 : 0.5
      const rotationSpeed = isAnimating ? 0.2 : 0.01
      const pulse = isAnimating ? Math.sin(state.clock.elapsedTime * 5) * 0.2 : 0
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * floatAmount + pulse
      meshRef.current.rotation.x += rotationSpeed
      meshRef.current.rotation.y += rotationSpeed
      meshRef.current.scale.setScalar(1 + pulse)
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshBasicMaterial 
        color={color} 
        transparent 
        opacity={isAnimating ? 1 : 0.8}
        emissive={isAnimating ? color : '#000000'}
        emissiveIntensity={isAnimating ? 0.5 : 0}
      />
    </mesh>
  )
}

export default CyberpunkBackground
