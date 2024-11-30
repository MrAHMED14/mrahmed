"use client"

import { Canvas } from "@react-three/fiber"
import { motion } from "framer-motion"

import StarBackground from "./star-background"

interface StarCanvasProps {}

export default function StarCanvas({}: StarCanvasProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 2 }}
      className="w-full h-auto fixed inset-0 z-[-20]"
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarBackground />
      </Canvas>
    </motion.div>
  )
}
