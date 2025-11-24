export interface Project {
	title: string;
	year: number;
	TechStackused: string[];
	description1: string;
	description2: string;
	url: string;
}

export const projects: Project[] = [
	{
		title: "Parcel-pal",
		year: 2025,
		TechStackused: [
			"React",
			"Next.Js",
			"Tailwind CSS",
			"TypeScript",
			"SuperBase",
		],
		description1: "A parcel send and track app ",
		description2: "Send parcels easily and track them",
		url: "https://github.com/sagarp96/ParcelPal?tab=readme-ov-file",
	},
	{
		title: "Draggie",
		year: 2025,
		TechStackused: ["React", "Next.js", "Tailwind CSS", "Socket.io"],
		description1: "A collabrative drag and drop ",
		description2: "kanban style task manager.",
		url: "https://github.com/sagarp96/Draggie",
	},
	{
		title: "Pdf Lense - Powered By Google Gemini",
		year: 2025,
		TechStackused: ["React", "Vite", "Tailwind CSS", "TypeScript", "SuperBase"],
		description1: "A minimal NotebookLM-style app",
		description2: "Google Notebook Clone",
		url: "https://github.com/sagarp96/PdfLense",
	},
	{
		title: "Right-Expense",
		year: 2025,
		TechStackused: [
			"React",
			"Vite",
			"Tailwind CSS",
			"TypeScript",
			"SuperBase",
			"React Query",
		],
		description1: "An expense tracking app ",
		description2: "with reports and insights.",
		url: "https://github.com/sagarp96/Right-Expense",
	},
];
