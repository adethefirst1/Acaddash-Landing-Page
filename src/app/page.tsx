import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-16">
        <section id="calculator" aria-label="CGPA Calculator" />
        <section id="simulator" aria-label="Goal Simulator" />
        <section id="planner" aria-label="Semester Planner" />
        <section id="advisor" aria-label="Course Advisor" />
        <section id="download" aria-label="Download Acaddash" />
      </main>
      <Footer />
    </>
  );
}
