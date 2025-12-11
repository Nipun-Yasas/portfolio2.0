import ScrollReveal from "../ScrollReveal";

export default function About() {
  return (
    <div className="pb-8 pt-20 md:pt-32 lg:pt-36 xl:pt-16 px-4 sm:px-6 md:px-12 lg:px-12 w-full max-w-7xl mx-auto">
      <h1 className="font-header text-primary flex justify-center items-center gap-2">
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
        About Me
      </h1>
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={0}
        blurStrength={10}
        textClassName="text-center justify-center pt-2"
      >
        A 3rd-year undergraduate at the University of Moratuwa with a focus on
        AI, ML, and web development. I enjoy exploring new technologies and
        finding innovative ways to make life easier and more efficient through
        technology, constantly learning, experimenting, and building impactful
        solutions.
      </ScrollReveal>
    </div>
  );
}
