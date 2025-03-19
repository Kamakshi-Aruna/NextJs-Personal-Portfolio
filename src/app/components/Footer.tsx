"use client"

import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 to-gray-100 text-gray-700 py-10 mt-10 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    {/* Logo/Brand */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                            Aruna Kamakshi
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">React Developer</p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 md:mb-0">
                        <Link href="/" className="text-sm hover:text-indigo-600 transition-colors">
                            Home
                        </Link>
                        <Link href="/about" className="text-sm hover:text-indigo-600 transition-colors">
                            About
                        </Link>
                        <Link href="/projects" className="text-sm hover:text-indigo-600 transition-colors">
                            Projects
                        </Link>
                        <Link href="/contact" className="text-sm hover:text-indigo-600 transition-colors">
                            Contact
                        </Link>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-6"></div>

                {/* Bottom Section */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                    {/* Copyright */}
                    <p className="text-sm text-gray-500 mt-6 md:mt-0">
                        &copy; {currentYear} Aruna Kamakshi. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex space-x-5">
                        <motion.a
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.2 }}
                            href="https://github.com/Kamakshi-Aruna"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-black transition-colors"
                        >
                            <FaGithub size={20} />
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.2 }}
                            href="https://x.com/ArunaSubra26201"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-500 transition-colors"
                        >
                            <FaTwitter size={20} />
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.2 }}
                            href="https://www.linkedin.com/in/aruna-kamakshi-1a70b5259/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            <FaLinkedin size={20} />
                        </motion.a>
                    </div>
                </div>
            </div>
        </footer>
    );
}