import FeaturesList from "../components/FeaturesList/FeaturesList";
import HeroSection from "../components/HeroSection/HeroSection";
import QuotesList from "../components/QuotesList/QuotesList";
import ValueProposition from "../components/ValueProposition/ValueProposition";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-15 pt-5 mx-8 items-center pb-50">
      <HeroSection />
      <FeaturesList />
      <ValueProposition />
      <QuotesList />
    </main>
  )
}