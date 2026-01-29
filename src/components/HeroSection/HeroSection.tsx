import Link from "../ui/Link";
import HeroDecoration from "./HeroDecoration";
import HeroSectionContent from "./HeroSectionContent";
import HeroSectionImg from "./HeroSectionImg";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-8 w-full bg-(--custom-bg-color) pb-10 px-8 relative">
      <HeroSectionImg />
      <div className="flex flex-col items-center gap-5 z-10 mb-20">
        <HeroSectionContent />
        <Link 
          href="/"
          className={` 
            text-white 
            font-bold
            bg-linear-to-r 
            from-(--teal-200) to-(--cyan-500) 
            px-12 py-2 
            rounded-full
            hover:from-(--cyan-500)
          `}
        >
          Get Started
        </Link>
      </div>
      <HeroDecoration />
    </section>
  )
}