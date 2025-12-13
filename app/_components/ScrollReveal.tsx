"use client";

import { useRef, useMemo, ReactNode, RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom center",
  wordAnimationEnd = "bottom center",
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const scroller =
        scrollContainerRef && scrollContainerRef.current
          ? scrollContainerRef.current
          : window;

      // Main timeline attached to ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: rotationEnd,
          scrub: true,
        },
      });

      // Rotation animation
      tl.fromTo(
        el,
        { transformOrigin: "0% 50%", rotate: baseRotation },
        { ease: "none", rotate: 0 },
        0 // Start at time 0
      );

      const wordElements = el.querySelectorAll<HTMLElement>(".word");

      // Word reveal animation (opacity + blur)
      // We create a separate timeline or add to the main one.
      // Since the original had different start/end points for words, we can use a second timeline
      // OR just use a separate ScrollTrigger for words if the start/end must be strictly different.
      // However, the user wants "top to bottom" reveal. Aligning them is safer.
      // Let's use a separate ScrollTrigger for the words to respect the specific `wordAnimationEnd` prop
      // but put BOTH opacity and blur in the SAME timeline to lock them.

      const wordTl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom-=20%",
          end: wordAnimationEnd,
          scrub: true,
        },
      });

      wordTl.fromTo(
        wordElements,
        {
          opacity: baseOpacity,
          willChange: "opacity, filter",
          filter: enableBlur ? `blur(${blurStrength}px)` : "none",
        },
        {
          ease: "none",
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.2,
        }
      );
    },
    {
      scope: containerRef,
      dependencies: [
        enableBlur,
        baseRotation,
        baseOpacity,
        rotationEnd,
        wordAnimationEnd,
        blurStrength,
        scrollContainerRef,
      ],
    }
  );

  return (
    <h2 ref={containerRef} className={`my-4 ${containerClassName}`}>
      <p
        className={`text-[clamp(1.6rem,4vw,2rem)] leading-[1.5] font-medium ${textClassName}`}
      >
        {splitText}
      </p>
    </h2>
  );
};

export default ScrollReveal;
