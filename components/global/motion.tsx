"use client"

import { HTMLMotionProps, motion } from "framer-motion"

interface HeroSectionProps {
  children: React.ReactNode
  props: HTMLMotionProps<"div">
}

export default function HeroSection({ children, props }: HeroSectionProps) {
  return <motion.div {...props}>{children}</motion.div>
}
