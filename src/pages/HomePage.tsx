import FeaturesList from "../components/FeaturesList/FeaturesList";
import QuotesList from "../components/QuotesList/QuotesList";
import ValueProposition from "../components/ValueProposition/ValueProposition";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <FeaturesList />
      <ValueProposition />
      <QuotesList />
    </main>
  )
}