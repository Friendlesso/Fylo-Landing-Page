import FeaturesList from "../components/FeaturesList/FeaturesList";
import HeroSection from "../components/HeroSection/HeroSection";
import QuotesList from "../components/QuotesList/QuotesList";
import ValueProposition from "../components/ValueProposition/ValueProposition";

export default function HomePage() {
  return (
    <main className="flex flex-col  items-center pb-50">
      <HeroSection />
      <div className="flex flex-col items-center gap-30 pt-5 mx-8">
        <FeaturesList />
        <ValueProposition />
        <QuotesList />
      </div>
    </main>
  )
}