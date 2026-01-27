import Link from "../ui/Link"

const NAV_LINKS = [
  { label: "Features", href: "/" },
  { label: "Team", href: "/" },
  { label: "Sign in", href: "/" },
]

export default function HeaderNav() {

  return (
    <nav className="flex gap-4">
      {NAV_LINKS.map(link => (
        <Link
          key={link.label}
          href={link.href}
          className="text-gray-400 md:text-[1rem] text-sm hover:text-white hover:underline outline-none"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}