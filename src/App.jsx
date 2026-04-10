import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}
