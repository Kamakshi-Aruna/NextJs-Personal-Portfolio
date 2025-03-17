"use client"; // Mark this as a Client Component

import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {projects} from "@/lib/data";

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Get unique categories for filtering
    const categories = Array.from(new Set(projects.map((project) => project.category)));

    // Filter projects based on selected category
    const filteredProjects = selectedCategory
        ? projects.filter((project) => project.category === selectedCategory)
        : projects;

    return (
        <div className="max-w-7xl mx-auto p-8 mt-20">

            <div className="flex justify-between items-center mb-8">
                {/* Page Title */}
                <h1 className="text-3xl text-gray-900">My Projects</h1>

                {/* Filter Dropdown */}
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
                                width={400}
                                height={224}
                                objectFit="cover"
                                className="rounded-t-lg w-full h-full"
                            />
                        </div>


                        {/* Project Content */}
                        <div className="p-6">
                            <h2 className="text-2xl text-gray-900">{project.title}</h2>
                            <p className="mt-2 text-gray-500">{project.description}</p>

                            {/* Technologies with improved tags */}
                            <div className="mb-4 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 mt-2 bg-gray-100 text-gray-800 text-xs font-medium rounded-full"
                                    >{tech}
                                    </span>
                                ))}
                            </div>

                            {/* View Details Button */}
                            <Link
                                href={`/projects/${project.id}`}
                                className="mt-2 inline-block px-4 text-blue-400 text-lg font-medium hover:scale-105 hover:underline"
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
