'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Stars, Float, MeshDistortMaterial } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

/** Pre-computed shape data (module-level, avoids Math.random in render) */
const FLOATING_SHAPES = Array.from({ length: 8 }, (_, i) => ({
  position: [
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 6,
    (Math.random() - 0.5) * 4 - 3,
  ] as [number, number, number],
  scale: Math.random() * 0.3 + 0.1,
  speed: Math.random() * 2 + 1,
  type: i % 3,
}))

function DistortSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.1
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.15
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -2]} scale={2.5}>
      <icosahedronGeometry args={[1, 4]} />
      <MeshDistortMaterial
        color="#00B8ED"
        emissive="#6C5CE7"
        emissiveIntensity={0.3}
        roughness={0.2}
        metalness={0.8}
        distort={0.4}
        speed={2}
        transparent
        opacity={0.6}
      />
    </mesh>
  )
}

function FloatingShapes() {
  return (
    <>
      {FLOATING_SHAPES.map((shape, i) => (
        <Float
          key={i}
          speed={shape.speed}
          rotationIntensity={2}
          floatIntensity={1.5}
        >
          <mesh position={shape.position} scale={shape.scale}>
            {shape.type === 0 && <icosahedronGeometry args={[1, 0]} />}
            {shape.type === 1 && <torusGeometry args={[1, 0.4, 8, 16]} />}
            {shape.type === 2 && <octahedronGeometry args={[1, 0]} />}
            <meshStandardMaterial
              color="#00B8ED"
              emissive="#6C5CE7"
              emissiveIntensity={0.5}
              wireframe
              transparent
              opacity={0.4}
            />
          </mesh>
        </Float>
      ))}
    </>
  )
}

function MouseCamera() {
  const { camera } = useThree()
  const cameraRef = useRef(camera)

  useEffect(() => {
    cameraRef.current = camera
  }, [camera])

  useFrame(({ pointer }) => {
    const cam = cameraRef.current
    cam.position.x = THREE.MathUtils.lerp(cam.position.x, pointer.x * 0.5, 0.05)
    cam.position.y = THREE.MathUtils.lerp(cam.position.y, pointer.y * 0.3, 0.05)
    cam.lookAt(0, 0, -2)
  })

  return null
}

export function Hero3DScene() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#00B8ED" />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.4}
          color="#6C5CE7"
        />

        <DistortSphere />
        <FloatingShapes />
        <Stars
          radius={50}
          depth={50}
          count={1000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <MouseCamera />
      </Canvas>
    </div>
  )
}
