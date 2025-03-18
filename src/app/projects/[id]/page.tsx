"use client";

import { notFound } from "next/navigation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { use } from "react";

export default function ProjectDetailPage({
                                              params,
                                          }: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);
    const project = projects.find((p) => p.id === Number(id));

    if (!project) {
        notFound();
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto p-6 mt-20 bg-white shadow-lg rounded-lg overflow-hidden"
        >
            {/* Project Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-semibold mb-4"
            >
                {project.title}
            </motion.h1>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-700 mb-4"
            >
                {project.description}
            </motion.p>

            {/* Links */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-4 mt-4"
            >
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg shadow-sm text-gray-700 hover:bg-gray-200 hover:scale-105 transition-transform"
                    >
                        <FaGithub className="text-xl text-gray-800" />
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
                        <FaExternalLinkAlt className="text-xl text-blue-600" />
                        Live Demo
                    </a>
                )}
            </motion.div>

            {/* Technologies Used */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8"
            >
                <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                            className="px-3 py-1 bg-gray-200 text-sm rounded-full"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            {/* Screenshots */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8"
            >
                <h2 className="text-xl font-semibold mb-4">Screenshots</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.screenshots.map((screenshot, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        >
                            <Image
                                src={screenshot}
                                alt={`Screenshot ${index + 1}`}
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg"
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}
