"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter as XLogo, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BubbleLink = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const bubbles = Array.from({ length: 12 });

    return (
        <a
            href="https://thebubblesmedia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block group ml-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="relative z-10 transition-all duration-300 group-hover:text-white group-hover:tracking-wider">The Bubbles Media</span>

            {/* Bubbles Container */}
            <div className="absolute inset-x-0 -top-20 bottom-0 pointer-events-none">
                {isMounted && isHovered && bubbles.map((_, i) => {
                    // Use deterministic "random" values based on index to avoid hydration mismatch
                    const leftPos = 10 + (i * 137) % 80;
                    const xDrift = (i % 2 === 0 ? 1 : -1) * (20 + (i * 31) % 40);
                    const delay = i * 0.1;
                    const duration = 2 + (i % 5) * 0.2;

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20, x: 0, scale: 0 }}
                            animate={{
                                opacity: [0, 1, 0.8, 0],
                                y: [20, -20, -50, -100],
                                x: [0, xDrift * 0.5, xDrift, xDrift * 1.2],
                                scale: [0, 1, 1.2, 0.5]
                            }}
                            transition={{
                                duration: duration,
                                repeat: Infinity,
                                delay: delay,
                                ease: "easeOut"
                            }}
                            className="absolute bottom-0 w-2 h-2 rounded-full border border-white/20 bg-white/10"
                            style={{
                                left: `${leftPos}%`,
                            }}
                        />
                    );
                })}
            </div>

            {/* Animated Underline */}
            <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-white/10 origin-left scale-x-100 group-hover:bg-white group-hover:scale-x-110 transition-all duration-500"></span>
        </a>
    );
};

const Footer = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const currentYear = mounted ? new Date().getFullYear() : 2026;

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    const services = [
        { name: "Employee Transportation", href: "/services" },
        { name: "Car Rental", href: "/services" },
        { name: "Tour & Travels", href: "/services" },
        { name: "Corporate Logistics", href: "/services" },
        { name: "Executive Mobility", href: "/services" },
    ];

    const socialLinks = [
        {
            name: "Facebook",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
            ),
            href: "#"
        },
        {
            name: "Instagram",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
            ),
            href: "#"
        },
        {
            name: "X",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 1200 1227">
                    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.391L658.88 583.285L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                </svg>
            ),
            href: "#"
        },
        {
            name: "Youtube",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2z" />
                    <path d="m10 15 5-3-5-3z" />
                </svg>
            ),
            href: "#"
        },
    ];

    return (
        <footer className="relative z-40 bg-[#f0f2f5] text-black pt-20 border-t border-black/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Bio */}
                    <div className="space-y-6">
                        <Link href="/" className="block">
                            <div className="relative h-12 w-48">
                                <img
                                    src="/assets/logo.png"
                                    alt="Srikara Logistics"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-black/50 text-sm leading-relaxed max-w-xs">
                            A decade of excellence in corporate mobility. We provide seamless, safe, and sophisticated logistics solutions across India's technological hubs.
                        </p>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center text-black/40 hover:bg-corporate hover:text-white hover:border-corporate transition-all active:scale-95 group"
                                    aria-label={social.name}
                                >
                                    <div className="group-hover:scale-110 transition-transform">
                                        {social.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Middle Section: Links Grid */}
                    <div className="lg:col-span-2 grid grid-cols-2 gap-8 lg:contents">
                        {/* Quick Links */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-black/70">Navigation</h3>
                            <ul className="space-y-4">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-black/50 hover:text-corporate text-sm transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-black/70">Our Services</h3>
                            <ul className="space-y-4">
                                {services.map((service) => (
                                    <li key={service.name}>
                                        <Link
                                            href={service.href}
                                            className="text-black/50 hover:text-corporate text-sm transition-colors"
                                        >
                                            {service.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-black/70">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-black/50 text-sm">
                                <MapPin size={18} className="text-corporate shrink-0" />
                                <span className="max-w-[200px] leading-relaxed">
                                    Plot no 112, TNGOS Colony, <br />
                                    My Home Vihanga Road, <br />
                                    Behind Q-city, Nankramguda.
                                </span>
                            </li>
                            <li className="flex gap-3 text-black/50 text-sm">
                                <Phone size={18} className="text-corporate shrink-0" />
                                <span>+91 88979 25656</span>
                            </li>
                            <li className="flex gap-3 text-black/50 text-sm">
                                <Mail size={18} className="text-corporate shrink-0" />
                                <span>info@srikaralogistics.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-corporate py-8">
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-white/60 text-[10px] font-bold tracking-widest uppercase text-center md:text-left selection:bg-white selection:text-corporate">
                        Srikara Logistics © {currentYear}. All Rights Reserved.
                    </div>
                    <div className="text-white/60 text-[10px] font-bold tracking-widest uppercase flex items-center selection:bg-white selection:text-corporate">
                        Designed by <BubbleLink />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
