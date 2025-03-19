"use client";

import {notFound} from "next/navigation";
import {FaGithub, FaExternalLinkAlt} from "react-icons/fa";
import {projects} from "@/lib/data";
import Image from "next/image";
import {motion} from "framer-motion";
import {use, useState} from "react";

export default function ProjectDetailPage({
                                              params,
                                          }: {
    params: Promise<{ id: string }>;
}) {
    const {id} = use(params);
    const project = projects.find((p) => p.id === Number(id));

    if (!project) {
        notFound();
    }

    // State to manage the displayed image
    const [displayedImage, setDisplayedImage] = useState(project.screenshots[0]);

    // Animation variants
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 30},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <div className="min-h-screen mt-10">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">

                    {/* Left Column - Text Content */}
                    <motion.div
                        className="w-full lg:w-5/12 mb-12 lg:mb-0"
                        initial={{opacity: 0, x: -20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.6}}
                    >
                        <motion.h1
                            className="text-3xl sm:text-3xl text-gray-900 mb-6"
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.2}}
                        >
                            {project.title}
                        </motion.h1>

                        <motion.p
                            className="text-lg text-gray-600 mb-6"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.5, delay: 0.3}}
                        >
                            {project.description}
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div className="flex items-start" variants={itemVariants}>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">Problem Statement</h3>
                                    <p className="mt-2 text-gray-600">{project.problemStatement}</p>
                                </div>
                            </motion.div>

                            <motion.div className="flex items-start" variants={itemVariants}>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">Solution Approach</h3>
                                    <p className="mt-2 text-gray-600">{project.solutionApproach}</p>
                                </div>
                            </motion.div>

                            <motion.div className="flex items-start" variants={itemVariants}>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.technologies.map((tech) => (
                                            <motion.span
                                                key={tech}
                                                initial={{opacity: 0, scale: 0.5}}
                                                animate={{opacity: 1, scale: 1}}
                                                transition={{duration: 0.4, delay: 0.6}}
                                                className="px-3 py-1 bg-gray-200 text-sm rounded-full"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Links */}
                        <motion.div
                            className="flex gap-4 mt-6"
                            initial={{opacity: 0, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.5, delay: 0.4}}
                        >
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg shadow-sm text-gray-700 hover:bg-gray-200 hover:scale-105 transition-transform"
                                >
                                    <FaGithub className="text-xl text-gray-800"/>
                                    GitHub
                                </a>
                            )}
                            {project.liveDemoUrl && (
                                <a
                                    href={project.liveDemoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-lg shadow-sm text-blue-700 hover:bg-blue-200 hover:scale-105 transition-transform"
                                >
                                    <FaExternalLinkAlt className="text-xl text-blue-600"/>
                                    Live Demo
                                </a>
                            )}
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Image Preview */}
                    <motion.div
                        className="w-full lg:w-6/12"
                        initial={{opacity: 0, scale: 0.95}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.6, delay: 0.3}}
                    >
                        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                            {/* Image Header */}
                            <div className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="text-center font-medium">{project.title}</div>
                                <div className="w-16"></div>
                            </div>

                            {/* Image Preview */}
                            <div className="p-6">
                                <div className="relative p-4">
                                    <div className="flex justify-center">
                                        <div
                                            className="w-[900px] h-[320px] rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-200 transform hover:-translate-y-1">
                                            <Image
                                                src={displayedImage}
                                                alt="Project Screenshot"
                                                width={900}
                                                height={350}
                                                className="w-full h-[320px] rounded-lg transition-all duration-500 ease-in-out scale-100"
                                                onMouseEnter={() => setDisplayedImage(project.screenshots[1])}
                                                onMouseLeave={() => setDisplayedImage(project.screenshots[0])}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
