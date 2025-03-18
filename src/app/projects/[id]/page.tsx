import { notFound } from "next/navigation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/lib/data";
import Image from "next/image";

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
        <div className="max-w-4xl mx-auto p-6 mt-20 bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Project Title */}
            <h1 className="text-3xl font-semibold mb-4">{project.title}</h1>

            {/* Description */}
            <p className="text-gray-700 mb-4">{project.description}</p>

            {/* Links */}
            <div className="flex gap-4 mt-4">
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
            </div>

            {/* Technologies Used */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-gray-200 text-sm rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Screenshots */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Screenshots</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.screenshots.map((screenshot, index) => (
                        <Image
                            key={index}
                            src={screenshot}
                            alt={`Screenshot ${index + 1}`}
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-lg"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
