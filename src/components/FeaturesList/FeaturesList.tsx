import { FEATURES_DATA } from "../../data/features";
import { Feature } from "./Feature";


export default function FeaturesList() {
  return (
    <section className="grid md:grid-cols-2 grid-rows-1 md:gap-40 gap-15 md:w-fit max-w-[80vw]">
      {FEATURES_DATA.map((card, index )=> (
        <Feature
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </section>
  )
}