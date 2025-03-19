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

export interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Next.js Dashboard",
        description: "A modern and responsive dashboard built with Next.js, featuring real-time data visualization and user-friendly components.",
        technologies: ["Next.js", "Tailwind CSS", "Chart.js"],
        image: "/nextjs-dashboard.png",
        category: "Frontend Development",
        screenshots: ["/nextjs-dashboard.png"],
        problemStatement: "Managing and visualizing data efficiently can be challenging without an interactive dashboard.",
        solutionApproach: "Developed a dynamic dashboard using Next.js with reusable UI components and integrated charts for real-time data representation.",
        githubUrl: "https://github.com/Kamakshi-Aruna/nextjs-dashboard",
        liveDemoUrl: "https://nextjs-dashboard-blond-eight-58.vercel.app/",
    },
    {
        id: 2,
        title: "Student Management",
        description: "A full-stack student management application for efficiently handling student records, grades, and performance tracking.",
        technologies: ["Next.js", "MongoDB", "Node.js"],
        image: "/StudentManagement-Table.png",
        category: "Web Development",
        problemStatement: "Educational institutions need an efficient system to manage student data, track performance, and generate reports.",
        solutionApproach: "Built a CRUD-based student management system with MongoDB as the database, allowing administrators to manage students effortlessly.",
        screenshots: ["/StudentManagement-Table.png", "/StudentManagement-BarChart.png"],
        githubUrl: "https://github.com/Kamakshi-Aruna/NextJs-Student-Management",
    },
    {
        id: 3,
        title: "E-Commerce",
        description: "An interactive and scalable e-commerce platform for browsing, filtering, and purchasing products securely.",
        technologies: ["React", "Redux", "Firebase", "Stripe"],
        image: "/e-commerce.png",
        category: "Full-Stack Development",
        problemStatement: "Many small businesses lack an online platform to showcase and sell their products efficiently.",
        solutionApproach: "Developed a feature-rich e-commerce platform with secure authentication, real-time inventory updates, and a smooth checkout experience using Stripe.",
        screenshots: ["/e-commerce.png", "/e-commerce-1.png"],
        githubUrl: "https://github.com/Kamakshi-Aruna/E-Commerce-Application-Final",
        liveDemoUrl: "https://aruna11-e-commerce-application.netlify.app/",
    },
];

export const skills = {
    title: "Skills",
    categories: [
        {
            name: "Programming Languages",
            items: [
                { name: "JavaScript", percentage: 85 },
                { name: "SQL", percentage: 75 }
            ]
        },
        {
            name: "Frameworks & Libraries",
            items: [
                { name: "React", percentage: 90 },
                { name: "Next.js", percentage: 85 }
            ]
        },
        {
            name: "Tools & Platforms",
            items: [
                { name: "Git", percentage: 80 },
                { name: "Vercel", percentage: 60 },
            ]
        },
        {
            name: "Other Skills",
            items: [{ name: "UI/UX Design", percentage: 50 }]
        }
    ]
};


export const education = {
    title: "Education",
    degree: "Bachelor of Science in Computer Science",
    university: "SV University",
    duration: "2021 - 2023",
    description: "Core coursework included algorithms, data structures, database systems, and web development. Minor in Mathematics."
};

export const certifications = {
    title: "Certifications",
    list: [
        { name: "Java Certified Developer", provider: "Jspiders", year: "2023" },
        { name: "MongoDB Certified Developer", provider: "Jspiders", year: "2023" }
    ]
};

export const resume = {
    title: "Download My Resume",
    description: "Get a complete overview of my experience and qualifications",
    filePath: "/Aruna_CV.pdf"
};

export const experienceData: ExperienceItem[] = [
    {
        title: "React Developer",
        company: "Recruitly.io",
        period: "2024 - 2025",
        responsibilities: [
            "Developed dynamic web applications with React.js and Redux.",
            "Implemented responsive designs using Tailwind CSS.",
            "Enhanced application performance by optimizing code and assets."
        ]
    }
];
