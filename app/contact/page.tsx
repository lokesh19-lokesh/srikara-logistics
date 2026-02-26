import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSmall from "@/components/HeroSmall";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Contact Us & Location",
    description: "Get in touch with Srikara Logistics headquarters in Nankramguda. Find our contact details for corporate transport and logistics inquiries.",
};

export default function Contact() {
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Srikara Logistics",
        "image": "https://srikaralogistics.com/assets/logo.png",
        "telephone": "+91-88979-25656",
        "email": "info@srikaralogistics.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Plot no 112, TNGOS Colony, Behind Q-city, Nankramguda",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "500032",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "17.4191",
            "longitude": "78.3444"
        },
        "url": "https://srikaralogistics.com/contact"
    };

    return (
        <main className="bg-[#f8f9fa] min-h-screen">
            <Script
                id="contact-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />
            <Navbar />
            <HeroSmall title="Let's Connect" subtitle="Elevate your corporate mobility standards. Our team is ready to design your ideal logistics ecosystem." />

            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-black mb-12 italic">
                            Corporate <span className="text-corporate">Headquarters.</span>
                        </h2>

                        <div className="space-y-10">
                            <div className="flex items-start gap-6 group">
                                <div className="p-4 rounded-2xl bg-white border border-black/10 group-hover:border-corporate/50 transition-all shadow-sm">
                                    <MapPin className="text-corporate" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-black font-bold mb-2">Location</h3>
                                    <p className="text-black/60 leading-relaxed">
                                        Plot no 112, TNGOS Colony, <br />
                                        My Home Vihanga Road, <br />
                                        Behind Q-city, Nankramguda.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-4 rounded-2xl bg-white border border-black/10 group-hover:border-corporate/50 transition-all shadow-sm">
                                    <Phone className="text-corporate" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-black font-bold mb-2">Connect</h3>
                                    <p className="text-black/60">+91 88979 25656</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-4 rounded-2xl bg-white border border-black/10 group-hover:border-corporate/50 transition-all shadow-sm">
                                    <Mail className="text-corporate" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-black font-bold mb-2">Inquiries</h3>
                                    <p className="text-black/60">info@srikaralogistics.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-10 rounded-3xl bg-white border border-black/10 h-fit shadow-sm">
                        <h3 className="text-2xl font-bold text-black mb-8 italic">Request a Proposal</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-black/40 font-bold ml-1">Full Name</label>
                                    <input type="text" className="w-full bg-[#f8f9fa] border border-black/10 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-corporate transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-black/40 font-bold ml-1">Work Email</label>
                                    <input type="email" className="w-full bg-[#f8f9fa] border border-black/10 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-corporate transition-all" placeholder="john@company.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-black/40 font-bold ml-1">Corporate Service</label>
                                <select className="w-full bg-[#f8f9fa] border border-black/10 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-corporate transition-all appearance-none cursor-pointer">
                                    <option className="bg-white">Employee Transport</option>
                                    <option className="bg-white">Fleet Management</option>
                                    <option className="bg-white">Executive Travel</option>
                                    <option className="bg-white">Other Inquiries</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-black/40 font-bold ml-1">Message</label>
                                <textarea rows={4} className="w-full bg-[#f8f9fa] border border-black/10 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-corporate transition-all resize-none" placeholder="Tell us about your logistics needs..."></textarea>
                            </div>
                            <button className="w-full bg-corporate text-white py-4 rounded-xl font-bold text-sm tracking-tight hover:bg-corporate/80 transition-all flex items-center justify-center gap-2 group">
                                Send Proposal Request
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Interactive Map */}
                <div className="mt-24 rounded-[2rem] overflow-hidden border border-black/10 bg-white h-[400px] md:h-[500px] relative group shadow-sm">
                    <div className="absolute inset-0 bg-corporate/5 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                    <iframe
                        src="https://www.google.com/maps?q=Plot+no+112,TNGOS+Colony,My+Home+Vihanga+Road,Behind+Q-city,Nankramguda&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="relative z-0 opacity-80 group-hover:opacity-100 transition-all duration-700"
                    ></iframe>
                </div>
            </section>

            <Footer />
        </main>
    );
}
