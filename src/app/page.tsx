import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import {
  Hero,
  Statement,
  CalculatorFeature,
  SimulatorFeature,
  PlannerFeature,
  AdvisorFeature,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Statement />
        <CalculatorFeature />
        <SimulatorFeature />
        <PlannerFeature />
        <AdvisorFeature />
        <section id="download" aria-label="Download Acaddash" />
      </main>
      <Footer />
    </>
  );
}
