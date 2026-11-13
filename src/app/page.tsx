import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { MobileConversionBar } from "@/components/layout/MobileConversionBar";
import {
  Hero,
  Statement,
  CalculatorFeature,
  SimulatorFeature,
  PlannerFeature,
  AdvisorFeature,
  Details,
  NewStudents,
  FinalCta,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      {/* 8px top sentinel for Nav faint scroll shadow detection via IntersectionObserver */}
      <div id="scroll-sentinel" className="absolute top-0 left-0 right-0 h-2 pointer-events-none" aria-hidden="true" />
      <Nav />
      <main id="main-content" className="flex-1">
        <Hero />
        <Statement />
        <CalculatorFeature />
        <SimulatorFeature />
        <PlannerFeature />
        <AdvisorFeature />
        <Details />
        <NewStudents />
        <FinalCta />
      </main>
      <Footer />
      <MobileConversionBar />
    </>
  );
}
