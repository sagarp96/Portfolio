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
		"Software Developer building scalable, type-safe applications.Insurance doamin automation. Payment Integration, Realtime Collaboration, Testing and Data analytics.",
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
			company: "WebReinvent Technologies",
			start: "10/2025",
			end: "Present",
			summary:
				"Software Engineer working on production-grade React codebases and testing infrastructure.",
			description: "Lead the project - Migrate Enzyme test cases to RTL.",
			projects: [
				{
					title: "Enzyme to RTL Test Migration",
					description:
						"Leading the migration of Enzyme test cases to React Testing Library (RTL) across a large-scale frontend codebase.",
					keySolutions: [
						"Analysed existing Enzyme test coverage and defined a phased migration strategy to RTL.",
						"Refactored component tests to focus on user behaviour instead of implementation details, improving maintainability.",
						"Standardised testing utilities and patterns for consistent mocks, renders, and assertions across the codebase.",
					],
					techStack: ["React", "TypeScript", "React Testing Library", "Jest"],
				},
			],
		},
		{
			company: "Key Management Group",
			start: "04/2021",
			end: "12/2024",
			summary:
				"Software Engineer on insurance claim processing systems for Merchants Insurance Group.",
			description:
				"Architected and maintained critical insurance claim processing systems serving thousands of users.",
			projects: [
				{
					title: "Insurance website development/maintenance",
					description:
						"Worked on the internal Merchants Insurance Group website to manage their new quote creation and claim-filling flows.",
					keySolutions: [
						"Reduced runtime errors by implementation of TypeScript and Zod schema validation for claim filling process.",
						"Implemented form validation and state management based on various business logic like claim amount based on locations and pincode.",
						"Optimized API queries and data fetching with implementation of Tanstack Query.",
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
		{
			company: "Phable Health Care",
			start: "02/2020",
			end: "10/2020",
			summary:
				"Associate Engineer focused on prescription upload and patient-facing portals.",
			description:
				"Led UI/UX design and front-end development for a critical prescription upload portal.",
			projects: [
				{
					title: "Prescription Upload Portal",
					description:
						"Built accessible, intuitive flows for uploading and managing prescriptions in a healthcare environment.",
					keySolutions: [
						"Optimized the PDF submission workflow, focusing on accessibility and intuitive design.",
					],
					techStack: ["React", "TypeScript", "HTML/CSS"],
				},
			],
		},
	],
	personalProjects: [
		{
			title: "Parcel-Pal, A parcel delivery app, with an modern UI.",
			github: "https://github.com/sagarp96/ParcelPal",
			app: "https://parcel-pal-rho.vercel.app/auth/login",
			description:
				"A full-stack Next.js + React parcel booking and tracking app with glassmorphism UI, smooth animations, and dark/light mode.",
			keySolutions: [
				"Designed mobile-first responsive layouts and clean UX flows (stepper checkout, address search, tracking views) optimized for clarity and conversion.",
				"Integrated Razorpay for real payments and Google Maps API for address lookup and location context.",
				"Achieved strong performance and accessibility scores with optimized images, layout shifts minimized, and semantic components.",
			],
			techStack: [
				"React",
				"Next.js",
				"TypeScript",
				"Tailwind CSS",
				"Supabase",
				"Razorpay",
				"Google Maps API",
			],
			languagesUsed: ["JavaScript", "HTML/CSS", "TypeScript", "SQL"],
		},
		{
			title: "Draggie, Realtime Collaborative Kanban",
			github: "https://github.com/sagarp96/Draggie",
			app: "https://draggie.vercel.app/login",
			description:
				"A realtime full stack Kanban Task Manager with multi-cursor presence, instant drag-and-drop sync, and in-app chat using Next.js, React, and Supabase Realtime.",
			keySolutions: [
				"Real-Time Collaborative Control: Enables instant multi-user collaboration with live chat, multi-cursor presence, and real-time drag-and-drop functionality for dynamic updates.",
				"Optimized, Persistent Data: Securely persists all boards, lists, tasks, and chat in a relational backend, using real-time subscriptions to ensure the UI updates instantly with every change.",
				"Snappy, Mobile-First UX: Delivers a responsive experience with mobile-friendly, touch-optimized drag-and-drop and efficient performance via lightweight state caching and minimal network round-trips.",
			],
			techStack: [
				"React",
				"Next.js",
				"Tailwind CSS",
				"Tanstack Query",
				"Shadcn UI Library",
				"Dnd-Kit",
				"Framer",
				"Supabase (realtime)",
				"React Hook Form",
				"Zod (form validation)",
				"Zustand",
			],
			languagesUsed: ["JavaScript", "HTML/CSS", "TypeScript", "SQL"],
		},
		{
			title: "Right-Expense, Personal Finance Tracker",
			github: "https://github.com/sagarp96/Right-Expense",
			app: "https://rightexpense.netlify.app/",
			description:
				"An expense tracker to log expense, categorize them, and view a visual spending insights.",
			keySolutions: [
				"Comprehensive Financial Control: Easily log, edit, and categorize all daily transactions while actively managing your overall budget.",
				"Actionable Visual Insights: Gain instant understanding of spending patterns through responsive visual reports and summaries powered by the Recharts chart library.",
				"Modern, High-Performance Stack: Ensures a fast, type-safe, and secure experience using React Query and hosted Postgres/Supabase for reliable data operations.",
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
			title: "Pdf Lens, Powered By Google Gemini.",
			github: "https://github.com/sagarp96/PdfLense",
			app: "https://pdflense.netlify.app/",
			description:
				"Citable PDF Q&A Interface: Provides a minimal, accessible chat and PDF viewer (Tailwind/React Pdf) where AI answers include citations that directly link to the referenced page in the document.",
			keySolutions: [
				"Advanced AI Processing Pipeline: Leverages a robust AI stack for document intelligence: Llama Parse for PDF parsing, Jina AI for vector embedding, and Google Gemini for RAG retrieval and chat responses.",
				"Minimal, Vector-Powered Stack: Built as a responsive Single Page Application (Context API) backed by a Supabase/pgvector database for efficient vector storage and hosted reliably on Netlify.",
			],
			techStack: [
				"React",
				"TypeScript",
				"Vite",
				"Tailwind CSS",
				"Supabase (Edge Function + Storage)",
				"Netlify",
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
			degree: "Class XII, Rainbow English School (72%)",
			school: "Rainbow English School",
			year: "2015",
			location: "New Delhi, India",
		},
		{
			degree: "B.Tech - Computer Science",
			school: "Manav Rachna International Institute of Research and Studies",
			year: "06/2016 – 06/2020",
			location: "Faridabad, India",
		},
	],
};
