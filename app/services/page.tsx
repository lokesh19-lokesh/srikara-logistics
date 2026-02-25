import Navbar from "@/components/Navbar";
import HeroSmall from "@/components/HeroSmall";
import Footer from "@/components/Footer";
import { Truck, Users, ShieldCheck, Clock } from "lucide-react";

export default function Services() {
    const services = [
        {
            icon: Users,
            title: "Employee Transport",
            description: "Scalable, punctual, and safe daily transportation solutions for your workforce across Hyderabad."
        },
        {
            icon: Truck,
            title: "Fleet Management",
            description: "Comprehensive management of transport assets including maintenance, tracking, and optimization."
        },
        {
            icon: ShieldCheck,
            title: "Executive Travel",
            description: "Premium, discreet, and luxury mobility for corporate leaders and visiting delegates."
        },
        {
            icon: Clock,
            title: "24/7 Logistics Support",
            description: "Our command center never sleeps, ensuring round-the-clock monitoring and support for all operations."
        }
    ];

    return (
        <main className="bg-[#050505] min-h-screen">
            <Navbar />
            <HeroSmall title="Our Services" subtitle="Integrated mobility solutions designed for the modern enterprise." />

            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="p-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-start hover:bg-white/[0.07] transition-all group">
                            <div className="p-4 rounded-2xl bg-corporate/10 border border-corporate/20 text-corporate mb-8 group-hover:scale-110 transition-transform">
                                <s.icon size={32} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 italic tracking-tight drop-shadow-md">{s.title}</h2>
                            <p className="text-white/80 text-lg leading-relaxed max-w-lg drop-shadow-sm">
                                {s.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-24 p-12 rounded-3xl bg-gradient-to-r from-corporate/20 to-cyan/10 border border-white/10 text-center">
                    <h3 className="text-white font-bold text-2xl mb-4 italic">Need a custom logistics plan?</h3>
                    <p className="text-white/60 mb-8 max-w-xl mx-auto">Our experts will design a mobility ecosystem tailored specifically to your organization's unique requirements.</p>
                    <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-tight hover:bg-white/90 transition-all">Get in Touch</button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
