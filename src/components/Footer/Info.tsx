type InfoProps = {
  icon: string;
  text: string;
}

export default function Info({
  icon, text
}: InfoProps) {
 return (
  <div className="text-white flex items-center gap-2">
    <i className={icon} />
    <p>{text}</p>
  </div>
 )
}