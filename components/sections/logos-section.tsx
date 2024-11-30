import MarqueeAnimation from "../global/marquee-animation"

interface LogosSectionProps {}

const images = [
  { src: "/next.svg", alt: "mrbeast" },
  { src: "/logos2/reactjs2.svg", alt: "javascript" },
  { src: "/logos2/html5.svg", alt: "javascript" },
  { src: "/logos2/css3.svg", alt: "javascript" },
  { src: "/logos2/javascript22.svg", alt: "javascript" },
  { src: "/logos2/typescript-2020.svg", alt: "javascript" },
  { src: "/logos2/php2.svg", alt: "javascript" },
  { src: "/logos2/tailwind-css.svg", alt: "tailwind-css" },
  { src: "/logos2/nodejs-2015.svg", alt: "nodejs" },
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
