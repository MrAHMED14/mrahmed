import ProjectsSection from "@/components/sections/projects-section"
import AboutMeSection from "@/components/sections/about-me-section"
import ContactSection from "@/components/sections/contact-section"
import LogosSection from "@/components/sections/logos-section"
import HeroSection from "@/components/sections/hero-section"

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-[clac(100vh-80px)]">
        <div className="w-full flex items-center justify-center my-52 sm:my-60">
          <HeroSection />
        </div>
      </div>
      <AboutMeSection />
      <LogosSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
