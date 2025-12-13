import Hero from "./_components/home/Hero";

import About from "./_components/home/About";
import Projects from "./_components/home/Projects";
import Expertise from "./_components/home/Expertise";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to my portfolio where I showcase my projects and skills.",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Expertise />
    </div>
  );
}
