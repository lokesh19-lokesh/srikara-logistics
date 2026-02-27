"use client";

import React from "react";
import { motion } from "framer-motion";

interface AboutClientProps {
    stats: { label: string; value: string }[];
    values: { title: string; description: string }[];
}

export default function AboutClient({ stats, values }: AboutClientProps) {
    return (
        <>
            {/* Stats Section */}
            <section className="bg-[#f8f9fa] border-b border-black/5 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-6xl font-black text-black tracking-tighter mb-2 italic">
                                    {stat.value}
                                </div>
                                <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-corporate">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="max-w-7xl mx-auto px-6 py-24 md:py-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black mb-10 leading-[0.9]">
                            Driving the Future of <br />
                            <span className="text-corporate">Corporate Mobility.</span>
                        </h2>
                        <div className="space-y-6 text-black/70 text-lg leading-relaxed font-medium">
                            <p>
                                Established in 2012, Srikara Logistics has emerged as a titan in the corporate transportation sector within Hyderabad's rapidly evolving technological landscape.
                            </p>
                            <p>
                                We specialize in high-end, scalable fleet management that bridges the gap between massive workforce demands and seamless daily execution. Our systems are built for reliability, ensuring that the wheels of your enterprise never stop turning.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-[4/5] lg:aspect-square rounded-[2.5rem] overflow-hidden bg-[#f0f2f5] border border-black/10 group shadow-2xl"
                    >
                        <div className="absolute inset-x-0 bottom-0 p-12 z-20">
                            <div className="text-white font-black text-6xl md:text-8xl italic tracking-tighter opacity-10 leading-none">
                                SRIKARA
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
                        <div className="absolute inset-0 flex items-center justify-center p-12">
                            <div className="w-full h-full bg-white/10 backdrop-blur-3xl rounded-[2rem] border border-white/20 flex flex-col justify-end p-8 md:p-12">
                                <span className="text-white font-bold tracking-[0.2em] uppercase text-xs mb-4">Operations Center</span>
                                <h3 className="text-white text-3xl md:text-4xl font-black tracking-tighter leading-tight">
                                    Strategic Mobility for Modern Enterprises.
                                </h3>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="bg-corporate py-24 md:py-40 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.03] -skew-x-12 translate-x-1/2 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-60 mb-6">Our Mission</div>
                            <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 italic">Engineered <br />for Agility.</h3>
                            <p className="text-white/70 text-lg leading-relaxed font-medium">
                                To provide seamless, safe, and scalable transport solutions that empower businesses to focus on growth, while we handle the intricate logistics of moving their most valuable assets—their people.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-60 mb-6">Our Vision</div>
                            <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 italic">The Standard <br />for Excellence.</h3>
                            <p className="text-white/70 text-lg leading-relaxed font-medium">
                                To become the definitive benchmark for corporate mobility in India, driving innovation through intelligence and setting unprecedented standards for safety and operational transparency.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="max-w-7xl mx-auto px-6 py-24 md:py-40">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black mb-6">
                        Core <span className="text-corporate">Principles.</span>
                    </h2>
                    <p className="text-black/50 max-w-2xl mx-auto font-medium">
                        The pillars upon which we build every journey and partnership.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-[2rem] bg-white border border-black/5 hover:border-corporate/20 transition-all group shadow-sm hover:shadow-xl hover:-translate-y-2 duration-500"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-[#f8f9fa] border border-black/5 flex items-center justify-center mb-8 group-hover:bg-corporate group-hover:text-white transition-all duration-500">
                                <span className="font-black text-xl italic">{i + 1}</span>
                            </div>
                            <h3 className="text-2xl font-black text-black mb-4 tracking-tighter italic">{v.title}</h3>
                            <p className="text-black/50 text-sm leading-relaxed font-medium">{v.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
}
