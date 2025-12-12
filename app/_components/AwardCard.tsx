import Image from "next/image";

interface AwardCardProps {
  image: string;
  award: string;
  competition: string;
  year: string;
  type: string;
}

export default function AwardCard({
  image,
  award,
  competition,
  year,
  type,
}: AwardCardProps) {
  return (
    <div className="flex flex-row items-center gap-4 p-4 rounded-xl border-b border-borderPrimary bg-background hover:bg-backgroundSecondary transition-all duration-300 w-full group">
      <div className="shrink-0 relative">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-borderPrimary bg-background relative">
          <Image
            src={image}
            alt={`${award} logo`}
            fill
            sizes="48px"
            className="object-cover rounded-full"
          />
        </div>
      </div>

      <div className="flex-grow flex flex-col text-left">
        <h3 className="text-lg font-medium text-textPrimary transition-colors">
          {award}
        </h3>
        <p className="text-sm text-textPrimary font-light">{competition}</p>
      </div>

      <div className="shrink-0 flex flex-col items-end gap-2">
        <p className="text-xs text-textSecondary font-light text-right">
          {type}
        </p>
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-hoverPrimary text-textPrimary">
          {year}
        </span>
      </div>
    </div>
  );
}
