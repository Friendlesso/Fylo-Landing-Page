import { LEGAL_LINKS, PAGE_LINKS } from "../../data/footerLinks";
import Link from "../ui/Link";


export default function FooterLinks() {
  return (
    <div className="flex md:flex-row flex-col md:gap-12 gap-8 my-8">
      <div className="flex flex-col gap-2">
        {PAGE_LINKS.map(link => (
          <Link
            key={link.label}
            className=" text-gray-400 hover:text-white w-fit"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {LEGAL_LINKS.map(link => (
          <Link
            key={link.label}
            className=" text-gray-400 hover:text-white w-fit"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}