import Nav from "./components/Nav.js";
import Hero from "./components/Hero.js";
import Profile from "./components/Profile.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
import Contact from "./components/Contact.js";

export default function App() {
  return (
    <main className="min-h-screen bg-bg text-[#f1ece4]">
      <Nav />
      <Hero />
      <Profile />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
