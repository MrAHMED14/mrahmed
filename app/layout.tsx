import "./globals.css"

import type { Metadata } from "next"
import { Toaster } from "@/components/ui/sonner"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

import StarCanvas from "@/components/star-background/star-canvas"
import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/global/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MrAHMED",
  description: "My name is Chikhaoui Ahmed. I am a full-stack web developer",
  verification: {
    google: "SiypDumEEYY334xchqMlyfBKIbJH7BPrchXsZwAF0x8",
  },

  openGraph: {
    title: "Chikhaoui Ahmed",
    description: "My name is Chikhaoui Ahmed. I am a full-stack web developer",
    type: "website",
    siteName: "Chikhaoui Ahmed",
    url: "https://mrahmed.vercel.app/",
    images: [
      {
        url: "https://mrahmed.vercel.app/apple-icon.png",
      },
    ],
  },

  keywords:
    "nextjs, reactjs, full-stack, dev, developer, full-stack-developer, portfolio, chikhaoui, ahmed, mr-ahmed, chikhaoui-ahmed, chikhaoui-ahmed-portfolio, portfolio-of-chikhaoui-ahmed",
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          inter.className,
          "dark flex flex-col min-h-screen bg-black"
        )}
      >
        <Toaster position="top-center" richColors />
        <Navbar />
        <main>{children}</main>
        <Footer />

        <StarCanvas />
      </body>
    </html>
  )
}
