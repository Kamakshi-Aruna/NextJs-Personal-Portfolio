'use client';

import {useState} from 'react';
import {Download} from 'lucide-react';
import Link from 'next/link';

export default function Page() {
    const [activeTab, setActiveTab] = useState<'professional' | 'education' | 'personal'>('professional');

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">About Me</h1>

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

            {/* Professional Background */}
            {activeTab === 'professional' && (
                <div className="space-y-6 animate-fadeIn">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>

                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-medium">Junior Developer</h3>
                                <span className="text-gray-500">2015 - 2017</span>
                            </div>
                            <p className="text-gray-600 mb-2">Recruitly.io</p>
                            <ul className="list-disc pl-5 text-gray-700">
                                <li>Assisted in front-end development using HTML, CSS, and JavaScript,ReactJs,Next.js</li>
                                <li>Participated in daily standup meetings and sprint planning</li>
                                <li>Fixed bugs and implemented small feature requests</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">Skills</h2>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-medium mb-2">Programming Languages</h3>
                                <p className="text-gray-700">Java, JavaScript, SQL</p>
                            </div>

                            <div>
                                <h3 className="font-medium mb-2">Frameworks & Libraries</h3>
                                <p className="text-gray-700">React, Next.js</p>
                            </div>

                            <div>
                                <h3 className="font-medium mb-2">Tools & Platforms</h3>
                                <p className="text-gray-700">Git, Docker, AWS, Vercel, GitHub Actions</p>
                            </div>

                            <div>
                                <h3 className="font-medium mb-2">Other Skills</h3>
                                <p className="text-gray-700">UI/UX Design</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Education & Certifications */}
            {activeTab === 'education' && (
                <div className="space-y-6 animate-fadeIn">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">Education</h2>

                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-medium">Bachelor of Science in Computer Science</h3>
                                <span className="text-gray-500">2009 - 2013</span>
                            </div>
                            <p className="text-gray-600">SV University</p>
                            <p className="text-gray-700 mt-2">
                                Core coursework included algorithms, data structures, database systems, and web
                                development.
                                Minor in Mathematics.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>

                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-medium">AWS Certified Solutions Architect</h3>
                                    <span className="text-gray-500">2023</span>
                                </div>
                                <p className="text-gray-600">Amazon Web Services</p>
                            </div>

                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-medium">Professional Scrum Master I (PSM I)</h3>
                                    <span className="text-gray-500">2022</span>
                                </div>
                                <p className="text-gray-600">Scrum.org</p>
                            </div>

                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-medium">MongoDB Certified Developer</h3>
                                    <span className="text-gray-500">2021</span>
                                </div>
                                <p className="text-gray-600">MongoDB Inc.</p>
                            </div>

                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-medium">React Certification</h3>
                                    <span className="text-gray-500">2020</span>
                                </div>
                                <p className="text-gray-600">Meta (formerly Facebook)</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Resume Download Section */}
            <div className="mt-10 bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Download My Resume</h2>
                        <p className="text-gray-600">Get a complete overview of my experience and qualifications</p>
                    </div>
                    <Link
                        href="/Aruna_CV.pdf"
                        className="bg-blue-600 text-white py-2 px-4 rounded-md flex items-center hover:bg-blue-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Download className="w-4 h-4 mr-2"/>
                        Download CV
                    </Link>
                </div>
            </div>
        </div>
    );
}