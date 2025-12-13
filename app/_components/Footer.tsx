"use client";

import { Button } from "./Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandGmail,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { SplitText } from "./SplitText";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="pb-20 md:pb-4 pt-8 md:pt-12 lg:pt-16 xl:pt-12 px-4 sm:px-6 md:px-12 lg:px-12 w-full max-w-7xl mx-auto">
      <div className="bg-backgroundSecondary rounded-xl flex flex-col gap-8 w-full justify-center items-center">
        <div className="flex items-center gap-2 py-4 sm:py-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium">Available for work</span>
        </div>

        <SplitText
          text="Let's create your next big idea"
          className="text-[clamp(2rem,4vw,3rem)] text-textPrimary font-semibold leading-tight tracking-tight"
          delay={50}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 50, scale: 0.8 }}
          to={{ opacity: 1, y: 0, scale: 1 }}
          threshold={0.1}
          rootMargin="0px"
          textAlign="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 sm:pt-8 pb-8"
        >
          <Button onClick={() => router.push("/contact")}>Contact Me</Button>

          <div className="flex sm:hidden items-center gap-6 group/footer-socials-mobile">
            <Link
              href="https://www.linkedin.com/in/nipun-yasas-1126a8275"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 group-hover/footer-socials-mobile:opacity-30 hover:!opacity-100"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin className="w-6 h-6 text-textPrimary" />
            </Link>
            <Link
              href="https://github.com/Nipun-Yasas"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 group-hover/footer-socials-mobile:opacity-30 hover:!opacity-100"
              aria-label="GitHub"
            >
              <IconBrandGithub className="w-6 h-6 text-textPrimary" />
            </Link>
            <Link
              href="mailto:nipuny74@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 group-hover/footer-socials:opacity-30 hover:!opacity-100"
              aria-label="Gmail"
            >
              <IconBrandGmail className="w-6 h-6 text-textPrimary" />
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row justify-between mt-8 items-center gap-4 text-sm text-textPrimary">
        <div className="flex items-center gap-1">
          <span>&copy; {new Date().getFullYear()} Nipun Yasas</span>
        </div>

        <div className="hidden sm:flex items-center gap-4 group/footer-socials">
          <Link
            href="https://www.linkedin.com/in/nipun-yasas-1126a8275"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-300 group-hover/footer-socials:opacity-30 hover:!opacity-100"
            aria-label="LinkedIn"
          >
            <IconBrandLinkedin className="w-6 h-6 text-textPrimary" />
          </Link>
          <Link
            href="https://github.com/Nipun-Yasas"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-300 group-hover/footer-socials:opacity-30 hover:!opacity-100"
            aria-label="GitHub"
          >
            <IconBrandGithub className="w-6 h-6 text-textPrimary" />
          </Link>
          <Link
            href="mailto:nipuny74@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-300 group-hover/footer-socials:opacity-30 hover:!opacity-100"
            aria-label="Gmail"
          >
            <IconBrandGmail className="w-6 h-6 text-textPrimary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
