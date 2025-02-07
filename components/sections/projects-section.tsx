import { RiReactjsFill, RiNextjsLine, RiTailwindCssFill } from "react-icons/ri"
import { SiPostgresql } from "react-icons/si"

import ProjectSkeleton from "@/components/global/project-skeleton"
import ProjectCard from "../global/project-card"

const projects = [
  {
    title: "Cortex store",
    desc: "E-commerce website",
    href: "https://cortex-store.vercel.app",
    image: "/cortex-cover.png",
    badge: [
      {
        name: "ReactJS",
        icon: <RiReactjsFill className="mr-1 h-4 w-4 flex-shrink-0" />,
      },
      {
        name: "NextJS",
        icon: <RiNextjsLine className="mr-1 h-4 w-4 flex-shrink-0" />,
      },
      {
        name: "Tailwind css",
        icon: <RiTailwindCssFill className="mr-1 h-4 w-4 flex-shrink-0" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="mr-1 h-4 w-4 flex-shrink-0" />,
      },
    ],
  },
  {
    title: "University calculator",
    desc: "Tool website",
    href: "https://university-calculator.vercel.app",
    image: "/univ-calculator-cover.png",
    badge: [
      {
        name: "NextJS",
        icon: <RiNextjsLine className="mr-1 h-4 w-4 flex-shrink-0" />,
      },
      {
        name: "ReactJS",
        icon: <RiReactjsFill className="mr-1 h-4 w-4 flex-shrink-0" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="mr-1 h-4 w-4 flex-shrink-0" />,
      },

      {
        name: "Tailwind css",
        icon: <RiTailwindCssFill className="mr-1 h-4 w-4 flex-shrink-0" />,
      },
    ],
  },
]

export default function ProjectsSection() {
  return (
    <div className="w-[90%] sm:w-[70%] sm:mx-12 mx-4 mb-72">
      <h1
        className="text-2xl uppercase sm:text-4xl font-extrabold mb-2"
        id="projects"
      >
        MY Projects
      </h1>
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            desc={project.desc}
            image={project.image}
            href={project.href}
            badges={project.badge}
          />
        ))}
        <ProjectSkeleton />
        <ProjectSkeleton />
      </div>
    </div>
  )
}
