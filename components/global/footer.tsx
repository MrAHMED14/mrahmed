import Link from "next/link"

interface FooterProps {}

export default function Footer({}: FooterProps) {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  return (
    <footer className="p-5 mt-10 flex items-center justify-center">
      <p className="text-xs sm:text-sm text-white/60">
        Copyright &copy; {currentYear}{" "}
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/MrAHMED14"
          className="font-semibold hover:underline"
        >
          MrAHMED
        </Link>
        , All rights reserved.
      </p>
    </footer>
  )
}
