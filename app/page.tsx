import Hero from "./components/main/Hero";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import About from "./components/main/About";
import Projects from "./components/main/Projects";
import Expertise from "./components/main/Expertise";
import Footer from "./components/main/Footer";

export default function Home() {
  return (
    <div>
      <ScrollProgressBar />
      <Hero />
      <About />
      <Projects />
      <Expertise />
      <Footer />
    </div>
  );
}
