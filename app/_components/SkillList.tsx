import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export type Level = "Basic" | "Proficient" | "Advanced";

export type SkillItem = {
  src: string;
  title: string;
  level: Level;
  href?: string;
  className?: string;
};

const levelColors: Record<Level, string> = {
  Basic: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  Proficient:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  Advanced:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
};

export default function SkillList({ items = [] }: { items: SkillItem[] }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeParam = mounted && resolvedTheme === "light" ? "light" : "dark";

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
      {items.map((item) => {
        const finalSrc = item.src.includes("skillicons.dev")
          ? `${item.src}${
              item.src.includes("?") ? "&" : "?"
            }theme=${themeParam}`
          : item.src;

        return (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="flex flex-col items-center justify-center gap-3 p-4 bg-backgroundSecondary rounded-xl border-none shadow-sm hover:shadow-md hover:bg-hoverPrimary transition-all duration-200 h-full">
              <div className="w-15 h-15 flex-shrink-0 relative flex items-center justify-center rounded-lg border-none">
                <Image
                  src={finalSrc}
                  alt={item.title}
                  fill
                  className={`object-contain p-2 ${item.className || ""}`}
                  sizes="(max-width: 768px) 48px, 48px"
                />
              </div>

              <div className="flex flex-col items-center justify-center flex-grow gap-1">
                <span className="text-sm font-medium text-textPrimary transition-colors text-center">
                  {item.title}
                </span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                    levelColors[item.level]
                  }`}
                >
                  {item.level}
                </span>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
