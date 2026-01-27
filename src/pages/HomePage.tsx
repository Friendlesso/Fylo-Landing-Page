import FeaturesList from "../components/FeaturesList/FeaturesList";
import QuotesList from "../components/QuotesList/QuotesList";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <FeaturesList />
      <QuotesList />
    </main>
  )
}