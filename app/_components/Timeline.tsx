"use client";

import { useScroll, useTransform, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  time: string;
  content: React.ReactNode;
}

export default function Timeline({ data }: { data: TimelineEntry[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 40%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full" ref={containerRef}>
      <div ref={ref} className="relative">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start ">
            <div className="sticky flex flex-col z-40 items-start top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 w-10 rounded-full bg-backgroundSecondary flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-primary shadow-[0_0_0_4px_rgba(255,255,255,0.05)] border border-borderPrimary p-1" />
              </div>
              <div className="hidden md:flex flex-col gap-1 md:pl-20">
                <h3 className="text-lg md:text-xl lg:text-2xl text-textPrimary">
                  {item.title}
                </h3>
                <span className="text-sm md:text-base text-textPrimary">
                  {item.time}
                </span>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 mt-8 w-full">
              <div className="md:hidden mb-4">
                <h3 className="text-lg text-textPrimary leading-tight">
                  {item.title}
                </h3>
                <span className="text-sm text-textPrimary mt-1 block">
                  {item.time}
                </span>
              </div>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
