interface HeroSectionProps {}

export default function HeroSection({}: HeroSectionProps) {
  return (
    <section className="grid place-items-center">
      <div className="flex justify-center text-center flex-col gap-2 overflow-hidden">
        <h1 className="text-[40px] sm:text-6xl lg:text-8xl font-black leading-none text-center">
          <span className="text-white/60">“</span>
          <span className="gradient">HELLO THERE</span>
        </h1>

        <p className="text-white/20 text-sm sm:text-xl animate-pulse">
          Let&apos;s conquer the world together!
        </p>
      </div>
    </section>
  )
}
