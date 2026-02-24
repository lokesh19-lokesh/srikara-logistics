"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
                isScrolled
                    ? "bg-black/40 backdrop-blur-xl border-b border-white/10 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left: Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 group"
                >
                    <div className="relative h-10 w-40 overflow-hidden">
                        <img
                            src="/logo.jpg"
                            alt="Srikara Logistics"
                            className="h-full w-full object-contain filter brightness-110 contrast-110"
                        />
                    </div>
                </Link>

                {/* Center: Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white/60 hover:text-white text-sm font-medium transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-corporate transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Right: CTA */}
                <div className="flex items-center gap-4">
                    <Link
                        href="#"
                        className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold tracking-tight hover:bg-white/90 transition-all active:scale-95"
                    >
                        Request Corporate Proposal
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
