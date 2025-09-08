export type Resume = {
  fullName: string;
  title: string;
  about: string;
  skills?: {
    frontend?: string[];
    backend?: string[];
    data?: string[];
    tools?: string[];
    techstack?: string[];
    frameworks?: string[];
  };
  experience: Array<{
    company: string;
    start: string;
    end: string;
    summary?: string;
    description?: string;
    projects?: Array<{
      title: string;
      description?: string;
      keySolutions?: string[];
      languagesUsed?: string[];
      techStack?: string[];
      frameworks?: string[];
    }>;
  }>;
  personalProjects?: Array<{
    title: string;
    github?: string;
    app?: string;
    description?: string;
    keySolutions?: string[];
    languagesUsed?: string[];
    techStack?: string[];
  }>;
  certificates?: Array<{ title: string; url?: string }>;
  languageProficiency?: Array<{ name: string; percent: number }>;
  education: Array<{
    degree: string;
    school?: string;
    year?: string;
    location?: string;
  }>;
};

export const resume: Resume = {
  fullName: "Sagar Panwar",
  title: "Front-End Developer",
  about:
    "A results-driven Front-End Developer with over 3 years of experience specializing in the modern React ecosystem. I am passionate about building performant, type-safe user interfaces with TypeScript, and have proven experience architecting full-stack, real-time applications. I constantly fuel my curiosity by delving into the latest front-end frameworks and making something fresh and robust solutions on board.",
  skills: {
    techstack: [
      "React",
      "Tailwind CSS",
      "Tanstack Query",
      "Vite",
      "React Hook Forms",
      "Zod (form validation)",
      "Redux",
    ],
    frameworks: [
      "React",
      "Tailwind CSS",
      "Tanstack Query",
      "Shadcn UI Library",
      "Vite.js",
      "Recharts (dashboard)",
      "Supabase",
      "React Hook Form",
      "Zod (form validation)",
    ],
  },
  experience: [
    {
      company: "Key Management Group",
      start: "2021",
      end: "2024",
      summary:
        "For 3+ years, I was engaged in frontend website development for a client, Merchants Insurance Group.",
      description:
        "I was primarily working on their claim-filling part, using various front-end parts like.",
      projects: [
        {
          title: "Insurance website development/maintenance",
          description:
            "Worked on the internal Merchants Insurance Group website to manage their new quote creation website flow. I implemented form validation and state management based on various business logic like claim amount based on locations and pincode. Rendered new UI element based on the pre-defined business logic.",
          keySolutions: [
            "Architected the application's state management using Redux to ensure a predictable and scalable data flow for core business logic.",
            "Enforced data integrity and type safety by implementing Zod for robust, schema-based form validation, significantly reducing runtime errors.",
            "Executed ongoing website maintenance, implemented features based on evolving business requirements, and upgraded framework dependencies to improve performance.",
            "Optimized front-end data fetching by constructing efficient, targeted queries, enhancing application responsiveness, and user experience.",
          ],
          languagesUsed: ["JavaScript", "HTML/CSS", "TypeScript", "SQL"],
          techStack: [
            "React",
            "Tailwind CSS",
            "Tanstack Query",
            "Vite",
            "React Hook Forms",
            "Zod (form validation)",
            "Redux",
          ],
        },
      ],
    },
  ],
  personalProjects: [
    {
      title: "Right-Expense - Personal Finance Tracker",
      github: "https://github.com/sagarp96/Right-Expense",
      app: "https://rightexpense.netlify.app/",
      description:
        "A lightweight, mobile-first expense tracker that lets users log expenses, categorize them, and view visual spending insights. Focused on clean UX and fast page loads with a component-first approach.",
      keySolutions: [
        "Approach: React + TypeScript with Shadcn/ui for consistent UI patterns, Tailwind for styling speed, and Vite for fast builds. Forms follow a typed, validation-first pattern using React Hook Form and Zod to prevent bad data at the edge.",
        "Database & Auth: Supabase (PostgreSQL) handles authentication and persistence. The app uses the Supabase client to: Create, read, update, and delete user-scoped expense records after login; Store category assignments alongside transactions to support analytics; Keep network logic simple while relying on Postgres reliability.",
        "Data Handling: React Query manages fetching/caching and error states so the UI stays responsive even on slow networks. Validation happens before any write to the database, preventing inconsistent records.",
        "Analytics: Visual reports summarize spending by category and timeframe to surface patterns and help decision-making without overwhelming the user, based on the Recharts chart library.",
        "A pragmatic, type-safe frontend + hosted Postgres stack that prioritizes clarity over complexity—clean UI primitives, strict typing, and validation-first forms make it easy to maintain and extend without vendor lock-in or heavy backend code.",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "shadcn/ui",
        "React Query",
        "React Hook Form",
        "Zod",
        "Supabase (PostgreSQL + Auth)",
        "Netlify",
      ],
      languagesUsed: ["JavaScript", "HTML/CSS", "TypeScript", "SQL"],
    },
    {
      title: "Draggie — Realtime Collaborative Kanban",
      github: "https://github.com/sagarp96/Draggie",
      app: "https://draggie.vercel.app/login",
      description:
        "A realtime full stack Kanban app with multi-cursor presence, instant drag-and-drop sync, and in-app chat using Next.js, React, and Supabase Realtime.",
      keySolutions: [
        "Data and database: persists boards, lists, tasks, and chat in a relational backend; subscribes to realtime change streams so UI updates instantly when any user edits; writes occur on drag, reorder, status change, and messaging.",
        "Collaboration: multi‑cursor presence shows who’s active and where; in‑app chat includes connection status and auto‑reconnect for reliability.",
        "Routing: file‑based routing organizes board views and task details for clear navigation and deep links.",
        "Authentication and access: supports user identity for presence, chat attribution, and per‑user task colors; access control can be enforced via database policies to scope data to owners/teams.",
        "UX: mobile‑friendly drag‑and‑drop with touch optimizations; polished dark/light themes for readability.",
        "State and performance: client state is kept snappy with lightweight local state and server state caching; real-time subscriptions minimize network round‑trips.",
        "Live multi‑cursor overlays, instant cross‑client DnD, and per‑user color coding create a collaborative ‘see it as it happens’ experience that feels like a shared canvas rather than a traditional Kanban.",
      ],
      techStack: [
        "React",
        "Tailwind CSS",
        "Tanstack Query",
        "Shadcn UI Library",
        "Next.js",
        "Dnd-Kit",
        "Framer",
        "Supabase (realtime)",
        "React Hook Form",
        "Zod (form validation)",
        "Zustand",
      ],
      languagesUsed: ["JavaScript", "HTML/CSS", "TypeScript", "SQL"],
    },
  ],
  certificates: [
    {
      title: "Next.js Fundamentals V4 (Frontend Masters)",
      url: "https://shorturl.at/mFupZ",
    },
    {
      title: "Advanced React (Scrimba)",
      url: "https://shorturl.at/JeJB1",
    },
  ],
  languageProficiency: [
    { name: "JavaScript", percent: 80 },
    { name: "TypeScript", percent: 60 },
    { name: "HTML/CSS", percent: 90 },
    { name: "SQL", percent: 50 },
  ],
  education: [
    {
      degree: "Bachelor’s degree - B.Tech Computer Science",
      school: "Manav Rachna International Institute of Research and Studies",
      year: "2016-2020",
      location: "Faridabad, Haryana",
    },
  ],
};
