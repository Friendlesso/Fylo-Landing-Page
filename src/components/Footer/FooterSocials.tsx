import Link from "../ui/Link";

export default function FooterSocials() {
  return (
    <div className="text-white *:hover:text-(--teal-200) flex items-center md:justify-start justify-center gap-4">
      <Link
        className=" border rounded-full w-8 h-8 flex items-center justify-center"
        href="/"
      >
        <i className="fa-brands fa-facebook "></i>
      </Link>
      <Link
        className="border rounded-full w-8 h-8 flex items-center justify-center"
        href="/"
      >
        <i className="fa-brands fa-x"></i>
      </Link>
      <Link
        className="border rounded-full w-8 h-8 flex items-center justify-center"
        href="/"
      >
        <i className="fa-brands fa-youtube"></i>
      </Link>
    </div>
  )
}