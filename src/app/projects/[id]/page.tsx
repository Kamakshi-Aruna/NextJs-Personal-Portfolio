import { notFound } from "next/navigation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {projects} from "@/lib/data";

export default function ProjectDetailPage({
                                              params,
                                          }: {
    params: { id: string };
}) {
    const project = projects.find((p) => p.id === Number(params.id));

    if (!project) {
        notFound();
    }

    return (
        <div className="max-w-7xl mx-auto p-6 mt-20">
            <h1 className="text-3xl  mb-6">{project.title}</h1>

            {/* Problem Statement */}
            <section className="mb-8">
                <h2 className="text-xl  mb-4">Problem Statement</h2>
                <p className="text-gray-700">{project.problemStatement}</p>
            </section>

            {/* Solution Approach */}
            <section className="mb-8">
                <h2 className="text-xl mb-4">Solution Approach</h2>
                <p className="text-gray-700">{project.solutionApproach}</p>
            </section>

            {/* Technologies Used */}
            <section className="mb-8">
                <h2 className="text-xl mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 bg-gray-200 text-sm rounded-full"
                        >
              {tech}
            </span>
                    ))}
                </div>
            </section>

            {/* Screenshots */}
            <section className="mb-8">
                <h2 className="text-xl  mb-4">Screenshots</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.screenshots.map((screenshot, index) => (
                        <img
                            key={index}
                            src={screenshot}
                            alt={`Screenshot ${index + 1}`}
                            className="w-full h-auto rounded-lg"
                        />
                    ))}
                </div>
            </section>

            {/* Links */}
            <section className="mb-8">
                <h2 className="text-xl mb-4 text-gray-800">Links</h2>

                <div className="flex flex-wrap gap-4">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg shadow-sm text-gray-700 hover:bg-gray-200 hover:scale-105 transition-transform"
                        >
                            <FaGithub className="text-xl text-gray-800"/>
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
                        </a>
                    )}
                </div>
            </section>

        </div>
    );
}