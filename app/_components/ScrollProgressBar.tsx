"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.4,
  });

  const [show, setShow] = useState(true);
  useEffect(() => {
    const check = () => {
      const scrollable =
        document.documentElement.scrollHeight >
        document.documentElement.clientHeight + 32;
      setShow(scrollable);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!show) return null;

  return (
    <div className="container">
      <div className="fixed right-0 bg-transparent top-0 h-screen w-1.5 rounded-full bg-neutral-800/40 overflow-hidden z-[200] pointer-events-none">
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="w-full h-full bg-gradient-to-br from-purple-400 via-purple-700 to-indigo-500"
        />
      </div>
    </div>
  );
};
