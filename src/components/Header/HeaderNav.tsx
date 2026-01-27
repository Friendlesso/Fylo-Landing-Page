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
          className="text-gray-400 hover:text-white hover:underline"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}