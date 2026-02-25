import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSmall from "@/components/HeroSmall";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
    title: "About Our Logistics Excellence",
    description: "Discover the history and mission of Srikara Logistics. Providing reliable corporate transport and mobility solutions in Hyderabad since 2012.",
};

export default function About() {
    const values = [
        { title: "Reliability", description: "Our operations are built on a foundation of unyielding consistency." },
        { title: "Safety", description: "We prioritize the well-being of every passenger and driver above all else." },
        { title: "Innovation", description: "Utilizing advanced technology to optimize routes and fleet performance." },
        { title: "Excellence", description: "Striving for perfection in every journey, every day." }
    ];

    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "description": "Information about Srikara Logistics, a corporate mobility leader in Hyderabad.",
        "mainEntity": {
            "@type": "Organization",
            "name": "Srikara Logistics",
            "foundingDate": "2012",
            "location": {
                "@type": "Place",
                "address": "Plot no 112, TNGOS Colony, Nankramguda, Hyderabad"
            }
        }
    };

    return (
        <main className="bg-[#050505] min-h-screen">
            <Script
                id="about-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
            />
            <Navbar />
            <HeroSmall title="About Us" subtitle="Commitment to Excellence. Corporate mobility solutions engineered for reliability, safety, and scale." />

            <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-8">
                            Driving the Future of <br />
                            <span className="text-corporate">Corporate Mobility.</span>
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-8 drop-shadow-sm">
                            Established in 2012, Srikara Logistics has grown to become a leader in the corporate transportation sector in Hyderabad. We understand that efficient mobility is the heartbeat of any thriving organization.
                        </p>
                        <p className="text-white/80 text-lg leading-relaxed drop-shadow-sm">
                            Our mission is to provide seamless, safe, and scalable transport solutions that empower businesses to focus on what they do best, while we handle the logistics of moving their most valuable assets—their people.
                        </p>
                    </div>
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
                        <div className="text-white/20 font-black text-4xl italic">Srikara Logistics</div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-32">
                    {values.map((v, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-corporate/50 transition-all group">
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-corporate transition-colors">{v.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">{v.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
