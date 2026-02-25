"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Overview", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-4",
                isScrolled || isMobileMenuOpen
                    ? "bg-white/90 backdrop-blur-2xl border-b border-black/10 py-3 shadow-sm"
                    : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left: Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 group z-[60]"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <div className="relative h-10 w-40 overflow-hidden">
                        <img
                            src="/logo.jpg"
                            alt="Srikara Logistics"
                            className="h-full w-full object-contain"
                        />
                    </div>
                </Link>

                {/* Center: Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-black/60 hover:text-black text-sm font-medium transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-corporate transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Right: CTA & Mobile Toggle */}
                <div className="flex items-center gap-4 z-[60]">
                    <Link
                        href="/contact"
                        className="hidden sm:block bg-corporate text-white px-5 py-2 rounded-full text-xs font-bold tracking-tight hover:bg-corporate/80 transition-all active:scale-95"
                    >
                        Request Proposal
                    </Link>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-black/80 hover:text-black md:hidden transition-all active:scale-90"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-3xl border-b border-black/10 shadow-lg overflow-hidden md:hidden pt-4 pb-12 px-8 flex flex-col gap-6"
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-bold tracking-tighter text-black/80 hover:text-corporate transition-all"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-4 pt-8 border-t border-black/10"
                        >
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full bg-corporate text-white py-4 rounded-xl font-bold text-sm tracking-tight hover:bg-corporate/80 transition-all flex items-center justify-center gap-2"
                            >
                                Request Corporate Proposal
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
