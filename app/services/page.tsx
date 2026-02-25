import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSmall from "@/components/HeroSmall";
import Footer from "@/components/Footer";
import { Truck, Users, ShieldCheck, Clock } from "lucide-react";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Corporate Transport Services",
    description: "Comprehensive mobility solutions including Employee Transportation, Premium Car Rentals, and Tour & Travels for modern enterprises.",
};

export default function Services() {
    const services = [
        {
            icon: Users,
            title: "Employee Transportation",
            description: "Scalable, punctual, and safe daily transportation solutions for your workforce across India's tech hubs."
        },
        {
            icon: Truck,
            title: "Car Rental",
            description: "Premium corporate car rental services with a diverse fleet of well-maintained vehicles and professional chauffeurs."
        },
        {
            icon: ShieldCheck,
            title: "Tour & Travels",
            description: "Curated travel experiences and logistics for corporate groups, events, and leisure trips."
        },
        {
            icon: Clock,
            title: "Corporate Logistics",
            description: "End-to-end management of complex logistics requirements, ensuring efficiency and reliability at every step."
        }
    ];

    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": services.map((s, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
                "@type": "Service",
                "name": s.title,
                "description": s.description,
                "provider": {
                    "@type": "Organization",
                    "name": "Srikara Logistics"
                }
            }
        }))
    };

    return (
        <main className="bg-[#f8f9fa] min-h-screen">
            <Script
                id="services-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
            />
            <Navbar />
            <HeroSmall title="Our Services" subtitle="Integrated mobility solutions designed for the modern enterprise." />

            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="p-10 rounded-3xl bg-white border border-black/10 flex flex-col items-start hover:border-corporate/40 transition-all group shadow-sm">
                            <div className="p-4 rounded-2xl bg-corporate/10 border border-corporate/20 text-corporate mb-8 group-hover:scale-110 transition-transform">
                                <s.icon size={32} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 italic tracking-tight">{s.title}</h2>
                            <p className="text-black/60 text-lg leading-relaxed max-w-lg">
                                {s.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-24 p-12 rounded-3xl bg-gradient-to-r from-corporate/10 to-cyan/10 border border-corporate/20 text-center">
                    <h3 className="text-black font-bold text-2xl mb-4 italic">Need a custom logistics plan?</h3>
                    <p className="text-black/60 mb-8 max-w-xl mx-auto">Our experts will design a mobility ecosystem tailored specifically to your organization's unique requirements.</p>
                    <Link href="/contact" className="inline-block bg-corporate text-white px-8 py-4 rounded-full font-bold text-sm tracking-tight hover:bg-corporate/80 transition-all">Get in Touch</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
