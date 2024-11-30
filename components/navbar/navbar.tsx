import { HiMenuAlt3 } from "react-icons/hi"
import Image from "next/image"
import Link from "next/link"

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  return (
    <nav className="sticky top-0 border-b-[0.5px] border-b-black/35 backdrop-blur-sm flex items-center justify-between font-bold h-16 mb-6 mt-2 px-4 sm:px-10 z-40">
      <div className="">
        <div className="w-fit sm:w-36 flex">
          <Link
            href=""
            className="text-xl hover:bg-white/15 px-3 py-2 rounded-lg"
          >
            Ar
          </Link>
        </div>
      </div>

      <div className="flex items-center">
        <div className="">
          <Link href="/">
            <Image
              src={"/logo.svg"}
              width={100}
              height={100}
              className="w-9 h-9 sm:w-10 sm:h-10"
              alt="logo"
              priority
            />
          </Link>
        </div>
      </div>

      <div className="">
        <div className="w-fit sm:w-36 flex justify-end">
          <Link
            href=""
            className="text-2xl hover:bg-white/15 px-[11.5px] py-[10px] rounded-lg"
          >
            <HiMenuAlt3 />
          </Link>
        </div>
      </div>
    </nav>
  )
}
