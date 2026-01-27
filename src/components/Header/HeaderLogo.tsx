import Logo from '../../assets/logo.svg';

export default function HeaderLogo() {
  return(
    <div>
      <img className='md:w-33 w-22' src={Logo} alt="Fylo logo" />
    </div>
  )
}