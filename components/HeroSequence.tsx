"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

const HeroSequence = ({ children }: { children?: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Configuration
    const frameCount = 240;

    // Create an array of image paths
    const getImagePath = (index: number) => {
        const frameNumber = (index + 1).toString().padStart(3, "0");
        return `/assets/hero-sequence/ezgif-frame-${frameNumber}.jpg`;
    };

    // Preload images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = getImagePath(i);
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setIsLoaded(true);
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    // Scroll logic
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Use spring for smoother frame transitions
    const smoothScrollProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const frameIndex = useTransform(smoothScrollProgress, [0, 1], [0, frameCount - 1]);

    // Render logic
    useEffect(() => {
        if (!canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        if (!context) return;

        const render = () => {
            const index = Math.floor(frameIndex.get());
            const image = images[index];

            if (image) {
                // Clear canvas
                context.clearRect(0, 0, canvas.width, canvas.height);

                // Calculate aspect ratio for "cover" effect
                const canvasAspect = canvas.width / canvas.height;
                const imageAspect = image.width / image.height;
                let drawWidth, drawHeight, offsetX, offsetY;

                if (canvasAspect > imageAspect) {
                    drawWidth = canvas.width;
                    drawHeight = canvas.width / imageAspect;
                    offsetX = 0;
                    offsetY = (canvas.height - drawHeight) / 2;
                } else {
                    drawWidth = canvas.height * imageAspect;
                    drawHeight = canvas.height;
                    offsetX = (canvas.width - drawWidth) / 2;
                    offsetY = 0;
                }

                context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
            }

            requestAnimationFrame(render);
        };

        const animationId = requestAnimationFrame(render);

        const handleResize = () => {
            canvas.width = window.innerWidth * window.devicePixelRatio;
            canvas.height = window.innerHeight * window.devicePixelRatio;
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
        };
    }, [images, frameIndex]);

    return (
        <div ref={containerRef} className="relative h-[500vh] w-full bg-[#f8f9fa]">
            <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover"
                    style={{
                        opacity: isLoaded ? 1 : 0,
                        transition: "opacity 1s ease-in-out",
                    }}
                />

                {/* Cinematic Radial Gradient Background Overlay */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "radial-gradient(circle at center, transparent 20%, rgba(248, 249, 250, 0.5) 60%, rgba(248, 249, 250, 0.75) 85%, #f8f9fa 100%)"
                    }}
                />

                {/* Content Overlay - Scales/Scrolls with Sticky Container */}
                {children}
            </div>
        </div>
    );
};

export default HeroSequence;
