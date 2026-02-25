import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSmall from "@/components/HeroSmall";
import Footer from "@/components/Footer";
import GalleryClient from "@/components/GalleryClient";

export const metadata: Metadata = {
    title: "Portfolio & Fleet Gallery",
    description: "Explore the Srikara Logistics fleet and operational highlights in our visual gallery. Showcasing corporate mobility in action.",
};

export default function Gallery() {
    return (
        <main className="bg-[#050505] min-h-screen">
            <Navbar />
            <HeroSmall title="Visual Showcase" subtitle="A glimpse into the engineering and scale of Srikara Logistics operations." />

            <GalleryClient />

            <Footer />
        </main>
    );
}
