import HeroDesktopDecoImg from '../../assets/images/bg-curvy-desktop.svg';

export default function HeroDecoration() {
 return (
  <div className='absolute bottom-0 w-full'>
    <img className="bg-cover w-full" src={HeroDesktopDecoImg} alt="decoration" />
  </div>
 )
}