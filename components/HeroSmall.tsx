"use client";

import React from "react";
import { motion } from "framer-motion";

interface HeroSmallProps {
    title: string;
    subtitle: string;
}

const HeroSmall = ({ title, subtitle }: HeroSmallProps) => {
    return (
        <div className="relative h-[40vh] w-full bg-[#050505] flex items-center justify-center overflow-hidden border-b border-white/5">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,80,255,0.1)_0%,transparent_70%)]" />
            </div>

            <div className="relative z-10 text-center px-6 drop-shadow-2xl">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-corporate font-bold tracking-[0.3em] uppercase text-[10px] mb-3 block drop-shadow-md"
                >
                    Srikara Logistics
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4 drop-shadow-2xl"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-white/60 text-sm md:text-base max-w-xl mx-auto font-medium drop-shadow-md"
                >
                    {subtitle}
                </motion.p>
            </div>
        </div>
    );
};

export default HeroSmall;
