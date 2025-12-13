export type Project = {
  projectName: string;
  role: string;
  year: string;
  src: string;
  category: string;
  slug: string;
  demoUrl?: string;
  repoUrl?: string;
  frontendRepo?: string;
  backendRepo?: string;
  techStack?: string[];
  description: string;
  techSummary?: { label: string; value: string }[];
  keyFeatures?: { title: string; description: string }[];
};

export const projects: Project[] = [
  {
    projectName: "SkillForge",
    role: "Full Stack Developer",
    year: "2025",
    src: "/projects/SkillForge.png",
    category: "FullStack",
    slug: "skillforge",
    demoUrl: "https://skill-forge-three.vercel.app/",
    repoUrl: "https://github.com/Nipun-Yasas/SkillForge",
    frontendRepo: "",
    backendRepo: "",
    techStack: [
      "NextJS",
      "MongoDB",
      "MUI",
      "Toolpad Core",
      "GSAP",
      "Framer Motion",
      "Bcrypt",
      "JWT",
      "Formic & Yup",
    ],
    description:
      "A skill-exchange platform for university students to connect as learners, teachers, or both. Students earn credits by teaching others or buy credits to learn, ensuring a fair barter system. Includes AI-powered mentor search and in-app chat for learning sessions.",
    techSummary: [
      {
        label: "Frontend",
        value: "NextJS, TypeScript, MUI",
      },
      { label: "Backend", value: "NextJS" },
      { label: "Database", value: "MongoDB with Mongoose" },
      { label: "Authentication", value: "JWT, Bcrypt" },
      { label: "AI", value: "Google Gemini 2.0 flash" },
      { label: "Animations", value: "Framer Motion, GSAP" },
      { label: "Styling", value: "MUI theming, custom gradients" },
      { label: "File Storage", value: "Local filesystem" },
      { label: "Deployment", value: "Vercel" },
    ],
    keyFeatures: [
      {
        title: "Authentication & Security",
        description:
          "Secure login with JWT tokens and bcrypt password hashing .",
      },
      {
        title: "AI-Powered Mentor Matching",
        description:
          "Google Gemini 2.0 Flash integration to find mentors based on natural language queries .",
      },
      {
        title: "Barter Credit System",
        description:
          "Teach skills to earn credits, use credits to learn from others (1:1 ratio). 10 welcome bonus credits on signup, free first session with every mentor .",
      },
      {
        title: "Course Management",
        description:
          "Create, enroll, and complete video-based courses with quizzes. Filter by difficulty, category, and rating .",
      },
      {
        title: "Mentorship Platform",
        description:
          "Browse mentor profiles, book sessions, and rate mentors. Detailed mentor profiles with expertise, ratings, and availability .",
      },
      {
        title: "Real-Time Chat",
        description:
          "One-on-one messaging system for learner-mentor communication .",
      },
      {
        title: "Community Forum",
        description:
          "Discussion threads across 8 categories with upvote/downvote system.Thread bookmarking and reply functionality .",
      },

      {
        title: "Profile Management",
        description:
          "Editable profiles with avatar upload, bio, skills (learning & teaching) .",
      },
      {
        title: "Responsive UI",
        description:
          "Material-UI with glassmorphism design, dark mode, and smooth animations .",
      },
    ],
  },
  {
    projectName: "Employee Management System",
    role: "Full Stack Developer",
    year: "2025",
    src: "/projects/Shiftly.png",
    category: "FullStack",
    slug: "employee-management-system",
    demoUrl: "https://shiftly-rust.vercel.app/",
    repoUrl: "",
    frontendRepo:
      "https://github.com/Nipun-Yasas/Shiftly-EMS-FrontEnd-Creative_software.git",
    backendRepo:
      "https://github.com/LalalnaGurusinghe/Shiftly-EMS-Backend-Creative_software.git",
    techStack: [
      "NextJS",
      "Java Spring Boot",
      "PostgreSQL",
      "MUI",
      "Toolpad Core",
      "JWT",
      "Formic & Yup",
    ],
    description:
      "A role-based employee management system where super admins assign roles or block signups, while admins manage departments, designations, vacancies, and employee submissions such as events, claims, timesheets, leaves, and references. The system also includes AI-powered letter generation, allowing employees to request official letters that admins can generate and email. Users can track submissions, view status, and use a dashboard to manage to-dos, meetings, and upcoming events.",
    techSummary: [
      {
        label: "Frontend",
        value: "NextJS, MUI, Formik & Yup",
      },
      {
        label: "Backend",
        value:
          "Java Spring Boot, Spring Security, Spring Data JPA, PostgreSQL, JWT, JavaMailSender",
      },
      {
        label: "DataBase",
        value: "PostgreSQL",
      },
      {
        label: "Authentication",
        value: "JWT, BCrypt",
      },
      {
        label: "Development Tools",
        value: "Vercel, Docker, Maven",
      },
    ],
    keyFeatures: [
      {
        title: "Authentication & Security",
        description:
          "JWT-based auth, BCrypt hashing, Role-based access (SUPER_ADMIN, ADMIN, USER), Email verification.",
      },
      {
        title: "User Management",
        description:
          "Multi-role system, Profile management with photo upload, Admin privilege controls.",
      },
      {
        title: "Employee Management",
        description:
          "Profiles with education/experience, Team/Department assignment, Advanced search & filtering.",
      },
      {
        title: "Leave Management",
        description:
          "Date range submission, Multi-status workflow (Pending/Approved), History tracking.",
      },
      {
        title: "Timesheet Management",
        description:
          "Daily work logs (Office/Remote), Project tracking, Admin approval workflow.",
      },
      {
        title: "Claims Management",
        description:
          "Expense claims (Medical/Insurance) with receipt upload and approval workflow.",
      },
      {
        title: "Event Management",
        description:
          "Company event creation, Image upload, Approval workflow, Participation tracking.",
      },
      {
        title: "Letter Request System",
        description:
          "AI-powered (Gemini API) letter generation, Multiple types, Admin review.",
      },
      {
        title: "Referral System",
        description:
          "Job vacancy referrals, CV upload, Status tracking (Read/Unread).",
      },
      {
        title: "Department & Team",
        description:
          "Department creation, Team formation, Organizational hierarchy visualization.",
      },
      {
        title: "Vacancy Management",
        description: "Job vacancy posting, Requirements tracking.",
      },
      {
        title: "Dashboard & Analytics",
        description:
          "Personalized dashboard, To-do list, Goal tracking, Meeting scheduler, Activity timeline.",
      },
      {
        title: "File Management",
        description:
          "Secure upload/storage for multiple file types, Organized structure, Size validation.",
      },
      {
        title: "Admin Portal",
        description:
          "Centralized dashboard, User verification,Role assignement",
      },
      {
        title: "Email Notifications",
        description:
          "Automated emails for verification, password reset, and role assignments via SMTP.",
      },
      {
        title: "Developer Tools",
        description:
          "Built-in utilities - JSON formatter, Base64 encoder, Password generator, Activity logging.",
      },
    ],
  },
  {
    projectName: "Auto Care Pro",
    role: "Full Stack Developer",
    year: "2025",
    src: "/projects/AutoCarePro.png",
    category: "FullStack",
    slug: "auto-care-pro",
    demoUrl: "https://ead-frontend-new-newr.vercel.app",
    repoUrl: "",
    frontendRepo: "https://github.com/Nipun-Yasas/ead-frontend.git",
    backendRepo: "https://github.com/Nipun-Yasas/ead-backend.git",
    techStack: ["React", "Spring Boot", "PostgreSQL", "MUI", "Docker"],
    description:
      "A web application for vehicle maintenance shops, featuring appointment booking, real-time chat, and AI-powered assistance. Customers can book appointments with their details, and admin will appoint an available employee; if unavailable, customers will be notified using email. Admins and employees can view appointment status and their progress.",
    techSummary: [
      {
        label: "Frontend",
        value: "React 18, TypeScript, Vite, MUI, Toolpad Core",
      },
      {
        label: "Backend",
        value: "Spring Boot, Spring Security, Spring Mail",
      },
      { label: "Database", value: "PostgreSQL" },
      { label: "Authentication", value: "JWT, Spring Security" },
      { label: "Real-time", value: "WebSocket (STOMP)" },
      { label: "AI Integration", value: "Gemini AI API" },
      { label: "DevOps", value: "Docker, AWS (ECR, EC2), Jenkins CI/CD" },
      { label: "Testing", value: "JUnit" },
    ],
    keyFeatures: [
      {
        title: "Authentication & Security",
        description:
          "JWT-based auth with role-based access (SUPER_ADMIN, ADMIN, EMPLOYEE, CUSTOMER) and bcrypt hashing.",
      },
      {
        title: "Appointment Management",
        description:
          "Vehicle service booking with time slot validation, employee assignment, and multi-vehicle support.",
      },
      {
        title: "Real-time Chat System",
        description:
          "WebSocket-based messaging (STOMP) for live user-admin communication with history.",
      },
      {
        title: "Admin Dashboard",
        description:
          "Analytics for appointments, user management, service tracking, and system metrics.",
      },
      {
        title: "Email Notifications",
        description:
          "Automated confirmations and status updates via Spring Mail (SMTP).",
      },
      {
        title: "AI-Powered Features",
        description:
          "Gemini AI integration for intelligent chat responses and custom question handling.",
      },
      {
        title: "CI/CD Pipeline",
        description:
          "Automated deployment with Jenkins, Docker, AWS ECR, and EC2 (Blue-Green deployment).",
      },
      {
        title: "CORS Configuration",
        description:
          "Secure cross-origin resource sharing for frontend-backend communication.",
      },
      {
        title: "Responsive UI",
        description:
          "MUI-based design with dark/light themes, mobile drawer, and accessibility.",
      },
    ],
  },
  {
    projectName: "HackElite ",
    role: "Full Stack Developer",
    year: "2025",
    src: "/projects/HackElite.png",
    category: "FullStack",
    slug: "hackelite",
    demoUrl: "https://binary-bandits-hackelite2-0.vercel.app/",
    repoUrl: "https://github.com/Nipun-Yasas/BinaryBandits_hackelite2.0.git",
    techStack: ["NextJS", "MongoDB", "MUI", "JWT", "GSAP"],
    description:
      "A web application for career exploration opportunities for AL students through AI-powered guidance and interactive assessments with Sinhala and English language support.",
    techSummary: [
      {
        label: "Frontend",
        value: "NextJS, React, TypeScript, MUI, Framer Motion, GSAP",
      },
      {
        label: "Backend",
        value: "NextJS, NodeJS, JWT",
      },
      { label: "Database", value: "MongoDB with Mongoose" },
      { label: "Authentication", value: "JWT" },
      { label: "State Management", value: "React Context API" },
      { label: "Deployment", value: "Vercel" },
    ],
    keyFeatures: [
      {
        title: "Authentication & Security",
        description: "JWT-based auth with role-based access control.",
      },
      {
        title: "Career Exploration System",
        description:
          "AI-powered career recommendations, interactive quizzes, and detailed domain fit analysis.",
      },
      {
        title: "Admin Dashboard",
        description:
          "System-wide statistics, user management, and real-time health monitoring analytics.",
      },
      {
        title: "User Profile Management",
        description:
          "Comprehensive profiles with avatar uploads, academic details, and real-time updates.",
      },
      {
        title: "AI-Powered Chatbot",
        description:
          "Context-aware AI assistant for career guidance and platform support (English/Sinhala).",
      },
      {
        title: "Internationalization",
        description:
          "Bilingual support (English/Sinhala) with persisted locale preference.",
      },
      {
        title: "Responsive UI",
        description:
          "MUI-based design with dark/light themes, mobile drawer, and accessibility.",
      },
    ],
  },
  {
    projectName: "Cosmic View",
    role: "Frontend Developer",
    year: "2024",
    src: "/projects/CosmicView.png",
    category: "Frontend",
    slug: "cosmic-view",
    demoUrl: "https://cosmicview.vercel.app/",
    repoUrl: "https://github.com/Nipun-Yasas/Nasa.git",
    techStack: ["Next.JS", "NASA API", "CSS"],
    description:
      "A modern web application that brings the wonders of space to your screen by fetching and displaying NASA's Astronomy Picture of the Day (APOD). This project showcases the beauty of our universe through stunning imagery and fascinating explanations.",
    techSummary: [
      {
        label: "Frontend",
        value: "NextJS, CSS",
      },
      { label: "API Integration", value: "NASA APOD API" },
      { label: "Caching", value: "LocalStorage (Browser-based)" },
      { label: "Deployment", value: "Vercel" },
    ],
    keyFeatures: [
      {
        title: "API Integration",
        description:
          "Fetches daily images from NASA APOD API with environment variable security.",
      },
      {
        title: "Caching Strategy",
        description:
          "Daily data caching via localStorage to minimize API calls.",
      },
      {
        title: "Responsive Interface",
        description:
          "Mobile-first design with adaptive sidebar and full-screen image viewer.",
      },
      {
        title: "Image Optimization",
        description:
          "Next.js Image component configuration for optimized loading of remote NASA assets.",
      },
    ],
  },
  {
    projectName: "Pos system",
    role: "Frontend Developer",
    year: "2025",
    src: "/projects/Pos.png",
    category: "Frontend",
    slug: "pos-system",
    demoUrl: "https://pos-xi-ten.vercel.app/",
    repoUrl: "https://github.com/nipun/pos-system",
    techStack: ["NextJS", "Tailwind", "Motion"],
    description:
      "This is a modern Point of Sale (POS) system designed for small to medium-sized retail businesses. The application provides a complete solution for managing sales transactions, inventory, and business analytics through an intuitive web-based interface.",
    techSummary: [
      {
        label: "Frontend",
        value: "NextJS, React, Tailwind, Motion",
      },
      {
        label: "State/Storage",
        value: "React Context API, Browser LocalStorage",
      },
      {
        label: "UI Components",
        value: "Tabler Icons, Motion (Framer Motion) 12",
      },
      { label: "Build Tools", value: "Turbopack (Next.js), ESLint 9" },
      { label: "Deployment", value: "Vercel" },
    ],
    keyFeatures: [
      {
        title: "Authentication & Security",
        description:
          "Role-based access (Admin/Cashier) with session persistence and secure login.",
      },
      {
        title: "Point of Sale (POS)",
        description:
          "Real-time barcode scanning, interactive cart with tax calculation, and receipt printing.",
      },
      {
        title: "Product Management",
        description:
          "Full CRUD operations, category filtering, and low stock alerts.",
      },
      {
        title: "Transaction Management",
        description:
          "Complete history with cashier filtering, detailed records, vs automatic stock deduction.",
      },
      {
        title: "Daily Reporting",
        description:
          "Comprehensive sales reports, revenue metrics, and hourly breakdowns.",
      },
      {
        title: "User Management",
        description:
          "Admin-only user creation (Admin/Cashier roles) with password validation.",
      },
      {
        title: "UI/UX Features",
        description:
          "Responsive design, animated transitions, and print-optimized layouts.",
      },
      {
        title: "Data Persistence",
        description:
          "Client-side persistence for inventory, users, and transactions via LocalStorage.",
      },
    ],
  },
  {
    projectName: "BeFit ",
    role: "Frontend Developer",
    year: "2025",
    src: "/projects/BeFit.png",
    category: "Frontend",
    slug: "befit",
    demoUrl: "https://befit-liard.vercel.app/",
    repoUrl: "https://github.com/Nipun-Yasas/befit.git",
    techStack: ["React 19", "Vite", "Tailwind CSS"],
    description:
      "Web application to create personalized workout plans from a curated library of 100+ predefined exercises. Select split, target muscles, and goal (strength/hypertrophy/endurance) to get routines with reps, rest, tempo, and basic set-tracking.",
    techSummary: [
      {
        label: "Frontend",
        value: "ReactJS, Vite",
      },
      { label: "Styling", value: "Tailwind CSS" },
      { label: "Deployment", value: "Vercel" },
    ],
    keyFeatures: [
      {
        title: "Workout Generation",
        description:
          "Algorithmically generates plans based on split type (Bro/Upper-Lower) and goals (Strength/Growth/Endurance).",
      },
      {
        title: "Exercise Database",
        description:
          "Comprehensive library with detailed instructions, variants, and muscle group targeting.",
      },
      {
        title: "Workout Tracking",
        description:
          "Interactive set completion tracking with visual progress indicators and rest timers.",
      },
      {
        title: "Smart Customization",
        description:
          "Auto-adjusts reps, rest, and tempo based on selected specific fitness goals.",
      },
      {
        title: "Responsive UI",
        description:
          "Mobile-first Tailwind CSS design with smooth animations and modal interactions.",
      },
      {
        title: "Smart Algorithm",
        description:
          "Prevents duplicates and shuffles exercises for varied, balanced workouts.",
      },
    ],
  },
  {
    projectName: "Wallet App",
    role: "Full Stack developer",
    year: "2024",
    src: "/projects/Wallet.png",
    category: "FullStack",
    slug: "wallet-app",
    demoUrl: "https://wallet-tawny-beta.vercel.app/",
    repoUrl: "https://github.com/Nipun-Yasas/Wallet.git",
    techStack: ["ReactJS", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    description:
      "A web application for managing personal finances with income and expense tracking.  It features user authentication, visual data analytics through interactive charts, and Excel export capabilities. Users can track their transactions, view financial trends over time, and maintain a comprehensive overview of their financial health through an intuitive dashboard.",
    techSummary: [
      {
        label: "Frontend",
        value: "ReactJS, Vite, Tailwind CSS, Recharts",
      },
      {
        label: "Backend",
        value: "Node.js, Express.js, Multer, XLSX",
      },
      { label: "Database", value: "MongoDB Atlas (Mongoose ODM)" },
      { label: "Authentication", value: "JWT, BCrypt" },
      { label: "Tools", value: "Nodemon, ESLint" },
    ],
    keyFeatures: [
      {
        title: "Authentication & Security",
        description:
          "Secure JWT-based login, bcrypt password hashing, and profile image upload validation.",
      },
      {
        title: "Financial Dashboard",
        description:
          "Real-time summary cards, recent transactions, and visual pie/bar charts for analysis.",
      },
      {
        title: "Income Management",
        description:
          "Add/Delete entries with custom emojis, date sorting, and Excel export download.",
      },
      {
        title: "Expense Tracking",
        description:
          "Category-based expense logging, line chart trends, and monthly distribution analysis.",
      },
      {
        title: "Data Visualization",
        description:
          "Interactive Recharts for balance distribution, expense categories, and income sources.",
      },
      {
        title: "User Profile",
        description:
          "Profile management with avatar upload, image preview, and account details.",
      },
      {
        title: "Responsive UI",
        description:
          "Mobile-friendly design with sidebar navigation, modal dialogs, and toast notifications.",
      },
    ],
  },
  {
    projectName: "RespairPo ",
    role: "Designer",
    year: "2024",
    src: "/projects/RespairPro.png",
    category: "Frontend",
    slug: "respairpo",
    repoUrl: "https://github.com/Nipun-Yasas/hardware-project.git",
    techStack: ["ESP32", "Arduino Uno", "LCD", "Servo Motor", "Buck Converters"],
    description:
      "A DIY ventilator that provides respiratory aid to patients, controlling breaths per minute and volume. Sensor data is processed via ESP32, with an Arduino Uno controlling the LCD and servo motor. Powered by a 12V 10A supply with buck converters for component distribution",
  },
];
