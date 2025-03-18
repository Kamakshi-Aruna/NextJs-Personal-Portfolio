'use client';

import { useState } from 'react';
import { Download } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { professionalExperience, skills, education, certifications, resume } from '@/lib/data';

export default function Page() {
    const [activeTab, setActiveTab] = useState<'professional' | 'education'>('professional');

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 mt-20">
            <h1 className="text-3xl mb-8 text-gray-800">About Me</h1>

            {/* Tab Navigation */}
            <div className="flex mb-8 border-b">
                <button
                    onClick={() => setActiveTab('professional')}
                    className={`px-4 py-2 font-medium ${
                        activeTab === 'professional'
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    Professional Background
                </button>
                <button
                    onClick={() => setActiveTab('education')}
                    className={`px-4 py-2 font-medium ${
                        activeTab === 'education'
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    Education & Certifications
                </button>
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
                {activeTab === 'professional' && (
                    <motion.div
                        key="professional"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        {/* Professional Experience */}
                        <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-semibold mb-4">{professionalExperience.title}</h2>
                            {professionalExperience.jobs.map((job, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-medium">{job.position}</h3>
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

                        {/* Skills */}
                        <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-semibold mb-4">{skills.title}</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {skills.categories.map((category, i) => (
                                    <div key={i}>
                                        <h3 className="font-medium mb-2">{category.name}</h3>
                                        <p className="text-gray-700">{category.items.join(', ')}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}

                {activeTab === 'education' && (
                    <motion.div
                        key="education"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        {/* Education */}
                        <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-semibold mb-4">{education.title}</h2>
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-medium">{education.degree}</h3>
                                    <span className="text-gray-500">{education.duration}</span>
                                </div>
                                <p className="text-gray-600">{education.university}</p>
                                <p className="text-gray-700 mt-2">{education.description}</p>
                            </div>
                        </motion.div>

                        {/* Certifications */}
                        <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-semibold mb-4">{certifications.title}</h2>
                            <div className="space-y-4">
                                {certifications.list.map((cert, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-xl font-medium">{cert.name}</h3>
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
            <motion.div whileHover={{ scale: 1.02 }} className="mt-10 bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">{resume.title}</h2>
                        <p className="text-gray-600">{resume.description}</p>
                    </div>
                    <Link href={resume.filePath} className="bg-blue-600 text-white py-2 px-4 rounded-md flex items-center hover:bg-blue-700 transition-colors" target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 mr-2" />
                        Download CV
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
