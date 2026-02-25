"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

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
                                <span>+91 99999 99999</span>
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
                    <div className="text-white/20 text-[10px] font-bold tracking-widest uppercase">
                        Srikara Logistics © {currentYear}. All Rights Reserved.
                    </div>
                    <div className="flex items-center gap-8 text-white/20 text-[10px] font-bold tracking-widest uppercase">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
