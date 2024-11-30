interface ProjectSkeletonProps {}

export default function ProjectSkeleton({}: ProjectSkeletonProps) {
  return (
    <div className="max-sm:flex-col sm:flex gap-6 max-sm:justify-center max-sm:items-center sm:items-center p-5 bg-white/10  sm:h-40 rounded-sm">
      <div className="max-sm:w-full max-sm:mb-2 max-sm:flex max-sm:items-center max-sm:justify-center">
        <div className="w-full h-44 sm:w-48 sm:h-32 rounded bg-white/20 animate-pulse max-sm:mb-2"></div>
      </div>

      <div className="flex w-[80%] sm:w-1/2  flex-col gap-3">
        <div className="rounded bg-white/20 h-10 animate-pulse"></div>
        <div className="w-1/2 rounded bg-white/20 h-10 animate-pulse"></div>
      </div>
    </div>
  )
}
