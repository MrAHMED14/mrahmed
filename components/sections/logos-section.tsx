import MarqueeAnimation from "../global/marquee-animation"

interface LogosSectionProps {}

const images = [
  { src: "/logos/next.svg", alt: "nextjs" },
  { src: "/logos/reactjs2.svg", alt: "reactjs" },
  { src: "/logos/html5.svg", alt: "html" },
  { src: "/logos/css3.svg", alt: "css" },
  { src: "/logos/javascript22.svg", alt: "javascript" },
  { src: "/logos/typescript-2020.svg", alt: "typescript" },
  { src: "/logos/php2.svg", alt: "php" },
  { src: "/logos/tailwind-css.svg", alt: "tailwind-css" },
  { src: "/logos/nodejs-2015.svg", alt: "nodejs" },
]

export default function LogosSection({}: LogosSectionProps) {
  return (
    <div className="w-full my-32 overflow-x-hidden">
      <MarqueeAnimation images={images} />
    </div>
  )
}

/*{ src: "/logos/3m.svg", alt: "3m" },
  { src: "/logos/barstool-store.svg", alt: "barstool-store" },
  { src: "/logos/budweiser.svg", alt: "budweiser" },
  { src: "/logos/buzzfeed.svg", alt: "buzzfeed" },
  { src: "/logos/forbes.svg", alt: "forbes" },
  { src: "/logos/macys.svg", alt: "macys" },
  { src: "/logos/menshealth.svg", alt: "menshealth" },
  { src: "/logos/mrbeast.svg", alt: "mrbeast" },*/
