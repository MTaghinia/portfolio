import Hero from "./_components/Hero";
import About from "./_components/About";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-neutral-1 px-16">
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
