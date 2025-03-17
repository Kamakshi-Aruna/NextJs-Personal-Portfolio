export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    category: string;
    problemStatement: string;
    solutionApproach: string;
    screenshots: string[];
    githubUrl?: string;
    liveDemoUrl?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "NextJs-Dashboard",
        description: "This is a description of Project 1.",
        technologies: ["NextJs"],
        image: "/nextjs-dashboard.png",
        category: "Mobile Development",
        problemStatement: "The problem statement for Project 1.",
        solutionApproach: "The solution approach for Project 1.",
        screenshots: ["/nextjs-dashboard.png"],
        githubUrl: "https://github.com/Kamakshi-Aruna/nextjs-dashboard",
        liveDemoUrl: "https://nextjs-dashboard-blond-eight-58.vercel.app/",
    },
    {
        id: 2,
        title: "Student Management",
        description: "This is a description of Project 2",
        technologies: ["Next.js", "MongoDB"],
        image: "/StudentManagement-Table.png",
        category: "Backend Development",
        problemStatement: "The problem statement for Project 2.",
        solutionApproach: "The solution approach for Project 2.",
        screenshots: ["/StudentManagement-Table.png", "/StudentManagement-BarChart.png"],
        githubUrl: "https://github.com/Kamakshi-Aruna/NextJs-Student-Management",
    },
    {
        id: 3,
        title: "E-Commerce",
        description: "This is a description of Project 3.",
        technologies: ["React"],
        image: "/e-commerce.png",
        category: "Web Development",
        problemStatement: "The problem statement for Project 3.",
        solutionApproach: "The solution approach for Project 3.",
        screenshots: ["/e-commerce.png", "/e-commerce-1.png"],
        githubUrl: "https://github.com/Kamakshi-Aruna/E-Commerce-Application-Final",
        liveDemoUrl: "https://aruna11-e-commerce-application.netlify.app/",
    },
];

