import Timeline from "../Timeline";
import BlurText from "../BlurText";
import ToolTip from "../ToolTip";

export default function Education() {
  const data = [
    {
      title: "Higher Education",
      time: "2023 - Present",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-base md:text-lg font-semibold text-textPrimary mb-1">
              University of Moratuwa
            </h4>
            <p className="text-sm md:text-base text-textPrimary font-medium">
              B.Sc. (Hons) Information Technology
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm md:text-base font-light text-textPrimary leading-relaxed">
              I chose Information Technology out of a lifelong curiosity for
              technology. Even before I fully understood AI, IT felt like the
              right path and today, I’m glad I made that choice. I’ve found a
              real passion for building projects and participating in web
              development, machine learning, and AI competitions .
            </p>

            <ToolTip
              trigger="CGPA: 3.56"
              content={
                <div className="space-y-1 w-full">
                  <div className="flex justify-between gap-4 text-textPrimary">
                    <span>L1S1 SGPA</span>
                    <span className="text-textPrimary">3.10</span>
                  </div>
                  <div className="flex justify-between gap-4 text-textPrimary">
                    <span>L1S2 SGPA</span>
                    <span className="text-textPrimary">3.76</span>
                  </div>
                  <div className="flex justify-between gap-4 text-textPrimary">
                    <span>L2S1 SGPA</span>
                    <span className="text-textPrimary">3.75</span>
                  </div>
                  <div className="flex justify-between gap-4 text-textPrimary">
                    <span>L2S2 SGPA</span>
                    <span className="text-textPrimary">3.56</span>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      ),
    },
    {
      title: "Secondary Education",
      time: "2018 - 2021",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-base md:text-lg font-bold text-textPrimary mb-1">
              Bandaranayake College, Gampaha
            </h4>
            <p className="text-sm md:text-base text-textPrimary font-medium">
              G.C.E. Advanced Level – Physical Science Stream
            </p>
          </div>

          <p className="text-sm md:text-base font-light text-textPrimary leading-relaxed">
            Successfully passed the G.C.E. Advanced Level Examination on first
            attempt in the Physical Science stream .
          </p>

          <ToolTip
            trigger="AAB"
            content={
              <div className="space-y-2 w-full">
                <div className="flex justify-between gap-4 textPrimary">
                  <span>Combined Maths</span>
                  <span className="font-bold text-textPrimary">A</span>
                </div>
                <div className="flex justify-between gap-4 textPrimary">
                  <span>Chemistry</span>
                  <span className="font-bold text-textPrimary">A</span>
                </div>
                <div className="flex justify-between gap-4 textPrimary">
                  <span>Physics</span>
                  <span className="font-bold text-textPrimary">B</span>
                </div>
                <div className="flex justify-between gap-4 textPrimary">
                  <span>Z Score</span>
                  <span className="font-bold text-textPrimary">1.95</span>
                </div>
              </div>
            }
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="items-center gap-2 justify-start">
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
          Education
        </h1>
        <BlurText
          text="Qualifications"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-5xl py-2 font-bold font-mono"
        />
      </div>

      <div className="mx-auto max-w-8xl px-4 pt-8 sm:px-6 lg:px-8">
        <Timeline data={data} />
      </div>
    </div>
  );
}
