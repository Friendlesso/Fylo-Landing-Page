type LinkProps = {
  href: string;
  className: string;
  children: string;
}

export default function Link({
   href, 
   className = "",
   children,
  }: LinkProps) {
  return (
    <a 
      href={href}
      className={`${className} transition-colors duration-150 ease-in-out font-['Raleway']`}
    >
      {children}
    </a>
  )
}