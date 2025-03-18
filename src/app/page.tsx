"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { SiReact, SiNextdotjs, SiMysql,SiGit,SiVercel,SiJavascript  } from "react-icons/si";
import { projects } from "@/lib/data";

export default function Home() {
    return (
        <section id="home" className="mb-28 max-w-[50rem] mx-auto text-center sm:mb-0 scroll-mt-[100rem] mt-30">

            {/* Hero Section */}
            <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, damping: 10 }}
                    >
                        <Image
                            src="/profile.jpg"
                            alt="Aruna portrait"
                            width="230"
                            height="230"
                            quality="95"
                            priority={true}
                            className="h-34 w-34 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>
                </div>
            </motion.div>

            <motion.h1
                className="mb-10 mt-4 px-4 text-lg font-medium !leading-[1.5] sm:text-3xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <span>Hello, I&apos;m <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Aruna Kamakshi</span>.</span> I&apos;m a passionate{" "}
                <span>Web Developer</span> specializing in{" "}
                <span>React (Next.js)</span> and modern JavaScript frameworks. I have a strong focus on creating{" "}
                <span className="italic">dynamic, user-centric web applications</span> that offer seamless user experiences and optimal performance.
            </motion.h1>

            {/* Call-to-Action Buttons */}
            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <Link
                    href="/contact"
                    className="group bg-gray-100 text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-90 hover:bg-gray-200 active:scale-105 transition"
                >
                    Contact me <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
                </Link>

                <a
                    className="group bg-gray-100 text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-90 hover:bg-gray-200 active:scale-105 transition"
                    href="/Aruna_CV.pdf"
                    download="Aruna_CV.pdf"
                >
                    Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
                </a>
            </motion.div>

            {/* Skills Section */}
            <motion.section
                className="mt-16 px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                <h2 className="text-xl font-semibold mb-6 sm:text-2xl">Skills & Expertise</h2>
                <div className="flex flex-wrap justify-center gap-6 text-4xl sm:text-5xl">
                    <motion.div whileHover={{scale: 1.2}} className="text-blue-500">
                        <SiReact title="React.js"/>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.2}} className="text-black">
                        <SiNextdotjs title="Next.js"/>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.2}} className="text-blue-500">
                        <SiMysql title="MySQL"/>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.2}} className="text-orange-500">
                        <SiGit title="Git"/>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.2}} className="text-black">
                        <SiVercel title="Vercel"/>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.2}} className="text-yellow-500">
                        <SiJavascript title="JavaScript"/>
                    </motion.div>
                </div>
            </motion.section>

            {/* Experience Section */}
            <motion.section
                className="mt-16 px-4 text-left max-w-2xl mx-auto bg-gray-900 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <h2 className="text-xl font-semibold mb-6 sm:text-2xl text-center text-white">Experience</h2>

                <div className="space-y-6">
                    <div className="p-4 bg-white shadow-md rounded-lg">
                        <h3 className="text-lg font-semibold text-black">React Developer</h3>
                        <p className="text-gray-700">Recruitly.io • 2024 - 2025</p>
                        <ul className="list-disc list-inside mt-2 text-black">
                            <li>Developed dynamic web applications with React.js and Redux.</li>
                            <li>Implemented responsive designs using Tailwind CSS.</li>
                            <li>Enhanced application performance by optimizing code and assets.</li>
                        </ul>
                    </div>
                </div>
            </motion.section>

            {/*Featured Projects*/}
            <motion.section
                className="mt-16 px-4 text-left max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                <h2 className="text-xl font-semibold mb-6 sm:text-2xl text-center">Featured Projects</h2>
                <div className="grid gap-6 sm:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="p-6 bg-white text-black shadow-md rounded-lg hover:shadow-lg transition border border-gray-200"
                        >
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            {/* Navigate to the project details page */}
                            <Link href={`/projects/${project.id}`} className="text-blue-400 mt-2 inline-block">
                                Read more →
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

        </section>
    );
}