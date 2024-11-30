import Marquee from "react-fast-marquee"
import Image from "next/image"

import { cn } from "@/lib/utils"

interface MarqueeAnimationProps {
  direction?: "left" | "right" | "up" | "down"
  speed?: number
  images?: { src: string; alt: string }[]
  className?: string
  classNameItems?: string
}

export default function MarqueeAnimation({
  direction,
  speed,
  images,
  className,
  classNameItems,
}: MarqueeAnimationProps) {
  return (
    <Marquee
      className={cn(
        "flex items-center whitespace-nowrap py-8 pointer-events-none select-none",
        className
      )}
      speed={speed ?? 40}
      direction={direction}
    >
      {images && images.length !== 0 ? (
        images.map((img, idx) => (
          <Image
            key={idx}
            src={img.src}
            alt={img.alt}
            width={100}
            height={50}
            className={cn("h-8 w-fit mx-10", classNameItems)}
          />
        ))
      ) : (
        <>
          {Array(16)
            .fill(16)
            .map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-10 size-5 text-neutral-500"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            ))}
        </>
      )}
    </Marquee>
  )
}
