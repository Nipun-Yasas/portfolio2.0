"use client";

import BlurText from "../BlurText";
import { Button } from "../Button";
import { ProjectCards } from "../ProjectCards";
import { motion } from "motion/react";

export default function Projects() {
  const cards = [
    {
      projectName: "SkillForge",
      role: "Full Stack Developer",
      year: "2024 - 2025",
      src: "/projects/SkillForge.png",
    },
    {
      projectName: "Employee Management System",
      role: "Full Stack Developer",
      year: "2025",
      src: "/projects/Shiftly.png",
    },
    {
      projectName: "Auto Care Pro",
      role: "Full Stack Developer",
      year: "2024",
      src: "/projects/AutoCarePro.png",
    },
    {
      projectName: "APOD ",
      role: "Frontend Developer",
      year: "2024",
      src: "/projects/Apod.png",
    },
  ];
  return (
    <div className="justify-center pt-8 md:pt-12 lg:pt-16 xl:pt-12 px-4 sm:px-6 md:px-12 w-full max-w-7xl mx-auto">
      <h1 className="font-header text-primary flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-sparkle"
          aria-hidden="true"
        >
          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
        </svg>
        Projects
      </h1>
      <BlurText
        text="Selected Projects"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-5xl py-2 font-bold font-mono"
      />
      <h1 className="text-textPrimary">
        Here are some of the projects showcasing my skills
      </h1>
      <ProjectCards cards={cards} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center mt-8 sm:mt-12"
      >
        <Button>View all Projects</Button>
      </motion.div>
    </div>
  );
}
