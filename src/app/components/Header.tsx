"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="bg-gray-100 text-black shadow-md fixed w-full z-10 px-10 py-4">
            <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-3">
                    <span className="text-3xl font-bold tracking-wide bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                        MyPortfolio
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-12">
                    {[
                        { name: "Home", path: "/" },
                        { name: "About", path: "/about" },
                        { name: "Projects", path: "/projects" },
                        { name: "Contact", path: "/contact" }
                    ].map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`text-lg  transition-all duration-300 ease-in-out ${
                                pathname === item.path
                                    ? "underline decoration-black underline-offset-4 text-xl font-bold"
                                    : "hover:text-xl hover:font-bold hover:text-black"
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-black" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-gray-200 text-black p-5 flex flex-col space-y-4 transition-all duration-300 ease-in-out">
                    {[
                        { name: "Home", path: "/" },
                        { name: "About", path: "/about" },
                        { name: "Projects", path: "/projects" },
                        { name: "Contact", path: "/contact" }
                    ].map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`transition-all duration-300 ease-in-out ${
                                pathname === item.path
                                    ? "underline decoration-black underline-offset-4 text-xl font-bold"
                                    : "hover:text-2xl hover:font-bold hover:text-indigo-600"
                            }`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}