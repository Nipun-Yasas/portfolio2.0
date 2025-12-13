import BlurText from "../BlurText";
import AwardCard from "../AwardCard";

const awardsData = [
  {
    image: "/awards/Devthon.jpg",
    award: "Finalists",
    competition: "Devthon 2.0",
    year: "2025",
    type: "App Development",
  },
  {
    image: "/projects/SkillForge.png",
    award: "Semi-Finalists",
    competition: "Idealized",
    year: "2025",
    type: "App Development, Datathon",
  },
  {
    image: "/awards/CodeRally.jpg",
    award: "Beginner Tier Finalists",
    competition: "CodeRally 6.0",
    year: "2025",
    type: "Hackathon",
  },
  {
    image: "/awards/InnovateX.jpg",
    award: "Finalists",
    competition: "Innovatex University Edition",
    year: "2025",
    type: "Hackathon",
  },
  {
    image: "/projects/HackElite.png",
    award: "Participant",
    competition: "HackElite 2025",
    year: "2025",
    type: "Web development",
  },
  {
    image: "/awards/OctWave.png",
    award: "Participant",
    competition: "OctWave 2.0",
    year: "2025",
    type: "Datathon",
  },
  {
    image: "/awards/DataStrom.png",
    award: "Participant",
    competition: "Data Strom 6.0",
    year: "2025",
    type: "Datathon",
  },
  {
    image: "/awards/CodeQuest.jpg",
    award: "Participant",
    competition: "CodeQuest: Vault Edition",
    year: "2025",
    type: "CTF Hackathon",
  },
  {
    image: "/awards/SpritX.jpg",
    award: "Participant",
    competition: "SpiritX 2025",
    year: "2025",
    type: "Ideathon",
  },
  {
    image: "/awards/Ballerina.jpg",
    award: "Participant",
    competition: "Innovate with Ballerina",
    year: "2024, 2025",
    type: "Web development",
  },
];

export default function Awards() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 relative items-center lg:items-start">
      <div className="lg:w-1/3 w-full lg:sticky lg:top-120 h-fit">
        <h1 className="font-header text-primary flex items-center gap-2 p-2 sm:p-0">
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
            className="lucide lucide-sparkle"
            aria-hidden="true"
          >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
          </svg>
          Awards
        </h1>
        <BlurText
          text="Awards & Recognition"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-4xl py-2 font-bold font-header"
        />
        <h1 className="text-textPrimary font-light">
          Achievements and recognitions from competitions, hackathons, and
          events.
        </h1>
      </div>

      <div className="lg:w-2/3 w-full justify-center flex flex-col gap-4">
        {awardsData.map((award, index) => (
          <AwardCard
            key={index}
            image={award.image}
            award={award.award}
            competition={award.competition}
            year={award.year}
            type={award.type}
          />
        ))}
      </div>
    </div>
  );
}
