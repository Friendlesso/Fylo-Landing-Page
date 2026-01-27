type FeatureProps = {
  title: string;
  description: string;
  icon: string;
}

export function Feature({
  title, description, icon
}: FeatureProps) {
  return (
    <article className="flex flex-col items-center gap-4">
      <div>
        <img className="w-auto h-20" src={icon} alt={`${title}Feature icon"`} />
      </div>
      <div className="text-center md:w-90">
        <h2 className="text-white font-bold pb-2">{title}</h2>
        <p className="text-gray-400 wrap-break-word">{description}</p>
      </div>
    </article>
  )
}