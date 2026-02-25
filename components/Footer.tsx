"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
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
                            className="absolute bottom-0 w-2 h-2 rounded-full border border-white/30 bg-white/5"
                            style={{
                                left: `${leftPos}%`,
                            }}
                        />
                    );
                })}
            </div>

            {/* Animated Underline */}
            <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-white/10 origin-left scale-x-100 group-hover:bg-corporate group-hover:scale-x-110 transition-all duration-500"></span>
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
        { name: "Corporate Cab Services", href: "/services" },
        { name: "Crew Management", href: "/services" },
        { name: "Buses & Coaches", href: "/services" },
        { name: "Event Logistics", href: "/services" },
        { name: "Luxury Rentals", href: "/services" },
    ];

    const socialLinks = [
        { name: "Facebook", icon: <Facebook size={20} />, href: "#" },
        { name: "Instagram", icon: <Instagram size={20} />, href: "#" },
        { name: "Twitter", icon: <Twitter size={20} />, href: "#" },
        { name: "Youtube", icon: <Youtube size={20} />, href: "#" },
    ];

    return (
        <footer className="relative z-40 bg-black text-white pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Bio */}
                    <div className="space-y-6">
                        <Link href="/" className="block">
                            <div className="relative h-12 w-48">
                                <img
                                    src="/logo.jpg"
                                    alt="Srikara Logistics"
                                    className="h-full w-full object-contain filter brightness-110"
                                />
                            </div>
                        </Link>
                        <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                            A decade of excellence in corporate mobility. We provide seamless, safe, and sophisticated logistics solutions across India's technological hubs.
                        </p>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-corporate hover:text-white transition-all active:scale-90"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/80">Navigation</h3>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/40 hover:text-corporate text-sm transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/80">Our Services</h3>
                        <ul className="space-y-4">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={service.href}
                                        className="text-white/40 hover:text-corporate text-sm transition-colors"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/80">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-white/40 text-sm">
                                <MapPin size={18} className="text-corporate shrink-0" />
                                <span>Hyderabad, Telangana, India</span>
                            </li>
                            <li className="flex gap-3 text-white/40 text-sm">
                                <Phone size={18} className="text-corporate shrink-0" />
                                <span>+91 9121111000</span>
                            </li>
                            <li className="flex gap-3 text-white/40 text-sm">
                                <Mail size={18} className="text-corporate shrink-0" />
                                <span>info@srikaralogistics.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-white/20 text-[10px] font-bold tracking-widest uppercase text-center md:text-left">
                        Srikara Logistics © {currentYear}. All Rights Reserved.
                    </div>
                    <div className="text-white/20 text-[10px] font-bold tracking-widest uppercase flex items-center">
                        Designed by <BubbleLink />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
