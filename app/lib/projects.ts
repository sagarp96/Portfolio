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
    title: "Pdf Lense - Powered By Google Gemini",
    year: 2025,
    TechStackused: ["React", "Vite", "Tailwind CSS", "TypeScript", "SuperBase"],
    description1: "A minimal NotebookLM-style app",
    description2:
      "Upload a PDF, view it, and ask questions through a chat interface",
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
  {
    title: "Draggie",
    year: 2025,
    TechStackused: ["React", "Next.js", "Tailwind CSS", "Socket.io"],
    description1: "A collabrative drag and drop ",
    description2: "kanban style task manager.",
    url: "https://github.com/sagarp96/Draggie",
  },
];
