"use client";

import { motion } from "framer-motion";

import ProfileCard from "../_components/about/ProfileCard";
import { HeroHighlight, Highlight } from "../_components/HeroHighlight";
import { Button } from "../_components/Button";
import LogoLoop from "../_components/about/LogoLoop";
import { techLogos } from "../../lib/logos";
import Education from "../_components/about/Education";
import Stats from "../_components/about/Stats";
import Experience from "../_components/about/Experience";
import Awards from "../_components/about/Awards";

import BlurText from "../_components/BlurText";
import DomeGallery from "../_components/about/DomeGallery";

export default function About() {
  return (
    <div>
      <div className="pb-12 pt-36 sm:pt-20 md:pt-40 lg:pt-32 px-4 sm:px-6 md:px-12 lg:px-12 w-full max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 lg:gap-16 items-center sm:items-start w-full">
          <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:block">
            <ProfileCard
              name="Nipun Yasas"
              title="3rd Year IT Undergraduate"
              avatarUrl="/profile.png"
              iconUrl="/iconpattern.png"
              grainUrl="/grain.webp"
              enableTilt
              enableMobileTilt
            />
          </div>

          <div className="flex flex-col gap-6 w-full sm:w-auto sm:flex-1 text-center sm:text-left items-center sm:items-start">
            <HeroHighlight>
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-4xl sm:text-5xl lg:text-6xl leading-snug lg:leading-tight text-center sm:text-left max-w-4xl"
              >
                A Aspiring{" "}
                <Highlight className="text-textPrimary">
                  Software Engineer
                </Highlight>
              </motion.h1>
            </HeroHighlight>
            <p className="text-textPrimary font-mono text-sm leading-relaxed max-w-prose">
              An individual who likes to work on web, mobile, AI, and ML
              projects while exploring new technologies. My mission is to create
              products that make day-to-day life easy.
            </p>
            <div className="hidden lg:block w-full">
              <Stats />
            </div>
            <a href="/Nipun_Bandara_CV.pdf" download="Nipun_Bandara_CV.pdf">
              <Button>Download CV</Button>
            </a>
          </div>
        </div>
        <div className="block lg:hidden w-full mt-10">
          <Stats />
        </div>
      </div>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="var(--background-secondary)"
        ariaLabel="Technology partners"
        className="bg-transparent border border-borderPrimary rounded-xl py-20"
      />
      <div className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 px-4 sm:px-6 md:px-12 lg:px-12 w-full max-w-7xl mx-auto">
        <Education />
      </div>
      <div className="pt-16 sm:pt-12 md:pt-16 lg:pt-20 px-4 sm:px-6 md:px-12 lg:px-12 w-full max-w-7xl mx-auto">
        <Experience />
      </div>
      <div className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 px-4 sm:px-6 md:px-12 lg:px-12 w-full max-w-7xl mx-auto">
        <Awards />
      </div>
      <div className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 px-4 sm:px-6 md:px-12 lg:px-12 relative h-[800px] overflow-hidden flex flex-col">
        <div className="items-start w-full max-w-7xl mx-auto gap-2 mb-0 justify-start z-10">
          <h1 className="font-header text-primary flex items-center py-2 sm:py-0 gap-2">
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
            Moments
          </h1>
          <BlurText
            text="University Journey"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl py-2 font-bold font-header"
          />
          <h1 className="text-textPrimary font-light">
            Highlights and memorable moments from my university life and
            activities.
          </h1>
        </div>

        <div className="flex-1 w-full pt-8 sm:pt-12 md:pt-16 lg:pt-20 relative min-h-0">
          <DomeGallery />
        </div>
      </div>
    </div>
  );
}
