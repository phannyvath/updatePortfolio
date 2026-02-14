import { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'

/**
 * Light mode Hero: float plane model (replaces spaceship in sky).
 */
export default function LightModePlane() {
  const { scene } = useGLTF('/float_plane.glb')
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
      <ambientLight intensity={0.85} color="#ffffff" />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-3, 4, 2]} intensity={0.5} color="#e0f2fe" />
      <primitive object={clonedScene} position={[0, 0, 0]} scale={1.8} />
    </>
  )
}

useGLTF.preload('/float_plane.glb')
