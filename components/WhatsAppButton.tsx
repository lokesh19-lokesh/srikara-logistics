"use client";

import React from "react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
    const phoneNumber = "+918897925656";
    const message = "Hello Srikara Logistics, I would like to inquire about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed bottom-8 right-8 z-[60]"
        >
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center group"
            >
                {/* Pulse Ripples */}
                <span className="absolute inset-0 rounded-full bg-[#25D366]/20 scale-100 group-hover:scale-150 transition-transform duration-700 animate-pulse"></span>
                <span className="absolute inset-x-[-8px] inset-y-[-8px] rounded-full border border-[#25D366]/10 scale-100 group-hover:scale-125 transition-transform duration-500 delay-75"></span>

                {/* Main Button */}
                <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-[#25D366]/30 flex items-center justify-center hover:bg-[#20bd5a] transition-all hover:scale-110 active:scale-95 group">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        fill="currentColor"
                        className="w-7 h-7"
                    >
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.7 69.4 27 106.1 27 122.4 0 222-99.6 222-222 0-59.3-23.2-115-64.9-157zM223.9 446c-33.1 0-65.7-8.9-94.1-25.7l-6.7-4-69.8 18.3L72 365.4l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.5-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54.1 81.2 54.1 130.4 0 101.7-82.8 184.5-184.5 184.5zm103.5-141.6c-5.7-2.8-33.6-16.6-38.9-18.5-5.2-1.9-9.1-2.9-12.9 2.9-3.8 5.7-14.7 18.5-18.1 22.4-3.3 3.8-6.7 4.3-12.4 1.4-5.7-2.8-23.9-8.8-45.6-28.2-16.9-15.1-28.3-33.7-31.6-39.4-3.3-5.7-.4-8.8 2.5-11.6 2.6-2.5 5.7-6.6 8.6-10 2.8-3.3 3.8-5.7 5.7-9.5 1.9-3.8 .9-7.1-.5-10-1.4-2.8-12.9-31.1-17.6-42.5-4.7-11.4-9.4-9.8-12.9-10-3.3-.2-7.1-.2-10.9-.2s-10 1.4-15.2 7.1c-5.2 5.7-20 19.5-20 47.6s20.5 55.2 23.3 59c2.8 3.8 40.2 61.5 97.4 86.2 13.6 5.8 24.3 9.3 32.6 12 13.7 4.3 26.2 3.7 36.1 2.2 11-1.7 33.6-13.7 38.3-27 4.7-13.3 4.7-24.7 3.3-27-1.4-2.4-5.2-3.8-10.9-6.6z" />
                    </svg>

                    {/* Tooltip */}
                    <div className="absolute right-full mr-4 bg-white text-[#25D366] px-4 py-2 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap">
                        Chat with us
                        <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 border-[6px] border-transparent border-l-white"></div>
                    </div>
                </div>
            </a>
        </motion.div>
    );
};

export default WhatsAppButton;
