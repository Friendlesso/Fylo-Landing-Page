import { FEATURES_DATA } from "../../data/features";
import { Feature } from "./Feature";


export default function FeaturesList() {
  return (
    <section className="grid md:grid-cols-2 grid-rows-1 lg:gap-20 gap-y-10 gap-x-7 md:w-fit mt-10">
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