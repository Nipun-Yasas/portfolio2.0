"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

import BackgroundBeamsWithCollision from "../BackgroundBeamsWithCollision";

import { SplitText } from "../SplitText";
import { HeroHighlight, Highlight } from "../HeroHighlight";
import { Button } from "../Button";
import { TextLoop } from "../TextLoop";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen">
      <BackgroundBeamsWithCollision className="overflow-hidden w-screen flex flex-col items-center justify-center">
        <div className="pb-12 pt-24 sm:pt-24 lg:pt-24 px-4 sm:px-6 md:px-12 lg:px-12 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4 justify-start">
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
              className="wave inline-block origin-bottom-right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-hand text-primary mr-4"
                aria-hidden="true"
              >
                <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></path>
                <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></path>
                <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></path>
                <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
              </svg>
            </motion.span>
            <SplitText
              text="Hello, I'm Nipun!"
              className="text-[clamp(2rem,4vw,3rem)] font-header text-textPrimary font-small leading-tight tracking-tight text-left"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50, scale: 0.8 }}
              to={{ opacity: 1, y: 0, scale: 1 }}
              threshold={0.3}
              rootMargin="-50px"
              textAlign="left"
            />
          </div>
          <div className="w-full mt-8 sm:mt-0 md:mt-8 lg:mt-4">
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
                className="text-5xl lg:text-6xl leading-snug lg:leading-tight text-left max-w-4xl"
              >
                Driven by the idea of building useful{" "}
                <Highlight className="text-textPrimary">
                  software solutions
                </Highlight>
                {""} that{" "}
                <Highlight className="text-textPrimary">
                  makes life easier.
                </Highlight>
              </motion.h1>
            </HeroHighlight>

            <div className="flex flex-col sm:flex-row w-full items-center mt-4 sm:mt-0 md:mt-8 lg:mt-10 gap-4 sm:gap-0">
              <div className="w-full sm:w-1/2 h-[1.5px] bg-borderPrimary mb-2 sm:mb-0"></div>
              <div className="w-full sm:w-1/2 flex justify-start pl-0 sm:pl-4">
                <span className="text-lg sm:text-sm font-mono text-textPrimary whitespace-normal">
                  I built applications across web, mobile, and ML to solve
                  practical problems and love turning ideas into working
                  products.
                </span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="mt-8 sm:mt-8 flex w-full flex-col sm:flex-row items-center justify-center sm:justify-between gap-6"
            >
              <div className="hidden sm:flex gap-6 group/list">
                <a
                  href="https://www.linkedin.com/in/nipun-yasas-1126a8275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-2 text-sm transition-all duration-300 group-hover/list:opacity-50 hover:!opacity-100"
                >
                  LinkedIn
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
                <a
                  href="https://github.com/Nipun-Yasas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-2 text-sm transition-all duration-300 group-hover/list:opacity-50 hover:!opacity-100"
                >
                  GitHub
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
                <a
                  href="mailto:nipuny74@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-2 text-sm transition-all duration-300 group-hover/list:opacity-50 hover:!opacity-100"
                >
                  Gmail
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
              <Button>Know Me Better</Button>
            </motion.div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
      <TextLoop />
    </div>
  );
}
