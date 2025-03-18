"use client";

import {useState} from "react";
import {Download} from "lucide-react";
import Link from "next/link";
import {motion, AnimatePresence} from "framer-motion";
import {
    professionalExperience,
    skills,
    education,
    certifications,
    resume,
} from "@/lib/data";

export default function Page() {
    const [activeTab, setActiveTab] = useState<"professional" | "education">(
        "professional"
    );

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 mt-20">
            <h1 className="text-3xl mb-8 text-gray-800">About Me</h1>

            {/* Tab Navigation */}
            <div className="flex mb-8 border-b">
                {["professional", "education"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab as "professional" | "education")}
                        className={`px-4 py-2 font-medium ${
                            activeTab === tab
                                ? "text-blue-600 border-b-2 border-blue-600"
                                : "text-gray-500 hover:text-gray-700"
                        }`}
                    >
                        {tab === "professional"
                            ? "Professional Background"
                            : "Education & Certifications"}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
                {activeTab === "professional" && (
                    <motion.div
                        key="professional"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        transition={{duration: 0.3}}
                        className="space-y-6"
                    >
                        {/* Professional Experience */}
                        <motion.div
                            whileHover={{scale: 1.02}}
                            className="bg-white rounded-lg shadow-md p-6"
                        >
                            <h2 className="text-2xl mb-4">
                                {professionalExperience.title}
                            </h2>
                            {professionalExperience.jobs.map((job, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl">{job.position}</h3>
                                        <span className="text-gray-500">{job.duration}</span>
                                    </div>
                                    <p className="text-gray-600 mb-2">{job.company}</p>
                                    <ul className="list-disc pl-5 text-gray-700">
                                        {job.responsibilities.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </motion.div>

                        {/* Skills with Progress Bars */}
                        <motion.div
                            whileHover={{scale: 1.02}}
                            className="bg-white rounded-lg shadow-md p-6"
                        >
                            <h2 className="text-2xl mb-4">{skills.title}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {skills.categories.map((category, i) => (
                                    <div key={i} className="bg-white p-5 rounded-lg shadow-sm">
                                        <h3 className="text-xl mb-4">{category.name}</h3>
                                        {category.items.map((skill, j) => (
                                            <div key={j} className="mb-4">
                                                <div className="flex justify-between items-center mb-1">
                                                    <p className="text-gray-700">{skill.name}</p>
                                                    <span className="text-sm text-gray-500">{skill.percentage}%</span>
                                                </div>
                                                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                                                    <motion.div
                                                        initial={{width: "0%"}}
                                                        animate={{width: `${skill.percentage}%`}}
                                                        transition={{duration: 1, ease: "easeOut"}}
                                                        className={`h-2.5 rounded-full ${
                                                            skill.percentage > 80 ? "bg-blue-600" :
                                                                skill.percentage > 60 ? "bg-blue-500" :
                                                                    skill.percentage > 40 ? "bg-blue-400" : "bg-blue-300"
                                                        }`}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}

                {activeTab === "education" && (
                    <motion.div
                        key="education"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        transition={{duration: 0.3}}
                        className="space-y-6"
                    >
                        {/* Education */}
                        <motion.div
                            whileHover={{scale: 1.02}}
                            className="bg-white rounded-lg shadow-md p-6"
                        >
                            <h2 className="text-2xl mb-4">{education.title}</h2>
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl">{education.degree}</h3>
                                    <span className="text-gray-500">{education.duration}</span>
                                </div>
                                <p className="text-gray-600">{education.university}</p>
                                <p className="text-gray-700 mt-2">{education.description}</p>
                            </div>
                        </motion.div>

                        {/* Certifications */}
                        <motion.div
                            whileHover={{scale: 1.02}}
                            className="bg-white rounded-lg shadow-md p-6"
                        >
                            <h2 className="text-2xl mb-4">
                                {certifications.title}
                            </h2>
                            <div className="space-y-4">
                                {certifications.list.map((cert, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-gray-900">{cert.name}</h3>
                                            <span className="text-gray-500">{cert.year}</span>
                                        </div>
                                        <p className="text-gray-600">{cert.provider}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Resume Download Section */}
            <motion.div
                whileHover={{scale: 1.02}}
                className="mt-10 bg-gray-50 rounded-lg p-6 shadow-md"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl mb-2">{resume.title}</h2>
                        <p className="text-gray-600">{resume.description}</p>
                    </div>
                    <Link
                        href={resume.filePath}
                        className="bg-blue-600 text-white py-2 px-4 rounded-md flex items-center hover:bg-blue-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Download className="w-4 h-4 mr-2"/>
                        Download CV
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
