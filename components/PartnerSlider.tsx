"use client";

import React from "react";
import { motion } from "framer-motion";

const PartnerSlider = () => {
    const logos = Array.from({ length: 10 }, (_, i) => `/assets/par/p${i + 1}.png`);

    // Double the logos for seamless loop
    const duplicatedLogos = [...logos, ...logos];

    return (
        <section className="relative z-40 py-24 bg-white overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-[1px] bg-corporate"></div>
                    <h2 className="text-black font-bold tracking-[0.3em] uppercase text-xs">
                        Trusted Partners & Clients
                    </h2>
                </div>
                <p className="text-gray-500 text-sm mt-2 max-w-xl">
                    Powering mobility for India&apos;s leading corporate ecosystems and technological leaders since 2012.
                </p>
            </div>

            <div className="relative flex">
                {/* Left and Right Gradients for Fade Effect */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-16 items-center whitespace-nowrap"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {duplicatedLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="w-32 md:w-40 flex-shrink-0 transition-all duration-500 hover:scale-110"
                        >
                            <img
                                src={logo}
                                alt={`Partner ${index + 1}`}
                                className="w-full h-auto object-contain max-h-12"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PartnerSlider;
