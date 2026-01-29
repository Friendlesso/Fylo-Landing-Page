import LogoImg from '../../assets/logo.svg';

export default function Logo() {
  return(
    <div>
      <img className='md:w-33 w-22' src={LogoImg} alt="Fylo logo" />
    </div>
  )
}