"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronRight, Shield, Users, Truck, Activity } from "lucide-react";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    progressRange: [number, number];
    opacityRange?: [number, number, number];
}

const Section = ({ children, className, progressRange, opacityRange = [0, 1, 0] }: SectionProps) => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress,
        [progressRange[0], (progressRange[0] + progressRange[1]) / 2, progressRange[1]],
        opacityRange
    );

    const y = useTransform(scrollYProgress,
        [progressRange[0], progressRange[1]],
        [50, -50]
    );

    return (
        <motion.div
            style={{ opacity, y }}
            className={cn("absolute inset-0 flex flex-col justify-center px-10 md:px-24 pointer-events-none", className)}
        >
            <div className="max-w-4xl pointer-events-auto filter drop-shadow-[0_10px_20px_rgba(0,0,0,1)]">
                {children}
            </div>
        </motion.div>
    );
};

const StoryOverlay = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-40">

            {/* 1. HERO INTRO (0-15%) */}
            <Section progressRange={[0, 0.15]} className="items-center text-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-corporate font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
                >
                    Established 2012
                </motion.span>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6">
                    SRIKARA <span className="text-white/20">LOGISTICS</span>
                </h1>
                <p className="text-white text-lg md:text-xl max-w-xl mx-auto font-bold leading-relaxed drop-shadow-lg">
                    Corporate mobility solutions engineered for reliability, safety, and scale at any magnitude.
                </p>
            </Section>

            {/* 2. ENGINEERING OF SERVICE (15-35%) */}
            <Section progressRange={[0.15, 0.35]} className="items-start text-left">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-[1px] bg-corporate"></div>
                    <span className="text-corporate font-bold tracking-widest uppercase text-xs">Engineering of Service</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
                    Built for reliability <br />
                    <span className="text-white/30">from the inside out.</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
                    <p className="text-white text-lg leading-relaxed font-semibold drop-shadow-md">
                        Every vehicle, driver, and route is part of a carefully engineered system designed for uninterrupted mobility.
                    </p>
                    <p className="text-white text-lg leading-relaxed font-semibold drop-shadow-md">
                        From scheduling to precision maintenance, our operations ensure your workforce moves without friction.
                    </p>
                </div>
            </Section>

            {/* 3. SAFETY & DRIVER NETWORK (35-60%) */}
            <Section progressRange={[0.35, 0.6]} className="items-end text-right ml-auto">
                <div className="flex items-center gap-3 mb-6 justify-end">
                    <span className="text-cyan font-bold tracking-widest uppercase text-xs">Uncompromising Standards</span>
                    <div className="w-12 h-[1px] bg-cyan"></div>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
                    Safety isn’t a feature. <br />
                    <span className="text-white/30">It’s our foundation.</span>
                </h2>
                <div className="flex flex-col gap-6 items-end">
                    {[
                        { icon: Shield, text: "Qualified drivers with verified credentials" },
                        { icon: Activity, text: "Continuous monitoring & compliance checks" },
                        { icon: Users, text: "Regular defensive driving programs" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-white/80 group">
                            <span className="text-sm font-medium tracking-tight group-hover:text-cyan transition-colors">{item.text}</span>
                            <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-cyan/50 transition-all">
                                <item.icon size={18} className="text-cyan" />
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 4. FLEET ECOSYSTEM (60-80%) */}
            <Section progressRange={[0.6, 0.85]} className="items-center text-center">
                <div className="flex items-center gap-3 mb-6 justify-center">
                    <div className="w-8 h-[1px] bg-white/20"></div>
                    <span className="text-white/40 font-bold tracking-widest uppercase text-xs">The Network</span>
                    <div className="w-8 h-[1px] bg-white/20"></div>
                </div>
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-10 leading-[0.85]">
                    A fleet that moves <br />
                    <span className="text-corporate">with your business.</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-12 text-white">
                    <div className="text-center">
                        <div className="text-4xl font-bold tracking-tighter mb-1">330+</div>
                        <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Premium Vehicles</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold tracking-tighter mb-1">24/7</div>
                        <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Command Center</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold tracking-tighter mb-1">100%</div>
                        <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Backup Systems</div>
                    </div>
                </div>
            </Section>

            {/* 5. FINAL REASSEMBLY + CTA (85-100%) */}
            <Section progressRange={[0.85, 1]} opacityRange={[0, 1, 1]} className="items-center text-center">
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.85]">
                    Reliable journeys. <br />
                    <span className="text-white/30">Trusted partnerships.</span>
                </h2>
                <p className="text-white text-lg md:text-xl max-w-xl mx-auto font-bold leading-relaxed mb-12 drop-shadow-md">
                    Srikara Logistics — powering corporate mobility across the technological landscape of Hyderabad.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <button className="bg-corporate text-white px-10 py-5 rounded-full text-sm font-bold tracking-tight hover:bg-corporate/80 transition-all active:scale-95 flex items-center gap-2 group pointer-events-auto">
                        Request Corporate Proposal
                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full text-sm font-bold tracking-tight hover:bg-white/10 transition-all pointer-events-auto">
                        Contact Our Team
                    </button>
                </div>
            </Section>

        </div>
    );
};

export default StoryOverlay;
