"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav
            className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-violet-600 text-white shadow-lg fixed w-full z-10 px-10 py-4">
            <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">

                <Link href="/" className="flex items-center space-x-3">
                    <span className="text-3xl font-bold tracking-wide">MyPortfolio</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-12">
                    <Link href="/" className="text-lg font-semibold hover:text-gray-200 transition duration-300">
                        Home
                    </Link>
                    <Link href="/about" className="text-lg font-semibold hover:text-gray-200 transition duration-300">
                        About
                    </Link>
                    <Link href="/projects"
                          className="text-lg font-semibold hover:text-gray-200 transition duration-300">
                        Projects
                    </Link>
                    <Link href="/contact"
                          className="text-lg font-semibold hover:text-gray-200 transition duration-300">
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28}/> : <Menu size={28}/>}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    className="md:hidden bg-gradient-to-b from-cyan-700 to-indigo-700 text-white p-5 flex flex-col space-y-4">
                    <Link href="/" className="hover:text-gray-300 transition duration-300"
                          onClick={() => setMenuOpen(false)}>
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-gray-300 transition duration-300"
                          onClick={() => setMenuOpen(false)}>
                        About
                    </Link>
                    <Link href="/projects" className="hover:text-gray-300 transition duration-300"
                          onClick={() => setMenuOpen(false)}>
                        Projects
                    </Link>
                    <Link href="/contact" className="hover:text-gray-300 transition duration-300"
                          onClick={() => setMenuOpen(false)}>
                        Contact
                    </Link>
                </div>
            )}
        </nav>

    );
}
