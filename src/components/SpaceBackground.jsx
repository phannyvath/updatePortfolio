import { Stars, useGLTF } from '@react-three/drei'

// Simple, static space scene:
// - Black background (from page)
// - White stars
// - Yellow spaceship in the center
// Nothing moves automatically; only OrbitControls (in Hero) can rotate/zoom.
const SpaceBackground = () => {
  const { scene } = useGLTF('/yellow_spaceship.glb')

  return (
    <>
      {/* Neutral white lighting */}
      <ambientLight intensity={0.6} color="#ffffff" />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />

      {/* Starfield – reduced count/speed for performance */}
      <Stars
        radius={280}
        depth={200}
        count={3000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      {/* Yellow spaceship model, centered */}
      <primitive object={scene} position={[0, 0, 0]} scale={1.0} />
    </>
  )
}

useGLTF.preload('/yellow_spaceship.glb')

export default SpaceBackground

