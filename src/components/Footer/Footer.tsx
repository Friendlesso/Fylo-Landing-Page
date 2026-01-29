import Logo from "../ui/Logo"
import FooterContantInfo from "./FooterContactInfo"
import FooterLinks from "./FooterLinks"
import FooterSocials from "./FooterSocials"


export function Footer() {
  return (
    <footer className="bg-(--footer-bg-color) p-8 pt-50">
      <Logo />
      <div className="flex md:flex-row flex-col justify-center lg:gap-40 md:gap-10 gap-5">
        <FooterContantInfo />
        <FooterLinks />
        <FooterSocials />
      </div>
    </footer>
  )
}