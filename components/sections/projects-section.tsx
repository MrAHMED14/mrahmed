import { Suspense } from "react"
import { Badge } from "@/components/ui/badge"

import ProjectSkeleton from "@/components/global/project-skeleton"
import Image from "next/image"
import Link from "next/link"

interface ProjectsSectionProps {}

export default function ProjectsSection({}: ProjectsSectionProps) {
  return (
    <div className="w-[90%] sm:w-[70%] sm:mx-12 mx-4 mb-72">
      <h1
        className="text-2xl uppercase sm:text-4xl font-extrabold mb-2"
        id="projects"
      >
        MY Projects
      </h1>
      <div className="flex flex-col gap-6">
        <Suspense fallback={<ProjectSkeleton />}>
          <div className="max-sm:flex-col sm:flex gap-6 max-sm:justify-center max-sm:items-center sm:items-center p-5 bg-white/10  sm:h-40 rounded-sm">
            <div className="max-sm:w-full max-sm:mb-2  max-sm:flex max-sm:items-center max-sm:justify-center">
              <div className="w-full max-h-80 sm:w-48 sm:h-32 rounded bg-white/20">
                <Image
                  src={"/image.png"}
                  width={192}
                  height={192}
                  alt="project 01"
                  className="relative w-full h-full sm:w-48 sm:h-32 object-cover object-center rounded-sm"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://cortex-store.vercel.app/"
              >
                <div className="">
                  <h1 className="text-xl sm:text-2xl font-bold">Cortex</h1>
                  <p>E-commerce website</p>
                  <Badge variant="destructive" className="text-white">
                    <span className="font-bold pr-1">Status: </span>Not
                    completed
                  </Badge>
                </div>
              </Link>
              <div className="flex flex-wrap gap-4 ">
                <Badge
                  variant="outline"
                  className="text-white hover:bg-white hover:text-black"
                >
                  React.js
                </Badge>
                <Badge
                  variant="outline"
                  className="text-white hover:bg-white hover:text-black"
                >
                  Next.js
                </Badge>
                <Badge
                  variant="outline"
                  className="text-white hover:bg-white hover:text-black w-fit"
                >
                  Strapi
                </Badge>
                <Badge
                  variant="outline"
                  className="text-white hover:bg-white hover:text-black"
                >
                  PostgreSQL
                </Badge>
              </div>
            </div>
          </div>
        </Suspense>

        <ProjectSkeleton />
        <ProjectSkeleton />
        <ProjectSkeleton />
      </div>
    </div>
  )
}
