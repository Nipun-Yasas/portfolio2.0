import Image from "next/image";

interface ExperienceCardProps {
  logo: string;
  position: string;
  company: string;
  duration: string;
}

export default function ExperienceCard({
  logo,
  position,
  company,
  duration,
}: ExperienceCardProps) {
  return (
    <div className="flex flex-row items-center gap-4 p-4 rounded-xl border-b border-borderPrimary bg-background hover:bg-backgroundSecondary transition-all duration-300 w-full group">
      <div className="shrink-0 relative">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-borderPrimary bg-background relative">
          <Image
            src={logo}
            alt={`${company} logo`}
            fill
            sizes="48px"
            className="object-cover rounded-full"
          />
        </div>
      </div>

      <div className="flex-grow flex flex-col text-left">
        <h3 className="text-lg font-medium text-textPrimary transition-colors">
          {position}
        </h3>
        <p className="text-sm text-textPrimary font-light">{company}</p>
      </div>

      <div className="shrink-0">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-hoverPrimary text-textPrimary">
          {duration}
        </span>
      </div>
    </div>
  );
}
