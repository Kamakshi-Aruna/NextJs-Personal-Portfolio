export interface Project {
    id: number;
    title: string;
    shortDescription:string;
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

export interface Education {
    title: string;
    degree: string;
    university: string;
    duration: string;
    description: string;
}

export interface Resume {
    title: string;
    description: string;
}


export const projects: Project[] = [
    {
        id: 1,
        title: "Next.js Dashboard",
        shortDescription: "A sleek dashboard with real-time data visualization.",
        description: "A modern and responsive dashboard built with Next.js, featuring real-time data visualization and user-friendly components.",
        technologies: ["Next.js", "Tailwind CSS", "Chart.js"],
        image: "/nextjs-dashboard.png",
        category: "Frontend Development",
        screenshots: ["/nextjs-dashboard.png","/nextjs-dashboard-1.png"],
        problemStatement: "Managing and visualizing data efficiently can be challenging without an interactive dashboard.",
        solutionApproach: "Developed a dynamic dashboard using Next.js with reusable UI components and integrated charts for real-time data representation.",
        githubUrl: "https://github.com/Kamakshi-Aruna/nextjs-dashboard",
        liveDemoUrl: "https://nextjs-dashboard-blond-eight-58.vercel.app/",
    },
    {
        id: 2,
        title: "Student Management",
        shortDescription: "A full-stack app for handling student records and grades.",
        description: "A full-stack student management application for efficiently handling student records, grades, and performance tracking.",
        technologies: ["Next.js", "MongoDB"],
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
        shortDescription: "A scalable e-commerce platform with secure payments.",
        description: "An interactive and scalable e-commerce platform for browsing, filtering, and purchasing products securely.",
        technologies: ["ReactJs", "Node.js"],
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
                { name: "JavaScript", percentage: 85},
                { name: "SQL", percentage: 75}
            ]
        },
        {
            name: "Frameworks & Libraries",
            items: [
                { name: "React", percentage: 90},
                { name: "Next.js", percentage: 85}
            ]
        },
        {
            name: "Tools & Platforms",
            items: [
                { name: "Git", percentage: 80},
                { name: "Vercel", percentage: 60}
            ]
        },
        {
            name: "Other Skills",
            items: [{ name: "UI/UX Design", percentage: 50, icon: null, color: "" }]
        }
    ]
};

export const education:Education= {
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

export const resume:Resume = {
    title: "Download My Resume",
    description: "Get a complete overview of my experience and qualifications",
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
