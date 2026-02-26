"use client";

import React from "react";
import { motion } from "framer-motion";

interface HeroSmallProps {
    title: string;
    subtitle: string;
}

const HeroSmall = ({ title, subtitle }: HeroSmallProps) => {
    return (
        <div className="relative min-h-[350px] h-[40vh] md:h-[45vh] w-full bg-[#f0f2f5] flex items-center justify-center overflow-hidden border-b border-black/10 pt-24 md:pt-32 pb-12">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,80,255,0.07)_0%,transparent_70%)]" />
            </div>

            <div className="relative z-10 text-center px-6">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-corporate font-bold tracking-[0.3em] uppercase text-[10px] mb-3 block"
                >
                    Srikara Logistics
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-black tracking-tighter text-black mb-4"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-black/60 text-sm md:text-base max-w-xl mx-auto font-medium"
                >
                    {subtitle}
                </motion.p>
            </div>
        </div>
    );
};

export default HeroSmall;
