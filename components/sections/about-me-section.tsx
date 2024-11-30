interface AboutMeSectionProps {}

export default function AboutMeSection({}: AboutMeSectionProps) {
  return (
    <div className="sm:w-[70%] sm:mx-12 mx-6 mt-16">
      <h1 className="text-2xl text-center sm:text-4xl font-extrabold mb-1">
        ABOUT ME
      </h1>
      <p className="text-xl text-center sm:text-2xl text-white/60">
        My name is Chikhaoui Ahmed, and I am a dedicated computer science
        engineer with a specialization in full-stack website development. I
        possess extensive industry experience that enables me to deliver
        high-quality, elegant websites that resonate with users and meet
        business objectives. My focus on craftsmanship and detail ensures that
        each project I undertake makes a meaningful impact.
      </p>
    </div>
  )
}
