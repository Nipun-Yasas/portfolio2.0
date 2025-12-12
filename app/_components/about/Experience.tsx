import BlurText from "../BlurText";
import ExperienceCard from "../ExperienceCard";

const experienceData = [
  {
    logo: "/experience/Susipvan.png",
    position: "Combined Maths Paper Instructor",
    company: "Susipvan Higher Education (Private) Limited",
    duration: "2022 - 2024",
  },
];

export default function Experience() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 relative items-center lg:items-start">
      <div className="lg:w-1/3 w-full lg:sticky lg:top-120 h-fit">
        <h1 className="font-header text-primary flex items-center gap-2 py-2 sm:py-0">
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
          Experience
        </h1>
        <BlurText
          text="Working Experience"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-5xl py-2 font-bold font-mono"
        />
      </div>
      <div className="lg:w-2/3 w-full justify-center flex flex-col gap-4">
        {experienceData.map((exp, index) => (
          <ExperienceCard
            key={index}
            logo={exp.logo}
            position={exp.position}
            company={exp.company}
            duration={exp.duration}
          />
        ))}
      </div>
    </div>
  );
}
