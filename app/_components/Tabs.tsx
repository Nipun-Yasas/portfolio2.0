"use client";

import { useState } from "react";
import { motion } from "motion/react";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export default function Tabs({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={`flex flex-row items-center justify-center relative max-w-full w-full ${containerClassName}`}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              setActive(tab);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={`relative px-4 py-2 rounded-full ${tabClassName}`}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={`absolute inset-0 bg-primary rounded-full ${activeTabClassName}`}
              />
            )}

            <span
              className={`relative block ${
                active.value === tab.value ? "text-white" : "text-textPrimary"
              }`}
            >
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={propTabs}
        active={active}
        key={active.value}
        className={`mt-8 sm:mt-12 ${contentClassName}`}
      />
    </>
  );
}

export const FadeInDiv = ({
  className,
  tabs,
  active,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
}) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {tabs.map(
        (tab) =>
          active.value === tab.value && (
            <motion.div
              key={tab.value}
              layoutId={tab.value} // layoutId might cause issues with height if unique? No, wait.
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, type: "tween", ease: "easeInOut" }}
              className="w-full h-full"
            >
              {tab.content}
            </motion.div>
          )
      )}
    </div>
  );
};
