import Link from "next/link"
import { Spotlight } from "@/components/ui/Spotlight";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pb-10">Web design, development & SEO</h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">This is the thing I handle myself and started my career with this website design & development service. I create website based on content & your business niche. I develop custom web-functionalites depending on your unique need & based on my capabilities. As of September 2020, already built more than one hundred successfull websites.</p>
      <div className="mt-6">
        <Link href={"https://nasir-saeed-portfolio.netlify.app/"} className="text-white border-2 p-3 rounded-lg">Explore My Portofolio</Link>
      </div>
      </div>
    </div>
  )
}

export default HeroSection
