import Logo from "../ui/Logo";
import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <header
      className="flex items-center justify-between p-8"
    >
      <Logo />
      <HeaderNav />
    </header>
  )
}