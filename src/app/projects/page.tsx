"use client"; // Mark this as a Client Component

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Get unique categories for filtering
    const categories = Array.from(new Set(projects.map((project) => project.category)));

    // Filter projects based on selected category
    const filteredProjects = selectedCategory
        ? projects.filter((project) => project.category === selectedCategory)
        : projects;

    return (
        <div className="max-w-7xl mx-auto p-8">
            {/* Page Title */}
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">My Projects</h1>

            {/* Filter Dropdown */}
            <div className="flex justify-center mb-8">
                <select
                    id="category"
                    onChange={(e) => setSelectedCategory(e.target.value || null)}
                    className="px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
                    >
                        {/* Project Image */}
                        <div className="relative w-full h-56">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={400} // Set width in pixels
                                height={224} // Set height in pixels (adjust as needed)
                                objectFit="cover"
                                className="rounded-t-lg w-full h-full"
                            />
                        </div>


                        {/* Project Content */}
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-gray-900">{project.title}</h2>
                            <p className="mt-2 text-gray-600">{project.description}</p>

                            {/* Technologies */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* View Details Button */}
                            <Link
                                href={`/projects/${project.id}`}
                                className="mt-6 inline-block px-4 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
