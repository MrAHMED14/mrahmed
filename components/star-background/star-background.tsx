"use client"

import * as THREE from "three"

import { useCallback, useMemo, useRef } from "react"
import { PointMaterial, Points } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

interface StarBackgroundProps {}

export default function StarBackground({}: StarBackgroundProps) {
  const ref = useRef<THREE.Group>(null)
  const rotateRef = useRef({ x: 0, y: 0 })

  const sphere = useMemo(() => {
    const positions = []
    const radius = 1

    for (let i = 0; i < 500; i++) {
      const x = Math.random() * 2 - 1
      const y = Math.random() * 2 - 1
      const z = Math.random() * 2 - 1

      if (x ** 2 + y ** 2 + z ** 2 < radius ** 2) {
        positions.push(x, y, z)
      }
    }

    return new Float32Array(positions)
  }, [])

  const pointsMaterialProps = useMemo(
    () => ({
      transparent: true,
      color: "#d3d3d3",
      size: 0.002,
      sizeAttenuation: true,
      depthWrite: false,
    }),
    []
  )

  const rotateStars = useCallback((state: any, delta: number) => {
    rotateRef.current.x += delta * 0.01
    rotateRef.current.y += delta * 0.01

    if (ref.current) {
      ref.current.rotation.set(
        rotateRef.current.x,
        rotateRef.current.y,
        Math.PI / 4
      )
    }
  }, [])

  useFrame(rotateStars)

  return (
    <group ref={ref}>
      <Points positions={sphere} stride={3} frustumCulled>
        <PointMaterial {...pointsMaterialProps} />
      </Points>
    </group>
  )
}
