"use client";

import {useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Menu, X} from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="bg-gray-100 text-black shadow-md fixed w-full z-10 px-10 py-4">
            <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-3">
                    <span className="text-3xl font-bold tracking-wide bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">MyPortfolio</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-12">
                    <Link href="/"
                          className={`text-lg font-semibold transition duration-300 ${pathname === "/" ? "underline decoration-black underline-offset-4 text-xl font-bold"
                              : "hover:text-2xl hover:font-bold"}`}>
                        Home
                    </Link>

                    <Link href="/about"
                          className={`text-lg font-semibold transition duration-300 ${pathname === "/about" ? "underline decoration-black underline-offset-4 text-xl font-bold"
                              : "hover:text-2xl hover:font-bold"}`}>
                        About
                    </Link>
                    <Link href="/projects"
                          className={`text-lg font-semibold transition duration-300 ${pathname === "/projects" ? "underline decoration-black underline-offset-4 text-xl font-bold"
                              : "hover:text-2xl hover:font-bold"}`}>
                        Projects
                    </Link>
                    <Link href="/contact"
                          className={`text-lg font-semibold transition duration-300 ${pathname === "/contact" ? "underline decoration-black underline-offset-4 text-xl font-bold"
                              : "hover:text-2xl hover:font-bold"}`}>
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-black" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28}/> : <Menu size={28}/>}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    className="md:hidden  from-cyan-700 to-indigo-700 text-black p-5 flex flex-col space-y-4">
                    <Link href="/"
                          className={`transition duration-300 ${pathname === "/" ? "underline decoration-black underline-offset-4 text-xl font-bold"
                              : "hover:text-2xl hover:font-bold"}`}
                          onClick={() => setMenuOpen(false)}>
                        Home
                    </Link>
                    <Link href="/about"
                          className={`transition duration-300 ${pathname === "/about" ? "underline decoration-black underline-offset-4 text-xl font-bold"
                              : "hover:text-2xl hover:font-bold"}`}
                          onClick={() => setMenuOpen(false)}>
                        About
                    </Link>
                    <Link href="/projects"
                          className={`transition duration-300 ${pathname === "/projects" ? "underline decoration-black underline-offset-4 text-xl font-bold"
                              : "hover:text-2xl hover:font-bold"}`}
                          onClick={() => setMenuOpen(false)}>
                        Projects
                    </Link>
                    <Link href="/contact"
                          className={`transition duration-300 ${pathname === "/contact" ? "underline decoration-black underline-offset-4 text-xl font-bold"
                              : "hover:text-2xl hover:font-bold"}`}
                          onClick={() => setMenuOpen(false)}>
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}
