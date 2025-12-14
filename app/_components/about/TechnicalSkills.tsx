import { techLogos } from "@/lib/logos";
import Tabs from "../Tabs";
import SkillList, { Level } from "../SkillList";
import BlurText from "../BlurText";

const getSkills = (titles: string[], defaultLevel: Level = "Proficient") => {
  return titles
    .map((t) => {
      const logo = techLogos.find((l) => l.title === t);
      if (!logo) return null;
      return {
        ...logo,
        level: defaultLevel,
      };
    })
    .filter((item) => item !== null) as ({
    level: Level;
  } & (typeof techLogos)[0])[];
};

const programming = getSkills(
  ["Python", "Java", "JavaScript", "C"],
  "Proficient"
).concat(getSkills(["C#"], "Basic"));

const frontend = getSkills(
  ["React", "Next.js", "Tailwind CSS", "Material UI", "Bootstrap"],
  "Proficient"
).concat(getSkills(["Vue.js"], "Basic"));

const backend = getSkills(["Next.js", "Spring Boot"], "Proficient").concat(
  getSkills(["Express.js", "Node.js"], "Basic")
);

const database = getSkills(["MongoDB", "MySQL", "PostgreSQL"], "Proficient");

const mobile = getSkills(["React Native"], "Basic");

const devops = getSkills(["Kubernetes", "Docker"], "Basic");

const ai = getSkills(["Pandas", "Scikit-Learn"], "Proficient").concat(
  getSkills(["TensorFlow", "OpenCV", "Anaconda"], "Basic")
);

const others = getSkills(
  [
    "VS Code",
    "Vercel",
    "GitHub",
    "Postman",
    "Arduino",
    "Jira",
    "Canva",
    "Jupyter",
  ],
  "Proficient"
);

export default function TechnicalSkills() {
  const tabs = [
    {
      title: "Programming",
      value: "programming",
      content: (
        <div className="w-full p-1 bg-transparent">
          <SkillList items={programming} />
        </div>
      ),
    },
    {
      title: "Frontend",
      value: "frontend",
      content: (
        <div className="w-full p-1 bg-transparent">
          <SkillList items={frontend} />
        </div>
      ),
    },
    {
      title: "Backend",
      value: "backend",
      content: (
        <div className="w-full p-1 bg-transparent">
          <SkillList items={backend} />
        </div>
      ),
    },
    {
      title: "Database",
      value: "database",
      content: (
        <div className="w-full p-1 bg-transparent">
          <SkillList items={database} />
        </div>
      ),
    },
    {
      title: "Mobile",
      value: "mobile",
      content: (
        <div className="w-full p-1 bg-transparent">
          <SkillList items={mobile} />
        </div>
      ),
    },
    {
      title: "DevOps",
      value: "devops",
      content: (
        <div className="w-full p-1 bg-transparent">
          <SkillList items={devops} />
        </div>
      ),
    },

    {
      title: "AI",
      value: "ai",
      content: (
        <div className="w-full p-1 bg-transparent">
          <SkillList items={ai} />
        </div>
      ),
    },
    {
      title: "Others",
      value: "others",
      content: (
        <div className="w-full p-1 bg-transparent">
          <SkillList items={others} />
        </div>
      ),
    },
  ];

  return (
    <div className="items-center gap-2 justify-start">
      <div>
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
          Technical Expertise
        </h1>
        <BlurText
          text="Skills in Practice"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-4xl py-2 font-bold font-header"
        />
      </div>
      <h1 className="text-textPrimary font-light mb-8">
        The frameworks, libraries, and tools I use to build real-world
        applications, ranging from beginner to intermediate as I continue
        learning and growing.
      </h1>
      <div className="relative flex flex-col max-w-8xl mx-auto w-full items-center justify-start">
        <Tabs
          tabs={tabs}
          containerClassName="gap-2 flex-wrap md:flex-nowrap justify-center"
          contentClassName="rounded-2xl overflow-hidden"
        />
      </div>
    </div>
  );
}
