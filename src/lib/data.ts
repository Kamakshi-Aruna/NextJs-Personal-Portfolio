// data/projects.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    category: string;
}

// data/projects.ts
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
        title: "Project 3",
        description: "This is a description of Project 3.",
        technologies: ["React Native", "Expo"],
        image: "/nextjs-dashboard.png",
        category: "Mobile Development",
        problemStatement: "The problem statement for Project 3.",
        solutionApproach: "The solution approach for Project 3.",
        screenshots: ["/images/project3-screenshot1.jpg", "/images/project3-screenshot2.jpg"],
        liveDemoUrl: "https://project3-demo.com",
    },
    {
        id: 2,
        title: "Student Management",
        description: "Student Management System: This is a Next.js-based student management system that provides a user-friendly interface to view and manage student data.",
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
        title: "Project 1",
        description: "This is a description of Project 1.",
        technologies: ["React", "Next.js", "TypeScript"],
        image: "/e-commerce.png",
        category: "Web Development",
        problemStatement: "The problem statement for Project 1.",
        solutionApproach: "The solution approach for Project 1.",
        screenshots: ["/images/project1-screenshot1.jpg", "/images/project1-screenshot2.jpg"],
        githubUrl: "https://github.com/yourusername/project1",
        liveDemoUrl: "https://project1-demo.com",
    },
];

