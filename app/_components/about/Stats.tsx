import { cn } from "@/lib/utils";
import {
  IconCode,
  IconTrophy,
  IconDeviceLaptop,
} from "@tabler/icons-react";

export default function Stats() {
  const features = [
    {
      title: "Projects",
      description:
        "9+ completed projects",
      icon: <IconDeviceLaptop />,
    },
    {
      title: "Awards",
      description:
        "5 accolades received for competetions",
      icon: <IconTrophy />,
    },
    {
      title: "Exp. Years",
      description: "10+ years of coding experience.",
      icon: <IconCode />,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 relative z-10 md:py-3 lg:py-1 xl:pd-4 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-4 relative group/feature border-borderPrimary items-center text-center sm:items-start sm:text-left",
        (index === 0) && "lg:border-l",
        index < 3 && "lg:border-b",
        // SM Breakpoint logic
        index === 0 && "sm:border-r md:border-r-0 lg:border-r-0",
        // Force last item to span 2 cols on SM (centering it)
        index === 2 && "sm:col-span-2 md:col-span-1 border-b-0 sm:border-b"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-hoverPrimary to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-textPrimary">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="font-medium group-hover/feature:translate-x-2 transition duration-200 inline-block text-textPrimary">
          {title}
        </span>
      </div>
      <p className="text-sm text-textPrimary/70 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
