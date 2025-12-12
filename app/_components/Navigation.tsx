"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed justify-center top-0 left-0 right-0 h-24 bg-gradient-to-b from-[var(--background)] to-transparent z-40"
      />
      <header className="pointer-events-none fixed top-0 left-0 right-0 z-50 w-full px-0 py-4 flex justify-center">
        <motion.nav
          layout
          initial={{
            width: "800px",
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
          animate={
            isMobile
              ? { backgroundColor: "rgba(0, 0, 0, 0)", width: "95%" }
              : {
                  width: isScrolled ? "fit-content" : "800px",
                  backgroundColor: isScrolled
                    ? "var(--background-secondary)"
                    : "rgba(0, 0, 0, 0)",
                }
          }
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="max-screen bg-solid sm:backdrop-blur-md bg-backgroundSecondary pointer-events-auto flex w-full items-center justify-between gap-6 rounded-full px-4 py-1 transition-colors sm:px-6 sm:pr-4"
        >
          <a
            className="font-clash-display text-xl text-textPrimary font-medium sm:text-xl"
            href="/"
          >
            NY
          </a>
          <ul className="hidden font-light gap-6 text-sm sm:flex whitespace-nowrap px-16">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li
                  key={item.name}
                  className="group relative flex items-center"
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -left-3 h-1.5 w-1.5 rounded-full bg-primary"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <a
                    className={`text-textPrimary ${
                      isActive ? "font-semibold" : ""
                    }`}
                    href={item.href}
                  >
                    <span className="relative inline-flex overflow-hidden">
                      <div className="translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                        {item.name}
                      </div>
                      <div className="absolute translate-y-[110%] skew-y-12 transform-gpu transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                        {item.name}
                      </div>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={(e) => {
                const newTheme = resolvedTheme === "dark" ? "light" : "dark";

                if (!document.startViewTransition) {
                  setTheme(newTheme);
                  return;
                }

                const { clientX, clientY } = e;
                const endRadius = Math.hypot(
                  Math.max(clientX, innerWidth - clientX),
                  Math.max(clientY, innerHeight - clientY)
                );

                const transition = document.startViewTransition(() => {
                  setTheme(newTheme);
                });

                transition.ready.then(() => {
                  document.documentElement.animate(
                    {
                      clipPath: [
                        `circle(0px at ${clientX}px ${clientY}px)`,
                        `circle(${endRadius}px at ${clientX}px ${clientY}px)`,
                      ],
                    },
                    {
                      duration: 500,
                      easing: "ease-in-out",
                      pseudoElement: "::view-transition-new(root)",
                    }
                  );
                });
              }}
              className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap text-sm font-semibold disabled:pointer-events-none disabled:opacity-50 hover:bg-hoverPrimary h-11 w-11 relative rounded-full shadow backdrop-blur-md transition-all active:scale-90 sm:h-10 sm:w-10 sm:border-none sm:bg-transparent sm:shadow-none sm:backdrop-blur-none"
            >
              <div
                className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                style={{
                  opacity: mounted && resolvedTheme === "dark" ? 1 : 0,
                  transform:
                    mounted && resolvedTheme === "dark"
                      ? "scale(1) rotate(0deg)"
                      : "scale(0.5) rotate(90deg)",
                }}
              >
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
                  className="lucide lucide-moon"
                  aria-hidden="true"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              </div>
              <div
                className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                style={{
                  opacity: mounted && resolvedTheme === "light" ? 1 : 0,
                  transform:
                    mounted && resolvedTheme === "light"
                      ? "scale(1) rotate(0deg)"
                      : "scale(0.5) rotate(-90deg)",
                }}
              >
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
                  className="lucide lucide-sun"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
              </div>
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>
        </motion.nav>
      </header>

      <nav className="flex-center fixed bottom-0 left-0 right-0 z-50 w-full sm:hidden">
        <ul className="bg-backgroundSecondary text-textPrimary flex w-full justify-evenly rounded-t-3xl shadow backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name} className="p-4">
                <a
                  className={`flex flex-col items-center justify-center gap-1 ${
                    isActive ? "text-primary" : "text-textPrimary"
                  }`}
                  href={item.href}
                >
                  {item.name === "Home" && (
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
                      className="lucide lucide-house"
                      aria-hidden="true"
                    >
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </svg>
                  )}
                  {item.name === "About" && (
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
                      className="lucide lucide-smile"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <line x1="9" x2="9.01" y1="9" y2="9"></line>
                      <line x1="15" x2="15.01" y1="9" y2="9"></line>
                    </svg>
                  )}
                  {item.name === "Projects" && (
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
                      className="lucide lucide-layout-dashboard"
                      aria-hidden="true"
                    >
                      <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                      <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                      <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                      <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                    </svg>
                  )}
                  {item.name === "Contact" && (
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
                      className="lucide lucide-send"
                      aria-hidden="true"
                    >
                      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                      <path d="m21.854 2.147-10.94 10.939"></path>
                    </svg>
                  )}
                  <span className="text-xs">{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
