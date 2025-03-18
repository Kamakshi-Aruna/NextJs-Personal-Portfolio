import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-100 text-black dark:text-black py-6 mt-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

                {/* Copyright Text */}
                <p className="text-sm">&copy; {new Date().getFullYear()} Aruna Kamakshi. All rights reserved.</p>

                {/* Social Links */}
                <div className="flex space-x-4 mt-3 md:mt-0">
                    <Link href="https://github.com/Kamakshi-Aruna" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-xl hover:text-gray-500 transition" />
                    </Link>
                    <Link href="https://x.com/ArunaSubra26201" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-xl hover:text-blue-500 transition" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/aruna-kamakshi-1a70b5259/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-xl hover:text-blue-600 transition" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
