import { useMemo } from 'react'
import { Stars, useGLTF } from '@react-three/drei'

// Simple space scene: stars + yellow spaceship. Clone scene so each Canvas has its own copy.
const SpaceBackground = () => {
  const { scene } = useGLTF('/yellow_spaceship.glb')
  const clonedScene = useMemo(() => {
    const clone = scene.clone()
    clone.traverse((node) => {
      if (node.isMesh && node.material) {
        node.material = node.material.clone()
      }
    })
    return clone
  }, [scene])

  return (
    <>
      <ambientLight intensity={0.6} color="#ffffff" />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />

      <Stars
        radius={280}
        depth={200}
        count={3000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <primitive object={clonedScene} position={[0, 0, 0]} scale={1} />
    </>
  )
}

useGLTF.preload('/yellow_spaceship.glb')

export default SpaceBackground

