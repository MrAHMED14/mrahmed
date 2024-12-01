interface AboutMeSectionProps {}

export default function AboutMeSection({}: AboutMeSectionProps) {
  return (
    <div className="sm:w-[70%] sm:mx-12 mx-6 mt-16">
      <h1 className="text-2xl text-center sm:text-4xl font-extrabold mb-1">
        ABOUT ME
      </h1>

      <p className="text-xl text-center sm:text-2xl text-white/60">
        I am Chikhaoui Ahmed, a computer science student specializing in
        full-stack web development. With substantial industry experience, I am
        adept at creating sophisticated and high-quality websites that engage
        users and fulfill business goals. My commitment to excellence and
        attention to detail guarantee that every project I handle has a
        significant and positive effect.
      </p>
    </div>
  )
}
