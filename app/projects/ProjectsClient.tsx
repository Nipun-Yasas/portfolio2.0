"use client";

import { useState } from "react";

import BlurText from "../_components/BlurText";
import { ProjectCards } from "../_components/ProjectCards";

import { projects } from "../../lib/projectData";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "FullStack", "Frontend", "Mobile", "AI"];

  const cards = projects;

  const filteredCards =
    selectedCategory === "All"
      ? cards
      : cards.filter(
          (card) =>
            card.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div>
      <div className="pb-4 pt-32 sm:pt-32 px-4 sm:px-6 md:px-12 lg:px-12 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 mb-4 justify-start">
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
            My Work
          </h1>
          <BlurText
            text="Creating next level digital solutions"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-5xl py-2 font-bold font-mono"
          />
          <div className="flex flex-wrap justify-center md:justify-end gap-2 m-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-backgroundSecondary text-textPrimary"
                    : "text-textPrimary hover:bg-hoverPrimary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <ProjectCards cards={filteredCards} />
        </div>
      </div>
    </div>
  );
}
