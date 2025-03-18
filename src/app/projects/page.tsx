"use client"; // Mark this as a Client Component

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Get unique categories for filtering
    const categories = Array.from(new Set(projects.map((project) => project.category)));

    // Filter projects based on selected category
    const filteredProjects = selectedCategory
        ? projects.filter((project) => project.category === selectedCategory)
        : projects;

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        <motion.div
            className="max-w-7xl mx-auto p-8 mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {/* Page Title */}
                <motion.h1
                    className="text-3xl font-bold text-gray-900"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    My Projects
                </motion.h1>

                {/* Filter Dropdown */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <select
                        id="category"
                        onChange={(e) => setSelectedCategory(e.target.value || null)}
                        className="px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white shadow-sm"
                    >
                        <option value="">All Categories</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </motion.div>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        variants={itemVariants}
                        layout
                        className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                        whileHover={{
                            y: -5,
                            transition: { duration: 0.2 }
                        }}
                    >
                        {/* Project Image */}
                        <motion.div
                            className="relative w-full h-56 overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={224}
                                objectFit="cover"
                                className="rounded-t-lg w-full h-full"
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            />
                        </motion.div>

                        {/* Project Content */}
                        <div className="p-6">
                            <motion.h2
                                className="text-2xl font-bold text-gray-900"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 + index * 0.05 }}
                            >
                                {project.title}
                            </motion.h2>
                            <motion.p
                                className="mt-2 text-gray-600"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 + index * 0.05 }}
                            >
                                {project.description}
                            </motion.p>

                            {/* Technologies with improved tags */}
                            <motion.div
                                className="my-4 flex flex-wrap gap-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 + index * 0.05 }}
                            >
                                {project.technologies.map((tech, techIndex) => (
                                    <motion.span
                                        key={tech}
                                        className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + (index * 0.05) + (techIndex * 0.03) }}
                                        whileHover={{ scale: 1.1, backgroundColor: "#dbeafe" }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </motion.div>

                            {/* View Details Button */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href={`/projects/${project.id}`}
                                    className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors"
                                >
                                    View Details
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* No projects found message */}
            {filteredProjects.length === 0 && (
                <motion.div
                    className="text-center py-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <p className="text-gray-500 text-lg">No projects found in this category.</p>
                </motion.div>
            )}
        </motion.div>
    );
}