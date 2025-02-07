import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  desc: string
  href: string
  image: string
  badges: {
    name: string
    icon: JSX.Element
  }[]
}

export default function ProjectCard({
  title,
  desc,
  href,
  image,
  badges,
}: ProjectCardProps) {
  return (
    <Link rel="noopener noreferrer" target="_blank" href={href}>
      <div className="max-sm:flex-col sm:flex gap-6 max-sm:justify-center max-sm:items-center sm:items-center p-5 bg-white/10  sm:h-40 rounded-sm">
        <div className="max-sm:w-full max-sm:mb-2  max-sm:flex max-sm:items-center max-sm:justify-center">
          <div className="w-full max-h-80 sm:w-48 sm:h-32 rounded bg-white/20">
            <Image
              src={image}
              width={192}
              height={192}
              alt="project 01"
              className="relative w-full h-full sm:w-48 sm:h-32 object-cover object-center rounded-sm"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="">
            <h1 className="text-xl sm:text-2xl font-bold">{title}</h1>
            <p>{desc}</p>
            <Badge variant="destructive" className="text-white">
              <span className="font-bold pr-1">Status: </span>Not completed
            </Badge>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {badges.map((badge, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs border-gray-50/30"
              >
                {badge.icon}
                {badge.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
