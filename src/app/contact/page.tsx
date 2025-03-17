"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, User, MessageSquare, Send, AlertCircle, Linkedin, Github, Twitter } from "lucide-react";

// Define the form schema using Zod
const contactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormInputs>({
        resolver: zodResolver(contactFormSchema),
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const onSubmit = async (data: ContactFormInputs) => {
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // API call would go here
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitStatus("success");
                reset(); // Clear form on success
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Get In Touch
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                        Have a question or want to work together? I'd love to hear from you!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                                Contact Information
                            </h2>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                                            <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h3>
                                        <a
                                            href="mailto:your.email@example.com"
                                            className="text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            your.email@example.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                                            <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</h3>
                                        <a
                                            href="tel:+11234567890"
                                            className="text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            +1 (123) 456-7890
                                        </a>
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200 mb-4">Connect with me</h3>
                                    <div className="flex space-x-4">
                                        <a
                                            href="https://linkedin.com/in/yourusername"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                                            aria-label="LinkedIn"
                                        >
                                            <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                                        </a>
                                        <a
                                            href="https://github.com/yourusername"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                                            aria-label="GitHub"
                                        >
                                            <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                                        </a>
                                        <a
                                            href="https://twitter.com/yourusername"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                                            aria-label="Twitter"
                                        >
                                            <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Location map or image */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 overflow-hidden">
                            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Map placeholder</p>
                                {/* Replace with actual map or image */}
                                {/* <img src="/images/map.jpg" alt="Location map" className="w-full h-full object-cover" /> */}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                                Send a Message
                            </h2>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 gap-6">
                                    {/* Name field */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Name
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <User className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                id="name"
                                                type="text"
                                                placeholder="Your name"
                                                {...register("name")}
                                                className="pl-10 block w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white"
                                            />
                                        </div>
                                        {errors.name && (
                                            <p className="mt-1 flex items-center text-red-500 text-sm">
                                                <AlertCircle className="w-4 h-4 mr-1" />
                                                {errors.name.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Email field */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Email
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Mail className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="your.email@example.com"
                                                {...register("email")}
                                                className="pl-10 block w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white"
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="mt-1 flex items-center text-red-500 text-sm">
                                                <AlertCircle className="w-4 h-4 mr-1" />
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Message field */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Message
                                        </label>
                                        <div className="relative">
                                            <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                                                <MessageSquare className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <textarea
                                                id="message"
                                                placeholder="Your message"
                                                {...register("message")}
                                                rows={6}
                                                className="pl-10 block w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white"
                                            />
                                        </div>
                                        {errors.message && (
                                            <p className="mt-1 flex items-center text-red-500 text-sm">
                                                <AlertCircle className="w-4 h-4 mr-1" />
                                                {errors.message.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit button */}
                                    <div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full flex justify-center items-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                                    <span>Sending...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    <span>Send Message</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Status messages */}
                                {submitStatus === "success" && (
                                    <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 rounded-lg mt-4">
                                        Message sent successfully! I'll get back to you soon.
                                    </div>
                                )}

                                {submitStatus === "error" && (
                                    <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg mt-4">
                                        Failed to send message. Please try again or email me directly.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}