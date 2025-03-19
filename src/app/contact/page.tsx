"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("Email sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                toast.error("Error sending email. Try again!");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const buttonVariants = {
        idle: { scale: 1 },
        hover: { scale: 1.05 },
        tap: { scale: 0.95 }
    };

    return (
        <>
            <Toaster /> {/* Add the Toaster component to render the toasts */}
            <motion.div
                className="max-w-lg mx-auto my-10 p-6 bg-white rounded-lg shadow-lg mt-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h1
                    className="text-3xl mb-6 text-center text-gray-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Contact Me
                </motion.h1>

                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        ></textarea>
                    </motion.div>

                    <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-500 text-white p-3 rounded-md font-medium transition-colors hover:bg-blue-600 disabled:bg-blue-300"
                        variants={buttonVariants}
                        initial="idle"
                        whileHover="hover"
                        whileTap="tap"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </motion.button>
                </motion.form>

                <motion.div
                    className="mt-8 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="text-xl font-semibold mb-4">Connect With Me</h2>
                    <div className="flex justify-center space-x-6 mb-4">
                        <motion.a
                            href="https://www.linkedin.com/in/aruna-kamakshi-1a70b5259/"
                            target="_blank"
                            className="text-blue-600 hover:text-blue-800 text-2xl"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaLinkedin size={24} />
                        </motion.a>
                        <motion.a
                            href="https://github.com/Kamakshi-Aruna"
                            target="_blank"
                            className="text-gray-800 hover:text-black text-2xl"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaGithub size={24} />
                        </motion.a>
                    </div>
                    <motion.p
                        className="text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        Email: arunaKamakshi@gmail.com
                    </motion.p>
                </motion.div>
            </motion.div>
        </>
    );
}