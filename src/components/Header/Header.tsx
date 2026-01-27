import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
      <header 
        className="flex items-center justify-between"
      >
        <HeaderLogo />
        <HeaderNav />
      </header>
  )
}