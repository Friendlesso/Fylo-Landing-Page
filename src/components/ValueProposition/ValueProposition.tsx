import ValuePropositionContent from "./ValuePropositionContent"
import ValuePropositionImg from "./ValuePropositionImg"
import ValuePropositionLink from "./ValuePropositionLink"

export default function ValueProposition() {
  return (
    <section className="flex gap-15 md:flex-row flex-col items-center">
      <ValuePropositionImg />
      <div className="flex flex-col gap-5">
        <ValuePropositionContent />
        <ValuePropositionLink />
      </div>
    </section>
  )
}