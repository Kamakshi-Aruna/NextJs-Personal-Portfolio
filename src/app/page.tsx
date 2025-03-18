"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
// import { FaGithubSquare } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTailwindcss, SiMongodb, SiJavascript } from "react-icons/si";
import {projects} from "@/lib/data";

export default function Home() {
    return (
        <section id="home" className="mb-28 max-w-[50rem] mx-auto text-center sm:mb-0 scroll-mt-[100rem] mt-30">

            {/* Hero Section */}
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{type: "tween", duration: 0.2}}
                    >
                        <Image
                            src="/profile.jpg"
                            alt="Aruna portrait"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>

                    <motion.span
                        className="absolute bottom-0 right-0 text-4xl"
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{type: "spring", stiffness: 125, delay: 0.1, duration: 0.7}}
                    >
                        👋
                    </motion.span>
                </div>
            </div>

            <motion.h1
                className="mb-10 mt-4 px-4 text-lg font-medium !leading-[1.5] sm:text-3xl"
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
            >
                <span>Hello, I'm Aruna.</span> I'm a{" "}
                <span>React developer</span> with{" "}
                <span></span> of experience 4 months. I enjoy
                building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">React (Next.js)</span>.
            </motion.h1>

            {/* Call-to-Action Buttons */}
            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.1}}
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

                {/*<a*/}
                {/*    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"*/}
                {/*    href="https://linkedin.com"*/}
                {/*    target="_blank"*/}
                {/*>*/}
                {/*    <BsLinkedin/>*/}
                {/*</a>*/}

                {/*<a*/}
                {/*    className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"*/}
                {/*    href="https://github.com"*/}
                {/*    target="_blank"*/}
                {/*>*/}
                {/*    <FaGithubSquare/>*/}
                {/*</a>*/}
            </motion.div>

            {/* Skills Section */}
            <motion.section
                className="mt-16 px-4"
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.2}}
            >
                <h2 className="text-xl font-semibold mb-6 sm:text-2xl">Skills & Expertise</h2>
                <div className="flex flex-wrap justify-center gap-6 text-4xl sm:text-5xl">
                    <motion.div whileHover={{scale: 1.2}} className="text-blue-500">
                        <SiReact title="React.js"/>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.2}} className="text-black">
                        <SiNextdotjs title="Next.js"/>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.2}} className="text-blue-400">
                        <SiTailwindcss title="Tailwind CSS"/>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.2}} className="text-green-500">
                        <SiMongodb title="MongoDB"/>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.2}} className="text-yellow-500">
                        <SiJavascript title="JavaScript"/>
                    </motion.div>
                </div>
            </motion.section>

            {/* Experience Section */}
            <motion.section
                className="mt-16 px-4 text-left max-w-2xl mx-auto bg-gray-900 p-6 rounded-lg"
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.3}}
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
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.2}}
            >
                <h2 className="text-xl font-semibold mb-6 sm:text-2xl text-center">Featured Projects</h2>
                <div className="grid gap-6 sm:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{scale: 1.05}}
                            className="p-6 bg-white text-black shadow-md rounded-lg hover:shadow-lg transition border border-gray-200"

                        >
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <p className="text-black">{project.description}</p>
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
